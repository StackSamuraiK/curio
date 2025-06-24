
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Video_Details
 * 
 */
export type Video_Details = $Result.DefaultSelection<Prisma.$Video_DetailsPayload>
/**
 * Model Student_Notes
 * 
 */
export type Student_Notes = $Result.DefaultSelection<Prisma.$Student_NotesPayload>
/**
 * Model Teacher_Notes
 * 
 */
export type Teacher_Notes = $Result.DefaultSelection<Prisma.$Teacher_NotesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video_Details`: Exposes CRUD operations for the **Video_Details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Video_Details
    * const video_Details = await prisma.video_Details.findMany()
    * ```
    */
  get video_Details(): Prisma.Video_DetailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student_Notes`: Exposes CRUD operations for the **Student_Notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Student_Notes
    * const student_Notes = await prisma.student_Notes.findMany()
    * ```
    */
  get student_Notes(): Prisma.Student_NotesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher_Notes`: Exposes CRUD operations for the **Teacher_Notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teacher_Notes
    * const teacher_Notes = await prisma.teacher_Notes.findMany()
    * ```
    */
  get teacher_Notes(): Prisma.Teacher_NotesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Student: 'Student',
    Teacher: 'Teacher',
    Video_Details: 'Video_Details',
    Student_Notes: 'Student_Notes',
    Teacher_Notes: 'Teacher_Notes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "student" | "teacher" | "video_Details" | "student_Notes" | "teacher_Notes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Video_Details: {
        payload: Prisma.$Video_DetailsPayload<ExtArgs>
        fields: Prisma.Video_DetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Video_DetailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Video_DetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Video_DetailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Video_DetailsPayload>
          }
          findFirst: {
            args: Prisma.Video_DetailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Video_DetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Video_DetailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Video_DetailsPayload>
          }
          findMany: {
            args: Prisma.Video_DetailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Video_DetailsPayload>[]
          }
          create: {
            args: Prisma.Video_DetailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Video_DetailsPayload>
          }
          createMany: {
            args: Prisma.Video_DetailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Video_DetailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Video_DetailsPayload>[]
          }
          delete: {
            args: Prisma.Video_DetailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Video_DetailsPayload>
          }
          update: {
            args: Prisma.Video_DetailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Video_DetailsPayload>
          }
          deleteMany: {
            args: Prisma.Video_DetailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Video_DetailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Video_DetailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Video_DetailsPayload>[]
          }
          upsert: {
            args: Prisma.Video_DetailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Video_DetailsPayload>
          }
          aggregate: {
            args: Prisma.Video_DetailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo_Details>
          }
          groupBy: {
            args: Prisma.Video_DetailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Video_DetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Video_DetailsCountArgs<ExtArgs>
            result: $Utils.Optional<Video_DetailsCountAggregateOutputType> | number
          }
        }
      }
      Student_Notes: {
        payload: Prisma.$Student_NotesPayload<ExtArgs>
        fields: Prisma.Student_NotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Student_NotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_NotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Student_NotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_NotesPayload>
          }
          findFirst: {
            args: Prisma.Student_NotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_NotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Student_NotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_NotesPayload>
          }
          findMany: {
            args: Prisma.Student_NotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_NotesPayload>[]
          }
          create: {
            args: Prisma.Student_NotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_NotesPayload>
          }
          createMany: {
            args: Prisma.Student_NotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Student_NotesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_NotesPayload>[]
          }
          delete: {
            args: Prisma.Student_NotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_NotesPayload>
          }
          update: {
            args: Prisma.Student_NotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_NotesPayload>
          }
          deleteMany: {
            args: Prisma.Student_NotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Student_NotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Student_NotesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_NotesPayload>[]
          }
          upsert: {
            args: Prisma.Student_NotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Student_NotesPayload>
          }
          aggregate: {
            args: Prisma.Student_NotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent_Notes>
          }
          groupBy: {
            args: Prisma.Student_NotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Student_NotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Student_NotesCountArgs<ExtArgs>
            result: $Utils.Optional<Student_NotesCountAggregateOutputType> | number
          }
        }
      }
      Teacher_Notes: {
        payload: Prisma.$Teacher_NotesPayload<ExtArgs>
        fields: Prisma.Teacher_NotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Teacher_NotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Teacher_NotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Teacher_NotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Teacher_NotesPayload>
          }
          findFirst: {
            args: Prisma.Teacher_NotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Teacher_NotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Teacher_NotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Teacher_NotesPayload>
          }
          findMany: {
            args: Prisma.Teacher_NotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Teacher_NotesPayload>[]
          }
          create: {
            args: Prisma.Teacher_NotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Teacher_NotesPayload>
          }
          createMany: {
            args: Prisma.Teacher_NotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Teacher_NotesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Teacher_NotesPayload>[]
          }
          delete: {
            args: Prisma.Teacher_NotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Teacher_NotesPayload>
          }
          update: {
            args: Prisma.Teacher_NotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Teacher_NotesPayload>
          }
          deleteMany: {
            args: Prisma.Teacher_NotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Teacher_NotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Teacher_NotesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Teacher_NotesPayload>[]
          }
          upsert: {
            args: Prisma.Teacher_NotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Teacher_NotesPayload>
          }
          aggregate: {
            args: Prisma.Teacher_NotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher_Notes>
          }
          groupBy: {
            args: Prisma.Teacher_NotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Teacher_NotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Teacher_NotesCountArgs<ExtArgs>
            result: $Utils.Optional<Teacher_NotesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    student?: StudentOmit
    teacher?: TeacherOmit
    video_Details?: Video_DetailsOmit
    student_Notes?: Student_NotesOmit
    teacher_Notes?: Teacher_NotesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    notes: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | StudentCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Student_NotesWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    video_details: number
    notes: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video_details?: boolean | TeacherCountOutputTypeCountVideo_detailsArgs
    notes?: boolean | TeacherCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountVideo_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Video_DetailsWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Teacher_NotesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    student_id: number | null
  }

  export type StudentSumAggregateOutputType = {
    student_id: number | null
  }

  export type StudentMinAggregateOutputType = {
    student_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    dob: Date | null
    photo_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    student_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    dob: Date | null
    photo_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StudentCountAggregateOutputType = {
    student_id: number
    first_name: number
    last_name: number
    email: number
    password: number
    dob: number
    photo_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    student_id?: true
  }

  export type StudentSumAggregateInputType = {
    student_id?: true
  }

  export type StudentMinAggregateInputType = {
    student_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    dob?: true
    photo_url?: true
    created_at?: true
    updated_at?: true
  }

  export type StudentMaxAggregateInputType = {
    student_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    dob?: true
    photo_url?: true
    created_at?: true
    updated_at?: true
  }

  export type StudentCountAggregateInputType = {
    student_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    dob?: true
    photo_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    student_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    dob: Date
    photo_url: string | null
    created_at: Date
    updated_at: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    dob?: boolean
    photo_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    notes?: boolean | Student$notesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    dob?: boolean
    photo_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    dob?: boolean
    photo_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    student_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    dob?: boolean
    photo_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"student_id" | "first_name" | "last_name" | "email" | "password" | "dob" | "photo_url" | "created_at" | "updated_at", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | Student$notesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      notes: Prisma.$Student_NotesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      student_id: number
      first_name: string
      last_name: string
      email: string
      password: string
      dob: Date
      photo_url: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `student_id`
     * const studentWithStudent_idOnly = await prisma.student.findMany({ select: { student_id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `student_id`
     * const studentWithStudent_idOnly = await prisma.student.createManyAndReturn({
     *   select: { student_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `student_id`
     * const studentWithStudent_idOnly = await prisma.student.updateManyAndReturn({
     *   select: { student_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notes<T extends Student$notesArgs<ExtArgs> = {}>(args?: Subset<T, Student$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Student_NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly student_id: FieldRef<"Student", 'Int'>
    readonly first_name: FieldRef<"Student", 'String'>
    readonly last_name: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly password: FieldRef<"Student", 'String'>
    readonly dob: FieldRef<"Student", 'DateTime'>
    readonly photo_url: FieldRef<"Student", 'String'>
    readonly created_at: FieldRef<"Student", 'DateTime'>
    readonly updated_at: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.notes
   */
  export type Student$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Notes
     */
    select?: Student_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Notes
     */
    omit?: Student_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_NotesInclude<ExtArgs> | null
    where?: Student_NotesWhereInput
    orderBy?: Student_NotesOrderByWithRelationInput | Student_NotesOrderByWithRelationInput[]
    cursor?: Student_NotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Student_NotesScalarFieldEnum | Student_NotesScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    teacher_id: number | null
  }

  export type TeacherSumAggregateOutputType = {
    teacher_id: number | null
  }

  export type TeacherMinAggregateOutputType = {
    teacher_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    dob: Date | null
    photo_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeacherMaxAggregateOutputType = {
    teacher_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    dob: Date | null
    photo_url: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeacherCountAggregateOutputType = {
    teacher_id: number
    first_name: number
    last_name: number
    email: number
    password: number
    dob: number
    photo_url: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    teacher_id?: true
  }

  export type TeacherSumAggregateInputType = {
    teacher_id?: true
  }

  export type TeacherMinAggregateInputType = {
    teacher_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    dob?: true
    photo_url?: true
    created_at?: true
    updated_at?: true
  }

  export type TeacherMaxAggregateInputType = {
    teacher_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    dob?: true
    photo_url?: true
    created_at?: true
    updated_at?: true
  }

  export type TeacherCountAggregateInputType = {
    teacher_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    dob?: true
    photo_url?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    teacher_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    dob: Date
    photo_url: string | null
    created_at: Date
    updated_at: Date
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teacher_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    dob?: boolean
    photo_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    video_details?: boolean | Teacher$video_detailsArgs<ExtArgs>
    notes?: boolean | Teacher$notesArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teacher_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    dob?: boolean
    photo_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teacher_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    dob?: boolean
    photo_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    teacher_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    dob?: boolean
    photo_url?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"teacher_id" | "first_name" | "last_name" | "email" | "password" | "dob" | "photo_url" | "created_at" | "updated_at", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    video_details?: boolean | Teacher$video_detailsArgs<ExtArgs>
    notes?: boolean | Teacher$notesArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      video_details: Prisma.$Video_DetailsPayload<ExtArgs>[]
      notes: Prisma.$Teacher_NotesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      teacher_id: number
      first_name: string
      last_name: string
      email: string
      password: string
      dob: Date
      photo_url: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `teacher_id`
     * const teacherWithTeacher_idOnly = await prisma.teacher.findMany({ select: { teacher_id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `teacher_id`
     * const teacherWithTeacher_idOnly = await prisma.teacher.createManyAndReturn({
     *   select: { teacher_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `teacher_id`
     * const teacherWithTeacher_idOnly = await prisma.teacher.updateManyAndReturn({
     *   select: { teacher_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    video_details<T extends Teacher$video_detailsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$video_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Video_DetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notes<T extends Teacher$notesArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Teacher_NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly teacher_id: FieldRef<"Teacher", 'Int'>
    readonly first_name: FieldRef<"Teacher", 'String'>
    readonly last_name: FieldRef<"Teacher", 'String'>
    readonly email: FieldRef<"Teacher", 'String'>
    readonly password: FieldRef<"Teacher", 'String'>
    readonly dob: FieldRef<"Teacher", 'DateTime'>
    readonly photo_url: FieldRef<"Teacher", 'String'>
    readonly created_at: FieldRef<"Teacher", 'DateTime'>
    readonly updated_at: FieldRef<"Teacher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.video_details
   */
  export type Teacher$video_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video_Details
     */
    select?: Video_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video_Details
     */
    omit?: Video_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Video_DetailsInclude<ExtArgs> | null
    where?: Video_DetailsWhereInput
    orderBy?: Video_DetailsOrderByWithRelationInput | Video_DetailsOrderByWithRelationInput[]
    cursor?: Video_DetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Video_DetailsScalarFieldEnum | Video_DetailsScalarFieldEnum[]
  }

  /**
   * Teacher.notes
   */
  export type Teacher$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher_Notes
     */
    select?: Teacher_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher_Notes
     */
    omit?: Teacher_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Teacher_NotesInclude<ExtArgs> | null
    where?: Teacher_NotesWhereInput
    orderBy?: Teacher_NotesOrderByWithRelationInput | Teacher_NotesOrderByWithRelationInput[]
    cursor?: Teacher_NotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Teacher_NotesScalarFieldEnum | Teacher_NotesScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Video_Details
   */

  export type AggregateVideo_Details = {
    _count: Video_DetailsCountAggregateOutputType | null
    _avg: Video_DetailsAvgAggregateOutputType | null
    _sum: Video_DetailsSumAggregateOutputType | null
    _min: Video_DetailsMinAggregateOutputType | null
    _max: Video_DetailsMaxAggregateOutputType | null
  }

  export type Video_DetailsAvgAggregateOutputType = {
    id: number | null
    teacher_id: number | null
  }

  export type Video_DetailsSumAggregateOutputType = {
    id: number | null
    teacher_id: number | null
  }

  export type Video_DetailsMinAggregateOutputType = {
    id: number | null
    teacher_id: number | null
    url: string | null
    title: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Video_DetailsMaxAggregateOutputType = {
    id: number | null
    teacher_id: number | null
    url: string | null
    title: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Video_DetailsCountAggregateOutputType = {
    id: number
    teacher_id: number
    url: number
    title: number
    description: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Video_DetailsAvgAggregateInputType = {
    id?: true
    teacher_id?: true
  }

  export type Video_DetailsSumAggregateInputType = {
    id?: true
    teacher_id?: true
  }

  export type Video_DetailsMinAggregateInputType = {
    id?: true
    teacher_id?: true
    url?: true
    title?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Video_DetailsMaxAggregateInputType = {
    id?: true
    teacher_id?: true
    url?: true
    title?: true
    description?: true
    created_at?: true
    updated_at?: true
  }

  export type Video_DetailsCountAggregateInputType = {
    id?: true
    teacher_id?: true
    url?: true
    title?: true
    description?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Video_DetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video_Details to aggregate.
     */
    where?: Video_DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Video_Details to fetch.
     */
    orderBy?: Video_DetailsOrderByWithRelationInput | Video_DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Video_DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Video_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Video_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Video_Details
    **/
    _count?: true | Video_DetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Video_DetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Video_DetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Video_DetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Video_DetailsMaxAggregateInputType
  }

  export type GetVideo_DetailsAggregateType<T extends Video_DetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo_Details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo_Details[P]>
      : GetScalarType<T[P], AggregateVideo_Details[P]>
  }




  export type Video_DetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Video_DetailsWhereInput
    orderBy?: Video_DetailsOrderByWithAggregationInput | Video_DetailsOrderByWithAggregationInput[]
    by: Video_DetailsScalarFieldEnum[] | Video_DetailsScalarFieldEnum
    having?: Video_DetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Video_DetailsCountAggregateInputType | true
    _avg?: Video_DetailsAvgAggregateInputType
    _sum?: Video_DetailsSumAggregateInputType
    _min?: Video_DetailsMinAggregateInputType
    _max?: Video_DetailsMaxAggregateInputType
  }

  export type Video_DetailsGroupByOutputType = {
    id: number
    teacher_id: number
    url: string
    title: string
    description: string
    created_at: Date
    updated_at: Date
    _count: Video_DetailsCountAggregateOutputType | null
    _avg: Video_DetailsAvgAggregateOutputType | null
    _sum: Video_DetailsSumAggregateOutputType | null
    _min: Video_DetailsMinAggregateOutputType | null
    _max: Video_DetailsMaxAggregateOutputType | null
  }

  type GetVideo_DetailsGroupByPayload<T extends Video_DetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Video_DetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Video_DetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Video_DetailsGroupByOutputType[P]>
            : GetScalarType<T[P], Video_DetailsGroupByOutputType[P]>
        }
      >
    >


  export type Video_DetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video_Details"]>

  export type Video_DetailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video_Details"]>

  export type Video_DetailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["video_Details"]>

  export type Video_DetailsSelectScalar = {
    id?: boolean
    teacher_id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type Video_DetailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacher_id" | "url" | "title" | "description" | "created_at" | "updated_at", ExtArgs["result"]["video_Details"]>
  export type Video_DetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type Video_DetailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type Video_DetailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $Video_DetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video_Details"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teacher_id: number
      url: string
      title: string
      description: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["video_Details"]>
    composites: {}
  }

  type Video_DetailsGetPayload<S extends boolean | null | undefined | Video_DetailsDefaultArgs> = $Result.GetResult<Prisma.$Video_DetailsPayload, S>

  type Video_DetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Video_DetailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Video_DetailsCountAggregateInputType | true
    }

  export interface Video_DetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video_Details'], meta: { name: 'Video_Details' } }
    /**
     * Find zero or one Video_Details that matches the filter.
     * @param {Video_DetailsFindUniqueArgs} args - Arguments to find a Video_Details
     * @example
     * // Get one Video_Details
     * const video_Details = await prisma.video_Details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Video_DetailsFindUniqueArgs>(args: SelectSubset<T, Video_DetailsFindUniqueArgs<ExtArgs>>): Prisma__Video_DetailsClient<$Result.GetResult<Prisma.$Video_DetailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video_Details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Video_DetailsFindUniqueOrThrowArgs} args - Arguments to find a Video_Details
     * @example
     * // Get one Video_Details
     * const video_Details = await prisma.video_Details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Video_DetailsFindUniqueOrThrowArgs>(args: SelectSubset<T, Video_DetailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Video_DetailsClient<$Result.GetResult<Prisma.$Video_DetailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video_Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Video_DetailsFindFirstArgs} args - Arguments to find a Video_Details
     * @example
     * // Get one Video_Details
     * const video_Details = await prisma.video_Details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Video_DetailsFindFirstArgs>(args?: SelectSubset<T, Video_DetailsFindFirstArgs<ExtArgs>>): Prisma__Video_DetailsClient<$Result.GetResult<Prisma.$Video_DetailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video_Details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Video_DetailsFindFirstOrThrowArgs} args - Arguments to find a Video_Details
     * @example
     * // Get one Video_Details
     * const video_Details = await prisma.video_Details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Video_DetailsFindFirstOrThrowArgs>(args?: SelectSubset<T, Video_DetailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Video_DetailsClient<$Result.GetResult<Prisma.$Video_DetailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Video_Details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Video_DetailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Video_Details
     * const video_Details = await prisma.video_Details.findMany()
     * 
     * // Get first 10 Video_Details
     * const video_Details = await prisma.video_Details.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const video_DetailsWithIdOnly = await prisma.video_Details.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Video_DetailsFindManyArgs>(args?: SelectSubset<T, Video_DetailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Video_DetailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video_Details.
     * @param {Video_DetailsCreateArgs} args - Arguments to create a Video_Details.
     * @example
     * // Create one Video_Details
     * const Video_Details = await prisma.video_Details.create({
     *   data: {
     *     // ... data to create a Video_Details
     *   }
     * })
     * 
     */
    create<T extends Video_DetailsCreateArgs>(args: SelectSubset<T, Video_DetailsCreateArgs<ExtArgs>>): Prisma__Video_DetailsClient<$Result.GetResult<Prisma.$Video_DetailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Video_Details.
     * @param {Video_DetailsCreateManyArgs} args - Arguments to create many Video_Details.
     * @example
     * // Create many Video_Details
     * const video_Details = await prisma.video_Details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Video_DetailsCreateManyArgs>(args?: SelectSubset<T, Video_DetailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Video_Details and returns the data saved in the database.
     * @param {Video_DetailsCreateManyAndReturnArgs} args - Arguments to create many Video_Details.
     * @example
     * // Create many Video_Details
     * const video_Details = await prisma.video_Details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Video_Details and only return the `id`
     * const video_DetailsWithIdOnly = await prisma.video_Details.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Video_DetailsCreateManyAndReturnArgs>(args?: SelectSubset<T, Video_DetailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Video_DetailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video_Details.
     * @param {Video_DetailsDeleteArgs} args - Arguments to delete one Video_Details.
     * @example
     * // Delete one Video_Details
     * const Video_Details = await prisma.video_Details.delete({
     *   where: {
     *     // ... filter to delete one Video_Details
     *   }
     * })
     * 
     */
    delete<T extends Video_DetailsDeleteArgs>(args: SelectSubset<T, Video_DetailsDeleteArgs<ExtArgs>>): Prisma__Video_DetailsClient<$Result.GetResult<Prisma.$Video_DetailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video_Details.
     * @param {Video_DetailsUpdateArgs} args - Arguments to update one Video_Details.
     * @example
     * // Update one Video_Details
     * const video_Details = await prisma.video_Details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Video_DetailsUpdateArgs>(args: SelectSubset<T, Video_DetailsUpdateArgs<ExtArgs>>): Prisma__Video_DetailsClient<$Result.GetResult<Prisma.$Video_DetailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Video_Details.
     * @param {Video_DetailsDeleteManyArgs} args - Arguments to filter Video_Details to delete.
     * @example
     * // Delete a few Video_Details
     * const { count } = await prisma.video_Details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Video_DetailsDeleteManyArgs>(args?: SelectSubset<T, Video_DetailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Video_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Video_DetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Video_Details
     * const video_Details = await prisma.video_Details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Video_DetailsUpdateManyArgs>(args: SelectSubset<T, Video_DetailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Video_Details and returns the data updated in the database.
     * @param {Video_DetailsUpdateManyAndReturnArgs} args - Arguments to update many Video_Details.
     * @example
     * // Update many Video_Details
     * const video_Details = await prisma.video_Details.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Video_Details and only return the `id`
     * const video_DetailsWithIdOnly = await prisma.video_Details.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Video_DetailsUpdateManyAndReturnArgs>(args: SelectSubset<T, Video_DetailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Video_DetailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video_Details.
     * @param {Video_DetailsUpsertArgs} args - Arguments to update or create a Video_Details.
     * @example
     * // Update or create a Video_Details
     * const video_Details = await prisma.video_Details.upsert({
     *   create: {
     *     // ... data to create a Video_Details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video_Details we want to update
     *   }
     * })
     */
    upsert<T extends Video_DetailsUpsertArgs>(args: SelectSubset<T, Video_DetailsUpsertArgs<ExtArgs>>): Prisma__Video_DetailsClient<$Result.GetResult<Prisma.$Video_DetailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Video_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Video_DetailsCountArgs} args - Arguments to filter Video_Details to count.
     * @example
     * // Count the number of Video_Details
     * const count = await prisma.video_Details.count({
     *   where: {
     *     // ... the filter for the Video_Details we want to count
     *   }
     * })
    **/
    count<T extends Video_DetailsCountArgs>(
      args?: Subset<T, Video_DetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Video_DetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Video_DetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Video_DetailsAggregateArgs>(args: Subset<T, Video_DetailsAggregateArgs>): Prisma.PrismaPromise<GetVideo_DetailsAggregateType<T>>

    /**
     * Group by Video_Details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Video_DetailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Video_DetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Video_DetailsGroupByArgs['orderBy'] }
        : { orderBy?: Video_DetailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Video_DetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideo_DetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video_Details model
   */
  readonly fields: Video_DetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video_Details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Video_DetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Video_Details model
   */
  interface Video_DetailsFieldRefs {
    readonly id: FieldRef<"Video_Details", 'Int'>
    readonly teacher_id: FieldRef<"Video_Details", 'Int'>
    readonly url: FieldRef<"Video_Details", 'String'>
    readonly title: FieldRef<"Video_Details", 'String'>
    readonly description: FieldRef<"Video_Details", 'String'>
    readonly created_at: FieldRef<"Video_Details", 'DateTime'>
    readonly updated_at: FieldRef<"Video_Details", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Video_Details findUnique
   */
  export type Video_DetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video_Details
     */
    select?: Video_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video_Details
     */
    omit?: Video_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Video_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Video_Details to fetch.
     */
    where: Video_DetailsWhereUniqueInput
  }

  /**
   * Video_Details findUniqueOrThrow
   */
  export type Video_DetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video_Details
     */
    select?: Video_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video_Details
     */
    omit?: Video_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Video_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Video_Details to fetch.
     */
    where: Video_DetailsWhereUniqueInput
  }

  /**
   * Video_Details findFirst
   */
  export type Video_DetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video_Details
     */
    select?: Video_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video_Details
     */
    omit?: Video_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Video_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Video_Details to fetch.
     */
    where?: Video_DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Video_Details to fetch.
     */
    orderBy?: Video_DetailsOrderByWithRelationInput | Video_DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Video_Details.
     */
    cursor?: Video_DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Video_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Video_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Video_Details.
     */
    distinct?: Video_DetailsScalarFieldEnum | Video_DetailsScalarFieldEnum[]
  }

  /**
   * Video_Details findFirstOrThrow
   */
  export type Video_DetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video_Details
     */
    select?: Video_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video_Details
     */
    omit?: Video_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Video_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Video_Details to fetch.
     */
    where?: Video_DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Video_Details to fetch.
     */
    orderBy?: Video_DetailsOrderByWithRelationInput | Video_DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Video_Details.
     */
    cursor?: Video_DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Video_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Video_Details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Video_Details.
     */
    distinct?: Video_DetailsScalarFieldEnum | Video_DetailsScalarFieldEnum[]
  }

  /**
   * Video_Details findMany
   */
  export type Video_DetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video_Details
     */
    select?: Video_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video_Details
     */
    omit?: Video_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Video_DetailsInclude<ExtArgs> | null
    /**
     * Filter, which Video_Details to fetch.
     */
    where?: Video_DetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Video_Details to fetch.
     */
    orderBy?: Video_DetailsOrderByWithRelationInput | Video_DetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Video_Details.
     */
    cursor?: Video_DetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Video_Details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Video_Details.
     */
    skip?: number
    distinct?: Video_DetailsScalarFieldEnum | Video_DetailsScalarFieldEnum[]
  }

  /**
   * Video_Details create
   */
  export type Video_DetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video_Details
     */
    select?: Video_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video_Details
     */
    omit?: Video_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Video_DetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a Video_Details.
     */
    data: XOR<Video_DetailsCreateInput, Video_DetailsUncheckedCreateInput>
  }

  /**
   * Video_Details createMany
   */
  export type Video_DetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Video_Details.
     */
    data: Video_DetailsCreateManyInput | Video_DetailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Video_Details createManyAndReturn
   */
  export type Video_DetailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video_Details
     */
    select?: Video_DetailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video_Details
     */
    omit?: Video_DetailsOmit<ExtArgs> | null
    /**
     * The data used to create many Video_Details.
     */
    data: Video_DetailsCreateManyInput | Video_DetailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Video_DetailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video_Details update
   */
  export type Video_DetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video_Details
     */
    select?: Video_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video_Details
     */
    omit?: Video_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Video_DetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a Video_Details.
     */
    data: XOR<Video_DetailsUpdateInput, Video_DetailsUncheckedUpdateInput>
    /**
     * Choose, which Video_Details to update.
     */
    where: Video_DetailsWhereUniqueInput
  }

  /**
   * Video_Details updateMany
   */
  export type Video_DetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Video_Details.
     */
    data: XOR<Video_DetailsUpdateManyMutationInput, Video_DetailsUncheckedUpdateManyInput>
    /**
     * Filter which Video_Details to update
     */
    where?: Video_DetailsWhereInput
    /**
     * Limit how many Video_Details to update.
     */
    limit?: number
  }

  /**
   * Video_Details updateManyAndReturn
   */
  export type Video_DetailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video_Details
     */
    select?: Video_DetailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video_Details
     */
    omit?: Video_DetailsOmit<ExtArgs> | null
    /**
     * The data used to update Video_Details.
     */
    data: XOR<Video_DetailsUpdateManyMutationInput, Video_DetailsUncheckedUpdateManyInput>
    /**
     * Filter which Video_Details to update
     */
    where?: Video_DetailsWhereInput
    /**
     * Limit how many Video_Details to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Video_DetailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Video_Details upsert
   */
  export type Video_DetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video_Details
     */
    select?: Video_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video_Details
     */
    omit?: Video_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Video_DetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the Video_Details to update in case it exists.
     */
    where: Video_DetailsWhereUniqueInput
    /**
     * In case the Video_Details found by the `where` argument doesn't exist, create a new Video_Details with this data.
     */
    create: XOR<Video_DetailsCreateInput, Video_DetailsUncheckedCreateInput>
    /**
     * In case the Video_Details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Video_DetailsUpdateInput, Video_DetailsUncheckedUpdateInput>
  }

  /**
   * Video_Details delete
   */
  export type Video_DetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video_Details
     */
    select?: Video_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video_Details
     */
    omit?: Video_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Video_DetailsInclude<ExtArgs> | null
    /**
     * Filter which Video_Details to delete.
     */
    where: Video_DetailsWhereUniqueInput
  }

  /**
   * Video_Details deleteMany
   */
  export type Video_DetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video_Details to delete
     */
    where?: Video_DetailsWhereInput
    /**
     * Limit how many Video_Details to delete.
     */
    limit?: number
  }

  /**
   * Video_Details without action
   */
  export type Video_DetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video_Details
     */
    select?: Video_DetailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video_Details
     */
    omit?: Video_DetailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Video_DetailsInclude<ExtArgs> | null
  }


  /**
   * Model Student_Notes
   */

  export type AggregateStudent_Notes = {
    _count: Student_NotesCountAggregateOutputType | null
    _avg: Student_NotesAvgAggregateOutputType | null
    _sum: Student_NotesSumAggregateOutputType | null
    _min: Student_NotesMinAggregateOutputType | null
    _max: Student_NotesMaxAggregateOutputType | null
  }

  export type Student_NotesAvgAggregateOutputType = {
    id: number | null
    student_id: number | null
  }

  export type Student_NotesSumAggregateOutputType = {
    id: number | null
    student_id: number | null
  }

  export type Student_NotesMinAggregateOutputType = {
    id: number | null
    student_id: number | null
    title: string | null
    description: string | null
    pdf: string | null
    file: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Student_NotesMaxAggregateOutputType = {
    id: number | null
    student_id: number | null
    title: string | null
    description: string | null
    pdf: string | null
    file: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Student_NotesCountAggregateOutputType = {
    id: number
    student_id: number
    title: number
    description: number
    pdf: number
    file: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Student_NotesAvgAggregateInputType = {
    id?: true
    student_id?: true
  }

  export type Student_NotesSumAggregateInputType = {
    id?: true
    student_id?: true
  }

  export type Student_NotesMinAggregateInputType = {
    id?: true
    student_id?: true
    title?: true
    description?: true
    pdf?: true
    file?: true
    created_at?: true
    updated_at?: true
  }

  export type Student_NotesMaxAggregateInputType = {
    id?: true
    student_id?: true
    title?: true
    description?: true
    pdf?: true
    file?: true
    created_at?: true
    updated_at?: true
  }

  export type Student_NotesCountAggregateInputType = {
    id?: true
    student_id?: true
    title?: true
    description?: true
    pdf?: true
    file?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Student_NotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student_Notes to aggregate.
     */
    where?: Student_NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Student_Notes to fetch.
     */
    orderBy?: Student_NotesOrderByWithRelationInput | Student_NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Student_NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Student_Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Student_Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Student_Notes
    **/
    _count?: true | Student_NotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Student_NotesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Student_NotesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Student_NotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Student_NotesMaxAggregateInputType
  }

  export type GetStudent_NotesAggregateType<T extends Student_NotesAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent_Notes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent_Notes[P]>
      : GetScalarType<T[P], AggregateStudent_Notes[P]>
  }




  export type Student_NotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Student_NotesWhereInput
    orderBy?: Student_NotesOrderByWithAggregationInput | Student_NotesOrderByWithAggregationInput[]
    by: Student_NotesScalarFieldEnum[] | Student_NotesScalarFieldEnum
    having?: Student_NotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Student_NotesCountAggregateInputType | true
    _avg?: Student_NotesAvgAggregateInputType
    _sum?: Student_NotesSumAggregateInputType
    _min?: Student_NotesMinAggregateInputType
    _max?: Student_NotesMaxAggregateInputType
  }

  export type Student_NotesGroupByOutputType = {
    id: number
    student_id: number
    title: string
    description: string
    pdf: string | null
    file: string | null
    created_at: Date
    updated_at: Date
    _count: Student_NotesCountAggregateOutputType | null
    _avg: Student_NotesAvgAggregateOutputType | null
    _sum: Student_NotesSumAggregateOutputType | null
    _min: Student_NotesMinAggregateOutputType | null
    _max: Student_NotesMaxAggregateOutputType | null
  }

  type GetStudent_NotesGroupByPayload<T extends Student_NotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Student_NotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Student_NotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Student_NotesGroupByOutputType[P]>
            : GetScalarType<T[P], Student_NotesGroupByOutputType[P]>
        }
      >
    >


  export type Student_NotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    title?: boolean
    description?: boolean
    pdf?: boolean
    file?: boolean
    created_at?: boolean
    updated_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_Notes"]>

  export type Student_NotesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    title?: boolean
    description?: boolean
    pdf?: boolean
    file?: boolean
    created_at?: boolean
    updated_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_Notes"]>

  export type Student_NotesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    title?: boolean
    description?: boolean
    pdf?: boolean
    file?: boolean
    created_at?: boolean
    updated_at?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_Notes"]>

  export type Student_NotesSelectScalar = {
    id?: boolean
    student_id?: boolean
    title?: boolean
    description?: boolean
    pdf?: boolean
    file?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type Student_NotesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "student_id" | "title" | "description" | "pdf" | "file" | "created_at" | "updated_at", ExtArgs["result"]["student_Notes"]>
  export type Student_NotesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type Student_NotesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type Student_NotesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $Student_NotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student_Notes"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      student_id: number
      title: string
      description: string
      pdf: string | null
      file: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["student_Notes"]>
    composites: {}
  }

  type Student_NotesGetPayload<S extends boolean | null | undefined | Student_NotesDefaultArgs> = $Result.GetResult<Prisma.$Student_NotesPayload, S>

  type Student_NotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Student_NotesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Student_NotesCountAggregateInputType | true
    }

  export interface Student_NotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student_Notes'], meta: { name: 'Student_Notes' } }
    /**
     * Find zero or one Student_Notes that matches the filter.
     * @param {Student_NotesFindUniqueArgs} args - Arguments to find a Student_Notes
     * @example
     * // Get one Student_Notes
     * const student_Notes = await prisma.student_Notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Student_NotesFindUniqueArgs>(args: SelectSubset<T, Student_NotesFindUniqueArgs<ExtArgs>>): Prisma__Student_NotesClient<$Result.GetResult<Prisma.$Student_NotesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student_Notes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Student_NotesFindUniqueOrThrowArgs} args - Arguments to find a Student_Notes
     * @example
     * // Get one Student_Notes
     * const student_Notes = await prisma.student_Notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Student_NotesFindUniqueOrThrowArgs>(args: SelectSubset<T, Student_NotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Student_NotesClient<$Result.GetResult<Prisma.$Student_NotesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_NotesFindFirstArgs} args - Arguments to find a Student_Notes
     * @example
     * // Get one Student_Notes
     * const student_Notes = await prisma.student_Notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Student_NotesFindFirstArgs>(args?: SelectSubset<T, Student_NotesFindFirstArgs<ExtArgs>>): Prisma__Student_NotesClient<$Result.GetResult<Prisma.$Student_NotesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_Notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_NotesFindFirstOrThrowArgs} args - Arguments to find a Student_Notes
     * @example
     * // Get one Student_Notes
     * const student_Notes = await prisma.student_Notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Student_NotesFindFirstOrThrowArgs>(args?: SelectSubset<T, Student_NotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Student_NotesClient<$Result.GetResult<Prisma.$Student_NotesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Student_Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_NotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Student_Notes
     * const student_Notes = await prisma.student_Notes.findMany()
     * 
     * // Get first 10 Student_Notes
     * const student_Notes = await prisma.student_Notes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const student_NotesWithIdOnly = await prisma.student_Notes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Student_NotesFindManyArgs>(args?: SelectSubset<T, Student_NotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Student_NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student_Notes.
     * @param {Student_NotesCreateArgs} args - Arguments to create a Student_Notes.
     * @example
     * // Create one Student_Notes
     * const Student_Notes = await prisma.student_Notes.create({
     *   data: {
     *     // ... data to create a Student_Notes
     *   }
     * })
     * 
     */
    create<T extends Student_NotesCreateArgs>(args: SelectSubset<T, Student_NotesCreateArgs<ExtArgs>>): Prisma__Student_NotesClient<$Result.GetResult<Prisma.$Student_NotesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Student_Notes.
     * @param {Student_NotesCreateManyArgs} args - Arguments to create many Student_Notes.
     * @example
     * // Create many Student_Notes
     * const student_Notes = await prisma.student_Notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Student_NotesCreateManyArgs>(args?: SelectSubset<T, Student_NotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Student_Notes and returns the data saved in the database.
     * @param {Student_NotesCreateManyAndReturnArgs} args - Arguments to create many Student_Notes.
     * @example
     * // Create many Student_Notes
     * const student_Notes = await prisma.student_Notes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Student_Notes and only return the `id`
     * const student_NotesWithIdOnly = await prisma.student_Notes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Student_NotesCreateManyAndReturnArgs>(args?: SelectSubset<T, Student_NotesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Student_NotesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student_Notes.
     * @param {Student_NotesDeleteArgs} args - Arguments to delete one Student_Notes.
     * @example
     * // Delete one Student_Notes
     * const Student_Notes = await prisma.student_Notes.delete({
     *   where: {
     *     // ... filter to delete one Student_Notes
     *   }
     * })
     * 
     */
    delete<T extends Student_NotesDeleteArgs>(args: SelectSubset<T, Student_NotesDeleteArgs<ExtArgs>>): Prisma__Student_NotesClient<$Result.GetResult<Prisma.$Student_NotesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student_Notes.
     * @param {Student_NotesUpdateArgs} args - Arguments to update one Student_Notes.
     * @example
     * // Update one Student_Notes
     * const student_Notes = await prisma.student_Notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Student_NotesUpdateArgs>(args: SelectSubset<T, Student_NotesUpdateArgs<ExtArgs>>): Prisma__Student_NotesClient<$Result.GetResult<Prisma.$Student_NotesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Student_Notes.
     * @param {Student_NotesDeleteManyArgs} args - Arguments to filter Student_Notes to delete.
     * @example
     * // Delete a few Student_Notes
     * const { count } = await prisma.student_Notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Student_NotesDeleteManyArgs>(args?: SelectSubset<T, Student_NotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_NotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Student_Notes
     * const student_Notes = await prisma.student_Notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Student_NotesUpdateManyArgs>(args: SelectSubset<T, Student_NotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_Notes and returns the data updated in the database.
     * @param {Student_NotesUpdateManyAndReturnArgs} args - Arguments to update many Student_Notes.
     * @example
     * // Update many Student_Notes
     * const student_Notes = await prisma.student_Notes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Student_Notes and only return the `id`
     * const student_NotesWithIdOnly = await prisma.student_Notes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Student_NotesUpdateManyAndReturnArgs>(args: SelectSubset<T, Student_NotesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Student_NotesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student_Notes.
     * @param {Student_NotesUpsertArgs} args - Arguments to update or create a Student_Notes.
     * @example
     * // Update or create a Student_Notes
     * const student_Notes = await prisma.student_Notes.upsert({
     *   create: {
     *     // ... data to create a Student_Notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student_Notes we want to update
     *   }
     * })
     */
    upsert<T extends Student_NotesUpsertArgs>(args: SelectSubset<T, Student_NotesUpsertArgs<ExtArgs>>): Prisma__Student_NotesClient<$Result.GetResult<Prisma.$Student_NotesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Student_Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_NotesCountArgs} args - Arguments to filter Student_Notes to count.
     * @example
     * // Count the number of Student_Notes
     * const count = await prisma.student_Notes.count({
     *   where: {
     *     // ... the filter for the Student_Notes we want to count
     *   }
     * })
    **/
    count<T extends Student_NotesCountArgs>(
      args?: Subset<T, Student_NotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Student_NotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student_Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_NotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Student_NotesAggregateArgs>(args: Subset<T, Student_NotesAggregateArgs>): Prisma.PrismaPromise<GetStudent_NotesAggregateType<T>>

    /**
     * Group by Student_Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_NotesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Student_NotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Student_NotesGroupByArgs['orderBy'] }
        : { orderBy?: Student_NotesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Student_NotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudent_NotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student_Notes model
   */
  readonly fields: Student_NotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student_Notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Student_NotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student_Notes model
   */
  interface Student_NotesFieldRefs {
    readonly id: FieldRef<"Student_Notes", 'Int'>
    readonly student_id: FieldRef<"Student_Notes", 'Int'>
    readonly title: FieldRef<"Student_Notes", 'String'>
    readonly description: FieldRef<"Student_Notes", 'String'>
    readonly pdf: FieldRef<"Student_Notes", 'String'>
    readonly file: FieldRef<"Student_Notes", 'String'>
    readonly created_at: FieldRef<"Student_Notes", 'DateTime'>
    readonly updated_at: FieldRef<"Student_Notes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student_Notes findUnique
   */
  export type Student_NotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Notes
     */
    select?: Student_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Notes
     */
    omit?: Student_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_NotesInclude<ExtArgs> | null
    /**
     * Filter, which Student_Notes to fetch.
     */
    where: Student_NotesWhereUniqueInput
  }

  /**
   * Student_Notes findUniqueOrThrow
   */
  export type Student_NotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Notes
     */
    select?: Student_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Notes
     */
    omit?: Student_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_NotesInclude<ExtArgs> | null
    /**
     * Filter, which Student_Notes to fetch.
     */
    where: Student_NotesWhereUniqueInput
  }

  /**
   * Student_Notes findFirst
   */
  export type Student_NotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Notes
     */
    select?: Student_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Notes
     */
    omit?: Student_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_NotesInclude<ExtArgs> | null
    /**
     * Filter, which Student_Notes to fetch.
     */
    where?: Student_NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Student_Notes to fetch.
     */
    orderBy?: Student_NotesOrderByWithRelationInput | Student_NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Student_Notes.
     */
    cursor?: Student_NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Student_Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Student_Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Student_Notes.
     */
    distinct?: Student_NotesScalarFieldEnum | Student_NotesScalarFieldEnum[]
  }

  /**
   * Student_Notes findFirstOrThrow
   */
  export type Student_NotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Notes
     */
    select?: Student_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Notes
     */
    omit?: Student_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_NotesInclude<ExtArgs> | null
    /**
     * Filter, which Student_Notes to fetch.
     */
    where?: Student_NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Student_Notes to fetch.
     */
    orderBy?: Student_NotesOrderByWithRelationInput | Student_NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Student_Notes.
     */
    cursor?: Student_NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Student_Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Student_Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Student_Notes.
     */
    distinct?: Student_NotesScalarFieldEnum | Student_NotesScalarFieldEnum[]
  }

  /**
   * Student_Notes findMany
   */
  export type Student_NotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Notes
     */
    select?: Student_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Notes
     */
    omit?: Student_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_NotesInclude<ExtArgs> | null
    /**
     * Filter, which Student_Notes to fetch.
     */
    where?: Student_NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Student_Notes to fetch.
     */
    orderBy?: Student_NotesOrderByWithRelationInput | Student_NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Student_Notes.
     */
    cursor?: Student_NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Student_Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Student_Notes.
     */
    skip?: number
    distinct?: Student_NotesScalarFieldEnum | Student_NotesScalarFieldEnum[]
  }

  /**
   * Student_Notes create
   */
  export type Student_NotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Notes
     */
    select?: Student_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Notes
     */
    omit?: Student_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_NotesInclude<ExtArgs> | null
    /**
     * The data needed to create a Student_Notes.
     */
    data: XOR<Student_NotesCreateInput, Student_NotesUncheckedCreateInput>
  }

  /**
   * Student_Notes createMany
   */
  export type Student_NotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Student_Notes.
     */
    data: Student_NotesCreateManyInput | Student_NotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student_Notes createManyAndReturn
   */
  export type Student_NotesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Notes
     */
    select?: Student_NotesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Notes
     */
    omit?: Student_NotesOmit<ExtArgs> | null
    /**
     * The data used to create many Student_Notes.
     */
    data: Student_NotesCreateManyInput | Student_NotesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_NotesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student_Notes update
   */
  export type Student_NotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Notes
     */
    select?: Student_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Notes
     */
    omit?: Student_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_NotesInclude<ExtArgs> | null
    /**
     * The data needed to update a Student_Notes.
     */
    data: XOR<Student_NotesUpdateInput, Student_NotesUncheckedUpdateInput>
    /**
     * Choose, which Student_Notes to update.
     */
    where: Student_NotesWhereUniqueInput
  }

  /**
   * Student_Notes updateMany
   */
  export type Student_NotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Student_Notes.
     */
    data: XOR<Student_NotesUpdateManyMutationInput, Student_NotesUncheckedUpdateManyInput>
    /**
     * Filter which Student_Notes to update
     */
    where?: Student_NotesWhereInput
    /**
     * Limit how many Student_Notes to update.
     */
    limit?: number
  }

  /**
   * Student_Notes updateManyAndReturn
   */
  export type Student_NotesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Notes
     */
    select?: Student_NotesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Notes
     */
    omit?: Student_NotesOmit<ExtArgs> | null
    /**
     * The data used to update Student_Notes.
     */
    data: XOR<Student_NotesUpdateManyMutationInput, Student_NotesUncheckedUpdateManyInput>
    /**
     * Filter which Student_Notes to update
     */
    where?: Student_NotesWhereInput
    /**
     * Limit how many Student_Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_NotesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student_Notes upsert
   */
  export type Student_NotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Notes
     */
    select?: Student_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Notes
     */
    omit?: Student_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_NotesInclude<ExtArgs> | null
    /**
     * The filter to search for the Student_Notes to update in case it exists.
     */
    where: Student_NotesWhereUniqueInput
    /**
     * In case the Student_Notes found by the `where` argument doesn't exist, create a new Student_Notes with this data.
     */
    create: XOR<Student_NotesCreateInput, Student_NotesUncheckedCreateInput>
    /**
     * In case the Student_Notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Student_NotesUpdateInput, Student_NotesUncheckedUpdateInput>
  }

  /**
   * Student_Notes delete
   */
  export type Student_NotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Notes
     */
    select?: Student_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Notes
     */
    omit?: Student_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_NotesInclude<ExtArgs> | null
    /**
     * Filter which Student_Notes to delete.
     */
    where: Student_NotesWhereUniqueInput
  }

  /**
   * Student_Notes deleteMany
   */
  export type Student_NotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student_Notes to delete
     */
    where?: Student_NotesWhereInput
    /**
     * Limit how many Student_Notes to delete.
     */
    limit?: number
  }

  /**
   * Student_Notes without action
   */
  export type Student_NotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student_Notes
     */
    select?: Student_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student_Notes
     */
    omit?: Student_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Student_NotesInclude<ExtArgs> | null
  }


  /**
   * Model Teacher_Notes
   */

  export type AggregateTeacher_Notes = {
    _count: Teacher_NotesCountAggregateOutputType | null
    _avg: Teacher_NotesAvgAggregateOutputType | null
    _sum: Teacher_NotesSumAggregateOutputType | null
    _min: Teacher_NotesMinAggregateOutputType | null
    _max: Teacher_NotesMaxAggregateOutputType | null
  }

  export type Teacher_NotesAvgAggregateOutputType = {
    id: number | null
    teacher_id: number | null
  }

  export type Teacher_NotesSumAggregateOutputType = {
    id: number | null
    teacher_id: number | null
  }

  export type Teacher_NotesMinAggregateOutputType = {
    id: number | null
    teacher_id: number | null
    title: string | null
    description: string | null
    pdf: string | null
    file: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Teacher_NotesMaxAggregateOutputType = {
    id: number | null
    teacher_id: number | null
    title: string | null
    description: string | null
    pdf: string | null
    file: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Teacher_NotesCountAggregateOutputType = {
    id: number
    teacher_id: number
    title: number
    description: number
    pdf: number
    file: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Teacher_NotesAvgAggregateInputType = {
    id?: true
    teacher_id?: true
  }

  export type Teacher_NotesSumAggregateInputType = {
    id?: true
    teacher_id?: true
  }

  export type Teacher_NotesMinAggregateInputType = {
    id?: true
    teacher_id?: true
    title?: true
    description?: true
    pdf?: true
    file?: true
    created_at?: true
    updated_at?: true
  }

  export type Teacher_NotesMaxAggregateInputType = {
    id?: true
    teacher_id?: true
    title?: true
    description?: true
    pdf?: true
    file?: true
    created_at?: true
    updated_at?: true
  }

  export type Teacher_NotesCountAggregateInputType = {
    id?: true
    teacher_id?: true
    title?: true
    description?: true
    pdf?: true
    file?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Teacher_NotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher_Notes to aggregate.
     */
    where?: Teacher_NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teacher_Notes to fetch.
     */
    orderBy?: Teacher_NotesOrderByWithRelationInput | Teacher_NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Teacher_NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teacher_Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teacher_Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teacher_Notes
    **/
    _count?: true | Teacher_NotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Teacher_NotesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Teacher_NotesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Teacher_NotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Teacher_NotesMaxAggregateInputType
  }

  export type GetTeacher_NotesAggregateType<T extends Teacher_NotesAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher_Notes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher_Notes[P]>
      : GetScalarType<T[P], AggregateTeacher_Notes[P]>
  }




  export type Teacher_NotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Teacher_NotesWhereInput
    orderBy?: Teacher_NotesOrderByWithAggregationInput | Teacher_NotesOrderByWithAggregationInput[]
    by: Teacher_NotesScalarFieldEnum[] | Teacher_NotesScalarFieldEnum
    having?: Teacher_NotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Teacher_NotesCountAggregateInputType | true
    _avg?: Teacher_NotesAvgAggregateInputType
    _sum?: Teacher_NotesSumAggregateInputType
    _min?: Teacher_NotesMinAggregateInputType
    _max?: Teacher_NotesMaxAggregateInputType
  }

  export type Teacher_NotesGroupByOutputType = {
    id: number
    teacher_id: number
    title: string
    description: string
    pdf: string | null
    file: string | null
    created_at: Date
    updated_at: Date
    _count: Teacher_NotesCountAggregateOutputType | null
    _avg: Teacher_NotesAvgAggregateOutputType | null
    _sum: Teacher_NotesSumAggregateOutputType | null
    _min: Teacher_NotesMinAggregateOutputType | null
    _max: Teacher_NotesMaxAggregateOutputType | null
  }

  type GetTeacher_NotesGroupByPayload<T extends Teacher_NotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Teacher_NotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Teacher_NotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Teacher_NotesGroupByOutputType[P]>
            : GetScalarType<T[P], Teacher_NotesGroupByOutputType[P]>
        }
      >
    >


  export type Teacher_NotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    title?: boolean
    description?: boolean
    pdf?: boolean
    file?: boolean
    created_at?: boolean
    updated_at?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher_Notes"]>

  export type Teacher_NotesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    title?: boolean
    description?: boolean
    pdf?: boolean
    file?: boolean
    created_at?: boolean
    updated_at?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher_Notes"]>

  export type Teacher_NotesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    title?: boolean
    description?: boolean
    pdf?: boolean
    file?: boolean
    created_at?: boolean
    updated_at?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher_Notes"]>

  export type Teacher_NotesSelectScalar = {
    id?: boolean
    teacher_id?: boolean
    title?: boolean
    description?: boolean
    pdf?: boolean
    file?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type Teacher_NotesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teacher_id" | "title" | "description" | "pdf" | "file" | "created_at" | "updated_at", ExtArgs["result"]["teacher_Notes"]>
  export type Teacher_NotesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type Teacher_NotesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type Teacher_NotesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $Teacher_NotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher_Notes"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teacher_id: number
      title: string
      description: string
      pdf: string | null
      file: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["teacher_Notes"]>
    composites: {}
  }

  type Teacher_NotesGetPayload<S extends boolean | null | undefined | Teacher_NotesDefaultArgs> = $Result.GetResult<Prisma.$Teacher_NotesPayload, S>

  type Teacher_NotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Teacher_NotesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Teacher_NotesCountAggregateInputType | true
    }

  export interface Teacher_NotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher_Notes'], meta: { name: 'Teacher_Notes' } }
    /**
     * Find zero or one Teacher_Notes that matches the filter.
     * @param {Teacher_NotesFindUniqueArgs} args - Arguments to find a Teacher_Notes
     * @example
     * // Get one Teacher_Notes
     * const teacher_Notes = await prisma.teacher_Notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Teacher_NotesFindUniqueArgs>(args: SelectSubset<T, Teacher_NotesFindUniqueArgs<ExtArgs>>): Prisma__Teacher_NotesClient<$Result.GetResult<Prisma.$Teacher_NotesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher_Notes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Teacher_NotesFindUniqueOrThrowArgs} args - Arguments to find a Teacher_Notes
     * @example
     * // Get one Teacher_Notes
     * const teacher_Notes = await prisma.teacher_Notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Teacher_NotesFindUniqueOrThrowArgs>(args: SelectSubset<T, Teacher_NotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Teacher_NotesClient<$Result.GetResult<Prisma.$Teacher_NotesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher_Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teacher_NotesFindFirstArgs} args - Arguments to find a Teacher_Notes
     * @example
     * // Get one Teacher_Notes
     * const teacher_Notes = await prisma.teacher_Notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Teacher_NotesFindFirstArgs>(args?: SelectSubset<T, Teacher_NotesFindFirstArgs<ExtArgs>>): Prisma__Teacher_NotesClient<$Result.GetResult<Prisma.$Teacher_NotesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher_Notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teacher_NotesFindFirstOrThrowArgs} args - Arguments to find a Teacher_Notes
     * @example
     * // Get one Teacher_Notes
     * const teacher_Notes = await prisma.teacher_Notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Teacher_NotesFindFirstOrThrowArgs>(args?: SelectSubset<T, Teacher_NotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Teacher_NotesClient<$Result.GetResult<Prisma.$Teacher_NotesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teacher_Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teacher_NotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teacher_Notes
     * const teacher_Notes = await prisma.teacher_Notes.findMany()
     * 
     * // Get first 10 Teacher_Notes
     * const teacher_Notes = await prisma.teacher_Notes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacher_NotesWithIdOnly = await prisma.teacher_Notes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Teacher_NotesFindManyArgs>(args?: SelectSubset<T, Teacher_NotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Teacher_NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher_Notes.
     * @param {Teacher_NotesCreateArgs} args - Arguments to create a Teacher_Notes.
     * @example
     * // Create one Teacher_Notes
     * const Teacher_Notes = await prisma.teacher_Notes.create({
     *   data: {
     *     // ... data to create a Teacher_Notes
     *   }
     * })
     * 
     */
    create<T extends Teacher_NotesCreateArgs>(args: SelectSubset<T, Teacher_NotesCreateArgs<ExtArgs>>): Prisma__Teacher_NotesClient<$Result.GetResult<Prisma.$Teacher_NotesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teacher_Notes.
     * @param {Teacher_NotesCreateManyArgs} args - Arguments to create many Teacher_Notes.
     * @example
     * // Create many Teacher_Notes
     * const teacher_Notes = await prisma.teacher_Notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Teacher_NotesCreateManyArgs>(args?: SelectSubset<T, Teacher_NotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teacher_Notes and returns the data saved in the database.
     * @param {Teacher_NotesCreateManyAndReturnArgs} args - Arguments to create many Teacher_Notes.
     * @example
     * // Create many Teacher_Notes
     * const teacher_Notes = await prisma.teacher_Notes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teacher_Notes and only return the `id`
     * const teacher_NotesWithIdOnly = await prisma.teacher_Notes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Teacher_NotesCreateManyAndReturnArgs>(args?: SelectSubset<T, Teacher_NotesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Teacher_NotesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher_Notes.
     * @param {Teacher_NotesDeleteArgs} args - Arguments to delete one Teacher_Notes.
     * @example
     * // Delete one Teacher_Notes
     * const Teacher_Notes = await prisma.teacher_Notes.delete({
     *   where: {
     *     // ... filter to delete one Teacher_Notes
     *   }
     * })
     * 
     */
    delete<T extends Teacher_NotesDeleteArgs>(args: SelectSubset<T, Teacher_NotesDeleteArgs<ExtArgs>>): Prisma__Teacher_NotesClient<$Result.GetResult<Prisma.$Teacher_NotesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher_Notes.
     * @param {Teacher_NotesUpdateArgs} args - Arguments to update one Teacher_Notes.
     * @example
     * // Update one Teacher_Notes
     * const teacher_Notes = await prisma.teacher_Notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Teacher_NotesUpdateArgs>(args: SelectSubset<T, Teacher_NotesUpdateArgs<ExtArgs>>): Prisma__Teacher_NotesClient<$Result.GetResult<Prisma.$Teacher_NotesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teacher_Notes.
     * @param {Teacher_NotesDeleteManyArgs} args - Arguments to filter Teacher_Notes to delete.
     * @example
     * // Delete a few Teacher_Notes
     * const { count } = await prisma.teacher_Notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Teacher_NotesDeleteManyArgs>(args?: SelectSubset<T, Teacher_NotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teacher_Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teacher_NotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teacher_Notes
     * const teacher_Notes = await prisma.teacher_Notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Teacher_NotesUpdateManyArgs>(args: SelectSubset<T, Teacher_NotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teacher_Notes and returns the data updated in the database.
     * @param {Teacher_NotesUpdateManyAndReturnArgs} args - Arguments to update many Teacher_Notes.
     * @example
     * // Update many Teacher_Notes
     * const teacher_Notes = await prisma.teacher_Notes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teacher_Notes and only return the `id`
     * const teacher_NotesWithIdOnly = await prisma.teacher_Notes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Teacher_NotesUpdateManyAndReturnArgs>(args: SelectSubset<T, Teacher_NotesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Teacher_NotesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher_Notes.
     * @param {Teacher_NotesUpsertArgs} args - Arguments to update or create a Teacher_Notes.
     * @example
     * // Update or create a Teacher_Notes
     * const teacher_Notes = await prisma.teacher_Notes.upsert({
     *   create: {
     *     // ... data to create a Teacher_Notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher_Notes we want to update
     *   }
     * })
     */
    upsert<T extends Teacher_NotesUpsertArgs>(args: SelectSubset<T, Teacher_NotesUpsertArgs<ExtArgs>>): Prisma__Teacher_NotesClient<$Result.GetResult<Prisma.$Teacher_NotesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teacher_Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teacher_NotesCountArgs} args - Arguments to filter Teacher_Notes to count.
     * @example
     * // Count the number of Teacher_Notes
     * const count = await prisma.teacher_Notes.count({
     *   where: {
     *     // ... the filter for the Teacher_Notes we want to count
     *   }
     * })
    **/
    count<T extends Teacher_NotesCountArgs>(
      args?: Subset<T, Teacher_NotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Teacher_NotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher_Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teacher_NotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Teacher_NotesAggregateArgs>(args: Subset<T, Teacher_NotesAggregateArgs>): Prisma.PrismaPromise<GetTeacher_NotesAggregateType<T>>

    /**
     * Group by Teacher_Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Teacher_NotesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Teacher_NotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Teacher_NotesGroupByArgs['orderBy'] }
        : { orderBy?: Teacher_NotesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Teacher_NotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacher_NotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher_Notes model
   */
  readonly fields: Teacher_NotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher_Notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Teacher_NotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teacher_Notes model
   */
  interface Teacher_NotesFieldRefs {
    readonly id: FieldRef<"Teacher_Notes", 'Int'>
    readonly teacher_id: FieldRef<"Teacher_Notes", 'Int'>
    readonly title: FieldRef<"Teacher_Notes", 'String'>
    readonly description: FieldRef<"Teacher_Notes", 'String'>
    readonly pdf: FieldRef<"Teacher_Notes", 'String'>
    readonly file: FieldRef<"Teacher_Notes", 'String'>
    readonly created_at: FieldRef<"Teacher_Notes", 'DateTime'>
    readonly updated_at: FieldRef<"Teacher_Notes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teacher_Notes findUnique
   */
  export type Teacher_NotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher_Notes
     */
    select?: Teacher_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher_Notes
     */
    omit?: Teacher_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Teacher_NotesInclude<ExtArgs> | null
    /**
     * Filter, which Teacher_Notes to fetch.
     */
    where: Teacher_NotesWhereUniqueInput
  }

  /**
   * Teacher_Notes findUniqueOrThrow
   */
  export type Teacher_NotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher_Notes
     */
    select?: Teacher_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher_Notes
     */
    omit?: Teacher_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Teacher_NotesInclude<ExtArgs> | null
    /**
     * Filter, which Teacher_Notes to fetch.
     */
    where: Teacher_NotesWhereUniqueInput
  }

  /**
   * Teacher_Notes findFirst
   */
  export type Teacher_NotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher_Notes
     */
    select?: Teacher_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher_Notes
     */
    omit?: Teacher_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Teacher_NotesInclude<ExtArgs> | null
    /**
     * Filter, which Teacher_Notes to fetch.
     */
    where?: Teacher_NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teacher_Notes to fetch.
     */
    orderBy?: Teacher_NotesOrderByWithRelationInput | Teacher_NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teacher_Notes.
     */
    cursor?: Teacher_NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teacher_Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teacher_Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teacher_Notes.
     */
    distinct?: Teacher_NotesScalarFieldEnum | Teacher_NotesScalarFieldEnum[]
  }

  /**
   * Teacher_Notes findFirstOrThrow
   */
  export type Teacher_NotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher_Notes
     */
    select?: Teacher_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher_Notes
     */
    omit?: Teacher_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Teacher_NotesInclude<ExtArgs> | null
    /**
     * Filter, which Teacher_Notes to fetch.
     */
    where?: Teacher_NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teacher_Notes to fetch.
     */
    orderBy?: Teacher_NotesOrderByWithRelationInput | Teacher_NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teacher_Notes.
     */
    cursor?: Teacher_NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teacher_Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teacher_Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teacher_Notes.
     */
    distinct?: Teacher_NotesScalarFieldEnum | Teacher_NotesScalarFieldEnum[]
  }

  /**
   * Teacher_Notes findMany
   */
  export type Teacher_NotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher_Notes
     */
    select?: Teacher_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher_Notes
     */
    omit?: Teacher_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Teacher_NotesInclude<ExtArgs> | null
    /**
     * Filter, which Teacher_Notes to fetch.
     */
    where?: Teacher_NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teacher_Notes to fetch.
     */
    orderBy?: Teacher_NotesOrderByWithRelationInput | Teacher_NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teacher_Notes.
     */
    cursor?: Teacher_NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teacher_Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teacher_Notes.
     */
    skip?: number
    distinct?: Teacher_NotesScalarFieldEnum | Teacher_NotesScalarFieldEnum[]
  }

  /**
   * Teacher_Notes create
   */
  export type Teacher_NotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher_Notes
     */
    select?: Teacher_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher_Notes
     */
    omit?: Teacher_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Teacher_NotesInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher_Notes.
     */
    data: XOR<Teacher_NotesCreateInput, Teacher_NotesUncheckedCreateInput>
  }

  /**
   * Teacher_Notes createMany
   */
  export type Teacher_NotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teacher_Notes.
     */
    data: Teacher_NotesCreateManyInput | Teacher_NotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher_Notes createManyAndReturn
   */
  export type Teacher_NotesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher_Notes
     */
    select?: Teacher_NotesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher_Notes
     */
    omit?: Teacher_NotesOmit<ExtArgs> | null
    /**
     * The data used to create many Teacher_Notes.
     */
    data: Teacher_NotesCreateManyInput | Teacher_NotesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Teacher_NotesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher_Notes update
   */
  export type Teacher_NotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher_Notes
     */
    select?: Teacher_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher_Notes
     */
    omit?: Teacher_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Teacher_NotesInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher_Notes.
     */
    data: XOR<Teacher_NotesUpdateInput, Teacher_NotesUncheckedUpdateInput>
    /**
     * Choose, which Teacher_Notes to update.
     */
    where: Teacher_NotesWhereUniqueInput
  }

  /**
   * Teacher_Notes updateMany
   */
  export type Teacher_NotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teacher_Notes.
     */
    data: XOR<Teacher_NotesUpdateManyMutationInput, Teacher_NotesUncheckedUpdateManyInput>
    /**
     * Filter which Teacher_Notes to update
     */
    where?: Teacher_NotesWhereInput
    /**
     * Limit how many Teacher_Notes to update.
     */
    limit?: number
  }

  /**
   * Teacher_Notes updateManyAndReturn
   */
  export type Teacher_NotesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher_Notes
     */
    select?: Teacher_NotesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher_Notes
     */
    omit?: Teacher_NotesOmit<ExtArgs> | null
    /**
     * The data used to update Teacher_Notes.
     */
    data: XOR<Teacher_NotesUpdateManyMutationInput, Teacher_NotesUncheckedUpdateManyInput>
    /**
     * Filter which Teacher_Notes to update
     */
    where?: Teacher_NotesWhereInput
    /**
     * Limit how many Teacher_Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Teacher_NotesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teacher_Notes upsert
   */
  export type Teacher_NotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher_Notes
     */
    select?: Teacher_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher_Notes
     */
    omit?: Teacher_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Teacher_NotesInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher_Notes to update in case it exists.
     */
    where: Teacher_NotesWhereUniqueInput
    /**
     * In case the Teacher_Notes found by the `where` argument doesn't exist, create a new Teacher_Notes with this data.
     */
    create: XOR<Teacher_NotesCreateInput, Teacher_NotesUncheckedCreateInput>
    /**
     * In case the Teacher_Notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Teacher_NotesUpdateInput, Teacher_NotesUncheckedUpdateInput>
  }

  /**
   * Teacher_Notes delete
   */
  export type Teacher_NotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher_Notes
     */
    select?: Teacher_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher_Notes
     */
    omit?: Teacher_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Teacher_NotesInclude<ExtArgs> | null
    /**
     * Filter which Teacher_Notes to delete.
     */
    where: Teacher_NotesWhereUniqueInput
  }

  /**
   * Teacher_Notes deleteMany
   */
  export type Teacher_NotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher_Notes to delete
     */
    where?: Teacher_NotesWhereInput
    /**
     * Limit how many Teacher_Notes to delete.
     */
    limit?: number
  }

  /**
   * Teacher_Notes without action
   */
  export type Teacher_NotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher_Notes
     */
    select?: Teacher_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher_Notes
     */
    omit?: Teacher_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Teacher_NotesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StudentScalarFieldEnum: {
    student_id: 'student_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    dob: 'dob',
    photo_url: 'photo_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    teacher_id: 'teacher_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    dob: 'dob',
    photo_url: 'photo_url',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const Video_DetailsScalarFieldEnum: {
    id: 'id',
    teacher_id: 'teacher_id',
    url: 'url',
    title: 'title',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Video_DetailsScalarFieldEnum = (typeof Video_DetailsScalarFieldEnum)[keyof typeof Video_DetailsScalarFieldEnum]


  export const Student_NotesScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    title: 'title',
    description: 'description',
    pdf: 'pdf',
    file: 'file',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Student_NotesScalarFieldEnum = (typeof Student_NotesScalarFieldEnum)[keyof typeof Student_NotesScalarFieldEnum]


  export const Teacher_NotesScalarFieldEnum: {
    id: 'id',
    teacher_id: 'teacher_id',
    title: 'title',
    description: 'description',
    pdf: 'pdf',
    file: 'file',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Teacher_NotesScalarFieldEnum = (typeof Teacher_NotesScalarFieldEnum)[keyof typeof Teacher_NotesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    student_id?: IntFilter<"Student"> | number
    first_name?: StringFilter<"Student"> | string
    last_name?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    dob?: DateTimeFilter<"Student"> | Date | string
    photo_url?: StringNullableFilter<"Student"> | string | null
    created_at?: DateTimeFilter<"Student"> | Date | string
    updated_at?: DateTimeFilter<"Student"> | Date | string
    notes?: Student_NotesListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    student_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    photo_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    notes?: Student_NotesOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    student_id?: number
    email?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    first_name?: StringFilter<"Student"> | string
    last_name?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    dob?: DateTimeFilter<"Student"> | Date | string
    photo_url?: StringNullableFilter<"Student"> | string | null
    created_at?: DateTimeFilter<"Student"> | Date | string
    updated_at?: DateTimeFilter<"Student"> | Date | string
    notes?: Student_NotesListRelationFilter
  }, "student_id" | "email">

  export type StudentOrderByWithAggregationInput = {
    student_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    photo_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    student_id?: IntWithAggregatesFilter<"Student"> | number
    first_name?: StringWithAggregatesFilter<"Student"> | string
    last_name?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    password?: StringWithAggregatesFilter<"Student"> | string
    dob?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    photo_url?: StringNullableWithAggregatesFilter<"Student"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    teacher_id?: IntFilter<"Teacher"> | number
    first_name?: StringFilter<"Teacher"> | string
    last_name?: StringFilter<"Teacher"> | string
    email?: StringFilter<"Teacher"> | string
    password?: StringFilter<"Teacher"> | string
    dob?: DateTimeFilter<"Teacher"> | Date | string
    photo_url?: StringNullableFilter<"Teacher"> | string | null
    created_at?: DateTimeFilter<"Teacher"> | Date | string
    updated_at?: DateTimeFilter<"Teacher"> | Date | string
    video_details?: Video_DetailsListRelationFilter
    notes?: Teacher_NotesListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    teacher_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    photo_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    video_details?: Video_DetailsOrderByRelationAggregateInput
    notes?: Teacher_NotesOrderByRelationAggregateInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    teacher_id?: number
    email?: string
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    first_name?: StringFilter<"Teacher"> | string
    last_name?: StringFilter<"Teacher"> | string
    password?: StringFilter<"Teacher"> | string
    dob?: DateTimeFilter<"Teacher"> | Date | string
    photo_url?: StringNullableFilter<"Teacher"> | string | null
    created_at?: DateTimeFilter<"Teacher"> | Date | string
    updated_at?: DateTimeFilter<"Teacher"> | Date | string
    video_details?: Video_DetailsListRelationFilter
    notes?: Teacher_NotesListRelationFilter
  }, "teacher_id" | "email">

  export type TeacherOrderByWithAggregationInput = {
    teacher_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    photo_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    teacher_id?: IntWithAggregatesFilter<"Teacher"> | number
    first_name?: StringWithAggregatesFilter<"Teacher"> | string
    last_name?: StringWithAggregatesFilter<"Teacher"> | string
    email?: StringWithAggregatesFilter<"Teacher"> | string
    password?: StringWithAggregatesFilter<"Teacher"> | string
    dob?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    photo_url?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Teacher"> | Date | string
  }

  export type Video_DetailsWhereInput = {
    AND?: Video_DetailsWhereInput | Video_DetailsWhereInput[]
    OR?: Video_DetailsWhereInput[]
    NOT?: Video_DetailsWhereInput | Video_DetailsWhereInput[]
    id?: IntFilter<"Video_Details"> | number
    teacher_id?: IntFilter<"Video_Details"> | number
    url?: StringFilter<"Video_Details"> | string
    title?: StringFilter<"Video_Details"> | string
    description?: StringFilter<"Video_Details"> | string
    created_at?: DateTimeFilter<"Video_Details"> | Date | string
    updated_at?: DateTimeFilter<"Video_Details"> | Date | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }

  export type Video_DetailsOrderByWithRelationInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
  }

  export type Video_DetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Video_DetailsWhereInput | Video_DetailsWhereInput[]
    OR?: Video_DetailsWhereInput[]
    NOT?: Video_DetailsWhereInput | Video_DetailsWhereInput[]
    teacher_id?: IntFilter<"Video_Details"> | number
    url?: StringFilter<"Video_Details"> | string
    title?: StringFilter<"Video_Details"> | string
    description?: StringFilter<"Video_Details"> | string
    created_at?: DateTimeFilter<"Video_Details"> | Date | string
    updated_at?: DateTimeFilter<"Video_Details"> | Date | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }, "id">

  export type Video_DetailsOrderByWithAggregationInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: Video_DetailsCountOrderByAggregateInput
    _avg?: Video_DetailsAvgOrderByAggregateInput
    _max?: Video_DetailsMaxOrderByAggregateInput
    _min?: Video_DetailsMinOrderByAggregateInput
    _sum?: Video_DetailsSumOrderByAggregateInput
  }

  export type Video_DetailsScalarWhereWithAggregatesInput = {
    AND?: Video_DetailsScalarWhereWithAggregatesInput | Video_DetailsScalarWhereWithAggregatesInput[]
    OR?: Video_DetailsScalarWhereWithAggregatesInput[]
    NOT?: Video_DetailsScalarWhereWithAggregatesInput | Video_DetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Video_Details"> | number
    teacher_id?: IntWithAggregatesFilter<"Video_Details"> | number
    url?: StringWithAggregatesFilter<"Video_Details"> | string
    title?: StringWithAggregatesFilter<"Video_Details"> | string
    description?: StringWithAggregatesFilter<"Video_Details"> | string
    created_at?: DateTimeWithAggregatesFilter<"Video_Details"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Video_Details"> | Date | string
  }

  export type Student_NotesWhereInput = {
    AND?: Student_NotesWhereInput | Student_NotesWhereInput[]
    OR?: Student_NotesWhereInput[]
    NOT?: Student_NotesWhereInput | Student_NotesWhereInput[]
    id?: IntFilter<"Student_Notes"> | number
    student_id?: IntFilter<"Student_Notes"> | number
    title?: StringFilter<"Student_Notes"> | string
    description?: StringFilter<"Student_Notes"> | string
    pdf?: StringNullableFilter<"Student_Notes"> | string | null
    file?: StringNullableFilter<"Student_Notes"> | string | null
    created_at?: DateTimeFilter<"Student_Notes"> | Date | string
    updated_at?: DateTimeFilter<"Student_Notes"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type Student_NotesOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pdf?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type Student_NotesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Student_NotesWhereInput | Student_NotesWhereInput[]
    OR?: Student_NotesWhereInput[]
    NOT?: Student_NotesWhereInput | Student_NotesWhereInput[]
    student_id?: IntFilter<"Student_Notes"> | number
    title?: StringFilter<"Student_Notes"> | string
    description?: StringFilter<"Student_Notes"> | string
    pdf?: StringNullableFilter<"Student_Notes"> | string | null
    file?: StringNullableFilter<"Student_Notes"> | string | null
    created_at?: DateTimeFilter<"Student_Notes"> | Date | string
    updated_at?: DateTimeFilter<"Student_Notes"> | Date | string
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type Student_NotesOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pdf?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: Student_NotesCountOrderByAggregateInput
    _avg?: Student_NotesAvgOrderByAggregateInput
    _max?: Student_NotesMaxOrderByAggregateInput
    _min?: Student_NotesMinOrderByAggregateInput
    _sum?: Student_NotesSumOrderByAggregateInput
  }

  export type Student_NotesScalarWhereWithAggregatesInput = {
    AND?: Student_NotesScalarWhereWithAggregatesInput | Student_NotesScalarWhereWithAggregatesInput[]
    OR?: Student_NotesScalarWhereWithAggregatesInput[]
    NOT?: Student_NotesScalarWhereWithAggregatesInput | Student_NotesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student_Notes"> | number
    student_id?: IntWithAggregatesFilter<"Student_Notes"> | number
    title?: StringWithAggregatesFilter<"Student_Notes"> | string
    description?: StringWithAggregatesFilter<"Student_Notes"> | string
    pdf?: StringNullableWithAggregatesFilter<"Student_Notes"> | string | null
    file?: StringNullableWithAggregatesFilter<"Student_Notes"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Student_Notes"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Student_Notes"> | Date | string
  }

  export type Teacher_NotesWhereInput = {
    AND?: Teacher_NotesWhereInput | Teacher_NotesWhereInput[]
    OR?: Teacher_NotesWhereInput[]
    NOT?: Teacher_NotesWhereInput | Teacher_NotesWhereInput[]
    id?: IntFilter<"Teacher_Notes"> | number
    teacher_id?: IntFilter<"Teacher_Notes"> | number
    title?: StringFilter<"Teacher_Notes"> | string
    description?: StringFilter<"Teacher_Notes"> | string
    pdf?: StringNullableFilter<"Teacher_Notes"> | string | null
    file?: StringNullableFilter<"Teacher_Notes"> | string | null
    created_at?: DateTimeFilter<"Teacher_Notes"> | Date | string
    updated_at?: DateTimeFilter<"Teacher_Notes"> | Date | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }

  export type Teacher_NotesOrderByWithRelationInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pdf?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
  }

  export type Teacher_NotesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Teacher_NotesWhereInput | Teacher_NotesWhereInput[]
    OR?: Teacher_NotesWhereInput[]
    NOT?: Teacher_NotesWhereInput | Teacher_NotesWhereInput[]
    teacher_id?: IntFilter<"Teacher_Notes"> | number
    title?: StringFilter<"Teacher_Notes"> | string
    description?: StringFilter<"Teacher_Notes"> | string
    pdf?: StringNullableFilter<"Teacher_Notes"> | string | null
    file?: StringNullableFilter<"Teacher_Notes"> | string | null
    created_at?: DateTimeFilter<"Teacher_Notes"> | Date | string
    updated_at?: DateTimeFilter<"Teacher_Notes"> | Date | string
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
  }, "id">

  export type Teacher_NotesOrderByWithAggregationInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pdf?: SortOrderInput | SortOrder
    file?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: Teacher_NotesCountOrderByAggregateInput
    _avg?: Teacher_NotesAvgOrderByAggregateInput
    _max?: Teacher_NotesMaxOrderByAggregateInput
    _min?: Teacher_NotesMinOrderByAggregateInput
    _sum?: Teacher_NotesSumOrderByAggregateInput
  }

  export type Teacher_NotesScalarWhereWithAggregatesInput = {
    AND?: Teacher_NotesScalarWhereWithAggregatesInput | Teacher_NotesScalarWhereWithAggregatesInput[]
    OR?: Teacher_NotesScalarWhereWithAggregatesInput[]
    NOT?: Teacher_NotesScalarWhereWithAggregatesInput | Teacher_NotesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teacher_Notes"> | number
    teacher_id?: IntWithAggregatesFilter<"Teacher_Notes"> | number
    title?: StringWithAggregatesFilter<"Teacher_Notes"> | string
    description?: StringWithAggregatesFilter<"Teacher_Notes"> | string
    pdf?: StringNullableWithAggregatesFilter<"Teacher_Notes"> | string | null
    file?: StringNullableWithAggregatesFilter<"Teacher_Notes"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Teacher_Notes"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Teacher_Notes"> | Date | string
  }

  export type StudentCreateInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    dob: Date | string
    photo_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    notes?: Student_NotesCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    student_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    dob: Date | string
    photo_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    notes?: Student_NotesUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: Student_NotesUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: Student_NotesUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    student_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    dob: Date | string
    photo_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherCreateInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    dob: Date | string
    photo_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    video_details?: Video_DetailsCreateNestedManyWithoutTeacherInput
    notes?: Teacher_NotesCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    teacher_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    dob: Date | string
    photo_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    video_details?: Video_DetailsUncheckedCreateNestedManyWithoutTeacherInput
    notes?: Teacher_NotesUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    video_details?: Video_DetailsUpdateManyWithoutTeacherNestedInput
    notes?: Teacher_NotesUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    teacher_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    video_details?: Video_DetailsUncheckedUpdateManyWithoutTeacherNestedInput
    notes?: Teacher_NotesUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    teacher_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    dob: Date | string
    photo_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TeacherUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    teacher_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Video_DetailsCreateInput = {
    url: string
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
    teacher: TeacherCreateNestedOneWithoutVideo_detailsInput
  }

  export type Video_DetailsUncheckedCreateInput = {
    id?: number
    teacher_id: number
    url: string
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Video_DetailsUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutVideo_detailsNestedInput
  }

  export type Video_DetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Video_DetailsCreateManyInput = {
    id?: number
    teacher_id: number
    url: string
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Video_DetailsUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Video_DetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Student_NotesCreateInput = {
    title: string
    description: string
    pdf?: string | null
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    student: StudentCreateNestedOneWithoutNotesInput
  }

  export type Student_NotesUncheckedCreateInput = {
    id?: number
    student_id: number
    title: string
    description: string
    pdf?: string | null
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Student_NotesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutNotesNestedInput
  }

  export type Student_NotesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Student_NotesCreateManyInput = {
    id?: number
    student_id: number
    title: string
    description: string
    pdf?: string | null
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Student_NotesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Student_NotesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Teacher_NotesCreateInput = {
    title: string
    description: string
    pdf?: string | null
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    teacher: TeacherCreateNestedOneWithoutNotesInput
  }

  export type Teacher_NotesUncheckedCreateInput = {
    id?: number
    teacher_id: number
    title: string
    description: string
    pdf?: string | null
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Teacher_NotesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: TeacherUpdateOneRequiredWithoutNotesNestedInput
  }

  export type Teacher_NotesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Teacher_NotesCreateManyInput = {
    id?: number
    teacher_id: number
    title: string
    description: string
    pdf?: string | null
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Teacher_NotesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Teacher_NotesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Student_NotesListRelationFilter = {
    every?: Student_NotesWhereInput
    some?: Student_NotesWhereInput
    none?: Student_NotesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Student_NotesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    student_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    photo_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    student_id?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    student_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    photo_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    student_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    photo_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    student_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Video_DetailsListRelationFilter = {
    every?: Video_DetailsWhereInput
    some?: Video_DetailsWhereInput
    none?: Video_DetailsWhereInput
  }

  export type Teacher_NotesListRelationFilter = {
    every?: Teacher_NotesWhereInput
    some?: Teacher_NotesWhereInput
    none?: Teacher_NotesWhereInput
  }

  export type Video_DetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Teacher_NotesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    teacher_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    photo_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    teacher_id?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    teacher_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    photo_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    teacher_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    dob?: SortOrder
    photo_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    teacher_id?: SortOrder
  }

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type Video_DetailsCountOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Video_DetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
  }

  export type Video_DetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Video_DetailsMinOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Video_DetailsSumOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type Student_NotesCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pdf?: SortOrder
    file?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Student_NotesAvgOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
  }

  export type Student_NotesMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pdf?: SortOrder
    file?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Student_NotesMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pdf?: SortOrder
    file?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Student_NotesSumOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
  }

  export type Teacher_NotesCountOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pdf?: SortOrder
    file?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Teacher_NotesAvgOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
  }

  export type Teacher_NotesMaxOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pdf?: SortOrder
    file?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Teacher_NotesMinOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pdf?: SortOrder
    file?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Teacher_NotesSumOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
  }

  export type Student_NotesCreateNestedManyWithoutStudentInput = {
    create?: XOR<Student_NotesCreateWithoutStudentInput, Student_NotesUncheckedCreateWithoutStudentInput> | Student_NotesCreateWithoutStudentInput[] | Student_NotesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: Student_NotesCreateOrConnectWithoutStudentInput | Student_NotesCreateOrConnectWithoutStudentInput[]
    createMany?: Student_NotesCreateManyStudentInputEnvelope
    connect?: Student_NotesWhereUniqueInput | Student_NotesWhereUniqueInput[]
  }

  export type Student_NotesUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Student_NotesCreateWithoutStudentInput, Student_NotesUncheckedCreateWithoutStudentInput> | Student_NotesCreateWithoutStudentInput[] | Student_NotesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: Student_NotesCreateOrConnectWithoutStudentInput | Student_NotesCreateOrConnectWithoutStudentInput[]
    createMany?: Student_NotesCreateManyStudentInputEnvelope
    connect?: Student_NotesWhereUniqueInput | Student_NotesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Student_NotesUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Student_NotesCreateWithoutStudentInput, Student_NotesUncheckedCreateWithoutStudentInput> | Student_NotesCreateWithoutStudentInput[] | Student_NotesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: Student_NotesCreateOrConnectWithoutStudentInput | Student_NotesCreateOrConnectWithoutStudentInput[]
    upsert?: Student_NotesUpsertWithWhereUniqueWithoutStudentInput | Student_NotesUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: Student_NotesCreateManyStudentInputEnvelope
    set?: Student_NotesWhereUniqueInput | Student_NotesWhereUniqueInput[]
    disconnect?: Student_NotesWhereUniqueInput | Student_NotesWhereUniqueInput[]
    delete?: Student_NotesWhereUniqueInput | Student_NotesWhereUniqueInput[]
    connect?: Student_NotesWhereUniqueInput | Student_NotesWhereUniqueInput[]
    update?: Student_NotesUpdateWithWhereUniqueWithoutStudentInput | Student_NotesUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: Student_NotesUpdateManyWithWhereWithoutStudentInput | Student_NotesUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: Student_NotesScalarWhereInput | Student_NotesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Student_NotesUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Student_NotesCreateWithoutStudentInput, Student_NotesUncheckedCreateWithoutStudentInput> | Student_NotesCreateWithoutStudentInput[] | Student_NotesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: Student_NotesCreateOrConnectWithoutStudentInput | Student_NotesCreateOrConnectWithoutStudentInput[]
    upsert?: Student_NotesUpsertWithWhereUniqueWithoutStudentInput | Student_NotesUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: Student_NotesCreateManyStudentInputEnvelope
    set?: Student_NotesWhereUniqueInput | Student_NotesWhereUniqueInput[]
    disconnect?: Student_NotesWhereUniqueInput | Student_NotesWhereUniqueInput[]
    delete?: Student_NotesWhereUniqueInput | Student_NotesWhereUniqueInput[]
    connect?: Student_NotesWhereUniqueInput | Student_NotesWhereUniqueInput[]
    update?: Student_NotesUpdateWithWhereUniqueWithoutStudentInput | Student_NotesUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: Student_NotesUpdateManyWithWhereWithoutStudentInput | Student_NotesUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: Student_NotesScalarWhereInput | Student_NotesScalarWhereInput[]
  }

  export type Video_DetailsCreateNestedManyWithoutTeacherInput = {
    create?: XOR<Video_DetailsCreateWithoutTeacherInput, Video_DetailsUncheckedCreateWithoutTeacherInput> | Video_DetailsCreateWithoutTeacherInput[] | Video_DetailsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: Video_DetailsCreateOrConnectWithoutTeacherInput | Video_DetailsCreateOrConnectWithoutTeacherInput[]
    createMany?: Video_DetailsCreateManyTeacherInputEnvelope
    connect?: Video_DetailsWhereUniqueInput | Video_DetailsWhereUniqueInput[]
  }

  export type Teacher_NotesCreateNestedManyWithoutTeacherInput = {
    create?: XOR<Teacher_NotesCreateWithoutTeacherInput, Teacher_NotesUncheckedCreateWithoutTeacherInput> | Teacher_NotesCreateWithoutTeacherInput[] | Teacher_NotesUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: Teacher_NotesCreateOrConnectWithoutTeacherInput | Teacher_NotesCreateOrConnectWithoutTeacherInput[]
    createMany?: Teacher_NotesCreateManyTeacherInputEnvelope
    connect?: Teacher_NotesWhereUniqueInput | Teacher_NotesWhereUniqueInput[]
  }

  export type Video_DetailsUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<Video_DetailsCreateWithoutTeacherInput, Video_DetailsUncheckedCreateWithoutTeacherInput> | Video_DetailsCreateWithoutTeacherInput[] | Video_DetailsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: Video_DetailsCreateOrConnectWithoutTeacherInput | Video_DetailsCreateOrConnectWithoutTeacherInput[]
    createMany?: Video_DetailsCreateManyTeacherInputEnvelope
    connect?: Video_DetailsWhereUniqueInput | Video_DetailsWhereUniqueInput[]
  }

  export type Teacher_NotesUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<Teacher_NotesCreateWithoutTeacherInput, Teacher_NotesUncheckedCreateWithoutTeacherInput> | Teacher_NotesCreateWithoutTeacherInput[] | Teacher_NotesUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: Teacher_NotesCreateOrConnectWithoutTeacherInput | Teacher_NotesCreateOrConnectWithoutTeacherInput[]
    createMany?: Teacher_NotesCreateManyTeacherInputEnvelope
    connect?: Teacher_NotesWhereUniqueInput | Teacher_NotesWhereUniqueInput[]
  }

  export type Video_DetailsUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<Video_DetailsCreateWithoutTeacherInput, Video_DetailsUncheckedCreateWithoutTeacherInput> | Video_DetailsCreateWithoutTeacherInput[] | Video_DetailsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: Video_DetailsCreateOrConnectWithoutTeacherInput | Video_DetailsCreateOrConnectWithoutTeacherInput[]
    upsert?: Video_DetailsUpsertWithWhereUniqueWithoutTeacherInput | Video_DetailsUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: Video_DetailsCreateManyTeacherInputEnvelope
    set?: Video_DetailsWhereUniqueInput | Video_DetailsWhereUniqueInput[]
    disconnect?: Video_DetailsWhereUniqueInput | Video_DetailsWhereUniqueInput[]
    delete?: Video_DetailsWhereUniqueInput | Video_DetailsWhereUniqueInput[]
    connect?: Video_DetailsWhereUniqueInput | Video_DetailsWhereUniqueInput[]
    update?: Video_DetailsUpdateWithWhereUniqueWithoutTeacherInput | Video_DetailsUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: Video_DetailsUpdateManyWithWhereWithoutTeacherInput | Video_DetailsUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: Video_DetailsScalarWhereInput | Video_DetailsScalarWhereInput[]
  }

  export type Teacher_NotesUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<Teacher_NotesCreateWithoutTeacherInput, Teacher_NotesUncheckedCreateWithoutTeacherInput> | Teacher_NotesCreateWithoutTeacherInput[] | Teacher_NotesUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: Teacher_NotesCreateOrConnectWithoutTeacherInput | Teacher_NotesCreateOrConnectWithoutTeacherInput[]
    upsert?: Teacher_NotesUpsertWithWhereUniqueWithoutTeacherInput | Teacher_NotesUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: Teacher_NotesCreateManyTeacherInputEnvelope
    set?: Teacher_NotesWhereUniqueInput | Teacher_NotesWhereUniqueInput[]
    disconnect?: Teacher_NotesWhereUniqueInput | Teacher_NotesWhereUniqueInput[]
    delete?: Teacher_NotesWhereUniqueInput | Teacher_NotesWhereUniqueInput[]
    connect?: Teacher_NotesWhereUniqueInput | Teacher_NotesWhereUniqueInput[]
    update?: Teacher_NotesUpdateWithWhereUniqueWithoutTeacherInput | Teacher_NotesUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: Teacher_NotesUpdateManyWithWhereWithoutTeacherInput | Teacher_NotesUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: Teacher_NotesScalarWhereInput | Teacher_NotesScalarWhereInput[]
  }

  export type Video_DetailsUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<Video_DetailsCreateWithoutTeacherInput, Video_DetailsUncheckedCreateWithoutTeacherInput> | Video_DetailsCreateWithoutTeacherInput[] | Video_DetailsUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: Video_DetailsCreateOrConnectWithoutTeacherInput | Video_DetailsCreateOrConnectWithoutTeacherInput[]
    upsert?: Video_DetailsUpsertWithWhereUniqueWithoutTeacherInput | Video_DetailsUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: Video_DetailsCreateManyTeacherInputEnvelope
    set?: Video_DetailsWhereUniqueInput | Video_DetailsWhereUniqueInput[]
    disconnect?: Video_DetailsWhereUniqueInput | Video_DetailsWhereUniqueInput[]
    delete?: Video_DetailsWhereUniqueInput | Video_DetailsWhereUniqueInput[]
    connect?: Video_DetailsWhereUniqueInput | Video_DetailsWhereUniqueInput[]
    update?: Video_DetailsUpdateWithWhereUniqueWithoutTeacherInput | Video_DetailsUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: Video_DetailsUpdateManyWithWhereWithoutTeacherInput | Video_DetailsUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: Video_DetailsScalarWhereInput | Video_DetailsScalarWhereInput[]
  }

  export type Teacher_NotesUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<Teacher_NotesCreateWithoutTeacherInput, Teacher_NotesUncheckedCreateWithoutTeacherInput> | Teacher_NotesCreateWithoutTeacherInput[] | Teacher_NotesUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: Teacher_NotesCreateOrConnectWithoutTeacherInput | Teacher_NotesCreateOrConnectWithoutTeacherInput[]
    upsert?: Teacher_NotesUpsertWithWhereUniqueWithoutTeacherInput | Teacher_NotesUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: Teacher_NotesCreateManyTeacherInputEnvelope
    set?: Teacher_NotesWhereUniqueInput | Teacher_NotesWhereUniqueInput[]
    disconnect?: Teacher_NotesWhereUniqueInput | Teacher_NotesWhereUniqueInput[]
    delete?: Teacher_NotesWhereUniqueInput | Teacher_NotesWhereUniqueInput[]
    connect?: Teacher_NotesWhereUniqueInput | Teacher_NotesWhereUniqueInput[]
    update?: Teacher_NotesUpdateWithWhereUniqueWithoutTeacherInput | Teacher_NotesUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: Teacher_NotesUpdateManyWithWhereWithoutTeacherInput | Teacher_NotesUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: Teacher_NotesScalarWhereInput | Teacher_NotesScalarWhereInput[]
  }

  export type TeacherCreateNestedOneWithoutVideo_detailsInput = {
    create?: XOR<TeacherCreateWithoutVideo_detailsInput, TeacherUncheckedCreateWithoutVideo_detailsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutVideo_detailsInput
    connect?: TeacherWhereUniqueInput
  }

  export type TeacherUpdateOneRequiredWithoutVideo_detailsNestedInput = {
    create?: XOR<TeacherCreateWithoutVideo_detailsInput, TeacherUncheckedCreateWithoutVideo_detailsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutVideo_detailsInput
    upsert?: TeacherUpsertWithoutVideo_detailsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutVideo_detailsInput, TeacherUpdateWithoutVideo_detailsInput>, TeacherUncheckedUpdateWithoutVideo_detailsInput>
  }

  export type StudentCreateNestedOneWithoutNotesInput = {
    create?: XOR<StudentCreateWithoutNotesInput, StudentUncheckedCreateWithoutNotesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutNotesInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<StudentCreateWithoutNotesInput, StudentUncheckedCreateWithoutNotesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutNotesInput
    upsert?: StudentUpsertWithoutNotesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutNotesInput, StudentUpdateWithoutNotesInput>, StudentUncheckedUpdateWithoutNotesInput>
  }

  export type TeacherCreateNestedOneWithoutNotesInput = {
    create?: XOR<TeacherCreateWithoutNotesInput, TeacherUncheckedCreateWithoutNotesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutNotesInput
    connect?: TeacherWhereUniqueInput
  }

  export type TeacherUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<TeacherCreateWithoutNotesInput, TeacherUncheckedCreateWithoutNotesInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutNotesInput
    upsert?: TeacherUpsertWithoutNotesInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutNotesInput, TeacherUpdateWithoutNotesInput>, TeacherUncheckedUpdateWithoutNotesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Student_NotesCreateWithoutStudentInput = {
    title: string
    description: string
    pdf?: string | null
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Student_NotesUncheckedCreateWithoutStudentInput = {
    id?: number
    title: string
    description: string
    pdf?: string | null
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Student_NotesCreateOrConnectWithoutStudentInput = {
    where: Student_NotesWhereUniqueInput
    create: XOR<Student_NotesCreateWithoutStudentInput, Student_NotesUncheckedCreateWithoutStudentInput>
  }

  export type Student_NotesCreateManyStudentInputEnvelope = {
    data: Student_NotesCreateManyStudentInput | Student_NotesCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type Student_NotesUpsertWithWhereUniqueWithoutStudentInput = {
    where: Student_NotesWhereUniqueInput
    update: XOR<Student_NotesUpdateWithoutStudentInput, Student_NotesUncheckedUpdateWithoutStudentInput>
    create: XOR<Student_NotesCreateWithoutStudentInput, Student_NotesUncheckedCreateWithoutStudentInput>
  }

  export type Student_NotesUpdateWithWhereUniqueWithoutStudentInput = {
    where: Student_NotesWhereUniqueInput
    data: XOR<Student_NotesUpdateWithoutStudentInput, Student_NotesUncheckedUpdateWithoutStudentInput>
  }

  export type Student_NotesUpdateManyWithWhereWithoutStudentInput = {
    where: Student_NotesScalarWhereInput
    data: XOR<Student_NotesUpdateManyMutationInput, Student_NotesUncheckedUpdateManyWithoutStudentInput>
  }

  export type Student_NotesScalarWhereInput = {
    AND?: Student_NotesScalarWhereInput | Student_NotesScalarWhereInput[]
    OR?: Student_NotesScalarWhereInput[]
    NOT?: Student_NotesScalarWhereInput | Student_NotesScalarWhereInput[]
    id?: IntFilter<"Student_Notes"> | number
    student_id?: IntFilter<"Student_Notes"> | number
    title?: StringFilter<"Student_Notes"> | string
    description?: StringFilter<"Student_Notes"> | string
    pdf?: StringNullableFilter<"Student_Notes"> | string | null
    file?: StringNullableFilter<"Student_Notes"> | string | null
    created_at?: DateTimeFilter<"Student_Notes"> | Date | string
    updated_at?: DateTimeFilter<"Student_Notes"> | Date | string
  }

  export type Video_DetailsCreateWithoutTeacherInput = {
    url: string
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Video_DetailsUncheckedCreateWithoutTeacherInput = {
    id?: number
    url: string
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Video_DetailsCreateOrConnectWithoutTeacherInput = {
    where: Video_DetailsWhereUniqueInput
    create: XOR<Video_DetailsCreateWithoutTeacherInput, Video_DetailsUncheckedCreateWithoutTeacherInput>
  }

  export type Video_DetailsCreateManyTeacherInputEnvelope = {
    data: Video_DetailsCreateManyTeacherInput | Video_DetailsCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type Teacher_NotesCreateWithoutTeacherInput = {
    title: string
    description: string
    pdf?: string | null
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Teacher_NotesUncheckedCreateWithoutTeacherInput = {
    id?: number
    title: string
    description: string
    pdf?: string | null
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Teacher_NotesCreateOrConnectWithoutTeacherInput = {
    where: Teacher_NotesWhereUniqueInput
    create: XOR<Teacher_NotesCreateWithoutTeacherInput, Teacher_NotesUncheckedCreateWithoutTeacherInput>
  }

  export type Teacher_NotesCreateManyTeacherInputEnvelope = {
    data: Teacher_NotesCreateManyTeacherInput | Teacher_NotesCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type Video_DetailsUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Video_DetailsWhereUniqueInput
    update: XOR<Video_DetailsUpdateWithoutTeacherInput, Video_DetailsUncheckedUpdateWithoutTeacherInput>
    create: XOR<Video_DetailsCreateWithoutTeacherInput, Video_DetailsUncheckedCreateWithoutTeacherInput>
  }

  export type Video_DetailsUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Video_DetailsWhereUniqueInput
    data: XOR<Video_DetailsUpdateWithoutTeacherInput, Video_DetailsUncheckedUpdateWithoutTeacherInput>
  }

  export type Video_DetailsUpdateManyWithWhereWithoutTeacherInput = {
    where: Video_DetailsScalarWhereInput
    data: XOR<Video_DetailsUpdateManyMutationInput, Video_DetailsUncheckedUpdateManyWithoutTeacherInput>
  }

  export type Video_DetailsScalarWhereInput = {
    AND?: Video_DetailsScalarWhereInput | Video_DetailsScalarWhereInput[]
    OR?: Video_DetailsScalarWhereInput[]
    NOT?: Video_DetailsScalarWhereInput | Video_DetailsScalarWhereInput[]
    id?: IntFilter<"Video_Details"> | number
    teacher_id?: IntFilter<"Video_Details"> | number
    url?: StringFilter<"Video_Details"> | string
    title?: StringFilter<"Video_Details"> | string
    description?: StringFilter<"Video_Details"> | string
    created_at?: DateTimeFilter<"Video_Details"> | Date | string
    updated_at?: DateTimeFilter<"Video_Details"> | Date | string
  }

  export type Teacher_NotesUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Teacher_NotesWhereUniqueInput
    update: XOR<Teacher_NotesUpdateWithoutTeacherInput, Teacher_NotesUncheckedUpdateWithoutTeacherInput>
    create: XOR<Teacher_NotesCreateWithoutTeacherInput, Teacher_NotesUncheckedCreateWithoutTeacherInput>
  }

  export type Teacher_NotesUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Teacher_NotesWhereUniqueInput
    data: XOR<Teacher_NotesUpdateWithoutTeacherInput, Teacher_NotesUncheckedUpdateWithoutTeacherInput>
  }

  export type Teacher_NotesUpdateManyWithWhereWithoutTeacherInput = {
    where: Teacher_NotesScalarWhereInput
    data: XOR<Teacher_NotesUpdateManyMutationInput, Teacher_NotesUncheckedUpdateManyWithoutTeacherInput>
  }

  export type Teacher_NotesScalarWhereInput = {
    AND?: Teacher_NotesScalarWhereInput | Teacher_NotesScalarWhereInput[]
    OR?: Teacher_NotesScalarWhereInput[]
    NOT?: Teacher_NotesScalarWhereInput | Teacher_NotesScalarWhereInput[]
    id?: IntFilter<"Teacher_Notes"> | number
    teacher_id?: IntFilter<"Teacher_Notes"> | number
    title?: StringFilter<"Teacher_Notes"> | string
    description?: StringFilter<"Teacher_Notes"> | string
    pdf?: StringNullableFilter<"Teacher_Notes"> | string | null
    file?: StringNullableFilter<"Teacher_Notes"> | string | null
    created_at?: DateTimeFilter<"Teacher_Notes"> | Date | string
    updated_at?: DateTimeFilter<"Teacher_Notes"> | Date | string
  }

  export type TeacherCreateWithoutVideo_detailsInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    dob: Date | string
    photo_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    notes?: Teacher_NotesCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutVideo_detailsInput = {
    teacher_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    dob: Date | string
    photo_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    notes?: Teacher_NotesUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutVideo_detailsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutVideo_detailsInput, TeacherUncheckedCreateWithoutVideo_detailsInput>
  }

  export type TeacherUpsertWithoutVideo_detailsInput = {
    update: XOR<TeacherUpdateWithoutVideo_detailsInput, TeacherUncheckedUpdateWithoutVideo_detailsInput>
    create: XOR<TeacherCreateWithoutVideo_detailsInput, TeacherUncheckedCreateWithoutVideo_detailsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutVideo_detailsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutVideo_detailsInput, TeacherUncheckedUpdateWithoutVideo_detailsInput>
  }

  export type TeacherUpdateWithoutVideo_detailsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: Teacher_NotesUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutVideo_detailsInput = {
    teacher_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: Teacher_NotesUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type StudentCreateWithoutNotesInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    dob: Date | string
    photo_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StudentUncheckedCreateWithoutNotesInput = {
    student_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    dob: Date | string
    photo_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type StudentCreateOrConnectWithoutNotesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutNotesInput, StudentUncheckedCreateWithoutNotesInput>
  }

  export type StudentUpsertWithoutNotesInput = {
    update: XOR<StudentUpdateWithoutNotesInput, StudentUncheckedUpdateWithoutNotesInput>
    create: XOR<StudentCreateWithoutNotesInput, StudentUncheckedCreateWithoutNotesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutNotesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutNotesInput, StudentUncheckedUpdateWithoutNotesInput>
  }

  export type StudentUpdateWithoutNotesInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateWithoutNotesInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherCreateWithoutNotesInput = {
    first_name: string
    last_name: string
    email: string
    password: string
    dob: Date | string
    photo_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    video_details?: Video_DetailsCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutNotesInput = {
    teacher_id?: number
    first_name: string
    last_name: string
    email: string
    password: string
    dob: Date | string
    photo_url?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    video_details?: Video_DetailsUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutNotesInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutNotesInput, TeacherUncheckedCreateWithoutNotesInput>
  }

  export type TeacherUpsertWithoutNotesInput = {
    update: XOR<TeacherUpdateWithoutNotesInput, TeacherUncheckedUpdateWithoutNotesInput>
    create: XOR<TeacherCreateWithoutNotesInput, TeacherUncheckedCreateWithoutNotesInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutNotesInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutNotesInput, TeacherUncheckedUpdateWithoutNotesInput>
  }

  export type TeacherUpdateWithoutNotesInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    video_details?: Video_DetailsUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutNotesInput = {
    teacher_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    video_details?: Video_DetailsUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type Student_NotesCreateManyStudentInput = {
    id?: number
    title: string
    description: string
    pdf?: string | null
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Student_NotesUpdateWithoutStudentInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Student_NotesUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Student_NotesUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Video_DetailsCreateManyTeacherInput = {
    id?: number
    url: string
    title: string
    description: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Teacher_NotesCreateManyTeacherInput = {
    id?: number
    title: string
    description: string
    pdf?: string | null
    file?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type Video_DetailsUpdateWithoutTeacherInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Video_DetailsUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Video_DetailsUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Teacher_NotesUpdateWithoutTeacherInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Teacher_NotesUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Teacher_NotesUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf?: NullableStringFieldUpdateOperationsInput | string | null
    file?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}