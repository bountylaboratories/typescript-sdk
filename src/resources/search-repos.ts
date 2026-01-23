// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SearchRepos extends APIResource {
  /**
   * Natural language search that uses AI to understand your query and automatically
   * generate search terms and filters. Requires SEARCH service. Credits: 1 per
   * result returned + 1 for AI processing + graph relationship credits if
   * includeAttributes is specified.
   *
   * @example
   * ```ts
   * const response = await client.searchRepos.naturalLanguage({
   *   query:
   *     'Find React libraries with over 1000 stars that have good TypeScript support and are actively maintained',
   * });
   * ```
   */
  naturalLanguage(
    body: SearchRepoNaturalLanguageParams,
    options?: RequestOptions,
  ): APIPromise<SearchRepoNaturalLanguageResponse> {
    return this._client.post('/search/repos/natural-language', { body, ...options });
  }

  /**
   * Semantic search across repository READMEs and descriptions using vector
   * embeddings and cosine similarity. Results include relevance scores. Requires
   * SEARCH service. Credits: 1 per result returned.
   *
   * @example
   * ```ts
   * const response = await client.searchRepos.search({
   *   query: 'react component library with typescript',
   * });
   * ```
   */
  search(body: SearchRepoSearchParams, options?: RequestOptions): APIPromise<SearchRepoSearchResponse> {
    return this._client.post('/search/repos', { body, ...options });
  }
}

export interface SearchRepoNaturalLanguageResponse {
  /**
   * Number of repositories returned
   */
  count: number;

  /**
   * Array of repository search results with relevance scores and optional graph
   * relationships
   */
  repositories: Array<SearchRepoNaturalLanguageResponse.Repository>;

  /**
   * The generated search query used for semantic search
   */
  searchQuery: string;

  /**
   * Pagination information
   */
  pageInfo?: SearchRepoNaturalLanguageResponse.PageInfo;
}

export namespace SearchRepoNaturalLanguageResponse {
  export interface Repository {
    /**
     * BountyLab internal ID
     */
    id: string;

    /**
     * GitHub node ID
     */
    githubId: string;

    /**
     * Repository name
     */
    name: string;

    /**
     * Repository owner username
     */
    ownerLogin: string;

    /**
     * Number of stars
     */
    stargazerCount: number;

    /**
     * Number of closed issues
     */
    totalIssuesClosed: number;

    /**
     * Total number of issues (open + closed)
     */
    totalIssuesCount: number;

    /**
     * Number of open issues
     */
    totalIssuesOpen: number;

    /**
     * Users who follow this user (when includeAttributes.followers is specified)
     */
    contributors?: Repository.Contributors;

    /**
     * ISO 8601 timestamp when repository was created
     */
    createdAt?: string | null;

    /**
     * Repository description
     */
    description?: string | null;

    /**
     * ISO 8601 timestamp when embedding was created
     */
    embeddedAt?: string | null;

    /**
     * Primary programming language
     */
    language?: string | null;

    /**
     * Locations of last contributors to this repository
     */
    lastContributorLocations?: Array<string> | null;

    /**
     * Repository owner (when includeAttributes.owner = true)
     */
    owner?: Repository.Owner;

    /**
     * Devrank data for the repository owner (when includeAttributes.ownerDevrank =
     * true)
     */
    ownerDevrank?: Repository.OwnerDevrank;

    /**
     * Preview of repository README (first ~500 chars)
     */
    readmePreview?: string | null;

    /**
     * Relevance score from search (0-1, lower is more relevant for cosine distance)
     */
    score?: number;

    /**
     * Users who follow this user (when includeAttributes.followers is specified)
     */
    starrers?: Repository.Starrers;

    /**
     * ISO 8601 timestamp when repository was last updated
     */
    updatedAt?: string | null;
  }

  export namespace Repository {
    /**
     * Users who follow this user (when includeAttributes.followers is specified)
     */
    export interface Contributors {
      /**
       * Array of user objects
       */
      edges: Array<Contributors.Edge>;

      /**
       * Pagination information
       */
      pageInfo: Contributors.PageInfo;
    }

    export namespace Contributors {
      export interface Edge {
        /**
         * BountyLab internal ID
         */
        id: string;

        /**
         * GitHub node ID
         */
        githubId: string;

        /**
         * GitHub username
         */
        login: string;

        /**
         * User biography
         */
        bio?: string | null;

        /**
         * Company name
         */
        company?: string | null;

        /**
         * ISO 8601 timestamp when user account was created
         */
        createdAt?: string | null;

        /**
         * User display name
         */
        displayName?: string | null;

        /**
         * Obfuscated email addresses showing only the last 2 characters of the local part
         * and full domain (e.g., "\*\*\*oe@gmail.com"). Use /api/users/best-email endpoint
         * for unobfuscated email access with intelligent selection.
         */
        emails?: Array<string> | null;

        /**
         * ISO 8601 timestamp when metadata was extracted
         */
        embeddedAt?: string | null;

        /**
         * User location
         */
        location?: string | null;

        /**
         * Resolved city from location
         */
        resolvedCity?: string | null;

        /**
         * Resolved country from location
         */
        resolvedCountry?: string | null;

        /**
         * Resolved state/region from location
         */
        resolvedState?: string | null;

        /**
         * Relevance score from search (0-1, lower is more relevant for distance metrics)
         */
        score?: number;

        /**
         * Social media accounts
         */
        socialAccounts?: Array<Edge.SocialAccount> | null;

        /**
         * ISO 8601 timestamp when user was last updated
         */
        updatedAt?: string | null;

        /**
         * User website URL
         */
        websiteUrl?: string | null;
      }

      export namespace Edge {
        export interface SocialAccount {
          provider: string;

          url: string;
        }
      }

      /**
       * Pagination information
       */
      export interface PageInfo {
        /**
         * Cursor to fetch next page (null if no more items)
         */
        endCursor: string | null;

        /**
         * Whether there are more items available
         */
        hasNextPage: boolean;
      }
    }

    /**
     * Repository owner (when includeAttributes.owner = true)
     */
    export interface Owner {
      /**
       * BountyLab internal ID
       */
      id: string;

      /**
       * GitHub node ID
       */
      githubId: string;

      /**
       * GitHub username
       */
      login: string;

      /**
       * User biography
       */
      bio?: string | null;

      /**
       * Company name
       */
      company?: string | null;

      /**
       * ISO 8601 timestamp when user account was created
       */
      createdAt?: string | null;

      /**
       * User display name
       */
      displayName?: string | null;

      /**
       * Obfuscated email addresses showing only the last 2 characters of the local part
       * and full domain (e.g., "\*\*\*oe@gmail.com"). Use /api/users/best-email endpoint
       * for unobfuscated email access with intelligent selection.
       */
      emails?: Array<string> | null;

      /**
       * ISO 8601 timestamp when metadata was extracted
       */
      embeddedAt?: string | null;

      /**
       * User location
       */
      location?: string | null;

      /**
       * Resolved city from location
       */
      resolvedCity?: string | null;

      /**
       * Resolved country from location
       */
      resolvedCountry?: string | null;

      /**
       * Resolved state/region from location
       */
      resolvedState?: string | null;

      /**
       * Relevance score from search (0-1, lower is more relevant for distance metrics)
       */
      score?: number;

      /**
       * Social media accounts
       */
      socialAccounts?: Array<Owner.SocialAccount> | null;

      /**
       * ISO 8601 timestamp when user was last updated
       */
      updatedAt?: string | null;

      /**
       * User website URL
       */
      websiteUrl?: string | null;
    }

    export namespace Owner {
      export interface SocialAccount {
        provider: string;

        url: string;
      }
    }

    /**
     * Devrank data for the repository owner (when includeAttributes.ownerDevrank =
     * true)
     */
    export interface OwnerDevrank {
      community: number;

      crackedScore: number;

      createdAt: string;

      followersIn: number;

      followingOut: number;

      pc: number;

      rawScore: number;

      tier: string;

      trust: number;

      updatedAt: string;
    }

    /**
     * Users who follow this user (when includeAttributes.followers is specified)
     */
    export interface Starrers {
      /**
       * Array of user objects
       */
      edges: Array<Starrers.Edge>;

      /**
       * Pagination information
       */
      pageInfo: Starrers.PageInfo;
    }

    export namespace Starrers {
      export interface Edge {
        /**
         * BountyLab internal ID
         */
        id: string;

        /**
         * GitHub node ID
         */
        githubId: string;

        /**
         * GitHub username
         */
        login: string;

        /**
         * User biography
         */
        bio?: string | null;

        /**
         * Company name
         */
        company?: string | null;

        /**
         * ISO 8601 timestamp when user account was created
         */
        createdAt?: string | null;

        /**
         * User display name
         */
        displayName?: string | null;

        /**
         * Obfuscated email addresses showing only the last 2 characters of the local part
         * and full domain (e.g., "\*\*\*oe@gmail.com"). Use /api/users/best-email endpoint
         * for unobfuscated email access with intelligent selection.
         */
        emails?: Array<string> | null;

        /**
         * ISO 8601 timestamp when metadata was extracted
         */
        embeddedAt?: string | null;

        /**
         * User location
         */
        location?: string | null;

        /**
         * Resolved city from location
         */
        resolvedCity?: string | null;

        /**
         * Resolved country from location
         */
        resolvedCountry?: string | null;

        /**
         * Resolved state/region from location
         */
        resolvedState?: string | null;

        /**
         * Relevance score from search (0-1, lower is more relevant for distance metrics)
         */
        score?: number;

        /**
         * Social media accounts
         */
        socialAccounts?: Array<Edge.SocialAccount> | null;

        /**
         * ISO 8601 timestamp when user was last updated
         */
        updatedAt?: string | null;

        /**
         * User website URL
         */
        websiteUrl?: string | null;
      }

      export namespace Edge {
        export interface SocialAccount {
          provider: string;

          url: string;
        }
      }

      /**
       * Pagination information
       */
      export interface PageInfo {
        /**
         * Cursor to fetch next page (null if no more items)
         */
        endCursor: string | null;

        /**
         * Whether there are more items available
         */
        hasNextPage: boolean;
      }
    }
  }

  /**
   * Pagination information
   */
  export interface PageInfo {
    /**
     * Cursor to fetch next page (null if no more items)
     */
    endCursor: string | null;

    /**
     * Whether there are more items available
     */
    hasNextPage: boolean;
  }
}

export interface SearchRepoSearchResponse {
  /**
   * Number of repositories returned
   */
  count: number;

  /**
   * Array of repository search results with relevance scores and optional graph
   * relationships
   */
  repositories: Array<SearchRepoSearchResponse.Repository>;

  /**
   * Pagination information
   */
  pageInfo?: SearchRepoSearchResponse.PageInfo;
}

export namespace SearchRepoSearchResponse {
  export interface Repository {
    /**
     * BountyLab internal ID
     */
    id: string;

    /**
     * GitHub node ID
     */
    githubId: string;

    /**
     * Repository name
     */
    name: string;

    /**
     * Repository owner username
     */
    ownerLogin: string;

    /**
     * Number of stars
     */
    stargazerCount: number;

    /**
     * Number of closed issues
     */
    totalIssuesClosed: number;

    /**
     * Total number of issues (open + closed)
     */
    totalIssuesCount: number;

    /**
     * Number of open issues
     */
    totalIssuesOpen: number;

    /**
     * Users who follow this user (when includeAttributes.followers is specified)
     */
    contributors?: Repository.Contributors;

    /**
     * ISO 8601 timestamp when repository was created
     */
    createdAt?: string | null;

    /**
     * Repository description
     */
    description?: string | null;

    /**
     * ISO 8601 timestamp when embedding was created
     */
    embeddedAt?: string | null;

    /**
     * Primary programming language
     */
    language?: string | null;

    /**
     * Locations of last contributors to this repository
     */
    lastContributorLocations?: Array<string> | null;

    /**
     * Repository owner (when includeAttributes.owner = true)
     */
    owner?: Repository.Owner;

    /**
     * Devrank data for the repository owner (when includeAttributes.ownerDevrank =
     * true)
     */
    ownerDevrank?: Repository.OwnerDevrank;

    /**
     * Preview of repository README (first ~500 chars)
     */
    readmePreview?: string | null;

    /**
     * Relevance score from search (0-1, lower is more relevant for cosine distance)
     */
    score?: number;

    /**
     * Users who follow this user (when includeAttributes.followers is specified)
     */
    starrers?: Repository.Starrers;

    /**
     * ISO 8601 timestamp when repository was last updated
     */
    updatedAt?: string | null;
  }

  export namespace Repository {
    /**
     * Users who follow this user (when includeAttributes.followers is specified)
     */
    export interface Contributors {
      /**
       * Array of user objects
       */
      edges: Array<Contributors.Edge>;

      /**
       * Pagination information
       */
      pageInfo: Contributors.PageInfo;
    }

    export namespace Contributors {
      export interface Edge {
        /**
         * BountyLab internal ID
         */
        id: string;

        /**
         * GitHub node ID
         */
        githubId: string;

        /**
         * GitHub username
         */
        login: string;

        /**
         * User biography
         */
        bio?: string | null;

        /**
         * Company name
         */
        company?: string | null;

        /**
         * ISO 8601 timestamp when user account was created
         */
        createdAt?: string | null;

        /**
         * User display name
         */
        displayName?: string | null;

        /**
         * Obfuscated email addresses showing only the last 2 characters of the local part
         * and full domain (e.g., "\*\*\*oe@gmail.com"). Use /api/users/best-email endpoint
         * for unobfuscated email access with intelligent selection.
         */
        emails?: Array<string> | null;

        /**
         * ISO 8601 timestamp when metadata was extracted
         */
        embeddedAt?: string | null;

        /**
         * User location
         */
        location?: string | null;

        /**
         * Resolved city from location
         */
        resolvedCity?: string | null;

        /**
         * Resolved country from location
         */
        resolvedCountry?: string | null;

        /**
         * Resolved state/region from location
         */
        resolvedState?: string | null;

        /**
         * Relevance score from search (0-1, lower is more relevant for distance metrics)
         */
        score?: number;

        /**
         * Social media accounts
         */
        socialAccounts?: Array<Edge.SocialAccount> | null;

        /**
         * ISO 8601 timestamp when user was last updated
         */
        updatedAt?: string | null;

        /**
         * User website URL
         */
        websiteUrl?: string | null;
      }

      export namespace Edge {
        export interface SocialAccount {
          provider: string;

          url: string;
        }
      }

      /**
       * Pagination information
       */
      export interface PageInfo {
        /**
         * Cursor to fetch next page (null if no more items)
         */
        endCursor: string | null;

        /**
         * Whether there are more items available
         */
        hasNextPage: boolean;
      }
    }

    /**
     * Repository owner (when includeAttributes.owner = true)
     */
    export interface Owner {
      /**
       * BountyLab internal ID
       */
      id: string;

      /**
       * GitHub node ID
       */
      githubId: string;

      /**
       * GitHub username
       */
      login: string;

      /**
       * User biography
       */
      bio?: string | null;

      /**
       * Company name
       */
      company?: string | null;

      /**
       * ISO 8601 timestamp when user account was created
       */
      createdAt?: string | null;

      /**
       * User display name
       */
      displayName?: string | null;

      /**
       * Obfuscated email addresses showing only the last 2 characters of the local part
       * and full domain (e.g., "\*\*\*oe@gmail.com"). Use /api/users/best-email endpoint
       * for unobfuscated email access with intelligent selection.
       */
      emails?: Array<string> | null;

      /**
       * ISO 8601 timestamp when metadata was extracted
       */
      embeddedAt?: string | null;

      /**
       * User location
       */
      location?: string | null;

      /**
       * Resolved city from location
       */
      resolvedCity?: string | null;

      /**
       * Resolved country from location
       */
      resolvedCountry?: string | null;

      /**
       * Resolved state/region from location
       */
      resolvedState?: string | null;

      /**
       * Relevance score from search (0-1, lower is more relevant for distance metrics)
       */
      score?: number;

      /**
       * Social media accounts
       */
      socialAccounts?: Array<Owner.SocialAccount> | null;

      /**
       * ISO 8601 timestamp when user was last updated
       */
      updatedAt?: string | null;

      /**
       * User website URL
       */
      websiteUrl?: string | null;
    }

    export namespace Owner {
      export interface SocialAccount {
        provider: string;

        url: string;
      }
    }

    /**
     * Devrank data for the repository owner (when includeAttributes.ownerDevrank =
     * true)
     */
    export interface OwnerDevrank {
      community: number;

      crackedScore: number;

      createdAt: string;

      followersIn: number;

      followingOut: number;

      pc: number;

      rawScore: number;

      tier: string;

      trust: number;

      updatedAt: string;
    }

    /**
     * Users who follow this user (when includeAttributes.followers is specified)
     */
    export interface Starrers {
      /**
       * Array of user objects
       */
      edges: Array<Starrers.Edge>;

      /**
       * Pagination information
       */
      pageInfo: Starrers.PageInfo;
    }

    export namespace Starrers {
      export interface Edge {
        /**
         * BountyLab internal ID
         */
        id: string;

        /**
         * GitHub node ID
         */
        githubId: string;

        /**
         * GitHub username
         */
        login: string;

        /**
         * User biography
         */
        bio?: string | null;

        /**
         * Company name
         */
        company?: string | null;

        /**
         * ISO 8601 timestamp when user account was created
         */
        createdAt?: string | null;

        /**
         * User display name
         */
        displayName?: string | null;

        /**
         * Obfuscated email addresses showing only the last 2 characters of the local part
         * and full domain (e.g., "\*\*\*oe@gmail.com"). Use /api/users/best-email endpoint
         * for unobfuscated email access with intelligent selection.
         */
        emails?: Array<string> | null;

        /**
         * ISO 8601 timestamp when metadata was extracted
         */
        embeddedAt?: string | null;

        /**
         * User location
         */
        location?: string | null;

        /**
         * Resolved city from location
         */
        resolvedCity?: string | null;

        /**
         * Resolved country from location
         */
        resolvedCountry?: string | null;

        /**
         * Resolved state/region from location
         */
        resolvedState?: string | null;

        /**
         * Relevance score from search (0-1, lower is more relevant for distance metrics)
         */
        score?: number;

        /**
         * Social media accounts
         */
        socialAccounts?: Array<Edge.SocialAccount> | null;

        /**
         * ISO 8601 timestamp when user was last updated
         */
        updatedAt?: string | null;

        /**
         * User website URL
         */
        websiteUrl?: string | null;
      }

      export namespace Edge {
        export interface SocialAccount {
          provider: string;

          url: string;
        }
      }

      /**
       * Pagination information
       */
      export interface PageInfo {
        /**
         * Cursor to fetch next page (null if no more items)
         */
        endCursor: string | null;

        /**
         * Whether there are more items available
         */
        hasNextPage: boolean;
      }
    }
  }

  /**
   * Pagination information
   */
  export interface PageInfo {
    /**
     * Cursor to fetch next page (null if no more items)
     */
    endCursor: string | null;

    /**
     * Whether there are more items available
     */
    hasNextPage: boolean;
  }
}

export interface SearchRepoNaturalLanguageParams {
  /**
   * Natural language query describing the repositories you want to find
   */
  query: string;

  /**
   * Cursor for pagination (from previous response pageInfo.endCursor)
   */
  after?: string;

  /**
   * When true, applies the LLM-generated filter to all user-returning
   * includeAttributes (contributors, starrers). Alias for
   * filterUserIncludeAttributes.
   */
  applyFiltersToIncludeAttributes?: boolean;

  /**
   * Enable cursor-based pagination to fetch results across multiple requests
   */
  enablePagination?: boolean;

  /**
   * [Deprecated: Use applyFiltersToIncludeAttributes] When true, applies the
   * LLM-generated filter to all user-returning includeAttributes (contributors,
   * starrers).
   */
  filterUserIncludeAttributes?: boolean;

  /**
   * Alias for maxResults (takes precedence if both provided)
   */
  first?: number;

  /**
   * Optional graph relationships to include (owner, contributors, starrers)
   */
  includeAttributes?: SearchRepoNaturalLanguageParams.IncludeAttributes;

  /**
   * Maximum number of results to return (default: 100, max: 1000)
   */
  maxResults?: number;

  /**
   * Custom ranking formula (AST expression). If not provided, uses default
   * log-normalized 70/20/10 formula (70% semantic similarity, 20% popularity, 10%
   * activity).
   */
  rankBy?:
    | SearchRepoNaturalLanguageParams.Attr
    | SearchRepoNaturalLanguageParams.Const
    | SearchRepoNaturalLanguageParams.Sum
    | SearchRepoNaturalLanguageParams.Mult
    | SearchRepoNaturalLanguageParams.Div
    | SearchRepoNaturalLanguageParams.Max
    | SearchRepoNaturalLanguageParams.Min
    | SearchRepoNaturalLanguageParams.Log;
}

export namespace SearchRepoNaturalLanguageParams {
  /**
   * Optional graph relationships to include (owner, contributors, starrers)
   */
  export interface IncludeAttributes {
    /**
     * Include repository contributors with cursor pagination
     */
    contributors?: IncludeAttributes.Contributors;

    /**
     * Include repository owner information
     */
    owner?: boolean;

    /**
     * Include devrank data for the repository owner
     */
    ownerDevrank?: boolean;

    /**
     * Include users who starred the repository with cursor pagination
     */
    starrers?: IncludeAttributes.Starrers;
  }

  export namespace IncludeAttributes {
    /**
     * Include repository contributors with cursor pagination
     */
    export interface Contributors {
      /**
       * Number of items to return (max: 100)
       */
      first: number;

      /**
       * Cursor for pagination (opaque base64-encoded)
       */
      after?: string;

      /**
       * Optional filters for users. Supports fields like login, company, location,
       * resolvedCountry, resolvedState, resolvedCity. Operators: Eq, NotEq, In, NotIn,
       * Lt, Lte, Gt, Gte.
       */
      filters?: Contributors.UnionMember0 | Contributors.UnionMember1 | Contributors.UnionMember2;
    }

    export namespace Contributors {
      export interface UnionMember0 {
        /**
         * Field name to filter on
         */
        field: string;

        /**
         * Filter operator
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'ContainsAllTokens';

        /**
         * Filter value (type depends on field and operator)
         */
        value: string | number | Array<string> | Array<number>;
      }

      export interface UnionMember1 {
        /**
         * Array of field filters
         */
        filters: Array<UnionMember1.Filter>;

        /**
         * Composite operator
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember1 {
        export interface Filter {
          /**
           * Field name to filter on
           */
          field: string;

          /**
           * Filter operator
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'ContainsAllTokens';

          /**
           * Filter value (type depends on field and operator)
           */
          value: string | number | Array<string> | Array<number>;
        }
      }

      export interface UnionMember2 {
        /**
         * Array of filters
         */
        filters: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        /**
         * Composite operator
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          /**
           * Field name to filter on
           */
          field: string;

          /**
           * Filter operator
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'ContainsAllTokens';

          /**
           * Filter value (type depends on field and operator)
           */
          value: string | number | Array<string> | Array<number>;
        }

        export interface UnionMember1 {
          /**
           * Array of field filters
           */
          filters: Array<UnionMember1.Filter>;

          /**
           * Composite operator
           */
          op: 'And' | 'Or';
        }

        export namespace UnionMember1 {
          export interface Filter {
            /**
             * Field name to filter on
             */
            field: string;

            /**
             * Filter operator
             */
            op:
              | 'Eq'
              | 'NotEq'
              | 'In'
              | 'NotIn'
              | 'Lt'
              | 'Lte'
              | 'Gt'
              | 'Gte'
              | 'Glob'
              | 'NotGlob'
              | 'IGlob'
              | 'NotIGlob'
              | 'Regex'
              | 'Contains'
              | 'NotContains'
              | 'ContainsAny'
              | 'NotContainsAny'
              | 'AnyLt'
              | 'AnyLte'
              | 'AnyGt'
              | 'AnyGte'
              | 'ContainsAllTokens';

            /**
             * Filter value (type depends on field and operator)
             */
            value: string | number | Array<string> | Array<number>;
          }
        }
      }
    }

    /**
     * Include users who starred the repository with cursor pagination
     */
    export interface Starrers {
      /**
       * Number of items to return (max: 100)
       */
      first: number;

      /**
       * Cursor for pagination (opaque base64-encoded)
       */
      after?: string;

      /**
       * Optional filters for users. Supports fields like login, company, location,
       * resolvedCountry, resolvedState, resolvedCity. Operators: Eq, NotEq, In, NotIn,
       * Lt, Lte, Gt, Gte.
       */
      filters?: Starrers.UnionMember0 | Starrers.UnionMember1 | Starrers.UnionMember2;
    }

    export namespace Starrers {
      export interface UnionMember0 {
        /**
         * Field name to filter on
         */
        field: string;

        /**
         * Filter operator
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'ContainsAllTokens';

        /**
         * Filter value (type depends on field and operator)
         */
        value: string | number | Array<string> | Array<number>;
      }

      export interface UnionMember1 {
        /**
         * Array of field filters
         */
        filters: Array<UnionMember1.Filter>;

        /**
         * Composite operator
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember1 {
        export interface Filter {
          /**
           * Field name to filter on
           */
          field: string;

          /**
           * Filter operator
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'ContainsAllTokens';

          /**
           * Filter value (type depends on field and operator)
           */
          value: string | number | Array<string> | Array<number>;
        }
      }

      export interface UnionMember2 {
        /**
         * Array of filters
         */
        filters: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        /**
         * Composite operator
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          /**
           * Field name to filter on
           */
          field: string;

          /**
           * Filter operator
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'ContainsAllTokens';

          /**
           * Filter value (type depends on field and operator)
           */
          value: string | number | Array<string> | Array<number>;
        }

        export interface UnionMember1 {
          /**
           * Array of field filters
           */
          filters: Array<UnionMember1.Filter>;

          /**
           * Composite operator
           */
          op: 'And' | 'Or';
        }

        export namespace UnionMember1 {
          export interface Filter {
            /**
             * Field name to filter on
             */
            field: string;

            /**
             * Filter operator
             */
            op:
              | 'Eq'
              | 'NotEq'
              | 'In'
              | 'NotIn'
              | 'Lt'
              | 'Lte'
              | 'Gt'
              | 'Gte'
              | 'Glob'
              | 'NotGlob'
              | 'IGlob'
              | 'NotIGlob'
              | 'Regex'
              | 'Contains'
              | 'NotContains'
              | 'ContainsAny'
              | 'NotContainsAny'
              | 'AnyLt'
              | 'AnyLte'
              | 'AnyGt'
              | 'AnyGte'
              | 'ContainsAllTokens';

            /**
             * Filter value (type depends on field and operator)
             */
            value: string | number | Array<string> | Array<number>;
          }
        }
      }
    }
  }

  export interface Attr {
    name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

    type: 'Attr';
  }

  export interface Const {
    type: 'Const';

    value: number;
  }

  export interface Sum {
    exprs: Array<
      | Sum.UnionMember0
      | Sum.UnionMember1
      | Sum.UnionMember2
      | Sum.UnionMember3
      | Sum.UnionMember4
      | Sum.UnionMember5
      | Sum.UnionMember6
      | Sum.UnionMember7
    >;

    type: 'Sum';
  }

  export namespace Sum {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      type: 'Attr';
    }

    export interface UnionMember1 {
      type: 'Const';

      value: number;
    }

    export interface UnionMember2 {
      exprs: Array<
        | UnionMember2.UnionMember0
        | UnionMember2.UnionMember1
        | UnionMember2.UnionMember2
        | UnionMember2.UnionMember3
        | UnionMember2.UnionMember4
        | UnionMember2.UnionMember5
        | UnionMember2.UnionMember6
        | UnionMember2.UnionMember7
      >;

      type: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<unknown>;

      type: 'Mult';
    }

    export interface UnionMember4 {
      exprs: Array<unknown>;

      type: 'Div';
    }

    export interface UnionMember5 {
      exprs: Array<
        | UnionMember5.UnionMember0
        | UnionMember5.UnionMember1
        | UnionMember5.UnionMember2
        | UnionMember5.UnionMember3
        | UnionMember5.UnionMember4
        | UnionMember5.UnionMember5
        | UnionMember5.UnionMember6
        | UnionMember5.UnionMember7
      >;

      type: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember6 {
      exprs: Array<
        | UnionMember6.UnionMember0
        | UnionMember6.UnionMember1
        | UnionMember6.UnionMember2
        | UnionMember6.UnionMember3
        | UnionMember6.UnionMember4
        | UnionMember6.UnionMember5
        | UnionMember6.UnionMember6
        | UnionMember6.UnionMember7
      >;

      type: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember7 {
      base: number;

      expr:
        | UnionMember7.UnionMember0
        | UnionMember7.UnionMember1
        | UnionMember7.UnionMember2
        | UnionMember7.UnionMember3
        | UnionMember7.UnionMember4
        | UnionMember7.UnionMember5
        | UnionMember7.UnionMember6
        | UnionMember7.UnionMember7;

      type: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }
  }

  export interface Mult {
    exprs: Array<unknown>;

    type: 'Mult';
  }

  export interface Div {
    exprs: Array<unknown>;

    type: 'Div';
  }

  export interface Max {
    exprs: Array<
      | Max.UnionMember0
      | Max.UnionMember1
      | Max.UnionMember2
      | Max.UnionMember3
      | Max.UnionMember4
      | Max.UnionMember5
      | Max.UnionMember6
      | Max.UnionMember7
    >;

    type: 'Max';
  }

  export namespace Max {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      type: 'Attr';
    }

    export interface UnionMember1 {
      type: 'Const';

      value: number;
    }

    export interface UnionMember2 {
      exprs: Array<
        | UnionMember2.UnionMember0
        | UnionMember2.UnionMember1
        | UnionMember2.UnionMember2
        | UnionMember2.UnionMember3
        | UnionMember2.UnionMember4
        | UnionMember2.UnionMember5
        | UnionMember2.UnionMember6
        | UnionMember2.UnionMember7
      >;

      type: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<unknown>;

      type: 'Mult';
    }

    export interface UnionMember4 {
      exprs: Array<unknown>;

      type: 'Div';
    }

    export interface UnionMember5 {
      exprs: Array<
        | UnionMember5.UnionMember0
        | UnionMember5.UnionMember1
        | UnionMember5.UnionMember2
        | UnionMember5.UnionMember3
        | UnionMember5.UnionMember4
        | UnionMember5.UnionMember5
        | UnionMember5.UnionMember6
        | UnionMember5.UnionMember7
      >;

      type: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember6 {
      exprs: Array<
        | UnionMember6.UnionMember0
        | UnionMember6.UnionMember1
        | UnionMember6.UnionMember2
        | UnionMember6.UnionMember3
        | UnionMember6.UnionMember4
        | UnionMember6.UnionMember5
        | UnionMember6.UnionMember6
        | UnionMember6.UnionMember7
      >;

      type: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember7 {
      base: number;

      expr:
        | UnionMember7.UnionMember0
        | UnionMember7.UnionMember1
        | UnionMember7.UnionMember2
        | UnionMember7.UnionMember3
        | UnionMember7.UnionMember4
        | UnionMember7.UnionMember5
        | UnionMember7.UnionMember6
        | UnionMember7.UnionMember7;

      type: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }
  }

  export interface Min {
    exprs: Array<
      | Min.UnionMember0
      | Min.UnionMember1
      | Min.UnionMember2
      | Min.UnionMember3
      | Min.UnionMember4
      | Min.UnionMember5
      | Min.UnionMember6
      | Min.UnionMember7
    >;

    type: 'Min';
  }

  export namespace Min {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      type: 'Attr';
    }

    export interface UnionMember1 {
      type: 'Const';

      value: number;
    }

    export interface UnionMember2 {
      exprs: Array<
        | UnionMember2.UnionMember0
        | UnionMember2.UnionMember1
        | UnionMember2.UnionMember2
        | UnionMember2.UnionMember3
        | UnionMember2.UnionMember4
        | UnionMember2.UnionMember5
        | UnionMember2.UnionMember6
        | UnionMember2.UnionMember7
      >;

      type: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<unknown>;

      type: 'Mult';
    }

    export interface UnionMember4 {
      exprs: Array<unknown>;

      type: 'Div';
    }

    export interface UnionMember5 {
      exprs: Array<
        | UnionMember5.UnionMember0
        | UnionMember5.UnionMember1
        | UnionMember5.UnionMember2
        | UnionMember5.UnionMember3
        | UnionMember5.UnionMember4
        | UnionMember5.UnionMember5
        | UnionMember5.UnionMember6
        | UnionMember5.UnionMember7
      >;

      type: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember6 {
      exprs: Array<
        | UnionMember6.UnionMember0
        | UnionMember6.UnionMember1
        | UnionMember6.UnionMember2
        | UnionMember6.UnionMember3
        | UnionMember6.UnionMember4
        | UnionMember6.UnionMember5
        | UnionMember6.UnionMember6
        | UnionMember6.UnionMember7
      >;

      type: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember7 {
      base: number;

      expr:
        | UnionMember7.UnionMember0
        | UnionMember7.UnionMember1
        | UnionMember7.UnionMember2
        | UnionMember7.UnionMember3
        | UnionMember7.UnionMember4
        | UnionMember7.UnionMember5
        | UnionMember7.UnionMember6
        | UnionMember7.UnionMember7;

      type: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }
  }

  export interface Log {
    base: number;

    expr:
      | Log.UnionMember0
      | Log.UnionMember1
      | Log.UnionMember2
      | Log.UnionMember3
      | Log.UnionMember4
      | Log.UnionMember5
      | Log.UnionMember6
      | Log.UnionMember7;

    type: 'Log';
  }

  export namespace Log {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      type: 'Attr';
    }

    export interface UnionMember1 {
      type: 'Const';

      value: number;
    }

    export interface UnionMember2 {
      exprs: Array<
        | UnionMember2.UnionMember0
        | UnionMember2.UnionMember1
        | UnionMember2.UnionMember2
        | UnionMember2.UnionMember3
        | UnionMember2.UnionMember4
        | UnionMember2.UnionMember5
        | UnionMember2.UnionMember6
        | UnionMember2.UnionMember7
      >;

      type: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<unknown>;

      type: 'Mult';
    }

    export interface UnionMember4 {
      exprs: Array<unknown>;

      type: 'Div';
    }

    export interface UnionMember5 {
      exprs: Array<
        | UnionMember5.UnionMember0
        | UnionMember5.UnionMember1
        | UnionMember5.UnionMember2
        | UnionMember5.UnionMember3
        | UnionMember5.UnionMember4
        | UnionMember5.UnionMember5
        | UnionMember5.UnionMember6
        | UnionMember5.UnionMember7
      >;

      type: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember6 {
      exprs: Array<
        | UnionMember6.UnionMember0
        | UnionMember6.UnionMember1
        | UnionMember6.UnionMember2
        | UnionMember6.UnionMember3
        | UnionMember6.UnionMember4
        | UnionMember6.UnionMember5
        | UnionMember6.UnionMember6
        | UnionMember6.UnionMember7
      >;

      type: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember7 {
      base: number;

      expr:
        | UnionMember7.UnionMember0
        | UnionMember7.UnionMember1
        | UnionMember7.UnionMember2
        | UnionMember7.UnionMember3
        | UnionMember7.UnionMember4
        | UnionMember7.UnionMember5
        | UnionMember7.UnionMember6
        | UnionMember7.UnionMember7;

      type: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }
  }
}

export interface SearchRepoSearchParams {
  /**
   * Search query for semantic search across repository README and description using
   * vector embeddings. Supports: string (single query), string[] (RRF fusion), null
   * (filter-only)
   */
  query: string | Array<string> | null;

  /**
   * Cursor for pagination (from previous response pageInfo.endCursor)
   */
  after?: string;

  /**
   * When true, applies the search filter to all user-returning includeAttributes
   * (contributors, starrers). This filters the returned users to match the same
   * criteria.
   */
  applyFiltersToIncludeAttributes?: boolean;

  /**
   * Enable cursor-based pagination to fetch results across multiple requests
   */
  enablePagination?: boolean;

  /**
   * Filters to apply (required)
   */
  filters?:
    | SearchRepoSearchParams.UnionMember0
    | SearchRepoSearchParams.UnionMember1
    | SearchRepoSearchParams.UnionMember2;

  /**
   * Alias for maxResults (takes precedence if both provided)
   */
  first?: number;

  /**
   * Optional graph relationships to include (owner, contributors, starrers)
   */
  includeAttributes?: SearchRepoSearchParams.IncludeAttributes;

  /**
   * Maximum number of results to return (default: 100, max: 1000)
   */
  maxResults?: number;

  /**
   * Custom ranking formula (AST expression). If not provided, uses default
   * log-normalized 70/20/10 formula (70% semantic similarity, 20% popularity, 10%
   * activity).
   */
  rankBy?:
    | SearchRepoSearchParams.Attr
    | SearchRepoSearchParams.Const
    | SearchRepoSearchParams.Sum
    | SearchRepoSearchParams.Mult
    | SearchRepoSearchParams.Div
    | SearchRepoSearchParams.Max
    | SearchRepoSearchParams.Min
    | SearchRepoSearchParams.Log;
}

export namespace SearchRepoSearchParams {
  export interface UnionMember0 {
    /**
     * Field name to filter on
     */
    field: string;

    /**
     * Filter operator
     */
    op:
      | 'Eq'
      | 'NotEq'
      | 'In'
      | 'NotIn'
      | 'Lt'
      | 'Lte'
      | 'Gt'
      | 'Gte'
      | 'Glob'
      | 'NotGlob'
      | 'IGlob'
      | 'NotIGlob'
      | 'Regex'
      | 'Contains'
      | 'NotContains'
      | 'ContainsAny'
      | 'NotContainsAny'
      | 'AnyLt'
      | 'AnyLte'
      | 'AnyGt'
      | 'AnyGte'
      | 'ContainsAllTokens';

    /**
     * Filter value (type depends on field and operator)
     */
    value: string | number | Array<string> | Array<number>;
  }

  export interface UnionMember1 {
    /**
     * Array of field filters
     */
    filters: Array<UnionMember1.Filter>;

    /**
     * Composite operator
     */
    op: 'And' | 'Or';
  }

  export namespace UnionMember1 {
    export interface Filter {
      /**
       * Field name to filter on
       */
      field: string;

      /**
       * Filter operator
       */
      op:
        | 'Eq'
        | 'NotEq'
        | 'In'
        | 'NotIn'
        | 'Lt'
        | 'Lte'
        | 'Gt'
        | 'Gte'
        | 'Glob'
        | 'NotGlob'
        | 'IGlob'
        | 'NotIGlob'
        | 'Regex'
        | 'Contains'
        | 'NotContains'
        | 'ContainsAny'
        | 'NotContainsAny'
        | 'AnyLt'
        | 'AnyLte'
        | 'AnyGt'
        | 'AnyGte'
        | 'ContainsAllTokens';

      /**
       * Filter value (type depends on field and operator)
       */
      value: string | number | Array<string> | Array<number>;
    }
  }

  export interface UnionMember2 {
    /**
     * Array of filters
     */
    filters: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

    /**
     * Composite operator
     */
    op: 'And' | 'Or';
  }

  export namespace UnionMember2 {
    export interface UnionMember0 {
      /**
       * Field name to filter on
       */
      field: string;

      /**
       * Filter operator
       */
      op:
        | 'Eq'
        | 'NotEq'
        | 'In'
        | 'NotIn'
        | 'Lt'
        | 'Lte'
        | 'Gt'
        | 'Gte'
        | 'Glob'
        | 'NotGlob'
        | 'IGlob'
        | 'NotIGlob'
        | 'Regex'
        | 'Contains'
        | 'NotContains'
        | 'ContainsAny'
        | 'NotContainsAny'
        | 'AnyLt'
        | 'AnyLte'
        | 'AnyGt'
        | 'AnyGte'
        | 'ContainsAllTokens';

      /**
       * Filter value (type depends on field and operator)
       */
      value: string | number | Array<string> | Array<number>;
    }

    export interface UnionMember1 {
      /**
       * Array of field filters
       */
      filters: Array<UnionMember1.Filter>;

      /**
       * Composite operator
       */
      op: 'And' | 'Or';
    }

    export namespace UnionMember1 {
      export interface Filter {
        /**
         * Field name to filter on
         */
        field: string;

        /**
         * Filter operator
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'ContainsAllTokens';

        /**
         * Filter value (type depends on field and operator)
         */
        value: string | number | Array<string> | Array<number>;
      }
    }
  }

  /**
   * Optional graph relationships to include (owner, contributors, starrers)
   */
  export interface IncludeAttributes {
    /**
     * Include repository contributors with cursor pagination
     */
    contributors?: IncludeAttributes.Contributors;

    /**
     * Include repository owner information
     */
    owner?: boolean;

    /**
     * Include devrank data for the repository owner
     */
    ownerDevrank?: boolean;

    /**
     * Include users who starred the repository with cursor pagination
     */
    starrers?: IncludeAttributes.Starrers;
  }

  export namespace IncludeAttributes {
    /**
     * Include repository contributors with cursor pagination
     */
    export interface Contributors {
      /**
       * Number of items to return (max: 100)
       */
      first: number;

      /**
       * Cursor for pagination (opaque base64-encoded)
       */
      after?: string;

      /**
       * Optional filters for users. Supports fields like login, company, location,
       * resolvedCountry, resolvedState, resolvedCity. Operators: Eq, NotEq, In, NotIn,
       * Lt, Lte, Gt, Gte.
       */
      filters?: Contributors.UnionMember0 | Contributors.UnionMember1 | Contributors.UnionMember2;
    }

    export namespace Contributors {
      export interface UnionMember0 {
        /**
         * Field name to filter on
         */
        field: string;

        /**
         * Filter operator
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'ContainsAllTokens';

        /**
         * Filter value (type depends on field and operator)
         */
        value: string | number | Array<string> | Array<number>;
      }

      export interface UnionMember1 {
        /**
         * Array of field filters
         */
        filters: Array<UnionMember1.Filter>;

        /**
         * Composite operator
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember1 {
        export interface Filter {
          /**
           * Field name to filter on
           */
          field: string;

          /**
           * Filter operator
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'ContainsAllTokens';

          /**
           * Filter value (type depends on field and operator)
           */
          value: string | number | Array<string> | Array<number>;
        }
      }

      export interface UnionMember2 {
        /**
         * Array of filters
         */
        filters: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        /**
         * Composite operator
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          /**
           * Field name to filter on
           */
          field: string;

          /**
           * Filter operator
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'ContainsAllTokens';

          /**
           * Filter value (type depends on field and operator)
           */
          value: string | number | Array<string> | Array<number>;
        }

        export interface UnionMember1 {
          /**
           * Array of field filters
           */
          filters: Array<UnionMember1.Filter>;

          /**
           * Composite operator
           */
          op: 'And' | 'Or';
        }

        export namespace UnionMember1 {
          export interface Filter {
            /**
             * Field name to filter on
             */
            field: string;

            /**
             * Filter operator
             */
            op:
              | 'Eq'
              | 'NotEq'
              | 'In'
              | 'NotIn'
              | 'Lt'
              | 'Lte'
              | 'Gt'
              | 'Gte'
              | 'Glob'
              | 'NotGlob'
              | 'IGlob'
              | 'NotIGlob'
              | 'Regex'
              | 'Contains'
              | 'NotContains'
              | 'ContainsAny'
              | 'NotContainsAny'
              | 'AnyLt'
              | 'AnyLte'
              | 'AnyGt'
              | 'AnyGte'
              | 'ContainsAllTokens';

            /**
             * Filter value (type depends on field and operator)
             */
            value: string | number | Array<string> | Array<number>;
          }
        }
      }
    }

    /**
     * Include users who starred the repository with cursor pagination
     */
    export interface Starrers {
      /**
       * Number of items to return (max: 100)
       */
      first: number;

      /**
       * Cursor for pagination (opaque base64-encoded)
       */
      after?: string;

      /**
       * Optional filters for users. Supports fields like login, company, location,
       * resolvedCountry, resolvedState, resolvedCity. Operators: Eq, NotEq, In, NotIn,
       * Lt, Lte, Gt, Gte.
       */
      filters?: Starrers.UnionMember0 | Starrers.UnionMember1 | Starrers.UnionMember2;
    }

    export namespace Starrers {
      export interface UnionMember0 {
        /**
         * Field name to filter on
         */
        field: string;

        /**
         * Filter operator
         */
        op:
          | 'Eq'
          | 'NotEq'
          | 'In'
          | 'NotIn'
          | 'Lt'
          | 'Lte'
          | 'Gt'
          | 'Gte'
          | 'Glob'
          | 'NotGlob'
          | 'IGlob'
          | 'NotIGlob'
          | 'Regex'
          | 'Contains'
          | 'NotContains'
          | 'ContainsAny'
          | 'NotContainsAny'
          | 'AnyLt'
          | 'AnyLte'
          | 'AnyGt'
          | 'AnyGte'
          | 'ContainsAllTokens';

        /**
         * Filter value (type depends on field and operator)
         */
        value: string | number | Array<string> | Array<number>;
      }

      export interface UnionMember1 {
        /**
         * Array of field filters
         */
        filters: Array<UnionMember1.Filter>;

        /**
         * Composite operator
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember1 {
        export interface Filter {
          /**
           * Field name to filter on
           */
          field: string;

          /**
           * Filter operator
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'ContainsAllTokens';

          /**
           * Filter value (type depends on field and operator)
           */
          value: string | number | Array<string> | Array<number>;
        }
      }

      export interface UnionMember2 {
        /**
         * Array of filters
         */
        filters: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        /**
         * Composite operator
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          /**
           * Field name to filter on
           */
          field: string;

          /**
           * Filter operator
           */
          op:
            | 'Eq'
            | 'NotEq'
            | 'In'
            | 'NotIn'
            | 'Lt'
            | 'Lte'
            | 'Gt'
            | 'Gte'
            | 'Glob'
            | 'NotGlob'
            | 'IGlob'
            | 'NotIGlob'
            | 'Regex'
            | 'Contains'
            | 'NotContains'
            | 'ContainsAny'
            | 'NotContainsAny'
            | 'AnyLt'
            | 'AnyLte'
            | 'AnyGt'
            | 'AnyGte'
            | 'ContainsAllTokens';

          /**
           * Filter value (type depends on field and operator)
           */
          value: string | number | Array<string> | Array<number>;
        }

        export interface UnionMember1 {
          /**
           * Array of field filters
           */
          filters: Array<UnionMember1.Filter>;

          /**
           * Composite operator
           */
          op: 'And' | 'Or';
        }

        export namespace UnionMember1 {
          export interface Filter {
            /**
             * Field name to filter on
             */
            field: string;

            /**
             * Filter operator
             */
            op:
              | 'Eq'
              | 'NotEq'
              | 'In'
              | 'NotIn'
              | 'Lt'
              | 'Lte'
              | 'Gt'
              | 'Gte'
              | 'Glob'
              | 'NotGlob'
              | 'IGlob'
              | 'NotIGlob'
              | 'Regex'
              | 'Contains'
              | 'NotContains'
              | 'ContainsAny'
              | 'NotContainsAny'
              | 'AnyLt'
              | 'AnyLte'
              | 'AnyGt'
              | 'AnyGte'
              | 'ContainsAllTokens';

            /**
             * Filter value (type depends on field and operator)
             */
            value: string | number | Array<string> | Array<number>;
          }
        }
      }
    }
  }

  export interface Attr {
    name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

    type: 'Attr';
  }

  export interface Const {
    type: 'Const';

    value: number;
  }

  export interface Sum {
    exprs: Array<
      | Sum.UnionMember0
      | Sum.UnionMember1
      | Sum.UnionMember2
      | Sum.UnionMember3
      | Sum.UnionMember4
      | Sum.UnionMember5
      | Sum.UnionMember6
      | Sum.UnionMember7
    >;

    type: 'Sum';
  }

  export namespace Sum {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      type: 'Attr';
    }

    export interface UnionMember1 {
      type: 'Const';

      value: number;
    }

    export interface UnionMember2 {
      exprs: Array<
        | UnionMember2.UnionMember0
        | UnionMember2.UnionMember1
        | UnionMember2.UnionMember2
        | UnionMember2.UnionMember3
        | UnionMember2.UnionMember4
        | UnionMember2.UnionMember5
        | UnionMember2.UnionMember6
        | UnionMember2.UnionMember7
      >;

      type: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<unknown>;

      type: 'Mult';
    }

    export interface UnionMember4 {
      exprs: Array<unknown>;

      type: 'Div';
    }

    export interface UnionMember5 {
      exprs: Array<
        | UnionMember5.UnionMember0
        | UnionMember5.UnionMember1
        | UnionMember5.UnionMember2
        | UnionMember5.UnionMember3
        | UnionMember5.UnionMember4
        | UnionMember5.UnionMember5
        | UnionMember5.UnionMember6
        | UnionMember5.UnionMember7
      >;

      type: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember6 {
      exprs: Array<
        | UnionMember6.UnionMember0
        | UnionMember6.UnionMember1
        | UnionMember6.UnionMember2
        | UnionMember6.UnionMember3
        | UnionMember6.UnionMember4
        | UnionMember6.UnionMember5
        | UnionMember6.UnionMember6
        | UnionMember6.UnionMember7
      >;

      type: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember7 {
      base: number;

      expr:
        | UnionMember7.UnionMember0
        | UnionMember7.UnionMember1
        | UnionMember7.UnionMember2
        | UnionMember7.UnionMember3
        | UnionMember7.UnionMember4
        | UnionMember7.UnionMember5
        | UnionMember7.UnionMember6
        | UnionMember7.UnionMember7;

      type: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }
  }

  export interface Mult {
    exprs: Array<unknown>;

    type: 'Mult';
  }

  export interface Div {
    exprs: Array<unknown>;

    type: 'Div';
  }

  export interface Max {
    exprs: Array<
      | Max.UnionMember0
      | Max.UnionMember1
      | Max.UnionMember2
      | Max.UnionMember3
      | Max.UnionMember4
      | Max.UnionMember5
      | Max.UnionMember6
      | Max.UnionMember7
    >;

    type: 'Max';
  }

  export namespace Max {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      type: 'Attr';
    }

    export interface UnionMember1 {
      type: 'Const';

      value: number;
    }

    export interface UnionMember2 {
      exprs: Array<
        | UnionMember2.UnionMember0
        | UnionMember2.UnionMember1
        | UnionMember2.UnionMember2
        | UnionMember2.UnionMember3
        | UnionMember2.UnionMember4
        | UnionMember2.UnionMember5
        | UnionMember2.UnionMember6
        | UnionMember2.UnionMember7
      >;

      type: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<unknown>;

      type: 'Mult';
    }

    export interface UnionMember4 {
      exprs: Array<unknown>;

      type: 'Div';
    }

    export interface UnionMember5 {
      exprs: Array<
        | UnionMember5.UnionMember0
        | UnionMember5.UnionMember1
        | UnionMember5.UnionMember2
        | UnionMember5.UnionMember3
        | UnionMember5.UnionMember4
        | UnionMember5.UnionMember5
        | UnionMember5.UnionMember6
        | UnionMember5.UnionMember7
      >;

      type: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember6 {
      exprs: Array<
        | UnionMember6.UnionMember0
        | UnionMember6.UnionMember1
        | UnionMember6.UnionMember2
        | UnionMember6.UnionMember3
        | UnionMember6.UnionMember4
        | UnionMember6.UnionMember5
        | UnionMember6.UnionMember6
        | UnionMember6.UnionMember7
      >;

      type: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember7 {
      base: number;

      expr:
        | UnionMember7.UnionMember0
        | UnionMember7.UnionMember1
        | UnionMember7.UnionMember2
        | UnionMember7.UnionMember3
        | UnionMember7.UnionMember4
        | UnionMember7.UnionMember5
        | UnionMember7.UnionMember6
        | UnionMember7.UnionMember7;

      type: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }
  }

  export interface Min {
    exprs: Array<
      | Min.UnionMember0
      | Min.UnionMember1
      | Min.UnionMember2
      | Min.UnionMember3
      | Min.UnionMember4
      | Min.UnionMember5
      | Min.UnionMember6
      | Min.UnionMember7
    >;

    type: 'Min';
  }

  export namespace Min {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      type: 'Attr';
    }

    export interface UnionMember1 {
      type: 'Const';

      value: number;
    }

    export interface UnionMember2 {
      exprs: Array<
        | UnionMember2.UnionMember0
        | UnionMember2.UnionMember1
        | UnionMember2.UnionMember2
        | UnionMember2.UnionMember3
        | UnionMember2.UnionMember4
        | UnionMember2.UnionMember5
        | UnionMember2.UnionMember6
        | UnionMember2.UnionMember7
      >;

      type: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<unknown>;

      type: 'Mult';
    }

    export interface UnionMember4 {
      exprs: Array<unknown>;

      type: 'Div';
    }

    export interface UnionMember5 {
      exprs: Array<
        | UnionMember5.UnionMember0
        | UnionMember5.UnionMember1
        | UnionMember5.UnionMember2
        | UnionMember5.UnionMember3
        | UnionMember5.UnionMember4
        | UnionMember5.UnionMember5
        | UnionMember5.UnionMember6
        | UnionMember5.UnionMember7
      >;

      type: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember6 {
      exprs: Array<
        | UnionMember6.UnionMember0
        | UnionMember6.UnionMember1
        | UnionMember6.UnionMember2
        | UnionMember6.UnionMember3
        | UnionMember6.UnionMember4
        | UnionMember6.UnionMember5
        | UnionMember6.UnionMember6
        | UnionMember6.UnionMember7
      >;

      type: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember7 {
      base: number;

      expr:
        | UnionMember7.UnionMember0
        | UnionMember7.UnionMember1
        | UnionMember7.UnionMember2
        | UnionMember7.UnionMember3
        | UnionMember7.UnionMember4
        | UnionMember7.UnionMember5
        | UnionMember7.UnionMember6
        | UnionMember7.UnionMember7;

      type: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }
  }

  export interface Log {
    base: number;

    expr:
      | Log.UnionMember0
      | Log.UnionMember1
      | Log.UnionMember2
      | Log.UnionMember3
      | Log.UnionMember4
      | Log.UnionMember5
      | Log.UnionMember6
      | Log.UnionMember7;

    type: 'Log';
  }

  export namespace Log {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      type: 'Attr';
    }

    export interface UnionMember1 {
      type: 'Const';

      value: number;
    }

    export interface UnionMember2 {
      exprs: Array<
        | UnionMember2.UnionMember0
        | UnionMember2.UnionMember1
        | UnionMember2.UnionMember2
        | UnionMember2.UnionMember3
        | UnionMember2.UnionMember4
        | UnionMember2.UnionMember5
        | UnionMember2.UnionMember6
        | UnionMember2.UnionMember7
      >;

      type: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<unknown>;

      type: 'Mult';
    }

    export interface UnionMember4 {
      exprs: Array<unknown>;

      type: 'Div';
    }

    export interface UnionMember5 {
      exprs: Array<
        | UnionMember5.UnionMember0
        | UnionMember5.UnionMember1
        | UnionMember5.UnionMember2
        | UnionMember5.UnionMember3
        | UnionMember5.UnionMember4
        | UnionMember5.UnionMember5
        | UnionMember5.UnionMember6
        | UnionMember5.UnionMember7
      >;

      type: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember6 {
      exprs: Array<
        | UnionMember6.UnionMember0
        | UnionMember6.UnionMember1
        | UnionMember6.UnionMember2
        | UnionMember6.UnionMember3
        | UnionMember6.UnionMember4
        | UnionMember6.UnionMember5
        | UnionMember6.UnionMember6
        | UnionMember6.UnionMember7
      >;

      type: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember7 {
      base: number;

      expr:
        | UnionMember7.UnionMember0
        | UnionMember7.UnionMember1
        | UnionMember7.UnionMember2
        | UnionMember7.UnionMember3
        | UnionMember7.UnionMember4
        | UnionMember7.UnionMember5
        | UnionMember7.UnionMember6
        | UnionMember7.UnionMember7;

      type: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        type: 'Attr';
      }

      export interface UnionMember1 {
        type: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        type: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<unknown>;

        type: 'Mult';
      }

      export interface UnionMember4 {
        exprs: Array<unknown>;

        type: 'Div';
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        type: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        type: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        type: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          type: 'Attr';
        }

        export interface UnionMember1 {
          type: 'Const';

          value: number;
        }
      }
    }
  }
}

export declare namespace SearchRepos {
  export {
    type SearchRepoNaturalLanguageResponse as SearchRepoNaturalLanguageResponse,
    type SearchRepoSearchResponse as SearchRepoSearchResponse,
    type SearchRepoNaturalLanguageParams as SearchRepoNaturalLanguageParams,
    type SearchRepoSearchParams as SearchRepoSearchParams,
  };
}
