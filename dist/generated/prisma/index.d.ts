
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Administrateur
 * 
 */
export type Administrateur = $Result.DefaultSelection<Prisma.$AdministrateurPayload>
/**
 * Model Avis
 * 
 */
export type Avis = $Result.DefaultSelection<Prisma.$AvisPayload>
/**
 * Model AvisProduit
 * 
 */
export type AvisProduit = $Result.DefaultSelection<Prisma.$AvisProduitPayload>
/**
 * Model GIE
 * 
 */
export type GIE = $Result.DefaultSelection<Prisma.$GIEPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Categorie
 * 
 */
export type Categorie = $Result.DefaultSelection<Prisma.$CategoriePayload>
/**
 * Model Produit
 * 
 */
export type Produit = $Result.DefaultSelection<Prisma.$ProduitPayload>
/**
 * Model Commande
 * 
 */
export type Commande = $Result.DefaultSelection<Prisma.$CommandePayload>
/**
 * Model Paiement
 * 
 */
export type Paiement = $Result.DefaultSelection<Prisma.$PaiementPayload>
/**
 * Model PanierProduit
 * 
 */
export type PanierProduit = $Result.DefaultSelection<Prisma.$PanierProduitPayload>
/**
 * Model adresses
 * 
 */
export type adresses = $Result.DefaultSelection<Prisma.$adressesPayload>
/**
 * Model livreurs
 * 
 */
export type livreurs = $Result.DefaultSelection<Prisma.$livreursPayload>
/**
 * Model regions
 * 
 */
export type regions = $Result.DefaultSelection<Prisma.$regionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatutGIE: {
  ACTIF: 'ACTIF',
  INACTIF: 'INACTIF',
  SUSPENDU: 'SUSPENDU'
};

export type StatutGIE = (typeof StatutGIE)[keyof typeof StatutGIE]


export const StatutClient: {
  ACTIF: 'ACTIF',
  INACTIF: 'INACTIF',
  BLOQUE: 'BLOQUE'
};

export type StatutClient = (typeof StatutClient)[keyof typeof StatutClient]


export const StatutProduit: {
  DISPONIBLE: 'DISPONIBLE',
  RUPTURE: 'RUPTURE',
  HORS_STOCK: 'HORS_STOCK'
};

export type StatutProduit = (typeof StatutProduit)[keyof typeof StatutProduit]


export const StatutCommande: {
  EN_ATTENTE: 'EN_ATTENTE',
  CONFIRMEE: 'CONFIRMEE',
  EN_PREPARATION: 'EN_PREPARATION',
  EXPEDIEE: 'EXPEDIEE',
  LIVREE: 'LIVREE',
  ANNULEE: 'ANNULEE'
};

export type StatutCommande = (typeof StatutCommande)[keyof typeof StatutCommande]


export const StatutPaiement: {
  EN_ATTENTE: 'EN_ATTENTE',
  VALIDE: 'VALIDE',
  ECHEC: 'ECHEC',
  REMBOURSE: 'REMBOURSE'
};

export type StatutPaiement = (typeof StatutPaiement)[keyof typeof StatutPaiement]


export const MethodePaiement: {
  CARTE_BANCAIRE: 'CARTE_BANCAIRE',
  VIREMENT: 'VIREMENT',
  ESPECES: 'ESPECES',
  MOBILE_MONEY: 'MOBILE_MONEY',
  PAIEMENT_A_LA_LIVRAISON: 'PAIEMENT_A_LA_LIVRAISON',
  WAVE: 'WAVE',
  ORANGE_MONEY: 'ORANGE_MONEY'
};

export type MethodePaiement = (typeof MethodePaiement)[keyof typeof MethodePaiement]


export const StatutGIEProduit: {
  EN_ATTENTE: 'EN_ATTENTE',
  EN_PREPARATION: 'EN_PREPARATION',
  PRET: 'PRET',
  ANNULE: 'ANNULE'
};

export type StatutGIEProduit = (typeof StatutGIEProduit)[keyof typeof StatutGIEProduit]


export const StatutLivreur: {
  DISPONIBLE: 'DISPONIBLE',
  EN_LIVRAISON: 'EN_LIVRAISON',
  INDISPONIBLE: 'INDISPONIBLE',
  BLOQUE: 'BLOQUE'
};

export type StatutLivreur = (typeof StatutLivreur)[keyof typeof StatutLivreur]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatutGIE = $Enums.StatutGIE

export const StatutGIE: typeof $Enums.StatutGIE

export type StatutClient = $Enums.StatutClient

export const StatutClient: typeof $Enums.StatutClient

export type StatutProduit = $Enums.StatutProduit

export const StatutProduit: typeof $Enums.StatutProduit

export type StatutCommande = $Enums.StatutCommande

export const StatutCommande: typeof $Enums.StatutCommande

export type StatutPaiement = $Enums.StatutPaiement

export const StatutPaiement: typeof $Enums.StatutPaiement

export type MethodePaiement = $Enums.MethodePaiement

export const MethodePaiement: typeof $Enums.MethodePaiement

export type StatutGIEProduit = $Enums.StatutGIEProduit

export const StatutGIEProduit: typeof $Enums.StatutGIEProduit

export type StatutLivreur = $Enums.StatutLivreur

export const StatutLivreur: typeof $Enums.StatutLivreur

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Administrateurs
 * const administrateurs = await prisma.administrateur.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Administrateurs
   * const administrateurs = await prisma.administrateur.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.administrateur`: Exposes CRUD operations for the **Administrateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administrateurs
    * const administrateurs = await prisma.administrateur.findMany()
    * ```
    */
  get administrateur(): Prisma.AdministrateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avis`: Exposes CRUD operations for the **Avis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avis
    * const avis = await prisma.avis.findMany()
    * ```
    */
  get avis(): Prisma.AvisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avisProduit`: Exposes CRUD operations for the **AvisProduit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvisProduits
    * const avisProduits = await prisma.avisProduit.findMany()
    * ```
    */
  get avisProduit(): Prisma.AvisProduitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gIE`: Exposes CRUD operations for the **GIE** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GIES
    * const gIES = await prisma.gIE.findMany()
    * ```
    */
  get gIE(): Prisma.GIEDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categorie`: Exposes CRUD operations for the **Categorie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categorie.findMany()
    * ```
    */
  get categorie(): Prisma.CategorieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produit`: Exposes CRUD operations for the **Produit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produits
    * const produits = await prisma.produit.findMany()
    * ```
    */
  get produit(): Prisma.ProduitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commande`: Exposes CRUD operations for the **Commande** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commandes
    * const commandes = await prisma.commande.findMany()
    * ```
    */
  get commande(): Prisma.CommandeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paiement`: Exposes CRUD operations for the **Paiement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paiements
    * const paiements = await prisma.paiement.findMany()
    * ```
    */
  get paiement(): Prisma.PaiementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.panierProduit`: Exposes CRUD operations for the **PanierProduit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PanierProduits
    * const panierProduits = await prisma.panierProduit.findMany()
    * ```
    */
  get panierProduit(): Prisma.PanierProduitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.adresses`: Exposes CRUD operations for the **adresses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adresses
    * const adresses = await prisma.adresses.findMany()
    * ```
    */
  get adresses(): Prisma.adressesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.livreurs`: Exposes CRUD operations for the **livreurs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Livreurs
    * const livreurs = await prisma.livreurs.findMany()
    * ```
    */
  get livreurs(): Prisma.livreursDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.regions`: Exposes CRUD operations for the **regions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.regions.findMany()
    * ```
    */
  get regions(): Prisma.regionsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Administrateur: 'Administrateur',
    Avis: 'Avis',
    AvisProduit: 'AvisProduit',
    GIE: 'GIE',
    Client: 'Client',
    Categorie: 'Categorie',
    Produit: 'Produit',
    Commande: 'Commande',
    Paiement: 'Paiement',
    PanierProduit: 'PanierProduit',
    adresses: 'adresses',
    livreurs: 'livreurs',
    regions: 'regions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "administrateur" | "avis" | "avisProduit" | "gIE" | "client" | "categorie" | "produit" | "commande" | "paiement" | "panierProduit" | "adresses" | "livreurs" | "regions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Administrateur: {
        payload: Prisma.$AdministrateurPayload<ExtArgs>
        fields: Prisma.AdministrateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministrateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministrateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrateurPayload>
          }
          findFirst: {
            args: Prisma.AdministrateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministrateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrateurPayload>
          }
          findMany: {
            args: Prisma.AdministrateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrateurPayload>[]
          }
          create: {
            args: Prisma.AdministrateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrateurPayload>
          }
          createMany: {
            args: Prisma.AdministrateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdministrateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrateurPayload>[]
          }
          delete: {
            args: Prisma.AdministrateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrateurPayload>
          }
          update: {
            args: Prisma.AdministrateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrateurPayload>
          }
          deleteMany: {
            args: Prisma.AdministrateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministrateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdministrateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrateurPayload>[]
          }
          upsert: {
            args: Prisma.AdministrateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministrateurPayload>
          }
          aggregate: {
            args: Prisma.AdministrateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrateur>
          }
          groupBy: {
            args: Prisma.AdministrateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministrateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministrateurCountArgs<ExtArgs>
            result: $Utils.Optional<AdministrateurCountAggregateOutputType> | number
          }
        }
      }
      Avis: {
        payload: Prisma.$AvisPayload<ExtArgs>
        fields: Prisma.AvisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          findFirst: {
            args: Prisma.AvisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          findMany: {
            args: Prisma.AvisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>[]
          }
          create: {
            args: Prisma.AvisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          createMany: {
            args: Prisma.AvisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>[]
          }
          delete: {
            args: Prisma.AvisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          update: {
            args: Prisma.AvisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          deleteMany: {
            args: Prisma.AvisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>[]
          }
          upsert: {
            args: Prisma.AvisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisPayload>
          }
          aggregate: {
            args: Prisma.AvisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvis>
          }
          groupBy: {
            args: Prisma.AvisGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvisGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvisCountArgs<ExtArgs>
            result: $Utils.Optional<AvisCountAggregateOutputType> | number
          }
        }
      }
      AvisProduit: {
        payload: Prisma.$AvisProduitPayload<ExtArgs>
        fields: Prisma.AvisProduitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvisProduitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisProduitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvisProduitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisProduitPayload>
          }
          findFirst: {
            args: Prisma.AvisProduitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisProduitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvisProduitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisProduitPayload>
          }
          findMany: {
            args: Prisma.AvisProduitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisProduitPayload>[]
          }
          create: {
            args: Prisma.AvisProduitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisProduitPayload>
          }
          createMany: {
            args: Prisma.AvisProduitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvisProduitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisProduitPayload>[]
          }
          delete: {
            args: Prisma.AvisProduitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisProduitPayload>
          }
          update: {
            args: Prisma.AvisProduitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisProduitPayload>
          }
          deleteMany: {
            args: Prisma.AvisProduitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvisProduitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvisProduitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisProduitPayload>[]
          }
          upsert: {
            args: Prisma.AvisProduitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvisProduitPayload>
          }
          aggregate: {
            args: Prisma.AvisProduitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvisProduit>
          }
          groupBy: {
            args: Prisma.AvisProduitGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvisProduitGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvisProduitCountArgs<ExtArgs>
            result: $Utils.Optional<AvisProduitCountAggregateOutputType> | number
          }
        }
      }
      GIE: {
        payload: Prisma.$GIEPayload<ExtArgs>
        fields: Prisma.GIEFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GIEFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIEPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GIEFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIEPayload>
          }
          findFirst: {
            args: Prisma.GIEFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIEPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GIEFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIEPayload>
          }
          findMany: {
            args: Prisma.GIEFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIEPayload>[]
          }
          create: {
            args: Prisma.GIECreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIEPayload>
          }
          createMany: {
            args: Prisma.GIECreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GIECreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIEPayload>[]
          }
          delete: {
            args: Prisma.GIEDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIEPayload>
          }
          update: {
            args: Prisma.GIEUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIEPayload>
          }
          deleteMany: {
            args: Prisma.GIEDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GIEUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GIEUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIEPayload>[]
          }
          upsert: {
            args: Prisma.GIEUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GIEPayload>
          }
          aggregate: {
            args: Prisma.GIEAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGIE>
          }
          groupBy: {
            args: Prisma.GIEGroupByArgs<ExtArgs>
            result: $Utils.Optional<GIEGroupByOutputType>[]
          }
          count: {
            args: Prisma.GIECountArgs<ExtArgs>
            result: $Utils.Optional<GIECountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Categorie: {
        payload: Prisma.$CategoriePayload<ExtArgs>
        fields: Prisma.CategorieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategorieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategorieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findFirst: {
            args: Prisma.CategorieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategorieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          findMany: {
            args: Prisma.CategorieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          create: {
            args: Prisma.CategorieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          createMany: {
            args: Prisma.CategorieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategorieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          delete: {
            args: Prisma.CategorieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          update: {
            args: Prisma.CategorieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          deleteMany: {
            args: Prisma.CategorieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategorieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategorieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>[]
          }
          upsert: {
            args: Prisma.CategorieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriePayload>
          }
          aggregate: {
            args: Prisma.CategorieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategorie>
          }
          groupBy: {
            args: Prisma.CategorieGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategorieGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategorieCountArgs<ExtArgs>
            result: $Utils.Optional<CategorieCountAggregateOutputType> | number
          }
        }
      }
      Produit: {
        payload: Prisma.$ProduitPayload<ExtArgs>
        fields: Prisma.ProduitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProduitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProduitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          findFirst: {
            args: Prisma.ProduitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProduitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          findMany: {
            args: Prisma.ProduitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>[]
          }
          create: {
            args: Prisma.ProduitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          createMany: {
            args: Prisma.ProduitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProduitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>[]
          }
          delete: {
            args: Prisma.ProduitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          update: {
            args: Prisma.ProduitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          deleteMany: {
            args: Prisma.ProduitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProduitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProduitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>[]
          }
          upsert: {
            args: Prisma.ProduitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProduitPayload>
          }
          aggregate: {
            args: Prisma.ProduitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduit>
          }
          groupBy: {
            args: Prisma.ProduitGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProduitGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProduitCountArgs<ExtArgs>
            result: $Utils.Optional<ProduitCountAggregateOutputType> | number
          }
        }
      }
      Commande: {
        payload: Prisma.$CommandePayload<ExtArgs>
        fields: Prisma.CommandeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommandeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommandeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          findFirst: {
            args: Prisma.CommandeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommandeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          findMany: {
            args: Prisma.CommandeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>[]
          }
          create: {
            args: Prisma.CommandeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          createMany: {
            args: Prisma.CommandeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommandeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>[]
          }
          delete: {
            args: Prisma.CommandeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          update: {
            args: Prisma.CommandeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          deleteMany: {
            args: Prisma.CommandeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommandeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommandeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>[]
          }
          upsert: {
            args: Prisma.CommandeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommandePayload>
          }
          aggregate: {
            args: Prisma.CommandeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommande>
          }
          groupBy: {
            args: Prisma.CommandeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommandeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommandeCountArgs<ExtArgs>
            result: $Utils.Optional<CommandeCountAggregateOutputType> | number
          }
        }
      }
      Paiement: {
        payload: Prisma.$PaiementPayload<ExtArgs>
        fields: Prisma.PaiementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaiementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaiementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findFirst: {
            args: Prisma.PaiementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaiementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findMany: {
            args: Prisma.PaiementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          create: {
            args: Prisma.PaiementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          createMany: {
            args: Prisma.PaiementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaiementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          delete: {
            args: Prisma.PaiementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          update: {
            args: Prisma.PaiementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          deleteMany: {
            args: Prisma.PaiementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaiementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaiementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          upsert: {
            args: Prisma.PaiementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          aggregate: {
            args: Prisma.PaiementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaiement>
          }
          groupBy: {
            args: Prisma.PaiementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaiementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaiementCountArgs<ExtArgs>
            result: $Utils.Optional<PaiementCountAggregateOutputType> | number
          }
        }
      }
      PanierProduit: {
        payload: Prisma.$PanierProduitPayload<ExtArgs>
        fields: Prisma.PanierProduitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PanierProduitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierProduitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PanierProduitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierProduitPayload>
          }
          findFirst: {
            args: Prisma.PanierProduitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierProduitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PanierProduitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierProduitPayload>
          }
          findMany: {
            args: Prisma.PanierProduitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierProduitPayload>[]
          }
          create: {
            args: Prisma.PanierProduitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierProduitPayload>
          }
          createMany: {
            args: Prisma.PanierProduitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PanierProduitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierProduitPayload>[]
          }
          delete: {
            args: Prisma.PanierProduitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierProduitPayload>
          }
          update: {
            args: Prisma.PanierProduitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierProduitPayload>
          }
          deleteMany: {
            args: Prisma.PanierProduitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PanierProduitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PanierProduitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierProduitPayload>[]
          }
          upsert: {
            args: Prisma.PanierProduitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanierProduitPayload>
          }
          aggregate: {
            args: Prisma.PanierProduitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePanierProduit>
          }
          groupBy: {
            args: Prisma.PanierProduitGroupByArgs<ExtArgs>
            result: $Utils.Optional<PanierProduitGroupByOutputType>[]
          }
          count: {
            args: Prisma.PanierProduitCountArgs<ExtArgs>
            result: $Utils.Optional<PanierProduitCountAggregateOutputType> | number
          }
        }
      }
      adresses: {
        payload: Prisma.$adressesPayload<ExtArgs>
        fields: Prisma.adressesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.adressesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adressesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.adressesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adressesPayload>
          }
          findFirst: {
            args: Prisma.adressesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adressesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.adressesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adressesPayload>
          }
          findMany: {
            args: Prisma.adressesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adressesPayload>[]
          }
          create: {
            args: Prisma.adressesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adressesPayload>
          }
          createMany: {
            args: Prisma.adressesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.adressesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adressesPayload>[]
          }
          delete: {
            args: Prisma.adressesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adressesPayload>
          }
          update: {
            args: Prisma.adressesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adressesPayload>
          }
          deleteMany: {
            args: Prisma.adressesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.adressesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.adressesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adressesPayload>[]
          }
          upsert: {
            args: Prisma.adressesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$adressesPayload>
          }
          aggregate: {
            args: Prisma.AdressesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdresses>
          }
          groupBy: {
            args: Prisma.adressesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdressesGroupByOutputType>[]
          }
          count: {
            args: Prisma.adressesCountArgs<ExtArgs>
            result: $Utils.Optional<AdressesCountAggregateOutputType> | number
          }
        }
      }
      livreurs: {
        payload: Prisma.$livreursPayload<ExtArgs>
        fields: Prisma.livreursFieldRefs
        operations: {
          findUnique: {
            args: Prisma.livreursFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livreursPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.livreursFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livreursPayload>
          }
          findFirst: {
            args: Prisma.livreursFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livreursPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.livreursFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livreursPayload>
          }
          findMany: {
            args: Prisma.livreursFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livreursPayload>[]
          }
          create: {
            args: Prisma.livreursCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livreursPayload>
          }
          createMany: {
            args: Prisma.livreursCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.livreursCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livreursPayload>[]
          }
          delete: {
            args: Prisma.livreursDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livreursPayload>
          }
          update: {
            args: Prisma.livreursUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livreursPayload>
          }
          deleteMany: {
            args: Prisma.livreursDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.livreursUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.livreursUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livreursPayload>[]
          }
          upsert: {
            args: Prisma.livreursUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livreursPayload>
          }
          aggregate: {
            args: Prisma.LivreursAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivreurs>
          }
          groupBy: {
            args: Prisma.livreursGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivreursGroupByOutputType>[]
          }
          count: {
            args: Prisma.livreursCountArgs<ExtArgs>
            result: $Utils.Optional<LivreursCountAggregateOutputType> | number
          }
        }
      }
      regions: {
        payload: Prisma.$regionsPayload<ExtArgs>
        fields: Prisma.regionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.regionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.regionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          findFirst: {
            args: Prisma.regionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.regionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          findMany: {
            args: Prisma.regionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>[]
          }
          create: {
            args: Prisma.regionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          createMany: {
            args: Prisma.regionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.regionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>[]
          }
          delete: {
            args: Prisma.regionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          update: {
            args: Prisma.regionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          deleteMany: {
            args: Prisma.regionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.regionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.regionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>[]
          }
          upsert: {
            args: Prisma.regionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$regionsPayload>
          }
          aggregate: {
            args: Prisma.RegionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegions>
          }
          groupBy: {
            args: Prisma.regionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.regionsCountArgs<ExtArgs>
            result: $Utils.Optional<RegionsCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    administrateur?: AdministrateurOmit
    avis?: AvisOmit
    avisProduit?: AvisProduitOmit
    gIE?: GIEOmit
    client?: ClientOmit
    categorie?: CategorieOmit
    produit?: ProduitOmit
    commande?: CommandeOmit
    paiement?: PaiementOmit
    panierProduit?: PanierProduitOmit
    adresses?: adressesOmit
    livreurs?: livreursOmit
    regions?: regionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type AdministrateurCountOutputType
   */

  export type AdministrateurCountOutputType = {
    clients: number
    gies: number
  }

  export type AdministrateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | AdministrateurCountOutputTypeCountClientsArgs
    gies?: boolean | AdministrateurCountOutputTypeCountGiesArgs
  }

  // Custom InputTypes
  /**
   * AdministrateurCountOutputType without action
   */
  export type AdministrateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministrateurCountOutputType
     */
    select?: AdministrateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdministrateurCountOutputType without action
   */
  export type AdministrateurCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * AdministrateurCountOutputType without action
   */
  export type AdministrateurCountOutputTypeCountGiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GIEWhereInput
  }


  /**
   * Count Type GIECountOutputType
   */

  export type GIECountOutputType = {
    produits: number
  }

  export type GIECountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produits?: boolean | GIECountOutputTypeCountProduitsArgs
  }

  // Custom InputTypes
  /**
   * GIECountOutputType without action
   */
  export type GIECountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIECountOutputType
     */
    select?: GIECountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GIECountOutputType without action
   */
  export type GIECountOutputTypeCountProduitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduitWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    commandes: number
    avis: number
    avisProduit: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commandes?: boolean | ClientCountOutputTypeCountCommandesArgs
    avis?: boolean | ClientCountOutputTypeCountAvisArgs
    avisProduit?: boolean | ClientCountOutputTypeCountAvisProduitArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountCommandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAvisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvisWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountAvisProduitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvisProduitWhereInput
  }


  /**
   * Count Type CategorieCountOutputType
   */

  export type CategorieCountOutputType = {
    produits: number
  }

  export type CategorieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produits?: boolean | CategorieCountOutputTypeCountProduitsArgs
  }

  // Custom InputTypes
  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategorieCountOutputType
     */
    select?: CategorieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategorieCountOutputType without action
   */
  export type CategorieCountOutputTypeCountProduitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduitWhereInput
  }


  /**
   * Count Type ProduitCountOutputType
   */

  export type ProduitCountOutputType = {
    panierProduits: number
    avisProduit: number
  }

  export type ProduitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panierProduits?: boolean | ProduitCountOutputTypeCountPanierProduitsArgs
    avisProduit?: boolean | ProduitCountOutputTypeCountAvisProduitArgs
  }

  // Custom InputTypes
  /**
   * ProduitCountOutputType without action
   */
  export type ProduitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProduitCountOutputType
     */
    select?: ProduitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProduitCountOutputType without action
   */
  export type ProduitCountOutputTypeCountPanierProduitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanierProduitWhereInput
  }

  /**
   * ProduitCountOutputType without action
   */
  export type ProduitCountOutputTypeCountAvisProduitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvisProduitWhereInput
  }


  /**
   * Count Type CommandeCountOutputType
   */

  export type CommandeCountOutputType = {
    panierProduits: number
  }

  export type CommandeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panierProduits?: boolean | CommandeCountOutputTypeCountPanierProduitsArgs
  }

  // Custom InputTypes
  /**
   * CommandeCountOutputType without action
   */
  export type CommandeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommandeCountOutputType
     */
    select?: CommandeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommandeCountOutputType without action
   */
  export type CommandeCountOutputTypeCountPanierProduitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanierProduitWhereInput
  }


  /**
   * Count Type LivreursCountOutputType
   */

  export type LivreursCountOutputType = {
    commandes: number
  }

  export type LivreursCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commandes?: boolean | LivreursCountOutputTypeCountCommandesArgs
  }

  // Custom InputTypes
  /**
   * LivreursCountOutputType without action
   */
  export type LivreursCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivreursCountOutputType
     */
    select?: LivreursCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LivreursCountOutputType without action
   */
  export type LivreursCountOutputTypeCountCommandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
  }


  /**
   * Count Type RegionsCountOutputType
   */

  export type RegionsCountOutputType = {
    adresses: number
    commandes: number
    gies: number
    livreurs: number
  }

  export type RegionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adresses?: boolean | RegionsCountOutputTypeCountAdressesArgs
    commandes?: boolean | RegionsCountOutputTypeCountCommandesArgs
    gies?: boolean | RegionsCountOutputTypeCountGiesArgs
    livreurs?: boolean | RegionsCountOutputTypeCountLivreursArgs
  }

  // Custom InputTypes
  /**
   * RegionsCountOutputType without action
   */
  export type RegionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionsCountOutputType
     */
    select?: RegionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionsCountOutputType without action
   */
  export type RegionsCountOutputTypeCountAdressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adressesWhereInput
  }

  /**
   * RegionsCountOutputType without action
   */
  export type RegionsCountOutputTypeCountCommandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
  }

  /**
   * RegionsCountOutputType without action
   */
  export type RegionsCountOutputTypeCountGiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GIEWhereInput
  }

  /**
   * RegionsCountOutputType without action
   */
  export type RegionsCountOutputTypeCountLivreursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: livreursWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Administrateur
   */

  export type AggregateAdministrateur = {
    _count: AdministrateurCountAggregateOutputType | null
    _min: AdministrateurMinAggregateOutputType | null
    _max: AdministrateurMaxAggregateOutputType | null
  }

  export type AdministrateurMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministrateurMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministrateurCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nom: number
    prenom: number
    telephone: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdministrateurMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nom?: true
    prenom?: true
    telephone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministrateurMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nom?: true
    prenom?: true
    telephone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministrateurCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nom?: true
    prenom?: true
    telephone?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdministrateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrateur to aggregate.
     */
    where?: AdministrateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrateurs to fetch.
     */
    orderBy?: AdministrateurOrderByWithRelationInput | AdministrateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministrateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administrateurs
    **/
    _count?: true | AdministrateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministrateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministrateurMaxAggregateInputType
  }

  export type GetAdministrateurAggregateType<T extends AdministrateurAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrateur[P]>
      : GetScalarType<T[P], AggregateAdministrateur[P]>
  }




  export type AdministrateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministrateurWhereInput
    orderBy?: AdministrateurOrderByWithAggregationInput | AdministrateurOrderByWithAggregationInput[]
    by: AdministrateurScalarFieldEnum[] | AdministrateurScalarFieldEnum
    having?: AdministrateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministrateurCountAggregateInputType | true
    _min?: AdministrateurMinAggregateInputType
    _max?: AdministrateurMaxAggregateInputType
  }

  export type AdministrateurGroupByOutputType = {
    id: string
    email: string
    password: string
    nom: string
    prenom: string
    telephone: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: AdministrateurCountAggregateOutputType | null
    _min: AdministrateurMinAggregateOutputType | null
    _max: AdministrateurMaxAggregateOutputType | null
  }

  type GetAdministrateurGroupByPayload<T extends AdministrateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministrateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministrateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministrateurGroupByOutputType[P]>
            : GetScalarType<T[P], AdministrateurGroupByOutputType[P]>
        }
      >
    >


  export type AdministrateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clients?: boolean | Administrateur$clientsArgs<ExtArgs>
    gies?: boolean | Administrateur$giesArgs<ExtArgs>
    _count?: boolean | AdministrateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrateur"]>

  export type AdministrateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["administrateur"]>

  export type AdministrateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["administrateur"]>

  export type AdministrateurSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdministrateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nom" | "prenom" | "telephone" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["administrateur"]>
  export type AdministrateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clients?: boolean | Administrateur$clientsArgs<ExtArgs>
    gies?: boolean | Administrateur$giesArgs<ExtArgs>
    _count?: boolean | AdministrateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdministrateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdministrateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdministrateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrateur"
    objects: {
      clients: Prisma.$ClientPayload<ExtArgs>[]
      gies: Prisma.$GIEPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      nom: string
      prenom: string
      telephone: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["administrateur"]>
    composites: {}
  }

  type AdministrateurGetPayload<S extends boolean | null | undefined | AdministrateurDefaultArgs> = $Result.GetResult<Prisma.$AdministrateurPayload, S>

  type AdministrateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdministrateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministrateurCountAggregateInputType | true
    }

  export interface AdministrateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrateur'], meta: { name: 'Administrateur' } }
    /**
     * Find zero or one Administrateur that matches the filter.
     * @param {AdministrateurFindUniqueArgs} args - Arguments to find a Administrateur
     * @example
     * // Get one Administrateur
     * const administrateur = await prisma.administrateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministrateurFindUniqueArgs>(args: SelectSubset<T, AdministrateurFindUniqueArgs<ExtArgs>>): Prisma__AdministrateurClient<$Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administrateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdministrateurFindUniqueOrThrowArgs} args - Arguments to find a Administrateur
     * @example
     * // Get one Administrateur
     * const administrateur = await prisma.administrateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministrateurFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministrateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministrateurClient<$Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrateurFindFirstArgs} args - Arguments to find a Administrateur
     * @example
     * // Get one Administrateur
     * const administrateur = await prisma.administrateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministrateurFindFirstArgs>(args?: SelectSubset<T, AdministrateurFindFirstArgs<ExtArgs>>): Prisma__AdministrateurClient<$Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrateurFindFirstOrThrowArgs} args - Arguments to find a Administrateur
     * @example
     * // Get one Administrateur
     * const administrateur = await prisma.administrateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministrateurFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministrateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministrateurClient<$Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administrateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administrateurs
     * const administrateurs = await prisma.administrateur.findMany()
     * 
     * // Get first 10 Administrateurs
     * const administrateurs = await prisma.administrateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const administrateurWithIdOnly = await prisma.administrateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdministrateurFindManyArgs>(args?: SelectSubset<T, AdministrateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administrateur.
     * @param {AdministrateurCreateArgs} args - Arguments to create a Administrateur.
     * @example
     * // Create one Administrateur
     * const Administrateur = await prisma.administrateur.create({
     *   data: {
     *     // ... data to create a Administrateur
     *   }
     * })
     * 
     */
    create<T extends AdministrateurCreateArgs>(args: SelectSubset<T, AdministrateurCreateArgs<ExtArgs>>): Prisma__AdministrateurClient<$Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administrateurs.
     * @param {AdministrateurCreateManyArgs} args - Arguments to create many Administrateurs.
     * @example
     * // Create many Administrateurs
     * const administrateur = await prisma.administrateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministrateurCreateManyArgs>(args?: SelectSubset<T, AdministrateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Administrateurs and returns the data saved in the database.
     * @param {AdministrateurCreateManyAndReturnArgs} args - Arguments to create many Administrateurs.
     * @example
     * // Create many Administrateurs
     * const administrateur = await prisma.administrateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Administrateurs and only return the `id`
     * const administrateurWithIdOnly = await prisma.administrateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdministrateurCreateManyAndReturnArgs>(args?: SelectSubset<T, AdministrateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Administrateur.
     * @param {AdministrateurDeleteArgs} args - Arguments to delete one Administrateur.
     * @example
     * // Delete one Administrateur
     * const Administrateur = await prisma.administrateur.delete({
     *   where: {
     *     // ... filter to delete one Administrateur
     *   }
     * })
     * 
     */
    delete<T extends AdministrateurDeleteArgs>(args: SelectSubset<T, AdministrateurDeleteArgs<ExtArgs>>): Prisma__AdministrateurClient<$Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administrateur.
     * @param {AdministrateurUpdateArgs} args - Arguments to update one Administrateur.
     * @example
     * // Update one Administrateur
     * const administrateur = await prisma.administrateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministrateurUpdateArgs>(args: SelectSubset<T, AdministrateurUpdateArgs<ExtArgs>>): Prisma__AdministrateurClient<$Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administrateurs.
     * @param {AdministrateurDeleteManyArgs} args - Arguments to filter Administrateurs to delete.
     * @example
     * // Delete a few Administrateurs
     * const { count } = await prisma.administrateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministrateurDeleteManyArgs>(args?: SelectSubset<T, AdministrateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administrateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administrateurs
     * const administrateur = await prisma.administrateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministrateurUpdateManyArgs>(args: SelectSubset<T, AdministrateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administrateurs and returns the data updated in the database.
     * @param {AdministrateurUpdateManyAndReturnArgs} args - Arguments to update many Administrateurs.
     * @example
     * // Update many Administrateurs
     * const administrateur = await prisma.administrateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Administrateurs and only return the `id`
     * const administrateurWithIdOnly = await prisma.administrateur.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdministrateurUpdateManyAndReturnArgs>(args: SelectSubset<T, AdministrateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Administrateur.
     * @param {AdministrateurUpsertArgs} args - Arguments to update or create a Administrateur.
     * @example
     * // Update or create a Administrateur
     * const administrateur = await prisma.administrateur.upsert({
     *   create: {
     *     // ... data to create a Administrateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrateur we want to update
     *   }
     * })
     */
    upsert<T extends AdministrateurUpsertArgs>(args: SelectSubset<T, AdministrateurUpsertArgs<ExtArgs>>): Prisma__AdministrateurClient<$Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administrateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrateurCountArgs} args - Arguments to filter Administrateurs to count.
     * @example
     * // Count the number of Administrateurs
     * const count = await prisma.administrateur.count({
     *   where: {
     *     // ... the filter for the Administrateurs we want to count
     *   }
     * })
    **/
    count<T extends AdministrateurCountArgs>(
      args?: Subset<T, AdministrateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministrateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdministrateurAggregateArgs>(args: Subset<T, AdministrateurAggregateArgs>): Prisma.PrismaPromise<GetAdministrateurAggregateType<T>>

    /**
     * Group by Administrateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministrateurGroupByArgs} args - Group by arguments.
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
      T extends AdministrateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministrateurGroupByArgs['orderBy'] }
        : { orderBy?: AdministrateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdministrateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministrateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrateur model
   */
  readonly fields: AdministrateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministrateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clients<T extends Administrateur$clientsArgs<ExtArgs> = {}>(args?: Subset<T, Administrateur$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gies<T extends Administrateur$giesArgs<ExtArgs> = {}>(args?: Subset<T, Administrateur$giesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GIEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Administrateur model
   */
  interface AdministrateurFieldRefs {
    readonly id: FieldRef<"Administrateur", 'String'>
    readonly email: FieldRef<"Administrateur", 'String'>
    readonly password: FieldRef<"Administrateur", 'String'>
    readonly nom: FieldRef<"Administrateur", 'String'>
    readonly prenom: FieldRef<"Administrateur", 'String'>
    readonly telephone: FieldRef<"Administrateur", 'String'>
    readonly role: FieldRef<"Administrateur", 'Role'>
    readonly createdAt: FieldRef<"Administrateur", 'DateTime'>
    readonly updatedAt: FieldRef<"Administrateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Administrateur findUnique
   */
  export type AdministrateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrateur
     */
    select?: AdministrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrateur
     */
    omit?: AdministrateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrateurInclude<ExtArgs> | null
    /**
     * Filter, which Administrateur to fetch.
     */
    where: AdministrateurWhereUniqueInput
  }

  /**
   * Administrateur findUniqueOrThrow
   */
  export type AdministrateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrateur
     */
    select?: AdministrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrateur
     */
    omit?: AdministrateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrateurInclude<ExtArgs> | null
    /**
     * Filter, which Administrateur to fetch.
     */
    where: AdministrateurWhereUniqueInput
  }

  /**
   * Administrateur findFirst
   */
  export type AdministrateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrateur
     */
    select?: AdministrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrateur
     */
    omit?: AdministrateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrateurInclude<ExtArgs> | null
    /**
     * Filter, which Administrateur to fetch.
     */
    where?: AdministrateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrateurs to fetch.
     */
    orderBy?: AdministrateurOrderByWithRelationInput | AdministrateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administrateurs.
     */
    cursor?: AdministrateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administrateurs.
     */
    distinct?: AdministrateurScalarFieldEnum | AdministrateurScalarFieldEnum[]
  }

  /**
   * Administrateur findFirstOrThrow
   */
  export type AdministrateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrateur
     */
    select?: AdministrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrateur
     */
    omit?: AdministrateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrateurInclude<ExtArgs> | null
    /**
     * Filter, which Administrateur to fetch.
     */
    where?: AdministrateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrateurs to fetch.
     */
    orderBy?: AdministrateurOrderByWithRelationInput | AdministrateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administrateurs.
     */
    cursor?: AdministrateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administrateurs.
     */
    distinct?: AdministrateurScalarFieldEnum | AdministrateurScalarFieldEnum[]
  }

  /**
   * Administrateur findMany
   */
  export type AdministrateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrateur
     */
    select?: AdministrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrateur
     */
    omit?: AdministrateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrateurInclude<ExtArgs> | null
    /**
     * Filter, which Administrateurs to fetch.
     */
    where?: AdministrateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrateurs to fetch.
     */
    orderBy?: AdministrateurOrderByWithRelationInput | AdministrateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administrateurs.
     */
    cursor?: AdministrateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administrateurs.
     */
    distinct?: AdministrateurScalarFieldEnum | AdministrateurScalarFieldEnum[]
  }

  /**
   * Administrateur create
   */
  export type AdministrateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrateur
     */
    select?: AdministrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrateur
     */
    omit?: AdministrateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Administrateur.
     */
    data: XOR<AdministrateurCreateInput, AdministrateurUncheckedCreateInput>
  }

  /**
   * Administrateur createMany
   */
  export type AdministrateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administrateurs.
     */
    data: AdministrateurCreateManyInput | AdministrateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrateur createManyAndReturn
   */
  export type AdministrateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrateur
     */
    select?: AdministrateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrateur
     */
    omit?: AdministrateurOmit<ExtArgs> | null
    /**
     * The data used to create many Administrateurs.
     */
    data: AdministrateurCreateManyInput | AdministrateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrateur update
   */
  export type AdministrateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrateur
     */
    select?: AdministrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrateur
     */
    omit?: AdministrateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Administrateur.
     */
    data: XOR<AdministrateurUpdateInput, AdministrateurUncheckedUpdateInput>
    /**
     * Choose, which Administrateur to update.
     */
    where: AdministrateurWhereUniqueInput
  }

  /**
   * Administrateur updateMany
   */
  export type AdministrateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administrateurs.
     */
    data: XOR<AdministrateurUpdateManyMutationInput, AdministrateurUncheckedUpdateManyInput>
    /**
     * Filter which Administrateurs to update
     */
    where?: AdministrateurWhereInput
    /**
     * Limit how many Administrateurs to update.
     */
    limit?: number
  }

  /**
   * Administrateur updateManyAndReturn
   */
  export type AdministrateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrateur
     */
    select?: AdministrateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrateur
     */
    omit?: AdministrateurOmit<ExtArgs> | null
    /**
     * The data used to update Administrateurs.
     */
    data: XOR<AdministrateurUpdateManyMutationInput, AdministrateurUncheckedUpdateManyInput>
    /**
     * Filter which Administrateurs to update
     */
    where?: AdministrateurWhereInput
    /**
     * Limit how many Administrateurs to update.
     */
    limit?: number
  }

  /**
   * Administrateur upsert
   */
  export type AdministrateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrateur
     */
    select?: AdministrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrateur
     */
    omit?: AdministrateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Administrateur to update in case it exists.
     */
    where: AdministrateurWhereUniqueInput
    /**
     * In case the Administrateur found by the `where` argument doesn't exist, create a new Administrateur with this data.
     */
    create: XOR<AdministrateurCreateInput, AdministrateurUncheckedCreateInput>
    /**
     * In case the Administrateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministrateurUpdateInput, AdministrateurUncheckedUpdateInput>
  }

  /**
   * Administrateur delete
   */
  export type AdministrateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrateur
     */
    select?: AdministrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrateur
     */
    omit?: AdministrateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrateurInclude<ExtArgs> | null
    /**
     * Filter which Administrateur to delete.
     */
    where: AdministrateurWhereUniqueInput
  }

  /**
   * Administrateur deleteMany
   */
  export type AdministrateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrateurs to delete
     */
    where?: AdministrateurWhereInput
    /**
     * Limit how many Administrateurs to delete.
     */
    limit?: number
  }

  /**
   * Administrateur.clients
   */
  export type Administrateur$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Administrateur.gies
   */
  export type Administrateur$giesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIE
     */
    select?: GIESelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIE
     */
    omit?: GIEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIEInclude<ExtArgs> | null
    where?: GIEWhereInput
    orderBy?: GIEOrderByWithRelationInput | GIEOrderByWithRelationInput[]
    cursor?: GIEWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GIEScalarFieldEnum | GIEScalarFieldEnum[]
  }

  /**
   * Administrateur without action
   */
  export type AdministrateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrateur
     */
    select?: AdministrateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrateur
     */
    omit?: AdministrateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministrateurInclude<ExtArgs> | null
  }


  /**
   * Model Avis
   */

  export type AggregateAvis = {
    _count: AvisCountAggregateOutputType | null
    _avg: AvisAvgAggregateOutputType | null
    _sum: AvisSumAggregateOutputType | null
    _min: AvisMinAggregateOutputType | null
    _max: AvisMaxAggregateOutputType | null
  }

  export type AvisAvgAggregateOutputType = {
    rating: number | null
  }

  export type AvisSumAggregateOutputType = {
    rating: number | null
  }

  export type AvisMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    nom: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvisMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    nom: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvisCountAggregateOutputType = {
    id: number
    clientId: number
    nom: number
    rating: number
    comment: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvisAvgAggregateInputType = {
    rating?: true
  }

  export type AvisSumAggregateInputType = {
    rating?: true
  }

  export type AvisMinAggregateInputType = {
    id?: true
    clientId?: true
    nom?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvisMaxAggregateInputType = {
    id?: true
    clientId?: true
    nom?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvisCountAggregateInputType = {
    id?: true
    clientId?: true
    nom?: true
    rating?: true
    comment?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avis to aggregate.
     */
    where?: AvisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avis to fetch.
     */
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avis
    **/
    _count?: true | AvisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvisMaxAggregateInputType
  }

  export type GetAvisAggregateType<T extends AvisAggregateArgs> = {
        [P in keyof T & keyof AggregateAvis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvis[P]>
      : GetScalarType<T[P], AggregateAvis[P]>
  }




  export type AvisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvisWhereInput
    orderBy?: AvisOrderByWithAggregationInput | AvisOrderByWithAggregationInput[]
    by: AvisScalarFieldEnum[] | AvisScalarFieldEnum
    having?: AvisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvisCountAggregateInputType | true
    _avg?: AvisAvgAggregateInputType
    _sum?: AvisSumAggregateInputType
    _min?: AvisMinAggregateInputType
    _max?: AvisMaxAggregateInputType
  }

  export type AvisGroupByOutputType = {
    id: string
    clientId: string
    nom: string | null
    rating: number
    comment: string | null
    createdAt: Date
    updatedAt: Date
    _count: AvisCountAggregateOutputType | null
    _avg: AvisAvgAggregateOutputType | null
    _sum: AvisSumAggregateOutputType | null
    _min: AvisMinAggregateOutputType | null
    _max: AvisMaxAggregateOutputType | null
  }

  type GetAvisGroupByPayload<T extends AvisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvisGroupByOutputType[P]>
            : GetScalarType<T[P], AvisGroupByOutputType[P]>
        }
      >
    >


  export type AvisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    nom?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avis"]>

  export type AvisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    nom?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avis"]>

  export type AvisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    nom?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avis"]>

  export type AvisSelectScalar = {
    id?: boolean
    clientId?: boolean
    nom?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AvisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "nom" | "rating" | "comment" | "createdAt" | "updatedAt", ExtArgs["result"]["avis"]>
  export type AvisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type AvisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type AvisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $AvisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avis"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      nom: string | null
      rating: number
      comment: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["avis"]>
    composites: {}
  }

  type AvisGetPayload<S extends boolean | null | undefined | AvisDefaultArgs> = $Result.GetResult<Prisma.$AvisPayload, S>

  type AvisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvisCountAggregateInputType | true
    }

  export interface AvisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avis'], meta: { name: 'Avis' } }
    /**
     * Find zero or one Avis that matches the filter.
     * @param {AvisFindUniqueArgs} args - Arguments to find a Avis
     * @example
     * // Get one Avis
     * const avis = await prisma.avis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvisFindUniqueArgs>(args: SelectSubset<T, AvisFindUniqueArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvisFindUniqueOrThrowArgs} args - Arguments to find a Avis
     * @example
     * // Get one Avis
     * const avis = await prisma.avis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvisFindUniqueOrThrowArgs>(args: SelectSubset<T, AvisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisFindFirstArgs} args - Arguments to find a Avis
     * @example
     * // Get one Avis
     * const avis = await prisma.avis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvisFindFirstArgs>(args?: SelectSubset<T, AvisFindFirstArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisFindFirstOrThrowArgs} args - Arguments to find a Avis
     * @example
     * // Get one Avis
     * const avis = await prisma.avis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvisFindFirstOrThrowArgs>(args?: SelectSubset<T, AvisFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avis
     * const avis = await prisma.avis.findMany()
     * 
     * // Get first 10 Avis
     * const avis = await prisma.avis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avisWithIdOnly = await prisma.avis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvisFindManyArgs>(args?: SelectSubset<T, AvisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avis.
     * @param {AvisCreateArgs} args - Arguments to create a Avis.
     * @example
     * // Create one Avis
     * const Avis = await prisma.avis.create({
     *   data: {
     *     // ... data to create a Avis
     *   }
     * })
     * 
     */
    create<T extends AvisCreateArgs>(args: SelectSubset<T, AvisCreateArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avis.
     * @param {AvisCreateManyArgs} args - Arguments to create many Avis.
     * @example
     * // Create many Avis
     * const avis = await prisma.avis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvisCreateManyArgs>(args?: SelectSubset<T, AvisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avis and returns the data saved in the database.
     * @param {AvisCreateManyAndReturnArgs} args - Arguments to create many Avis.
     * @example
     * // Create many Avis
     * const avis = await prisma.avis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avis and only return the `id`
     * const avisWithIdOnly = await prisma.avis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvisCreateManyAndReturnArgs>(args?: SelectSubset<T, AvisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avis.
     * @param {AvisDeleteArgs} args - Arguments to delete one Avis.
     * @example
     * // Delete one Avis
     * const Avis = await prisma.avis.delete({
     *   where: {
     *     // ... filter to delete one Avis
     *   }
     * })
     * 
     */
    delete<T extends AvisDeleteArgs>(args: SelectSubset<T, AvisDeleteArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avis.
     * @param {AvisUpdateArgs} args - Arguments to update one Avis.
     * @example
     * // Update one Avis
     * const avis = await prisma.avis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvisUpdateArgs>(args: SelectSubset<T, AvisUpdateArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avis.
     * @param {AvisDeleteManyArgs} args - Arguments to filter Avis to delete.
     * @example
     * // Delete a few Avis
     * const { count } = await prisma.avis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvisDeleteManyArgs>(args?: SelectSubset<T, AvisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avis
     * const avis = await prisma.avis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvisUpdateManyArgs>(args: SelectSubset<T, AvisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avis and returns the data updated in the database.
     * @param {AvisUpdateManyAndReturnArgs} args - Arguments to update many Avis.
     * @example
     * // Update many Avis
     * const avis = await prisma.avis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avis and only return the `id`
     * const avisWithIdOnly = await prisma.avis.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvisUpdateManyAndReturnArgs>(args: SelectSubset<T, AvisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avis.
     * @param {AvisUpsertArgs} args - Arguments to update or create a Avis.
     * @example
     * // Update or create a Avis
     * const avis = await prisma.avis.upsert({
     *   create: {
     *     // ... data to create a Avis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avis we want to update
     *   }
     * })
     */
    upsert<T extends AvisUpsertArgs>(args: SelectSubset<T, AvisUpsertArgs<ExtArgs>>): Prisma__AvisClient<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisCountArgs} args - Arguments to filter Avis to count.
     * @example
     * // Count the number of Avis
     * const count = await prisma.avis.count({
     *   where: {
     *     // ... the filter for the Avis we want to count
     *   }
     * })
    **/
    count<T extends AvisCountArgs>(
      args?: Subset<T, AvisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvisAggregateArgs>(args: Subset<T, AvisAggregateArgs>): Prisma.PrismaPromise<GetAvisAggregateType<T>>

    /**
     * Group by Avis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisGroupByArgs} args - Group by arguments.
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
      T extends AvisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvisGroupByArgs['orderBy'] }
        : { orderBy?: AvisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avis model
   */
  readonly fields: AvisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Avis model
   */
  interface AvisFieldRefs {
    readonly id: FieldRef<"Avis", 'String'>
    readonly clientId: FieldRef<"Avis", 'String'>
    readonly nom: FieldRef<"Avis", 'String'>
    readonly rating: FieldRef<"Avis", 'Int'>
    readonly comment: FieldRef<"Avis", 'String'>
    readonly createdAt: FieldRef<"Avis", 'DateTime'>
    readonly updatedAt: FieldRef<"Avis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Avis findUnique
   */
  export type AvisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where: AvisWhereUniqueInput
  }

  /**
   * Avis findUniqueOrThrow
   */
  export type AvisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where: AvisWhereUniqueInput
  }

  /**
   * Avis findFirst
   */
  export type AvisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where?: AvisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avis to fetch.
     */
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avis.
     */
    cursor?: AvisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avis.
     */
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Avis findFirstOrThrow
   */
  export type AvisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where?: AvisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avis to fetch.
     */
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avis.
     */
    cursor?: AvisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avis.
     */
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Avis findMany
   */
  export type AvisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter, which Avis to fetch.
     */
    where?: AvisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avis to fetch.
     */
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avis.
     */
    cursor?: AvisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avis.
     */
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Avis create
   */
  export type AvisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * The data needed to create a Avis.
     */
    data: XOR<AvisCreateInput, AvisUncheckedCreateInput>
  }

  /**
   * Avis createMany
   */
  export type AvisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avis.
     */
    data: AvisCreateManyInput | AvisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avis createManyAndReturn
   */
  export type AvisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * The data used to create many Avis.
     */
    data: AvisCreateManyInput | AvisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avis update
   */
  export type AvisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * The data needed to update a Avis.
     */
    data: XOR<AvisUpdateInput, AvisUncheckedUpdateInput>
    /**
     * Choose, which Avis to update.
     */
    where: AvisWhereUniqueInput
  }

  /**
   * Avis updateMany
   */
  export type AvisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avis.
     */
    data: XOR<AvisUpdateManyMutationInput, AvisUncheckedUpdateManyInput>
    /**
     * Filter which Avis to update
     */
    where?: AvisWhereInput
    /**
     * Limit how many Avis to update.
     */
    limit?: number
  }

  /**
   * Avis updateManyAndReturn
   */
  export type AvisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * The data used to update Avis.
     */
    data: XOR<AvisUpdateManyMutationInput, AvisUncheckedUpdateManyInput>
    /**
     * Filter which Avis to update
     */
    where?: AvisWhereInput
    /**
     * Limit how many Avis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avis upsert
   */
  export type AvisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * The filter to search for the Avis to update in case it exists.
     */
    where: AvisWhereUniqueInput
    /**
     * In case the Avis found by the `where` argument doesn't exist, create a new Avis with this data.
     */
    create: XOR<AvisCreateInput, AvisUncheckedCreateInput>
    /**
     * In case the Avis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvisUpdateInput, AvisUncheckedUpdateInput>
  }

  /**
   * Avis delete
   */
  export type AvisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    /**
     * Filter which Avis to delete.
     */
    where: AvisWhereUniqueInput
  }

  /**
   * Avis deleteMany
   */
  export type AvisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avis to delete
     */
    where?: AvisWhereInput
    /**
     * Limit how many Avis to delete.
     */
    limit?: number
  }

  /**
   * Avis without action
   */
  export type AvisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
  }


  /**
   * Model AvisProduit
   */

  export type AggregateAvisProduit = {
    _count: AvisProduitCountAggregateOutputType | null
    _avg: AvisProduitAvgAggregateOutputType | null
    _sum: AvisProduitSumAggregateOutputType | null
    _min: AvisProduitMinAggregateOutputType | null
    _max: AvisProduitMaxAggregateOutputType | null
  }

  export type AvisProduitAvgAggregateOutputType = {
    rating: number | null
  }

  export type AvisProduitSumAggregateOutputType = {
    rating: number | null
  }

  export type AvisProduitMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    produitId: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvisProduitMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    produitId: string | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvisProduitCountAggregateOutputType = {
    id: number
    clientId: number
    produitId: number
    rating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvisProduitAvgAggregateInputType = {
    rating?: true
  }

  export type AvisProduitSumAggregateInputType = {
    rating?: true
  }

  export type AvisProduitMinAggregateInputType = {
    id?: true
    clientId?: true
    produitId?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvisProduitMaxAggregateInputType = {
    id?: true
    clientId?: true
    produitId?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvisProduitCountAggregateInputType = {
    id?: true
    clientId?: true
    produitId?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvisProduitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvisProduit to aggregate.
     */
    where?: AvisProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvisProduits to fetch.
     */
    orderBy?: AvisProduitOrderByWithRelationInput | AvisProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvisProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvisProduits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvisProduits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvisProduits
    **/
    _count?: true | AvisProduitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvisProduitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvisProduitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvisProduitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvisProduitMaxAggregateInputType
  }

  export type GetAvisProduitAggregateType<T extends AvisProduitAggregateArgs> = {
        [P in keyof T & keyof AggregateAvisProduit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvisProduit[P]>
      : GetScalarType<T[P], AggregateAvisProduit[P]>
  }




  export type AvisProduitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvisProduitWhereInput
    orderBy?: AvisProduitOrderByWithAggregationInput | AvisProduitOrderByWithAggregationInput[]
    by: AvisProduitScalarFieldEnum[] | AvisProduitScalarFieldEnum
    having?: AvisProduitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvisProduitCountAggregateInputType | true
    _avg?: AvisProduitAvgAggregateInputType
    _sum?: AvisProduitSumAggregateInputType
    _min?: AvisProduitMinAggregateInputType
    _max?: AvisProduitMaxAggregateInputType
  }

  export type AvisProduitGroupByOutputType = {
    id: string
    clientId: string
    produitId: string
    rating: number
    createdAt: Date
    updatedAt: Date
    _count: AvisProduitCountAggregateOutputType | null
    _avg: AvisProduitAvgAggregateOutputType | null
    _sum: AvisProduitSumAggregateOutputType | null
    _min: AvisProduitMinAggregateOutputType | null
    _max: AvisProduitMaxAggregateOutputType | null
  }

  type GetAvisProduitGroupByPayload<T extends AvisProduitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvisProduitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvisProduitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvisProduitGroupByOutputType[P]>
            : GetScalarType<T[P], AvisProduitGroupByOutputType[P]>
        }
      >
    >


  export type AvisProduitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    produitId?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avisProduit"]>

  export type AvisProduitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    produitId?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avisProduit"]>

  export type AvisProduitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    produitId?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avisProduit"]>

  export type AvisProduitSelectScalar = {
    id?: boolean
    clientId?: boolean
    produitId?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AvisProduitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "produitId" | "rating" | "createdAt" | "updatedAt", ExtArgs["result"]["avisProduit"]>
  export type AvisProduitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }
  export type AvisProduitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }
  export type AvisProduitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }

  export type $AvisProduitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvisProduit"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      produit: Prisma.$ProduitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      produitId: string
      rating: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["avisProduit"]>
    composites: {}
  }

  type AvisProduitGetPayload<S extends boolean | null | undefined | AvisProduitDefaultArgs> = $Result.GetResult<Prisma.$AvisProduitPayload, S>

  type AvisProduitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvisProduitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvisProduitCountAggregateInputType | true
    }

  export interface AvisProduitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvisProduit'], meta: { name: 'AvisProduit' } }
    /**
     * Find zero or one AvisProduit that matches the filter.
     * @param {AvisProduitFindUniqueArgs} args - Arguments to find a AvisProduit
     * @example
     * // Get one AvisProduit
     * const avisProduit = await prisma.avisProduit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvisProduitFindUniqueArgs>(args: SelectSubset<T, AvisProduitFindUniqueArgs<ExtArgs>>): Prisma__AvisProduitClient<$Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvisProduit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvisProduitFindUniqueOrThrowArgs} args - Arguments to find a AvisProduit
     * @example
     * // Get one AvisProduit
     * const avisProduit = await prisma.avisProduit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvisProduitFindUniqueOrThrowArgs>(args: SelectSubset<T, AvisProduitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvisProduitClient<$Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvisProduit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisProduitFindFirstArgs} args - Arguments to find a AvisProduit
     * @example
     * // Get one AvisProduit
     * const avisProduit = await prisma.avisProduit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvisProduitFindFirstArgs>(args?: SelectSubset<T, AvisProduitFindFirstArgs<ExtArgs>>): Prisma__AvisProduitClient<$Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvisProduit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisProduitFindFirstOrThrowArgs} args - Arguments to find a AvisProduit
     * @example
     * // Get one AvisProduit
     * const avisProduit = await prisma.avisProduit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvisProduitFindFirstOrThrowArgs>(args?: SelectSubset<T, AvisProduitFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvisProduitClient<$Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvisProduits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisProduitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvisProduits
     * const avisProduits = await prisma.avisProduit.findMany()
     * 
     * // Get first 10 AvisProduits
     * const avisProduits = await prisma.avisProduit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avisProduitWithIdOnly = await prisma.avisProduit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvisProduitFindManyArgs>(args?: SelectSubset<T, AvisProduitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvisProduit.
     * @param {AvisProduitCreateArgs} args - Arguments to create a AvisProduit.
     * @example
     * // Create one AvisProduit
     * const AvisProduit = await prisma.avisProduit.create({
     *   data: {
     *     // ... data to create a AvisProduit
     *   }
     * })
     * 
     */
    create<T extends AvisProduitCreateArgs>(args: SelectSubset<T, AvisProduitCreateArgs<ExtArgs>>): Prisma__AvisProduitClient<$Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvisProduits.
     * @param {AvisProduitCreateManyArgs} args - Arguments to create many AvisProduits.
     * @example
     * // Create many AvisProduits
     * const avisProduit = await prisma.avisProduit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvisProduitCreateManyArgs>(args?: SelectSubset<T, AvisProduitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvisProduits and returns the data saved in the database.
     * @param {AvisProduitCreateManyAndReturnArgs} args - Arguments to create many AvisProduits.
     * @example
     * // Create many AvisProduits
     * const avisProduit = await prisma.avisProduit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvisProduits and only return the `id`
     * const avisProduitWithIdOnly = await prisma.avisProduit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvisProduitCreateManyAndReturnArgs>(args?: SelectSubset<T, AvisProduitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvisProduit.
     * @param {AvisProduitDeleteArgs} args - Arguments to delete one AvisProduit.
     * @example
     * // Delete one AvisProduit
     * const AvisProduit = await prisma.avisProduit.delete({
     *   where: {
     *     // ... filter to delete one AvisProduit
     *   }
     * })
     * 
     */
    delete<T extends AvisProduitDeleteArgs>(args: SelectSubset<T, AvisProduitDeleteArgs<ExtArgs>>): Prisma__AvisProduitClient<$Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvisProduit.
     * @param {AvisProduitUpdateArgs} args - Arguments to update one AvisProduit.
     * @example
     * // Update one AvisProduit
     * const avisProduit = await prisma.avisProduit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvisProduitUpdateArgs>(args: SelectSubset<T, AvisProduitUpdateArgs<ExtArgs>>): Prisma__AvisProduitClient<$Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvisProduits.
     * @param {AvisProduitDeleteManyArgs} args - Arguments to filter AvisProduits to delete.
     * @example
     * // Delete a few AvisProduits
     * const { count } = await prisma.avisProduit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvisProduitDeleteManyArgs>(args?: SelectSubset<T, AvisProduitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvisProduits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisProduitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvisProduits
     * const avisProduit = await prisma.avisProduit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvisProduitUpdateManyArgs>(args: SelectSubset<T, AvisProduitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvisProduits and returns the data updated in the database.
     * @param {AvisProduitUpdateManyAndReturnArgs} args - Arguments to update many AvisProduits.
     * @example
     * // Update many AvisProduits
     * const avisProduit = await prisma.avisProduit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvisProduits and only return the `id`
     * const avisProduitWithIdOnly = await prisma.avisProduit.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvisProduitUpdateManyAndReturnArgs>(args: SelectSubset<T, AvisProduitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvisProduit.
     * @param {AvisProduitUpsertArgs} args - Arguments to update or create a AvisProduit.
     * @example
     * // Update or create a AvisProduit
     * const avisProduit = await prisma.avisProduit.upsert({
     *   create: {
     *     // ... data to create a AvisProduit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvisProduit we want to update
     *   }
     * })
     */
    upsert<T extends AvisProduitUpsertArgs>(args: SelectSubset<T, AvisProduitUpsertArgs<ExtArgs>>): Prisma__AvisProduitClient<$Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvisProduits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisProduitCountArgs} args - Arguments to filter AvisProduits to count.
     * @example
     * // Count the number of AvisProduits
     * const count = await prisma.avisProduit.count({
     *   where: {
     *     // ... the filter for the AvisProduits we want to count
     *   }
     * })
    **/
    count<T extends AvisProduitCountArgs>(
      args?: Subset<T, AvisProduitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvisProduitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvisProduit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisProduitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvisProduitAggregateArgs>(args: Subset<T, AvisProduitAggregateArgs>): Prisma.PrismaPromise<GetAvisProduitAggregateType<T>>

    /**
     * Group by AvisProduit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvisProduitGroupByArgs} args - Group by arguments.
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
      T extends AvisProduitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvisProduitGroupByArgs['orderBy'] }
        : { orderBy?: AvisProduitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvisProduitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvisProduitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvisProduit model
   */
  readonly fields: AvisProduitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvisProduit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvisProduitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produit<T extends ProduitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProduitDefaultArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AvisProduit model
   */
  interface AvisProduitFieldRefs {
    readonly id: FieldRef<"AvisProduit", 'String'>
    readonly clientId: FieldRef<"AvisProduit", 'String'>
    readonly produitId: FieldRef<"AvisProduit", 'String'>
    readonly rating: FieldRef<"AvisProduit", 'Int'>
    readonly createdAt: FieldRef<"AvisProduit", 'DateTime'>
    readonly updatedAt: FieldRef<"AvisProduit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AvisProduit findUnique
   */
  export type AvisProduitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvisProduit
     */
    select?: AvisProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvisProduit
     */
    omit?: AvisProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisProduitInclude<ExtArgs> | null
    /**
     * Filter, which AvisProduit to fetch.
     */
    where: AvisProduitWhereUniqueInput
  }

  /**
   * AvisProduit findUniqueOrThrow
   */
  export type AvisProduitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvisProduit
     */
    select?: AvisProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvisProduit
     */
    omit?: AvisProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisProduitInclude<ExtArgs> | null
    /**
     * Filter, which AvisProduit to fetch.
     */
    where: AvisProduitWhereUniqueInput
  }

  /**
   * AvisProduit findFirst
   */
  export type AvisProduitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvisProduit
     */
    select?: AvisProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvisProduit
     */
    omit?: AvisProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisProduitInclude<ExtArgs> | null
    /**
     * Filter, which AvisProduit to fetch.
     */
    where?: AvisProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvisProduits to fetch.
     */
    orderBy?: AvisProduitOrderByWithRelationInput | AvisProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvisProduits.
     */
    cursor?: AvisProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvisProduits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvisProduits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvisProduits.
     */
    distinct?: AvisProduitScalarFieldEnum | AvisProduitScalarFieldEnum[]
  }

  /**
   * AvisProduit findFirstOrThrow
   */
  export type AvisProduitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvisProduit
     */
    select?: AvisProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvisProduit
     */
    omit?: AvisProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisProduitInclude<ExtArgs> | null
    /**
     * Filter, which AvisProduit to fetch.
     */
    where?: AvisProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvisProduits to fetch.
     */
    orderBy?: AvisProduitOrderByWithRelationInput | AvisProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvisProduits.
     */
    cursor?: AvisProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvisProduits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvisProduits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvisProduits.
     */
    distinct?: AvisProduitScalarFieldEnum | AvisProduitScalarFieldEnum[]
  }

  /**
   * AvisProduit findMany
   */
  export type AvisProduitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvisProduit
     */
    select?: AvisProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvisProduit
     */
    omit?: AvisProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisProduitInclude<ExtArgs> | null
    /**
     * Filter, which AvisProduits to fetch.
     */
    where?: AvisProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvisProduits to fetch.
     */
    orderBy?: AvisProduitOrderByWithRelationInput | AvisProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvisProduits.
     */
    cursor?: AvisProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvisProduits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvisProduits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvisProduits.
     */
    distinct?: AvisProduitScalarFieldEnum | AvisProduitScalarFieldEnum[]
  }

  /**
   * AvisProduit create
   */
  export type AvisProduitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvisProduit
     */
    select?: AvisProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvisProduit
     */
    omit?: AvisProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisProduitInclude<ExtArgs> | null
    /**
     * The data needed to create a AvisProduit.
     */
    data: XOR<AvisProduitCreateInput, AvisProduitUncheckedCreateInput>
  }

  /**
   * AvisProduit createMany
   */
  export type AvisProduitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvisProduits.
     */
    data: AvisProduitCreateManyInput | AvisProduitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvisProduit createManyAndReturn
   */
  export type AvisProduitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvisProduit
     */
    select?: AvisProduitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvisProduit
     */
    omit?: AvisProduitOmit<ExtArgs> | null
    /**
     * The data used to create many AvisProduits.
     */
    data: AvisProduitCreateManyInput | AvisProduitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisProduitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvisProduit update
   */
  export type AvisProduitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvisProduit
     */
    select?: AvisProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvisProduit
     */
    omit?: AvisProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisProduitInclude<ExtArgs> | null
    /**
     * The data needed to update a AvisProduit.
     */
    data: XOR<AvisProduitUpdateInput, AvisProduitUncheckedUpdateInput>
    /**
     * Choose, which AvisProduit to update.
     */
    where: AvisProduitWhereUniqueInput
  }

  /**
   * AvisProduit updateMany
   */
  export type AvisProduitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvisProduits.
     */
    data: XOR<AvisProduitUpdateManyMutationInput, AvisProduitUncheckedUpdateManyInput>
    /**
     * Filter which AvisProduits to update
     */
    where?: AvisProduitWhereInput
    /**
     * Limit how many AvisProduits to update.
     */
    limit?: number
  }

  /**
   * AvisProduit updateManyAndReturn
   */
  export type AvisProduitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvisProduit
     */
    select?: AvisProduitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvisProduit
     */
    omit?: AvisProduitOmit<ExtArgs> | null
    /**
     * The data used to update AvisProduits.
     */
    data: XOR<AvisProduitUpdateManyMutationInput, AvisProduitUncheckedUpdateManyInput>
    /**
     * Filter which AvisProduits to update
     */
    where?: AvisProduitWhereInput
    /**
     * Limit how many AvisProduits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisProduitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvisProduit upsert
   */
  export type AvisProduitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvisProduit
     */
    select?: AvisProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvisProduit
     */
    omit?: AvisProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisProduitInclude<ExtArgs> | null
    /**
     * The filter to search for the AvisProduit to update in case it exists.
     */
    where: AvisProduitWhereUniqueInput
    /**
     * In case the AvisProduit found by the `where` argument doesn't exist, create a new AvisProduit with this data.
     */
    create: XOR<AvisProduitCreateInput, AvisProduitUncheckedCreateInput>
    /**
     * In case the AvisProduit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvisProduitUpdateInput, AvisProduitUncheckedUpdateInput>
  }

  /**
   * AvisProduit delete
   */
  export type AvisProduitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvisProduit
     */
    select?: AvisProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvisProduit
     */
    omit?: AvisProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisProduitInclude<ExtArgs> | null
    /**
     * Filter which AvisProduit to delete.
     */
    where: AvisProduitWhereUniqueInput
  }

  /**
   * AvisProduit deleteMany
   */
  export type AvisProduitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvisProduits to delete
     */
    where?: AvisProduitWhereInput
    /**
     * Limit how many AvisProduits to delete.
     */
    limit?: number
  }

  /**
   * AvisProduit without action
   */
  export type AvisProduitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvisProduit
     */
    select?: AvisProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvisProduit
     */
    omit?: AvisProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisProduitInclude<ExtArgs> | null
  }


  /**
   * Model GIE
   */

  export type AggregateGIE = {
    _count: GIECountAggregateOutputType | null
    _avg: GIEAvgAggregateOutputType | null
    _sum: GIESumAggregateOutputType | null
    _min: GIEMinAggregateOutputType | null
    _max: GIEMaxAggregateOutputType | null
  }

  export type GIEAvgAggregateOutputType = {
    membre: number | null
    specialite: number | null
  }

  export type GIESumAggregateOutputType = {
    membre: number | null
    specialite: number | null
  }

  export type GIEMinAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    adresse: string | null
    telephone: string | null
    email: string | null
    password: string | null
    logo: string | null
    url: string | null
    membre: number | null
    Annee: Date | null
    specialite: number | null
    statut: $Enums.StatutGIE | null
    createdAt: Date | null
    updatedAt: Date | null
    administrateurId: string | null
    regionId: string | null
  }

  export type GIEMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    adresse: string | null
    telephone: string | null
    email: string | null
    password: string | null
    logo: string | null
    url: string | null
    membre: number | null
    Annee: Date | null
    specialite: number | null
    statut: $Enums.StatutGIE | null
    createdAt: Date | null
    updatedAt: Date | null
    administrateurId: string | null
    regionId: string | null
  }

  export type GIECountAggregateOutputType = {
    id: number
    nom: number
    description: number
    adresse: number
    telephone: number
    email: number
    password: number
    logo: number
    url: number
    membre: number
    Annee: number
    specialite: number
    statut: number
    createdAt: number
    updatedAt: number
    administrateurId: number
    regionId: number
    _all: number
  }


  export type GIEAvgAggregateInputType = {
    membre?: true
    specialite?: true
  }

  export type GIESumAggregateInputType = {
    membre?: true
    specialite?: true
  }

  export type GIEMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    adresse?: true
    telephone?: true
    email?: true
    password?: true
    logo?: true
    url?: true
    membre?: true
    Annee?: true
    specialite?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    administrateurId?: true
    regionId?: true
  }

  export type GIEMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    adresse?: true
    telephone?: true
    email?: true
    password?: true
    logo?: true
    url?: true
    membre?: true
    Annee?: true
    specialite?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    administrateurId?: true
    regionId?: true
  }

  export type GIECountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    adresse?: true
    telephone?: true
    email?: true
    password?: true
    logo?: true
    url?: true
    membre?: true
    Annee?: true
    specialite?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    administrateurId?: true
    regionId?: true
    _all?: true
  }

  export type GIEAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GIE to aggregate.
     */
    where?: GIEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GIES to fetch.
     */
    orderBy?: GIEOrderByWithRelationInput | GIEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GIEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GIES
    **/
    _count?: true | GIECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GIEAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GIESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GIEMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GIEMaxAggregateInputType
  }

  export type GetGIEAggregateType<T extends GIEAggregateArgs> = {
        [P in keyof T & keyof AggregateGIE]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGIE[P]>
      : GetScalarType<T[P], AggregateGIE[P]>
  }




  export type GIEGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GIEWhereInput
    orderBy?: GIEOrderByWithAggregationInput | GIEOrderByWithAggregationInput[]
    by: GIEScalarFieldEnum[] | GIEScalarFieldEnum
    having?: GIEScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GIECountAggregateInputType | true
    _avg?: GIEAvgAggregateInputType
    _sum?: GIESumAggregateInputType
    _min?: GIEMinAggregateInputType
    _max?: GIEMaxAggregateInputType
  }

  export type GIEGroupByOutputType = {
    id: string
    nom: string
    description: string | null
    adresse: string | null
    telephone: string | null
    email: string | null
    password: string
    logo: string | null
    url: string | null
    membre: number | null
    Annee: Date | null
    specialite: number | null
    statut: $Enums.StatutGIE
    createdAt: Date
    updatedAt: Date
    administrateurId: string
    regionId: string | null
    _count: GIECountAggregateOutputType | null
    _avg: GIEAvgAggregateOutputType | null
    _sum: GIESumAggregateOutputType | null
    _min: GIEMinAggregateOutputType | null
    _max: GIEMaxAggregateOutputType | null
  }

  type GetGIEGroupByPayload<T extends GIEGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GIEGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GIEGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GIEGroupByOutputType[P]>
            : GetScalarType<T[P], GIEGroupByOutputType[P]>
        }
      >
    >


  export type GIESelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    adresse?: boolean
    telephone?: boolean
    email?: boolean
    password?: boolean
    logo?: boolean
    url?: boolean
    membre?: boolean
    Annee?: boolean
    specialite?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    administrateurId?: boolean
    regionId?: boolean
    administrateur?: boolean | AdministrateurDefaultArgs<ExtArgs>
    regions?: boolean | GIE$regionsArgs<ExtArgs>
    produits?: boolean | GIE$produitsArgs<ExtArgs>
    _count?: boolean | GIECountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gIE"]>

  export type GIESelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    adresse?: boolean
    telephone?: boolean
    email?: boolean
    password?: boolean
    logo?: boolean
    url?: boolean
    membre?: boolean
    Annee?: boolean
    specialite?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    administrateurId?: boolean
    regionId?: boolean
    administrateur?: boolean | AdministrateurDefaultArgs<ExtArgs>
    regions?: boolean | GIE$regionsArgs<ExtArgs>
  }, ExtArgs["result"]["gIE"]>

  export type GIESelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    adresse?: boolean
    telephone?: boolean
    email?: boolean
    password?: boolean
    logo?: boolean
    url?: boolean
    membre?: boolean
    Annee?: boolean
    specialite?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    administrateurId?: boolean
    regionId?: boolean
    administrateur?: boolean | AdministrateurDefaultArgs<ExtArgs>
    regions?: boolean | GIE$regionsArgs<ExtArgs>
  }, ExtArgs["result"]["gIE"]>

  export type GIESelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
    adresse?: boolean
    telephone?: boolean
    email?: boolean
    password?: boolean
    logo?: boolean
    url?: boolean
    membre?: boolean
    Annee?: boolean
    specialite?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    administrateurId?: boolean
    regionId?: boolean
  }

  export type GIEOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "description" | "adresse" | "telephone" | "email" | "password" | "logo" | "url" | "membre" | "Annee" | "specialite" | "statut" | "createdAt" | "updatedAt" | "administrateurId" | "regionId", ExtArgs["result"]["gIE"]>
  export type GIEInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrateur?: boolean | AdministrateurDefaultArgs<ExtArgs>
    regions?: boolean | GIE$regionsArgs<ExtArgs>
    produits?: boolean | GIE$produitsArgs<ExtArgs>
    _count?: boolean | GIECountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GIEIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrateur?: boolean | AdministrateurDefaultArgs<ExtArgs>
    regions?: boolean | GIE$regionsArgs<ExtArgs>
  }
  export type GIEIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrateur?: boolean | AdministrateurDefaultArgs<ExtArgs>
    regions?: boolean | GIE$regionsArgs<ExtArgs>
  }

  export type $GIEPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GIE"
    objects: {
      administrateur: Prisma.$AdministrateurPayload<ExtArgs>
      regions: Prisma.$regionsPayload<ExtArgs> | null
      produits: Prisma.$ProduitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      description: string | null
      adresse: string | null
      telephone: string | null
      email: string | null
      password: string
      logo: string | null
      url: string | null
      membre: number | null
      Annee: Date | null
      specialite: number | null
      statut: $Enums.StatutGIE
      createdAt: Date
      updatedAt: Date
      administrateurId: string
      regionId: string | null
    }, ExtArgs["result"]["gIE"]>
    composites: {}
  }

  type GIEGetPayload<S extends boolean | null | undefined | GIEDefaultArgs> = $Result.GetResult<Prisma.$GIEPayload, S>

  type GIECountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GIEFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GIECountAggregateInputType | true
    }

  export interface GIEDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GIE'], meta: { name: 'GIE' } }
    /**
     * Find zero or one GIE that matches the filter.
     * @param {GIEFindUniqueArgs} args - Arguments to find a GIE
     * @example
     * // Get one GIE
     * const gIE = await prisma.gIE.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GIEFindUniqueArgs>(args: SelectSubset<T, GIEFindUniqueArgs<ExtArgs>>): Prisma__GIEClient<$Result.GetResult<Prisma.$GIEPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GIE that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GIEFindUniqueOrThrowArgs} args - Arguments to find a GIE
     * @example
     * // Get one GIE
     * const gIE = await prisma.gIE.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GIEFindUniqueOrThrowArgs>(args: SelectSubset<T, GIEFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GIEClient<$Result.GetResult<Prisma.$GIEPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GIE that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GIEFindFirstArgs} args - Arguments to find a GIE
     * @example
     * // Get one GIE
     * const gIE = await prisma.gIE.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GIEFindFirstArgs>(args?: SelectSubset<T, GIEFindFirstArgs<ExtArgs>>): Prisma__GIEClient<$Result.GetResult<Prisma.$GIEPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GIE that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GIEFindFirstOrThrowArgs} args - Arguments to find a GIE
     * @example
     * // Get one GIE
     * const gIE = await prisma.gIE.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GIEFindFirstOrThrowArgs>(args?: SelectSubset<T, GIEFindFirstOrThrowArgs<ExtArgs>>): Prisma__GIEClient<$Result.GetResult<Prisma.$GIEPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GIES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GIEFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GIES
     * const gIES = await prisma.gIE.findMany()
     * 
     * // Get first 10 GIES
     * const gIES = await prisma.gIE.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gIEWithIdOnly = await prisma.gIE.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GIEFindManyArgs>(args?: SelectSubset<T, GIEFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GIEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GIE.
     * @param {GIECreateArgs} args - Arguments to create a GIE.
     * @example
     * // Create one GIE
     * const GIE = await prisma.gIE.create({
     *   data: {
     *     // ... data to create a GIE
     *   }
     * })
     * 
     */
    create<T extends GIECreateArgs>(args: SelectSubset<T, GIECreateArgs<ExtArgs>>): Prisma__GIEClient<$Result.GetResult<Prisma.$GIEPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GIES.
     * @param {GIECreateManyArgs} args - Arguments to create many GIES.
     * @example
     * // Create many GIES
     * const gIE = await prisma.gIE.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GIECreateManyArgs>(args?: SelectSubset<T, GIECreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GIES and returns the data saved in the database.
     * @param {GIECreateManyAndReturnArgs} args - Arguments to create many GIES.
     * @example
     * // Create many GIES
     * const gIE = await prisma.gIE.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GIES and only return the `id`
     * const gIEWithIdOnly = await prisma.gIE.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GIECreateManyAndReturnArgs>(args?: SelectSubset<T, GIECreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GIEPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GIE.
     * @param {GIEDeleteArgs} args - Arguments to delete one GIE.
     * @example
     * // Delete one GIE
     * const GIE = await prisma.gIE.delete({
     *   where: {
     *     // ... filter to delete one GIE
     *   }
     * })
     * 
     */
    delete<T extends GIEDeleteArgs>(args: SelectSubset<T, GIEDeleteArgs<ExtArgs>>): Prisma__GIEClient<$Result.GetResult<Prisma.$GIEPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GIE.
     * @param {GIEUpdateArgs} args - Arguments to update one GIE.
     * @example
     * // Update one GIE
     * const gIE = await prisma.gIE.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GIEUpdateArgs>(args: SelectSubset<T, GIEUpdateArgs<ExtArgs>>): Prisma__GIEClient<$Result.GetResult<Prisma.$GIEPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GIES.
     * @param {GIEDeleteManyArgs} args - Arguments to filter GIES to delete.
     * @example
     * // Delete a few GIES
     * const { count } = await prisma.gIE.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GIEDeleteManyArgs>(args?: SelectSubset<T, GIEDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GIES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GIEUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GIES
     * const gIE = await prisma.gIE.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GIEUpdateManyArgs>(args: SelectSubset<T, GIEUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GIES and returns the data updated in the database.
     * @param {GIEUpdateManyAndReturnArgs} args - Arguments to update many GIES.
     * @example
     * // Update many GIES
     * const gIE = await prisma.gIE.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GIES and only return the `id`
     * const gIEWithIdOnly = await prisma.gIE.updateManyAndReturn({
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
    updateManyAndReturn<T extends GIEUpdateManyAndReturnArgs>(args: SelectSubset<T, GIEUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GIEPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GIE.
     * @param {GIEUpsertArgs} args - Arguments to update or create a GIE.
     * @example
     * // Update or create a GIE
     * const gIE = await prisma.gIE.upsert({
     *   create: {
     *     // ... data to create a GIE
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GIE we want to update
     *   }
     * })
     */
    upsert<T extends GIEUpsertArgs>(args: SelectSubset<T, GIEUpsertArgs<ExtArgs>>): Prisma__GIEClient<$Result.GetResult<Prisma.$GIEPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GIES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GIECountArgs} args - Arguments to filter GIES to count.
     * @example
     * // Count the number of GIES
     * const count = await prisma.gIE.count({
     *   where: {
     *     // ... the filter for the GIES we want to count
     *   }
     * })
    **/
    count<T extends GIECountArgs>(
      args?: Subset<T, GIECountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GIECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GIE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GIEAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GIEAggregateArgs>(args: Subset<T, GIEAggregateArgs>): Prisma.PrismaPromise<GetGIEAggregateType<T>>

    /**
     * Group by GIE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GIEGroupByArgs} args - Group by arguments.
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
      T extends GIEGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GIEGroupByArgs['orderBy'] }
        : { orderBy?: GIEGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GIEGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGIEGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GIE model
   */
  readonly fields: GIEFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GIE.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GIEClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    administrateur<T extends AdministrateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdministrateurDefaultArgs<ExtArgs>>): Prisma__AdministrateurClient<$Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    regions<T extends GIE$regionsArgs<ExtArgs> = {}>(args?: Subset<T, GIE$regionsArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    produits<T extends GIE$produitsArgs<ExtArgs> = {}>(args?: Subset<T, GIE$produitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GIE model
   */
  interface GIEFieldRefs {
    readonly id: FieldRef<"GIE", 'String'>
    readonly nom: FieldRef<"GIE", 'String'>
    readonly description: FieldRef<"GIE", 'String'>
    readonly adresse: FieldRef<"GIE", 'String'>
    readonly telephone: FieldRef<"GIE", 'String'>
    readonly email: FieldRef<"GIE", 'String'>
    readonly password: FieldRef<"GIE", 'String'>
    readonly logo: FieldRef<"GIE", 'String'>
    readonly url: FieldRef<"GIE", 'String'>
    readonly membre: FieldRef<"GIE", 'Int'>
    readonly Annee: FieldRef<"GIE", 'DateTime'>
    readonly specialite: FieldRef<"GIE", 'Int'>
    readonly statut: FieldRef<"GIE", 'StatutGIE'>
    readonly createdAt: FieldRef<"GIE", 'DateTime'>
    readonly updatedAt: FieldRef<"GIE", 'DateTime'>
    readonly administrateurId: FieldRef<"GIE", 'String'>
    readonly regionId: FieldRef<"GIE", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GIE findUnique
   */
  export type GIEFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIE
     */
    select?: GIESelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIE
     */
    omit?: GIEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIEInclude<ExtArgs> | null
    /**
     * Filter, which GIE to fetch.
     */
    where: GIEWhereUniqueInput
  }

  /**
   * GIE findUniqueOrThrow
   */
  export type GIEFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIE
     */
    select?: GIESelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIE
     */
    omit?: GIEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIEInclude<ExtArgs> | null
    /**
     * Filter, which GIE to fetch.
     */
    where: GIEWhereUniqueInput
  }

  /**
   * GIE findFirst
   */
  export type GIEFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIE
     */
    select?: GIESelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIE
     */
    omit?: GIEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIEInclude<ExtArgs> | null
    /**
     * Filter, which GIE to fetch.
     */
    where?: GIEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GIES to fetch.
     */
    orderBy?: GIEOrderByWithRelationInput | GIEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GIES.
     */
    cursor?: GIEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GIES.
     */
    distinct?: GIEScalarFieldEnum | GIEScalarFieldEnum[]
  }

  /**
   * GIE findFirstOrThrow
   */
  export type GIEFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIE
     */
    select?: GIESelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIE
     */
    omit?: GIEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIEInclude<ExtArgs> | null
    /**
     * Filter, which GIE to fetch.
     */
    where?: GIEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GIES to fetch.
     */
    orderBy?: GIEOrderByWithRelationInput | GIEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GIES.
     */
    cursor?: GIEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GIES.
     */
    distinct?: GIEScalarFieldEnum | GIEScalarFieldEnum[]
  }

  /**
   * GIE findMany
   */
  export type GIEFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIE
     */
    select?: GIESelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIE
     */
    omit?: GIEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIEInclude<ExtArgs> | null
    /**
     * Filter, which GIES to fetch.
     */
    where?: GIEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GIES to fetch.
     */
    orderBy?: GIEOrderByWithRelationInput | GIEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GIES.
     */
    cursor?: GIEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GIES.
     */
    distinct?: GIEScalarFieldEnum | GIEScalarFieldEnum[]
  }

  /**
   * GIE create
   */
  export type GIECreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIE
     */
    select?: GIESelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIE
     */
    omit?: GIEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIEInclude<ExtArgs> | null
    /**
     * The data needed to create a GIE.
     */
    data: XOR<GIECreateInput, GIEUncheckedCreateInput>
  }

  /**
   * GIE createMany
   */
  export type GIECreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GIES.
     */
    data: GIECreateManyInput | GIECreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GIE createManyAndReturn
   */
  export type GIECreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIE
     */
    select?: GIESelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GIE
     */
    omit?: GIEOmit<ExtArgs> | null
    /**
     * The data used to create many GIES.
     */
    data: GIECreateManyInput | GIECreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIEIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GIE update
   */
  export type GIEUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIE
     */
    select?: GIESelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIE
     */
    omit?: GIEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIEInclude<ExtArgs> | null
    /**
     * The data needed to update a GIE.
     */
    data: XOR<GIEUpdateInput, GIEUncheckedUpdateInput>
    /**
     * Choose, which GIE to update.
     */
    where: GIEWhereUniqueInput
  }

  /**
   * GIE updateMany
   */
  export type GIEUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GIES.
     */
    data: XOR<GIEUpdateManyMutationInput, GIEUncheckedUpdateManyInput>
    /**
     * Filter which GIES to update
     */
    where?: GIEWhereInput
    /**
     * Limit how many GIES to update.
     */
    limit?: number
  }

  /**
   * GIE updateManyAndReturn
   */
  export type GIEUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIE
     */
    select?: GIESelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GIE
     */
    omit?: GIEOmit<ExtArgs> | null
    /**
     * The data used to update GIES.
     */
    data: XOR<GIEUpdateManyMutationInput, GIEUncheckedUpdateManyInput>
    /**
     * Filter which GIES to update
     */
    where?: GIEWhereInput
    /**
     * Limit how many GIES to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIEIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GIE upsert
   */
  export type GIEUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIE
     */
    select?: GIESelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIE
     */
    omit?: GIEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIEInclude<ExtArgs> | null
    /**
     * The filter to search for the GIE to update in case it exists.
     */
    where: GIEWhereUniqueInput
    /**
     * In case the GIE found by the `where` argument doesn't exist, create a new GIE with this data.
     */
    create: XOR<GIECreateInput, GIEUncheckedCreateInput>
    /**
     * In case the GIE was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GIEUpdateInput, GIEUncheckedUpdateInput>
  }

  /**
   * GIE delete
   */
  export type GIEDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIE
     */
    select?: GIESelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIE
     */
    omit?: GIEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIEInclude<ExtArgs> | null
    /**
     * Filter which GIE to delete.
     */
    where: GIEWhereUniqueInput
  }

  /**
   * GIE deleteMany
   */
  export type GIEDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GIES to delete
     */
    where?: GIEWhereInput
    /**
     * Limit how many GIES to delete.
     */
    limit?: number
  }

  /**
   * GIE.regions
   */
  export type GIE$regionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    where?: regionsWhereInput
  }

  /**
   * GIE.produits
   */
  export type GIE$produitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    where?: ProduitWhereInput
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    cursor?: ProduitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * GIE without action
   */
  export type GIEDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIE
     */
    select?: GIESelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIE
     */
    omit?: GIEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIEInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    adresse: string | null
    statut: $Enums.StatutClient | null
    createdAt: Date | null
    updatedAt: Date | null
    administrateurId: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    adresse: string | null
    statut: $Enums.StatutClient | null
    createdAt: Date | null
    updatedAt: Date | null
    administrateurId: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nom: number
    prenom: number
    telephone: number
    adresse: number
    statut: number
    createdAt: number
    updatedAt: number
    administrateurId: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nom?: true
    prenom?: true
    telephone?: true
    adresse?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    administrateurId?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nom?: true
    prenom?: true
    telephone?: true
    adresse?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    administrateurId?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nom?: true
    prenom?: true
    telephone?: true
    adresse?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    administrateurId?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    email: string | null
    password: string
    nom: string
    prenom: string
    telephone: string
    adresse: string | null
    statut: $Enums.StatutClient
    createdAt: Date
    updatedAt: Date
    administrateurId: string
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    adresse?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    administrateurId?: boolean
    administrateur?: boolean | AdministrateurDefaultArgs<ExtArgs>
    commandes?: boolean | Client$commandesArgs<ExtArgs>
    avis?: boolean | Client$avisArgs<ExtArgs>
    avisProduit?: boolean | Client$avisProduitArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    adresse?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    administrateurId?: boolean
    administrateur?: boolean | AdministrateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    adresse?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    administrateurId?: boolean
    administrateur?: boolean | AdministrateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    adresse?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    administrateurId?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nom" | "prenom" | "telephone" | "adresse" | "statut" | "createdAt" | "updatedAt" | "administrateurId", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrateur?: boolean | AdministrateurDefaultArgs<ExtArgs>
    commandes?: boolean | Client$commandesArgs<ExtArgs>
    avis?: boolean | Client$avisArgs<ExtArgs>
    avisProduit?: boolean | Client$avisProduitArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrateur?: boolean | AdministrateurDefaultArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrateur?: boolean | AdministrateurDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      administrateur: Prisma.$AdministrateurPayload<ExtArgs>
      commandes: Prisma.$CommandePayload<ExtArgs>[]
      avis: Prisma.$AvisPayload<ExtArgs>[]
      avisProduit: Prisma.$AvisProduitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      password: string
      nom: string
      prenom: string
      telephone: string
      adresse: string | null
      statut: $Enums.StatutClient
      createdAt: Date
      updatedAt: Date
      administrateurId: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    administrateur<T extends AdministrateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdministrateurDefaultArgs<ExtArgs>>): Prisma__AdministrateurClient<$Result.GetResult<Prisma.$AdministrateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    commandes<T extends Client$commandesArgs<ExtArgs> = {}>(args?: Subset<T, Client$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avis<T extends Client$avisArgs<ExtArgs> = {}>(args?: Subset<T, Client$avisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avisProduit<T extends Client$avisProduitArgs<ExtArgs> = {}>(args?: Subset<T, Client$avisProduitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly password: FieldRef<"Client", 'String'>
    readonly nom: FieldRef<"Client", 'String'>
    readonly prenom: FieldRef<"Client", 'String'>
    readonly telephone: FieldRef<"Client", 'String'>
    readonly adresse: FieldRef<"Client", 'String'>
    readonly statut: FieldRef<"Client", 'StatutClient'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
    readonly administrateurId: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.commandes
   */
  export type Client$commandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    cursor?: CommandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Client.avis
   */
  export type Client$avisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avis
     */
    select?: AvisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avis
     */
    omit?: AvisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisInclude<ExtArgs> | null
    where?: AvisWhereInput
    orderBy?: AvisOrderByWithRelationInput | AvisOrderByWithRelationInput[]
    cursor?: AvisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvisScalarFieldEnum | AvisScalarFieldEnum[]
  }

  /**
   * Client.avisProduit
   */
  export type Client$avisProduitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvisProduit
     */
    select?: AvisProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvisProduit
     */
    omit?: AvisProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisProduitInclude<ExtArgs> | null
    where?: AvisProduitWhereInput
    orderBy?: AvisProduitOrderByWithRelationInput | AvisProduitOrderByWithRelationInput[]
    cursor?: AvisProduitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvisProduitScalarFieldEnum | AvisProduitScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Categorie
   */

  export type AggregateCategorie = {
    _count: CategorieCountAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  export type CategorieMinAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    conservation: string | null
    couleur: string | null
    createdAt: Date | null
    updatedAt: Date | null
    image: string | null
  }

  export type CategorieMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    conservation: string | null
    couleur: string | null
    createdAt: Date | null
    updatedAt: Date | null
    image: string | null
  }

  export type CategorieCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    conservation: number
    couleur: number
    createdAt: number
    updatedAt: number
    image: number
    _all: number
  }


  export type CategorieMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    conservation?: true
    couleur?: true
    createdAt?: true
    updatedAt?: true
    image?: true
  }

  export type CategorieMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    conservation?: true
    couleur?: true
    createdAt?: true
    updatedAt?: true
    image?: true
  }

  export type CategorieCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    conservation?: true
    couleur?: true
    createdAt?: true
    updatedAt?: true
    image?: true
    _all?: true
  }

  export type CategorieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorie to aggregate.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategorieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategorieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategorieMaxAggregateInputType
  }

  export type GetCategorieAggregateType<T extends CategorieAggregateArgs> = {
        [P in keyof T & keyof AggregateCategorie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategorie[P]>
      : GetScalarType<T[P], AggregateCategorie[P]>
  }




  export type CategorieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategorieWhereInput
    orderBy?: CategorieOrderByWithAggregationInput | CategorieOrderByWithAggregationInput[]
    by: CategorieScalarFieldEnum[] | CategorieScalarFieldEnum
    having?: CategorieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategorieCountAggregateInputType | true
    _min?: CategorieMinAggregateInputType
    _max?: CategorieMaxAggregateInputType
  }

  export type CategorieGroupByOutputType = {
    id: string
    nom: string
    description: string | null
    conservation: string | null
    couleur: string | null
    createdAt: Date
    updatedAt: Date
    image: string | null
    _count: CategorieCountAggregateOutputType | null
    _min: CategorieMinAggregateOutputType | null
    _max: CategorieMaxAggregateOutputType | null
  }

  type GetCategorieGroupByPayload<T extends CategorieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategorieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategorieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategorieGroupByOutputType[P]>
            : GetScalarType<T[P], CategorieGroupByOutputType[P]>
        }
      >
    >


  export type CategorieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    conservation?: boolean
    couleur?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
    produits?: boolean | Categorie$produitsArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    conservation?: boolean
    couleur?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    conservation?: boolean
    couleur?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
  }, ExtArgs["result"]["categorie"]>

  export type CategorieSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
    conservation?: boolean
    couleur?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean
  }

  export type CategorieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "description" | "conservation" | "couleur" | "createdAt" | "updatedAt" | "image", ExtArgs["result"]["categorie"]>
  export type CategorieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produits?: boolean | Categorie$produitsArgs<ExtArgs>
    _count?: boolean | CategorieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategorieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategorieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categorie"
    objects: {
      produits: Prisma.$ProduitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      description: string | null
      conservation: string | null
      couleur: string | null
      createdAt: Date
      updatedAt: Date
      image: string | null
    }, ExtArgs["result"]["categorie"]>
    composites: {}
  }

  type CategorieGetPayload<S extends boolean | null | undefined | CategorieDefaultArgs> = $Result.GetResult<Prisma.$CategoriePayload, S>

  type CategorieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategorieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategorieCountAggregateInputType | true
    }

  export interface CategorieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categorie'], meta: { name: 'Categorie' } }
    /**
     * Find zero or one Categorie that matches the filter.
     * @param {CategorieFindUniqueArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategorieFindUniqueArgs>(args: SelectSubset<T, CategorieFindUniqueArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categorie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategorieFindUniqueOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategorieFindUniqueOrThrowArgs>(args: SelectSubset<T, CategorieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategorieFindFirstArgs>(args?: SelectSubset<T, CategorieFindFirstArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categorie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindFirstOrThrowArgs} args - Arguments to find a Categorie
     * @example
     * // Get one Categorie
     * const categorie = await prisma.categorie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategorieFindFirstOrThrowArgs>(args?: SelectSubset<T, CategorieFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categorie.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categorie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categorieWithIdOnly = await prisma.categorie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategorieFindManyArgs>(args?: SelectSubset<T, CategorieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categorie.
     * @param {CategorieCreateArgs} args - Arguments to create a Categorie.
     * @example
     * // Create one Categorie
     * const Categorie = await prisma.categorie.create({
     *   data: {
     *     // ... data to create a Categorie
     *   }
     * })
     * 
     */
    create<T extends CategorieCreateArgs>(args: SelectSubset<T, CategorieCreateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategorieCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategorieCreateManyArgs>(args?: SelectSubset<T, CategorieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategorieCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categorie = await prisma.categorie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categorieWithIdOnly = await prisma.categorie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategorieCreateManyAndReturnArgs>(args?: SelectSubset<T, CategorieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categorie.
     * @param {CategorieDeleteArgs} args - Arguments to delete one Categorie.
     * @example
     * // Delete one Categorie
     * const Categorie = await prisma.categorie.delete({
     *   where: {
     *     // ... filter to delete one Categorie
     *   }
     * })
     * 
     */
    delete<T extends CategorieDeleteArgs>(args: SelectSubset<T, CategorieDeleteArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categorie.
     * @param {CategorieUpdateArgs} args - Arguments to update one Categorie.
     * @example
     * // Update one Categorie
     * const categorie = await prisma.categorie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategorieUpdateArgs>(args: SelectSubset<T, CategorieUpdateArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategorieDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categorie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategorieDeleteManyArgs>(args?: SelectSubset<T, CategorieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategorieUpdateManyArgs>(args: SelectSubset<T, CategorieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategorieUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categorie = await prisma.categorie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categorieWithIdOnly = await prisma.categorie.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategorieUpdateManyAndReturnArgs>(args: SelectSubset<T, CategorieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categorie.
     * @param {CategorieUpsertArgs} args - Arguments to update or create a Categorie.
     * @example
     * // Update or create a Categorie
     * const categorie = await prisma.categorie.upsert({
     *   create: {
     *     // ... data to create a Categorie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categorie we want to update
     *   }
     * })
     */
    upsert<T extends CategorieUpsertArgs>(args: SelectSubset<T, CategorieUpsertArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categorie.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategorieCountArgs>(
      args?: Subset<T, CategorieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategorieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategorieAggregateArgs>(args: Subset<T, CategorieAggregateArgs>): Prisma.PrismaPromise<GetCategorieAggregateType<T>>

    /**
     * Group by Categorie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategorieGroupByArgs} args - Group by arguments.
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
      T extends CategorieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategorieGroupByArgs['orderBy'] }
        : { orderBy?: CategorieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategorieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategorieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categorie model
   */
  readonly fields: CategorieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categorie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategorieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produits<T extends Categorie$produitsArgs<ExtArgs> = {}>(args?: Subset<T, Categorie$produitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categorie model
   */
  interface CategorieFieldRefs {
    readonly id: FieldRef<"Categorie", 'String'>
    readonly nom: FieldRef<"Categorie", 'String'>
    readonly description: FieldRef<"Categorie", 'String'>
    readonly conservation: FieldRef<"Categorie", 'String'>
    readonly couleur: FieldRef<"Categorie", 'String'>
    readonly createdAt: FieldRef<"Categorie", 'DateTime'>
    readonly updatedAt: FieldRef<"Categorie", 'DateTime'>
    readonly image: FieldRef<"Categorie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Categorie findUnique
   */
  export type CategorieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findUniqueOrThrow
   */
  export type CategorieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie findFirst
   */
  export type CategorieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findFirstOrThrow
   */
  export type CategorieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categorie to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie findMany
   */
  export type CategorieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategorieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategorieOrderByWithRelationInput | CategorieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategorieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategorieScalarFieldEnum | CategorieScalarFieldEnum[]
  }

  /**
   * Categorie create
   */
  export type CategorieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to create a Categorie.
     */
    data: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
  }

  /**
   * Categorie createMany
   */
  export type CategorieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategorieCreateManyInput | CategorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorie createManyAndReturn
   */
  export type CategorieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategorieCreateManyInput | CategorieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categorie update
   */
  export type CategorieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The data needed to update a Categorie.
     */
    data: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
    /**
     * Choose, which Categorie to update.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie updateMany
   */
  export type CategorieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categorie updateManyAndReturn
   */
  export type CategorieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategorieUpdateManyMutationInput, CategorieUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categorie upsert
   */
  export type CategorieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * The filter to search for the Categorie to update in case it exists.
     */
    where: CategorieWhereUniqueInput
    /**
     * In case the Categorie found by the `where` argument doesn't exist, create a new Categorie with this data.
     */
    create: XOR<CategorieCreateInput, CategorieUncheckedCreateInput>
    /**
     * In case the Categorie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategorieUpdateInput, CategorieUncheckedUpdateInput>
  }

  /**
   * Categorie delete
   */
  export type CategorieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    /**
     * Filter which Categorie to delete.
     */
    where: CategorieWhereUniqueInput
  }

  /**
   * Categorie deleteMany
   */
  export type CategorieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategorieWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categorie.produits
   */
  export type Categorie$produitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    where?: ProduitWhereInput
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    cursor?: ProduitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Categorie without action
   */
  export type CategorieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
  }


  /**
   * Model Produit
   */

  export type AggregateProduit = {
    _count: ProduitCountAggregateOutputType | null
    _avg: ProduitAvgAggregateOutputType | null
    _sum: ProduitSumAggregateOutputType | null
    _min: ProduitMinAggregateOutputType | null
    _max: ProduitMaxAggregateOutputType | null
  }

  export type ProduitAvgAggregateOutputType = {
    prix: number | null
    stock: number | null
  }

  export type ProduitSumAggregateOutputType = {
    prix: number | null
    stock: number | null
  }

  export type ProduitMinAggregateOutputType = {
    id: string | null
    nom: string | null
    quantite: string | null
    description: string | null
    prix: number | null
    stock: number | null
    image: string | null
    statut: $Enums.StatutProduit | null
    createdAt: Date | null
    updatedAt: Date | null
    gieId: string | null
    categorieId: string | null
  }

  export type ProduitMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    quantite: string | null
    description: string | null
    prix: number | null
    stock: number | null
    image: string | null
    statut: $Enums.StatutProduit | null
    createdAt: Date | null
    updatedAt: Date | null
    gieId: string | null
    categorieId: string | null
  }

  export type ProduitCountAggregateOutputType = {
    id: number
    nom: number
    quantite: number
    description: number
    prix: number
    stock: number
    image: number
    statut: number
    createdAt: number
    updatedAt: number
    gieId: number
    categorieId: number
    _all: number
  }


  export type ProduitAvgAggregateInputType = {
    prix?: true
    stock?: true
  }

  export type ProduitSumAggregateInputType = {
    prix?: true
    stock?: true
  }

  export type ProduitMinAggregateInputType = {
    id?: true
    nom?: true
    quantite?: true
    description?: true
    prix?: true
    stock?: true
    image?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    gieId?: true
    categorieId?: true
  }

  export type ProduitMaxAggregateInputType = {
    id?: true
    nom?: true
    quantite?: true
    description?: true
    prix?: true
    stock?: true
    image?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    gieId?: true
    categorieId?: true
  }

  export type ProduitCountAggregateInputType = {
    id?: true
    nom?: true
    quantite?: true
    description?: true
    prix?: true
    stock?: true
    image?: true
    statut?: true
    createdAt?: true
    updatedAt?: true
    gieId?: true
    categorieId?: true
    _all?: true
  }

  export type ProduitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produit to aggregate.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produits
    **/
    _count?: true | ProduitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProduitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProduitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProduitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProduitMaxAggregateInputType
  }

  export type GetProduitAggregateType<T extends ProduitAggregateArgs> = {
        [P in keyof T & keyof AggregateProduit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduit[P]>
      : GetScalarType<T[P], AggregateProduit[P]>
  }




  export type ProduitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProduitWhereInput
    orderBy?: ProduitOrderByWithAggregationInput | ProduitOrderByWithAggregationInput[]
    by: ProduitScalarFieldEnum[] | ProduitScalarFieldEnum
    having?: ProduitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProduitCountAggregateInputType | true
    _avg?: ProduitAvgAggregateInputType
    _sum?: ProduitSumAggregateInputType
    _min?: ProduitMinAggregateInputType
    _max?: ProduitMaxAggregateInputType
  }

  export type ProduitGroupByOutputType = {
    id: string
    nom: string
    quantite: string
    description: string | null
    prix: number
    stock: number
    image: string | null
    statut: $Enums.StatutProduit
    createdAt: Date
    updatedAt: Date
    gieId: string
    categorieId: string | null
    _count: ProduitCountAggregateOutputType | null
    _avg: ProduitAvgAggregateOutputType | null
    _sum: ProduitSumAggregateOutputType | null
    _min: ProduitMinAggregateOutputType | null
    _max: ProduitMaxAggregateOutputType | null
  }

  type GetProduitGroupByPayload<T extends ProduitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProduitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProduitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProduitGroupByOutputType[P]>
            : GetScalarType<T[P], ProduitGroupByOutputType[P]>
        }
      >
    >


  export type ProduitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    quantite?: boolean
    description?: boolean
    prix?: boolean
    stock?: boolean
    image?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gieId?: boolean
    categorieId?: boolean
    panierProduits?: boolean | Produit$panierProduitsArgs<ExtArgs>
    categorie?: boolean | Produit$categorieArgs<ExtArgs>
    gie?: boolean | GIEDefaultArgs<ExtArgs>
    avisProduit?: boolean | Produit$avisProduitArgs<ExtArgs>
    _count?: boolean | ProduitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit"]>

  export type ProduitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    quantite?: boolean
    description?: boolean
    prix?: boolean
    stock?: boolean
    image?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gieId?: boolean
    categorieId?: boolean
    categorie?: boolean | Produit$categorieArgs<ExtArgs>
    gie?: boolean | GIEDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit"]>

  export type ProduitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    quantite?: boolean
    description?: boolean
    prix?: boolean
    stock?: boolean
    image?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gieId?: boolean
    categorieId?: boolean
    categorie?: boolean | Produit$categorieArgs<ExtArgs>
    gie?: boolean | GIEDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produit"]>

  export type ProduitSelectScalar = {
    id?: boolean
    nom?: boolean
    quantite?: boolean
    description?: boolean
    prix?: boolean
    stock?: boolean
    image?: boolean
    statut?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gieId?: boolean
    categorieId?: boolean
  }

  export type ProduitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "quantite" | "description" | "prix" | "stock" | "image" | "statut" | "createdAt" | "updatedAt" | "gieId" | "categorieId", ExtArgs["result"]["produit"]>
  export type ProduitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panierProduits?: boolean | Produit$panierProduitsArgs<ExtArgs>
    categorie?: boolean | Produit$categorieArgs<ExtArgs>
    gie?: boolean | GIEDefaultArgs<ExtArgs>
    avisProduit?: boolean | Produit$avisProduitArgs<ExtArgs>
    _count?: boolean | ProduitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProduitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | Produit$categorieArgs<ExtArgs>
    gie?: boolean | GIEDefaultArgs<ExtArgs>
  }
  export type ProduitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorie?: boolean | Produit$categorieArgs<ExtArgs>
    gie?: boolean | GIEDefaultArgs<ExtArgs>
  }

  export type $ProduitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produit"
    objects: {
      panierProduits: Prisma.$PanierProduitPayload<ExtArgs>[]
      categorie: Prisma.$CategoriePayload<ExtArgs> | null
      gie: Prisma.$GIEPayload<ExtArgs>
      avisProduit: Prisma.$AvisProduitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      quantite: string
      description: string | null
      prix: number
      stock: number
      image: string | null
      statut: $Enums.StatutProduit
      createdAt: Date
      updatedAt: Date
      gieId: string
      categorieId: string | null
    }, ExtArgs["result"]["produit"]>
    composites: {}
  }

  type ProduitGetPayload<S extends boolean | null | undefined | ProduitDefaultArgs> = $Result.GetResult<Prisma.$ProduitPayload, S>

  type ProduitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProduitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProduitCountAggregateInputType | true
    }

  export interface ProduitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produit'], meta: { name: 'Produit' } }
    /**
     * Find zero or one Produit that matches the filter.
     * @param {ProduitFindUniqueArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProduitFindUniqueArgs>(args: SelectSubset<T, ProduitFindUniqueArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProduitFindUniqueOrThrowArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProduitFindUniqueOrThrowArgs>(args: SelectSubset<T, ProduitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitFindFirstArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProduitFindFirstArgs>(args?: SelectSubset<T, ProduitFindFirstArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitFindFirstOrThrowArgs} args - Arguments to find a Produit
     * @example
     * // Get one Produit
     * const produit = await prisma.produit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProduitFindFirstOrThrowArgs>(args?: SelectSubset<T, ProduitFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produits
     * const produits = await prisma.produit.findMany()
     * 
     * // Get first 10 Produits
     * const produits = await prisma.produit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produitWithIdOnly = await prisma.produit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProduitFindManyArgs>(args?: SelectSubset<T, ProduitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produit.
     * @param {ProduitCreateArgs} args - Arguments to create a Produit.
     * @example
     * // Create one Produit
     * const Produit = await prisma.produit.create({
     *   data: {
     *     // ... data to create a Produit
     *   }
     * })
     * 
     */
    create<T extends ProduitCreateArgs>(args: SelectSubset<T, ProduitCreateArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produits.
     * @param {ProduitCreateManyArgs} args - Arguments to create many Produits.
     * @example
     * // Create many Produits
     * const produit = await prisma.produit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProduitCreateManyArgs>(args?: SelectSubset<T, ProduitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produits and returns the data saved in the database.
     * @param {ProduitCreateManyAndReturnArgs} args - Arguments to create many Produits.
     * @example
     * // Create many Produits
     * const produit = await prisma.produit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produits and only return the `id`
     * const produitWithIdOnly = await prisma.produit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProduitCreateManyAndReturnArgs>(args?: SelectSubset<T, ProduitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produit.
     * @param {ProduitDeleteArgs} args - Arguments to delete one Produit.
     * @example
     * // Delete one Produit
     * const Produit = await prisma.produit.delete({
     *   where: {
     *     // ... filter to delete one Produit
     *   }
     * })
     * 
     */
    delete<T extends ProduitDeleteArgs>(args: SelectSubset<T, ProduitDeleteArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produit.
     * @param {ProduitUpdateArgs} args - Arguments to update one Produit.
     * @example
     * // Update one Produit
     * const produit = await prisma.produit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProduitUpdateArgs>(args: SelectSubset<T, ProduitUpdateArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produits.
     * @param {ProduitDeleteManyArgs} args - Arguments to filter Produits to delete.
     * @example
     * // Delete a few Produits
     * const { count } = await prisma.produit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProduitDeleteManyArgs>(args?: SelectSubset<T, ProduitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produits
     * const produit = await prisma.produit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProduitUpdateManyArgs>(args: SelectSubset<T, ProduitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produits and returns the data updated in the database.
     * @param {ProduitUpdateManyAndReturnArgs} args - Arguments to update many Produits.
     * @example
     * // Update many Produits
     * const produit = await prisma.produit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produits and only return the `id`
     * const produitWithIdOnly = await prisma.produit.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProduitUpdateManyAndReturnArgs>(args: SelectSubset<T, ProduitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produit.
     * @param {ProduitUpsertArgs} args - Arguments to update or create a Produit.
     * @example
     * // Update or create a Produit
     * const produit = await prisma.produit.upsert({
     *   create: {
     *     // ... data to create a Produit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produit we want to update
     *   }
     * })
     */
    upsert<T extends ProduitUpsertArgs>(args: SelectSubset<T, ProduitUpsertArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitCountArgs} args - Arguments to filter Produits to count.
     * @example
     * // Count the number of Produits
     * const count = await prisma.produit.count({
     *   where: {
     *     // ... the filter for the Produits we want to count
     *   }
     * })
    **/
    count<T extends ProduitCountArgs>(
      args?: Subset<T, ProduitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProduitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProduitAggregateArgs>(args: Subset<T, ProduitAggregateArgs>): Prisma.PrismaPromise<GetProduitAggregateType<T>>

    /**
     * Group by Produit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProduitGroupByArgs} args - Group by arguments.
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
      T extends ProduitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProduitGroupByArgs['orderBy'] }
        : { orderBy?: ProduitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProduitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produit model
   */
  readonly fields: ProduitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProduitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    panierProduits<T extends Produit$panierProduitsArgs<ExtArgs> = {}>(args?: Subset<T, Produit$panierProduitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categorie<T extends Produit$categorieArgs<ExtArgs> = {}>(args?: Subset<T, Produit$categorieArgs<ExtArgs>>): Prisma__CategorieClient<$Result.GetResult<Prisma.$CategoriePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    gie<T extends GIEDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GIEDefaultArgs<ExtArgs>>): Prisma__GIEClient<$Result.GetResult<Prisma.$GIEPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    avisProduit<T extends Produit$avisProduitArgs<ExtArgs> = {}>(args?: Subset<T, Produit$avisProduitArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvisProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produit model
   */
  interface ProduitFieldRefs {
    readonly id: FieldRef<"Produit", 'String'>
    readonly nom: FieldRef<"Produit", 'String'>
    readonly quantite: FieldRef<"Produit", 'String'>
    readonly description: FieldRef<"Produit", 'String'>
    readonly prix: FieldRef<"Produit", 'Float'>
    readonly stock: FieldRef<"Produit", 'Int'>
    readonly image: FieldRef<"Produit", 'String'>
    readonly statut: FieldRef<"Produit", 'StatutProduit'>
    readonly createdAt: FieldRef<"Produit", 'DateTime'>
    readonly updatedAt: FieldRef<"Produit", 'DateTime'>
    readonly gieId: FieldRef<"Produit", 'String'>
    readonly categorieId: FieldRef<"Produit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Produit findUnique
   */
  export type ProduitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit findUniqueOrThrow
   */
  export type ProduitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit findFirst
   */
  export type ProduitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produits.
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produits.
     */
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Produit findFirstOrThrow
   */
  export type ProduitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produit to fetch.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produits.
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produits.
     */
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Produit findMany
   */
  export type ProduitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter, which Produits to fetch.
     */
    where?: ProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produits to fetch.
     */
    orderBy?: ProduitOrderByWithRelationInput | ProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produits.
     */
    cursor?: ProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produits.
     */
    distinct?: ProduitScalarFieldEnum | ProduitScalarFieldEnum[]
  }

  /**
   * Produit create
   */
  export type ProduitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * The data needed to create a Produit.
     */
    data: XOR<ProduitCreateInput, ProduitUncheckedCreateInput>
  }

  /**
   * Produit createMany
   */
  export type ProduitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produits.
     */
    data: ProduitCreateManyInput | ProduitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produit createManyAndReturn
   */
  export type ProduitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * The data used to create many Produits.
     */
    data: ProduitCreateManyInput | ProduitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produit update
   */
  export type ProduitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * The data needed to update a Produit.
     */
    data: XOR<ProduitUpdateInput, ProduitUncheckedUpdateInput>
    /**
     * Choose, which Produit to update.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit updateMany
   */
  export type ProduitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produits.
     */
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyInput>
    /**
     * Filter which Produits to update
     */
    where?: ProduitWhereInput
    /**
     * Limit how many Produits to update.
     */
    limit?: number
  }

  /**
   * Produit updateManyAndReturn
   */
  export type ProduitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * The data used to update Produits.
     */
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyInput>
    /**
     * Filter which Produits to update
     */
    where?: ProduitWhereInput
    /**
     * Limit how many Produits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produit upsert
   */
  export type ProduitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * The filter to search for the Produit to update in case it exists.
     */
    where: ProduitWhereUniqueInput
    /**
     * In case the Produit found by the `where` argument doesn't exist, create a new Produit with this data.
     */
    create: XOR<ProduitCreateInput, ProduitUncheckedCreateInput>
    /**
     * In case the Produit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProduitUpdateInput, ProduitUncheckedUpdateInput>
  }

  /**
   * Produit delete
   */
  export type ProduitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
    /**
     * Filter which Produit to delete.
     */
    where: ProduitWhereUniqueInput
  }

  /**
   * Produit deleteMany
   */
  export type ProduitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produits to delete
     */
    where?: ProduitWhereInput
    /**
     * Limit how many Produits to delete.
     */
    limit?: number
  }

  /**
   * Produit.panierProduits
   */
  export type Produit$panierProduitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanierProduit
     */
    select?: PanierProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanierProduit
     */
    omit?: PanierProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierProduitInclude<ExtArgs> | null
    where?: PanierProduitWhereInput
    orderBy?: PanierProduitOrderByWithRelationInput | PanierProduitOrderByWithRelationInput[]
    cursor?: PanierProduitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PanierProduitScalarFieldEnum | PanierProduitScalarFieldEnum[]
  }

  /**
   * Produit.categorie
   */
  export type Produit$categorieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categorie
     */
    select?: CategorieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categorie
     */
    omit?: CategorieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategorieInclude<ExtArgs> | null
    where?: CategorieWhereInput
  }

  /**
   * Produit.avisProduit
   */
  export type Produit$avisProduitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvisProduit
     */
    select?: AvisProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvisProduit
     */
    omit?: AvisProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvisProduitInclude<ExtArgs> | null
    where?: AvisProduitWhereInput
    orderBy?: AvisProduitOrderByWithRelationInput | AvisProduitOrderByWithRelationInput[]
    cursor?: AvisProduitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvisProduitScalarFieldEnum | AvisProduitScalarFieldEnum[]
  }

  /**
   * Produit without action
   */
  export type ProduitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produit
     */
    select?: ProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produit
     */
    omit?: ProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProduitInclude<ExtArgs> | null
  }


  /**
   * Model Commande
   */

  export type AggregateCommande = {
    _count: CommandeCountAggregateOutputType | null
    _avg: CommandeAvgAggregateOutputType | null
    _sum: CommandeSumAggregateOutputType | null
    _min: CommandeMinAggregateOutputType | null
    _max: CommandeMaxAggregateOutputType | null
  }

  export type CommandeAvgAggregateOutputType = {
    montant: number | null
    fraisLivraison: number | null
  }

  export type CommandeSumAggregateOutputType = {
    montant: number | null
    fraisLivraison: number | null
  }

  export type CommandeMinAggregateOutputType = {
    id: string | null
    numero: string | null
    montant: number | null
    statut: $Enums.StatutCommande | null
    dateCommande: Date | null
    dateLivraison: Date | null
    adresseLivraison: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: string | null
    fraisLivraison: number | null
    regionLivraisonId: string | null
    livreurId: string | null
  }

  export type CommandeMaxAggregateOutputType = {
    id: string | null
    numero: string | null
    montant: number | null
    statut: $Enums.StatutCommande | null
    dateCommande: Date | null
    dateLivraison: Date | null
    adresseLivraison: string | null
    createdAt: Date | null
    updatedAt: Date | null
    clientId: string | null
    fraisLivraison: number | null
    regionLivraisonId: string | null
    livreurId: string | null
  }

  export type CommandeCountAggregateOutputType = {
    id: number
    numero: number
    montant: number
    statut: number
    dateCommande: number
    dateLivraison: number
    adresseLivraison: number
    createdAt: number
    updatedAt: number
    clientId: number
    fraisLivraison: number
    regionLivraisonId: number
    livreurId: number
    _all: number
  }


  export type CommandeAvgAggregateInputType = {
    montant?: true
    fraisLivraison?: true
  }

  export type CommandeSumAggregateInputType = {
    montant?: true
    fraisLivraison?: true
  }

  export type CommandeMinAggregateInputType = {
    id?: true
    numero?: true
    montant?: true
    statut?: true
    dateCommande?: true
    dateLivraison?: true
    adresseLivraison?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    fraisLivraison?: true
    regionLivraisonId?: true
    livreurId?: true
  }

  export type CommandeMaxAggregateInputType = {
    id?: true
    numero?: true
    montant?: true
    statut?: true
    dateCommande?: true
    dateLivraison?: true
    adresseLivraison?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    fraisLivraison?: true
    regionLivraisonId?: true
    livreurId?: true
  }

  export type CommandeCountAggregateInputType = {
    id?: true
    numero?: true
    montant?: true
    statut?: true
    dateCommande?: true
    dateLivraison?: true
    adresseLivraison?: true
    createdAt?: true
    updatedAt?: true
    clientId?: true
    fraisLivraison?: true
    regionLivraisonId?: true
    livreurId?: true
    _all?: true
  }

  export type CommandeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commande to aggregate.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commandes
    **/
    _count?: true | CommandeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommandeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommandeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommandeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommandeMaxAggregateInputType
  }

  export type GetCommandeAggregateType<T extends CommandeAggregateArgs> = {
        [P in keyof T & keyof AggregateCommande]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommande[P]>
      : GetScalarType<T[P], AggregateCommande[P]>
  }




  export type CommandeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithAggregationInput | CommandeOrderByWithAggregationInput[]
    by: CommandeScalarFieldEnum[] | CommandeScalarFieldEnum
    having?: CommandeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommandeCountAggregateInputType | true
    _avg?: CommandeAvgAggregateInputType
    _sum?: CommandeSumAggregateInputType
    _min?: CommandeMinAggregateInputType
    _max?: CommandeMaxAggregateInputType
  }

  export type CommandeGroupByOutputType = {
    id: string
    numero: string
    montant: number
    statut: $Enums.StatutCommande
    dateCommande: Date
    dateLivraison: Date | null
    adresseLivraison: string | null
    createdAt: Date
    updatedAt: Date
    clientId: string
    fraisLivraison: number
    regionLivraisonId: string | null
    livreurId: string | null
    _count: CommandeCountAggregateOutputType | null
    _avg: CommandeAvgAggregateOutputType | null
    _sum: CommandeSumAggregateOutputType | null
    _min: CommandeMinAggregateOutputType | null
    _max: CommandeMaxAggregateOutputType | null
  }

  type GetCommandeGroupByPayload<T extends CommandeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommandeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommandeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommandeGroupByOutputType[P]>
            : GetScalarType<T[P], CommandeGroupByOutputType[P]>
        }
      >
    >


  export type CommandeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    montant?: boolean
    statut?: boolean
    dateCommande?: boolean
    dateLivraison?: boolean
    adresseLivraison?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    fraisLivraison?: boolean
    regionLivraisonId?: boolean
    livreurId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    livreurs?: boolean | Commande$livreursArgs<ExtArgs>
    regions?: boolean | Commande$regionsArgs<ExtArgs>
    paiement?: boolean | Commande$paiementArgs<ExtArgs>
    panierProduits?: boolean | Commande$panierProduitsArgs<ExtArgs>
    _count?: boolean | CommandeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>

  export type CommandeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    montant?: boolean
    statut?: boolean
    dateCommande?: boolean
    dateLivraison?: boolean
    adresseLivraison?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    fraisLivraison?: boolean
    regionLivraisonId?: boolean
    livreurId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    livreurs?: boolean | Commande$livreursArgs<ExtArgs>
    regions?: boolean | Commande$regionsArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>

  export type CommandeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    montant?: boolean
    statut?: boolean
    dateCommande?: boolean
    dateLivraison?: boolean
    adresseLivraison?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    fraisLivraison?: boolean
    regionLivraisonId?: boolean
    livreurId?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    livreurs?: boolean | Commande$livreursArgs<ExtArgs>
    regions?: boolean | Commande$regionsArgs<ExtArgs>
  }, ExtArgs["result"]["commande"]>

  export type CommandeSelectScalar = {
    id?: boolean
    numero?: boolean
    montant?: boolean
    statut?: boolean
    dateCommande?: boolean
    dateLivraison?: boolean
    adresseLivraison?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    clientId?: boolean
    fraisLivraison?: boolean
    regionLivraisonId?: boolean
    livreurId?: boolean
  }

  export type CommandeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "montant" | "statut" | "dateCommande" | "dateLivraison" | "adresseLivraison" | "createdAt" | "updatedAt" | "clientId" | "fraisLivraison" | "regionLivraisonId" | "livreurId", ExtArgs["result"]["commande"]>
  export type CommandeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    livreurs?: boolean | Commande$livreursArgs<ExtArgs>
    regions?: boolean | Commande$regionsArgs<ExtArgs>
    paiement?: boolean | Commande$paiementArgs<ExtArgs>
    panierProduits?: boolean | Commande$panierProduitsArgs<ExtArgs>
    _count?: boolean | CommandeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommandeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    livreurs?: boolean | Commande$livreursArgs<ExtArgs>
    regions?: boolean | Commande$regionsArgs<ExtArgs>
  }
  export type CommandeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    livreurs?: boolean | Commande$livreursArgs<ExtArgs>
    regions?: boolean | Commande$regionsArgs<ExtArgs>
  }

  export type $CommandePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commande"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      livreurs: Prisma.$livreursPayload<ExtArgs> | null
      regions: Prisma.$regionsPayload<ExtArgs> | null
      paiement: Prisma.$PaiementPayload<ExtArgs> | null
      panierProduits: Prisma.$PanierProduitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      numero: string
      montant: number
      statut: $Enums.StatutCommande
      dateCommande: Date
      dateLivraison: Date | null
      adresseLivraison: string | null
      createdAt: Date
      updatedAt: Date
      clientId: string
      fraisLivraison: number
      regionLivraisonId: string | null
      livreurId: string | null
    }, ExtArgs["result"]["commande"]>
    composites: {}
  }

  type CommandeGetPayload<S extends boolean | null | undefined | CommandeDefaultArgs> = $Result.GetResult<Prisma.$CommandePayload, S>

  type CommandeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommandeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommandeCountAggregateInputType | true
    }

  export interface CommandeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commande'], meta: { name: 'Commande' } }
    /**
     * Find zero or one Commande that matches the filter.
     * @param {CommandeFindUniqueArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommandeFindUniqueArgs>(args: SelectSubset<T, CommandeFindUniqueArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commande that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommandeFindUniqueOrThrowArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommandeFindUniqueOrThrowArgs>(args: SelectSubset<T, CommandeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindFirstArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommandeFindFirstArgs>(args?: SelectSubset<T, CommandeFindFirstArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commande that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindFirstOrThrowArgs} args - Arguments to find a Commande
     * @example
     * // Get one Commande
     * const commande = await prisma.commande.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommandeFindFirstOrThrowArgs>(args?: SelectSubset<T, CommandeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commandes
     * const commandes = await prisma.commande.findMany()
     * 
     * // Get first 10 Commandes
     * const commandes = await prisma.commande.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commandeWithIdOnly = await prisma.commande.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommandeFindManyArgs>(args?: SelectSubset<T, CommandeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commande.
     * @param {CommandeCreateArgs} args - Arguments to create a Commande.
     * @example
     * // Create one Commande
     * const Commande = await prisma.commande.create({
     *   data: {
     *     // ... data to create a Commande
     *   }
     * })
     * 
     */
    create<T extends CommandeCreateArgs>(args: SelectSubset<T, CommandeCreateArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commandes.
     * @param {CommandeCreateManyArgs} args - Arguments to create many Commandes.
     * @example
     * // Create many Commandes
     * const commande = await prisma.commande.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommandeCreateManyArgs>(args?: SelectSubset<T, CommandeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commandes and returns the data saved in the database.
     * @param {CommandeCreateManyAndReturnArgs} args - Arguments to create many Commandes.
     * @example
     * // Create many Commandes
     * const commande = await prisma.commande.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commandes and only return the `id`
     * const commandeWithIdOnly = await prisma.commande.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommandeCreateManyAndReturnArgs>(args?: SelectSubset<T, CommandeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commande.
     * @param {CommandeDeleteArgs} args - Arguments to delete one Commande.
     * @example
     * // Delete one Commande
     * const Commande = await prisma.commande.delete({
     *   where: {
     *     // ... filter to delete one Commande
     *   }
     * })
     * 
     */
    delete<T extends CommandeDeleteArgs>(args: SelectSubset<T, CommandeDeleteArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commande.
     * @param {CommandeUpdateArgs} args - Arguments to update one Commande.
     * @example
     * // Update one Commande
     * const commande = await prisma.commande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommandeUpdateArgs>(args: SelectSubset<T, CommandeUpdateArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commandes.
     * @param {CommandeDeleteManyArgs} args - Arguments to filter Commandes to delete.
     * @example
     * // Delete a few Commandes
     * const { count } = await prisma.commande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommandeDeleteManyArgs>(args?: SelectSubset<T, CommandeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commandes
     * const commande = await prisma.commande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommandeUpdateManyArgs>(args: SelectSubset<T, CommandeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commandes and returns the data updated in the database.
     * @param {CommandeUpdateManyAndReturnArgs} args - Arguments to update many Commandes.
     * @example
     * // Update many Commandes
     * const commande = await prisma.commande.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commandes and only return the `id`
     * const commandeWithIdOnly = await prisma.commande.updateManyAndReturn({
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
    updateManyAndReturn<T extends CommandeUpdateManyAndReturnArgs>(args: SelectSubset<T, CommandeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commande.
     * @param {CommandeUpsertArgs} args - Arguments to update or create a Commande.
     * @example
     * // Update or create a Commande
     * const commande = await prisma.commande.upsert({
     *   create: {
     *     // ... data to create a Commande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commande we want to update
     *   }
     * })
     */
    upsert<T extends CommandeUpsertArgs>(args: SelectSubset<T, CommandeUpsertArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeCountArgs} args - Arguments to filter Commandes to count.
     * @example
     * // Count the number of Commandes
     * const count = await prisma.commande.count({
     *   where: {
     *     // ... the filter for the Commandes we want to count
     *   }
     * })
    **/
    count<T extends CommandeCountArgs>(
      args?: Subset<T, CommandeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommandeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommandeAggregateArgs>(args: Subset<T, CommandeAggregateArgs>): Prisma.PrismaPromise<GetCommandeAggregateType<T>>

    /**
     * Group by Commande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommandeGroupByArgs} args - Group by arguments.
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
      T extends CommandeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommandeGroupByArgs['orderBy'] }
        : { orderBy?: CommandeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commande model
   */
  readonly fields: CommandeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commande.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommandeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    livreurs<T extends Commande$livreursArgs<ExtArgs> = {}>(args?: Subset<T, Commande$livreursArgs<ExtArgs>>): Prisma__livreursClient<$Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    regions<T extends Commande$regionsArgs<ExtArgs> = {}>(args?: Subset<T, Commande$regionsArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    paiement<T extends Commande$paiementArgs<ExtArgs> = {}>(args?: Subset<T, Commande$paiementArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    panierProduits<T extends Commande$panierProduitsArgs<ExtArgs> = {}>(args?: Subset<T, Commande$panierProduitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Commande model
   */
  interface CommandeFieldRefs {
    readonly id: FieldRef<"Commande", 'String'>
    readonly numero: FieldRef<"Commande", 'String'>
    readonly montant: FieldRef<"Commande", 'Float'>
    readonly statut: FieldRef<"Commande", 'StatutCommande'>
    readonly dateCommande: FieldRef<"Commande", 'DateTime'>
    readonly dateLivraison: FieldRef<"Commande", 'DateTime'>
    readonly adresseLivraison: FieldRef<"Commande", 'String'>
    readonly createdAt: FieldRef<"Commande", 'DateTime'>
    readonly updatedAt: FieldRef<"Commande", 'DateTime'>
    readonly clientId: FieldRef<"Commande", 'String'>
    readonly fraisLivraison: FieldRef<"Commande", 'Float'>
    readonly regionLivraisonId: FieldRef<"Commande", 'String'>
    readonly livreurId: FieldRef<"Commande", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Commande findUnique
   */
  export type CommandeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande findUniqueOrThrow
   */
  export type CommandeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande findFirst
   */
  export type CommandeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commandes.
     */
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande findFirstOrThrow
   */
  export type CommandeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commande to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commandes.
     */
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande findMany
   */
  export type CommandeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter, which Commandes to fetch.
     */
    where?: CommandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commandes to fetch.
     */
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commandes.
     */
    cursor?: CommandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commandes.
     */
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * Commande create
   */
  export type CommandeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The data needed to create a Commande.
     */
    data: XOR<CommandeCreateInput, CommandeUncheckedCreateInput>
  }

  /**
   * Commande createMany
   */
  export type CommandeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commandes.
     */
    data: CommandeCreateManyInput | CommandeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commande createManyAndReturn
   */
  export type CommandeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * The data used to create many Commandes.
     */
    data: CommandeCreateManyInput | CommandeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commande update
   */
  export type CommandeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The data needed to update a Commande.
     */
    data: XOR<CommandeUpdateInput, CommandeUncheckedUpdateInput>
    /**
     * Choose, which Commande to update.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande updateMany
   */
  export type CommandeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commandes.
     */
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyInput>
    /**
     * Filter which Commandes to update
     */
    where?: CommandeWhereInput
    /**
     * Limit how many Commandes to update.
     */
    limit?: number
  }

  /**
   * Commande updateManyAndReturn
   */
  export type CommandeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * The data used to update Commandes.
     */
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyInput>
    /**
     * Filter which Commandes to update
     */
    where?: CommandeWhereInput
    /**
     * Limit how many Commandes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commande upsert
   */
  export type CommandeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * The filter to search for the Commande to update in case it exists.
     */
    where: CommandeWhereUniqueInput
    /**
     * In case the Commande found by the `where` argument doesn't exist, create a new Commande with this data.
     */
    create: XOR<CommandeCreateInput, CommandeUncheckedCreateInput>
    /**
     * In case the Commande was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommandeUpdateInput, CommandeUncheckedUpdateInput>
  }

  /**
   * Commande delete
   */
  export type CommandeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    /**
     * Filter which Commande to delete.
     */
    where: CommandeWhereUniqueInput
  }

  /**
   * Commande deleteMany
   */
  export type CommandeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commandes to delete
     */
    where?: CommandeWhereInput
    /**
     * Limit how many Commandes to delete.
     */
    limit?: number
  }

  /**
   * Commande.livreurs
   */
  export type Commande$livreursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livreurs
     */
    select?: livreursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livreurs
     */
    omit?: livreursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livreursInclude<ExtArgs> | null
    where?: livreursWhereInput
  }

  /**
   * Commande.regions
   */
  export type Commande$regionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    where?: regionsWhereInput
  }

  /**
   * Commande.paiement
   */
  export type Commande$paiementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    where?: PaiementWhereInput
  }

  /**
   * Commande.panierProduits
   */
  export type Commande$panierProduitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanierProduit
     */
    select?: PanierProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanierProduit
     */
    omit?: PanierProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierProduitInclude<ExtArgs> | null
    where?: PanierProduitWhereInput
    orderBy?: PanierProduitOrderByWithRelationInput | PanierProduitOrderByWithRelationInput[]
    cursor?: PanierProduitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PanierProduitScalarFieldEnum | PanierProduitScalarFieldEnum[]
  }

  /**
   * Commande without action
   */
  export type CommandeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
  }


  /**
   * Model Paiement
   */

  export type AggregatePaiement = {
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  export type PaiementAvgAggregateOutputType = {
    montant: number | null
    fraisLivraison: number | null
  }

  export type PaiementSumAggregateOutputType = {
    montant: number | null
    fraisLivraison: number | null
  }

  export type PaiementMinAggregateOutputType = {
    id: string | null
    montant: number | null
    methode: $Enums.MethodePaiement | null
    statut: $Enums.StatutPaiement | null
    reference: string | null
    datePaiement: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    commandeId: string | null
    fraisLivraison: number | null
  }

  export type PaiementMaxAggregateOutputType = {
    id: string | null
    montant: number | null
    methode: $Enums.MethodePaiement | null
    statut: $Enums.StatutPaiement | null
    reference: string | null
    datePaiement: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    commandeId: string | null
    fraisLivraison: number | null
  }

  export type PaiementCountAggregateOutputType = {
    id: number
    montant: number
    methode: number
    statut: number
    reference: number
    datePaiement: number
    createdAt: number
    updatedAt: number
    commandeId: number
    fraisLivraison: number
    _all: number
  }


  export type PaiementAvgAggregateInputType = {
    montant?: true
    fraisLivraison?: true
  }

  export type PaiementSumAggregateInputType = {
    montant?: true
    fraisLivraison?: true
  }

  export type PaiementMinAggregateInputType = {
    id?: true
    montant?: true
    methode?: true
    statut?: true
    reference?: true
    datePaiement?: true
    createdAt?: true
    updatedAt?: true
    commandeId?: true
    fraisLivraison?: true
  }

  export type PaiementMaxAggregateInputType = {
    id?: true
    montant?: true
    methode?: true
    statut?: true
    reference?: true
    datePaiement?: true
    createdAt?: true
    updatedAt?: true
    commandeId?: true
    fraisLivraison?: true
  }

  export type PaiementCountAggregateInputType = {
    id?: true
    montant?: true
    methode?: true
    statut?: true
    reference?: true
    datePaiement?: true
    createdAt?: true
    updatedAt?: true
    commandeId?: true
    fraisLivraison?: true
    _all?: true
  }

  export type PaiementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiement to aggregate.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paiements
    **/
    _count?: true | PaiementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaiementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaiementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaiementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaiementMaxAggregateInputType
  }

  export type GetPaiementAggregateType<T extends PaiementAggregateArgs> = {
        [P in keyof T & keyof AggregatePaiement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaiement[P]>
      : GetScalarType<T[P], AggregatePaiement[P]>
  }




  export type PaiementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithAggregationInput | PaiementOrderByWithAggregationInput[]
    by: PaiementScalarFieldEnum[] | PaiementScalarFieldEnum
    having?: PaiementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaiementCountAggregateInputType | true
    _avg?: PaiementAvgAggregateInputType
    _sum?: PaiementSumAggregateInputType
    _min?: PaiementMinAggregateInputType
    _max?: PaiementMaxAggregateInputType
  }

  export type PaiementGroupByOutputType = {
    id: string
    montant: number
    methode: $Enums.MethodePaiement
    statut: $Enums.StatutPaiement
    reference: string | null
    datePaiement: Date
    createdAt: Date
    updatedAt: Date
    commandeId: string
    fraisLivraison: number
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  type GetPaiementGroupByPayload<T extends PaiementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaiementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaiementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaiementGroupByOutputType[P]>
            : GetScalarType<T[P], PaiementGroupByOutputType[P]>
        }
      >
    >


  export type PaiementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    montant?: boolean
    methode?: boolean
    statut?: boolean
    reference?: boolean
    datePaiement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    commandeId?: boolean
    fraisLivraison?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paiement"]>

  export type PaiementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    montant?: boolean
    methode?: boolean
    statut?: boolean
    reference?: boolean
    datePaiement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    commandeId?: boolean
    fraisLivraison?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paiement"]>

  export type PaiementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    montant?: boolean
    methode?: boolean
    statut?: boolean
    reference?: boolean
    datePaiement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    commandeId?: boolean
    fraisLivraison?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paiement"]>

  export type PaiementSelectScalar = {
    id?: boolean
    montant?: boolean
    methode?: boolean
    statut?: boolean
    reference?: boolean
    datePaiement?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    commandeId?: boolean
    fraisLivraison?: boolean
  }

  export type PaiementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "montant" | "methode" | "statut" | "reference" | "datePaiement" | "createdAt" | "updatedAt" | "commandeId" | "fraisLivraison", ExtArgs["result"]["paiement"]>
  export type PaiementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
  }
  export type PaiementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
  }
  export type PaiementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
  }

  export type $PaiementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paiement"
    objects: {
      commande: Prisma.$CommandePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      montant: number
      methode: $Enums.MethodePaiement
      statut: $Enums.StatutPaiement
      reference: string | null
      datePaiement: Date
      createdAt: Date
      updatedAt: Date
      commandeId: string
      fraisLivraison: number
    }, ExtArgs["result"]["paiement"]>
    composites: {}
  }

  type PaiementGetPayload<S extends boolean | null | undefined | PaiementDefaultArgs> = $Result.GetResult<Prisma.$PaiementPayload, S>

  type PaiementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaiementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaiementCountAggregateInputType | true
    }

  export interface PaiementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paiement'], meta: { name: 'Paiement' } }
    /**
     * Find zero or one Paiement that matches the filter.
     * @param {PaiementFindUniqueArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaiementFindUniqueArgs>(args: SelectSubset<T, PaiementFindUniqueArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paiement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaiementFindUniqueOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaiementFindUniqueOrThrowArgs>(args: SelectSubset<T, PaiementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaiementFindFirstArgs>(args?: SelectSubset<T, PaiementFindFirstArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaiementFindFirstOrThrowArgs>(args?: SelectSubset<T, PaiementFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paiements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paiements
     * const paiements = await prisma.paiement.findMany()
     * 
     * // Get first 10 Paiements
     * const paiements = await prisma.paiement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paiementWithIdOnly = await prisma.paiement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaiementFindManyArgs>(args?: SelectSubset<T, PaiementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paiement.
     * @param {PaiementCreateArgs} args - Arguments to create a Paiement.
     * @example
     * // Create one Paiement
     * const Paiement = await prisma.paiement.create({
     *   data: {
     *     // ... data to create a Paiement
     *   }
     * })
     * 
     */
    create<T extends PaiementCreateArgs>(args: SelectSubset<T, PaiementCreateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paiements.
     * @param {PaiementCreateManyArgs} args - Arguments to create many Paiements.
     * @example
     * // Create many Paiements
     * const paiement = await prisma.paiement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaiementCreateManyArgs>(args?: SelectSubset<T, PaiementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paiements and returns the data saved in the database.
     * @param {PaiementCreateManyAndReturnArgs} args - Arguments to create many Paiements.
     * @example
     * // Create many Paiements
     * const paiement = await prisma.paiement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paiements and only return the `id`
     * const paiementWithIdOnly = await prisma.paiement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaiementCreateManyAndReturnArgs>(args?: SelectSubset<T, PaiementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paiement.
     * @param {PaiementDeleteArgs} args - Arguments to delete one Paiement.
     * @example
     * // Delete one Paiement
     * const Paiement = await prisma.paiement.delete({
     *   where: {
     *     // ... filter to delete one Paiement
     *   }
     * })
     * 
     */
    delete<T extends PaiementDeleteArgs>(args: SelectSubset<T, PaiementDeleteArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paiement.
     * @param {PaiementUpdateArgs} args - Arguments to update one Paiement.
     * @example
     * // Update one Paiement
     * const paiement = await prisma.paiement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaiementUpdateArgs>(args: SelectSubset<T, PaiementUpdateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paiements.
     * @param {PaiementDeleteManyArgs} args - Arguments to filter Paiements to delete.
     * @example
     * // Delete a few Paiements
     * const { count } = await prisma.paiement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaiementDeleteManyArgs>(args?: SelectSubset<T, PaiementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paiements
     * const paiement = await prisma.paiement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaiementUpdateManyArgs>(args: SelectSubset<T, PaiementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paiements and returns the data updated in the database.
     * @param {PaiementUpdateManyAndReturnArgs} args - Arguments to update many Paiements.
     * @example
     * // Update many Paiements
     * const paiement = await prisma.paiement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Paiements and only return the `id`
     * const paiementWithIdOnly = await prisma.paiement.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaiementUpdateManyAndReturnArgs>(args: SelectSubset<T, PaiementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paiement.
     * @param {PaiementUpsertArgs} args - Arguments to update or create a Paiement.
     * @example
     * // Update or create a Paiement
     * const paiement = await prisma.paiement.upsert({
     *   create: {
     *     // ... data to create a Paiement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paiement we want to update
     *   }
     * })
     */
    upsert<T extends PaiementUpsertArgs>(args: SelectSubset<T, PaiementUpsertArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementCountArgs} args - Arguments to filter Paiements to count.
     * @example
     * // Count the number of Paiements
     * const count = await prisma.paiement.count({
     *   where: {
     *     // ... the filter for the Paiements we want to count
     *   }
     * })
    **/
    count<T extends PaiementCountArgs>(
      args?: Subset<T, PaiementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaiementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaiementAggregateArgs>(args: Subset<T, PaiementAggregateArgs>): Prisma.PrismaPromise<GetPaiementAggregateType<T>>

    /**
     * Group by Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementGroupByArgs} args - Group by arguments.
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
      T extends PaiementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaiementGroupByArgs['orderBy'] }
        : { orderBy?: PaiementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaiementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaiementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paiement model
   */
  readonly fields: PaiementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paiement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaiementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commande<T extends CommandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommandeDefaultArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Paiement model
   */
  interface PaiementFieldRefs {
    readonly id: FieldRef<"Paiement", 'String'>
    readonly montant: FieldRef<"Paiement", 'Float'>
    readonly methode: FieldRef<"Paiement", 'MethodePaiement'>
    readonly statut: FieldRef<"Paiement", 'StatutPaiement'>
    readonly reference: FieldRef<"Paiement", 'String'>
    readonly datePaiement: FieldRef<"Paiement", 'DateTime'>
    readonly createdAt: FieldRef<"Paiement", 'DateTime'>
    readonly updatedAt: FieldRef<"Paiement", 'DateTime'>
    readonly commandeId: FieldRef<"Paiement", 'String'>
    readonly fraisLivraison: FieldRef<"Paiement", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Paiement findUnique
   */
  export type PaiementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findUniqueOrThrow
   */
  export type PaiementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findFirst
   */
  export type PaiementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findFirstOrThrow
   */
  export type PaiementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findMany
   */
  export type PaiementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiements to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement create
   */
  export type PaiementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to create a Paiement.
     */
    data: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
  }

  /**
   * Paiement createMany
   */
  export type PaiementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paiements.
     */
    data: PaiementCreateManyInput | PaiementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paiement createManyAndReturn
   */
  export type PaiementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * The data used to create many Paiements.
     */
    data: PaiementCreateManyInput | PaiementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paiement update
   */
  export type PaiementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to update a Paiement.
     */
    data: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
    /**
     * Choose, which Paiement to update.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement updateMany
   */
  export type PaiementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paiements.
     */
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyInput>
    /**
     * Filter which Paiements to update
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to update.
     */
    limit?: number
  }

  /**
   * Paiement updateManyAndReturn
   */
  export type PaiementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * The data used to update Paiements.
     */
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyInput>
    /**
     * Filter which Paiements to update
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Paiement upsert
   */
  export type PaiementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The filter to search for the Paiement to update in case it exists.
     */
    where: PaiementWhereUniqueInput
    /**
     * In case the Paiement found by the `where` argument doesn't exist, create a new Paiement with this data.
     */
    create: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
    /**
     * In case the Paiement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
  }

  /**
   * Paiement delete
   */
  export type PaiementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter which Paiement to delete.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement deleteMany
   */
  export type PaiementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiements to delete
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to delete.
     */
    limit?: number
  }

  /**
   * Paiement without action
   */
  export type PaiementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
  }


  /**
   * Model PanierProduit
   */

  export type AggregatePanierProduit = {
    _count: PanierProduitCountAggregateOutputType | null
    _avg: PanierProduitAvgAggregateOutputType | null
    _sum: PanierProduitSumAggregateOutputType | null
    _min: PanierProduitMinAggregateOutputType | null
    _max: PanierProduitMaxAggregateOutputType | null
  }

  export type PanierProduitAvgAggregateOutputType = {
    quantite: number | null
    prixUnitaire: number | null
  }

  export type PanierProduitSumAggregateOutputType = {
    quantite: number | null
    prixUnitaire: number | null
  }

  export type PanierProduitMinAggregateOutputType = {
    id: string | null
    quantite: number | null
    prixUnitaire: number | null
    createdAt: Date | null
    commandeId: string | null
    produitId: string | null
    statutGIE: $Enums.StatutGIEProduit | null
    dateConfirmation: Date | null
    updatedAt: Date | null
  }

  export type PanierProduitMaxAggregateOutputType = {
    id: string | null
    quantite: number | null
    prixUnitaire: number | null
    createdAt: Date | null
    commandeId: string | null
    produitId: string | null
    statutGIE: $Enums.StatutGIEProduit | null
    dateConfirmation: Date | null
    updatedAt: Date | null
  }

  export type PanierProduitCountAggregateOutputType = {
    id: number
    quantite: number
    prixUnitaire: number
    createdAt: number
    commandeId: number
    produitId: number
    statutGIE: number
    dateConfirmation: number
    updatedAt: number
    _all: number
  }


  export type PanierProduitAvgAggregateInputType = {
    quantite?: true
    prixUnitaire?: true
  }

  export type PanierProduitSumAggregateInputType = {
    quantite?: true
    prixUnitaire?: true
  }

  export type PanierProduitMinAggregateInputType = {
    id?: true
    quantite?: true
    prixUnitaire?: true
    createdAt?: true
    commandeId?: true
    produitId?: true
    statutGIE?: true
    dateConfirmation?: true
    updatedAt?: true
  }

  export type PanierProduitMaxAggregateInputType = {
    id?: true
    quantite?: true
    prixUnitaire?: true
    createdAt?: true
    commandeId?: true
    produitId?: true
    statutGIE?: true
    dateConfirmation?: true
    updatedAt?: true
  }

  export type PanierProduitCountAggregateInputType = {
    id?: true
    quantite?: true
    prixUnitaire?: true
    createdAt?: true
    commandeId?: true
    produitId?: true
    statutGIE?: true
    dateConfirmation?: true
    updatedAt?: true
    _all?: true
  }

  export type PanierProduitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PanierProduit to aggregate.
     */
    where?: PanierProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanierProduits to fetch.
     */
    orderBy?: PanierProduitOrderByWithRelationInput | PanierProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PanierProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanierProduits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanierProduits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PanierProduits
    **/
    _count?: true | PanierProduitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PanierProduitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PanierProduitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PanierProduitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PanierProduitMaxAggregateInputType
  }

  export type GetPanierProduitAggregateType<T extends PanierProduitAggregateArgs> = {
        [P in keyof T & keyof AggregatePanierProduit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePanierProduit[P]>
      : GetScalarType<T[P], AggregatePanierProduit[P]>
  }




  export type PanierProduitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanierProduitWhereInput
    orderBy?: PanierProduitOrderByWithAggregationInput | PanierProduitOrderByWithAggregationInput[]
    by: PanierProduitScalarFieldEnum[] | PanierProduitScalarFieldEnum
    having?: PanierProduitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PanierProduitCountAggregateInputType | true
    _avg?: PanierProduitAvgAggregateInputType
    _sum?: PanierProduitSumAggregateInputType
    _min?: PanierProduitMinAggregateInputType
    _max?: PanierProduitMaxAggregateInputType
  }

  export type PanierProduitGroupByOutputType = {
    id: string
    quantite: number
    prixUnitaire: number
    createdAt: Date
    commandeId: string
    produitId: string
    statutGIE: $Enums.StatutGIEProduit
    dateConfirmation: Date | null
    updatedAt: Date
    _count: PanierProduitCountAggregateOutputType | null
    _avg: PanierProduitAvgAggregateOutputType | null
    _sum: PanierProduitSumAggregateOutputType | null
    _min: PanierProduitMinAggregateOutputType | null
    _max: PanierProduitMaxAggregateOutputType | null
  }

  type GetPanierProduitGroupByPayload<T extends PanierProduitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PanierProduitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PanierProduitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PanierProduitGroupByOutputType[P]>
            : GetScalarType<T[P], PanierProduitGroupByOutputType[P]>
        }
      >
    >


  export type PanierProduitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantite?: boolean
    prixUnitaire?: boolean
    createdAt?: boolean
    commandeId?: boolean
    produitId?: boolean
    statutGIE?: boolean
    dateConfirmation?: boolean
    updatedAt?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["panierProduit"]>

  export type PanierProduitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantite?: boolean
    prixUnitaire?: boolean
    createdAt?: boolean
    commandeId?: boolean
    produitId?: boolean
    statutGIE?: boolean
    dateConfirmation?: boolean
    updatedAt?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["panierProduit"]>

  export type PanierProduitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantite?: boolean
    prixUnitaire?: boolean
    createdAt?: boolean
    commandeId?: boolean
    produitId?: boolean
    statutGIE?: boolean
    dateConfirmation?: boolean
    updatedAt?: boolean
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["panierProduit"]>

  export type PanierProduitSelectScalar = {
    id?: boolean
    quantite?: boolean
    prixUnitaire?: boolean
    createdAt?: boolean
    commandeId?: boolean
    produitId?: boolean
    statutGIE?: boolean
    dateConfirmation?: boolean
    updatedAt?: boolean
  }

  export type PanierProduitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantite" | "prixUnitaire" | "createdAt" | "commandeId" | "produitId" | "statutGIE" | "dateConfirmation" | "updatedAt", ExtArgs["result"]["panierProduit"]>
  export type PanierProduitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }
  export type PanierProduitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }
  export type PanierProduitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commande?: boolean | CommandeDefaultArgs<ExtArgs>
    produit?: boolean | ProduitDefaultArgs<ExtArgs>
  }

  export type $PanierProduitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PanierProduit"
    objects: {
      commande: Prisma.$CommandePayload<ExtArgs>
      produit: Prisma.$ProduitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantite: number
      prixUnitaire: number
      createdAt: Date
      commandeId: string
      produitId: string
      statutGIE: $Enums.StatutGIEProduit
      dateConfirmation: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["panierProduit"]>
    composites: {}
  }

  type PanierProduitGetPayload<S extends boolean | null | undefined | PanierProduitDefaultArgs> = $Result.GetResult<Prisma.$PanierProduitPayload, S>

  type PanierProduitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PanierProduitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PanierProduitCountAggregateInputType | true
    }

  export interface PanierProduitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PanierProduit'], meta: { name: 'PanierProduit' } }
    /**
     * Find zero or one PanierProduit that matches the filter.
     * @param {PanierProduitFindUniqueArgs} args - Arguments to find a PanierProduit
     * @example
     * // Get one PanierProduit
     * const panierProduit = await prisma.panierProduit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PanierProduitFindUniqueArgs>(args: SelectSubset<T, PanierProduitFindUniqueArgs<ExtArgs>>): Prisma__PanierProduitClient<$Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PanierProduit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PanierProduitFindUniqueOrThrowArgs} args - Arguments to find a PanierProduit
     * @example
     * // Get one PanierProduit
     * const panierProduit = await prisma.panierProduit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PanierProduitFindUniqueOrThrowArgs>(args: SelectSubset<T, PanierProduitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PanierProduitClient<$Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PanierProduit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanierProduitFindFirstArgs} args - Arguments to find a PanierProduit
     * @example
     * // Get one PanierProduit
     * const panierProduit = await prisma.panierProduit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PanierProduitFindFirstArgs>(args?: SelectSubset<T, PanierProduitFindFirstArgs<ExtArgs>>): Prisma__PanierProduitClient<$Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PanierProduit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanierProduitFindFirstOrThrowArgs} args - Arguments to find a PanierProduit
     * @example
     * // Get one PanierProduit
     * const panierProduit = await prisma.panierProduit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PanierProduitFindFirstOrThrowArgs>(args?: SelectSubset<T, PanierProduitFindFirstOrThrowArgs<ExtArgs>>): Prisma__PanierProduitClient<$Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PanierProduits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanierProduitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PanierProduits
     * const panierProduits = await prisma.panierProduit.findMany()
     * 
     * // Get first 10 PanierProduits
     * const panierProduits = await prisma.panierProduit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const panierProduitWithIdOnly = await prisma.panierProduit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PanierProduitFindManyArgs>(args?: SelectSubset<T, PanierProduitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PanierProduit.
     * @param {PanierProduitCreateArgs} args - Arguments to create a PanierProduit.
     * @example
     * // Create one PanierProduit
     * const PanierProduit = await prisma.panierProduit.create({
     *   data: {
     *     // ... data to create a PanierProduit
     *   }
     * })
     * 
     */
    create<T extends PanierProduitCreateArgs>(args: SelectSubset<T, PanierProduitCreateArgs<ExtArgs>>): Prisma__PanierProduitClient<$Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PanierProduits.
     * @param {PanierProduitCreateManyArgs} args - Arguments to create many PanierProduits.
     * @example
     * // Create many PanierProduits
     * const panierProduit = await prisma.panierProduit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PanierProduitCreateManyArgs>(args?: SelectSubset<T, PanierProduitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PanierProduits and returns the data saved in the database.
     * @param {PanierProduitCreateManyAndReturnArgs} args - Arguments to create many PanierProduits.
     * @example
     * // Create many PanierProduits
     * const panierProduit = await prisma.panierProduit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PanierProduits and only return the `id`
     * const panierProduitWithIdOnly = await prisma.panierProduit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PanierProduitCreateManyAndReturnArgs>(args?: SelectSubset<T, PanierProduitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PanierProduit.
     * @param {PanierProduitDeleteArgs} args - Arguments to delete one PanierProduit.
     * @example
     * // Delete one PanierProduit
     * const PanierProduit = await prisma.panierProduit.delete({
     *   where: {
     *     // ... filter to delete one PanierProduit
     *   }
     * })
     * 
     */
    delete<T extends PanierProduitDeleteArgs>(args: SelectSubset<T, PanierProduitDeleteArgs<ExtArgs>>): Prisma__PanierProduitClient<$Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PanierProduit.
     * @param {PanierProduitUpdateArgs} args - Arguments to update one PanierProduit.
     * @example
     * // Update one PanierProduit
     * const panierProduit = await prisma.panierProduit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PanierProduitUpdateArgs>(args: SelectSubset<T, PanierProduitUpdateArgs<ExtArgs>>): Prisma__PanierProduitClient<$Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PanierProduits.
     * @param {PanierProduitDeleteManyArgs} args - Arguments to filter PanierProduits to delete.
     * @example
     * // Delete a few PanierProduits
     * const { count } = await prisma.panierProduit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PanierProduitDeleteManyArgs>(args?: SelectSubset<T, PanierProduitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PanierProduits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanierProduitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PanierProduits
     * const panierProduit = await prisma.panierProduit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PanierProduitUpdateManyArgs>(args: SelectSubset<T, PanierProduitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PanierProduits and returns the data updated in the database.
     * @param {PanierProduitUpdateManyAndReturnArgs} args - Arguments to update many PanierProduits.
     * @example
     * // Update many PanierProduits
     * const panierProduit = await prisma.panierProduit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PanierProduits and only return the `id`
     * const panierProduitWithIdOnly = await prisma.panierProduit.updateManyAndReturn({
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
    updateManyAndReturn<T extends PanierProduitUpdateManyAndReturnArgs>(args: SelectSubset<T, PanierProduitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PanierProduit.
     * @param {PanierProduitUpsertArgs} args - Arguments to update or create a PanierProduit.
     * @example
     * // Update or create a PanierProduit
     * const panierProduit = await prisma.panierProduit.upsert({
     *   create: {
     *     // ... data to create a PanierProduit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PanierProduit we want to update
     *   }
     * })
     */
    upsert<T extends PanierProduitUpsertArgs>(args: SelectSubset<T, PanierProduitUpsertArgs<ExtArgs>>): Prisma__PanierProduitClient<$Result.GetResult<Prisma.$PanierProduitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PanierProduits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanierProduitCountArgs} args - Arguments to filter PanierProduits to count.
     * @example
     * // Count the number of PanierProduits
     * const count = await prisma.panierProduit.count({
     *   where: {
     *     // ... the filter for the PanierProduits we want to count
     *   }
     * })
    **/
    count<T extends PanierProduitCountArgs>(
      args?: Subset<T, PanierProduitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PanierProduitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PanierProduit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanierProduitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PanierProduitAggregateArgs>(args: Subset<T, PanierProduitAggregateArgs>): Prisma.PrismaPromise<GetPanierProduitAggregateType<T>>

    /**
     * Group by PanierProduit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanierProduitGroupByArgs} args - Group by arguments.
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
      T extends PanierProduitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PanierProduitGroupByArgs['orderBy'] }
        : { orderBy?: PanierProduitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PanierProduitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPanierProduitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PanierProduit model
   */
  readonly fields: PanierProduitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PanierProduit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PanierProduitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commande<T extends CommandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CommandeDefaultArgs<ExtArgs>>): Prisma__CommandeClient<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    produit<T extends ProduitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProduitDefaultArgs<ExtArgs>>): Prisma__ProduitClient<$Result.GetResult<Prisma.$ProduitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PanierProduit model
   */
  interface PanierProduitFieldRefs {
    readonly id: FieldRef<"PanierProduit", 'String'>
    readonly quantite: FieldRef<"PanierProduit", 'Int'>
    readonly prixUnitaire: FieldRef<"PanierProduit", 'Float'>
    readonly createdAt: FieldRef<"PanierProduit", 'DateTime'>
    readonly commandeId: FieldRef<"PanierProduit", 'String'>
    readonly produitId: FieldRef<"PanierProduit", 'String'>
    readonly statutGIE: FieldRef<"PanierProduit", 'StatutGIEProduit'>
    readonly dateConfirmation: FieldRef<"PanierProduit", 'DateTime'>
    readonly updatedAt: FieldRef<"PanierProduit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PanierProduit findUnique
   */
  export type PanierProduitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanierProduit
     */
    select?: PanierProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanierProduit
     */
    omit?: PanierProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierProduitInclude<ExtArgs> | null
    /**
     * Filter, which PanierProduit to fetch.
     */
    where: PanierProduitWhereUniqueInput
  }

  /**
   * PanierProduit findUniqueOrThrow
   */
  export type PanierProduitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanierProduit
     */
    select?: PanierProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanierProduit
     */
    omit?: PanierProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierProduitInclude<ExtArgs> | null
    /**
     * Filter, which PanierProduit to fetch.
     */
    where: PanierProduitWhereUniqueInput
  }

  /**
   * PanierProduit findFirst
   */
  export type PanierProduitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanierProduit
     */
    select?: PanierProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanierProduit
     */
    omit?: PanierProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierProduitInclude<ExtArgs> | null
    /**
     * Filter, which PanierProduit to fetch.
     */
    where?: PanierProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanierProduits to fetch.
     */
    orderBy?: PanierProduitOrderByWithRelationInput | PanierProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PanierProduits.
     */
    cursor?: PanierProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanierProduits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanierProduits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PanierProduits.
     */
    distinct?: PanierProduitScalarFieldEnum | PanierProduitScalarFieldEnum[]
  }

  /**
   * PanierProduit findFirstOrThrow
   */
  export type PanierProduitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanierProduit
     */
    select?: PanierProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanierProduit
     */
    omit?: PanierProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierProduitInclude<ExtArgs> | null
    /**
     * Filter, which PanierProduit to fetch.
     */
    where?: PanierProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanierProduits to fetch.
     */
    orderBy?: PanierProduitOrderByWithRelationInput | PanierProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PanierProduits.
     */
    cursor?: PanierProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanierProduits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanierProduits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PanierProduits.
     */
    distinct?: PanierProduitScalarFieldEnum | PanierProduitScalarFieldEnum[]
  }

  /**
   * PanierProduit findMany
   */
  export type PanierProduitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanierProduit
     */
    select?: PanierProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanierProduit
     */
    omit?: PanierProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierProduitInclude<ExtArgs> | null
    /**
     * Filter, which PanierProduits to fetch.
     */
    where?: PanierProduitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanierProduits to fetch.
     */
    orderBy?: PanierProduitOrderByWithRelationInput | PanierProduitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PanierProduits.
     */
    cursor?: PanierProduitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanierProduits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanierProduits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PanierProduits.
     */
    distinct?: PanierProduitScalarFieldEnum | PanierProduitScalarFieldEnum[]
  }

  /**
   * PanierProduit create
   */
  export type PanierProduitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanierProduit
     */
    select?: PanierProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanierProduit
     */
    omit?: PanierProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierProduitInclude<ExtArgs> | null
    /**
     * The data needed to create a PanierProduit.
     */
    data: XOR<PanierProduitCreateInput, PanierProduitUncheckedCreateInput>
  }

  /**
   * PanierProduit createMany
   */
  export type PanierProduitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PanierProduits.
     */
    data: PanierProduitCreateManyInput | PanierProduitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PanierProduit createManyAndReturn
   */
  export type PanierProduitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanierProduit
     */
    select?: PanierProduitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PanierProduit
     */
    omit?: PanierProduitOmit<ExtArgs> | null
    /**
     * The data used to create many PanierProduits.
     */
    data: PanierProduitCreateManyInput | PanierProduitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierProduitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PanierProduit update
   */
  export type PanierProduitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanierProduit
     */
    select?: PanierProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanierProduit
     */
    omit?: PanierProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierProduitInclude<ExtArgs> | null
    /**
     * The data needed to update a PanierProduit.
     */
    data: XOR<PanierProduitUpdateInput, PanierProduitUncheckedUpdateInput>
    /**
     * Choose, which PanierProduit to update.
     */
    where: PanierProduitWhereUniqueInput
  }

  /**
   * PanierProduit updateMany
   */
  export type PanierProduitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PanierProduits.
     */
    data: XOR<PanierProduitUpdateManyMutationInput, PanierProduitUncheckedUpdateManyInput>
    /**
     * Filter which PanierProduits to update
     */
    where?: PanierProduitWhereInput
    /**
     * Limit how many PanierProduits to update.
     */
    limit?: number
  }

  /**
   * PanierProduit updateManyAndReturn
   */
  export type PanierProduitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanierProduit
     */
    select?: PanierProduitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PanierProduit
     */
    omit?: PanierProduitOmit<ExtArgs> | null
    /**
     * The data used to update PanierProduits.
     */
    data: XOR<PanierProduitUpdateManyMutationInput, PanierProduitUncheckedUpdateManyInput>
    /**
     * Filter which PanierProduits to update
     */
    where?: PanierProduitWhereInput
    /**
     * Limit how many PanierProduits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierProduitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PanierProduit upsert
   */
  export type PanierProduitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanierProduit
     */
    select?: PanierProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanierProduit
     */
    omit?: PanierProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierProduitInclude<ExtArgs> | null
    /**
     * The filter to search for the PanierProduit to update in case it exists.
     */
    where: PanierProduitWhereUniqueInput
    /**
     * In case the PanierProduit found by the `where` argument doesn't exist, create a new PanierProduit with this data.
     */
    create: XOR<PanierProduitCreateInput, PanierProduitUncheckedCreateInput>
    /**
     * In case the PanierProduit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PanierProduitUpdateInput, PanierProduitUncheckedUpdateInput>
  }

  /**
   * PanierProduit delete
   */
  export type PanierProduitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanierProduit
     */
    select?: PanierProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanierProduit
     */
    omit?: PanierProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierProduitInclude<ExtArgs> | null
    /**
     * Filter which PanierProduit to delete.
     */
    where: PanierProduitWhereUniqueInput
  }

  /**
   * PanierProduit deleteMany
   */
  export type PanierProduitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PanierProduits to delete
     */
    where?: PanierProduitWhereInput
    /**
     * Limit how many PanierProduits to delete.
     */
    limit?: number
  }

  /**
   * PanierProduit without action
   */
  export type PanierProduitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanierProduit
     */
    select?: PanierProduitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PanierProduit
     */
    omit?: PanierProduitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanierProduitInclude<ExtArgs> | null
  }


  /**
   * Model adresses
   */

  export type AggregateAdresses = {
    _count: AdressesCountAggregateOutputType | null
    _avg: AdressesAvgAggregateOutputType | null
    _sum: AdressesSumAggregateOutputType | null
    _min: AdressesMinAggregateOutputType | null
    _max: AdressesMaxAggregateOutputType | null
  }

  export type AdressesAvgAggregateOutputType = {
    fraisLivraison: number | null
  }

  export type AdressesSumAggregateOutputType = {
    fraisLivraison: number | null
  }

  export type AdressesMinAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    codePostal: string | null
    fraisLivraison: number | null
    createdAt: Date | null
    updatedAt: Date | null
    regionId: string | null
  }

  export type AdressesMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    codePostal: string | null
    fraisLivraison: number | null
    createdAt: Date | null
    updatedAt: Date | null
    regionId: string | null
  }

  export type AdressesCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    codePostal: number
    fraisLivraison: number
    createdAt: number
    updatedAt: number
    regionId: number
    _all: number
  }


  export type AdressesAvgAggregateInputType = {
    fraisLivraison?: true
  }

  export type AdressesSumAggregateInputType = {
    fraisLivraison?: true
  }

  export type AdressesMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    codePostal?: true
    fraisLivraison?: true
    createdAt?: true
    updatedAt?: true
    regionId?: true
  }

  export type AdressesMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    codePostal?: true
    fraisLivraison?: true
    createdAt?: true
    updatedAt?: true
    regionId?: true
  }

  export type AdressesCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    codePostal?: true
    fraisLivraison?: true
    createdAt?: true
    updatedAt?: true
    regionId?: true
    _all?: true
  }

  export type AdressesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adresses to aggregate.
     */
    where?: adressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adresses to fetch.
     */
    orderBy?: adressesOrderByWithRelationInput | adressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: adressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned adresses
    **/
    _count?: true | AdressesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdressesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdressesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdressesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdressesMaxAggregateInputType
  }

  export type GetAdressesAggregateType<T extends AdressesAggregateArgs> = {
        [P in keyof T & keyof AggregateAdresses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdresses[P]>
      : GetScalarType<T[P], AggregateAdresses[P]>
  }




  export type adressesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adressesWhereInput
    orderBy?: adressesOrderByWithAggregationInput | adressesOrderByWithAggregationInput[]
    by: AdressesScalarFieldEnum[] | AdressesScalarFieldEnum
    having?: adressesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdressesCountAggregateInputType | true
    _avg?: AdressesAvgAggregateInputType
    _sum?: AdressesSumAggregateInputType
    _min?: AdressesMinAggregateInputType
    _max?: AdressesMaxAggregateInputType
  }

  export type AdressesGroupByOutputType = {
    id: string
    nom: string
    description: string | null
    codePostal: string | null
    fraisLivraison: number
    createdAt: Date
    updatedAt: Date
    regionId: string
    _count: AdressesCountAggregateOutputType | null
    _avg: AdressesAvgAggregateOutputType | null
    _sum: AdressesSumAggregateOutputType | null
    _min: AdressesMinAggregateOutputType | null
    _max: AdressesMaxAggregateOutputType | null
  }

  type GetAdressesGroupByPayload<T extends adressesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdressesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdressesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdressesGroupByOutputType[P]>
            : GetScalarType<T[P], AdressesGroupByOutputType[P]>
        }
      >
    >


  export type adressesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    codePostal?: boolean
    fraisLivraison?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    regionId?: boolean
    regions?: boolean | regionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adresses"]>

  export type adressesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    codePostal?: boolean
    fraisLivraison?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    regionId?: boolean
    regions?: boolean | regionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adresses"]>

  export type adressesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    codePostal?: boolean
    fraisLivraison?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    regionId?: boolean
    regions?: boolean | regionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["adresses"]>

  export type adressesSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
    codePostal?: boolean
    fraisLivraison?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    regionId?: boolean
  }

  export type adressesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "description" | "codePostal" | "fraisLivraison" | "createdAt" | "updatedAt" | "regionId", ExtArgs["result"]["adresses"]>
  export type adressesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regions?: boolean | regionsDefaultArgs<ExtArgs>
  }
  export type adressesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regions?: boolean | regionsDefaultArgs<ExtArgs>
  }
  export type adressesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regions?: boolean | regionsDefaultArgs<ExtArgs>
  }

  export type $adressesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "adresses"
    objects: {
      regions: Prisma.$regionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      description: string | null
      codePostal: string | null
      fraisLivraison: number
      createdAt: Date
      updatedAt: Date
      regionId: string
    }, ExtArgs["result"]["adresses"]>
    composites: {}
  }

  type adressesGetPayload<S extends boolean | null | undefined | adressesDefaultArgs> = $Result.GetResult<Prisma.$adressesPayload, S>

  type adressesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<adressesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdressesCountAggregateInputType | true
    }

  export interface adressesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['adresses'], meta: { name: 'adresses' } }
    /**
     * Find zero or one Adresses that matches the filter.
     * @param {adressesFindUniqueArgs} args - Arguments to find a Adresses
     * @example
     * // Get one Adresses
     * const adresses = await prisma.adresses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends adressesFindUniqueArgs>(args: SelectSubset<T, adressesFindUniqueArgs<ExtArgs>>): Prisma__adressesClient<$Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Adresses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {adressesFindUniqueOrThrowArgs} args - Arguments to find a Adresses
     * @example
     * // Get one Adresses
     * const adresses = await prisma.adresses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends adressesFindUniqueOrThrowArgs>(args: SelectSubset<T, adressesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__adressesClient<$Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adressesFindFirstArgs} args - Arguments to find a Adresses
     * @example
     * // Get one Adresses
     * const adresses = await prisma.adresses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends adressesFindFirstArgs>(args?: SelectSubset<T, adressesFindFirstArgs<ExtArgs>>): Prisma__adressesClient<$Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Adresses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adressesFindFirstOrThrowArgs} args - Arguments to find a Adresses
     * @example
     * // Get one Adresses
     * const adresses = await prisma.adresses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends adressesFindFirstOrThrowArgs>(args?: SelectSubset<T, adressesFindFirstOrThrowArgs<ExtArgs>>): Prisma__adressesClient<$Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Adresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adressesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adresses
     * const adresses = await prisma.adresses.findMany()
     * 
     * // Get first 10 Adresses
     * const adresses = await prisma.adresses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adressesWithIdOnly = await prisma.adresses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends adressesFindManyArgs>(args?: SelectSubset<T, adressesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Adresses.
     * @param {adressesCreateArgs} args - Arguments to create a Adresses.
     * @example
     * // Create one Adresses
     * const Adresses = await prisma.adresses.create({
     *   data: {
     *     // ... data to create a Adresses
     *   }
     * })
     * 
     */
    create<T extends adressesCreateArgs>(args: SelectSubset<T, adressesCreateArgs<ExtArgs>>): Prisma__adressesClient<$Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Adresses.
     * @param {adressesCreateManyArgs} args - Arguments to create many Adresses.
     * @example
     * // Create many Adresses
     * const adresses = await prisma.adresses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends adressesCreateManyArgs>(args?: SelectSubset<T, adressesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Adresses and returns the data saved in the database.
     * @param {adressesCreateManyAndReturnArgs} args - Arguments to create many Adresses.
     * @example
     * // Create many Adresses
     * const adresses = await prisma.adresses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Adresses and only return the `id`
     * const adressesWithIdOnly = await prisma.adresses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends adressesCreateManyAndReturnArgs>(args?: SelectSubset<T, adressesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Adresses.
     * @param {adressesDeleteArgs} args - Arguments to delete one Adresses.
     * @example
     * // Delete one Adresses
     * const Adresses = await prisma.adresses.delete({
     *   where: {
     *     // ... filter to delete one Adresses
     *   }
     * })
     * 
     */
    delete<T extends adressesDeleteArgs>(args: SelectSubset<T, adressesDeleteArgs<ExtArgs>>): Prisma__adressesClient<$Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Adresses.
     * @param {adressesUpdateArgs} args - Arguments to update one Adresses.
     * @example
     * // Update one Adresses
     * const adresses = await prisma.adresses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends adressesUpdateArgs>(args: SelectSubset<T, adressesUpdateArgs<ExtArgs>>): Prisma__adressesClient<$Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Adresses.
     * @param {adressesDeleteManyArgs} args - Arguments to filter Adresses to delete.
     * @example
     * // Delete a few Adresses
     * const { count } = await prisma.adresses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends adressesDeleteManyArgs>(args?: SelectSubset<T, adressesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adressesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adresses
     * const adresses = await prisma.adresses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends adressesUpdateManyArgs>(args: SelectSubset<T, adressesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adresses and returns the data updated in the database.
     * @param {adressesUpdateManyAndReturnArgs} args - Arguments to update many Adresses.
     * @example
     * // Update many Adresses
     * const adresses = await prisma.adresses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Adresses and only return the `id`
     * const adressesWithIdOnly = await prisma.adresses.updateManyAndReturn({
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
    updateManyAndReturn<T extends adressesUpdateManyAndReturnArgs>(args: SelectSubset<T, adressesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Adresses.
     * @param {adressesUpsertArgs} args - Arguments to update or create a Adresses.
     * @example
     * // Update or create a Adresses
     * const adresses = await prisma.adresses.upsert({
     *   create: {
     *     // ... data to create a Adresses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adresses we want to update
     *   }
     * })
     */
    upsert<T extends adressesUpsertArgs>(args: SelectSubset<T, adressesUpsertArgs<ExtArgs>>): Prisma__adressesClient<$Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Adresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adressesCountArgs} args - Arguments to filter Adresses to count.
     * @example
     * // Count the number of Adresses
     * const count = await prisma.adresses.count({
     *   where: {
     *     // ... the filter for the Adresses we want to count
     *   }
     * })
    **/
    count<T extends adressesCountArgs>(
      args?: Subset<T, adressesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdressesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdressesAggregateArgs>(args: Subset<T, AdressesAggregateArgs>): Prisma.PrismaPromise<GetAdressesAggregateType<T>>

    /**
     * Group by Adresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adressesGroupByArgs} args - Group by arguments.
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
      T extends adressesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adressesGroupByArgs['orderBy'] }
        : { orderBy?: adressesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, adressesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdressesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the adresses model
   */
  readonly fields: adressesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for adresses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adressesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    regions<T extends regionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, regionsDefaultArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the adresses model
   */
  interface adressesFieldRefs {
    readonly id: FieldRef<"adresses", 'String'>
    readonly nom: FieldRef<"adresses", 'String'>
    readonly description: FieldRef<"adresses", 'String'>
    readonly codePostal: FieldRef<"adresses", 'String'>
    readonly fraisLivraison: FieldRef<"adresses", 'Float'>
    readonly createdAt: FieldRef<"adresses", 'DateTime'>
    readonly updatedAt: FieldRef<"adresses", 'DateTime'>
    readonly regionId: FieldRef<"adresses", 'String'>
  }
    

  // Custom InputTypes
  /**
   * adresses findUnique
   */
  export type adressesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adresses
     */
    select?: adressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adresses
     */
    omit?: adressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adressesInclude<ExtArgs> | null
    /**
     * Filter, which adresses to fetch.
     */
    where: adressesWhereUniqueInput
  }

  /**
   * adresses findUniqueOrThrow
   */
  export type adressesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adresses
     */
    select?: adressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adresses
     */
    omit?: adressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adressesInclude<ExtArgs> | null
    /**
     * Filter, which adresses to fetch.
     */
    where: adressesWhereUniqueInput
  }

  /**
   * adresses findFirst
   */
  export type adressesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adresses
     */
    select?: adressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adresses
     */
    omit?: adressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adressesInclude<ExtArgs> | null
    /**
     * Filter, which adresses to fetch.
     */
    where?: adressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adresses to fetch.
     */
    orderBy?: adressesOrderByWithRelationInput | adressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adresses.
     */
    cursor?: adressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adresses.
     */
    distinct?: AdressesScalarFieldEnum | AdressesScalarFieldEnum[]
  }

  /**
   * adresses findFirstOrThrow
   */
  export type adressesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adresses
     */
    select?: adressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adresses
     */
    omit?: adressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adressesInclude<ExtArgs> | null
    /**
     * Filter, which adresses to fetch.
     */
    where?: adressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adresses to fetch.
     */
    orderBy?: adressesOrderByWithRelationInput | adressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for adresses.
     */
    cursor?: adressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adresses.
     */
    distinct?: AdressesScalarFieldEnum | AdressesScalarFieldEnum[]
  }

  /**
   * adresses findMany
   */
  export type adressesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adresses
     */
    select?: adressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adresses
     */
    omit?: adressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adressesInclude<ExtArgs> | null
    /**
     * Filter, which adresses to fetch.
     */
    where?: adressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of adresses to fetch.
     */
    orderBy?: adressesOrderByWithRelationInput | adressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing adresses.
     */
    cursor?: adressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` adresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` adresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of adresses.
     */
    distinct?: AdressesScalarFieldEnum | AdressesScalarFieldEnum[]
  }

  /**
   * adresses create
   */
  export type adressesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adresses
     */
    select?: adressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adresses
     */
    omit?: adressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adressesInclude<ExtArgs> | null
    /**
     * The data needed to create a adresses.
     */
    data: XOR<adressesCreateInput, adressesUncheckedCreateInput>
  }

  /**
   * adresses createMany
   */
  export type adressesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many adresses.
     */
    data: adressesCreateManyInput | adressesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * adresses createManyAndReturn
   */
  export type adressesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adresses
     */
    select?: adressesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the adresses
     */
    omit?: adressesOmit<ExtArgs> | null
    /**
     * The data used to create many adresses.
     */
    data: adressesCreateManyInput | adressesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adressesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * adresses update
   */
  export type adressesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adresses
     */
    select?: adressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adresses
     */
    omit?: adressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adressesInclude<ExtArgs> | null
    /**
     * The data needed to update a adresses.
     */
    data: XOR<adressesUpdateInput, adressesUncheckedUpdateInput>
    /**
     * Choose, which adresses to update.
     */
    where: adressesWhereUniqueInput
  }

  /**
   * adresses updateMany
   */
  export type adressesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update adresses.
     */
    data: XOR<adressesUpdateManyMutationInput, adressesUncheckedUpdateManyInput>
    /**
     * Filter which adresses to update
     */
    where?: adressesWhereInput
    /**
     * Limit how many adresses to update.
     */
    limit?: number
  }

  /**
   * adresses updateManyAndReturn
   */
  export type adressesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adresses
     */
    select?: adressesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the adresses
     */
    omit?: adressesOmit<ExtArgs> | null
    /**
     * The data used to update adresses.
     */
    data: XOR<adressesUpdateManyMutationInput, adressesUncheckedUpdateManyInput>
    /**
     * Filter which adresses to update
     */
    where?: adressesWhereInput
    /**
     * Limit how many adresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adressesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * adresses upsert
   */
  export type adressesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adresses
     */
    select?: adressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adresses
     */
    omit?: adressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adressesInclude<ExtArgs> | null
    /**
     * The filter to search for the adresses to update in case it exists.
     */
    where: adressesWhereUniqueInput
    /**
     * In case the adresses found by the `where` argument doesn't exist, create a new adresses with this data.
     */
    create: XOR<adressesCreateInput, adressesUncheckedCreateInput>
    /**
     * In case the adresses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adressesUpdateInput, adressesUncheckedUpdateInput>
  }

  /**
   * adresses delete
   */
  export type adressesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adresses
     */
    select?: adressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adresses
     */
    omit?: adressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adressesInclude<ExtArgs> | null
    /**
     * Filter which adresses to delete.
     */
    where: adressesWhereUniqueInput
  }

  /**
   * adresses deleteMany
   */
  export type adressesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adresses to delete
     */
    where?: adressesWhereInput
    /**
     * Limit how many adresses to delete.
     */
    limit?: number
  }

  /**
   * adresses without action
   */
  export type adressesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adresses
     */
    select?: adressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adresses
     */
    omit?: adressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adressesInclude<ExtArgs> | null
  }


  /**
   * Model livreurs
   */

  export type AggregateLivreurs = {
    _count: LivreursCountAggregateOutputType | null
    _min: LivreursMinAggregateOutputType | null
    _max: LivreursMaxAggregateOutputType | null
  }

  export type LivreursMinAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    email: string | null
    telephone: string | null
    password: string | null
    statut: $Enums.StatutLivreur | null
    regionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LivreursMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    prenom: string | null
    email: string | null
    telephone: string | null
    password: string | null
    statut: $Enums.StatutLivreur | null
    regionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LivreursCountAggregateOutputType = {
    id: number
    nom: number
    prenom: number
    email: number
    telephone: number
    password: number
    statut: number
    regionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LivreursMinAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    password?: true
    statut?: true
    regionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LivreursMaxAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    password?: true
    statut?: true
    regionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LivreursCountAggregateInputType = {
    id?: true
    nom?: true
    prenom?: true
    email?: true
    telephone?: true
    password?: true
    statut?: true
    regionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LivreursAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which livreurs to aggregate.
     */
    where?: livreursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livreurs to fetch.
     */
    orderBy?: livreursOrderByWithRelationInput | livreursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: livreursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livreurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livreurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned livreurs
    **/
    _count?: true | LivreursCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivreursMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivreursMaxAggregateInputType
  }

  export type GetLivreursAggregateType<T extends LivreursAggregateArgs> = {
        [P in keyof T & keyof AggregateLivreurs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivreurs[P]>
      : GetScalarType<T[P], AggregateLivreurs[P]>
  }




  export type livreursGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: livreursWhereInput
    orderBy?: livreursOrderByWithAggregationInput | livreursOrderByWithAggregationInput[]
    by: LivreursScalarFieldEnum[] | LivreursScalarFieldEnum
    having?: livreursScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivreursCountAggregateInputType | true
    _min?: LivreursMinAggregateInputType
    _max?: LivreursMaxAggregateInputType
  }

  export type LivreursGroupByOutputType = {
    id: string
    nom: string
    prenom: string
    email: string
    telephone: string
    password: string
    statut: $Enums.StatutLivreur
    regionId: string | null
    createdAt: Date
    updatedAt: Date
    _count: LivreursCountAggregateOutputType | null
    _min: LivreursMinAggregateOutputType | null
    _max: LivreursMaxAggregateOutputType | null
  }

  type GetLivreursGroupByPayload<T extends livreursGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivreursGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivreursGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivreursGroupByOutputType[P]>
            : GetScalarType<T[P], LivreursGroupByOutputType[P]>
        }
      >
    >


  export type livreursSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    password?: boolean
    statut?: boolean
    regionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    commandes?: boolean | livreurs$commandesArgs<ExtArgs>
    regions?: boolean | livreurs$regionsArgs<ExtArgs>
    _count?: boolean | LivreursCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livreurs"]>

  export type livreursSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    password?: boolean
    statut?: boolean
    regionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    regions?: boolean | livreurs$regionsArgs<ExtArgs>
  }, ExtArgs["result"]["livreurs"]>

  export type livreursSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    password?: boolean
    statut?: boolean
    regionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    regions?: boolean | livreurs$regionsArgs<ExtArgs>
  }, ExtArgs["result"]["livreurs"]>

  export type livreursSelectScalar = {
    id?: boolean
    nom?: boolean
    prenom?: boolean
    email?: boolean
    telephone?: boolean
    password?: boolean
    statut?: boolean
    regionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type livreursOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "prenom" | "email" | "telephone" | "password" | "statut" | "regionId" | "createdAt" | "updatedAt", ExtArgs["result"]["livreurs"]>
  export type livreursInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    commandes?: boolean | livreurs$commandesArgs<ExtArgs>
    regions?: boolean | livreurs$regionsArgs<ExtArgs>
    _count?: boolean | LivreursCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type livreursIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regions?: boolean | livreurs$regionsArgs<ExtArgs>
  }
  export type livreursIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    regions?: boolean | livreurs$regionsArgs<ExtArgs>
  }

  export type $livreursPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "livreurs"
    objects: {
      commandes: Prisma.$CommandePayload<ExtArgs>[]
      regions: Prisma.$regionsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      prenom: string
      email: string
      telephone: string
      password: string
      statut: $Enums.StatutLivreur
      regionId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["livreurs"]>
    composites: {}
  }

  type livreursGetPayload<S extends boolean | null | undefined | livreursDefaultArgs> = $Result.GetResult<Prisma.$livreursPayload, S>

  type livreursCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<livreursFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivreursCountAggregateInputType | true
    }

  export interface livreursDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['livreurs'], meta: { name: 'livreurs' } }
    /**
     * Find zero or one Livreurs that matches the filter.
     * @param {livreursFindUniqueArgs} args - Arguments to find a Livreurs
     * @example
     * // Get one Livreurs
     * const livreurs = await prisma.livreurs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends livreursFindUniqueArgs>(args: SelectSubset<T, livreursFindUniqueArgs<ExtArgs>>): Prisma__livreursClient<$Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Livreurs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {livreursFindUniqueOrThrowArgs} args - Arguments to find a Livreurs
     * @example
     * // Get one Livreurs
     * const livreurs = await prisma.livreurs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends livreursFindUniqueOrThrowArgs>(args: SelectSubset<T, livreursFindUniqueOrThrowArgs<ExtArgs>>): Prisma__livreursClient<$Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livreurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livreursFindFirstArgs} args - Arguments to find a Livreurs
     * @example
     * // Get one Livreurs
     * const livreurs = await prisma.livreurs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends livreursFindFirstArgs>(args?: SelectSubset<T, livreursFindFirstArgs<ExtArgs>>): Prisma__livreursClient<$Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livreurs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livreursFindFirstOrThrowArgs} args - Arguments to find a Livreurs
     * @example
     * // Get one Livreurs
     * const livreurs = await prisma.livreurs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends livreursFindFirstOrThrowArgs>(args?: SelectSubset<T, livreursFindFirstOrThrowArgs<ExtArgs>>): Prisma__livreursClient<$Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Livreurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livreursFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Livreurs
     * const livreurs = await prisma.livreurs.findMany()
     * 
     * // Get first 10 Livreurs
     * const livreurs = await prisma.livreurs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const livreursWithIdOnly = await prisma.livreurs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends livreursFindManyArgs>(args?: SelectSubset<T, livreursFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Livreurs.
     * @param {livreursCreateArgs} args - Arguments to create a Livreurs.
     * @example
     * // Create one Livreurs
     * const Livreurs = await prisma.livreurs.create({
     *   data: {
     *     // ... data to create a Livreurs
     *   }
     * })
     * 
     */
    create<T extends livreursCreateArgs>(args: SelectSubset<T, livreursCreateArgs<ExtArgs>>): Prisma__livreursClient<$Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Livreurs.
     * @param {livreursCreateManyArgs} args - Arguments to create many Livreurs.
     * @example
     * // Create many Livreurs
     * const livreurs = await prisma.livreurs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends livreursCreateManyArgs>(args?: SelectSubset<T, livreursCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Livreurs and returns the data saved in the database.
     * @param {livreursCreateManyAndReturnArgs} args - Arguments to create many Livreurs.
     * @example
     * // Create many Livreurs
     * const livreurs = await prisma.livreurs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Livreurs and only return the `id`
     * const livreursWithIdOnly = await prisma.livreurs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends livreursCreateManyAndReturnArgs>(args?: SelectSubset<T, livreursCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Livreurs.
     * @param {livreursDeleteArgs} args - Arguments to delete one Livreurs.
     * @example
     * // Delete one Livreurs
     * const Livreurs = await prisma.livreurs.delete({
     *   where: {
     *     // ... filter to delete one Livreurs
     *   }
     * })
     * 
     */
    delete<T extends livreursDeleteArgs>(args: SelectSubset<T, livreursDeleteArgs<ExtArgs>>): Prisma__livreursClient<$Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Livreurs.
     * @param {livreursUpdateArgs} args - Arguments to update one Livreurs.
     * @example
     * // Update one Livreurs
     * const livreurs = await prisma.livreurs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends livreursUpdateArgs>(args: SelectSubset<T, livreursUpdateArgs<ExtArgs>>): Prisma__livreursClient<$Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Livreurs.
     * @param {livreursDeleteManyArgs} args - Arguments to filter Livreurs to delete.
     * @example
     * // Delete a few Livreurs
     * const { count } = await prisma.livreurs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends livreursDeleteManyArgs>(args?: SelectSubset<T, livreursDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livreurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livreursUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Livreurs
     * const livreurs = await prisma.livreurs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends livreursUpdateManyArgs>(args: SelectSubset<T, livreursUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livreurs and returns the data updated in the database.
     * @param {livreursUpdateManyAndReturnArgs} args - Arguments to update many Livreurs.
     * @example
     * // Update many Livreurs
     * const livreurs = await prisma.livreurs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Livreurs and only return the `id`
     * const livreursWithIdOnly = await prisma.livreurs.updateManyAndReturn({
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
    updateManyAndReturn<T extends livreursUpdateManyAndReturnArgs>(args: SelectSubset<T, livreursUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Livreurs.
     * @param {livreursUpsertArgs} args - Arguments to update or create a Livreurs.
     * @example
     * // Update or create a Livreurs
     * const livreurs = await prisma.livreurs.upsert({
     *   create: {
     *     // ... data to create a Livreurs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Livreurs we want to update
     *   }
     * })
     */
    upsert<T extends livreursUpsertArgs>(args: SelectSubset<T, livreursUpsertArgs<ExtArgs>>): Prisma__livreursClient<$Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Livreurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livreursCountArgs} args - Arguments to filter Livreurs to count.
     * @example
     * // Count the number of Livreurs
     * const count = await prisma.livreurs.count({
     *   where: {
     *     // ... the filter for the Livreurs we want to count
     *   }
     * })
    **/
    count<T extends livreursCountArgs>(
      args?: Subset<T, livreursCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivreursCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Livreurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivreursAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LivreursAggregateArgs>(args: Subset<T, LivreursAggregateArgs>): Prisma.PrismaPromise<GetLivreursAggregateType<T>>

    /**
     * Group by Livreurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livreursGroupByArgs} args - Group by arguments.
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
      T extends livreursGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: livreursGroupByArgs['orderBy'] }
        : { orderBy?: livreursGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, livreursGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivreursGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the livreurs model
   */
  readonly fields: livreursFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for livreurs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__livreursClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    commandes<T extends livreurs$commandesArgs<ExtArgs> = {}>(args?: Subset<T, livreurs$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    regions<T extends livreurs$regionsArgs<ExtArgs> = {}>(args?: Subset<T, livreurs$regionsArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the livreurs model
   */
  interface livreursFieldRefs {
    readonly id: FieldRef<"livreurs", 'String'>
    readonly nom: FieldRef<"livreurs", 'String'>
    readonly prenom: FieldRef<"livreurs", 'String'>
    readonly email: FieldRef<"livreurs", 'String'>
    readonly telephone: FieldRef<"livreurs", 'String'>
    readonly password: FieldRef<"livreurs", 'String'>
    readonly statut: FieldRef<"livreurs", 'StatutLivreur'>
    readonly regionId: FieldRef<"livreurs", 'String'>
    readonly createdAt: FieldRef<"livreurs", 'DateTime'>
    readonly updatedAt: FieldRef<"livreurs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * livreurs findUnique
   */
  export type livreursFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livreurs
     */
    select?: livreursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livreurs
     */
    omit?: livreursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livreursInclude<ExtArgs> | null
    /**
     * Filter, which livreurs to fetch.
     */
    where: livreursWhereUniqueInput
  }

  /**
   * livreurs findUniqueOrThrow
   */
  export type livreursFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livreurs
     */
    select?: livreursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livreurs
     */
    omit?: livreursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livreursInclude<ExtArgs> | null
    /**
     * Filter, which livreurs to fetch.
     */
    where: livreursWhereUniqueInput
  }

  /**
   * livreurs findFirst
   */
  export type livreursFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livreurs
     */
    select?: livreursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livreurs
     */
    omit?: livreursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livreursInclude<ExtArgs> | null
    /**
     * Filter, which livreurs to fetch.
     */
    where?: livreursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livreurs to fetch.
     */
    orderBy?: livreursOrderByWithRelationInput | livreursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for livreurs.
     */
    cursor?: livreursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livreurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livreurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of livreurs.
     */
    distinct?: LivreursScalarFieldEnum | LivreursScalarFieldEnum[]
  }

  /**
   * livreurs findFirstOrThrow
   */
  export type livreursFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livreurs
     */
    select?: livreursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livreurs
     */
    omit?: livreursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livreursInclude<ExtArgs> | null
    /**
     * Filter, which livreurs to fetch.
     */
    where?: livreursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livreurs to fetch.
     */
    orderBy?: livreursOrderByWithRelationInput | livreursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for livreurs.
     */
    cursor?: livreursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livreurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livreurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of livreurs.
     */
    distinct?: LivreursScalarFieldEnum | LivreursScalarFieldEnum[]
  }

  /**
   * livreurs findMany
   */
  export type livreursFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livreurs
     */
    select?: livreursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livreurs
     */
    omit?: livreursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livreursInclude<ExtArgs> | null
    /**
     * Filter, which livreurs to fetch.
     */
    where?: livreursWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livreurs to fetch.
     */
    orderBy?: livreursOrderByWithRelationInput | livreursOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing livreurs.
     */
    cursor?: livreursWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livreurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livreurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of livreurs.
     */
    distinct?: LivreursScalarFieldEnum | LivreursScalarFieldEnum[]
  }

  /**
   * livreurs create
   */
  export type livreursCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livreurs
     */
    select?: livreursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livreurs
     */
    omit?: livreursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livreursInclude<ExtArgs> | null
    /**
     * The data needed to create a livreurs.
     */
    data: XOR<livreursCreateInput, livreursUncheckedCreateInput>
  }

  /**
   * livreurs createMany
   */
  export type livreursCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many livreurs.
     */
    data: livreursCreateManyInput | livreursCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * livreurs createManyAndReturn
   */
  export type livreursCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livreurs
     */
    select?: livreursSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the livreurs
     */
    omit?: livreursOmit<ExtArgs> | null
    /**
     * The data used to create many livreurs.
     */
    data: livreursCreateManyInput | livreursCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livreursIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * livreurs update
   */
  export type livreursUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livreurs
     */
    select?: livreursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livreurs
     */
    omit?: livreursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livreursInclude<ExtArgs> | null
    /**
     * The data needed to update a livreurs.
     */
    data: XOR<livreursUpdateInput, livreursUncheckedUpdateInput>
    /**
     * Choose, which livreurs to update.
     */
    where: livreursWhereUniqueInput
  }

  /**
   * livreurs updateMany
   */
  export type livreursUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update livreurs.
     */
    data: XOR<livreursUpdateManyMutationInput, livreursUncheckedUpdateManyInput>
    /**
     * Filter which livreurs to update
     */
    where?: livreursWhereInput
    /**
     * Limit how many livreurs to update.
     */
    limit?: number
  }

  /**
   * livreurs updateManyAndReturn
   */
  export type livreursUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livreurs
     */
    select?: livreursSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the livreurs
     */
    omit?: livreursOmit<ExtArgs> | null
    /**
     * The data used to update livreurs.
     */
    data: XOR<livreursUpdateManyMutationInput, livreursUncheckedUpdateManyInput>
    /**
     * Filter which livreurs to update
     */
    where?: livreursWhereInput
    /**
     * Limit how many livreurs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livreursIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * livreurs upsert
   */
  export type livreursUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livreurs
     */
    select?: livreursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livreurs
     */
    omit?: livreursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livreursInclude<ExtArgs> | null
    /**
     * The filter to search for the livreurs to update in case it exists.
     */
    where: livreursWhereUniqueInput
    /**
     * In case the livreurs found by the `where` argument doesn't exist, create a new livreurs with this data.
     */
    create: XOR<livreursCreateInput, livreursUncheckedCreateInput>
    /**
     * In case the livreurs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<livreursUpdateInput, livreursUncheckedUpdateInput>
  }

  /**
   * livreurs delete
   */
  export type livreursDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livreurs
     */
    select?: livreursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livreurs
     */
    omit?: livreursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livreursInclude<ExtArgs> | null
    /**
     * Filter which livreurs to delete.
     */
    where: livreursWhereUniqueInput
  }

  /**
   * livreurs deleteMany
   */
  export type livreursDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which livreurs to delete
     */
    where?: livreursWhereInput
    /**
     * Limit how many livreurs to delete.
     */
    limit?: number
  }

  /**
   * livreurs.commandes
   */
  export type livreurs$commandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    cursor?: CommandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * livreurs.regions
   */
  export type livreurs$regionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    where?: regionsWhereInput
  }

  /**
   * livreurs without action
   */
  export type livreursDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livreurs
     */
    select?: livreursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livreurs
     */
    omit?: livreursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livreursInclude<ExtArgs> | null
  }


  /**
   * Model regions
   */

  export type AggregateRegions = {
    _count: RegionsCountAggregateOutputType | null
    _avg: RegionsAvgAggregateOutputType | null
    _sum: RegionsSumAggregateOutputType | null
    _min: RegionsMinAggregateOutputType | null
    _max: RegionsMaxAggregateOutputType | null
  }

  export type RegionsAvgAggregateOutputType = {
    fraisLivraisonInterne: number | null
    fraisLivraisonExterne: number | null
  }

  export type RegionsSumAggregateOutputType = {
    fraisLivraisonInterne: number | null
    fraisLivraisonExterne: number | null
  }

  export type RegionsMinAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    fraisLivraisonInterne: number | null
    fraisLivraisonExterne: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegionsMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    description: string | null
    fraisLivraisonInterne: number | null
    fraisLivraisonExterne: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegionsCountAggregateOutputType = {
    id: number
    nom: number
    description: number
    fraisLivraisonInterne: number
    fraisLivraisonExterne: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegionsAvgAggregateInputType = {
    fraisLivraisonInterne?: true
    fraisLivraisonExterne?: true
  }

  export type RegionsSumAggregateInputType = {
    fraisLivraisonInterne?: true
    fraisLivraisonExterne?: true
  }

  export type RegionsMinAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    fraisLivraisonInterne?: true
    fraisLivraisonExterne?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegionsMaxAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    fraisLivraisonInterne?: true
    fraisLivraisonExterne?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegionsCountAggregateInputType = {
    id?: true
    nom?: true
    description?: true
    fraisLivraisonInterne?: true
    fraisLivraisonExterne?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RegionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which regions to aggregate.
     */
    where?: regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     */
    orderBy?: regionsOrderByWithRelationInput | regionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned regions
    **/
    _count?: true | RegionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionsMaxAggregateInputType
  }

  export type GetRegionsAggregateType<T extends RegionsAggregateArgs> = {
        [P in keyof T & keyof AggregateRegions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegions[P]>
      : GetScalarType<T[P], AggregateRegions[P]>
  }




  export type regionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: regionsWhereInput
    orderBy?: regionsOrderByWithAggregationInput | regionsOrderByWithAggregationInput[]
    by: RegionsScalarFieldEnum[] | RegionsScalarFieldEnum
    having?: regionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionsCountAggregateInputType | true
    _avg?: RegionsAvgAggregateInputType
    _sum?: RegionsSumAggregateInputType
    _min?: RegionsMinAggregateInputType
    _max?: RegionsMaxAggregateInputType
  }

  export type RegionsGroupByOutputType = {
    id: string
    nom: string
    description: string | null
    fraisLivraisonInterne: number
    fraisLivraisonExterne: number
    createdAt: Date
    updatedAt: Date
    _count: RegionsCountAggregateOutputType | null
    _avg: RegionsAvgAggregateOutputType | null
    _sum: RegionsSumAggregateOutputType | null
    _min: RegionsMinAggregateOutputType | null
    _max: RegionsMaxAggregateOutputType | null
  }

  type GetRegionsGroupByPayload<T extends regionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionsGroupByOutputType[P]>
            : GetScalarType<T[P], RegionsGroupByOutputType[P]>
        }
      >
    >


  export type regionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    fraisLivraisonInterne?: boolean
    fraisLivraisonExterne?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    adresses?: boolean | regions$adressesArgs<ExtArgs>
    commandes?: boolean | regions$commandesArgs<ExtArgs>
    gies?: boolean | regions$giesArgs<ExtArgs>
    livreurs?: boolean | regions$livreursArgs<ExtArgs>
    _count?: boolean | RegionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regions"]>

  export type regionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    fraisLivraisonInterne?: boolean
    fraisLivraisonExterne?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["regions"]>

  export type regionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    description?: boolean
    fraisLivraisonInterne?: boolean
    fraisLivraisonExterne?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["regions"]>

  export type regionsSelectScalar = {
    id?: boolean
    nom?: boolean
    description?: boolean
    fraisLivraisonInterne?: boolean
    fraisLivraisonExterne?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type regionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "description" | "fraisLivraisonInterne" | "fraisLivraisonExterne" | "createdAt" | "updatedAt", ExtArgs["result"]["regions"]>
  export type regionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adresses?: boolean | regions$adressesArgs<ExtArgs>
    commandes?: boolean | regions$commandesArgs<ExtArgs>
    gies?: boolean | regions$giesArgs<ExtArgs>
    livreurs?: boolean | regions$livreursArgs<ExtArgs>
    _count?: boolean | RegionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type regionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type regionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $regionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "regions"
    objects: {
      adresses: Prisma.$adressesPayload<ExtArgs>[]
      commandes: Prisma.$CommandePayload<ExtArgs>[]
      gies: Prisma.$GIEPayload<ExtArgs>[]
      livreurs: Prisma.$livreursPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      description: string | null
      fraisLivraisonInterne: number
      fraisLivraisonExterne: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["regions"]>
    composites: {}
  }

  type regionsGetPayload<S extends boolean | null | undefined | regionsDefaultArgs> = $Result.GetResult<Prisma.$regionsPayload, S>

  type regionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<regionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionsCountAggregateInputType | true
    }

  export interface regionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['regions'], meta: { name: 'regions' } }
    /**
     * Find zero or one Regions that matches the filter.
     * @param {regionsFindUniqueArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends regionsFindUniqueArgs>(args: SelectSubset<T, regionsFindUniqueArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Regions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {regionsFindUniqueOrThrowArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends regionsFindUniqueOrThrowArgs>(args: SelectSubset<T, regionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsFindFirstArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends regionsFindFirstArgs>(args?: SelectSubset<T, regionsFindFirstArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsFindFirstOrThrowArgs} args - Arguments to find a Regions
     * @example
     * // Get one Regions
     * const regions = await prisma.regions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends regionsFindFirstOrThrowArgs>(args?: SelectSubset<T, regionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.regions.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.regions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionsWithIdOnly = await prisma.regions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends regionsFindManyArgs>(args?: SelectSubset<T, regionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Regions.
     * @param {regionsCreateArgs} args - Arguments to create a Regions.
     * @example
     * // Create one Regions
     * const Regions = await prisma.regions.create({
     *   data: {
     *     // ... data to create a Regions
     *   }
     * })
     * 
     */
    create<T extends regionsCreateArgs>(args: SelectSubset<T, regionsCreateArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {regionsCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const regions = await prisma.regions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends regionsCreateManyArgs>(args?: SelectSubset<T, regionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {regionsCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const regions = await prisma.regions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `id`
     * const regionsWithIdOnly = await prisma.regions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends regionsCreateManyAndReturnArgs>(args?: SelectSubset<T, regionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Regions.
     * @param {regionsDeleteArgs} args - Arguments to delete one Regions.
     * @example
     * // Delete one Regions
     * const Regions = await prisma.regions.delete({
     *   where: {
     *     // ... filter to delete one Regions
     *   }
     * })
     * 
     */
    delete<T extends regionsDeleteArgs>(args: SelectSubset<T, regionsDeleteArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Regions.
     * @param {regionsUpdateArgs} args - Arguments to update one Regions.
     * @example
     * // Update one Regions
     * const regions = await prisma.regions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends regionsUpdateArgs>(args: SelectSubset<T, regionsUpdateArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {regionsDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.regions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends regionsDeleteManyArgs>(args?: SelectSubset<T, regionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const regions = await prisma.regions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends regionsUpdateManyArgs>(args: SelectSubset<T, regionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions and returns the data updated in the database.
     * @param {regionsUpdateManyAndReturnArgs} args - Arguments to update many Regions.
     * @example
     * // Update many Regions
     * const regions = await prisma.regions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regions and only return the `id`
     * const regionsWithIdOnly = await prisma.regions.updateManyAndReturn({
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
    updateManyAndReturn<T extends regionsUpdateManyAndReturnArgs>(args: SelectSubset<T, regionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Regions.
     * @param {regionsUpsertArgs} args - Arguments to update or create a Regions.
     * @example
     * // Update or create a Regions
     * const regions = await prisma.regions.upsert({
     *   create: {
     *     // ... data to create a Regions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regions we want to update
     *   }
     * })
     */
    upsert<T extends regionsUpsertArgs>(args: SelectSubset<T, regionsUpsertArgs<ExtArgs>>): Prisma__regionsClient<$Result.GetResult<Prisma.$regionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.regions.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends regionsCountArgs>(
      args?: Subset<T, regionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegionsAggregateArgs>(args: Subset<T, RegionsAggregateArgs>): Prisma.PrismaPromise<GetRegionsAggregateType<T>>

    /**
     * Group by Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {regionsGroupByArgs} args - Group by arguments.
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
      T extends regionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: regionsGroupByArgs['orderBy'] }
        : { orderBy?: regionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, regionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the regions model
   */
  readonly fields: regionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for regions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__regionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    adresses<T extends regions$adressesArgs<ExtArgs> = {}>(args?: Subset<T, regions$adressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commandes<T extends regions$commandesArgs<ExtArgs> = {}>(args?: Subset<T, regions$commandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gies<T extends regions$giesArgs<ExtArgs> = {}>(args?: Subset<T, regions$giesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GIEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    livreurs<T extends regions$livreursArgs<ExtArgs> = {}>(args?: Subset<T, regions$livreursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livreursPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the regions model
   */
  interface regionsFieldRefs {
    readonly id: FieldRef<"regions", 'String'>
    readonly nom: FieldRef<"regions", 'String'>
    readonly description: FieldRef<"regions", 'String'>
    readonly fraisLivraisonInterne: FieldRef<"regions", 'Float'>
    readonly fraisLivraisonExterne: FieldRef<"regions", 'Float'>
    readonly createdAt: FieldRef<"regions", 'DateTime'>
    readonly updatedAt: FieldRef<"regions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * regions findUnique
   */
  export type regionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter, which regions to fetch.
     */
    where: regionsWhereUniqueInput
  }

  /**
   * regions findUniqueOrThrow
   */
  export type regionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter, which regions to fetch.
     */
    where: regionsWhereUniqueInput
  }

  /**
   * regions findFirst
   */
  export type regionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter, which regions to fetch.
     */
    where?: regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     */
    orderBy?: regionsOrderByWithRelationInput | regionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for regions.
     */
    cursor?: regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of regions.
     */
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * regions findFirstOrThrow
   */
  export type regionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter, which regions to fetch.
     */
    where?: regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     */
    orderBy?: regionsOrderByWithRelationInput | regionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for regions.
     */
    cursor?: regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of regions.
     */
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * regions findMany
   */
  export type regionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter, which regions to fetch.
     */
    where?: regionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of regions to fetch.
     */
    orderBy?: regionsOrderByWithRelationInput | regionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing regions.
     */
    cursor?: regionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of regions.
     */
    distinct?: RegionsScalarFieldEnum | RegionsScalarFieldEnum[]
  }

  /**
   * regions create
   */
  export type regionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * The data needed to create a regions.
     */
    data: XOR<regionsCreateInput, regionsUncheckedCreateInput>
  }

  /**
   * regions createMany
   */
  export type regionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many regions.
     */
    data: regionsCreateManyInput | regionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * regions createManyAndReturn
   */
  export type regionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * The data used to create many regions.
     */
    data: regionsCreateManyInput | regionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * regions update
   */
  export type regionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * The data needed to update a regions.
     */
    data: XOR<regionsUpdateInput, regionsUncheckedUpdateInput>
    /**
     * Choose, which regions to update.
     */
    where: regionsWhereUniqueInput
  }

  /**
   * regions updateMany
   */
  export type regionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update regions.
     */
    data: XOR<regionsUpdateManyMutationInput, regionsUncheckedUpdateManyInput>
    /**
     * Filter which regions to update
     */
    where?: regionsWhereInput
    /**
     * Limit how many regions to update.
     */
    limit?: number
  }

  /**
   * regions updateManyAndReturn
   */
  export type regionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * The data used to update regions.
     */
    data: XOR<regionsUpdateManyMutationInput, regionsUncheckedUpdateManyInput>
    /**
     * Filter which regions to update
     */
    where?: regionsWhereInput
    /**
     * Limit how many regions to update.
     */
    limit?: number
  }

  /**
   * regions upsert
   */
  export type regionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * The filter to search for the regions to update in case it exists.
     */
    where: regionsWhereUniqueInput
    /**
     * In case the regions found by the `where` argument doesn't exist, create a new regions with this data.
     */
    create: XOR<regionsCreateInput, regionsUncheckedCreateInput>
    /**
     * In case the regions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<regionsUpdateInput, regionsUncheckedUpdateInput>
  }

  /**
   * regions delete
   */
  export type regionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
    /**
     * Filter which regions to delete.
     */
    where: regionsWhereUniqueInput
  }

  /**
   * regions deleteMany
   */
  export type regionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which regions to delete
     */
    where?: regionsWhereInput
    /**
     * Limit how many regions to delete.
     */
    limit?: number
  }

  /**
   * regions.adresses
   */
  export type regions$adressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adresses
     */
    select?: adressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the adresses
     */
    omit?: adressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: adressesInclude<ExtArgs> | null
    where?: adressesWhereInput
    orderBy?: adressesOrderByWithRelationInput | adressesOrderByWithRelationInput[]
    cursor?: adressesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdressesScalarFieldEnum | AdressesScalarFieldEnum[]
  }

  /**
   * regions.commandes
   */
  export type regions$commandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commande
     */
    select?: CommandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commande
     */
    omit?: CommandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommandeInclude<ExtArgs> | null
    where?: CommandeWhereInput
    orderBy?: CommandeOrderByWithRelationInput | CommandeOrderByWithRelationInput[]
    cursor?: CommandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommandeScalarFieldEnum | CommandeScalarFieldEnum[]
  }

  /**
   * regions.gies
   */
  export type regions$giesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GIE
     */
    select?: GIESelect<ExtArgs> | null
    /**
     * Omit specific fields from the GIE
     */
    omit?: GIEOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GIEInclude<ExtArgs> | null
    where?: GIEWhereInput
    orderBy?: GIEOrderByWithRelationInput | GIEOrderByWithRelationInput[]
    cursor?: GIEWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GIEScalarFieldEnum | GIEScalarFieldEnum[]
  }

  /**
   * regions.livreurs
   */
  export type regions$livreursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livreurs
     */
    select?: livreursSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livreurs
     */
    omit?: livreursOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livreursInclude<ExtArgs> | null
    where?: livreursWhereInput
    orderBy?: livreursOrderByWithRelationInput | livreursOrderByWithRelationInput[]
    cursor?: livreursWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivreursScalarFieldEnum | LivreursScalarFieldEnum[]
  }

  /**
   * regions without action
   */
  export type regionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the regions
     */
    select?: regionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the regions
     */
    omit?: regionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: regionsInclude<ExtArgs> | null
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


  export const AdministrateurScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nom: 'nom',
    prenom: 'prenom',
    telephone: 'telephone',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdministrateurScalarFieldEnum = (typeof AdministrateurScalarFieldEnum)[keyof typeof AdministrateurScalarFieldEnum]


  export const AvisScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    nom: 'nom',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvisScalarFieldEnum = (typeof AvisScalarFieldEnum)[keyof typeof AvisScalarFieldEnum]


  export const AvisProduitScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    produitId: 'produitId',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvisProduitScalarFieldEnum = (typeof AvisProduitScalarFieldEnum)[keyof typeof AvisProduitScalarFieldEnum]


  export const GIEScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description',
    adresse: 'adresse',
    telephone: 'telephone',
    email: 'email',
    password: 'password',
    logo: 'logo',
    url: 'url',
    membre: 'membre',
    Annee: 'Annee',
    specialite: 'specialite',
    statut: 'statut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    administrateurId: 'administrateurId',
    regionId: 'regionId'
  };

  export type GIEScalarFieldEnum = (typeof GIEScalarFieldEnum)[keyof typeof GIEScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nom: 'nom',
    prenom: 'prenom',
    telephone: 'telephone',
    adresse: 'adresse',
    statut: 'statut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    administrateurId: 'administrateurId'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const CategorieScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description',
    conservation: 'conservation',
    couleur: 'couleur',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    image: 'image'
  };

  export type CategorieScalarFieldEnum = (typeof CategorieScalarFieldEnum)[keyof typeof CategorieScalarFieldEnum]


  export const ProduitScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    quantite: 'quantite',
    description: 'description',
    prix: 'prix',
    stock: 'stock',
    image: 'image',
    statut: 'statut',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    gieId: 'gieId',
    categorieId: 'categorieId'
  };

  export type ProduitScalarFieldEnum = (typeof ProduitScalarFieldEnum)[keyof typeof ProduitScalarFieldEnum]


  export const CommandeScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    montant: 'montant',
    statut: 'statut',
    dateCommande: 'dateCommande',
    dateLivraison: 'dateLivraison',
    adresseLivraison: 'adresseLivraison',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    clientId: 'clientId',
    fraisLivraison: 'fraisLivraison',
    regionLivraisonId: 'regionLivraisonId',
    livreurId: 'livreurId'
  };

  export type CommandeScalarFieldEnum = (typeof CommandeScalarFieldEnum)[keyof typeof CommandeScalarFieldEnum]


  export const PaiementScalarFieldEnum: {
    id: 'id',
    montant: 'montant',
    methode: 'methode',
    statut: 'statut',
    reference: 'reference',
    datePaiement: 'datePaiement',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    commandeId: 'commandeId',
    fraisLivraison: 'fraisLivraison'
  };

  export type PaiementScalarFieldEnum = (typeof PaiementScalarFieldEnum)[keyof typeof PaiementScalarFieldEnum]


  export const PanierProduitScalarFieldEnum: {
    id: 'id',
    quantite: 'quantite',
    prixUnitaire: 'prixUnitaire',
    createdAt: 'createdAt',
    commandeId: 'commandeId',
    produitId: 'produitId',
    statutGIE: 'statutGIE',
    dateConfirmation: 'dateConfirmation',
    updatedAt: 'updatedAt'
  };

  export type PanierProduitScalarFieldEnum = (typeof PanierProduitScalarFieldEnum)[keyof typeof PanierProduitScalarFieldEnum]


  export const AdressesScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description',
    codePostal: 'codePostal',
    fraisLivraison: 'fraisLivraison',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    regionId: 'regionId'
  };

  export type AdressesScalarFieldEnum = (typeof AdressesScalarFieldEnum)[keyof typeof AdressesScalarFieldEnum]


  export const LivreursScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    prenom: 'prenom',
    email: 'email',
    telephone: 'telephone',
    password: 'password',
    statut: 'statut',
    regionId: 'regionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LivreursScalarFieldEnum = (typeof LivreursScalarFieldEnum)[keyof typeof LivreursScalarFieldEnum]


  export const RegionsScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    description: 'description',
    fraisLivraisonInterne: 'fraisLivraisonInterne',
    fraisLivraisonExterne: 'fraisLivraisonExterne',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegionsScalarFieldEnum = (typeof RegionsScalarFieldEnum)[keyof typeof RegionsScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StatutGIE'
   */
  export type EnumStatutGIEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutGIE'>
    


  /**
   * Reference to a field of type 'StatutGIE[]'
   */
  export type ListEnumStatutGIEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutGIE[]'>
    


  /**
   * Reference to a field of type 'StatutClient'
   */
  export type EnumStatutClientFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutClient'>
    


  /**
   * Reference to a field of type 'StatutClient[]'
   */
  export type ListEnumStatutClientFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutClient[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'StatutProduit'
   */
  export type EnumStatutProduitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutProduit'>
    


  /**
   * Reference to a field of type 'StatutProduit[]'
   */
  export type ListEnumStatutProduitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutProduit[]'>
    


  /**
   * Reference to a field of type 'StatutCommande'
   */
  export type EnumStatutCommandeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutCommande'>
    


  /**
   * Reference to a field of type 'StatutCommande[]'
   */
  export type ListEnumStatutCommandeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutCommande[]'>
    


  /**
   * Reference to a field of type 'MethodePaiement'
   */
  export type EnumMethodePaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MethodePaiement'>
    


  /**
   * Reference to a field of type 'MethodePaiement[]'
   */
  export type ListEnumMethodePaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MethodePaiement[]'>
    


  /**
   * Reference to a field of type 'StatutPaiement'
   */
  export type EnumStatutPaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutPaiement'>
    


  /**
   * Reference to a field of type 'StatutPaiement[]'
   */
  export type ListEnumStatutPaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutPaiement[]'>
    


  /**
   * Reference to a field of type 'StatutGIEProduit'
   */
  export type EnumStatutGIEProduitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutGIEProduit'>
    


  /**
   * Reference to a field of type 'StatutGIEProduit[]'
   */
  export type ListEnumStatutGIEProduitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutGIEProduit[]'>
    


  /**
   * Reference to a field of type 'StatutLivreur'
   */
  export type EnumStatutLivreurFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutLivreur'>
    


  /**
   * Reference to a field of type 'StatutLivreur[]'
   */
  export type ListEnumStatutLivreurFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutLivreur[]'>
    
  /**
   * Deep Input Types
   */


  export type AdministrateurWhereInput = {
    AND?: AdministrateurWhereInput | AdministrateurWhereInput[]
    OR?: AdministrateurWhereInput[]
    NOT?: AdministrateurWhereInput | AdministrateurWhereInput[]
    id?: StringFilter<"Administrateur"> | string
    email?: StringFilter<"Administrateur"> | string
    password?: StringFilter<"Administrateur"> | string
    nom?: StringFilter<"Administrateur"> | string
    prenom?: StringFilter<"Administrateur"> | string
    telephone?: StringNullableFilter<"Administrateur"> | string | null
    role?: EnumRoleFilter<"Administrateur"> | $Enums.Role
    createdAt?: DateTimeFilter<"Administrateur"> | Date | string
    updatedAt?: DateTimeFilter<"Administrateur"> | Date | string
    clients?: ClientListRelationFilter
    gies?: GIEListRelationFilter
  }

  export type AdministrateurOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clients?: ClientOrderByRelationAggregateInput
    gies?: GIEOrderByRelationAggregateInput
  }

  export type AdministrateurWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdministrateurWhereInput | AdministrateurWhereInput[]
    OR?: AdministrateurWhereInput[]
    NOT?: AdministrateurWhereInput | AdministrateurWhereInput[]
    password?: StringFilter<"Administrateur"> | string
    nom?: StringFilter<"Administrateur"> | string
    prenom?: StringFilter<"Administrateur"> | string
    telephone?: StringNullableFilter<"Administrateur"> | string | null
    role?: EnumRoleFilter<"Administrateur"> | $Enums.Role
    createdAt?: DateTimeFilter<"Administrateur"> | Date | string
    updatedAt?: DateTimeFilter<"Administrateur"> | Date | string
    clients?: ClientListRelationFilter
    gies?: GIEListRelationFilter
  }, "id" | "email">

  export type AdministrateurOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdministrateurCountOrderByAggregateInput
    _max?: AdministrateurMaxOrderByAggregateInput
    _min?: AdministrateurMinOrderByAggregateInput
  }

  export type AdministrateurScalarWhereWithAggregatesInput = {
    AND?: AdministrateurScalarWhereWithAggregatesInput | AdministrateurScalarWhereWithAggregatesInput[]
    OR?: AdministrateurScalarWhereWithAggregatesInput[]
    NOT?: AdministrateurScalarWhereWithAggregatesInput | AdministrateurScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Administrateur"> | string
    email?: StringWithAggregatesFilter<"Administrateur"> | string
    password?: StringWithAggregatesFilter<"Administrateur"> | string
    nom?: StringWithAggregatesFilter<"Administrateur"> | string
    prenom?: StringWithAggregatesFilter<"Administrateur"> | string
    telephone?: StringNullableWithAggregatesFilter<"Administrateur"> | string | null
    role?: EnumRoleWithAggregatesFilter<"Administrateur"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Administrateur"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Administrateur"> | Date | string
  }

  export type AvisWhereInput = {
    AND?: AvisWhereInput | AvisWhereInput[]
    OR?: AvisWhereInput[]
    NOT?: AvisWhereInput | AvisWhereInput[]
    id?: StringFilter<"Avis"> | string
    clientId?: StringFilter<"Avis"> | string
    nom?: StringNullableFilter<"Avis"> | string | null
    rating?: IntFilter<"Avis"> | number
    comment?: StringNullableFilter<"Avis"> | string | null
    createdAt?: DateTimeFilter<"Avis"> | Date | string
    updatedAt?: DateTimeFilter<"Avis"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type AvisOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    nom?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type AvisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvisWhereInput | AvisWhereInput[]
    OR?: AvisWhereInput[]
    NOT?: AvisWhereInput | AvisWhereInput[]
    clientId?: StringFilter<"Avis"> | string
    nom?: StringNullableFilter<"Avis"> | string | null
    rating?: IntFilter<"Avis"> | number
    comment?: StringNullableFilter<"Avis"> | string | null
    createdAt?: DateTimeFilter<"Avis"> | Date | string
    updatedAt?: DateTimeFilter<"Avis"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id">

  export type AvisOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    nom?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AvisCountOrderByAggregateInput
    _avg?: AvisAvgOrderByAggregateInput
    _max?: AvisMaxOrderByAggregateInput
    _min?: AvisMinOrderByAggregateInput
    _sum?: AvisSumOrderByAggregateInput
  }

  export type AvisScalarWhereWithAggregatesInput = {
    AND?: AvisScalarWhereWithAggregatesInput | AvisScalarWhereWithAggregatesInput[]
    OR?: AvisScalarWhereWithAggregatesInput[]
    NOT?: AvisScalarWhereWithAggregatesInput | AvisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Avis"> | string
    clientId?: StringWithAggregatesFilter<"Avis"> | string
    nom?: StringNullableWithAggregatesFilter<"Avis"> | string | null
    rating?: IntWithAggregatesFilter<"Avis"> | number
    comment?: StringNullableWithAggregatesFilter<"Avis"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Avis"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Avis"> | Date | string
  }

  export type AvisProduitWhereInput = {
    AND?: AvisProduitWhereInput | AvisProduitWhereInput[]
    OR?: AvisProduitWhereInput[]
    NOT?: AvisProduitWhereInput | AvisProduitWhereInput[]
    id?: StringFilter<"AvisProduit"> | string
    clientId?: StringFilter<"AvisProduit"> | string
    produitId?: StringFilter<"AvisProduit"> | string
    rating?: IntFilter<"AvisProduit"> | number
    createdAt?: DateTimeFilter<"AvisProduit"> | Date | string
    updatedAt?: DateTimeFilter<"AvisProduit"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    produit?: XOR<ProduitScalarRelationFilter, ProduitWhereInput>
  }

  export type AvisProduitOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    produitId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    produit?: ProduitOrderByWithRelationInput
  }

  export type AvisProduitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvisProduitWhereInput | AvisProduitWhereInput[]
    OR?: AvisProduitWhereInput[]
    NOT?: AvisProduitWhereInput | AvisProduitWhereInput[]
    clientId?: StringFilter<"AvisProduit"> | string
    produitId?: StringFilter<"AvisProduit"> | string
    rating?: IntFilter<"AvisProduit"> | number
    createdAt?: DateTimeFilter<"AvisProduit"> | Date | string
    updatedAt?: DateTimeFilter<"AvisProduit"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    produit?: XOR<ProduitScalarRelationFilter, ProduitWhereInput>
  }, "id">

  export type AvisProduitOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    produitId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AvisProduitCountOrderByAggregateInput
    _avg?: AvisProduitAvgOrderByAggregateInput
    _max?: AvisProduitMaxOrderByAggregateInput
    _min?: AvisProduitMinOrderByAggregateInput
    _sum?: AvisProduitSumOrderByAggregateInput
  }

  export type AvisProduitScalarWhereWithAggregatesInput = {
    AND?: AvisProduitScalarWhereWithAggregatesInput | AvisProduitScalarWhereWithAggregatesInput[]
    OR?: AvisProduitScalarWhereWithAggregatesInput[]
    NOT?: AvisProduitScalarWhereWithAggregatesInput | AvisProduitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvisProduit"> | string
    clientId?: StringWithAggregatesFilter<"AvisProduit"> | string
    produitId?: StringWithAggregatesFilter<"AvisProduit"> | string
    rating?: IntWithAggregatesFilter<"AvisProduit"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AvisProduit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AvisProduit"> | Date | string
  }

  export type GIEWhereInput = {
    AND?: GIEWhereInput | GIEWhereInput[]
    OR?: GIEWhereInput[]
    NOT?: GIEWhereInput | GIEWhereInput[]
    id?: StringFilter<"GIE"> | string
    nom?: StringFilter<"GIE"> | string
    description?: StringNullableFilter<"GIE"> | string | null
    adresse?: StringNullableFilter<"GIE"> | string | null
    telephone?: StringNullableFilter<"GIE"> | string | null
    email?: StringNullableFilter<"GIE"> | string | null
    password?: StringFilter<"GIE"> | string
    logo?: StringNullableFilter<"GIE"> | string | null
    url?: StringNullableFilter<"GIE"> | string | null
    membre?: IntNullableFilter<"GIE"> | number | null
    Annee?: DateTimeNullableFilter<"GIE"> | Date | string | null
    specialite?: IntNullableFilter<"GIE"> | number | null
    statut?: EnumStatutGIEFilter<"GIE"> | $Enums.StatutGIE
    createdAt?: DateTimeFilter<"GIE"> | Date | string
    updatedAt?: DateTimeFilter<"GIE"> | Date | string
    administrateurId?: StringFilter<"GIE"> | string
    regionId?: StringNullableFilter<"GIE"> | string | null
    administrateur?: XOR<AdministrateurScalarRelationFilter, AdministrateurWhereInput>
    regions?: XOR<RegionsNullableScalarRelationFilter, regionsWhereInput> | null
    produits?: ProduitListRelationFilter
  }

  export type GIEOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    logo?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    membre?: SortOrderInput | SortOrder
    Annee?: SortOrderInput | SortOrder
    specialite?: SortOrderInput | SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    administrateurId?: SortOrder
    regionId?: SortOrderInput | SortOrder
    administrateur?: AdministrateurOrderByWithRelationInput
    regions?: regionsOrderByWithRelationInput
    produits?: ProduitOrderByRelationAggregateInput
  }

  export type GIEWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    telephone?: string
    AND?: GIEWhereInput | GIEWhereInput[]
    OR?: GIEWhereInput[]
    NOT?: GIEWhereInput | GIEWhereInput[]
    nom?: StringFilter<"GIE"> | string
    description?: StringNullableFilter<"GIE"> | string | null
    adresse?: StringNullableFilter<"GIE"> | string | null
    email?: StringNullableFilter<"GIE"> | string | null
    password?: StringFilter<"GIE"> | string
    logo?: StringNullableFilter<"GIE"> | string | null
    url?: StringNullableFilter<"GIE"> | string | null
    membre?: IntNullableFilter<"GIE"> | number | null
    Annee?: DateTimeNullableFilter<"GIE"> | Date | string | null
    specialite?: IntNullableFilter<"GIE"> | number | null
    statut?: EnumStatutGIEFilter<"GIE"> | $Enums.StatutGIE
    createdAt?: DateTimeFilter<"GIE"> | Date | string
    updatedAt?: DateTimeFilter<"GIE"> | Date | string
    administrateurId?: StringFilter<"GIE"> | string
    regionId?: StringNullableFilter<"GIE"> | string | null
    administrateur?: XOR<AdministrateurScalarRelationFilter, AdministrateurWhereInput>
    regions?: XOR<RegionsNullableScalarRelationFilter, regionsWhereInput> | null
    produits?: ProduitListRelationFilter
  }, "id" | "telephone">

  export type GIEOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    adresse?: SortOrderInput | SortOrder
    telephone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    logo?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    membre?: SortOrderInput | SortOrder
    Annee?: SortOrderInput | SortOrder
    specialite?: SortOrderInput | SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    administrateurId?: SortOrder
    regionId?: SortOrderInput | SortOrder
    _count?: GIECountOrderByAggregateInput
    _avg?: GIEAvgOrderByAggregateInput
    _max?: GIEMaxOrderByAggregateInput
    _min?: GIEMinOrderByAggregateInput
    _sum?: GIESumOrderByAggregateInput
  }

  export type GIEScalarWhereWithAggregatesInput = {
    AND?: GIEScalarWhereWithAggregatesInput | GIEScalarWhereWithAggregatesInput[]
    OR?: GIEScalarWhereWithAggregatesInput[]
    NOT?: GIEScalarWhereWithAggregatesInput | GIEScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GIE"> | string
    nom?: StringWithAggregatesFilter<"GIE"> | string
    description?: StringNullableWithAggregatesFilter<"GIE"> | string | null
    adresse?: StringNullableWithAggregatesFilter<"GIE"> | string | null
    telephone?: StringNullableWithAggregatesFilter<"GIE"> | string | null
    email?: StringNullableWithAggregatesFilter<"GIE"> | string | null
    password?: StringWithAggregatesFilter<"GIE"> | string
    logo?: StringNullableWithAggregatesFilter<"GIE"> | string | null
    url?: StringNullableWithAggregatesFilter<"GIE"> | string | null
    membre?: IntNullableWithAggregatesFilter<"GIE"> | number | null
    Annee?: DateTimeNullableWithAggregatesFilter<"GIE"> | Date | string | null
    specialite?: IntNullableWithAggregatesFilter<"GIE"> | number | null
    statut?: EnumStatutGIEWithAggregatesFilter<"GIE"> | $Enums.StatutGIE
    createdAt?: DateTimeWithAggregatesFilter<"GIE"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GIE"> | Date | string
    administrateurId?: StringWithAggregatesFilter<"GIE"> | string
    regionId?: StringNullableWithAggregatesFilter<"GIE"> | string | null
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    email?: StringNullableFilter<"Client"> | string | null
    password?: StringFilter<"Client"> | string
    nom?: StringFilter<"Client"> | string
    prenom?: StringFilter<"Client"> | string
    telephone?: StringFilter<"Client"> | string
    adresse?: StringNullableFilter<"Client"> | string | null
    statut?: EnumStatutClientFilter<"Client"> | $Enums.StatutClient
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    administrateurId?: StringFilter<"Client"> | string
    administrateur?: XOR<AdministrateurScalarRelationFilter, AdministrateurWhereInput>
    commandes?: CommandeListRelationFilter
    avis?: AvisListRelationFilter
    avisProduit?: AvisProduitListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrderInput | SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    administrateurId?: SortOrder
    administrateur?: AdministrateurOrderByWithRelationInput
    commandes?: CommandeOrderByRelationAggregateInput
    avis?: AvisOrderByRelationAggregateInput
    avisProduit?: AvisProduitOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    password?: StringFilter<"Client"> | string
    nom?: StringFilter<"Client"> | string
    prenom?: StringFilter<"Client"> | string
    telephone?: StringFilter<"Client"> | string
    adresse?: StringNullableFilter<"Client"> | string | null
    statut?: EnumStatutClientFilter<"Client"> | $Enums.StatutClient
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    administrateurId?: StringFilter<"Client"> | string
    administrateur?: XOR<AdministrateurScalarRelationFilter, AdministrateurWhereInput>
    commandes?: CommandeListRelationFilter
    avis?: AvisListRelationFilter
    avisProduit?: AvisProduitListRelationFilter
  }, "id" | "email">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrderInput | SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    administrateurId?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    email?: StringNullableWithAggregatesFilter<"Client"> | string | null
    password?: StringWithAggregatesFilter<"Client"> | string
    nom?: StringWithAggregatesFilter<"Client"> | string
    prenom?: StringWithAggregatesFilter<"Client"> | string
    telephone?: StringWithAggregatesFilter<"Client"> | string
    adresse?: StringNullableWithAggregatesFilter<"Client"> | string | null
    statut?: EnumStatutClientWithAggregatesFilter<"Client"> | $Enums.StatutClient
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    administrateurId?: StringWithAggregatesFilter<"Client"> | string
  }

  export type CategorieWhereInput = {
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    id?: StringFilter<"Categorie"> | string
    nom?: StringFilter<"Categorie"> | string
    description?: StringNullableFilter<"Categorie"> | string | null
    conservation?: StringNullableFilter<"Categorie"> | string | null
    couleur?: StringNullableFilter<"Categorie"> | string | null
    createdAt?: DateTimeFilter<"Categorie"> | Date | string
    updatedAt?: DateTimeFilter<"Categorie"> | Date | string
    image?: StringNullableFilter<"Categorie"> | string | null
    produits?: ProduitListRelationFilter
  }

  export type CategorieOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    conservation?: SortOrderInput | SortOrder
    couleur?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrderInput | SortOrder
    produits?: ProduitOrderByRelationAggregateInput
  }

  export type CategorieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nom?: string
    AND?: CategorieWhereInput | CategorieWhereInput[]
    OR?: CategorieWhereInput[]
    NOT?: CategorieWhereInput | CategorieWhereInput[]
    description?: StringNullableFilter<"Categorie"> | string | null
    conservation?: StringNullableFilter<"Categorie"> | string | null
    couleur?: StringNullableFilter<"Categorie"> | string | null
    createdAt?: DateTimeFilter<"Categorie"> | Date | string
    updatedAt?: DateTimeFilter<"Categorie"> | Date | string
    image?: StringNullableFilter<"Categorie"> | string | null
    produits?: ProduitListRelationFilter
  }, "id" | "nom">

  export type CategorieOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    conservation?: SortOrderInput | SortOrder
    couleur?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: CategorieCountOrderByAggregateInput
    _max?: CategorieMaxOrderByAggregateInput
    _min?: CategorieMinOrderByAggregateInput
  }

  export type CategorieScalarWhereWithAggregatesInput = {
    AND?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    OR?: CategorieScalarWhereWithAggregatesInput[]
    NOT?: CategorieScalarWhereWithAggregatesInput | CategorieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categorie"> | string
    nom?: StringWithAggregatesFilter<"Categorie"> | string
    description?: StringNullableWithAggregatesFilter<"Categorie"> | string | null
    conservation?: StringNullableWithAggregatesFilter<"Categorie"> | string | null
    couleur?: StringNullableWithAggregatesFilter<"Categorie"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Categorie"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Categorie"> | Date | string
    image?: StringNullableWithAggregatesFilter<"Categorie"> | string | null
  }

  export type ProduitWhereInput = {
    AND?: ProduitWhereInput | ProduitWhereInput[]
    OR?: ProduitWhereInput[]
    NOT?: ProduitWhereInput | ProduitWhereInput[]
    id?: StringFilter<"Produit"> | string
    nom?: StringFilter<"Produit"> | string
    quantite?: StringFilter<"Produit"> | string
    description?: StringNullableFilter<"Produit"> | string | null
    prix?: FloatFilter<"Produit"> | number
    stock?: IntFilter<"Produit"> | number
    image?: StringNullableFilter<"Produit"> | string | null
    statut?: EnumStatutProduitFilter<"Produit"> | $Enums.StatutProduit
    createdAt?: DateTimeFilter<"Produit"> | Date | string
    updatedAt?: DateTimeFilter<"Produit"> | Date | string
    gieId?: StringFilter<"Produit"> | string
    categorieId?: StringNullableFilter<"Produit"> | string | null
    panierProduits?: PanierProduitListRelationFilter
    categorie?: XOR<CategorieNullableScalarRelationFilter, CategorieWhereInput> | null
    gie?: XOR<GIEScalarRelationFilter, GIEWhereInput>
    avisProduit?: AvisProduitListRelationFilter
  }

  export type ProduitOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
    description?: SortOrderInput | SortOrder
    prix?: SortOrder
    stock?: SortOrder
    image?: SortOrderInput | SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gieId?: SortOrder
    categorieId?: SortOrderInput | SortOrder
    panierProduits?: PanierProduitOrderByRelationAggregateInput
    categorie?: CategorieOrderByWithRelationInput
    gie?: GIEOrderByWithRelationInput
    avisProduit?: AvisProduitOrderByRelationAggregateInput
  }

  export type ProduitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProduitWhereInput | ProduitWhereInput[]
    OR?: ProduitWhereInput[]
    NOT?: ProduitWhereInput | ProduitWhereInput[]
    nom?: StringFilter<"Produit"> | string
    quantite?: StringFilter<"Produit"> | string
    description?: StringNullableFilter<"Produit"> | string | null
    prix?: FloatFilter<"Produit"> | number
    stock?: IntFilter<"Produit"> | number
    image?: StringNullableFilter<"Produit"> | string | null
    statut?: EnumStatutProduitFilter<"Produit"> | $Enums.StatutProduit
    createdAt?: DateTimeFilter<"Produit"> | Date | string
    updatedAt?: DateTimeFilter<"Produit"> | Date | string
    gieId?: StringFilter<"Produit"> | string
    categorieId?: StringNullableFilter<"Produit"> | string | null
    panierProduits?: PanierProduitListRelationFilter
    categorie?: XOR<CategorieNullableScalarRelationFilter, CategorieWhereInput> | null
    gie?: XOR<GIEScalarRelationFilter, GIEWhereInput>
    avisProduit?: AvisProduitListRelationFilter
  }, "id">

  export type ProduitOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
    description?: SortOrderInput | SortOrder
    prix?: SortOrder
    stock?: SortOrder
    image?: SortOrderInput | SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gieId?: SortOrder
    categorieId?: SortOrderInput | SortOrder
    _count?: ProduitCountOrderByAggregateInput
    _avg?: ProduitAvgOrderByAggregateInput
    _max?: ProduitMaxOrderByAggregateInput
    _min?: ProduitMinOrderByAggregateInput
    _sum?: ProduitSumOrderByAggregateInput
  }

  export type ProduitScalarWhereWithAggregatesInput = {
    AND?: ProduitScalarWhereWithAggregatesInput | ProduitScalarWhereWithAggregatesInput[]
    OR?: ProduitScalarWhereWithAggregatesInput[]
    NOT?: ProduitScalarWhereWithAggregatesInput | ProduitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Produit"> | string
    nom?: StringWithAggregatesFilter<"Produit"> | string
    quantite?: StringWithAggregatesFilter<"Produit"> | string
    description?: StringNullableWithAggregatesFilter<"Produit"> | string | null
    prix?: FloatWithAggregatesFilter<"Produit"> | number
    stock?: IntWithAggregatesFilter<"Produit"> | number
    image?: StringNullableWithAggregatesFilter<"Produit"> | string | null
    statut?: EnumStatutProduitWithAggregatesFilter<"Produit"> | $Enums.StatutProduit
    createdAt?: DateTimeWithAggregatesFilter<"Produit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Produit"> | Date | string
    gieId?: StringWithAggregatesFilter<"Produit"> | string
    categorieId?: StringNullableWithAggregatesFilter<"Produit"> | string | null
  }

  export type CommandeWhereInput = {
    AND?: CommandeWhereInput | CommandeWhereInput[]
    OR?: CommandeWhereInput[]
    NOT?: CommandeWhereInput | CommandeWhereInput[]
    id?: StringFilter<"Commande"> | string
    numero?: StringFilter<"Commande"> | string
    montant?: FloatFilter<"Commande"> | number
    statut?: EnumStatutCommandeFilter<"Commande"> | $Enums.StatutCommande
    dateCommande?: DateTimeFilter<"Commande"> | Date | string
    dateLivraison?: DateTimeNullableFilter<"Commande"> | Date | string | null
    adresseLivraison?: StringNullableFilter<"Commande"> | string | null
    createdAt?: DateTimeFilter<"Commande"> | Date | string
    updatedAt?: DateTimeFilter<"Commande"> | Date | string
    clientId?: StringFilter<"Commande"> | string
    fraisLivraison?: FloatFilter<"Commande"> | number
    regionLivraisonId?: StringNullableFilter<"Commande"> | string | null
    livreurId?: StringNullableFilter<"Commande"> | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    livreurs?: XOR<LivreursNullableScalarRelationFilter, livreursWhereInput> | null
    regions?: XOR<RegionsNullableScalarRelationFilter, regionsWhereInput> | null
    paiement?: XOR<PaiementNullableScalarRelationFilter, PaiementWhereInput> | null
    panierProduits?: PanierProduitListRelationFilter
  }

  export type CommandeOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
    dateCommande?: SortOrder
    dateLivraison?: SortOrderInput | SortOrder
    adresseLivraison?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    fraisLivraison?: SortOrder
    regionLivraisonId?: SortOrderInput | SortOrder
    livreurId?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
    livreurs?: livreursOrderByWithRelationInput
    regions?: regionsOrderByWithRelationInput
    paiement?: PaiementOrderByWithRelationInput
    panierProduits?: PanierProduitOrderByRelationAggregateInput
  }

  export type CommandeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    numero?: string
    AND?: CommandeWhereInput | CommandeWhereInput[]
    OR?: CommandeWhereInput[]
    NOT?: CommandeWhereInput | CommandeWhereInput[]
    montant?: FloatFilter<"Commande"> | number
    statut?: EnumStatutCommandeFilter<"Commande"> | $Enums.StatutCommande
    dateCommande?: DateTimeFilter<"Commande"> | Date | string
    dateLivraison?: DateTimeNullableFilter<"Commande"> | Date | string | null
    adresseLivraison?: StringNullableFilter<"Commande"> | string | null
    createdAt?: DateTimeFilter<"Commande"> | Date | string
    updatedAt?: DateTimeFilter<"Commande"> | Date | string
    clientId?: StringFilter<"Commande"> | string
    fraisLivraison?: FloatFilter<"Commande"> | number
    regionLivraisonId?: StringNullableFilter<"Commande"> | string | null
    livreurId?: StringNullableFilter<"Commande"> | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    livreurs?: XOR<LivreursNullableScalarRelationFilter, livreursWhereInput> | null
    regions?: XOR<RegionsNullableScalarRelationFilter, regionsWhereInput> | null
    paiement?: XOR<PaiementNullableScalarRelationFilter, PaiementWhereInput> | null
    panierProduits?: PanierProduitListRelationFilter
  }, "id" | "numero">

  export type CommandeOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
    dateCommande?: SortOrder
    dateLivraison?: SortOrderInput | SortOrder
    adresseLivraison?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    fraisLivraison?: SortOrder
    regionLivraisonId?: SortOrderInput | SortOrder
    livreurId?: SortOrderInput | SortOrder
    _count?: CommandeCountOrderByAggregateInput
    _avg?: CommandeAvgOrderByAggregateInput
    _max?: CommandeMaxOrderByAggregateInput
    _min?: CommandeMinOrderByAggregateInput
    _sum?: CommandeSumOrderByAggregateInput
  }

  export type CommandeScalarWhereWithAggregatesInput = {
    AND?: CommandeScalarWhereWithAggregatesInput | CommandeScalarWhereWithAggregatesInput[]
    OR?: CommandeScalarWhereWithAggregatesInput[]
    NOT?: CommandeScalarWhereWithAggregatesInput | CommandeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Commande"> | string
    numero?: StringWithAggregatesFilter<"Commande"> | string
    montant?: FloatWithAggregatesFilter<"Commande"> | number
    statut?: EnumStatutCommandeWithAggregatesFilter<"Commande"> | $Enums.StatutCommande
    dateCommande?: DateTimeWithAggregatesFilter<"Commande"> | Date | string
    dateLivraison?: DateTimeNullableWithAggregatesFilter<"Commande"> | Date | string | null
    adresseLivraison?: StringNullableWithAggregatesFilter<"Commande"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Commande"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Commande"> | Date | string
    clientId?: StringWithAggregatesFilter<"Commande"> | string
    fraisLivraison?: FloatWithAggregatesFilter<"Commande"> | number
    regionLivraisonId?: StringNullableWithAggregatesFilter<"Commande"> | string | null
    livreurId?: StringNullableWithAggregatesFilter<"Commande"> | string | null
  }

  export type PaiementWhereInput = {
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    id?: StringFilter<"Paiement"> | string
    montant?: FloatFilter<"Paiement"> | number
    methode?: EnumMethodePaiementFilter<"Paiement"> | $Enums.MethodePaiement
    statut?: EnumStatutPaiementFilter<"Paiement"> | $Enums.StatutPaiement
    reference?: StringNullableFilter<"Paiement"> | string | null
    datePaiement?: DateTimeFilter<"Paiement"> | Date | string
    createdAt?: DateTimeFilter<"Paiement"> | Date | string
    updatedAt?: DateTimeFilter<"Paiement"> | Date | string
    commandeId?: StringFilter<"Paiement"> | string
    fraisLivraison?: FloatFilter<"Paiement"> | number
    commande?: XOR<CommandeScalarRelationFilter, CommandeWhereInput>
  }

  export type PaiementOrderByWithRelationInput = {
    id?: SortOrder
    montant?: SortOrder
    methode?: SortOrder
    statut?: SortOrder
    reference?: SortOrderInput | SortOrder
    datePaiement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commandeId?: SortOrder
    fraisLivraison?: SortOrder
    commande?: CommandeOrderByWithRelationInput
  }

  export type PaiementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reference?: string
    commandeId?: string
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    montant?: FloatFilter<"Paiement"> | number
    methode?: EnumMethodePaiementFilter<"Paiement"> | $Enums.MethodePaiement
    statut?: EnumStatutPaiementFilter<"Paiement"> | $Enums.StatutPaiement
    datePaiement?: DateTimeFilter<"Paiement"> | Date | string
    createdAt?: DateTimeFilter<"Paiement"> | Date | string
    updatedAt?: DateTimeFilter<"Paiement"> | Date | string
    fraisLivraison?: FloatFilter<"Paiement"> | number
    commande?: XOR<CommandeScalarRelationFilter, CommandeWhereInput>
  }, "id" | "reference" | "commandeId">

  export type PaiementOrderByWithAggregationInput = {
    id?: SortOrder
    montant?: SortOrder
    methode?: SortOrder
    statut?: SortOrder
    reference?: SortOrderInput | SortOrder
    datePaiement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commandeId?: SortOrder
    fraisLivraison?: SortOrder
    _count?: PaiementCountOrderByAggregateInput
    _avg?: PaiementAvgOrderByAggregateInput
    _max?: PaiementMaxOrderByAggregateInput
    _min?: PaiementMinOrderByAggregateInput
    _sum?: PaiementSumOrderByAggregateInput
  }

  export type PaiementScalarWhereWithAggregatesInput = {
    AND?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    OR?: PaiementScalarWhereWithAggregatesInput[]
    NOT?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Paiement"> | string
    montant?: FloatWithAggregatesFilter<"Paiement"> | number
    methode?: EnumMethodePaiementWithAggregatesFilter<"Paiement"> | $Enums.MethodePaiement
    statut?: EnumStatutPaiementWithAggregatesFilter<"Paiement"> | $Enums.StatutPaiement
    reference?: StringNullableWithAggregatesFilter<"Paiement"> | string | null
    datePaiement?: DateTimeWithAggregatesFilter<"Paiement"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Paiement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Paiement"> | Date | string
    commandeId?: StringWithAggregatesFilter<"Paiement"> | string
    fraisLivraison?: FloatWithAggregatesFilter<"Paiement"> | number
  }

  export type PanierProduitWhereInput = {
    AND?: PanierProduitWhereInput | PanierProduitWhereInput[]
    OR?: PanierProduitWhereInput[]
    NOT?: PanierProduitWhereInput | PanierProduitWhereInput[]
    id?: StringFilter<"PanierProduit"> | string
    quantite?: IntFilter<"PanierProduit"> | number
    prixUnitaire?: FloatFilter<"PanierProduit"> | number
    createdAt?: DateTimeFilter<"PanierProduit"> | Date | string
    commandeId?: StringFilter<"PanierProduit"> | string
    produitId?: StringFilter<"PanierProduit"> | string
    statutGIE?: EnumStatutGIEProduitFilter<"PanierProduit"> | $Enums.StatutGIEProduit
    dateConfirmation?: DateTimeNullableFilter<"PanierProduit"> | Date | string | null
    updatedAt?: DateTimeFilter<"PanierProduit"> | Date | string
    commande?: XOR<CommandeScalarRelationFilter, CommandeWhereInput>
    produit?: XOR<ProduitScalarRelationFilter, ProduitWhereInput>
  }

  export type PanierProduitOrderByWithRelationInput = {
    id?: SortOrder
    quantite?: SortOrder
    prixUnitaire?: SortOrder
    createdAt?: SortOrder
    commandeId?: SortOrder
    produitId?: SortOrder
    statutGIE?: SortOrder
    dateConfirmation?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    commande?: CommandeOrderByWithRelationInput
    produit?: ProduitOrderByWithRelationInput
  }

  export type PanierProduitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    commandeId_produitId?: PanierProduitCommandeIdProduitIdCompoundUniqueInput
    AND?: PanierProduitWhereInput | PanierProduitWhereInput[]
    OR?: PanierProduitWhereInput[]
    NOT?: PanierProduitWhereInput | PanierProduitWhereInput[]
    quantite?: IntFilter<"PanierProduit"> | number
    prixUnitaire?: FloatFilter<"PanierProduit"> | number
    createdAt?: DateTimeFilter<"PanierProduit"> | Date | string
    commandeId?: StringFilter<"PanierProduit"> | string
    produitId?: StringFilter<"PanierProduit"> | string
    statutGIE?: EnumStatutGIEProduitFilter<"PanierProduit"> | $Enums.StatutGIEProduit
    dateConfirmation?: DateTimeNullableFilter<"PanierProduit"> | Date | string | null
    updatedAt?: DateTimeFilter<"PanierProduit"> | Date | string
    commande?: XOR<CommandeScalarRelationFilter, CommandeWhereInput>
    produit?: XOR<ProduitScalarRelationFilter, ProduitWhereInput>
  }, "id" | "commandeId_produitId">

  export type PanierProduitOrderByWithAggregationInput = {
    id?: SortOrder
    quantite?: SortOrder
    prixUnitaire?: SortOrder
    createdAt?: SortOrder
    commandeId?: SortOrder
    produitId?: SortOrder
    statutGIE?: SortOrder
    dateConfirmation?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: PanierProduitCountOrderByAggregateInput
    _avg?: PanierProduitAvgOrderByAggregateInput
    _max?: PanierProduitMaxOrderByAggregateInput
    _min?: PanierProduitMinOrderByAggregateInput
    _sum?: PanierProduitSumOrderByAggregateInput
  }

  export type PanierProduitScalarWhereWithAggregatesInput = {
    AND?: PanierProduitScalarWhereWithAggregatesInput | PanierProduitScalarWhereWithAggregatesInput[]
    OR?: PanierProduitScalarWhereWithAggregatesInput[]
    NOT?: PanierProduitScalarWhereWithAggregatesInput | PanierProduitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PanierProduit"> | string
    quantite?: IntWithAggregatesFilter<"PanierProduit"> | number
    prixUnitaire?: FloatWithAggregatesFilter<"PanierProduit"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PanierProduit"> | Date | string
    commandeId?: StringWithAggregatesFilter<"PanierProduit"> | string
    produitId?: StringWithAggregatesFilter<"PanierProduit"> | string
    statutGIE?: EnumStatutGIEProduitWithAggregatesFilter<"PanierProduit"> | $Enums.StatutGIEProduit
    dateConfirmation?: DateTimeNullableWithAggregatesFilter<"PanierProduit"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"PanierProduit"> | Date | string
  }

  export type adressesWhereInput = {
    AND?: adressesWhereInput | adressesWhereInput[]
    OR?: adressesWhereInput[]
    NOT?: adressesWhereInput | adressesWhereInput[]
    id?: StringFilter<"adresses"> | string
    nom?: StringFilter<"adresses"> | string
    description?: StringNullableFilter<"adresses"> | string | null
    codePostal?: StringNullableFilter<"adresses"> | string | null
    fraisLivraison?: FloatFilter<"adresses"> | number
    createdAt?: DateTimeFilter<"adresses"> | Date | string
    updatedAt?: DateTimeFilter<"adresses"> | Date | string
    regionId?: StringFilter<"adresses"> | string
    regions?: XOR<RegionsScalarRelationFilter, regionsWhereInput>
  }

  export type adressesOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    codePostal?: SortOrderInput | SortOrder
    fraisLivraison?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    regionId?: SortOrder
    regions?: regionsOrderByWithRelationInput
  }

  export type adressesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: adressesWhereInput | adressesWhereInput[]
    OR?: adressesWhereInput[]
    NOT?: adressesWhereInput | adressesWhereInput[]
    nom?: StringFilter<"adresses"> | string
    description?: StringNullableFilter<"adresses"> | string | null
    codePostal?: StringNullableFilter<"adresses"> | string | null
    fraisLivraison?: FloatFilter<"adresses"> | number
    createdAt?: DateTimeFilter<"adresses"> | Date | string
    updatedAt?: DateTimeFilter<"adresses"> | Date | string
    regionId?: StringFilter<"adresses"> | string
    regions?: XOR<RegionsScalarRelationFilter, regionsWhereInput>
  }, "id">

  export type adressesOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    codePostal?: SortOrderInput | SortOrder
    fraisLivraison?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    regionId?: SortOrder
    _count?: adressesCountOrderByAggregateInput
    _avg?: adressesAvgOrderByAggregateInput
    _max?: adressesMaxOrderByAggregateInput
    _min?: adressesMinOrderByAggregateInput
    _sum?: adressesSumOrderByAggregateInput
  }

  export type adressesScalarWhereWithAggregatesInput = {
    AND?: adressesScalarWhereWithAggregatesInput | adressesScalarWhereWithAggregatesInput[]
    OR?: adressesScalarWhereWithAggregatesInput[]
    NOT?: adressesScalarWhereWithAggregatesInput | adressesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"adresses"> | string
    nom?: StringWithAggregatesFilter<"adresses"> | string
    description?: StringNullableWithAggregatesFilter<"adresses"> | string | null
    codePostal?: StringNullableWithAggregatesFilter<"adresses"> | string | null
    fraisLivraison?: FloatWithAggregatesFilter<"adresses"> | number
    createdAt?: DateTimeWithAggregatesFilter<"adresses"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"adresses"> | Date | string
    regionId?: StringWithAggregatesFilter<"adresses"> | string
  }

  export type livreursWhereInput = {
    AND?: livreursWhereInput | livreursWhereInput[]
    OR?: livreursWhereInput[]
    NOT?: livreursWhereInput | livreursWhereInput[]
    id?: StringFilter<"livreurs"> | string
    nom?: StringFilter<"livreurs"> | string
    prenom?: StringFilter<"livreurs"> | string
    email?: StringFilter<"livreurs"> | string
    telephone?: StringFilter<"livreurs"> | string
    password?: StringFilter<"livreurs"> | string
    statut?: EnumStatutLivreurFilter<"livreurs"> | $Enums.StatutLivreur
    regionId?: StringNullableFilter<"livreurs"> | string | null
    createdAt?: DateTimeFilter<"livreurs"> | Date | string
    updatedAt?: DateTimeFilter<"livreurs"> | Date | string
    commandes?: CommandeListRelationFilter
    regions?: XOR<RegionsNullableScalarRelationFilter, regionsWhereInput> | null
  }

  export type livreursOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    password?: SortOrder
    statut?: SortOrder
    regionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commandes?: CommandeOrderByRelationAggregateInput
    regions?: regionsOrderByWithRelationInput
  }

  export type livreursWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: livreursWhereInput | livreursWhereInput[]
    OR?: livreursWhereInput[]
    NOT?: livreursWhereInput | livreursWhereInput[]
    nom?: StringFilter<"livreurs"> | string
    prenom?: StringFilter<"livreurs"> | string
    telephone?: StringFilter<"livreurs"> | string
    password?: StringFilter<"livreurs"> | string
    statut?: EnumStatutLivreurFilter<"livreurs"> | $Enums.StatutLivreur
    regionId?: StringNullableFilter<"livreurs"> | string | null
    createdAt?: DateTimeFilter<"livreurs"> | Date | string
    updatedAt?: DateTimeFilter<"livreurs"> | Date | string
    commandes?: CommandeListRelationFilter
    regions?: XOR<RegionsNullableScalarRelationFilter, regionsWhereInput> | null
  }, "id" | "email">

  export type livreursOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    password?: SortOrder
    statut?: SortOrder
    regionId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: livreursCountOrderByAggregateInput
    _max?: livreursMaxOrderByAggregateInput
    _min?: livreursMinOrderByAggregateInput
  }

  export type livreursScalarWhereWithAggregatesInput = {
    AND?: livreursScalarWhereWithAggregatesInput | livreursScalarWhereWithAggregatesInput[]
    OR?: livreursScalarWhereWithAggregatesInput[]
    NOT?: livreursScalarWhereWithAggregatesInput | livreursScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"livreurs"> | string
    nom?: StringWithAggregatesFilter<"livreurs"> | string
    prenom?: StringWithAggregatesFilter<"livreurs"> | string
    email?: StringWithAggregatesFilter<"livreurs"> | string
    telephone?: StringWithAggregatesFilter<"livreurs"> | string
    password?: StringWithAggregatesFilter<"livreurs"> | string
    statut?: EnumStatutLivreurWithAggregatesFilter<"livreurs"> | $Enums.StatutLivreur
    regionId?: StringNullableWithAggregatesFilter<"livreurs"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"livreurs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"livreurs"> | Date | string
  }

  export type regionsWhereInput = {
    AND?: regionsWhereInput | regionsWhereInput[]
    OR?: regionsWhereInput[]
    NOT?: regionsWhereInput | regionsWhereInput[]
    id?: StringFilter<"regions"> | string
    nom?: StringFilter<"regions"> | string
    description?: StringNullableFilter<"regions"> | string | null
    fraisLivraisonInterne?: FloatFilter<"regions"> | number
    fraisLivraisonExterne?: FloatFilter<"regions"> | number
    createdAt?: DateTimeFilter<"regions"> | Date | string
    updatedAt?: DateTimeFilter<"regions"> | Date | string
    adresses?: AdressesListRelationFilter
    commandes?: CommandeListRelationFilter
    gies?: GIEListRelationFilter
    livreurs?: LivreursListRelationFilter
  }

  export type regionsOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    fraisLivraisonInterne?: SortOrder
    fraisLivraisonExterne?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    adresses?: adressesOrderByRelationAggregateInput
    commandes?: CommandeOrderByRelationAggregateInput
    gies?: GIEOrderByRelationAggregateInput
    livreurs?: livreursOrderByRelationAggregateInput
  }

  export type regionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nom?: string
    AND?: regionsWhereInput | regionsWhereInput[]
    OR?: regionsWhereInput[]
    NOT?: regionsWhereInput | regionsWhereInput[]
    description?: StringNullableFilter<"regions"> | string | null
    fraisLivraisonInterne?: FloatFilter<"regions"> | number
    fraisLivraisonExterne?: FloatFilter<"regions"> | number
    createdAt?: DateTimeFilter<"regions"> | Date | string
    updatedAt?: DateTimeFilter<"regions"> | Date | string
    adresses?: AdressesListRelationFilter
    commandes?: CommandeListRelationFilter
    gies?: GIEListRelationFilter
    livreurs?: LivreursListRelationFilter
  }, "id" | "nom">

  export type regionsOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrderInput | SortOrder
    fraisLivraisonInterne?: SortOrder
    fraisLivraisonExterne?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: regionsCountOrderByAggregateInput
    _avg?: regionsAvgOrderByAggregateInput
    _max?: regionsMaxOrderByAggregateInput
    _min?: regionsMinOrderByAggregateInput
    _sum?: regionsSumOrderByAggregateInput
  }

  export type regionsScalarWhereWithAggregatesInput = {
    AND?: regionsScalarWhereWithAggregatesInput | regionsScalarWhereWithAggregatesInput[]
    OR?: regionsScalarWhereWithAggregatesInput[]
    NOT?: regionsScalarWhereWithAggregatesInput | regionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"regions"> | string
    nom?: StringWithAggregatesFilter<"regions"> | string
    description?: StringNullableWithAggregatesFilter<"regions"> | string | null
    fraisLivraisonInterne?: FloatWithAggregatesFilter<"regions"> | number
    fraisLivraisonExterne?: FloatWithAggregatesFilter<"regions"> | number
    createdAt?: DateTimeWithAggregatesFilter<"regions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"regions"> | Date | string
  }

  export type AdministrateurCreateInput = {
    id?: string
    email: string
    password: string
    nom: string
    prenom: string
    telephone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientCreateNestedManyWithoutAdministrateurInput
    gies?: GIECreateNestedManyWithoutAdministrateurInput
  }

  export type AdministrateurUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    nom: string
    prenom: string
    telephone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutAdministrateurInput
    gies?: GIEUncheckedCreateNestedManyWithoutAdministrateurInput
  }

  export type AdministrateurUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutAdministrateurNestedInput
    gies?: GIEUpdateManyWithoutAdministrateurNestedInput
  }

  export type AdministrateurUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutAdministrateurNestedInput
    gies?: GIEUncheckedUpdateManyWithoutAdministrateurNestedInput
  }

  export type AdministrateurCreateManyInput = {
    id?: string
    email: string
    password: string
    nom: string
    prenom: string
    telephone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministrateurUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministrateurUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvisCreateInput = {
    id?: string
    nom?: string | null
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutAvisInput
  }

  export type AvisUncheckedCreateInput = {
    id?: string
    clientId: string
    nom?: string | null
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAvisNestedInput
  }

  export type AvisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvisCreateManyInput = {
    id?: string
    clientId: string
    nom?: string | null
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvisProduitCreateInput = {
    id?: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutAvisProduitInput
    produit: ProduitCreateNestedOneWithoutAvisProduitInput
  }

  export type AvisProduitUncheckedCreateInput = {
    id?: string
    clientId: string
    produitId: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvisProduitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAvisProduitNestedInput
    produit?: ProduitUpdateOneRequiredWithoutAvisProduitNestedInput
  }

  export type AvisProduitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    produitId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvisProduitCreateManyInput = {
    id?: string
    clientId: string
    produitId: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvisProduitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvisProduitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    produitId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GIECreateInput = {
    id?: string
    nom: string
    description?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    password: string
    logo?: string | null
    url?: string | null
    membre?: number | null
    Annee?: Date | string | null
    specialite?: number | null
    statut?: $Enums.StatutGIE
    createdAt?: Date | string
    updatedAt?: Date | string
    administrateur: AdministrateurCreateNestedOneWithoutGiesInput
    regions?: regionsCreateNestedOneWithoutGiesInput
    produits?: ProduitCreateNestedManyWithoutGieInput
  }

  export type GIEUncheckedCreateInput = {
    id?: string
    nom: string
    description?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    password: string
    logo?: string | null
    url?: string | null
    membre?: number | null
    Annee?: Date | string | null
    specialite?: number | null
    statut?: $Enums.StatutGIE
    createdAt?: Date | string
    updatedAt?: Date | string
    administrateurId: string
    regionId?: string | null
    produits?: ProduitUncheckedCreateNestedManyWithoutGieInput
  }

  export type GIEUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    membre?: NullableIntFieldUpdateOperationsInput | number | null
    Annee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialite?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumStatutGIEFieldUpdateOperationsInput | $Enums.StatutGIE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrateur?: AdministrateurUpdateOneRequiredWithoutGiesNestedInput
    regions?: regionsUpdateOneWithoutGiesNestedInput
    produits?: ProduitUpdateManyWithoutGieNestedInput
  }

  export type GIEUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    membre?: NullableIntFieldUpdateOperationsInput | number | null
    Annee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialite?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumStatutGIEFieldUpdateOperationsInput | $Enums.StatutGIE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrateurId?: StringFieldUpdateOperationsInput | string
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    produits?: ProduitUncheckedUpdateManyWithoutGieNestedInput
  }

  export type GIECreateManyInput = {
    id?: string
    nom: string
    description?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    password: string
    logo?: string | null
    url?: string | null
    membre?: number | null
    Annee?: Date | string | null
    specialite?: number | null
    statut?: $Enums.StatutGIE
    createdAt?: Date | string
    updatedAt?: Date | string
    administrateurId: string
    regionId?: string | null
  }

  export type GIEUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    membre?: NullableIntFieldUpdateOperationsInput | number | null
    Annee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialite?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumStatutGIEFieldUpdateOperationsInput | $Enums.StatutGIE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GIEUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    membre?: NullableIntFieldUpdateOperationsInput | number | null
    Annee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialite?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumStatutGIEFieldUpdateOperationsInput | $Enums.StatutGIE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrateurId?: StringFieldUpdateOperationsInput | string
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientCreateInput = {
    id?: string
    email?: string | null
    password: string
    nom: string
    prenom: string
    telephone: string
    adresse?: string | null
    statut?: $Enums.StatutClient
    createdAt?: Date | string
    updatedAt?: Date | string
    administrateur: AdministrateurCreateNestedOneWithoutClientsInput
    commandes?: CommandeCreateNestedManyWithoutClientInput
    avis?: AvisCreateNestedManyWithoutClientInput
    avisProduit?: AvisProduitCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    email?: string | null
    password: string
    nom: string
    prenom: string
    telephone: string
    adresse?: string | null
    statut?: $Enums.StatutClient
    createdAt?: Date | string
    updatedAt?: Date | string
    administrateurId: string
    commandes?: CommandeUncheckedCreateNestedManyWithoutClientInput
    avis?: AvisUncheckedCreateNestedManyWithoutClientInput
    avisProduit?: AvisProduitUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrateur?: AdministrateurUpdateOneRequiredWithoutClientsNestedInput
    commandes?: CommandeUpdateManyWithoutClientNestedInput
    avis?: AvisUpdateManyWithoutClientNestedInput
    avisProduit?: AvisProduitUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrateurId?: StringFieldUpdateOperationsInput | string
    commandes?: CommandeUncheckedUpdateManyWithoutClientNestedInput
    avis?: AvisUncheckedUpdateManyWithoutClientNestedInput
    avisProduit?: AvisProduitUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    email?: string | null
    password: string
    nom: string
    prenom: string
    telephone: string
    adresse?: string | null
    statut?: $Enums.StatutClient
    createdAt?: Date | string
    updatedAt?: Date | string
    administrateurId: string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrateurId?: StringFieldUpdateOperationsInput | string
  }

  export type CategorieCreateInput = {
    id?: string
    nom: string
    description?: string | null
    conservation?: string | null
    couleur?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    produits?: ProduitCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUncheckedCreateInput = {
    id?: string
    nom: string
    description?: string | null
    conservation?: string | null
    couleur?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
    produits?: ProduitUncheckedCreateNestedManyWithoutCategorieInput
  }

  export type CategorieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    conservation?: NullableStringFieldUpdateOperationsInput | string | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    produits?: ProduitUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    conservation?: NullableStringFieldUpdateOperationsInput | string | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    produits?: ProduitUncheckedUpdateManyWithoutCategorieNestedInput
  }

  export type CategorieCreateManyInput = {
    id?: string
    nom: string
    description?: string | null
    conservation?: string | null
    couleur?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
  }

  export type CategorieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    conservation?: NullableStringFieldUpdateOperationsInput | string | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategorieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    conservation?: NullableStringFieldUpdateOperationsInput | string | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProduitCreateInput = {
    id?: string
    nom: string
    quantite?: string
    description?: string | null
    prix: number
    stock?: number
    image?: string | null
    statut?: $Enums.StatutProduit
    createdAt?: Date | string
    updatedAt?: Date | string
    panierProduits?: PanierProduitCreateNestedManyWithoutProduitInput
    categorie?: CategorieCreateNestedOneWithoutProduitsInput
    gie: GIECreateNestedOneWithoutProduitsInput
    avisProduit?: AvisProduitCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateInput = {
    id?: string
    nom: string
    quantite?: string
    description?: string | null
    prix: number
    stock?: number
    image?: string | null
    statut?: $Enums.StatutProduit
    createdAt?: Date | string
    updatedAt?: Date | string
    gieId: string
    categorieId?: string | null
    panierProduits?: PanierProduitUncheckedCreateNestedManyWithoutProduitInput
    avisProduit?: AvisProduitUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panierProduits?: PanierProduitUpdateManyWithoutProduitNestedInput
    categorie?: CategorieUpdateOneWithoutProduitsNestedInput
    gie?: GIEUpdateOneRequiredWithoutProduitsNestedInput
    avisProduit?: AvisProduitUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gieId?: StringFieldUpdateOperationsInput | string
    categorieId?: NullableStringFieldUpdateOperationsInput | string | null
    panierProduits?: PanierProduitUncheckedUpdateManyWithoutProduitNestedInput
    avisProduit?: AvisProduitUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type ProduitCreateManyInput = {
    id?: string
    nom: string
    quantite?: string
    description?: string | null
    prix: number
    stock?: number
    image?: string | null
    statut?: $Enums.StatutProduit
    createdAt?: Date | string
    updatedAt?: Date | string
    gieId: string
    categorieId?: string | null
  }

  export type ProduitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProduitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gieId?: StringFieldUpdateOperationsInput | string
    categorieId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommandeCreateInput = {
    id?: string
    numero: string
    montant: number
    statut?: $Enums.StatutCommande
    dateCommande?: Date | string
    dateLivraison?: Date | string | null
    adresseLivraison?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fraisLivraison?: number
    client: ClientCreateNestedOneWithoutCommandesInput
    livreurs?: livreursCreateNestedOneWithoutCommandesInput
    regions?: regionsCreateNestedOneWithoutCommandesInput
    paiement?: PaiementCreateNestedOneWithoutCommandeInput
    panierProduits?: PanierProduitCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateInput = {
    id?: string
    numero: string
    montant: number
    statut?: $Enums.StatutCommande
    dateCommande?: Date | string
    dateLivraison?: Date | string | null
    adresseLivraison?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    fraisLivraison?: number
    regionLivraisonId?: string | null
    livreurId?: string | null
    paiement?: PaiementUncheckedCreateNestedOneWithoutCommandeInput
    panierProduits?: PanierProduitUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraison?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresseLivraison?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    client?: ClientUpdateOneRequiredWithoutCommandesNestedInput
    livreurs?: livreursUpdateOneWithoutCommandesNestedInput
    regions?: regionsUpdateOneWithoutCommandesNestedInput
    paiement?: PaiementUpdateOneWithoutCommandeNestedInput
    panierProduits?: PanierProduitUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraison?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresseLivraison?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    regionLivraisonId?: NullableStringFieldUpdateOperationsInput | string | null
    livreurId?: NullableStringFieldUpdateOperationsInput | string | null
    paiement?: PaiementUncheckedUpdateOneWithoutCommandeNestedInput
    panierProduits?: PanierProduitUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeCreateManyInput = {
    id?: string
    numero: string
    montant: number
    statut?: $Enums.StatutCommande
    dateCommande?: Date | string
    dateLivraison?: Date | string | null
    adresseLivraison?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    fraisLivraison?: number
    regionLivraisonId?: string | null
    livreurId?: string | null
  }

  export type CommandeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraison?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresseLivraison?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
  }

  export type CommandeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraison?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresseLivraison?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    regionLivraisonId?: NullableStringFieldUpdateOperationsInput | string | null
    livreurId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaiementCreateInput = {
    id?: string
    montant: number
    methode: $Enums.MethodePaiement
    statut?: $Enums.StatutPaiement
    reference?: string | null
    datePaiement?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    fraisLivraison?: number
    commande: CommandeCreateNestedOneWithoutPaiementInput
  }

  export type PaiementUncheckedCreateInput = {
    id?: string
    montant: number
    methode: $Enums.MethodePaiement
    statut?: $Enums.StatutPaiement
    reference?: string | null
    datePaiement?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    commandeId: string
    fraisLivraison?: number
  }

  export type PaiementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    methode?: EnumMethodePaiementFieldUpdateOperationsInput | $Enums.MethodePaiement
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    datePaiement?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    commande?: CommandeUpdateOneRequiredWithoutPaiementNestedInput
  }

  export type PaiementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    methode?: EnumMethodePaiementFieldUpdateOperationsInput | $Enums.MethodePaiement
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    datePaiement?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandeId?: StringFieldUpdateOperationsInput | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
  }

  export type PaiementCreateManyInput = {
    id?: string
    montant: number
    methode: $Enums.MethodePaiement
    statut?: $Enums.StatutPaiement
    reference?: string | null
    datePaiement?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    commandeId: string
    fraisLivraison?: number
  }

  export type PaiementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    methode?: EnumMethodePaiementFieldUpdateOperationsInput | $Enums.MethodePaiement
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    datePaiement?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
  }

  export type PaiementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    methode?: EnumMethodePaiementFieldUpdateOperationsInput | $Enums.MethodePaiement
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    datePaiement?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandeId?: StringFieldUpdateOperationsInput | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
  }

  export type PanierProduitCreateInput = {
    id?: string
    quantite: number
    prixUnitaire: number
    createdAt?: Date | string
    statutGIE?: $Enums.StatutGIEProduit
    dateConfirmation?: Date | string | null
    updatedAt?: Date | string
    commande: CommandeCreateNestedOneWithoutPanierProduitsInput
    produit: ProduitCreateNestedOneWithoutPanierProduitsInput
  }

  export type PanierProduitUncheckedCreateInput = {
    id?: string
    quantite: number
    prixUnitaire: number
    createdAt?: Date | string
    commandeId: string
    produitId: string
    statutGIE?: $Enums.StatutGIEProduit
    dateConfirmation?: Date | string | null
    updatedAt?: Date | string
  }

  export type PanierProduitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statutGIE?: EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit
    dateConfirmation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commande?: CommandeUpdateOneRequiredWithoutPanierProduitsNestedInput
    produit?: ProduitUpdateOneRequiredWithoutPanierProduitsNestedInput
  }

  export type PanierProduitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandeId?: StringFieldUpdateOperationsInput | string
    produitId?: StringFieldUpdateOperationsInput | string
    statutGIE?: EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit
    dateConfirmation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanierProduitCreateManyInput = {
    id?: string
    quantite: number
    prixUnitaire: number
    createdAt?: Date | string
    commandeId: string
    produitId: string
    statutGIE?: $Enums.StatutGIEProduit
    dateConfirmation?: Date | string | null
    updatedAt?: Date | string
  }

  export type PanierProduitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statutGIE?: EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit
    dateConfirmation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanierProduitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandeId?: StringFieldUpdateOperationsInput | string
    produitId?: StringFieldUpdateOperationsInput | string
    statutGIE?: EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit
    dateConfirmation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adressesCreateInput = {
    id: string
    nom: string
    description?: string | null
    codePostal?: string | null
    fraisLivraison?: number
    createdAt?: Date | string
    updatedAt: Date | string
    regions: regionsCreateNestedOneWithoutAdressesInput
  }

  export type adressesUncheckedCreateInput = {
    id: string
    nom: string
    description?: string | null
    codePostal?: string | null
    fraisLivraison?: number
    createdAt?: Date | string
    updatedAt: Date | string
    regionId: string
  }

  export type adressesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    codePostal?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regions?: regionsUpdateOneRequiredWithoutAdressesNestedInput
  }

  export type adressesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    codePostal?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regionId?: StringFieldUpdateOperationsInput | string
  }

  export type adressesCreateManyInput = {
    id: string
    nom: string
    description?: string | null
    codePostal?: string | null
    fraisLivraison?: number
    createdAt?: Date | string
    updatedAt: Date | string
    regionId: string
  }

  export type adressesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    codePostal?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adressesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    codePostal?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regionId?: StringFieldUpdateOperationsInput | string
  }

  export type livreursCreateInput = {
    id: string
    nom: string
    prenom: string
    email: string
    telephone: string
    password: string
    statut?: $Enums.StatutLivreur
    createdAt?: Date | string
    updatedAt: Date | string
    commandes?: CommandeCreateNestedManyWithoutLivreursInput
    regions?: regionsCreateNestedOneWithoutLivreursInput
  }

  export type livreursUncheckedCreateInput = {
    id: string
    nom: string
    prenom: string
    email: string
    telephone: string
    password: string
    statut?: $Enums.StatutLivreur
    regionId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    commandes?: CommandeUncheckedCreateNestedManyWithoutLivreursInput
  }

  export type livreursUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUpdateManyWithoutLivreursNestedInput
    regions?: regionsUpdateOneWithoutLivreursNestedInput
  }

  export type livreursUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUncheckedUpdateManyWithoutLivreursNestedInput
  }

  export type livreursCreateManyInput = {
    id: string
    nom: string
    prenom: string
    email: string
    telephone: string
    password: string
    statut?: $Enums.StatutLivreur
    regionId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type livreursUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type livreursUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type regionsCreateInput = {
    id: string
    nom: string
    description?: string | null
    fraisLivraisonInterne?: number
    fraisLivraisonExterne?: number
    createdAt?: Date | string
    updatedAt: Date | string
    adresses?: adressesCreateNestedManyWithoutRegionsInput
    commandes?: CommandeCreateNestedManyWithoutRegionsInput
    gies?: GIECreateNestedManyWithoutRegionsInput
    livreurs?: livreursCreateNestedManyWithoutRegionsInput
  }

  export type regionsUncheckedCreateInput = {
    id: string
    nom: string
    description?: string | null
    fraisLivraisonInterne?: number
    fraisLivraisonExterne?: number
    createdAt?: Date | string
    updatedAt: Date | string
    adresses?: adressesUncheckedCreateNestedManyWithoutRegionsInput
    commandes?: CommandeUncheckedCreateNestedManyWithoutRegionsInput
    gies?: GIEUncheckedCreateNestedManyWithoutRegionsInput
    livreurs?: livreursUncheckedCreateNestedManyWithoutRegionsInput
  }

  export type regionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraisonInterne?: FloatFieldUpdateOperationsInput | number
    fraisLivraisonExterne?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adresses?: adressesUpdateManyWithoutRegionsNestedInput
    commandes?: CommandeUpdateManyWithoutRegionsNestedInput
    gies?: GIEUpdateManyWithoutRegionsNestedInput
    livreurs?: livreursUpdateManyWithoutRegionsNestedInput
  }

  export type regionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraisonInterne?: FloatFieldUpdateOperationsInput | number
    fraisLivraisonExterne?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adresses?: adressesUncheckedUpdateManyWithoutRegionsNestedInput
    commandes?: CommandeUncheckedUpdateManyWithoutRegionsNestedInput
    gies?: GIEUncheckedUpdateManyWithoutRegionsNestedInput
    livreurs?: livreursUncheckedUpdateManyWithoutRegionsNestedInput
  }

  export type regionsCreateManyInput = {
    id: string
    nom: string
    description?: string | null
    fraisLivraisonInterne?: number
    fraisLivraisonExterne?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type regionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraisonInterne?: FloatFieldUpdateOperationsInput | number
    fraisLivraisonExterne?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type regionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraisonInterne?: FloatFieldUpdateOperationsInput | number
    fraisLivraisonExterne?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type GIEListRelationFilter = {
    every?: GIEWhereInput
    some?: GIEWhereInput
    none?: GIEWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GIEOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdministrateurCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministrateurMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministrateurMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type AvisCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    nom?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvisAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type AvisMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    nom?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvisMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    nom?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvisSumOrderByAggregateInput = {
    rating?: SortOrder
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

  export type ProduitScalarRelationFilter = {
    is?: ProduitWhereInput
    isNot?: ProduitWhereInput
  }

  export type AvisProduitCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    produitId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvisProduitAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type AvisProduitMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    produitId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvisProduitMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    produitId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvisProduitSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumStatutGIEFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutGIE | EnumStatutGIEFieldRefInput<$PrismaModel>
    in?: $Enums.StatutGIE[] | ListEnumStatutGIEFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutGIE[] | ListEnumStatutGIEFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutGIEFilter<$PrismaModel> | $Enums.StatutGIE
  }

  export type AdministrateurScalarRelationFilter = {
    is?: AdministrateurWhereInput
    isNot?: AdministrateurWhereInput
  }

  export type RegionsNullableScalarRelationFilter = {
    is?: regionsWhereInput | null
    isNot?: regionsWhereInput | null
  }

  export type ProduitListRelationFilter = {
    every?: ProduitWhereInput
    some?: ProduitWhereInput
    none?: ProduitWhereInput
  }

  export type ProduitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GIECountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    adresse?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    logo?: SortOrder
    url?: SortOrder
    membre?: SortOrder
    Annee?: SortOrder
    specialite?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    administrateurId?: SortOrder
    regionId?: SortOrder
  }

  export type GIEAvgOrderByAggregateInput = {
    membre?: SortOrder
    specialite?: SortOrder
  }

  export type GIEMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    adresse?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    logo?: SortOrder
    url?: SortOrder
    membre?: SortOrder
    Annee?: SortOrder
    specialite?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    administrateurId?: SortOrder
    regionId?: SortOrder
  }

  export type GIEMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    adresse?: SortOrder
    telephone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    logo?: SortOrder
    url?: SortOrder
    membre?: SortOrder
    Annee?: SortOrder
    specialite?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    administrateurId?: SortOrder
    regionId?: SortOrder
  }

  export type GIESumOrderByAggregateInput = {
    membre?: SortOrder
    specialite?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumStatutGIEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutGIE | EnumStatutGIEFieldRefInput<$PrismaModel>
    in?: $Enums.StatutGIE[] | ListEnumStatutGIEFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutGIE[] | ListEnumStatutGIEFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutGIEWithAggregatesFilter<$PrismaModel> | $Enums.StatutGIE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutGIEFilter<$PrismaModel>
    _max?: NestedEnumStatutGIEFilter<$PrismaModel>
  }

  export type EnumStatutClientFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutClient | EnumStatutClientFieldRefInput<$PrismaModel>
    in?: $Enums.StatutClient[] | ListEnumStatutClientFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutClient[] | ListEnumStatutClientFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutClientFilter<$PrismaModel> | $Enums.StatutClient
  }

  export type CommandeListRelationFilter = {
    every?: CommandeWhereInput
    some?: CommandeWhereInput
    none?: CommandeWhereInput
  }

  export type AvisListRelationFilter = {
    every?: AvisWhereInput
    some?: AvisWhereInput
    none?: AvisWhereInput
  }

  export type AvisProduitListRelationFilter = {
    every?: AvisProduitWhereInput
    some?: AvisProduitWhereInput
    none?: AvisProduitWhereInput
  }

  export type CommandeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvisProduitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    administrateurId?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    administrateurId?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    adresse?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    administrateurId?: SortOrder
  }

  export type EnumStatutClientWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutClient | EnumStatutClientFieldRefInput<$PrismaModel>
    in?: $Enums.StatutClient[] | ListEnumStatutClientFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutClient[] | ListEnumStatutClientFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutClientWithAggregatesFilter<$PrismaModel> | $Enums.StatutClient
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutClientFilter<$PrismaModel>
    _max?: NestedEnumStatutClientFilter<$PrismaModel>
  }

  export type CategorieCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    conservation?: SortOrder
    couleur?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
  }

  export type CategorieMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    conservation?: SortOrder
    couleur?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
  }

  export type CategorieMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    conservation?: SortOrder
    couleur?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumStatutProduitFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutProduit | EnumStatutProduitFieldRefInput<$PrismaModel>
    in?: $Enums.StatutProduit[] | ListEnumStatutProduitFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutProduit[] | ListEnumStatutProduitFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutProduitFilter<$PrismaModel> | $Enums.StatutProduit
  }

  export type PanierProduitListRelationFilter = {
    every?: PanierProduitWhereInput
    some?: PanierProduitWhereInput
    none?: PanierProduitWhereInput
  }

  export type CategorieNullableScalarRelationFilter = {
    is?: CategorieWhereInput | null
    isNot?: CategorieWhereInput | null
  }

  export type GIEScalarRelationFilter = {
    is?: GIEWhereInput
    isNot?: GIEWhereInput
  }

  export type PanierProduitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProduitCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    stock?: SortOrder
    image?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gieId?: SortOrder
    categorieId?: SortOrder
  }

  export type ProduitAvgOrderByAggregateInput = {
    prix?: SortOrder
    stock?: SortOrder
  }

  export type ProduitMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    stock?: SortOrder
    image?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gieId?: SortOrder
    categorieId?: SortOrder
  }

  export type ProduitMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    quantite?: SortOrder
    description?: SortOrder
    prix?: SortOrder
    stock?: SortOrder
    image?: SortOrder
    statut?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gieId?: SortOrder
    categorieId?: SortOrder
  }

  export type ProduitSumOrderByAggregateInput = {
    prix?: SortOrder
    stock?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumStatutProduitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutProduit | EnumStatutProduitFieldRefInput<$PrismaModel>
    in?: $Enums.StatutProduit[] | ListEnumStatutProduitFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutProduit[] | ListEnumStatutProduitFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutProduitWithAggregatesFilter<$PrismaModel> | $Enums.StatutProduit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutProduitFilter<$PrismaModel>
    _max?: NestedEnumStatutProduitFilter<$PrismaModel>
  }

  export type EnumStatutCommandeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutCommande | EnumStatutCommandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutCommande[] | ListEnumStatutCommandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutCommande[] | ListEnumStatutCommandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutCommandeFilter<$PrismaModel> | $Enums.StatutCommande
  }

  export type LivreursNullableScalarRelationFilter = {
    is?: livreursWhereInput | null
    isNot?: livreursWhereInput | null
  }

  export type PaiementNullableScalarRelationFilter = {
    is?: PaiementWhereInput | null
    isNot?: PaiementWhereInput | null
  }

  export type CommandeCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
    dateCommande?: SortOrder
    dateLivraison?: SortOrder
    adresseLivraison?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    fraisLivraison?: SortOrder
    regionLivraisonId?: SortOrder
    livreurId?: SortOrder
  }

  export type CommandeAvgOrderByAggregateInput = {
    montant?: SortOrder
    fraisLivraison?: SortOrder
  }

  export type CommandeMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
    dateCommande?: SortOrder
    dateLivraison?: SortOrder
    adresseLivraison?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    fraisLivraison?: SortOrder
    regionLivraisonId?: SortOrder
    livreurId?: SortOrder
  }

  export type CommandeMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    montant?: SortOrder
    statut?: SortOrder
    dateCommande?: SortOrder
    dateLivraison?: SortOrder
    adresseLivraison?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    clientId?: SortOrder
    fraisLivraison?: SortOrder
    regionLivraisonId?: SortOrder
    livreurId?: SortOrder
  }

  export type CommandeSumOrderByAggregateInput = {
    montant?: SortOrder
    fraisLivraison?: SortOrder
  }

  export type EnumStatutCommandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutCommande | EnumStatutCommandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutCommande[] | ListEnumStatutCommandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutCommande[] | ListEnumStatutCommandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutCommandeWithAggregatesFilter<$PrismaModel> | $Enums.StatutCommande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutCommandeFilter<$PrismaModel>
    _max?: NestedEnumStatutCommandeFilter<$PrismaModel>
  }

  export type EnumMethodePaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.MethodePaiement | EnumMethodePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.MethodePaiement[] | ListEnumMethodePaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.MethodePaiement[] | ListEnumMethodePaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumMethodePaiementFilter<$PrismaModel> | $Enums.MethodePaiement
  }

  export type EnumStatutPaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[] | ListEnumStatutPaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutPaiement[] | ListEnumStatutPaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutPaiementFilter<$PrismaModel> | $Enums.StatutPaiement
  }

  export type CommandeScalarRelationFilter = {
    is?: CommandeWhereInput
    isNot?: CommandeWhereInput
  }

  export type PaiementCountOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    methode?: SortOrder
    statut?: SortOrder
    reference?: SortOrder
    datePaiement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commandeId?: SortOrder
    fraisLivraison?: SortOrder
  }

  export type PaiementAvgOrderByAggregateInput = {
    montant?: SortOrder
    fraisLivraison?: SortOrder
  }

  export type PaiementMaxOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    methode?: SortOrder
    statut?: SortOrder
    reference?: SortOrder
    datePaiement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commandeId?: SortOrder
    fraisLivraison?: SortOrder
  }

  export type PaiementMinOrderByAggregateInput = {
    id?: SortOrder
    montant?: SortOrder
    methode?: SortOrder
    statut?: SortOrder
    reference?: SortOrder
    datePaiement?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    commandeId?: SortOrder
    fraisLivraison?: SortOrder
  }

  export type PaiementSumOrderByAggregateInput = {
    montant?: SortOrder
    fraisLivraison?: SortOrder
  }

  export type EnumMethodePaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MethodePaiement | EnumMethodePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.MethodePaiement[] | ListEnumMethodePaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.MethodePaiement[] | ListEnumMethodePaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumMethodePaiementWithAggregatesFilter<$PrismaModel> | $Enums.MethodePaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMethodePaiementFilter<$PrismaModel>
    _max?: NestedEnumMethodePaiementFilter<$PrismaModel>
  }

  export type EnumStatutPaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[] | ListEnumStatutPaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutPaiement[] | ListEnumStatutPaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutPaiementWithAggregatesFilter<$PrismaModel> | $Enums.StatutPaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutPaiementFilter<$PrismaModel>
    _max?: NestedEnumStatutPaiementFilter<$PrismaModel>
  }

  export type EnumStatutGIEProduitFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutGIEProduit | EnumStatutGIEProduitFieldRefInput<$PrismaModel>
    in?: $Enums.StatutGIEProduit[] | ListEnumStatutGIEProduitFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutGIEProduit[] | ListEnumStatutGIEProduitFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutGIEProduitFilter<$PrismaModel> | $Enums.StatutGIEProduit
  }

  export type PanierProduitCommandeIdProduitIdCompoundUniqueInput = {
    commandeId: string
    produitId: string
  }

  export type PanierProduitCountOrderByAggregateInput = {
    id?: SortOrder
    quantite?: SortOrder
    prixUnitaire?: SortOrder
    createdAt?: SortOrder
    commandeId?: SortOrder
    produitId?: SortOrder
    statutGIE?: SortOrder
    dateConfirmation?: SortOrder
    updatedAt?: SortOrder
  }

  export type PanierProduitAvgOrderByAggregateInput = {
    quantite?: SortOrder
    prixUnitaire?: SortOrder
  }

  export type PanierProduitMaxOrderByAggregateInput = {
    id?: SortOrder
    quantite?: SortOrder
    prixUnitaire?: SortOrder
    createdAt?: SortOrder
    commandeId?: SortOrder
    produitId?: SortOrder
    statutGIE?: SortOrder
    dateConfirmation?: SortOrder
    updatedAt?: SortOrder
  }

  export type PanierProduitMinOrderByAggregateInput = {
    id?: SortOrder
    quantite?: SortOrder
    prixUnitaire?: SortOrder
    createdAt?: SortOrder
    commandeId?: SortOrder
    produitId?: SortOrder
    statutGIE?: SortOrder
    dateConfirmation?: SortOrder
    updatedAt?: SortOrder
  }

  export type PanierProduitSumOrderByAggregateInput = {
    quantite?: SortOrder
    prixUnitaire?: SortOrder
  }

  export type EnumStatutGIEProduitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutGIEProduit | EnumStatutGIEProduitFieldRefInput<$PrismaModel>
    in?: $Enums.StatutGIEProduit[] | ListEnumStatutGIEProduitFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutGIEProduit[] | ListEnumStatutGIEProduitFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutGIEProduitWithAggregatesFilter<$PrismaModel> | $Enums.StatutGIEProduit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutGIEProduitFilter<$PrismaModel>
    _max?: NestedEnumStatutGIEProduitFilter<$PrismaModel>
  }

  export type RegionsScalarRelationFilter = {
    is?: regionsWhereInput
    isNot?: regionsWhereInput
  }

  export type adressesCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    codePostal?: SortOrder
    fraisLivraison?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    regionId?: SortOrder
  }

  export type adressesAvgOrderByAggregateInput = {
    fraisLivraison?: SortOrder
  }

  export type adressesMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    codePostal?: SortOrder
    fraisLivraison?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    regionId?: SortOrder
  }

  export type adressesMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    codePostal?: SortOrder
    fraisLivraison?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    regionId?: SortOrder
  }

  export type adressesSumOrderByAggregateInput = {
    fraisLivraison?: SortOrder
  }

  export type EnumStatutLivreurFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutLivreur | EnumStatutLivreurFieldRefInput<$PrismaModel>
    in?: $Enums.StatutLivreur[] | ListEnumStatutLivreurFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutLivreur[] | ListEnumStatutLivreurFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutLivreurFilter<$PrismaModel> | $Enums.StatutLivreur
  }

  export type livreursCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    password?: SortOrder
    statut?: SortOrder
    regionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type livreursMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    password?: SortOrder
    statut?: SortOrder
    regionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type livreursMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    email?: SortOrder
    telephone?: SortOrder
    password?: SortOrder
    statut?: SortOrder
    regionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatutLivreurWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutLivreur | EnumStatutLivreurFieldRefInput<$PrismaModel>
    in?: $Enums.StatutLivreur[] | ListEnumStatutLivreurFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutLivreur[] | ListEnumStatutLivreurFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutLivreurWithAggregatesFilter<$PrismaModel> | $Enums.StatutLivreur
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutLivreurFilter<$PrismaModel>
    _max?: NestedEnumStatutLivreurFilter<$PrismaModel>
  }

  export type AdressesListRelationFilter = {
    every?: adressesWhereInput
    some?: adressesWhereInput
    none?: adressesWhereInput
  }

  export type LivreursListRelationFilter = {
    every?: livreursWhereInput
    some?: livreursWhereInput
    none?: livreursWhereInput
  }

  export type adressesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type livreursOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type regionsCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    fraisLivraisonInterne?: SortOrder
    fraisLivraisonExterne?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type regionsAvgOrderByAggregateInput = {
    fraisLivraisonInterne?: SortOrder
    fraisLivraisonExterne?: SortOrder
  }

  export type regionsMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    fraisLivraisonInterne?: SortOrder
    fraisLivraisonExterne?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type regionsMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    description?: SortOrder
    fraisLivraisonInterne?: SortOrder
    fraisLivraisonExterne?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type regionsSumOrderByAggregateInput = {
    fraisLivraisonInterne?: SortOrder
    fraisLivraisonExterne?: SortOrder
  }

  export type ClientCreateNestedManyWithoutAdministrateurInput = {
    create?: XOR<ClientCreateWithoutAdministrateurInput, ClientUncheckedCreateWithoutAdministrateurInput> | ClientCreateWithoutAdministrateurInput[] | ClientUncheckedCreateWithoutAdministrateurInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAdministrateurInput | ClientCreateOrConnectWithoutAdministrateurInput[]
    createMany?: ClientCreateManyAdministrateurInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type GIECreateNestedManyWithoutAdministrateurInput = {
    create?: XOR<GIECreateWithoutAdministrateurInput, GIEUncheckedCreateWithoutAdministrateurInput> | GIECreateWithoutAdministrateurInput[] | GIEUncheckedCreateWithoutAdministrateurInput[]
    connectOrCreate?: GIECreateOrConnectWithoutAdministrateurInput | GIECreateOrConnectWithoutAdministrateurInput[]
    createMany?: GIECreateManyAdministrateurInputEnvelope
    connect?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutAdministrateurInput = {
    create?: XOR<ClientCreateWithoutAdministrateurInput, ClientUncheckedCreateWithoutAdministrateurInput> | ClientCreateWithoutAdministrateurInput[] | ClientUncheckedCreateWithoutAdministrateurInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAdministrateurInput | ClientCreateOrConnectWithoutAdministrateurInput[]
    createMany?: ClientCreateManyAdministrateurInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type GIEUncheckedCreateNestedManyWithoutAdministrateurInput = {
    create?: XOR<GIECreateWithoutAdministrateurInput, GIEUncheckedCreateWithoutAdministrateurInput> | GIECreateWithoutAdministrateurInput[] | GIEUncheckedCreateWithoutAdministrateurInput[]
    connectOrCreate?: GIECreateOrConnectWithoutAdministrateurInput | GIECreateOrConnectWithoutAdministrateurInput[]
    createMany?: GIECreateManyAdministrateurInputEnvelope
    connect?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientUpdateManyWithoutAdministrateurNestedInput = {
    create?: XOR<ClientCreateWithoutAdministrateurInput, ClientUncheckedCreateWithoutAdministrateurInput> | ClientCreateWithoutAdministrateurInput[] | ClientUncheckedCreateWithoutAdministrateurInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAdministrateurInput | ClientCreateOrConnectWithoutAdministrateurInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutAdministrateurInput | ClientUpsertWithWhereUniqueWithoutAdministrateurInput[]
    createMany?: ClientCreateManyAdministrateurInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutAdministrateurInput | ClientUpdateWithWhereUniqueWithoutAdministrateurInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutAdministrateurInput | ClientUpdateManyWithWhereWithoutAdministrateurInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type GIEUpdateManyWithoutAdministrateurNestedInput = {
    create?: XOR<GIECreateWithoutAdministrateurInput, GIEUncheckedCreateWithoutAdministrateurInput> | GIECreateWithoutAdministrateurInput[] | GIEUncheckedCreateWithoutAdministrateurInput[]
    connectOrCreate?: GIECreateOrConnectWithoutAdministrateurInput | GIECreateOrConnectWithoutAdministrateurInput[]
    upsert?: GIEUpsertWithWhereUniqueWithoutAdministrateurInput | GIEUpsertWithWhereUniqueWithoutAdministrateurInput[]
    createMany?: GIECreateManyAdministrateurInputEnvelope
    set?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
    disconnect?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
    delete?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
    connect?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
    update?: GIEUpdateWithWhereUniqueWithoutAdministrateurInput | GIEUpdateWithWhereUniqueWithoutAdministrateurInput[]
    updateMany?: GIEUpdateManyWithWhereWithoutAdministrateurInput | GIEUpdateManyWithWhereWithoutAdministrateurInput[]
    deleteMany?: GIEScalarWhereInput | GIEScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutAdministrateurNestedInput = {
    create?: XOR<ClientCreateWithoutAdministrateurInput, ClientUncheckedCreateWithoutAdministrateurInput> | ClientCreateWithoutAdministrateurInput[] | ClientUncheckedCreateWithoutAdministrateurInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutAdministrateurInput | ClientCreateOrConnectWithoutAdministrateurInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutAdministrateurInput | ClientUpsertWithWhereUniqueWithoutAdministrateurInput[]
    createMany?: ClientCreateManyAdministrateurInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutAdministrateurInput | ClientUpdateWithWhereUniqueWithoutAdministrateurInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutAdministrateurInput | ClientUpdateManyWithWhereWithoutAdministrateurInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type GIEUncheckedUpdateManyWithoutAdministrateurNestedInput = {
    create?: XOR<GIECreateWithoutAdministrateurInput, GIEUncheckedCreateWithoutAdministrateurInput> | GIECreateWithoutAdministrateurInput[] | GIEUncheckedCreateWithoutAdministrateurInput[]
    connectOrCreate?: GIECreateOrConnectWithoutAdministrateurInput | GIECreateOrConnectWithoutAdministrateurInput[]
    upsert?: GIEUpsertWithWhereUniqueWithoutAdministrateurInput | GIEUpsertWithWhereUniqueWithoutAdministrateurInput[]
    createMany?: GIECreateManyAdministrateurInputEnvelope
    set?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
    disconnect?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
    delete?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
    connect?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
    update?: GIEUpdateWithWhereUniqueWithoutAdministrateurInput | GIEUpdateWithWhereUniqueWithoutAdministrateurInput[]
    updateMany?: GIEUpdateManyWithWhereWithoutAdministrateurInput | GIEUpdateManyWithWhereWithoutAdministrateurInput[]
    deleteMany?: GIEScalarWhereInput | GIEScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutAvisInput = {
    create?: XOR<ClientCreateWithoutAvisInput, ClientUncheckedCreateWithoutAvisInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAvisInput
    connect?: ClientWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientUpdateOneRequiredWithoutAvisNestedInput = {
    create?: XOR<ClientCreateWithoutAvisInput, ClientUncheckedCreateWithoutAvisInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAvisInput
    upsert?: ClientUpsertWithoutAvisInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAvisInput, ClientUpdateWithoutAvisInput>, ClientUncheckedUpdateWithoutAvisInput>
  }

  export type ClientCreateNestedOneWithoutAvisProduitInput = {
    create?: XOR<ClientCreateWithoutAvisProduitInput, ClientUncheckedCreateWithoutAvisProduitInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAvisProduitInput
    connect?: ClientWhereUniqueInput
  }

  export type ProduitCreateNestedOneWithoutAvisProduitInput = {
    create?: XOR<ProduitCreateWithoutAvisProduitInput, ProduitUncheckedCreateWithoutAvisProduitInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutAvisProduitInput
    connect?: ProduitWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutAvisProduitNestedInput = {
    create?: XOR<ClientCreateWithoutAvisProduitInput, ClientUncheckedCreateWithoutAvisProduitInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAvisProduitInput
    upsert?: ClientUpsertWithoutAvisProduitInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAvisProduitInput, ClientUpdateWithoutAvisProduitInput>, ClientUncheckedUpdateWithoutAvisProduitInput>
  }

  export type ProduitUpdateOneRequiredWithoutAvisProduitNestedInput = {
    create?: XOR<ProduitCreateWithoutAvisProduitInput, ProduitUncheckedCreateWithoutAvisProduitInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutAvisProduitInput
    upsert?: ProduitUpsertWithoutAvisProduitInput
    connect?: ProduitWhereUniqueInput
    update?: XOR<XOR<ProduitUpdateToOneWithWhereWithoutAvisProduitInput, ProduitUpdateWithoutAvisProduitInput>, ProduitUncheckedUpdateWithoutAvisProduitInput>
  }

  export type AdministrateurCreateNestedOneWithoutGiesInput = {
    create?: XOR<AdministrateurCreateWithoutGiesInput, AdministrateurUncheckedCreateWithoutGiesInput>
    connectOrCreate?: AdministrateurCreateOrConnectWithoutGiesInput
    connect?: AdministrateurWhereUniqueInput
  }

  export type regionsCreateNestedOneWithoutGiesInput = {
    create?: XOR<regionsCreateWithoutGiesInput, regionsUncheckedCreateWithoutGiesInput>
    connectOrCreate?: regionsCreateOrConnectWithoutGiesInput
    connect?: regionsWhereUniqueInput
  }

  export type ProduitCreateNestedManyWithoutGieInput = {
    create?: XOR<ProduitCreateWithoutGieInput, ProduitUncheckedCreateWithoutGieInput> | ProduitCreateWithoutGieInput[] | ProduitUncheckedCreateWithoutGieInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutGieInput | ProduitCreateOrConnectWithoutGieInput[]
    createMany?: ProduitCreateManyGieInputEnvelope
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
  }

  export type ProduitUncheckedCreateNestedManyWithoutGieInput = {
    create?: XOR<ProduitCreateWithoutGieInput, ProduitUncheckedCreateWithoutGieInput> | ProduitCreateWithoutGieInput[] | ProduitUncheckedCreateWithoutGieInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutGieInput | ProduitCreateOrConnectWithoutGieInput[]
    createMany?: ProduitCreateManyGieInputEnvelope
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumStatutGIEFieldUpdateOperationsInput = {
    set?: $Enums.StatutGIE
  }

  export type AdministrateurUpdateOneRequiredWithoutGiesNestedInput = {
    create?: XOR<AdministrateurCreateWithoutGiesInput, AdministrateurUncheckedCreateWithoutGiesInput>
    connectOrCreate?: AdministrateurCreateOrConnectWithoutGiesInput
    upsert?: AdministrateurUpsertWithoutGiesInput
    connect?: AdministrateurWhereUniqueInput
    update?: XOR<XOR<AdministrateurUpdateToOneWithWhereWithoutGiesInput, AdministrateurUpdateWithoutGiesInput>, AdministrateurUncheckedUpdateWithoutGiesInput>
  }

  export type regionsUpdateOneWithoutGiesNestedInput = {
    create?: XOR<regionsCreateWithoutGiesInput, regionsUncheckedCreateWithoutGiesInput>
    connectOrCreate?: regionsCreateOrConnectWithoutGiesInput
    upsert?: regionsUpsertWithoutGiesInput
    disconnect?: regionsWhereInput | boolean
    delete?: regionsWhereInput | boolean
    connect?: regionsWhereUniqueInput
    update?: XOR<XOR<regionsUpdateToOneWithWhereWithoutGiesInput, regionsUpdateWithoutGiesInput>, regionsUncheckedUpdateWithoutGiesInput>
  }

  export type ProduitUpdateManyWithoutGieNestedInput = {
    create?: XOR<ProduitCreateWithoutGieInput, ProduitUncheckedCreateWithoutGieInput> | ProduitCreateWithoutGieInput[] | ProduitUncheckedCreateWithoutGieInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutGieInput | ProduitCreateOrConnectWithoutGieInput[]
    upsert?: ProduitUpsertWithWhereUniqueWithoutGieInput | ProduitUpsertWithWhereUniqueWithoutGieInput[]
    createMany?: ProduitCreateManyGieInputEnvelope
    set?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    disconnect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    delete?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    update?: ProduitUpdateWithWhereUniqueWithoutGieInput | ProduitUpdateWithWhereUniqueWithoutGieInput[]
    updateMany?: ProduitUpdateManyWithWhereWithoutGieInput | ProduitUpdateManyWithWhereWithoutGieInput[]
    deleteMany?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
  }

  export type ProduitUncheckedUpdateManyWithoutGieNestedInput = {
    create?: XOR<ProduitCreateWithoutGieInput, ProduitUncheckedCreateWithoutGieInput> | ProduitCreateWithoutGieInput[] | ProduitUncheckedCreateWithoutGieInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutGieInput | ProduitCreateOrConnectWithoutGieInput[]
    upsert?: ProduitUpsertWithWhereUniqueWithoutGieInput | ProduitUpsertWithWhereUniqueWithoutGieInput[]
    createMany?: ProduitCreateManyGieInputEnvelope
    set?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    disconnect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    delete?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    update?: ProduitUpdateWithWhereUniqueWithoutGieInput | ProduitUpdateWithWhereUniqueWithoutGieInput[]
    updateMany?: ProduitUpdateManyWithWhereWithoutGieInput | ProduitUpdateManyWithWhereWithoutGieInput[]
    deleteMany?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
  }

  export type AdministrateurCreateNestedOneWithoutClientsInput = {
    create?: XOR<AdministrateurCreateWithoutClientsInput, AdministrateurUncheckedCreateWithoutClientsInput>
    connectOrCreate?: AdministrateurCreateOrConnectWithoutClientsInput
    connect?: AdministrateurWhereUniqueInput
  }

  export type CommandeCreateNestedManyWithoutClientInput = {
    create?: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput> | CommandeCreateWithoutClientInput[] | CommandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutClientInput | CommandeCreateOrConnectWithoutClientInput[]
    createMany?: CommandeCreateManyClientInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type AvisCreateNestedManyWithoutClientInput = {
    create?: XOR<AvisCreateWithoutClientInput, AvisUncheckedCreateWithoutClientInput> | AvisCreateWithoutClientInput[] | AvisUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutClientInput | AvisCreateOrConnectWithoutClientInput[]
    createMany?: AvisCreateManyClientInputEnvelope
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
  }

  export type AvisProduitCreateNestedManyWithoutClientInput = {
    create?: XOR<AvisProduitCreateWithoutClientInput, AvisProduitUncheckedCreateWithoutClientInput> | AvisProduitCreateWithoutClientInput[] | AvisProduitUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AvisProduitCreateOrConnectWithoutClientInput | AvisProduitCreateOrConnectWithoutClientInput[]
    createMany?: AvisProduitCreateManyClientInputEnvelope
    connect?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
  }

  export type CommandeUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput> | CommandeCreateWithoutClientInput[] | CommandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutClientInput | CommandeCreateOrConnectWithoutClientInput[]
    createMany?: CommandeCreateManyClientInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type AvisUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AvisCreateWithoutClientInput, AvisUncheckedCreateWithoutClientInput> | AvisCreateWithoutClientInput[] | AvisUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutClientInput | AvisCreateOrConnectWithoutClientInput[]
    createMany?: AvisCreateManyClientInputEnvelope
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
  }

  export type AvisProduitUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<AvisProduitCreateWithoutClientInput, AvisProduitUncheckedCreateWithoutClientInput> | AvisProduitCreateWithoutClientInput[] | AvisProduitUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AvisProduitCreateOrConnectWithoutClientInput | AvisProduitCreateOrConnectWithoutClientInput[]
    createMany?: AvisProduitCreateManyClientInputEnvelope
    connect?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
  }

  export type EnumStatutClientFieldUpdateOperationsInput = {
    set?: $Enums.StatutClient
  }

  export type AdministrateurUpdateOneRequiredWithoutClientsNestedInput = {
    create?: XOR<AdministrateurCreateWithoutClientsInput, AdministrateurUncheckedCreateWithoutClientsInput>
    connectOrCreate?: AdministrateurCreateOrConnectWithoutClientsInput
    upsert?: AdministrateurUpsertWithoutClientsInput
    connect?: AdministrateurWhereUniqueInput
    update?: XOR<XOR<AdministrateurUpdateToOneWithWhereWithoutClientsInput, AdministrateurUpdateWithoutClientsInput>, AdministrateurUncheckedUpdateWithoutClientsInput>
  }

  export type CommandeUpdateManyWithoutClientNestedInput = {
    create?: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput> | CommandeCreateWithoutClientInput[] | CommandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutClientInput | CommandeCreateOrConnectWithoutClientInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutClientInput | CommandeUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CommandeCreateManyClientInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutClientInput | CommandeUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutClientInput | CommandeUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type AvisUpdateManyWithoutClientNestedInput = {
    create?: XOR<AvisCreateWithoutClientInput, AvisUncheckedCreateWithoutClientInput> | AvisCreateWithoutClientInput[] | AvisUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutClientInput | AvisCreateOrConnectWithoutClientInput[]
    upsert?: AvisUpsertWithWhereUniqueWithoutClientInput | AvisUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AvisCreateManyClientInputEnvelope
    set?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    disconnect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    delete?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    update?: AvisUpdateWithWhereUniqueWithoutClientInput | AvisUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AvisUpdateManyWithWhereWithoutClientInput | AvisUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AvisScalarWhereInput | AvisScalarWhereInput[]
  }

  export type AvisProduitUpdateManyWithoutClientNestedInput = {
    create?: XOR<AvisProduitCreateWithoutClientInput, AvisProduitUncheckedCreateWithoutClientInput> | AvisProduitCreateWithoutClientInput[] | AvisProduitUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AvisProduitCreateOrConnectWithoutClientInput | AvisProduitCreateOrConnectWithoutClientInput[]
    upsert?: AvisProduitUpsertWithWhereUniqueWithoutClientInput | AvisProduitUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AvisProduitCreateManyClientInputEnvelope
    set?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
    disconnect?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
    delete?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
    connect?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
    update?: AvisProduitUpdateWithWhereUniqueWithoutClientInput | AvisProduitUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AvisProduitUpdateManyWithWhereWithoutClientInput | AvisProduitUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AvisProduitScalarWhereInput | AvisProduitScalarWhereInput[]
  }

  export type CommandeUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput> | CommandeCreateWithoutClientInput[] | CommandeUncheckedCreateWithoutClientInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutClientInput | CommandeCreateOrConnectWithoutClientInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutClientInput | CommandeUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: CommandeCreateManyClientInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutClientInput | CommandeUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutClientInput | CommandeUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type AvisUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AvisCreateWithoutClientInput, AvisUncheckedCreateWithoutClientInput> | AvisCreateWithoutClientInput[] | AvisUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AvisCreateOrConnectWithoutClientInput | AvisCreateOrConnectWithoutClientInput[]
    upsert?: AvisUpsertWithWhereUniqueWithoutClientInput | AvisUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AvisCreateManyClientInputEnvelope
    set?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    disconnect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    delete?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    connect?: AvisWhereUniqueInput | AvisWhereUniqueInput[]
    update?: AvisUpdateWithWhereUniqueWithoutClientInput | AvisUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AvisUpdateManyWithWhereWithoutClientInput | AvisUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AvisScalarWhereInput | AvisScalarWhereInput[]
  }

  export type AvisProduitUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<AvisProduitCreateWithoutClientInput, AvisProduitUncheckedCreateWithoutClientInput> | AvisProduitCreateWithoutClientInput[] | AvisProduitUncheckedCreateWithoutClientInput[]
    connectOrCreate?: AvisProduitCreateOrConnectWithoutClientInput | AvisProduitCreateOrConnectWithoutClientInput[]
    upsert?: AvisProduitUpsertWithWhereUniqueWithoutClientInput | AvisProduitUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: AvisProduitCreateManyClientInputEnvelope
    set?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
    disconnect?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
    delete?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
    connect?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
    update?: AvisProduitUpdateWithWhereUniqueWithoutClientInput | AvisProduitUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: AvisProduitUpdateManyWithWhereWithoutClientInput | AvisProduitUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: AvisProduitScalarWhereInput | AvisProduitScalarWhereInput[]
  }

  export type ProduitCreateNestedManyWithoutCategorieInput = {
    create?: XOR<ProduitCreateWithoutCategorieInput, ProduitUncheckedCreateWithoutCategorieInput> | ProduitCreateWithoutCategorieInput[] | ProduitUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutCategorieInput | ProduitCreateOrConnectWithoutCategorieInput[]
    createMany?: ProduitCreateManyCategorieInputEnvelope
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
  }

  export type ProduitUncheckedCreateNestedManyWithoutCategorieInput = {
    create?: XOR<ProduitCreateWithoutCategorieInput, ProduitUncheckedCreateWithoutCategorieInput> | ProduitCreateWithoutCategorieInput[] | ProduitUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutCategorieInput | ProduitCreateOrConnectWithoutCategorieInput[]
    createMany?: ProduitCreateManyCategorieInputEnvelope
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
  }

  export type ProduitUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<ProduitCreateWithoutCategorieInput, ProduitUncheckedCreateWithoutCategorieInput> | ProduitCreateWithoutCategorieInput[] | ProduitUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutCategorieInput | ProduitCreateOrConnectWithoutCategorieInput[]
    upsert?: ProduitUpsertWithWhereUniqueWithoutCategorieInput | ProduitUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: ProduitCreateManyCategorieInputEnvelope
    set?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    disconnect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    delete?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    update?: ProduitUpdateWithWhereUniqueWithoutCategorieInput | ProduitUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: ProduitUpdateManyWithWhereWithoutCategorieInput | ProduitUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
  }

  export type ProduitUncheckedUpdateManyWithoutCategorieNestedInput = {
    create?: XOR<ProduitCreateWithoutCategorieInput, ProduitUncheckedCreateWithoutCategorieInput> | ProduitCreateWithoutCategorieInput[] | ProduitUncheckedCreateWithoutCategorieInput[]
    connectOrCreate?: ProduitCreateOrConnectWithoutCategorieInput | ProduitCreateOrConnectWithoutCategorieInput[]
    upsert?: ProduitUpsertWithWhereUniqueWithoutCategorieInput | ProduitUpsertWithWhereUniqueWithoutCategorieInput[]
    createMany?: ProduitCreateManyCategorieInputEnvelope
    set?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    disconnect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    delete?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    connect?: ProduitWhereUniqueInput | ProduitWhereUniqueInput[]
    update?: ProduitUpdateWithWhereUniqueWithoutCategorieInput | ProduitUpdateWithWhereUniqueWithoutCategorieInput[]
    updateMany?: ProduitUpdateManyWithWhereWithoutCategorieInput | ProduitUpdateManyWithWhereWithoutCategorieInput[]
    deleteMany?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
  }

  export type PanierProduitCreateNestedManyWithoutProduitInput = {
    create?: XOR<PanierProduitCreateWithoutProduitInput, PanierProduitUncheckedCreateWithoutProduitInput> | PanierProduitCreateWithoutProduitInput[] | PanierProduitUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: PanierProduitCreateOrConnectWithoutProduitInput | PanierProduitCreateOrConnectWithoutProduitInput[]
    createMany?: PanierProduitCreateManyProduitInputEnvelope
    connect?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
  }

  export type CategorieCreateNestedOneWithoutProduitsInput = {
    create?: XOR<CategorieCreateWithoutProduitsInput, CategorieUncheckedCreateWithoutProduitsInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutProduitsInput
    connect?: CategorieWhereUniqueInput
  }

  export type GIECreateNestedOneWithoutProduitsInput = {
    create?: XOR<GIECreateWithoutProduitsInput, GIEUncheckedCreateWithoutProduitsInput>
    connectOrCreate?: GIECreateOrConnectWithoutProduitsInput
    connect?: GIEWhereUniqueInput
  }

  export type AvisProduitCreateNestedManyWithoutProduitInput = {
    create?: XOR<AvisProduitCreateWithoutProduitInput, AvisProduitUncheckedCreateWithoutProduitInput> | AvisProduitCreateWithoutProduitInput[] | AvisProduitUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: AvisProduitCreateOrConnectWithoutProduitInput | AvisProduitCreateOrConnectWithoutProduitInput[]
    createMany?: AvisProduitCreateManyProduitInputEnvelope
    connect?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
  }

  export type PanierProduitUncheckedCreateNestedManyWithoutProduitInput = {
    create?: XOR<PanierProduitCreateWithoutProduitInput, PanierProduitUncheckedCreateWithoutProduitInput> | PanierProduitCreateWithoutProduitInput[] | PanierProduitUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: PanierProduitCreateOrConnectWithoutProduitInput | PanierProduitCreateOrConnectWithoutProduitInput[]
    createMany?: PanierProduitCreateManyProduitInputEnvelope
    connect?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
  }

  export type AvisProduitUncheckedCreateNestedManyWithoutProduitInput = {
    create?: XOR<AvisProduitCreateWithoutProduitInput, AvisProduitUncheckedCreateWithoutProduitInput> | AvisProduitCreateWithoutProduitInput[] | AvisProduitUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: AvisProduitCreateOrConnectWithoutProduitInput | AvisProduitCreateOrConnectWithoutProduitInput[]
    createMany?: AvisProduitCreateManyProduitInputEnvelope
    connect?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatutProduitFieldUpdateOperationsInput = {
    set?: $Enums.StatutProduit
  }

  export type PanierProduitUpdateManyWithoutProduitNestedInput = {
    create?: XOR<PanierProduitCreateWithoutProduitInput, PanierProduitUncheckedCreateWithoutProduitInput> | PanierProduitCreateWithoutProduitInput[] | PanierProduitUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: PanierProduitCreateOrConnectWithoutProduitInput | PanierProduitCreateOrConnectWithoutProduitInput[]
    upsert?: PanierProduitUpsertWithWhereUniqueWithoutProduitInput | PanierProduitUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: PanierProduitCreateManyProduitInputEnvelope
    set?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
    disconnect?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
    delete?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
    connect?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
    update?: PanierProduitUpdateWithWhereUniqueWithoutProduitInput | PanierProduitUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: PanierProduitUpdateManyWithWhereWithoutProduitInput | PanierProduitUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: PanierProduitScalarWhereInput | PanierProduitScalarWhereInput[]
  }

  export type CategorieUpdateOneWithoutProduitsNestedInput = {
    create?: XOR<CategorieCreateWithoutProduitsInput, CategorieUncheckedCreateWithoutProduitsInput>
    connectOrCreate?: CategorieCreateOrConnectWithoutProduitsInput
    upsert?: CategorieUpsertWithoutProduitsInput
    disconnect?: CategorieWhereInput | boolean
    delete?: CategorieWhereInput | boolean
    connect?: CategorieWhereUniqueInput
    update?: XOR<XOR<CategorieUpdateToOneWithWhereWithoutProduitsInput, CategorieUpdateWithoutProduitsInput>, CategorieUncheckedUpdateWithoutProduitsInput>
  }

  export type GIEUpdateOneRequiredWithoutProduitsNestedInput = {
    create?: XOR<GIECreateWithoutProduitsInput, GIEUncheckedCreateWithoutProduitsInput>
    connectOrCreate?: GIECreateOrConnectWithoutProduitsInput
    upsert?: GIEUpsertWithoutProduitsInput
    connect?: GIEWhereUniqueInput
    update?: XOR<XOR<GIEUpdateToOneWithWhereWithoutProduitsInput, GIEUpdateWithoutProduitsInput>, GIEUncheckedUpdateWithoutProduitsInput>
  }

  export type AvisProduitUpdateManyWithoutProduitNestedInput = {
    create?: XOR<AvisProduitCreateWithoutProduitInput, AvisProduitUncheckedCreateWithoutProduitInput> | AvisProduitCreateWithoutProduitInput[] | AvisProduitUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: AvisProduitCreateOrConnectWithoutProduitInput | AvisProduitCreateOrConnectWithoutProduitInput[]
    upsert?: AvisProduitUpsertWithWhereUniqueWithoutProduitInput | AvisProduitUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: AvisProduitCreateManyProduitInputEnvelope
    set?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
    disconnect?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
    delete?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
    connect?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
    update?: AvisProduitUpdateWithWhereUniqueWithoutProduitInput | AvisProduitUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: AvisProduitUpdateManyWithWhereWithoutProduitInput | AvisProduitUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: AvisProduitScalarWhereInput | AvisProduitScalarWhereInput[]
  }

  export type PanierProduitUncheckedUpdateManyWithoutProduitNestedInput = {
    create?: XOR<PanierProduitCreateWithoutProduitInput, PanierProduitUncheckedCreateWithoutProduitInput> | PanierProduitCreateWithoutProduitInput[] | PanierProduitUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: PanierProduitCreateOrConnectWithoutProduitInput | PanierProduitCreateOrConnectWithoutProduitInput[]
    upsert?: PanierProduitUpsertWithWhereUniqueWithoutProduitInput | PanierProduitUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: PanierProduitCreateManyProduitInputEnvelope
    set?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
    disconnect?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
    delete?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
    connect?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
    update?: PanierProduitUpdateWithWhereUniqueWithoutProduitInput | PanierProduitUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: PanierProduitUpdateManyWithWhereWithoutProduitInput | PanierProduitUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: PanierProduitScalarWhereInput | PanierProduitScalarWhereInput[]
  }

  export type AvisProduitUncheckedUpdateManyWithoutProduitNestedInput = {
    create?: XOR<AvisProduitCreateWithoutProduitInput, AvisProduitUncheckedCreateWithoutProduitInput> | AvisProduitCreateWithoutProduitInput[] | AvisProduitUncheckedCreateWithoutProduitInput[]
    connectOrCreate?: AvisProduitCreateOrConnectWithoutProduitInput | AvisProduitCreateOrConnectWithoutProduitInput[]
    upsert?: AvisProduitUpsertWithWhereUniqueWithoutProduitInput | AvisProduitUpsertWithWhereUniqueWithoutProduitInput[]
    createMany?: AvisProduitCreateManyProduitInputEnvelope
    set?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
    disconnect?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
    delete?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
    connect?: AvisProduitWhereUniqueInput | AvisProduitWhereUniqueInput[]
    update?: AvisProduitUpdateWithWhereUniqueWithoutProduitInput | AvisProduitUpdateWithWhereUniqueWithoutProduitInput[]
    updateMany?: AvisProduitUpdateManyWithWhereWithoutProduitInput | AvisProduitUpdateManyWithWhereWithoutProduitInput[]
    deleteMany?: AvisProduitScalarWhereInput | AvisProduitScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutCommandesInput = {
    create?: XOR<ClientCreateWithoutCommandesInput, ClientUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutCommandesInput
    connect?: ClientWhereUniqueInput
  }

  export type livreursCreateNestedOneWithoutCommandesInput = {
    create?: XOR<livreursCreateWithoutCommandesInput, livreursUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: livreursCreateOrConnectWithoutCommandesInput
    connect?: livreursWhereUniqueInput
  }

  export type regionsCreateNestedOneWithoutCommandesInput = {
    create?: XOR<regionsCreateWithoutCommandesInput, regionsUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: regionsCreateOrConnectWithoutCommandesInput
    connect?: regionsWhereUniqueInput
  }

  export type PaiementCreateNestedOneWithoutCommandeInput = {
    create?: XOR<PaiementCreateWithoutCommandeInput, PaiementUncheckedCreateWithoutCommandeInput>
    connectOrCreate?: PaiementCreateOrConnectWithoutCommandeInput
    connect?: PaiementWhereUniqueInput
  }

  export type PanierProduitCreateNestedManyWithoutCommandeInput = {
    create?: XOR<PanierProduitCreateWithoutCommandeInput, PanierProduitUncheckedCreateWithoutCommandeInput> | PanierProduitCreateWithoutCommandeInput[] | PanierProduitUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: PanierProduitCreateOrConnectWithoutCommandeInput | PanierProduitCreateOrConnectWithoutCommandeInput[]
    createMany?: PanierProduitCreateManyCommandeInputEnvelope
    connect?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
  }

  export type PaiementUncheckedCreateNestedOneWithoutCommandeInput = {
    create?: XOR<PaiementCreateWithoutCommandeInput, PaiementUncheckedCreateWithoutCommandeInput>
    connectOrCreate?: PaiementCreateOrConnectWithoutCommandeInput
    connect?: PaiementWhereUniqueInput
  }

  export type PanierProduitUncheckedCreateNestedManyWithoutCommandeInput = {
    create?: XOR<PanierProduitCreateWithoutCommandeInput, PanierProduitUncheckedCreateWithoutCommandeInput> | PanierProduitCreateWithoutCommandeInput[] | PanierProduitUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: PanierProduitCreateOrConnectWithoutCommandeInput | PanierProduitCreateOrConnectWithoutCommandeInput[]
    createMany?: PanierProduitCreateManyCommandeInputEnvelope
    connect?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
  }

  export type EnumStatutCommandeFieldUpdateOperationsInput = {
    set?: $Enums.StatutCommande
  }

  export type ClientUpdateOneRequiredWithoutCommandesNestedInput = {
    create?: XOR<ClientCreateWithoutCommandesInput, ClientUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: ClientCreateOrConnectWithoutCommandesInput
    upsert?: ClientUpsertWithoutCommandesInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutCommandesInput, ClientUpdateWithoutCommandesInput>, ClientUncheckedUpdateWithoutCommandesInput>
  }

  export type livreursUpdateOneWithoutCommandesNestedInput = {
    create?: XOR<livreursCreateWithoutCommandesInput, livreursUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: livreursCreateOrConnectWithoutCommandesInput
    upsert?: livreursUpsertWithoutCommandesInput
    disconnect?: livreursWhereInput | boolean
    delete?: livreursWhereInput | boolean
    connect?: livreursWhereUniqueInput
    update?: XOR<XOR<livreursUpdateToOneWithWhereWithoutCommandesInput, livreursUpdateWithoutCommandesInput>, livreursUncheckedUpdateWithoutCommandesInput>
  }

  export type regionsUpdateOneWithoutCommandesNestedInput = {
    create?: XOR<regionsCreateWithoutCommandesInput, regionsUncheckedCreateWithoutCommandesInput>
    connectOrCreate?: regionsCreateOrConnectWithoutCommandesInput
    upsert?: regionsUpsertWithoutCommandesInput
    disconnect?: regionsWhereInput | boolean
    delete?: regionsWhereInput | boolean
    connect?: regionsWhereUniqueInput
    update?: XOR<XOR<regionsUpdateToOneWithWhereWithoutCommandesInput, regionsUpdateWithoutCommandesInput>, regionsUncheckedUpdateWithoutCommandesInput>
  }

  export type PaiementUpdateOneWithoutCommandeNestedInput = {
    create?: XOR<PaiementCreateWithoutCommandeInput, PaiementUncheckedCreateWithoutCommandeInput>
    connectOrCreate?: PaiementCreateOrConnectWithoutCommandeInput
    upsert?: PaiementUpsertWithoutCommandeInput
    disconnect?: PaiementWhereInput | boolean
    delete?: PaiementWhereInput | boolean
    connect?: PaiementWhereUniqueInput
    update?: XOR<XOR<PaiementUpdateToOneWithWhereWithoutCommandeInput, PaiementUpdateWithoutCommandeInput>, PaiementUncheckedUpdateWithoutCommandeInput>
  }

  export type PanierProduitUpdateManyWithoutCommandeNestedInput = {
    create?: XOR<PanierProduitCreateWithoutCommandeInput, PanierProduitUncheckedCreateWithoutCommandeInput> | PanierProduitCreateWithoutCommandeInput[] | PanierProduitUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: PanierProduitCreateOrConnectWithoutCommandeInput | PanierProduitCreateOrConnectWithoutCommandeInput[]
    upsert?: PanierProduitUpsertWithWhereUniqueWithoutCommandeInput | PanierProduitUpsertWithWhereUniqueWithoutCommandeInput[]
    createMany?: PanierProduitCreateManyCommandeInputEnvelope
    set?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
    disconnect?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
    delete?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
    connect?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
    update?: PanierProduitUpdateWithWhereUniqueWithoutCommandeInput | PanierProduitUpdateWithWhereUniqueWithoutCommandeInput[]
    updateMany?: PanierProduitUpdateManyWithWhereWithoutCommandeInput | PanierProduitUpdateManyWithWhereWithoutCommandeInput[]
    deleteMany?: PanierProduitScalarWhereInput | PanierProduitScalarWhereInput[]
  }

  export type PaiementUncheckedUpdateOneWithoutCommandeNestedInput = {
    create?: XOR<PaiementCreateWithoutCommandeInput, PaiementUncheckedCreateWithoutCommandeInput>
    connectOrCreate?: PaiementCreateOrConnectWithoutCommandeInput
    upsert?: PaiementUpsertWithoutCommandeInput
    disconnect?: PaiementWhereInput | boolean
    delete?: PaiementWhereInput | boolean
    connect?: PaiementWhereUniqueInput
    update?: XOR<XOR<PaiementUpdateToOneWithWhereWithoutCommandeInput, PaiementUpdateWithoutCommandeInput>, PaiementUncheckedUpdateWithoutCommandeInput>
  }

  export type PanierProduitUncheckedUpdateManyWithoutCommandeNestedInput = {
    create?: XOR<PanierProduitCreateWithoutCommandeInput, PanierProduitUncheckedCreateWithoutCommandeInput> | PanierProduitCreateWithoutCommandeInput[] | PanierProduitUncheckedCreateWithoutCommandeInput[]
    connectOrCreate?: PanierProduitCreateOrConnectWithoutCommandeInput | PanierProduitCreateOrConnectWithoutCommandeInput[]
    upsert?: PanierProduitUpsertWithWhereUniqueWithoutCommandeInput | PanierProduitUpsertWithWhereUniqueWithoutCommandeInput[]
    createMany?: PanierProduitCreateManyCommandeInputEnvelope
    set?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
    disconnect?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
    delete?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
    connect?: PanierProduitWhereUniqueInput | PanierProduitWhereUniqueInput[]
    update?: PanierProduitUpdateWithWhereUniqueWithoutCommandeInput | PanierProduitUpdateWithWhereUniqueWithoutCommandeInput[]
    updateMany?: PanierProduitUpdateManyWithWhereWithoutCommandeInput | PanierProduitUpdateManyWithWhereWithoutCommandeInput[]
    deleteMany?: PanierProduitScalarWhereInput | PanierProduitScalarWhereInput[]
  }

  export type CommandeCreateNestedOneWithoutPaiementInput = {
    create?: XOR<CommandeCreateWithoutPaiementInput, CommandeUncheckedCreateWithoutPaiementInput>
    connectOrCreate?: CommandeCreateOrConnectWithoutPaiementInput
    connect?: CommandeWhereUniqueInput
  }

  export type EnumMethodePaiementFieldUpdateOperationsInput = {
    set?: $Enums.MethodePaiement
  }

  export type EnumStatutPaiementFieldUpdateOperationsInput = {
    set?: $Enums.StatutPaiement
  }

  export type CommandeUpdateOneRequiredWithoutPaiementNestedInput = {
    create?: XOR<CommandeCreateWithoutPaiementInput, CommandeUncheckedCreateWithoutPaiementInput>
    connectOrCreate?: CommandeCreateOrConnectWithoutPaiementInput
    upsert?: CommandeUpsertWithoutPaiementInput
    connect?: CommandeWhereUniqueInput
    update?: XOR<XOR<CommandeUpdateToOneWithWhereWithoutPaiementInput, CommandeUpdateWithoutPaiementInput>, CommandeUncheckedUpdateWithoutPaiementInput>
  }

  export type CommandeCreateNestedOneWithoutPanierProduitsInput = {
    create?: XOR<CommandeCreateWithoutPanierProduitsInput, CommandeUncheckedCreateWithoutPanierProduitsInput>
    connectOrCreate?: CommandeCreateOrConnectWithoutPanierProduitsInput
    connect?: CommandeWhereUniqueInput
  }

  export type ProduitCreateNestedOneWithoutPanierProduitsInput = {
    create?: XOR<ProduitCreateWithoutPanierProduitsInput, ProduitUncheckedCreateWithoutPanierProduitsInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutPanierProduitsInput
    connect?: ProduitWhereUniqueInput
  }

  export type EnumStatutGIEProduitFieldUpdateOperationsInput = {
    set?: $Enums.StatutGIEProduit
  }

  export type CommandeUpdateOneRequiredWithoutPanierProduitsNestedInput = {
    create?: XOR<CommandeCreateWithoutPanierProduitsInput, CommandeUncheckedCreateWithoutPanierProduitsInput>
    connectOrCreate?: CommandeCreateOrConnectWithoutPanierProduitsInput
    upsert?: CommandeUpsertWithoutPanierProduitsInput
    connect?: CommandeWhereUniqueInput
    update?: XOR<XOR<CommandeUpdateToOneWithWhereWithoutPanierProduitsInput, CommandeUpdateWithoutPanierProduitsInput>, CommandeUncheckedUpdateWithoutPanierProduitsInput>
  }

  export type ProduitUpdateOneRequiredWithoutPanierProduitsNestedInput = {
    create?: XOR<ProduitCreateWithoutPanierProduitsInput, ProduitUncheckedCreateWithoutPanierProduitsInput>
    connectOrCreate?: ProduitCreateOrConnectWithoutPanierProduitsInput
    upsert?: ProduitUpsertWithoutPanierProduitsInput
    connect?: ProduitWhereUniqueInput
    update?: XOR<XOR<ProduitUpdateToOneWithWhereWithoutPanierProduitsInput, ProduitUpdateWithoutPanierProduitsInput>, ProduitUncheckedUpdateWithoutPanierProduitsInput>
  }

  export type regionsCreateNestedOneWithoutAdressesInput = {
    create?: XOR<regionsCreateWithoutAdressesInput, regionsUncheckedCreateWithoutAdressesInput>
    connectOrCreate?: regionsCreateOrConnectWithoutAdressesInput
    connect?: regionsWhereUniqueInput
  }

  export type regionsUpdateOneRequiredWithoutAdressesNestedInput = {
    create?: XOR<regionsCreateWithoutAdressesInput, regionsUncheckedCreateWithoutAdressesInput>
    connectOrCreate?: regionsCreateOrConnectWithoutAdressesInput
    upsert?: regionsUpsertWithoutAdressesInput
    connect?: regionsWhereUniqueInput
    update?: XOR<XOR<regionsUpdateToOneWithWhereWithoutAdressesInput, regionsUpdateWithoutAdressesInput>, regionsUncheckedUpdateWithoutAdressesInput>
  }

  export type CommandeCreateNestedManyWithoutLivreursInput = {
    create?: XOR<CommandeCreateWithoutLivreursInput, CommandeUncheckedCreateWithoutLivreursInput> | CommandeCreateWithoutLivreursInput[] | CommandeUncheckedCreateWithoutLivreursInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutLivreursInput | CommandeCreateOrConnectWithoutLivreursInput[]
    createMany?: CommandeCreateManyLivreursInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type regionsCreateNestedOneWithoutLivreursInput = {
    create?: XOR<regionsCreateWithoutLivreursInput, regionsUncheckedCreateWithoutLivreursInput>
    connectOrCreate?: regionsCreateOrConnectWithoutLivreursInput
    connect?: regionsWhereUniqueInput
  }

  export type CommandeUncheckedCreateNestedManyWithoutLivreursInput = {
    create?: XOR<CommandeCreateWithoutLivreursInput, CommandeUncheckedCreateWithoutLivreursInput> | CommandeCreateWithoutLivreursInput[] | CommandeUncheckedCreateWithoutLivreursInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutLivreursInput | CommandeCreateOrConnectWithoutLivreursInput[]
    createMany?: CommandeCreateManyLivreursInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type EnumStatutLivreurFieldUpdateOperationsInput = {
    set?: $Enums.StatutLivreur
  }

  export type CommandeUpdateManyWithoutLivreursNestedInput = {
    create?: XOR<CommandeCreateWithoutLivreursInput, CommandeUncheckedCreateWithoutLivreursInput> | CommandeCreateWithoutLivreursInput[] | CommandeUncheckedCreateWithoutLivreursInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutLivreursInput | CommandeCreateOrConnectWithoutLivreursInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutLivreursInput | CommandeUpsertWithWhereUniqueWithoutLivreursInput[]
    createMany?: CommandeCreateManyLivreursInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutLivreursInput | CommandeUpdateWithWhereUniqueWithoutLivreursInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutLivreursInput | CommandeUpdateManyWithWhereWithoutLivreursInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type regionsUpdateOneWithoutLivreursNestedInput = {
    create?: XOR<regionsCreateWithoutLivreursInput, regionsUncheckedCreateWithoutLivreursInput>
    connectOrCreate?: regionsCreateOrConnectWithoutLivreursInput
    upsert?: regionsUpsertWithoutLivreursInput
    disconnect?: regionsWhereInput | boolean
    delete?: regionsWhereInput | boolean
    connect?: regionsWhereUniqueInput
    update?: XOR<XOR<regionsUpdateToOneWithWhereWithoutLivreursInput, regionsUpdateWithoutLivreursInput>, regionsUncheckedUpdateWithoutLivreursInput>
  }

  export type CommandeUncheckedUpdateManyWithoutLivreursNestedInput = {
    create?: XOR<CommandeCreateWithoutLivreursInput, CommandeUncheckedCreateWithoutLivreursInput> | CommandeCreateWithoutLivreursInput[] | CommandeUncheckedCreateWithoutLivreursInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutLivreursInput | CommandeCreateOrConnectWithoutLivreursInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutLivreursInput | CommandeUpsertWithWhereUniqueWithoutLivreursInput[]
    createMany?: CommandeCreateManyLivreursInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutLivreursInput | CommandeUpdateWithWhereUniqueWithoutLivreursInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutLivreursInput | CommandeUpdateManyWithWhereWithoutLivreursInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type adressesCreateNestedManyWithoutRegionsInput = {
    create?: XOR<adressesCreateWithoutRegionsInput, adressesUncheckedCreateWithoutRegionsInput> | adressesCreateWithoutRegionsInput[] | adressesUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: adressesCreateOrConnectWithoutRegionsInput | adressesCreateOrConnectWithoutRegionsInput[]
    createMany?: adressesCreateManyRegionsInputEnvelope
    connect?: adressesWhereUniqueInput | adressesWhereUniqueInput[]
  }

  export type CommandeCreateNestedManyWithoutRegionsInput = {
    create?: XOR<CommandeCreateWithoutRegionsInput, CommandeUncheckedCreateWithoutRegionsInput> | CommandeCreateWithoutRegionsInput[] | CommandeUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutRegionsInput | CommandeCreateOrConnectWithoutRegionsInput[]
    createMany?: CommandeCreateManyRegionsInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type GIECreateNestedManyWithoutRegionsInput = {
    create?: XOR<GIECreateWithoutRegionsInput, GIEUncheckedCreateWithoutRegionsInput> | GIECreateWithoutRegionsInput[] | GIEUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: GIECreateOrConnectWithoutRegionsInput | GIECreateOrConnectWithoutRegionsInput[]
    createMany?: GIECreateManyRegionsInputEnvelope
    connect?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
  }

  export type livreursCreateNestedManyWithoutRegionsInput = {
    create?: XOR<livreursCreateWithoutRegionsInput, livreursUncheckedCreateWithoutRegionsInput> | livreursCreateWithoutRegionsInput[] | livreursUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: livreursCreateOrConnectWithoutRegionsInput | livreursCreateOrConnectWithoutRegionsInput[]
    createMany?: livreursCreateManyRegionsInputEnvelope
    connect?: livreursWhereUniqueInput | livreursWhereUniqueInput[]
  }

  export type adressesUncheckedCreateNestedManyWithoutRegionsInput = {
    create?: XOR<adressesCreateWithoutRegionsInput, adressesUncheckedCreateWithoutRegionsInput> | adressesCreateWithoutRegionsInput[] | adressesUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: adressesCreateOrConnectWithoutRegionsInput | adressesCreateOrConnectWithoutRegionsInput[]
    createMany?: adressesCreateManyRegionsInputEnvelope
    connect?: adressesWhereUniqueInput | adressesWhereUniqueInput[]
  }

  export type CommandeUncheckedCreateNestedManyWithoutRegionsInput = {
    create?: XOR<CommandeCreateWithoutRegionsInput, CommandeUncheckedCreateWithoutRegionsInput> | CommandeCreateWithoutRegionsInput[] | CommandeUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutRegionsInput | CommandeCreateOrConnectWithoutRegionsInput[]
    createMany?: CommandeCreateManyRegionsInputEnvelope
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
  }

  export type GIEUncheckedCreateNestedManyWithoutRegionsInput = {
    create?: XOR<GIECreateWithoutRegionsInput, GIEUncheckedCreateWithoutRegionsInput> | GIECreateWithoutRegionsInput[] | GIEUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: GIECreateOrConnectWithoutRegionsInput | GIECreateOrConnectWithoutRegionsInput[]
    createMany?: GIECreateManyRegionsInputEnvelope
    connect?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
  }

  export type livreursUncheckedCreateNestedManyWithoutRegionsInput = {
    create?: XOR<livreursCreateWithoutRegionsInput, livreursUncheckedCreateWithoutRegionsInput> | livreursCreateWithoutRegionsInput[] | livreursUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: livreursCreateOrConnectWithoutRegionsInput | livreursCreateOrConnectWithoutRegionsInput[]
    createMany?: livreursCreateManyRegionsInputEnvelope
    connect?: livreursWhereUniqueInput | livreursWhereUniqueInput[]
  }

  export type adressesUpdateManyWithoutRegionsNestedInput = {
    create?: XOR<adressesCreateWithoutRegionsInput, adressesUncheckedCreateWithoutRegionsInput> | adressesCreateWithoutRegionsInput[] | adressesUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: adressesCreateOrConnectWithoutRegionsInput | adressesCreateOrConnectWithoutRegionsInput[]
    upsert?: adressesUpsertWithWhereUniqueWithoutRegionsInput | adressesUpsertWithWhereUniqueWithoutRegionsInput[]
    createMany?: adressesCreateManyRegionsInputEnvelope
    set?: adressesWhereUniqueInput | adressesWhereUniqueInput[]
    disconnect?: adressesWhereUniqueInput | adressesWhereUniqueInput[]
    delete?: adressesWhereUniqueInput | adressesWhereUniqueInput[]
    connect?: adressesWhereUniqueInput | adressesWhereUniqueInput[]
    update?: adressesUpdateWithWhereUniqueWithoutRegionsInput | adressesUpdateWithWhereUniqueWithoutRegionsInput[]
    updateMany?: adressesUpdateManyWithWhereWithoutRegionsInput | adressesUpdateManyWithWhereWithoutRegionsInput[]
    deleteMany?: adressesScalarWhereInput | adressesScalarWhereInput[]
  }

  export type CommandeUpdateManyWithoutRegionsNestedInput = {
    create?: XOR<CommandeCreateWithoutRegionsInput, CommandeUncheckedCreateWithoutRegionsInput> | CommandeCreateWithoutRegionsInput[] | CommandeUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutRegionsInput | CommandeCreateOrConnectWithoutRegionsInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutRegionsInput | CommandeUpsertWithWhereUniqueWithoutRegionsInput[]
    createMany?: CommandeCreateManyRegionsInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutRegionsInput | CommandeUpdateWithWhereUniqueWithoutRegionsInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutRegionsInput | CommandeUpdateManyWithWhereWithoutRegionsInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type GIEUpdateManyWithoutRegionsNestedInput = {
    create?: XOR<GIECreateWithoutRegionsInput, GIEUncheckedCreateWithoutRegionsInput> | GIECreateWithoutRegionsInput[] | GIEUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: GIECreateOrConnectWithoutRegionsInput | GIECreateOrConnectWithoutRegionsInput[]
    upsert?: GIEUpsertWithWhereUniqueWithoutRegionsInput | GIEUpsertWithWhereUniqueWithoutRegionsInput[]
    createMany?: GIECreateManyRegionsInputEnvelope
    set?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
    disconnect?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
    delete?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
    connect?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
    update?: GIEUpdateWithWhereUniqueWithoutRegionsInput | GIEUpdateWithWhereUniqueWithoutRegionsInput[]
    updateMany?: GIEUpdateManyWithWhereWithoutRegionsInput | GIEUpdateManyWithWhereWithoutRegionsInput[]
    deleteMany?: GIEScalarWhereInput | GIEScalarWhereInput[]
  }

  export type livreursUpdateManyWithoutRegionsNestedInput = {
    create?: XOR<livreursCreateWithoutRegionsInput, livreursUncheckedCreateWithoutRegionsInput> | livreursCreateWithoutRegionsInput[] | livreursUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: livreursCreateOrConnectWithoutRegionsInput | livreursCreateOrConnectWithoutRegionsInput[]
    upsert?: livreursUpsertWithWhereUniqueWithoutRegionsInput | livreursUpsertWithWhereUniqueWithoutRegionsInput[]
    createMany?: livreursCreateManyRegionsInputEnvelope
    set?: livreursWhereUniqueInput | livreursWhereUniqueInput[]
    disconnect?: livreursWhereUniqueInput | livreursWhereUniqueInput[]
    delete?: livreursWhereUniqueInput | livreursWhereUniqueInput[]
    connect?: livreursWhereUniqueInput | livreursWhereUniqueInput[]
    update?: livreursUpdateWithWhereUniqueWithoutRegionsInput | livreursUpdateWithWhereUniqueWithoutRegionsInput[]
    updateMany?: livreursUpdateManyWithWhereWithoutRegionsInput | livreursUpdateManyWithWhereWithoutRegionsInput[]
    deleteMany?: livreursScalarWhereInput | livreursScalarWhereInput[]
  }

  export type adressesUncheckedUpdateManyWithoutRegionsNestedInput = {
    create?: XOR<adressesCreateWithoutRegionsInput, adressesUncheckedCreateWithoutRegionsInput> | adressesCreateWithoutRegionsInput[] | adressesUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: adressesCreateOrConnectWithoutRegionsInput | adressesCreateOrConnectWithoutRegionsInput[]
    upsert?: adressesUpsertWithWhereUniqueWithoutRegionsInput | adressesUpsertWithWhereUniqueWithoutRegionsInput[]
    createMany?: adressesCreateManyRegionsInputEnvelope
    set?: adressesWhereUniqueInput | adressesWhereUniqueInput[]
    disconnect?: adressesWhereUniqueInput | adressesWhereUniqueInput[]
    delete?: adressesWhereUniqueInput | adressesWhereUniqueInput[]
    connect?: adressesWhereUniqueInput | adressesWhereUniqueInput[]
    update?: adressesUpdateWithWhereUniqueWithoutRegionsInput | adressesUpdateWithWhereUniqueWithoutRegionsInput[]
    updateMany?: adressesUpdateManyWithWhereWithoutRegionsInput | adressesUpdateManyWithWhereWithoutRegionsInput[]
    deleteMany?: adressesScalarWhereInput | adressesScalarWhereInput[]
  }

  export type CommandeUncheckedUpdateManyWithoutRegionsNestedInput = {
    create?: XOR<CommandeCreateWithoutRegionsInput, CommandeUncheckedCreateWithoutRegionsInput> | CommandeCreateWithoutRegionsInput[] | CommandeUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: CommandeCreateOrConnectWithoutRegionsInput | CommandeCreateOrConnectWithoutRegionsInput[]
    upsert?: CommandeUpsertWithWhereUniqueWithoutRegionsInput | CommandeUpsertWithWhereUniqueWithoutRegionsInput[]
    createMany?: CommandeCreateManyRegionsInputEnvelope
    set?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    disconnect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    delete?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    connect?: CommandeWhereUniqueInput | CommandeWhereUniqueInput[]
    update?: CommandeUpdateWithWhereUniqueWithoutRegionsInput | CommandeUpdateWithWhereUniqueWithoutRegionsInput[]
    updateMany?: CommandeUpdateManyWithWhereWithoutRegionsInput | CommandeUpdateManyWithWhereWithoutRegionsInput[]
    deleteMany?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
  }

  export type GIEUncheckedUpdateManyWithoutRegionsNestedInput = {
    create?: XOR<GIECreateWithoutRegionsInput, GIEUncheckedCreateWithoutRegionsInput> | GIECreateWithoutRegionsInput[] | GIEUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: GIECreateOrConnectWithoutRegionsInput | GIECreateOrConnectWithoutRegionsInput[]
    upsert?: GIEUpsertWithWhereUniqueWithoutRegionsInput | GIEUpsertWithWhereUniqueWithoutRegionsInput[]
    createMany?: GIECreateManyRegionsInputEnvelope
    set?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
    disconnect?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
    delete?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
    connect?: GIEWhereUniqueInput | GIEWhereUniqueInput[]
    update?: GIEUpdateWithWhereUniqueWithoutRegionsInput | GIEUpdateWithWhereUniqueWithoutRegionsInput[]
    updateMany?: GIEUpdateManyWithWhereWithoutRegionsInput | GIEUpdateManyWithWhereWithoutRegionsInput[]
    deleteMany?: GIEScalarWhereInput | GIEScalarWhereInput[]
  }

  export type livreursUncheckedUpdateManyWithoutRegionsNestedInput = {
    create?: XOR<livreursCreateWithoutRegionsInput, livreursUncheckedCreateWithoutRegionsInput> | livreursCreateWithoutRegionsInput[] | livreursUncheckedCreateWithoutRegionsInput[]
    connectOrCreate?: livreursCreateOrConnectWithoutRegionsInput | livreursCreateOrConnectWithoutRegionsInput[]
    upsert?: livreursUpsertWithWhereUniqueWithoutRegionsInput | livreursUpsertWithWhereUniqueWithoutRegionsInput[]
    createMany?: livreursCreateManyRegionsInputEnvelope
    set?: livreursWhereUniqueInput | livreursWhereUniqueInput[]
    disconnect?: livreursWhereUniqueInput | livreursWhereUniqueInput[]
    delete?: livreursWhereUniqueInput | livreursWhereUniqueInput[]
    connect?: livreursWhereUniqueInput | livreursWhereUniqueInput[]
    update?: livreursUpdateWithWhereUniqueWithoutRegionsInput | livreursUpdateWithWhereUniqueWithoutRegionsInput[]
    updateMany?: livreursUpdateManyWithWhereWithoutRegionsInput | livreursUpdateManyWithWhereWithoutRegionsInput[]
    deleteMany?: livreursScalarWhereInput | livreursScalarWhereInput[]
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumStatutGIEFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutGIE | EnumStatutGIEFieldRefInput<$PrismaModel>
    in?: $Enums.StatutGIE[] | ListEnumStatutGIEFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutGIE[] | ListEnumStatutGIEFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutGIEFilter<$PrismaModel> | $Enums.StatutGIE
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatutGIEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutGIE | EnumStatutGIEFieldRefInput<$PrismaModel>
    in?: $Enums.StatutGIE[] | ListEnumStatutGIEFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutGIE[] | ListEnumStatutGIEFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutGIEWithAggregatesFilter<$PrismaModel> | $Enums.StatutGIE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutGIEFilter<$PrismaModel>
    _max?: NestedEnumStatutGIEFilter<$PrismaModel>
  }

  export type NestedEnumStatutClientFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutClient | EnumStatutClientFieldRefInput<$PrismaModel>
    in?: $Enums.StatutClient[] | ListEnumStatutClientFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutClient[] | ListEnumStatutClientFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutClientFilter<$PrismaModel> | $Enums.StatutClient
  }

  export type NestedEnumStatutClientWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutClient | EnumStatutClientFieldRefInput<$PrismaModel>
    in?: $Enums.StatutClient[] | ListEnumStatutClientFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutClient[] | ListEnumStatutClientFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutClientWithAggregatesFilter<$PrismaModel> | $Enums.StatutClient
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutClientFilter<$PrismaModel>
    _max?: NestedEnumStatutClientFilter<$PrismaModel>
  }

  export type NestedEnumStatutProduitFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutProduit | EnumStatutProduitFieldRefInput<$PrismaModel>
    in?: $Enums.StatutProduit[] | ListEnumStatutProduitFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutProduit[] | ListEnumStatutProduitFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutProduitFilter<$PrismaModel> | $Enums.StatutProduit
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumStatutProduitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutProduit | EnumStatutProduitFieldRefInput<$PrismaModel>
    in?: $Enums.StatutProduit[] | ListEnumStatutProduitFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutProduit[] | ListEnumStatutProduitFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutProduitWithAggregatesFilter<$PrismaModel> | $Enums.StatutProduit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutProduitFilter<$PrismaModel>
    _max?: NestedEnumStatutProduitFilter<$PrismaModel>
  }

  export type NestedEnumStatutCommandeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutCommande | EnumStatutCommandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutCommande[] | ListEnumStatutCommandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutCommande[] | ListEnumStatutCommandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutCommandeFilter<$PrismaModel> | $Enums.StatutCommande
  }

  export type NestedEnumStatutCommandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutCommande | EnumStatutCommandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutCommande[] | ListEnumStatutCommandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutCommande[] | ListEnumStatutCommandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutCommandeWithAggregatesFilter<$PrismaModel> | $Enums.StatutCommande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutCommandeFilter<$PrismaModel>
    _max?: NestedEnumStatutCommandeFilter<$PrismaModel>
  }

  export type NestedEnumMethodePaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.MethodePaiement | EnumMethodePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.MethodePaiement[] | ListEnumMethodePaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.MethodePaiement[] | ListEnumMethodePaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumMethodePaiementFilter<$PrismaModel> | $Enums.MethodePaiement
  }

  export type NestedEnumStatutPaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[] | ListEnumStatutPaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutPaiement[] | ListEnumStatutPaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutPaiementFilter<$PrismaModel> | $Enums.StatutPaiement
  }

  export type NestedEnumMethodePaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MethodePaiement | EnumMethodePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.MethodePaiement[] | ListEnumMethodePaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.MethodePaiement[] | ListEnumMethodePaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumMethodePaiementWithAggregatesFilter<$PrismaModel> | $Enums.MethodePaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMethodePaiementFilter<$PrismaModel>
    _max?: NestedEnumMethodePaiementFilter<$PrismaModel>
  }

  export type NestedEnumStatutPaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPaiement | EnumStatutPaiementFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPaiement[] | ListEnumStatutPaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutPaiement[] | ListEnumStatutPaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutPaiementWithAggregatesFilter<$PrismaModel> | $Enums.StatutPaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutPaiementFilter<$PrismaModel>
    _max?: NestedEnumStatutPaiementFilter<$PrismaModel>
  }

  export type NestedEnumStatutGIEProduitFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutGIEProduit | EnumStatutGIEProduitFieldRefInput<$PrismaModel>
    in?: $Enums.StatutGIEProduit[] | ListEnumStatutGIEProduitFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutGIEProduit[] | ListEnumStatutGIEProduitFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutGIEProduitFilter<$PrismaModel> | $Enums.StatutGIEProduit
  }

  export type NestedEnumStatutGIEProduitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutGIEProduit | EnumStatutGIEProduitFieldRefInput<$PrismaModel>
    in?: $Enums.StatutGIEProduit[] | ListEnumStatutGIEProduitFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutGIEProduit[] | ListEnumStatutGIEProduitFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutGIEProduitWithAggregatesFilter<$PrismaModel> | $Enums.StatutGIEProduit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutGIEProduitFilter<$PrismaModel>
    _max?: NestedEnumStatutGIEProduitFilter<$PrismaModel>
  }

  export type NestedEnumStatutLivreurFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutLivreur | EnumStatutLivreurFieldRefInput<$PrismaModel>
    in?: $Enums.StatutLivreur[] | ListEnumStatutLivreurFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutLivreur[] | ListEnumStatutLivreurFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutLivreurFilter<$PrismaModel> | $Enums.StatutLivreur
  }

  export type NestedEnumStatutLivreurWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutLivreur | EnumStatutLivreurFieldRefInput<$PrismaModel>
    in?: $Enums.StatutLivreur[] | ListEnumStatutLivreurFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutLivreur[] | ListEnumStatutLivreurFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutLivreurWithAggregatesFilter<$PrismaModel> | $Enums.StatutLivreur
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutLivreurFilter<$PrismaModel>
    _max?: NestedEnumStatutLivreurFilter<$PrismaModel>
  }

  export type ClientCreateWithoutAdministrateurInput = {
    id?: string
    email?: string | null
    password: string
    nom: string
    prenom: string
    telephone: string
    adresse?: string | null
    statut?: $Enums.StatutClient
    createdAt?: Date | string
    updatedAt?: Date | string
    commandes?: CommandeCreateNestedManyWithoutClientInput
    avis?: AvisCreateNestedManyWithoutClientInput
    avisProduit?: AvisProduitCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutAdministrateurInput = {
    id?: string
    email?: string | null
    password: string
    nom: string
    prenom: string
    telephone: string
    adresse?: string | null
    statut?: $Enums.StatutClient
    createdAt?: Date | string
    updatedAt?: Date | string
    commandes?: CommandeUncheckedCreateNestedManyWithoutClientInput
    avis?: AvisUncheckedCreateNestedManyWithoutClientInput
    avisProduit?: AvisProduitUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAdministrateurInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAdministrateurInput, ClientUncheckedCreateWithoutAdministrateurInput>
  }

  export type ClientCreateManyAdministrateurInputEnvelope = {
    data: ClientCreateManyAdministrateurInput | ClientCreateManyAdministrateurInput[]
    skipDuplicates?: boolean
  }

  export type GIECreateWithoutAdministrateurInput = {
    id?: string
    nom: string
    description?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    password: string
    logo?: string | null
    url?: string | null
    membre?: number | null
    Annee?: Date | string | null
    specialite?: number | null
    statut?: $Enums.StatutGIE
    createdAt?: Date | string
    updatedAt?: Date | string
    regions?: regionsCreateNestedOneWithoutGiesInput
    produits?: ProduitCreateNestedManyWithoutGieInput
  }

  export type GIEUncheckedCreateWithoutAdministrateurInput = {
    id?: string
    nom: string
    description?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    password: string
    logo?: string | null
    url?: string | null
    membre?: number | null
    Annee?: Date | string | null
    specialite?: number | null
    statut?: $Enums.StatutGIE
    createdAt?: Date | string
    updatedAt?: Date | string
    regionId?: string | null
    produits?: ProduitUncheckedCreateNestedManyWithoutGieInput
  }

  export type GIECreateOrConnectWithoutAdministrateurInput = {
    where: GIEWhereUniqueInput
    create: XOR<GIECreateWithoutAdministrateurInput, GIEUncheckedCreateWithoutAdministrateurInput>
  }

  export type GIECreateManyAdministrateurInputEnvelope = {
    data: GIECreateManyAdministrateurInput | GIECreateManyAdministrateurInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithWhereUniqueWithoutAdministrateurInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutAdministrateurInput, ClientUncheckedUpdateWithoutAdministrateurInput>
    create: XOR<ClientCreateWithoutAdministrateurInput, ClientUncheckedCreateWithoutAdministrateurInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutAdministrateurInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutAdministrateurInput, ClientUncheckedUpdateWithoutAdministrateurInput>
  }

  export type ClientUpdateManyWithWhereWithoutAdministrateurInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutAdministrateurInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<"Client"> | string
    email?: StringNullableFilter<"Client"> | string | null
    password?: StringFilter<"Client"> | string
    nom?: StringFilter<"Client"> | string
    prenom?: StringFilter<"Client"> | string
    telephone?: StringFilter<"Client"> | string
    adresse?: StringNullableFilter<"Client"> | string | null
    statut?: EnumStatutClientFilter<"Client"> | $Enums.StatutClient
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    administrateurId?: StringFilter<"Client"> | string
  }

  export type GIEUpsertWithWhereUniqueWithoutAdministrateurInput = {
    where: GIEWhereUniqueInput
    update: XOR<GIEUpdateWithoutAdministrateurInput, GIEUncheckedUpdateWithoutAdministrateurInput>
    create: XOR<GIECreateWithoutAdministrateurInput, GIEUncheckedCreateWithoutAdministrateurInput>
  }

  export type GIEUpdateWithWhereUniqueWithoutAdministrateurInput = {
    where: GIEWhereUniqueInput
    data: XOR<GIEUpdateWithoutAdministrateurInput, GIEUncheckedUpdateWithoutAdministrateurInput>
  }

  export type GIEUpdateManyWithWhereWithoutAdministrateurInput = {
    where: GIEScalarWhereInput
    data: XOR<GIEUpdateManyMutationInput, GIEUncheckedUpdateManyWithoutAdministrateurInput>
  }

  export type GIEScalarWhereInput = {
    AND?: GIEScalarWhereInput | GIEScalarWhereInput[]
    OR?: GIEScalarWhereInput[]
    NOT?: GIEScalarWhereInput | GIEScalarWhereInput[]
    id?: StringFilter<"GIE"> | string
    nom?: StringFilter<"GIE"> | string
    description?: StringNullableFilter<"GIE"> | string | null
    adresse?: StringNullableFilter<"GIE"> | string | null
    telephone?: StringNullableFilter<"GIE"> | string | null
    email?: StringNullableFilter<"GIE"> | string | null
    password?: StringFilter<"GIE"> | string
    logo?: StringNullableFilter<"GIE"> | string | null
    url?: StringNullableFilter<"GIE"> | string | null
    membre?: IntNullableFilter<"GIE"> | number | null
    Annee?: DateTimeNullableFilter<"GIE"> | Date | string | null
    specialite?: IntNullableFilter<"GIE"> | number | null
    statut?: EnumStatutGIEFilter<"GIE"> | $Enums.StatutGIE
    createdAt?: DateTimeFilter<"GIE"> | Date | string
    updatedAt?: DateTimeFilter<"GIE"> | Date | string
    administrateurId?: StringFilter<"GIE"> | string
    regionId?: StringNullableFilter<"GIE"> | string | null
  }

  export type ClientCreateWithoutAvisInput = {
    id?: string
    email?: string | null
    password: string
    nom: string
    prenom: string
    telephone: string
    adresse?: string | null
    statut?: $Enums.StatutClient
    createdAt?: Date | string
    updatedAt?: Date | string
    administrateur: AdministrateurCreateNestedOneWithoutClientsInput
    commandes?: CommandeCreateNestedManyWithoutClientInput
    avisProduit?: AvisProduitCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutAvisInput = {
    id?: string
    email?: string | null
    password: string
    nom: string
    prenom: string
    telephone: string
    adresse?: string | null
    statut?: $Enums.StatutClient
    createdAt?: Date | string
    updatedAt?: Date | string
    administrateurId: string
    commandes?: CommandeUncheckedCreateNestedManyWithoutClientInput
    avisProduit?: AvisProduitUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAvisInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAvisInput, ClientUncheckedCreateWithoutAvisInput>
  }

  export type ClientUpsertWithoutAvisInput = {
    update: XOR<ClientUpdateWithoutAvisInput, ClientUncheckedUpdateWithoutAvisInput>
    create: XOR<ClientCreateWithoutAvisInput, ClientUncheckedCreateWithoutAvisInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutAvisInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutAvisInput, ClientUncheckedUpdateWithoutAvisInput>
  }

  export type ClientUpdateWithoutAvisInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrateur?: AdministrateurUpdateOneRequiredWithoutClientsNestedInput
    commandes?: CommandeUpdateManyWithoutClientNestedInput
    avisProduit?: AvisProduitUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutAvisInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrateurId?: StringFieldUpdateOperationsInput | string
    commandes?: CommandeUncheckedUpdateManyWithoutClientNestedInput
    avisProduit?: AvisProduitUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutAvisProduitInput = {
    id?: string
    email?: string | null
    password: string
    nom: string
    prenom: string
    telephone: string
    adresse?: string | null
    statut?: $Enums.StatutClient
    createdAt?: Date | string
    updatedAt?: Date | string
    administrateur: AdministrateurCreateNestedOneWithoutClientsInput
    commandes?: CommandeCreateNestedManyWithoutClientInput
    avis?: AvisCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutAvisProduitInput = {
    id?: string
    email?: string | null
    password: string
    nom: string
    prenom: string
    telephone: string
    adresse?: string | null
    statut?: $Enums.StatutClient
    createdAt?: Date | string
    updatedAt?: Date | string
    administrateurId: string
    commandes?: CommandeUncheckedCreateNestedManyWithoutClientInput
    avis?: AvisUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAvisProduitInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAvisProduitInput, ClientUncheckedCreateWithoutAvisProduitInput>
  }

  export type ProduitCreateWithoutAvisProduitInput = {
    id?: string
    nom: string
    quantite?: string
    description?: string | null
    prix: number
    stock?: number
    image?: string | null
    statut?: $Enums.StatutProduit
    createdAt?: Date | string
    updatedAt?: Date | string
    panierProduits?: PanierProduitCreateNestedManyWithoutProduitInput
    categorie?: CategorieCreateNestedOneWithoutProduitsInput
    gie: GIECreateNestedOneWithoutProduitsInput
  }

  export type ProduitUncheckedCreateWithoutAvisProduitInput = {
    id?: string
    nom: string
    quantite?: string
    description?: string | null
    prix: number
    stock?: number
    image?: string | null
    statut?: $Enums.StatutProduit
    createdAt?: Date | string
    updatedAt?: Date | string
    gieId: string
    categorieId?: string | null
    panierProduits?: PanierProduitUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitCreateOrConnectWithoutAvisProduitInput = {
    where: ProduitWhereUniqueInput
    create: XOR<ProduitCreateWithoutAvisProduitInput, ProduitUncheckedCreateWithoutAvisProduitInput>
  }

  export type ClientUpsertWithoutAvisProduitInput = {
    update: XOR<ClientUpdateWithoutAvisProduitInput, ClientUncheckedUpdateWithoutAvisProduitInput>
    create: XOR<ClientCreateWithoutAvisProduitInput, ClientUncheckedCreateWithoutAvisProduitInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutAvisProduitInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutAvisProduitInput, ClientUncheckedUpdateWithoutAvisProduitInput>
  }

  export type ClientUpdateWithoutAvisProduitInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrateur?: AdministrateurUpdateOneRequiredWithoutClientsNestedInput
    commandes?: CommandeUpdateManyWithoutClientNestedInput
    avis?: AvisUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutAvisProduitInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrateurId?: StringFieldUpdateOperationsInput | string
    commandes?: CommandeUncheckedUpdateManyWithoutClientNestedInput
    avis?: AvisUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ProduitUpsertWithoutAvisProduitInput = {
    update: XOR<ProduitUpdateWithoutAvisProduitInput, ProduitUncheckedUpdateWithoutAvisProduitInput>
    create: XOR<ProduitCreateWithoutAvisProduitInput, ProduitUncheckedCreateWithoutAvisProduitInput>
    where?: ProduitWhereInput
  }

  export type ProduitUpdateToOneWithWhereWithoutAvisProduitInput = {
    where?: ProduitWhereInput
    data: XOR<ProduitUpdateWithoutAvisProduitInput, ProduitUncheckedUpdateWithoutAvisProduitInput>
  }

  export type ProduitUpdateWithoutAvisProduitInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panierProduits?: PanierProduitUpdateManyWithoutProduitNestedInput
    categorie?: CategorieUpdateOneWithoutProduitsNestedInput
    gie?: GIEUpdateOneRequiredWithoutProduitsNestedInput
  }

  export type ProduitUncheckedUpdateWithoutAvisProduitInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gieId?: StringFieldUpdateOperationsInput | string
    categorieId?: NullableStringFieldUpdateOperationsInput | string | null
    panierProduits?: PanierProduitUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type AdministrateurCreateWithoutGiesInput = {
    id?: string
    email: string
    password: string
    nom: string
    prenom: string
    telephone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientCreateNestedManyWithoutAdministrateurInput
  }

  export type AdministrateurUncheckedCreateWithoutGiesInput = {
    id?: string
    email: string
    password: string
    nom: string
    prenom: string
    telephone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    clients?: ClientUncheckedCreateNestedManyWithoutAdministrateurInput
  }

  export type AdministrateurCreateOrConnectWithoutGiesInput = {
    where: AdministrateurWhereUniqueInput
    create: XOR<AdministrateurCreateWithoutGiesInput, AdministrateurUncheckedCreateWithoutGiesInput>
  }

  export type regionsCreateWithoutGiesInput = {
    id: string
    nom: string
    description?: string | null
    fraisLivraisonInterne?: number
    fraisLivraisonExterne?: number
    createdAt?: Date | string
    updatedAt: Date | string
    adresses?: adressesCreateNestedManyWithoutRegionsInput
    commandes?: CommandeCreateNestedManyWithoutRegionsInput
    livreurs?: livreursCreateNestedManyWithoutRegionsInput
  }

  export type regionsUncheckedCreateWithoutGiesInput = {
    id: string
    nom: string
    description?: string | null
    fraisLivraisonInterne?: number
    fraisLivraisonExterne?: number
    createdAt?: Date | string
    updatedAt: Date | string
    adresses?: adressesUncheckedCreateNestedManyWithoutRegionsInput
    commandes?: CommandeUncheckedCreateNestedManyWithoutRegionsInput
    livreurs?: livreursUncheckedCreateNestedManyWithoutRegionsInput
  }

  export type regionsCreateOrConnectWithoutGiesInput = {
    where: regionsWhereUniqueInput
    create: XOR<regionsCreateWithoutGiesInput, regionsUncheckedCreateWithoutGiesInput>
  }

  export type ProduitCreateWithoutGieInput = {
    id?: string
    nom: string
    quantite?: string
    description?: string | null
    prix: number
    stock?: number
    image?: string | null
    statut?: $Enums.StatutProduit
    createdAt?: Date | string
    updatedAt?: Date | string
    panierProduits?: PanierProduitCreateNestedManyWithoutProduitInput
    categorie?: CategorieCreateNestedOneWithoutProduitsInput
    avisProduit?: AvisProduitCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateWithoutGieInput = {
    id?: string
    nom: string
    quantite?: string
    description?: string | null
    prix: number
    stock?: number
    image?: string | null
    statut?: $Enums.StatutProduit
    createdAt?: Date | string
    updatedAt?: Date | string
    categorieId?: string | null
    panierProduits?: PanierProduitUncheckedCreateNestedManyWithoutProduitInput
    avisProduit?: AvisProduitUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitCreateOrConnectWithoutGieInput = {
    where: ProduitWhereUniqueInput
    create: XOR<ProduitCreateWithoutGieInput, ProduitUncheckedCreateWithoutGieInput>
  }

  export type ProduitCreateManyGieInputEnvelope = {
    data: ProduitCreateManyGieInput | ProduitCreateManyGieInput[]
    skipDuplicates?: boolean
  }

  export type AdministrateurUpsertWithoutGiesInput = {
    update: XOR<AdministrateurUpdateWithoutGiesInput, AdministrateurUncheckedUpdateWithoutGiesInput>
    create: XOR<AdministrateurCreateWithoutGiesInput, AdministrateurUncheckedCreateWithoutGiesInput>
    where?: AdministrateurWhereInput
  }

  export type AdministrateurUpdateToOneWithWhereWithoutGiesInput = {
    where?: AdministrateurWhereInput
    data: XOR<AdministrateurUpdateWithoutGiesInput, AdministrateurUncheckedUpdateWithoutGiesInput>
  }

  export type AdministrateurUpdateWithoutGiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUpdateManyWithoutAdministrateurNestedInput
  }

  export type AdministrateurUncheckedUpdateWithoutGiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clients?: ClientUncheckedUpdateManyWithoutAdministrateurNestedInput
  }

  export type regionsUpsertWithoutGiesInput = {
    update: XOR<regionsUpdateWithoutGiesInput, regionsUncheckedUpdateWithoutGiesInput>
    create: XOR<regionsCreateWithoutGiesInput, regionsUncheckedCreateWithoutGiesInput>
    where?: regionsWhereInput
  }

  export type regionsUpdateToOneWithWhereWithoutGiesInput = {
    where?: regionsWhereInput
    data: XOR<regionsUpdateWithoutGiesInput, regionsUncheckedUpdateWithoutGiesInput>
  }

  export type regionsUpdateWithoutGiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraisonInterne?: FloatFieldUpdateOperationsInput | number
    fraisLivraisonExterne?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adresses?: adressesUpdateManyWithoutRegionsNestedInput
    commandes?: CommandeUpdateManyWithoutRegionsNestedInput
    livreurs?: livreursUpdateManyWithoutRegionsNestedInput
  }

  export type regionsUncheckedUpdateWithoutGiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraisonInterne?: FloatFieldUpdateOperationsInput | number
    fraisLivraisonExterne?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adresses?: adressesUncheckedUpdateManyWithoutRegionsNestedInput
    commandes?: CommandeUncheckedUpdateManyWithoutRegionsNestedInput
    livreurs?: livreursUncheckedUpdateManyWithoutRegionsNestedInput
  }

  export type ProduitUpsertWithWhereUniqueWithoutGieInput = {
    where: ProduitWhereUniqueInput
    update: XOR<ProduitUpdateWithoutGieInput, ProduitUncheckedUpdateWithoutGieInput>
    create: XOR<ProduitCreateWithoutGieInput, ProduitUncheckedCreateWithoutGieInput>
  }

  export type ProduitUpdateWithWhereUniqueWithoutGieInput = {
    where: ProduitWhereUniqueInput
    data: XOR<ProduitUpdateWithoutGieInput, ProduitUncheckedUpdateWithoutGieInput>
  }

  export type ProduitUpdateManyWithWhereWithoutGieInput = {
    where: ProduitScalarWhereInput
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyWithoutGieInput>
  }

  export type ProduitScalarWhereInput = {
    AND?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
    OR?: ProduitScalarWhereInput[]
    NOT?: ProduitScalarWhereInput | ProduitScalarWhereInput[]
    id?: StringFilter<"Produit"> | string
    nom?: StringFilter<"Produit"> | string
    quantite?: StringFilter<"Produit"> | string
    description?: StringNullableFilter<"Produit"> | string | null
    prix?: FloatFilter<"Produit"> | number
    stock?: IntFilter<"Produit"> | number
    image?: StringNullableFilter<"Produit"> | string | null
    statut?: EnumStatutProduitFilter<"Produit"> | $Enums.StatutProduit
    createdAt?: DateTimeFilter<"Produit"> | Date | string
    updatedAt?: DateTimeFilter<"Produit"> | Date | string
    gieId?: StringFilter<"Produit"> | string
    categorieId?: StringNullableFilter<"Produit"> | string | null
  }

  export type AdministrateurCreateWithoutClientsInput = {
    id?: string
    email: string
    password: string
    nom: string
    prenom: string
    telephone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    gies?: GIECreateNestedManyWithoutAdministrateurInput
  }

  export type AdministrateurUncheckedCreateWithoutClientsInput = {
    id?: string
    email: string
    password: string
    nom: string
    prenom: string
    telephone?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    gies?: GIEUncheckedCreateNestedManyWithoutAdministrateurInput
  }

  export type AdministrateurCreateOrConnectWithoutClientsInput = {
    where: AdministrateurWhereUniqueInput
    create: XOR<AdministrateurCreateWithoutClientsInput, AdministrateurUncheckedCreateWithoutClientsInput>
  }

  export type CommandeCreateWithoutClientInput = {
    id?: string
    numero: string
    montant: number
    statut?: $Enums.StatutCommande
    dateCommande?: Date | string
    dateLivraison?: Date | string | null
    adresseLivraison?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fraisLivraison?: number
    livreurs?: livreursCreateNestedOneWithoutCommandesInput
    regions?: regionsCreateNestedOneWithoutCommandesInput
    paiement?: PaiementCreateNestedOneWithoutCommandeInput
    panierProduits?: PanierProduitCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateWithoutClientInput = {
    id?: string
    numero: string
    montant: number
    statut?: $Enums.StatutCommande
    dateCommande?: Date | string
    dateLivraison?: Date | string | null
    adresseLivraison?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fraisLivraison?: number
    regionLivraisonId?: string | null
    livreurId?: string | null
    paiement?: PaiementUncheckedCreateNestedOneWithoutCommandeInput
    panierProduits?: PanierProduitUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeCreateOrConnectWithoutClientInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput>
  }

  export type CommandeCreateManyClientInputEnvelope = {
    data: CommandeCreateManyClientInput | CommandeCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type AvisCreateWithoutClientInput = {
    id?: string
    nom?: string | null
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvisUncheckedCreateWithoutClientInput = {
    id?: string
    nom?: string | null
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvisCreateOrConnectWithoutClientInput = {
    where: AvisWhereUniqueInput
    create: XOR<AvisCreateWithoutClientInput, AvisUncheckedCreateWithoutClientInput>
  }

  export type AvisCreateManyClientInputEnvelope = {
    data: AvisCreateManyClientInput | AvisCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type AvisProduitCreateWithoutClientInput = {
    id?: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    produit: ProduitCreateNestedOneWithoutAvisProduitInput
  }

  export type AvisProduitUncheckedCreateWithoutClientInput = {
    id?: string
    produitId: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvisProduitCreateOrConnectWithoutClientInput = {
    where: AvisProduitWhereUniqueInput
    create: XOR<AvisProduitCreateWithoutClientInput, AvisProduitUncheckedCreateWithoutClientInput>
  }

  export type AvisProduitCreateManyClientInputEnvelope = {
    data: AvisProduitCreateManyClientInput | AvisProduitCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type AdministrateurUpsertWithoutClientsInput = {
    update: XOR<AdministrateurUpdateWithoutClientsInput, AdministrateurUncheckedUpdateWithoutClientsInput>
    create: XOR<AdministrateurCreateWithoutClientsInput, AdministrateurUncheckedCreateWithoutClientsInput>
    where?: AdministrateurWhereInput
  }

  export type AdministrateurUpdateToOneWithWhereWithoutClientsInput = {
    where?: AdministrateurWhereInput
    data: XOR<AdministrateurUpdateWithoutClientsInput, AdministrateurUncheckedUpdateWithoutClientsInput>
  }

  export type AdministrateurUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gies?: GIEUpdateManyWithoutAdministrateurNestedInput
  }

  export type AdministrateurUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gies?: GIEUncheckedUpdateManyWithoutAdministrateurNestedInput
  }

  export type CommandeUpsertWithWhereUniqueWithoutClientInput = {
    where: CommandeWhereUniqueInput
    update: XOR<CommandeUpdateWithoutClientInput, CommandeUncheckedUpdateWithoutClientInput>
    create: XOR<CommandeCreateWithoutClientInput, CommandeUncheckedCreateWithoutClientInput>
  }

  export type CommandeUpdateWithWhereUniqueWithoutClientInput = {
    where: CommandeWhereUniqueInput
    data: XOR<CommandeUpdateWithoutClientInput, CommandeUncheckedUpdateWithoutClientInput>
  }

  export type CommandeUpdateManyWithWhereWithoutClientInput = {
    where: CommandeScalarWhereInput
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyWithoutClientInput>
  }

  export type CommandeScalarWhereInput = {
    AND?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
    OR?: CommandeScalarWhereInput[]
    NOT?: CommandeScalarWhereInput | CommandeScalarWhereInput[]
    id?: StringFilter<"Commande"> | string
    numero?: StringFilter<"Commande"> | string
    montant?: FloatFilter<"Commande"> | number
    statut?: EnumStatutCommandeFilter<"Commande"> | $Enums.StatutCommande
    dateCommande?: DateTimeFilter<"Commande"> | Date | string
    dateLivraison?: DateTimeNullableFilter<"Commande"> | Date | string | null
    adresseLivraison?: StringNullableFilter<"Commande"> | string | null
    createdAt?: DateTimeFilter<"Commande"> | Date | string
    updatedAt?: DateTimeFilter<"Commande"> | Date | string
    clientId?: StringFilter<"Commande"> | string
    fraisLivraison?: FloatFilter<"Commande"> | number
    regionLivraisonId?: StringNullableFilter<"Commande"> | string | null
    livreurId?: StringNullableFilter<"Commande"> | string | null
  }

  export type AvisUpsertWithWhereUniqueWithoutClientInput = {
    where: AvisWhereUniqueInput
    update: XOR<AvisUpdateWithoutClientInput, AvisUncheckedUpdateWithoutClientInput>
    create: XOR<AvisCreateWithoutClientInput, AvisUncheckedCreateWithoutClientInput>
  }

  export type AvisUpdateWithWhereUniqueWithoutClientInput = {
    where: AvisWhereUniqueInput
    data: XOR<AvisUpdateWithoutClientInput, AvisUncheckedUpdateWithoutClientInput>
  }

  export type AvisUpdateManyWithWhereWithoutClientInput = {
    where: AvisScalarWhereInput
    data: XOR<AvisUpdateManyMutationInput, AvisUncheckedUpdateManyWithoutClientInput>
  }

  export type AvisScalarWhereInput = {
    AND?: AvisScalarWhereInput | AvisScalarWhereInput[]
    OR?: AvisScalarWhereInput[]
    NOT?: AvisScalarWhereInput | AvisScalarWhereInput[]
    id?: StringFilter<"Avis"> | string
    clientId?: StringFilter<"Avis"> | string
    nom?: StringNullableFilter<"Avis"> | string | null
    rating?: IntFilter<"Avis"> | number
    comment?: StringNullableFilter<"Avis"> | string | null
    createdAt?: DateTimeFilter<"Avis"> | Date | string
    updatedAt?: DateTimeFilter<"Avis"> | Date | string
  }

  export type AvisProduitUpsertWithWhereUniqueWithoutClientInput = {
    where: AvisProduitWhereUniqueInput
    update: XOR<AvisProduitUpdateWithoutClientInput, AvisProduitUncheckedUpdateWithoutClientInput>
    create: XOR<AvisProduitCreateWithoutClientInput, AvisProduitUncheckedCreateWithoutClientInput>
  }

  export type AvisProduitUpdateWithWhereUniqueWithoutClientInput = {
    where: AvisProduitWhereUniqueInput
    data: XOR<AvisProduitUpdateWithoutClientInput, AvisProduitUncheckedUpdateWithoutClientInput>
  }

  export type AvisProduitUpdateManyWithWhereWithoutClientInput = {
    where: AvisProduitScalarWhereInput
    data: XOR<AvisProduitUpdateManyMutationInput, AvisProduitUncheckedUpdateManyWithoutClientInput>
  }

  export type AvisProduitScalarWhereInput = {
    AND?: AvisProduitScalarWhereInput | AvisProduitScalarWhereInput[]
    OR?: AvisProduitScalarWhereInput[]
    NOT?: AvisProduitScalarWhereInput | AvisProduitScalarWhereInput[]
    id?: StringFilter<"AvisProduit"> | string
    clientId?: StringFilter<"AvisProduit"> | string
    produitId?: StringFilter<"AvisProduit"> | string
    rating?: IntFilter<"AvisProduit"> | number
    createdAt?: DateTimeFilter<"AvisProduit"> | Date | string
    updatedAt?: DateTimeFilter<"AvisProduit"> | Date | string
  }

  export type ProduitCreateWithoutCategorieInput = {
    id?: string
    nom: string
    quantite?: string
    description?: string | null
    prix: number
    stock?: number
    image?: string | null
    statut?: $Enums.StatutProduit
    createdAt?: Date | string
    updatedAt?: Date | string
    panierProduits?: PanierProduitCreateNestedManyWithoutProduitInput
    gie: GIECreateNestedOneWithoutProduitsInput
    avisProduit?: AvisProduitCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateWithoutCategorieInput = {
    id?: string
    nom: string
    quantite?: string
    description?: string | null
    prix: number
    stock?: number
    image?: string | null
    statut?: $Enums.StatutProduit
    createdAt?: Date | string
    updatedAt?: Date | string
    gieId: string
    panierProduits?: PanierProduitUncheckedCreateNestedManyWithoutProduitInput
    avisProduit?: AvisProduitUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitCreateOrConnectWithoutCategorieInput = {
    where: ProduitWhereUniqueInput
    create: XOR<ProduitCreateWithoutCategorieInput, ProduitUncheckedCreateWithoutCategorieInput>
  }

  export type ProduitCreateManyCategorieInputEnvelope = {
    data: ProduitCreateManyCategorieInput | ProduitCreateManyCategorieInput[]
    skipDuplicates?: boolean
  }

  export type ProduitUpsertWithWhereUniqueWithoutCategorieInput = {
    where: ProduitWhereUniqueInput
    update: XOR<ProduitUpdateWithoutCategorieInput, ProduitUncheckedUpdateWithoutCategorieInput>
    create: XOR<ProduitCreateWithoutCategorieInput, ProduitUncheckedCreateWithoutCategorieInput>
  }

  export type ProduitUpdateWithWhereUniqueWithoutCategorieInput = {
    where: ProduitWhereUniqueInput
    data: XOR<ProduitUpdateWithoutCategorieInput, ProduitUncheckedUpdateWithoutCategorieInput>
  }

  export type ProduitUpdateManyWithWhereWithoutCategorieInput = {
    where: ProduitScalarWhereInput
    data: XOR<ProduitUpdateManyMutationInput, ProduitUncheckedUpdateManyWithoutCategorieInput>
  }

  export type PanierProduitCreateWithoutProduitInput = {
    id?: string
    quantite: number
    prixUnitaire: number
    createdAt?: Date | string
    statutGIE?: $Enums.StatutGIEProduit
    dateConfirmation?: Date | string | null
    updatedAt?: Date | string
    commande: CommandeCreateNestedOneWithoutPanierProduitsInput
  }

  export type PanierProduitUncheckedCreateWithoutProduitInput = {
    id?: string
    quantite: number
    prixUnitaire: number
    createdAt?: Date | string
    commandeId: string
    statutGIE?: $Enums.StatutGIEProduit
    dateConfirmation?: Date | string | null
    updatedAt?: Date | string
  }

  export type PanierProduitCreateOrConnectWithoutProduitInput = {
    where: PanierProduitWhereUniqueInput
    create: XOR<PanierProduitCreateWithoutProduitInput, PanierProduitUncheckedCreateWithoutProduitInput>
  }

  export type PanierProduitCreateManyProduitInputEnvelope = {
    data: PanierProduitCreateManyProduitInput | PanierProduitCreateManyProduitInput[]
    skipDuplicates?: boolean
  }

  export type CategorieCreateWithoutProduitsInput = {
    id?: string
    nom: string
    description?: string | null
    conservation?: string | null
    couleur?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
  }

  export type CategorieUncheckedCreateWithoutProduitsInput = {
    id?: string
    nom: string
    description?: string | null
    conservation?: string | null
    couleur?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: string | null
  }

  export type CategorieCreateOrConnectWithoutProduitsInput = {
    where: CategorieWhereUniqueInput
    create: XOR<CategorieCreateWithoutProduitsInput, CategorieUncheckedCreateWithoutProduitsInput>
  }

  export type GIECreateWithoutProduitsInput = {
    id?: string
    nom: string
    description?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    password: string
    logo?: string | null
    url?: string | null
    membre?: number | null
    Annee?: Date | string | null
    specialite?: number | null
    statut?: $Enums.StatutGIE
    createdAt?: Date | string
    updatedAt?: Date | string
    administrateur: AdministrateurCreateNestedOneWithoutGiesInput
    regions?: regionsCreateNestedOneWithoutGiesInput
  }

  export type GIEUncheckedCreateWithoutProduitsInput = {
    id?: string
    nom: string
    description?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    password: string
    logo?: string | null
    url?: string | null
    membre?: number | null
    Annee?: Date | string | null
    specialite?: number | null
    statut?: $Enums.StatutGIE
    createdAt?: Date | string
    updatedAt?: Date | string
    administrateurId: string
    regionId?: string | null
  }

  export type GIECreateOrConnectWithoutProduitsInput = {
    where: GIEWhereUniqueInput
    create: XOR<GIECreateWithoutProduitsInput, GIEUncheckedCreateWithoutProduitsInput>
  }

  export type AvisProduitCreateWithoutProduitInput = {
    id?: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    client: ClientCreateNestedOneWithoutAvisProduitInput
  }

  export type AvisProduitUncheckedCreateWithoutProduitInput = {
    id?: string
    clientId: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvisProduitCreateOrConnectWithoutProduitInput = {
    where: AvisProduitWhereUniqueInput
    create: XOR<AvisProduitCreateWithoutProduitInput, AvisProduitUncheckedCreateWithoutProduitInput>
  }

  export type AvisProduitCreateManyProduitInputEnvelope = {
    data: AvisProduitCreateManyProduitInput | AvisProduitCreateManyProduitInput[]
    skipDuplicates?: boolean
  }

  export type PanierProduitUpsertWithWhereUniqueWithoutProduitInput = {
    where: PanierProduitWhereUniqueInput
    update: XOR<PanierProduitUpdateWithoutProduitInput, PanierProduitUncheckedUpdateWithoutProduitInput>
    create: XOR<PanierProduitCreateWithoutProduitInput, PanierProduitUncheckedCreateWithoutProduitInput>
  }

  export type PanierProduitUpdateWithWhereUniqueWithoutProduitInput = {
    where: PanierProduitWhereUniqueInput
    data: XOR<PanierProduitUpdateWithoutProduitInput, PanierProduitUncheckedUpdateWithoutProduitInput>
  }

  export type PanierProduitUpdateManyWithWhereWithoutProduitInput = {
    where: PanierProduitScalarWhereInput
    data: XOR<PanierProduitUpdateManyMutationInput, PanierProduitUncheckedUpdateManyWithoutProduitInput>
  }

  export type PanierProduitScalarWhereInput = {
    AND?: PanierProduitScalarWhereInput | PanierProduitScalarWhereInput[]
    OR?: PanierProduitScalarWhereInput[]
    NOT?: PanierProduitScalarWhereInput | PanierProduitScalarWhereInput[]
    id?: StringFilter<"PanierProduit"> | string
    quantite?: IntFilter<"PanierProduit"> | number
    prixUnitaire?: FloatFilter<"PanierProduit"> | number
    createdAt?: DateTimeFilter<"PanierProduit"> | Date | string
    commandeId?: StringFilter<"PanierProduit"> | string
    produitId?: StringFilter<"PanierProduit"> | string
    statutGIE?: EnumStatutGIEProduitFilter<"PanierProduit"> | $Enums.StatutGIEProduit
    dateConfirmation?: DateTimeNullableFilter<"PanierProduit"> | Date | string | null
    updatedAt?: DateTimeFilter<"PanierProduit"> | Date | string
  }

  export type CategorieUpsertWithoutProduitsInput = {
    update: XOR<CategorieUpdateWithoutProduitsInput, CategorieUncheckedUpdateWithoutProduitsInput>
    create: XOR<CategorieCreateWithoutProduitsInput, CategorieUncheckedCreateWithoutProduitsInput>
    where?: CategorieWhereInput
  }

  export type CategorieUpdateToOneWithWhereWithoutProduitsInput = {
    where?: CategorieWhereInput
    data: XOR<CategorieUpdateWithoutProduitsInput, CategorieUncheckedUpdateWithoutProduitsInput>
  }

  export type CategorieUpdateWithoutProduitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    conservation?: NullableStringFieldUpdateOperationsInput | string | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategorieUncheckedUpdateWithoutProduitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    conservation?: NullableStringFieldUpdateOperationsInput | string | null
    couleur?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GIEUpsertWithoutProduitsInput = {
    update: XOR<GIEUpdateWithoutProduitsInput, GIEUncheckedUpdateWithoutProduitsInput>
    create: XOR<GIECreateWithoutProduitsInput, GIEUncheckedCreateWithoutProduitsInput>
    where?: GIEWhereInput
  }

  export type GIEUpdateToOneWithWhereWithoutProduitsInput = {
    where?: GIEWhereInput
    data: XOR<GIEUpdateWithoutProduitsInput, GIEUncheckedUpdateWithoutProduitsInput>
  }

  export type GIEUpdateWithoutProduitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    membre?: NullableIntFieldUpdateOperationsInput | number | null
    Annee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialite?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumStatutGIEFieldUpdateOperationsInput | $Enums.StatutGIE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrateur?: AdministrateurUpdateOneRequiredWithoutGiesNestedInput
    regions?: regionsUpdateOneWithoutGiesNestedInput
  }

  export type GIEUncheckedUpdateWithoutProduitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    membre?: NullableIntFieldUpdateOperationsInput | number | null
    Annee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialite?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumStatutGIEFieldUpdateOperationsInput | $Enums.StatutGIE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrateurId?: StringFieldUpdateOperationsInput | string
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvisProduitUpsertWithWhereUniqueWithoutProduitInput = {
    where: AvisProduitWhereUniqueInput
    update: XOR<AvisProduitUpdateWithoutProduitInput, AvisProduitUncheckedUpdateWithoutProduitInput>
    create: XOR<AvisProduitCreateWithoutProduitInput, AvisProduitUncheckedCreateWithoutProduitInput>
  }

  export type AvisProduitUpdateWithWhereUniqueWithoutProduitInput = {
    where: AvisProduitWhereUniqueInput
    data: XOR<AvisProduitUpdateWithoutProduitInput, AvisProduitUncheckedUpdateWithoutProduitInput>
  }

  export type AvisProduitUpdateManyWithWhereWithoutProduitInput = {
    where: AvisProduitScalarWhereInput
    data: XOR<AvisProduitUpdateManyMutationInput, AvisProduitUncheckedUpdateManyWithoutProduitInput>
  }

  export type ClientCreateWithoutCommandesInput = {
    id?: string
    email?: string | null
    password: string
    nom: string
    prenom: string
    telephone: string
    adresse?: string | null
    statut?: $Enums.StatutClient
    createdAt?: Date | string
    updatedAt?: Date | string
    administrateur: AdministrateurCreateNestedOneWithoutClientsInput
    avis?: AvisCreateNestedManyWithoutClientInput
    avisProduit?: AvisProduitCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutCommandesInput = {
    id?: string
    email?: string | null
    password: string
    nom: string
    prenom: string
    telephone: string
    adresse?: string | null
    statut?: $Enums.StatutClient
    createdAt?: Date | string
    updatedAt?: Date | string
    administrateurId: string
    avis?: AvisUncheckedCreateNestedManyWithoutClientInput
    avisProduit?: AvisProduitUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutCommandesInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutCommandesInput, ClientUncheckedCreateWithoutCommandesInput>
  }

  export type livreursCreateWithoutCommandesInput = {
    id: string
    nom: string
    prenom: string
    email: string
    telephone: string
    password: string
    statut?: $Enums.StatutLivreur
    createdAt?: Date | string
    updatedAt: Date | string
    regions?: regionsCreateNestedOneWithoutLivreursInput
  }

  export type livreursUncheckedCreateWithoutCommandesInput = {
    id: string
    nom: string
    prenom: string
    email: string
    telephone: string
    password: string
    statut?: $Enums.StatutLivreur
    regionId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type livreursCreateOrConnectWithoutCommandesInput = {
    where: livreursWhereUniqueInput
    create: XOR<livreursCreateWithoutCommandesInput, livreursUncheckedCreateWithoutCommandesInput>
  }

  export type regionsCreateWithoutCommandesInput = {
    id: string
    nom: string
    description?: string | null
    fraisLivraisonInterne?: number
    fraisLivraisonExterne?: number
    createdAt?: Date | string
    updatedAt: Date | string
    adresses?: adressesCreateNestedManyWithoutRegionsInput
    gies?: GIECreateNestedManyWithoutRegionsInput
    livreurs?: livreursCreateNestedManyWithoutRegionsInput
  }

  export type regionsUncheckedCreateWithoutCommandesInput = {
    id: string
    nom: string
    description?: string | null
    fraisLivraisonInterne?: number
    fraisLivraisonExterne?: number
    createdAt?: Date | string
    updatedAt: Date | string
    adresses?: adressesUncheckedCreateNestedManyWithoutRegionsInput
    gies?: GIEUncheckedCreateNestedManyWithoutRegionsInput
    livreurs?: livreursUncheckedCreateNestedManyWithoutRegionsInput
  }

  export type regionsCreateOrConnectWithoutCommandesInput = {
    where: regionsWhereUniqueInput
    create: XOR<regionsCreateWithoutCommandesInput, regionsUncheckedCreateWithoutCommandesInput>
  }

  export type PaiementCreateWithoutCommandeInput = {
    id?: string
    montant: number
    methode: $Enums.MethodePaiement
    statut?: $Enums.StatutPaiement
    reference?: string | null
    datePaiement?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    fraisLivraison?: number
  }

  export type PaiementUncheckedCreateWithoutCommandeInput = {
    id?: string
    montant: number
    methode: $Enums.MethodePaiement
    statut?: $Enums.StatutPaiement
    reference?: string | null
    datePaiement?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    fraisLivraison?: number
  }

  export type PaiementCreateOrConnectWithoutCommandeInput = {
    where: PaiementWhereUniqueInput
    create: XOR<PaiementCreateWithoutCommandeInput, PaiementUncheckedCreateWithoutCommandeInput>
  }

  export type PanierProduitCreateWithoutCommandeInput = {
    id?: string
    quantite: number
    prixUnitaire: number
    createdAt?: Date | string
    statutGIE?: $Enums.StatutGIEProduit
    dateConfirmation?: Date | string | null
    updatedAt?: Date | string
    produit: ProduitCreateNestedOneWithoutPanierProduitsInput
  }

  export type PanierProduitUncheckedCreateWithoutCommandeInput = {
    id?: string
    quantite: number
    prixUnitaire: number
    createdAt?: Date | string
    produitId: string
    statutGIE?: $Enums.StatutGIEProduit
    dateConfirmation?: Date | string | null
    updatedAt?: Date | string
  }

  export type PanierProduitCreateOrConnectWithoutCommandeInput = {
    where: PanierProduitWhereUniqueInput
    create: XOR<PanierProduitCreateWithoutCommandeInput, PanierProduitUncheckedCreateWithoutCommandeInput>
  }

  export type PanierProduitCreateManyCommandeInputEnvelope = {
    data: PanierProduitCreateManyCommandeInput | PanierProduitCreateManyCommandeInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutCommandesInput = {
    update: XOR<ClientUpdateWithoutCommandesInput, ClientUncheckedUpdateWithoutCommandesInput>
    create: XOR<ClientCreateWithoutCommandesInput, ClientUncheckedCreateWithoutCommandesInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutCommandesInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutCommandesInput, ClientUncheckedUpdateWithoutCommandesInput>
  }

  export type ClientUpdateWithoutCommandesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrateur?: AdministrateurUpdateOneRequiredWithoutClientsNestedInput
    avis?: AvisUpdateManyWithoutClientNestedInput
    avisProduit?: AvisProduitUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutCommandesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrateurId?: StringFieldUpdateOperationsInput | string
    avis?: AvisUncheckedUpdateManyWithoutClientNestedInput
    avisProduit?: AvisProduitUncheckedUpdateManyWithoutClientNestedInput
  }

  export type livreursUpsertWithoutCommandesInput = {
    update: XOR<livreursUpdateWithoutCommandesInput, livreursUncheckedUpdateWithoutCommandesInput>
    create: XOR<livreursCreateWithoutCommandesInput, livreursUncheckedCreateWithoutCommandesInput>
    where?: livreursWhereInput
  }

  export type livreursUpdateToOneWithWhereWithoutCommandesInput = {
    where?: livreursWhereInput
    data: XOR<livreursUpdateWithoutCommandesInput, livreursUncheckedUpdateWithoutCommandesInput>
  }

  export type livreursUpdateWithoutCommandesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regions?: regionsUpdateOneWithoutLivreursNestedInput
  }

  export type livreursUncheckedUpdateWithoutCommandesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type regionsUpsertWithoutCommandesInput = {
    update: XOR<regionsUpdateWithoutCommandesInput, regionsUncheckedUpdateWithoutCommandesInput>
    create: XOR<regionsCreateWithoutCommandesInput, regionsUncheckedCreateWithoutCommandesInput>
    where?: regionsWhereInput
  }

  export type regionsUpdateToOneWithWhereWithoutCommandesInput = {
    where?: regionsWhereInput
    data: XOR<regionsUpdateWithoutCommandesInput, regionsUncheckedUpdateWithoutCommandesInput>
  }

  export type regionsUpdateWithoutCommandesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraisonInterne?: FloatFieldUpdateOperationsInput | number
    fraisLivraisonExterne?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adresses?: adressesUpdateManyWithoutRegionsNestedInput
    gies?: GIEUpdateManyWithoutRegionsNestedInput
    livreurs?: livreursUpdateManyWithoutRegionsNestedInput
  }

  export type regionsUncheckedUpdateWithoutCommandesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraisonInterne?: FloatFieldUpdateOperationsInput | number
    fraisLivraisonExterne?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adresses?: adressesUncheckedUpdateManyWithoutRegionsNestedInput
    gies?: GIEUncheckedUpdateManyWithoutRegionsNestedInput
    livreurs?: livreursUncheckedUpdateManyWithoutRegionsNestedInput
  }

  export type PaiementUpsertWithoutCommandeInput = {
    update: XOR<PaiementUpdateWithoutCommandeInput, PaiementUncheckedUpdateWithoutCommandeInput>
    create: XOR<PaiementCreateWithoutCommandeInput, PaiementUncheckedCreateWithoutCommandeInput>
    where?: PaiementWhereInput
  }

  export type PaiementUpdateToOneWithWhereWithoutCommandeInput = {
    where?: PaiementWhereInput
    data: XOR<PaiementUpdateWithoutCommandeInput, PaiementUncheckedUpdateWithoutCommandeInput>
  }

  export type PaiementUpdateWithoutCommandeInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    methode?: EnumMethodePaiementFieldUpdateOperationsInput | $Enums.MethodePaiement
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    datePaiement?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
  }

  export type PaiementUncheckedUpdateWithoutCommandeInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    methode?: EnumMethodePaiementFieldUpdateOperationsInput | $Enums.MethodePaiement
    statut?: EnumStatutPaiementFieldUpdateOperationsInput | $Enums.StatutPaiement
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    datePaiement?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
  }

  export type PanierProduitUpsertWithWhereUniqueWithoutCommandeInput = {
    where: PanierProduitWhereUniqueInput
    update: XOR<PanierProduitUpdateWithoutCommandeInput, PanierProduitUncheckedUpdateWithoutCommandeInput>
    create: XOR<PanierProduitCreateWithoutCommandeInput, PanierProduitUncheckedCreateWithoutCommandeInput>
  }

  export type PanierProduitUpdateWithWhereUniqueWithoutCommandeInput = {
    where: PanierProduitWhereUniqueInput
    data: XOR<PanierProduitUpdateWithoutCommandeInput, PanierProduitUncheckedUpdateWithoutCommandeInput>
  }

  export type PanierProduitUpdateManyWithWhereWithoutCommandeInput = {
    where: PanierProduitScalarWhereInput
    data: XOR<PanierProduitUpdateManyMutationInput, PanierProduitUncheckedUpdateManyWithoutCommandeInput>
  }

  export type CommandeCreateWithoutPaiementInput = {
    id?: string
    numero: string
    montant: number
    statut?: $Enums.StatutCommande
    dateCommande?: Date | string
    dateLivraison?: Date | string | null
    adresseLivraison?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fraisLivraison?: number
    client: ClientCreateNestedOneWithoutCommandesInput
    livreurs?: livreursCreateNestedOneWithoutCommandesInput
    regions?: regionsCreateNestedOneWithoutCommandesInput
    panierProduits?: PanierProduitCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateWithoutPaiementInput = {
    id?: string
    numero: string
    montant: number
    statut?: $Enums.StatutCommande
    dateCommande?: Date | string
    dateLivraison?: Date | string | null
    adresseLivraison?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    fraisLivraison?: number
    regionLivraisonId?: string | null
    livreurId?: string | null
    panierProduits?: PanierProduitUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeCreateOrConnectWithoutPaiementInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutPaiementInput, CommandeUncheckedCreateWithoutPaiementInput>
  }

  export type CommandeUpsertWithoutPaiementInput = {
    update: XOR<CommandeUpdateWithoutPaiementInput, CommandeUncheckedUpdateWithoutPaiementInput>
    create: XOR<CommandeCreateWithoutPaiementInput, CommandeUncheckedCreateWithoutPaiementInput>
    where?: CommandeWhereInput
  }

  export type CommandeUpdateToOneWithWhereWithoutPaiementInput = {
    where?: CommandeWhereInput
    data: XOR<CommandeUpdateWithoutPaiementInput, CommandeUncheckedUpdateWithoutPaiementInput>
  }

  export type CommandeUpdateWithoutPaiementInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraison?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresseLivraison?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    client?: ClientUpdateOneRequiredWithoutCommandesNestedInput
    livreurs?: livreursUpdateOneWithoutCommandesNestedInput
    regions?: regionsUpdateOneWithoutCommandesNestedInput
    panierProduits?: PanierProduitUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateWithoutPaiementInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraison?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresseLivraison?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    regionLivraisonId?: NullableStringFieldUpdateOperationsInput | string | null
    livreurId?: NullableStringFieldUpdateOperationsInput | string | null
    panierProduits?: PanierProduitUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeCreateWithoutPanierProduitsInput = {
    id?: string
    numero: string
    montant: number
    statut?: $Enums.StatutCommande
    dateCommande?: Date | string
    dateLivraison?: Date | string | null
    adresseLivraison?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fraisLivraison?: number
    client: ClientCreateNestedOneWithoutCommandesInput
    livreurs?: livreursCreateNestedOneWithoutCommandesInput
    regions?: regionsCreateNestedOneWithoutCommandesInput
    paiement?: PaiementCreateNestedOneWithoutCommandeInput
  }

  export type CommandeUncheckedCreateWithoutPanierProduitsInput = {
    id?: string
    numero: string
    montant: number
    statut?: $Enums.StatutCommande
    dateCommande?: Date | string
    dateLivraison?: Date | string | null
    adresseLivraison?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    fraisLivraison?: number
    regionLivraisonId?: string | null
    livreurId?: string | null
    paiement?: PaiementUncheckedCreateNestedOneWithoutCommandeInput
  }

  export type CommandeCreateOrConnectWithoutPanierProduitsInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutPanierProduitsInput, CommandeUncheckedCreateWithoutPanierProduitsInput>
  }

  export type ProduitCreateWithoutPanierProduitsInput = {
    id?: string
    nom: string
    quantite?: string
    description?: string | null
    prix: number
    stock?: number
    image?: string | null
    statut?: $Enums.StatutProduit
    createdAt?: Date | string
    updatedAt?: Date | string
    categorie?: CategorieCreateNestedOneWithoutProduitsInput
    gie: GIECreateNestedOneWithoutProduitsInput
    avisProduit?: AvisProduitCreateNestedManyWithoutProduitInput
  }

  export type ProduitUncheckedCreateWithoutPanierProduitsInput = {
    id?: string
    nom: string
    quantite?: string
    description?: string | null
    prix: number
    stock?: number
    image?: string | null
    statut?: $Enums.StatutProduit
    createdAt?: Date | string
    updatedAt?: Date | string
    gieId: string
    categorieId?: string | null
    avisProduit?: AvisProduitUncheckedCreateNestedManyWithoutProduitInput
  }

  export type ProduitCreateOrConnectWithoutPanierProduitsInput = {
    where: ProduitWhereUniqueInput
    create: XOR<ProduitCreateWithoutPanierProduitsInput, ProduitUncheckedCreateWithoutPanierProduitsInput>
  }

  export type CommandeUpsertWithoutPanierProduitsInput = {
    update: XOR<CommandeUpdateWithoutPanierProduitsInput, CommandeUncheckedUpdateWithoutPanierProduitsInput>
    create: XOR<CommandeCreateWithoutPanierProduitsInput, CommandeUncheckedCreateWithoutPanierProduitsInput>
    where?: CommandeWhereInput
  }

  export type CommandeUpdateToOneWithWhereWithoutPanierProduitsInput = {
    where?: CommandeWhereInput
    data: XOR<CommandeUpdateWithoutPanierProduitsInput, CommandeUncheckedUpdateWithoutPanierProduitsInput>
  }

  export type CommandeUpdateWithoutPanierProduitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraison?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresseLivraison?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    client?: ClientUpdateOneRequiredWithoutCommandesNestedInput
    livreurs?: livreursUpdateOneWithoutCommandesNestedInput
    regions?: regionsUpdateOneWithoutCommandesNestedInput
    paiement?: PaiementUpdateOneWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateWithoutPanierProduitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraison?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresseLivraison?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    regionLivraisonId?: NullableStringFieldUpdateOperationsInput | string | null
    livreurId?: NullableStringFieldUpdateOperationsInput | string | null
    paiement?: PaiementUncheckedUpdateOneWithoutCommandeNestedInput
  }

  export type ProduitUpsertWithoutPanierProduitsInput = {
    update: XOR<ProduitUpdateWithoutPanierProduitsInput, ProduitUncheckedUpdateWithoutPanierProduitsInput>
    create: XOR<ProduitCreateWithoutPanierProduitsInput, ProduitUncheckedCreateWithoutPanierProduitsInput>
    where?: ProduitWhereInput
  }

  export type ProduitUpdateToOneWithWhereWithoutPanierProduitsInput = {
    where?: ProduitWhereInput
    data: XOR<ProduitUpdateWithoutPanierProduitsInput, ProduitUncheckedUpdateWithoutPanierProduitsInput>
  }

  export type ProduitUpdateWithoutPanierProduitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categorie?: CategorieUpdateOneWithoutProduitsNestedInput
    gie?: GIEUpdateOneRequiredWithoutProduitsNestedInput
    avisProduit?: AvisProduitUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateWithoutPanierProduitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gieId?: StringFieldUpdateOperationsInput | string
    categorieId?: NullableStringFieldUpdateOperationsInput | string | null
    avisProduit?: AvisProduitUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type regionsCreateWithoutAdressesInput = {
    id: string
    nom: string
    description?: string | null
    fraisLivraisonInterne?: number
    fraisLivraisonExterne?: number
    createdAt?: Date | string
    updatedAt: Date | string
    commandes?: CommandeCreateNestedManyWithoutRegionsInput
    gies?: GIECreateNestedManyWithoutRegionsInput
    livreurs?: livreursCreateNestedManyWithoutRegionsInput
  }

  export type regionsUncheckedCreateWithoutAdressesInput = {
    id: string
    nom: string
    description?: string | null
    fraisLivraisonInterne?: number
    fraisLivraisonExterne?: number
    createdAt?: Date | string
    updatedAt: Date | string
    commandes?: CommandeUncheckedCreateNestedManyWithoutRegionsInput
    gies?: GIEUncheckedCreateNestedManyWithoutRegionsInput
    livreurs?: livreursUncheckedCreateNestedManyWithoutRegionsInput
  }

  export type regionsCreateOrConnectWithoutAdressesInput = {
    where: regionsWhereUniqueInput
    create: XOR<regionsCreateWithoutAdressesInput, regionsUncheckedCreateWithoutAdressesInput>
  }

  export type regionsUpsertWithoutAdressesInput = {
    update: XOR<regionsUpdateWithoutAdressesInput, regionsUncheckedUpdateWithoutAdressesInput>
    create: XOR<regionsCreateWithoutAdressesInput, regionsUncheckedCreateWithoutAdressesInput>
    where?: regionsWhereInput
  }

  export type regionsUpdateToOneWithWhereWithoutAdressesInput = {
    where?: regionsWhereInput
    data: XOR<regionsUpdateWithoutAdressesInput, regionsUncheckedUpdateWithoutAdressesInput>
  }

  export type regionsUpdateWithoutAdressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraisonInterne?: FloatFieldUpdateOperationsInput | number
    fraisLivraisonExterne?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUpdateManyWithoutRegionsNestedInput
    gies?: GIEUpdateManyWithoutRegionsNestedInput
    livreurs?: livreursUpdateManyWithoutRegionsNestedInput
  }

  export type regionsUncheckedUpdateWithoutAdressesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraisonInterne?: FloatFieldUpdateOperationsInput | number
    fraisLivraisonExterne?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUncheckedUpdateManyWithoutRegionsNestedInput
    gies?: GIEUncheckedUpdateManyWithoutRegionsNestedInput
    livreurs?: livreursUncheckedUpdateManyWithoutRegionsNestedInput
  }

  export type CommandeCreateWithoutLivreursInput = {
    id?: string
    numero: string
    montant: number
    statut?: $Enums.StatutCommande
    dateCommande?: Date | string
    dateLivraison?: Date | string | null
    adresseLivraison?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fraisLivraison?: number
    client: ClientCreateNestedOneWithoutCommandesInput
    regions?: regionsCreateNestedOneWithoutCommandesInput
    paiement?: PaiementCreateNestedOneWithoutCommandeInput
    panierProduits?: PanierProduitCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateWithoutLivreursInput = {
    id?: string
    numero: string
    montant: number
    statut?: $Enums.StatutCommande
    dateCommande?: Date | string
    dateLivraison?: Date | string | null
    adresseLivraison?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    fraisLivraison?: number
    regionLivraisonId?: string | null
    paiement?: PaiementUncheckedCreateNestedOneWithoutCommandeInput
    panierProduits?: PanierProduitUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeCreateOrConnectWithoutLivreursInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutLivreursInput, CommandeUncheckedCreateWithoutLivreursInput>
  }

  export type CommandeCreateManyLivreursInputEnvelope = {
    data: CommandeCreateManyLivreursInput | CommandeCreateManyLivreursInput[]
    skipDuplicates?: boolean
  }

  export type regionsCreateWithoutLivreursInput = {
    id: string
    nom: string
    description?: string | null
    fraisLivraisonInterne?: number
    fraisLivraisonExterne?: number
    createdAt?: Date | string
    updatedAt: Date | string
    adresses?: adressesCreateNestedManyWithoutRegionsInput
    commandes?: CommandeCreateNestedManyWithoutRegionsInput
    gies?: GIECreateNestedManyWithoutRegionsInput
  }

  export type regionsUncheckedCreateWithoutLivreursInput = {
    id: string
    nom: string
    description?: string | null
    fraisLivraisonInterne?: number
    fraisLivraisonExterne?: number
    createdAt?: Date | string
    updatedAt: Date | string
    adresses?: adressesUncheckedCreateNestedManyWithoutRegionsInput
    commandes?: CommandeUncheckedCreateNestedManyWithoutRegionsInput
    gies?: GIEUncheckedCreateNestedManyWithoutRegionsInput
  }

  export type regionsCreateOrConnectWithoutLivreursInput = {
    where: regionsWhereUniqueInput
    create: XOR<regionsCreateWithoutLivreursInput, regionsUncheckedCreateWithoutLivreursInput>
  }

  export type CommandeUpsertWithWhereUniqueWithoutLivreursInput = {
    where: CommandeWhereUniqueInput
    update: XOR<CommandeUpdateWithoutLivreursInput, CommandeUncheckedUpdateWithoutLivreursInput>
    create: XOR<CommandeCreateWithoutLivreursInput, CommandeUncheckedCreateWithoutLivreursInput>
  }

  export type CommandeUpdateWithWhereUniqueWithoutLivreursInput = {
    where: CommandeWhereUniqueInput
    data: XOR<CommandeUpdateWithoutLivreursInput, CommandeUncheckedUpdateWithoutLivreursInput>
  }

  export type CommandeUpdateManyWithWhereWithoutLivreursInput = {
    where: CommandeScalarWhereInput
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyWithoutLivreursInput>
  }

  export type regionsUpsertWithoutLivreursInput = {
    update: XOR<regionsUpdateWithoutLivreursInput, regionsUncheckedUpdateWithoutLivreursInput>
    create: XOR<regionsCreateWithoutLivreursInput, regionsUncheckedCreateWithoutLivreursInput>
    where?: regionsWhereInput
  }

  export type regionsUpdateToOneWithWhereWithoutLivreursInput = {
    where?: regionsWhereInput
    data: XOR<regionsUpdateWithoutLivreursInput, regionsUncheckedUpdateWithoutLivreursInput>
  }

  export type regionsUpdateWithoutLivreursInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraisonInterne?: FloatFieldUpdateOperationsInput | number
    fraisLivraisonExterne?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adresses?: adressesUpdateManyWithoutRegionsNestedInput
    commandes?: CommandeUpdateManyWithoutRegionsNestedInput
    gies?: GIEUpdateManyWithoutRegionsNestedInput
  }

  export type regionsUncheckedUpdateWithoutLivreursInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraisonInterne?: FloatFieldUpdateOperationsInput | number
    fraisLivraisonExterne?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    adresses?: adressesUncheckedUpdateManyWithoutRegionsNestedInput
    commandes?: CommandeUncheckedUpdateManyWithoutRegionsNestedInput
    gies?: GIEUncheckedUpdateManyWithoutRegionsNestedInput
  }

  export type adressesCreateWithoutRegionsInput = {
    id: string
    nom: string
    description?: string | null
    codePostal?: string | null
    fraisLivraison?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type adressesUncheckedCreateWithoutRegionsInput = {
    id: string
    nom: string
    description?: string | null
    codePostal?: string | null
    fraisLivraison?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type adressesCreateOrConnectWithoutRegionsInput = {
    where: adressesWhereUniqueInput
    create: XOR<adressesCreateWithoutRegionsInput, adressesUncheckedCreateWithoutRegionsInput>
  }

  export type adressesCreateManyRegionsInputEnvelope = {
    data: adressesCreateManyRegionsInput | adressesCreateManyRegionsInput[]
    skipDuplicates?: boolean
  }

  export type CommandeCreateWithoutRegionsInput = {
    id?: string
    numero: string
    montant: number
    statut?: $Enums.StatutCommande
    dateCommande?: Date | string
    dateLivraison?: Date | string | null
    adresseLivraison?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fraisLivraison?: number
    client: ClientCreateNestedOneWithoutCommandesInput
    livreurs?: livreursCreateNestedOneWithoutCommandesInput
    paiement?: PaiementCreateNestedOneWithoutCommandeInput
    panierProduits?: PanierProduitCreateNestedManyWithoutCommandeInput
  }

  export type CommandeUncheckedCreateWithoutRegionsInput = {
    id?: string
    numero: string
    montant: number
    statut?: $Enums.StatutCommande
    dateCommande?: Date | string
    dateLivraison?: Date | string | null
    adresseLivraison?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    fraisLivraison?: number
    livreurId?: string | null
    paiement?: PaiementUncheckedCreateNestedOneWithoutCommandeInput
    panierProduits?: PanierProduitUncheckedCreateNestedManyWithoutCommandeInput
  }

  export type CommandeCreateOrConnectWithoutRegionsInput = {
    where: CommandeWhereUniqueInput
    create: XOR<CommandeCreateWithoutRegionsInput, CommandeUncheckedCreateWithoutRegionsInput>
  }

  export type CommandeCreateManyRegionsInputEnvelope = {
    data: CommandeCreateManyRegionsInput | CommandeCreateManyRegionsInput[]
    skipDuplicates?: boolean
  }

  export type GIECreateWithoutRegionsInput = {
    id?: string
    nom: string
    description?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    password: string
    logo?: string | null
    url?: string | null
    membre?: number | null
    Annee?: Date | string | null
    specialite?: number | null
    statut?: $Enums.StatutGIE
    createdAt?: Date | string
    updatedAt?: Date | string
    administrateur: AdministrateurCreateNestedOneWithoutGiesInput
    produits?: ProduitCreateNestedManyWithoutGieInput
  }

  export type GIEUncheckedCreateWithoutRegionsInput = {
    id?: string
    nom: string
    description?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    password: string
    logo?: string | null
    url?: string | null
    membre?: number | null
    Annee?: Date | string | null
    specialite?: number | null
    statut?: $Enums.StatutGIE
    createdAt?: Date | string
    updatedAt?: Date | string
    administrateurId: string
    produits?: ProduitUncheckedCreateNestedManyWithoutGieInput
  }

  export type GIECreateOrConnectWithoutRegionsInput = {
    where: GIEWhereUniqueInput
    create: XOR<GIECreateWithoutRegionsInput, GIEUncheckedCreateWithoutRegionsInput>
  }

  export type GIECreateManyRegionsInputEnvelope = {
    data: GIECreateManyRegionsInput | GIECreateManyRegionsInput[]
    skipDuplicates?: boolean
  }

  export type livreursCreateWithoutRegionsInput = {
    id: string
    nom: string
    prenom: string
    email: string
    telephone: string
    password: string
    statut?: $Enums.StatutLivreur
    createdAt?: Date | string
    updatedAt: Date | string
    commandes?: CommandeCreateNestedManyWithoutLivreursInput
  }

  export type livreursUncheckedCreateWithoutRegionsInput = {
    id: string
    nom: string
    prenom: string
    email: string
    telephone: string
    password: string
    statut?: $Enums.StatutLivreur
    createdAt?: Date | string
    updatedAt: Date | string
    commandes?: CommandeUncheckedCreateNestedManyWithoutLivreursInput
  }

  export type livreursCreateOrConnectWithoutRegionsInput = {
    where: livreursWhereUniqueInput
    create: XOR<livreursCreateWithoutRegionsInput, livreursUncheckedCreateWithoutRegionsInput>
  }

  export type livreursCreateManyRegionsInputEnvelope = {
    data: livreursCreateManyRegionsInput | livreursCreateManyRegionsInput[]
    skipDuplicates?: boolean
  }

  export type adressesUpsertWithWhereUniqueWithoutRegionsInput = {
    where: adressesWhereUniqueInput
    update: XOR<adressesUpdateWithoutRegionsInput, adressesUncheckedUpdateWithoutRegionsInput>
    create: XOR<adressesCreateWithoutRegionsInput, adressesUncheckedCreateWithoutRegionsInput>
  }

  export type adressesUpdateWithWhereUniqueWithoutRegionsInput = {
    where: adressesWhereUniqueInput
    data: XOR<adressesUpdateWithoutRegionsInput, adressesUncheckedUpdateWithoutRegionsInput>
  }

  export type adressesUpdateManyWithWhereWithoutRegionsInput = {
    where: adressesScalarWhereInput
    data: XOR<adressesUpdateManyMutationInput, adressesUncheckedUpdateManyWithoutRegionsInput>
  }

  export type adressesScalarWhereInput = {
    AND?: adressesScalarWhereInput | adressesScalarWhereInput[]
    OR?: adressesScalarWhereInput[]
    NOT?: adressesScalarWhereInput | adressesScalarWhereInput[]
    id?: StringFilter<"adresses"> | string
    nom?: StringFilter<"adresses"> | string
    description?: StringNullableFilter<"adresses"> | string | null
    codePostal?: StringNullableFilter<"adresses"> | string | null
    fraisLivraison?: FloatFilter<"adresses"> | number
    createdAt?: DateTimeFilter<"adresses"> | Date | string
    updatedAt?: DateTimeFilter<"adresses"> | Date | string
    regionId?: StringFilter<"adresses"> | string
  }

  export type CommandeUpsertWithWhereUniqueWithoutRegionsInput = {
    where: CommandeWhereUniqueInput
    update: XOR<CommandeUpdateWithoutRegionsInput, CommandeUncheckedUpdateWithoutRegionsInput>
    create: XOR<CommandeCreateWithoutRegionsInput, CommandeUncheckedCreateWithoutRegionsInput>
  }

  export type CommandeUpdateWithWhereUniqueWithoutRegionsInput = {
    where: CommandeWhereUniqueInput
    data: XOR<CommandeUpdateWithoutRegionsInput, CommandeUncheckedUpdateWithoutRegionsInput>
  }

  export type CommandeUpdateManyWithWhereWithoutRegionsInput = {
    where: CommandeScalarWhereInput
    data: XOR<CommandeUpdateManyMutationInput, CommandeUncheckedUpdateManyWithoutRegionsInput>
  }

  export type GIEUpsertWithWhereUniqueWithoutRegionsInput = {
    where: GIEWhereUniqueInput
    update: XOR<GIEUpdateWithoutRegionsInput, GIEUncheckedUpdateWithoutRegionsInput>
    create: XOR<GIECreateWithoutRegionsInput, GIEUncheckedCreateWithoutRegionsInput>
  }

  export type GIEUpdateWithWhereUniqueWithoutRegionsInput = {
    where: GIEWhereUniqueInput
    data: XOR<GIEUpdateWithoutRegionsInput, GIEUncheckedUpdateWithoutRegionsInput>
  }

  export type GIEUpdateManyWithWhereWithoutRegionsInput = {
    where: GIEScalarWhereInput
    data: XOR<GIEUpdateManyMutationInput, GIEUncheckedUpdateManyWithoutRegionsInput>
  }

  export type livreursUpsertWithWhereUniqueWithoutRegionsInput = {
    where: livreursWhereUniqueInput
    update: XOR<livreursUpdateWithoutRegionsInput, livreursUncheckedUpdateWithoutRegionsInput>
    create: XOR<livreursCreateWithoutRegionsInput, livreursUncheckedCreateWithoutRegionsInput>
  }

  export type livreursUpdateWithWhereUniqueWithoutRegionsInput = {
    where: livreursWhereUniqueInput
    data: XOR<livreursUpdateWithoutRegionsInput, livreursUncheckedUpdateWithoutRegionsInput>
  }

  export type livreursUpdateManyWithWhereWithoutRegionsInput = {
    where: livreursScalarWhereInput
    data: XOR<livreursUpdateManyMutationInput, livreursUncheckedUpdateManyWithoutRegionsInput>
  }

  export type livreursScalarWhereInput = {
    AND?: livreursScalarWhereInput | livreursScalarWhereInput[]
    OR?: livreursScalarWhereInput[]
    NOT?: livreursScalarWhereInput | livreursScalarWhereInput[]
    id?: StringFilter<"livreurs"> | string
    nom?: StringFilter<"livreurs"> | string
    prenom?: StringFilter<"livreurs"> | string
    email?: StringFilter<"livreurs"> | string
    telephone?: StringFilter<"livreurs"> | string
    password?: StringFilter<"livreurs"> | string
    statut?: EnumStatutLivreurFilter<"livreurs"> | $Enums.StatutLivreur
    regionId?: StringNullableFilter<"livreurs"> | string | null
    createdAt?: DateTimeFilter<"livreurs"> | Date | string
    updatedAt?: DateTimeFilter<"livreurs"> | Date | string
  }

  export type ClientCreateManyAdministrateurInput = {
    id?: string
    email?: string | null
    password: string
    nom: string
    prenom: string
    telephone: string
    adresse?: string | null
    statut?: $Enums.StatutClient
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GIECreateManyAdministrateurInput = {
    id?: string
    nom: string
    description?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    password: string
    logo?: string | null
    url?: string | null
    membre?: number | null
    Annee?: Date | string | null
    specialite?: number | null
    statut?: $Enums.StatutGIE
    createdAt?: Date | string
    updatedAt?: Date | string
    regionId?: string | null
  }

  export type ClientUpdateWithoutAdministrateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUpdateManyWithoutClientNestedInput
    avis?: AvisUpdateManyWithoutClientNestedInput
    avisProduit?: AvisProduitUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutAdministrateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUncheckedUpdateManyWithoutClientNestedInput
    avis?: AvisUncheckedUpdateManyWithoutClientNestedInput
    avisProduit?: AvisProduitUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutAdministrateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutClientFieldUpdateOperationsInput | $Enums.StatutClient
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GIEUpdateWithoutAdministrateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    membre?: NullableIntFieldUpdateOperationsInput | number | null
    Annee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialite?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumStatutGIEFieldUpdateOperationsInput | $Enums.StatutGIE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regions?: regionsUpdateOneWithoutGiesNestedInput
    produits?: ProduitUpdateManyWithoutGieNestedInput
  }

  export type GIEUncheckedUpdateWithoutAdministrateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    membre?: NullableIntFieldUpdateOperationsInput | number | null
    Annee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialite?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumStatutGIEFieldUpdateOperationsInput | $Enums.StatutGIE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
    produits?: ProduitUncheckedUpdateManyWithoutGieNestedInput
  }

  export type GIEUncheckedUpdateManyWithoutAdministrateurInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    membre?: NullableIntFieldUpdateOperationsInput | number | null
    Annee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialite?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumStatutGIEFieldUpdateOperationsInput | $Enums.StatutGIE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    regionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProduitCreateManyGieInput = {
    id?: string
    nom: string
    quantite?: string
    description?: string | null
    prix: number
    stock?: number
    image?: string | null
    statut?: $Enums.StatutProduit
    createdAt?: Date | string
    updatedAt?: Date | string
    categorieId?: string | null
  }

  export type ProduitUpdateWithoutGieInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panierProduits?: PanierProduitUpdateManyWithoutProduitNestedInput
    categorie?: CategorieUpdateOneWithoutProduitsNestedInput
    avisProduit?: AvisProduitUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateWithoutGieInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categorieId?: NullableStringFieldUpdateOperationsInput | string | null
    panierProduits?: PanierProduitUncheckedUpdateManyWithoutProduitNestedInput
    avisProduit?: AvisProduitUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateManyWithoutGieInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categorieId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommandeCreateManyClientInput = {
    id?: string
    numero: string
    montant: number
    statut?: $Enums.StatutCommande
    dateCommande?: Date | string
    dateLivraison?: Date | string | null
    adresseLivraison?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    fraisLivraison?: number
    regionLivraisonId?: string | null
    livreurId?: string | null
  }

  export type AvisCreateManyClientInput = {
    id?: string
    nom?: string | null
    rating?: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvisProduitCreateManyClientInput = {
    id?: string
    produitId: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommandeUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraison?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresseLivraison?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    livreurs?: livreursUpdateOneWithoutCommandesNestedInput
    regions?: regionsUpdateOneWithoutCommandesNestedInput
    paiement?: PaiementUpdateOneWithoutCommandeNestedInput
    panierProduits?: PanierProduitUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraison?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresseLivraison?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    regionLivraisonId?: NullableStringFieldUpdateOperationsInput | string | null
    livreurId?: NullableStringFieldUpdateOperationsInput | string | null
    paiement?: PaiementUncheckedUpdateOneWithoutCommandeNestedInput
    panierProduits?: PanierProduitUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraison?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresseLivraison?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    regionLivraisonId?: NullableStringFieldUpdateOperationsInput | string | null
    livreurId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvisUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvisUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvisUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvisProduitUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produit?: ProduitUpdateOneRequiredWithoutAvisProduitNestedInput
  }

  export type AvisProduitUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    produitId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvisProduitUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    produitId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProduitCreateManyCategorieInput = {
    id?: string
    nom: string
    quantite?: string
    description?: string | null
    prix: number
    stock?: number
    image?: string | null
    statut?: $Enums.StatutProduit
    createdAt?: Date | string
    updatedAt?: Date | string
    gieId: string
  }

  export type ProduitUpdateWithoutCategorieInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panierProduits?: PanierProduitUpdateManyWithoutProduitNestedInput
    gie?: GIEUpdateOneRequiredWithoutProduitsNestedInput
    avisProduit?: AvisProduitUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateWithoutCategorieInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gieId?: StringFieldUpdateOperationsInput | string
    panierProduits?: PanierProduitUncheckedUpdateManyWithoutProduitNestedInput
    avisProduit?: AvisProduitUncheckedUpdateManyWithoutProduitNestedInput
  }

  export type ProduitUncheckedUpdateManyWithoutCategorieInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    quantite?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    prix?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    image?: NullableStringFieldUpdateOperationsInput | string | null
    statut?: EnumStatutProduitFieldUpdateOperationsInput | $Enums.StatutProduit
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gieId?: StringFieldUpdateOperationsInput | string
  }

  export type PanierProduitCreateManyProduitInput = {
    id?: string
    quantite: number
    prixUnitaire: number
    createdAt?: Date | string
    commandeId: string
    statutGIE?: $Enums.StatutGIEProduit
    dateConfirmation?: Date | string | null
    updatedAt?: Date | string
  }

  export type AvisProduitCreateManyProduitInput = {
    id?: string
    clientId: string
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PanierProduitUpdateWithoutProduitInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statutGIE?: EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit
    dateConfirmation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commande?: CommandeUpdateOneRequiredWithoutPanierProduitsNestedInput
  }

  export type PanierProduitUncheckedUpdateWithoutProduitInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandeId?: StringFieldUpdateOperationsInput | string
    statutGIE?: EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit
    dateConfirmation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanierProduitUncheckedUpdateManyWithoutProduitInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandeId?: StringFieldUpdateOperationsInput | string
    statutGIE?: EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit
    dateConfirmation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvisProduitUpdateWithoutProduitInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutAvisProduitNestedInput
  }

  export type AvisProduitUncheckedUpdateWithoutProduitInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvisProduitUncheckedUpdateManyWithoutProduitInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanierProduitCreateManyCommandeInput = {
    id?: string
    quantite: number
    prixUnitaire: number
    createdAt?: Date | string
    produitId: string
    statutGIE?: $Enums.StatutGIEProduit
    dateConfirmation?: Date | string | null
    updatedAt?: Date | string
  }

  export type PanierProduitUpdateWithoutCommandeInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statutGIE?: EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit
    dateConfirmation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produit?: ProduitUpdateOneRequiredWithoutPanierProduitsNestedInput
  }

  export type PanierProduitUncheckedUpdateWithoutCommandeInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produitId?: StringFieldUpdateOperationsInput | string
    statutGIE?: EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit
    dateConfirmation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanierProduitUncheckedUpdateManyWithoutCommandeInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantite?: IntFieldUpdateOperationsInput | number
    prixUnitaire?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    produitId?: StringFieldUpdateOperationsInput | string
    statutGIE?: EnumStatutGIEProduitFieldUpdateOperationsInput | $Enums.StatutGIEProduit
    dateConfirmation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandeCreateManyLivreursInput = {
    id?: string
    numero: string
    montant: number
    statut?: $Enums.StatutCommande
    dateCommande?: Date | string
    dateLivraison?: Date | string | null
    adresseLivraison?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    fraisLivraison?: number
    regionLivraisonId?: string | null
  }

  export type CommandeUpdateWithoutLivreursInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraison?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresseLivraison?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    client?: ClientUpdateOneRequiredWithoutCommandesNestedInput
    regions?: regionsUpdateOneWithoutCommandesNestedInput
    paiement?: PaiementUpdateOneWithoutCommandeNestedInput
    panierProduits?: PanierProduitUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateWithoutLivreursInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraison?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresseLivraison?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    regionLivraisonId?: NullableStringFieldUpdateOperationsInput | string | null
    paiement?: PaiementUncheckedUpdateOneWithoutCommandeNestedInput
    panierProduits?: PanierProduitUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateManyWithoutLivreursInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraison?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresseLivraison?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    regionLivraisonId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type adressesCreateManyRegionsInput = {
    id: string
    nom: string
    description?: string | null
    codePostal?: string | null
    fraisLivraison?: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type CommandeCreateManyRegionsInput = {
    id?: string
    numero: string
    montant: number
    statut?: $Enums.StatutCommande
    dateCommande?: Date | string
    dateLivraison?: Date | string | null
    adresseLivraison?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    clientId: string
    fraisLivraison?: number
    livreurId?: string | null
  }

  export type GIECreateManyRegionsInput = {
    id?: string
    nom: string
    description?: string | null
    adresse?: string | null
    telephone?: string | null
    email?: string | null
    password: string
    logo?: string | null
    url?: string | null
    membre?: number | null
    Annee?: Date | string | null
    specialite?: number | null
    statut?: $Enums.StatutGIE
    createdAt?: Date | string
    updatedAt?: Date | string
    administrateurId: string
  }

  export type livreursCreateManyRegionsInput = {
    id: string
    nom: string
    prenom: string
    email: string
    telephone: string
    password: string
    statut?: $Enums.StatutLivreur
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type adressesUpdateWithoutRegionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    codePostal?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adressesUncheckedUpdateWithoutRegionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    codePostal?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type adressesUncheckedUpdateManyWithoutRegionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    codePostal?: NullableStringFieldUpdateOperationsInput | string | null
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommandeUpdateWithoutRegionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraison?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresseLivraison?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    client?: ClientUpdateOneRequiredWithoutCommandesNestedInput
    livreurs?: livreursUpdateOneWithoutCommandesNestedInput
    paiement?: PaiementUpdateOneWithoutCommandeNestedInput
    panierProduits?: PanierProduitUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateWithoutRegionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraison?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresseLivraison?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    livreurId?: NullableStringFieldUpdateOperationsInput | string | null
    paiement?: PaiementUncheckedUpdateOneWithoutCommandeNestedInput
    panierProduits?: PanierProduitUncheckedUpdateManyWithoutCommandeNestedInput
  }

  export type CommandeUncheckedUpdateManyWithoutRegionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    montant?: FloatFieldUpdateOperationsInput | number
    statut?: EnumStatutCommandeFieldUpdateOperationsInput | $Enums.StatutCommande
    dateCommande?: DateTimeFieldUpdateOperationsInput | Date | string
    dateLivraison?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    adresseLivraison?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: StringFieldUpdateOperationsInput | string
    fraisLivraison?: FloatFieldUpdateOperationsInput | number
    livreurId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GIEUpdateWithoutRegionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    membre?: NullableIntFieldUpdateOperationsInput | number | null
    Annee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialite?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumStatutGIEFieldUpdateOperationsInput | $Enums.StatutGIE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrateur?: AdministrateurUpdateOneRequiredWithoutGiesNestedInput
    produits?: ProduitUpdateManyWithoutGieNestedInput
  }

  export type GIEUncheckedUpdateWithoutRegionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    membre?: NullableIntFieldUpdateOperationsInput | number | null
    Annee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialite?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumStatutGIEFieldUpdateOperationsInput | $Enums.StatutGIE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrateurId?: StringFieldUpdateOperationsInput | string
    produits?: ProduitUncheckedUpdateManyWithoutGieNestedInput
  }

  export type GIEUncheckedUpdateManyWithoutRegionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    adresse?: NullableStringFieldUpdateOperationsInput | string | null
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    membre?: NullableIntFieldUpdateOperationsInput | number | null
    Annee?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    specialite?: NullableIntFieldUpdateOperationsInput | number | null
    statut?: EnumStatutGIEFieldUpdateOperationsInput | $Enums.StatutGIE
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrateurId?: StringFieldUpdateOperationsInput | string
  }

  export type livreursUpdateWithoutRegionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUpdateManyWithoutLivreursNestedInput
  }

  export type livreursUncheckedUpdateWithoutRegionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commandes?: CommandeUncheckedUpdateManyWithoutLivreursNestedInput
  }

  export type livreursUncheckedUpdateManyWithoutRegionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    statut?: EnumStatutLivreurFieldUpdateOperationsInput | $Enums.StatutLivreur
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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