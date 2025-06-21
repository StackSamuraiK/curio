import { Request, Response, NextFunction } from 'express';
import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import fs from 'fs';

declare global {
  namespace Express {
    interface Request {
      fileUrl?: string;
      fileType?: 'image' | 'pdf';
    }
  }
}

// Create uploads directory if it doesn't exist
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

// Create subdirectories for better organization
const createSubDirectories = () => {
  const subdirs = ['images', 'pdfs'];
  subdirs.forEach(subdir => {
    const dirPath = path.join('./uploads', subdir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
  });
};

createSubDirectories();

const storage = multer.diskStorage({
  destination: function(req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
    // Organize files by type
    const subfolder = file.mimetype.startsWith('image/') ? 'images' : 'pdfs';
    cb(null, `uploads/${subfolder}/`);
  },
  filename: function(req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) {
    const fileType = file.mimetype.startsWith('image/') ? 'image' : 'pdf';
    const uniqueFilename = `${fileType}-${Date.now()}-${Math.round(Math.random() * 1E9)}${path.extname(file.originalname)}`;
    cb(null, uniqueFilename);
  }
});

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const allowedMimeTypes = [
    // Image types
    'image/jpeg',
    'image/jpg', 
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml',
    // PDF type
    'application/pdf'
  ];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
    (req as any).fileValidationError = 'Invalid file type! Please upload only images (JPEG, PNG, GIF, WebP, SVG) or PDF files.';
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10 // 10MB limit (increased for PDFs)
  },
  fileFilter: fileFilter
});

export const uploadFile = (req: Request, res: Response, next: NextFunction): void => {
  upload.single('file')(req, res, function(err: any) {
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({ error: 'File too large! Maximum size is 10MB.' });
      }
      return res.status(400).json({ error: err.message });
    } else if (err) {
      return res.status(400).json({ error: err.message });
    }
    
    if ((req as any).fileValidationError) {
      return res.status(400).json({ error: (req as any).fileValidationError });
    }
    
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    // Determine file type
    const fileType = req.file.mimetype.startsWith('image/') ? 'image' : 'pdf';
    
    // Construct file URL
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const subfolder = fileType === 'image' ? 'images' : 'pdfs';
    const fileUrl = `${baseUrl}/uploads/${subfolder}/${req.file.filename}`;
    
    // Attach to request object
    req.fileUrl = fileUrl;
    req.fileType = fileType;
    
    next();
  });
};

// Separate middlewares for specific file types (optional)
export const uploadImageOnly = (req: Request, res: Response, next: NextFunction): void => {
  const imageOnlyFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(null, false);
      (req as any).fileValidationError = 'Not an image! Please upload only images.';
    }
  };

  const imageUpload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // 5MB for images
    fileFilter: imageOnlyFilter
  });

  imageUpload.single('image')(req, res, function(err: any) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    
    if ((req as any).fileValidationError) {
      return res.status(400).json({ error: (req as any).fileValidationError });
    }
    
    if (!req.file) {
      return res.status(400).json({ error: 'No image uploaded' });
    }
    
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    req.fileUrl = `${baseUrl}/uploads/images/${req.file.filename}`;
    req.fileType = 'image';
    
    next();
  });
};

export const uploadPDFOnly = (req: Request, res: Response, next: NextFunction): void => {
  const pdfOnlyFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(null, false);
      (req as any).fileValidationError = 'Not a PDF! Please upload only PDF files.';
    }
  };

  const pdfUpload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 10 }, // 10MB for PDFs
    fileFilter: pdfOnlyFilter
  });

  pdfUpload.single('pdf')(req, res, function(err: any) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    
    if ((req as any).fileValidationError) {
      return res.status(400).json({ error: (req as any).fileValidationError });
    }
    
    if (!req.file) {
      return res.status(400).json({ error: 'No PDF uploaded' });
    }
    
    const baseUrl = `${req.protocol}://${req.get('host')}`;
    req.fileUrl = `${baseUrl}/uploads/pdfs/${req.file.filename}`;
    req.fileType = 'pdf';
    
    next();
  });
};

// TODO: Cloud Storage Implementation
// When ready to implement cloud storage (AWS S3, Google Cloud Storage, etc.):
// 1. Replace multer.diskStorage with multer.memoryStorage()
// 2. Add cloud upload logic in the middleware
// 3. Return cloud URLs instead of local file paths
// 4. Implement proper error handling for cloud operations
// 5. Add environment variables for cloud credentials

/*

import { S3 } from 'aws-sdk';

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const uploadToS3 = async (file: Express.Multer.File, fileType: string) => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `${fileType}s/${Date.now()}-${file.originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: 'public-read'
  };
  
  const result = await s3.upload(params).promise();
  return result.Location;
};
*/