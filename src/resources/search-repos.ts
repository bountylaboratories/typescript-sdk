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
    return this._client.post('/api/search/repos/natural-language', { body, ...options });
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
    return this._client.post('/api/search/repos', { body, ...options });
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
   * Enable cursor-based pagination to fetch results across multiple requests
   */
  enablePagination?: boolean;

  /**
   * When true, the AI will generate a user location filter and apply it to ALL
   * user-returning includeAttributes (contributors, starrers). This filter will
   * override any manually-specified filters.
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
    | SearchRepoNaturalLanguageParams.UnionMember0
    | SearchRepoNaturalLanguageParams.UnionMember1
    | SearchRepoNaturalLanguageParams.UnionMember2
    | SearchRepoNaturalLanguageParams.UnionMember3
    | SearchRepoNaturalLanguageParams.UnionMember4
    | SearchRepoNaturalLanguageParams.UnionMember5
    | SearchRepoNaturalLanguageParams.UnionMember6
    | SearchRepoNaturalLanguageParams.UnionMember7;
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
      filters?:
        | Contributors.UnionMember0
        | Contributors.UnionMember1
        | Contributors.UnionMember2
        | Contributors.UnionMember3
        | Contributors.UnionMember4
        | Contributors.UnionMember5
        | Contributors.UnionMember6
        | Contributors.UnionMember7
        | Contributors.UnionMember8
        | Contributors.UnionMember9
        | Contributors.UnionMember10
        | Contributors.UnionMember11
        | Contributors.UnionMember12
        | Contributors.UnionMember13
        | Contributors.UnionMember14
        | Contributors.UnionMember15
        | Contributors.UnionMember16
        | Contributors.UnionMember17
        | Contributors.UnionMember18
        | Contributors.UnionMember19
        | Contributors.UnionMember20
        | Contributors.UnionMember21
        | Contributors.UnionMember22
        | Contributors.UnionMember23
        | Contributors.UnionMember24
        | Contributors.UnionMember25
        | Contributors.UnionMember26
        | Contributors.UnionMember27
        | Contributors.UnionMember28
        | Contributors.UnionMember29
        | Contributors.UnionMember30
        | Contributors.UnionMember31
        | Contributors.UnionMember32
        | Contributors.UnionMember33
        | Contributors.UnionMember34
        | Contributors.UnionMember35
        | Contributors.UnionMember36
        | Contributors.UnionMember37
        | Contributors.UnionMember38
        | Contributors.UnionMember39
        | Contributors.UnionMember40
        | Contributors.UnionMember41
        | Contributors.UnionMember42
        | Contributors.UnionMember43
        | Contributors.UnionMember44
        | Contributors.UnionMember45
        | Contributors.UnionMember46
        | Contributors.UnionMember47
        | Contributors.UnionMember48
        | Contributors.UnionMember49
        | Contributors.UnionMember50
        | Contributors.UnionMember51
        | Contributors.UnionMember52
        | Contributors.UnionMember53
        | Contributors.UnionMember54
        | Contributors.UnionMember55
        | Contributors.UnionMember56
        | Contributors.UnionMember57
        | Contributors.UnionMember58
        | Contributors.UnionMember59
        | Contributors.UnionMember60
        | Contributors.UnionMember61
        | Contributors.UnionMember62
        | Contributors.UnionMember63
        | Contributors.UnionMember64
        | Contributors.UnionMember65
        | Contributors.UnionMember66
        | Contributors.UnionMember67
        | Contributors.UnionMember68
        | Contributors.UnionMember69
        | Contributors.UnionMember70
        | Contributors.UnionMember71
        | Contributors.UnionMember72
        | Contributors.UnionMember73
        | Contributors.UnionMember74
        | Contributors.UnionMember75
        | Contributors.UnionMember76
        | Contributors.UnionMember77
        | Contributors.UnionMember78
        | Contributors.UnionMember79
        | Contributors.UnionMember80
        | Contributors.UnionMember81
        | Contributors.UnionMember82
        | Contributors.UnionMember83
        | Contributors.UnionMember84
        | Contributors.UnionMember85
        | Contributors.UnionMember86
        | Contributors.UnionMember87
        | Contributors.UnionMember88
        | Contributors.UnionMember89
        | Contributors.UnionMember90
        | Contributors.UnionMember91
        | Contributors.UnionMember92
        | Contributors.UnionMember93
        | Contributors.UnionMember94
        | Contributors.UnionMember95
        | Contributors.UnionMember96
        | Contributors.UnionMember97
        | Contributors.UnionMember98
        | Contributors.UnionMember99
        | Contributors.UnionMember100
        | Contributors.UnionMember101
        | Contributors.UnionMember102
        | Contributors.UnionMember103
        | Contributors.UnionMember104
        | Contributors.UnionMember105
        | Contributors.UnionMember106
        | Contributors.UnionMember107
        | Contributors.UnionMember108
        | Contributors.UnionMember109
        | Contributors.UnionMember110
        | Contributors.UnionMember111
        | Contributors.UnionMember112
        | Contributors.UnionMember113
        | Contributors.UnionMember114
        | Contributors.UnionMember115
        | Contributors.UnionMember116
        | Contributors.UnionMember117
        | Contributors.UnionMember118
        | Contributors.UnionMember119
        | Contributors.UnionMember120
        | Contributors.UnionMember121
        | Contributors.UnionMember122
        | Contributors.UnionMember123
        | Contributors.UnionMember124
        | Contributors.UnionMember125
        | Contributors.UnionMember126
        | Contributors.UnionMember127
        | Contributors.UnionMember128
        | Contributors.UnionMember129
        | Contributors.UnionMember130
        | Contributors.UnionMember131
        | Contributors.UnionMember132
        | Contributors.UnionMember133
        | Contributors.UnionMember134
        | Contributors.UnionMember135
        | Contributors.UnionMember136
        | Contributors.UnionMember137
        | Contributors.UnionMember138
        | Contributors.UnionMember139
        | Contributors.UnionMember140;
    }

    export namespace Contributors {
      export interface UnionMember0 {
        field: 'githubId';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember1 {
        field: 'githubId';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember2 {
        field: 'githubId';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember3 {
        field: 'githubId';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember4 {
        field: 'githubId';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember5 {
        field: 'githubId';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember6 {
        field: 'githubId';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember7 {
        field: 'githubId';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember8 {
        field: 'githubId';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember9 {
        field: 'githubId';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember10 {
        field: 'githubId';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember11 {
        field: 'githubId';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember12 {
        field: 'githubId';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember13 {
        field: 'login';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember14 {
        field: 'login';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember15 {
        field: 'login';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember16 {
        field: 'login';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember17 {
        field: 'login';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember18 {
        field: 'login';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember19 {
        field: 'login';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember20 {
        field: 'login';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember21 {
        field: 'login';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember22 {
        field: 'login';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember23 {
        field: 'login';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember24 {
        field: 'login';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember25 {
        field: 'login';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember26 {
        field: 'login';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember27 {
        field: 'displayName';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember28 {
        field: 'displayName';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember29 {
        field: 'displayName';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember30 {
        field: 'displayName';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember31 {
        field: 'displayName';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember32 {
        field: 'displayName';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember33 {
        field: 'displayName';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember34 {
        field: 'displayName';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember35 {
        field: 'displayName';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember36 {
        field: 'displayName';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember37 {
        field: 'displayName';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember38 {
        field: 'displayName';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember39 {
        field: 'displayName';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember40 {
        field: 'displayName';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember41 {
        field: 'bio';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember42 {
        field: 'bio';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember43 {
        field: 'bio';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember44 {
        field: 'bio';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember45 {
        field: 'bio';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember46 {
        field: 'bio';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember47 {
        field: 'bio';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember48 {
        field: 'bio';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember49 {
        field: 'bio';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember50 {
        field: 'bio';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember51 {
        field: 'bio';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember52 {
        field: 'bio';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember53 {
        field: 'bio';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember54 {
        field: 'bio';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember55 {
        field: 'company';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember56 {
        field: 'company';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember57 {
        field: 'company';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember58 {
        field: 'company';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember59 {
        field: 'company';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember60 {
        field: 'company';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember61 {
        field: 'company';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember62 {
        field: 'company';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember63 {
        field: 'company';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember64 {
        field: 'company';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember65 {
        field: 'company';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember66 {
        field: 'company';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember67 {
        field: 'company';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember68 {
        field: 'company';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember69 {
        field: 'location';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember70 {
        field: 'location';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember71 {
        field: 'location';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember72 {
        field: 'location';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember73 {
        field: 'location';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember74 {
        field: 'location';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember75 {
        field: 'location';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember76 {
        field: 'location';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember77 {
        field: 'location';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember78 {
        field: 'location';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember79 {
        field: 'location';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember80 {
        field: 'location';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember81 {
        field: 'location';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember82 {
        field: 'location';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember83 {
        field: 'emails';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember84 {
        field: 'emails';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember85 {
        field: 'emails';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember86 {
        field: 'emails';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember87 {
        field: 'emails';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember88 {
        field: 'emails';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember89 {
        field: 'emails';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember90 {
        field: 'emails';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember91 {
        field: 'emails';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember92 {
        field: 'emails';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember93 {
        field: 'emails';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember94 {
        field: 'emails';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember95 {
        field: 'emails';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember96 {
        field: 'emails';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember97 {
        field: 'resolvedCountry';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember98 {
        field: 'resolvedCountry';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember99 {
        field: 'resolvedCountry';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember100 {
        field: 'resolvedCountry';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember101 {
        field: 'resolvedCountry';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember102 {
        field: 'resolvedCountry';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember103 {
        field: 'resolvedCountry';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember104 {
        field: 'resolvedCountry';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember105 {
        field: 'resolvedCountry';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember106 {
        field: 'resolvedCountry';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember107 {
        field: 'resolvedCountry';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember108 {
        field: 'resolvedCountry';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember109 {
        field: 'resolvedCountry';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember110 {
        field: 'resolvedCountry';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember111 {
        field: 'resolvedState';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember112 {
        field: 'resolvedState';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember113 {
        field: 'resolvedState';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember114 {
        field: 'resolvedState';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember115 {
        field: 'resolvedState';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember116 {
        field: 'resolvedState';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember117 {
        field: 'resolvedState';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember118 {
        field: 'resolvedState';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember119 {
        field: 'resolvedState';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember120 {
        field: 'resolvedState';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember121 {
        field: 'resolvedState';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember122 {
        field: 'resolvedState';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember123 {
        field: 'resolvedState';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember124 {
        field: 'resolvedState';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember125 {
        field: 'resolvedCity';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember126 {
        field: 'resolvedCity';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember127 {
        field: 'resolvedCity';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember128 {
        field: 'resolvedCity';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember129 {
        field: 'resolvedCity';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember130 {
        field: 'resolvedCity';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember131 {
        field: 'resolvedCity';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember132 {
        field: 'resolvedCity';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember133 {
        field: 'resolvedCity';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember134 {
        field: 'resolvedCity';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember135 {
        field: 'resolvedCity';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember136 {
        field: 'resolvedCity';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember137 {
        field: 'resolvedCity';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember138 {
        field: 'resolvedCity';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember139 {
        filters: Array<
          | UnionMember139.UnionMember0
          | UnionMember139.UnionMember1
          | UnionMember139.UnionMember2
          | UnionMember139.UnionMember3
          | UnionMember139.UnionMember4
          | UnionMember139.UnionMember5
          | UnionMember139.UnionMember6
          | UnionMember139.UnionMember7
          | UnionMember139.UnionMember8
          | UnionMember139.UnionMember9
          | UnionMember139.UnionMember10
          | UnionMember139.UnionMember11
          | UnionMember139.UnionMember12
          | UnionMember139.UnionMember13
          | UnionMember139.UnionMember14
          | UnionMember139.UnionMember15
          | UnionMember139.UnionMember16
          | UnionMember139.UnionMember17
          | UnionMember139.UnionMember18
          | UnionMember139.UnionMember19
          | UnionMember139.UnionMember20
          | UnionMember139.UnionMember21
          | UnionMember139.UnionMember22
          | UnionMember139.UnionMember23
          | UnionMember139.UnionMember24
          | UnionMember139.UnionMember25
          | UnionMember139.UnionMember26
          | UnionMember139.UnionMember27
          | UnionMember139.UnionMember28
          | UnionMember139.UnionMember29
          | UnionMember139.UnionMember30
          | UnionMember139.UnionMember31
          | UnionMember139.UnionMember32
          | UnionMember139.UnionMember33
          | UnionMember139.UnionMember34
          | UnionMember139.UnionMember35
          | UnionMember139.UnionMember36
          | UnionMember139.UnionMember37
          | UnionMember139.UnionMember38
          | UnionMember139.UnionMember39
          | UnionMember139.UnionMember40
          | UnionMember139.UnionMember41
          | UnionMember139.UnionMember42
          | UnionMember139.UnionMember43
          | UnionMember139.UnionMember44
          | UnionMember139.UnionMember45
          | UnionMember139.UnionMember46
          | UnionMember139.UnionMember47
          | UnionMember139.UnionMember48
          | UnionMember139.UnionMember49
          | UnionMember139.UnionMember50
          | UnionMember139.UnionMember51
          | UnionMember139.UnionMember52
          | UnionMember139.UnionMember53
          | UnionMember139.UnionMember54
          | UnionMember139.UnionMember55
          | UnionMember139.UnionMember56
          | UnionMember139.UnionMember57
          | UnionMember139.UnionMember58
          | UnionMember139.UnionMember59
          | UnionMember139.UnionMember60
          | UnionMember139.UnionMember61
          | UnionMember139.UnionMember62
          | UnionMember139.UnionMember63
          | UnionMember139.UnionMember64
          | UnionMember139.UnionMember65
          | UnionMember139.UnionMember66
          | UnionMember139.UnionMember67
          | UnionMember139.UnionMember68
          | UnionMember139.UnionMember69
          | UnionMember139.UnionMember70
          | UnionMember139.UnionMember71
          | UnionMember139.UnionMember72
          | UnionMember139.UnionMember73
          | UnionMember139.UnionMember74
          | UnionMember139.UnionMember75
          | UnionMember139.UnionMember76
          | UnionMember139.UnionMember77
          | UnionMember139.UnionMember78
          | UnionMember139.UnionMember79
          | UnionMember139.UnionMember80
          | UnionMember139.UnionMember81
          | UnionMember139.UnionMember82
          | UnionMember139.UnionMember83
          | UnionMember139.UnionMember84
          | UnionMember139.UnionMember85
          | UnionMember139.UnionMember86
          | UnionMember139.UnionMember87
          | UnionMember139.UnionMember88
          | UnionMember139.UnionMember89
          | UnionMember139.UnionMember90
          | UnionMember139.UnionMember91
          | UnionMember139.UnionMember92
          | UnionMember139.UnionMember93
          | UnionMember139.UnionMember94
          | UnionMember139.UnionMember95
          | UnionMember139.UnionMember96
          | UnionMember139.UnionMember97
          | UnionMember139.UnionMember98
          | UnionMember139.UnionMember99
          | UnionMember139.UnionMember100
          | UnionMember139.UnionMember101
          | UnionMember139.UnionMember102
          | UnionMember139.UnionMember103
          | UnionMember139.UnionMember104
          | UnionMember139.UnionMember105
          | UnionMember139.UnionMember106
          | UnionMember139.UnionMember107
          | UnionMember139.UnionMember108
          | UnionMember139.UnionMember109
          | UnionMember139.UnionMember110
          | UnionMember139.UnionMember111
          | UnionMember139.UnionMember112
          | UnionMember139.UnionMember113
          | UnionMember139.UnionMember114
          | UnionMember139.UnionMember115
          | UnionMember139.UnionMember116
          | UnionMember139.UnionMember117
          | UnionMember139.UnionMember118
          | UnionMember139.UnionMember119
          | UnionMember139.UnionMember120
          | UnionMember139.UnionMember121
          | UnionMember139.UnionMember122
          | UnionMember139.UnionMember123
          | UnionMember139.UnionMember124
          | UnionMember139.UnionMember125
          | UnionMember139.UnionMember126
          | UnionMember139.UnionMember127
          | UnionMember139.UnionMember128
          | UnionMember139.UnionMember129
          | UnionMember139.UnionMember130
          | UnionMember139.UnionMember131
          | UnionMember139.UnionMember132
          | UnionMember139.UnionMember133
          | UnionMember139.UnionMember134
          | UnionMember139.UnionMember135
          | UnionMember139.UnionMember136
          | UnionMember139.UnionMember137
          | UnionMember139.UnionMember138
        >;

        op: 'And' | 'Or';
      }

      export namespace UnionMember139 {
        export interface UnionMember0 {
          field: 'githubId';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember1 {
          field: 'githubId';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember2 {
          field: 'githubId';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember3 {
          field: 'githubId';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember4 {
          field: 'githubId';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember5 {
          field: 'githubId';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember6 {
          field: 'githubId';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember7 {
          field: 'githubId';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember8 {
          field: 'githubId';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember9 {
          field: 'githubId';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember10 {
          field: 'githubId';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember11 {
          field: 'githubId';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember12 {
          field: 'githubId';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember13 {
          field: 'login';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember14 {
          field: 'login';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember15 {
          field: 'login';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember16 {
          field: 'login';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember17 {
          field: 'login';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember18 {
          field: 'login';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember19 {
          field: 'login';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember20 {
          field: 'login';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember21 {
          field: 'login';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember22 {
          field: 'login';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember23 {
          field: 'login';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember24 {
          field: 'login';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember25 {
          field: 'login';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember26 {
          field: 'login';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember27 {
          field: 'displayName';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember28 {
          field: 'displayName';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember29 {
          field: 'displayName';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember30 {
          field: 'displayName';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember31 {
          field: 'displayName';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember32 {
          field: 'displayName';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember33 {
          field: 'displayName';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember34 {
          field: 'displayName';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember35 {
          field: 'displayName';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember36 {
          field: 'displayName';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember37 {
          field: 'displayName';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember38 {
          field: 'displayName';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember39 {
          field: 'displayName';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember40 {
          field: 'displayName';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember41 {
          field: 'bio';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember42 {
          field: 'bio';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember43 {
          field: 'bio';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember44 {
          field: 'bio';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember45 {
          field: 'bio';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember46 {
          field: 'bio';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember47 {
          field: 'bio';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember48 {
          field: 'bio';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember49 {
          field: 'bio';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember50 {
          field: 'bio';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember51 {
          field: 'bio';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember52 {
          field: 'bio';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember53 {
          field: 'bio';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember54 {
          field: 'bio';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember55 {
          field: 'company';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember56 {
          field: 'company';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember57 {
          field: 'company';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember58 {
          field: 'company';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember59 {
          field: 'company';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember60 {
          field: 'company';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember61 {
          field: 'company';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember62 {
          field: 'company';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember63 {
          field: 'company';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember64 {
          field: 'company';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember65 {
          field: 'company';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember66 {
          field: 'company';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember67 {
          field: 'company';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember68 {
          field: 'company';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember69 {
          field: 'location';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember70 {
          field: 'location';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember71 {
          field: 'location';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember72 {
          field: 'location';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember73 {
          field: 'location';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember74 {
          field: 'location';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember75 {
          field: 'location';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember76 {
          field: 'location';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember77 {
          field: 'location';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember78 {
          field: 'location';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember79 {
          field: 'location';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember80 {
          field: 'location';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember81 {
          field: 'location';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember82 {
          field: 'location';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember83 {
          field: 'emails';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember84 {
          field: 'emails';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember85 {
          field: 'emails';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember86 {
          field: 'emails';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember87 {
          field: 'emails';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember88 {
          field: 'emails';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember89 {
          field: 'emails';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember90 {
          field: 'emails';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember91 {
          field: 'emails';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember92 {
          field: 'emails';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember93 {
          field: 'emails';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember94 {
          field: 'emails';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember95 {
          field: 'emails';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember96 {
          field: 'emails';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember97 {
          field: 'resolvedCountry';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember98 {
          field: 'resolvedCountry';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember99 {
          field: 'resolvedCountry';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember100 {
          field: 'resolvedCountry';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember101 {
          field: 'resolvedCountry';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember102 {
          field: 'resolvedCountry';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember103 {
          field: 'resolvedCountry';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember104 {
          field: 'resolvedCountry';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember105 {
          field: 'resolvedCountry';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember106 {
          field: 'resolvedCountry';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember107 {
          field: 'resolvedCountry';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember108 {
          field: 'resolvedCountry';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember109 {
          field: 'resolvedCountry';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember110 {
          field: 'resolvedCountry';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember111 {
          field: 'resolvedState';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember112 {
          field: 'resolvedState';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember113 {
          field: 'resolvedState';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember114 {
          field: 'resolvedState';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember115 {
          field: 'resolvedState';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember116 {
          field: 'resolvedState';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember117 {
          field: 'resolvedState';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember118 {
          field: 'resolvedState';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember119 {
          field: 'resolvedState';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember120 {
          field: 'resolvedState';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember121 {
          field: 'resolvedState';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember122 {
          field: 'resolvedState';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember123 {
          field: 'resolvedState';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember124 {
          field: 'resolvedState';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember125 {
          field: 'resolvedCity';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember126 {
          field: 'resolvedCity';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember127 {
          field: 'resolvedCity';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember128 {
          field: 'resolvedCity';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember129 {
          field: 'resolvedCity';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember130 {
          field: 'resolvedCity';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember131 {
          field: 'resolvedCity';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember132 {
          field: 'resolvedCity';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember133 {
          field: 'resolvedCity';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember134 {
          field: 'resolvedCity';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember135 {
          field: 'resolvedCity';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember136 {
          field: 'resolvedCity';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember137 {
          field: 'resolvedCity';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember138 {
          field: 'resolvedCity';

          op: 'ContainsAllTokens';

          value: string;
        }
      }

      export interface UnionMember140 {
        filters: Array<
          | UnionMember140.UnionMember0
          | UnionMember140.UnionMember1
          | UnionMember140.UnionMember2
          | UnionMember140.UnionMember3
          | UnionMember140.UnionMember4
          | UnionMember140.UnionMember5
          | UnionMember140.UnionMember6
          | UnionMember140.UnionMember7
          | UnionMember140.UnionMember8
          | UnionMember140.UnionMember9
          | UnionMember140.UnionMember10
          | UnionMember140.UnionMember11
          | UnionMember140.UnionMember12
          | UnionMember140.UnionMember13
          | UnionMember140.UnionMember14
          | UnionMember140.UnionMember15
          | UnionMember140.UnionMember16
          | UnionMember140.UnionMember17
          | UnionMember140.UnionMember18
          | UnionMember140.UnionMember19
          | UnionMember140.UnionMember20
          | UnionMember140.UnionMember21
          | UnionMember140.UnionMember22
          | UnionMember140.UnionMember23
          | UnionMember140.UnionMember24
          | UnionMember140.UnionMember25
          | UnionMember140.UnionMember26
          | UnionMember140.UnionMember27
          | UnionMember140.UnionMember28
          | UnionMember140.UnionMember29
          | UnionMember140.UnionMember30
          | UnionMember140.UnionMember31
          | UnionMember140.UnionMember32
          | UnionMember140.UnionMember33
          | UnionMember140.UnionMember34
          | UnionMember140.UnionMember35
          | UnionMember140.UnionMember36
          | UnionMember140.UnionMember37
          | UnionMember140.UnionMember38
          | UnionMember140.UnionMember39
          | UnionMember140.UnionMember40
          | UnionMember140.UnionMember41
          | UnionMember140.UnionMember42
          | UnionMember140.UnionMember43
          | UnionMember140.UnionMember44
          | UnionMember140.UnionMember45
          | UnionMember140.UnionMember46
          | UnionMember140.UnionMember47
          | UnionMember140.UnionMember48
          | UnionMember140.UnionMember49
          | UnionMember140.UnionMember50
          | UnionMember140.UnionMember51
          | UnionMember140.UnionMember52
          | UnionMember140.UnionMember53
          | UnionMember140.UnionMember54
          | UnionMember140.UnionMember55
          | UnionMember140.UnionMember56
          | UnionMember140.UnionMember57
          | UnionMember140.UnionMember58
          | UnionMember140.UnionMember59
          | UnionMember140.UnionMember60
          | UnionMember140.UnionMember61
          | UnionMember140.UnionMember62
          | UnionMember140.UnionMember63
          | UnionMember140.UnionMember64
          | UnionMember140.UnionMember65
          | UnionMember140.UnionMember66
          | UnionMember140.UnionMember67
          | UnionMember140.UnionMember68
          | UnionMember140.UnionMember69
          | UnionMember140.UnionMember70
          | UnionMember140.UnionMember71
          | UnionMember140.UnionMember72
          | UnionMember140.UnionMember73
          | UnionMember140.UnionMember74
          | UnionMember140.UnionMember75
          | UnionMember140.UnionMember76
          | UnionMember140.UnionMember77
          | UnionMember140.UnionMember78
          | UnionMember140.UnionMember79
          | UnionMember140.UnionMember80
          | UnionMember140.UnionMember81
          | UnionMember140.UnionMember82
          | UnionMember140.UnionMember83
          | UnionMember140.UnionMember84
          | UnionMember140.UnionMember85
          | UnionMember140.UnionMember86
          | UnionMember140.UnionMember87
          | UnionMember140.UnionMember88
          | UnionMember140.UnionMember89
          | UnionMember140.UnionMember90
          | UnionMember140.UnionMember91
          | UnionMember140.UnionMember92
          | UnionMember140.UnionMember93
          | UnionMember140.UnionMember94
          | UnionMember140.UnionMember95
          | UnionMember140.UnionMember96
          | UnionMember140.UnionMember97
          | UnionMember140.UnionMember98
          | UnionMember140.UnionMember99
          | UnionMember140.UnionMember100
          | UnionMember140.UnionMember101
          | UnionMember140.UnionMember102
          | UnionMember140.UnionMember103
          | UnionMember140.UnionMember104
          | UnionMember140.UnionMember105
          | UnionMember140.UnionMember106
          | UnionMember140.UnionMember107
          | UnionMember140.UnionMember108
          | UnionMember140.UnionMember109
          | UnionMember140.UnionMember110
          | UnionMember140.UnionMember111
          | UnionMember140.UnionMember112
          | UnionMember140.UnionMember113
          | UnionMember140.UnionMember114
          | UnionMember140.UnionMember115
          | UnionMember140.UnionMember116
          | UnionMember140.UnionMember117
          | UnionMember140.UnionMember118
          | UnionMember140.UnionMember119
          | UnionMember140.UnionMember120
          | UnionMember140.UnionMember121
          | UnionMember140.UnionMember122
          | UnionMember140.UnionMember123
          | UnionMember140.UnionMember124
          | UnionMember140.UnionMember125
          | UnionMember140.UnionMember126
          | UnionMember140.UnionMember127
          | UnionMember140.UnionMember128
          | UnionMember140.UnionMember129
          | UnionMember140.UnionMember130
          | UnionMember140.UnionMember131
          | UnionMember140.UnionMember132
          | UnionMember140.UnionMember133
          | UnionMember140.UnionMember134
          | UnionMember140.UnionMember135
          | UnionMember140.UnionMember136
          | UnionMember140.UnionMember137
          | UnionMember140.UnionMember138
          | UnionMember140.UnionMember139
        >;

        op: 'And' | 'Or';
      }

      export namespace UnionMember140 {
        export interface UnionMember0 {
          field: 'githubId';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember1 {
          field: 'githubId';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember2 {
          field: 'githubId';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember3 {
          field: 'githubId';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember4 {
          field: 'githubId';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember5 {
          field: 'githubId';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember6 {
          field: 'githubId';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember7 {
          field: 'githubId';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember8 {
          field: 'githubId';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember9 {
          field: 'githubId';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember10 {
          field: 'githubId';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember11 {
          field: 'githubId';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember12 {
          field: 'githubId';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember13 {
          field: 'login';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember14 {
          field: 'login';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember15 {
          field: 'login';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember16 {
          field: 'login';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember17 {
          field: 'login';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember18 {
          field: 'login';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember19 {
          field: 'login';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember20 {
          field: 'login';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember21 {
          field: 'login';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember22 {
          field: 'login';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember23 {
          field: 'login';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember24 {
          field: 'login';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember25 {
          field: 'login';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember26 {
          field: 'login';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember27 {
          field: 'displayName';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember28 {
          field: 'displayName';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember29 {
          field: 'displayName';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember30 {
          field: 'displayName';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember31 {
          field: 'displayName';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember32 {
          field: 'displayName';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember33 {
          field: 'displayName';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember34 {
          field: 'displayName';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember35 {
          field: 'displayName';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember36 {
          field: 'displayName';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember37 {
          field: 'displayName';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember38 {
          field: 'displayName';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember39 {
          field: 'displayName';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember40 {
          field: 'displayName';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember41 {
          field: 'bio';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember42 {
          field: 'bio';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember43 {
          field: 'bio';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember44 {
          field: 'bio';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember45 {
          field: 'bio';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember46 {
          field: 'bio';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember47 {
          field: 'bio';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember48 {
          field: 'bio';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember49 {
          field: 'bio';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember50 {
          field: 'bio';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember51 {
          field: 'bio';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember52 {
          field: 'bio';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember53 {
          field: 'bio';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember54 {
          field: 'bio';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember55 {
          field: 'company';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember56 {
          field: 'company';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember57 {
          field: 'company';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember58 {
          field: 'company';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember59 {
          field: 'company';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember60 {
          field: 'company';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember61 {
          field: 'company';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember62 {
          field: 'company';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember63 {
          field: 'company';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember64 {
          field: 'company';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember65 {
          field: 'company';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember66 {
          field: 'company';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember67 {
          field: 'company';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember68 {
          field: 'company';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember69 {
          field: 'location';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember70 {
          field: 'location';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember71 {
          field: 'location';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember72 {
          field: 'location';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember73 {
          field: 'location';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember74 {
          field: 'location';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember75 {
          field: 'location';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember76 {
          field: 'location';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember77 {
          field: 'location';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember78 {
          field: 'location';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember79 {
          field: 'location';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember80 {
          field: 'location';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember81 {
          field: 'location';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember82 {
          field: 'location';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember83 {
          field: 'emails';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember84 {
          field: 'emails';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember85 {
          field: 'emails';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember86 {
          field: 'emails';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember87 {
          field: 'emails';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember88 {
          field: 'emails';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember89 {
          field: 'emails';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember90 {
          field: 'emails';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember91 {
          field: 'emails';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember92 {
          field: 'emails';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember93 {
          field: 'emails';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember94 {
          field: 'emails';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember95 {
          field: 'emails';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember96 {
          field: 'emails';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember97 {
          field: 'resolvedCountry';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember98 {
          field: 'resolvedCountry';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember99 {
          field: 'resolvedCountry';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember100 {
          field: 'resolvedCountry';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember101 {
          field: 'resolvedCountry';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember102 {
          field: 'resolvedCountry';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember103 {
          field: 'resolvedCountry';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember104 {
          field: 'resolvedCountry';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember105 {
          field: 'resolvedCountry';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember106 {
          field: 'resolvedCountry';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember107 {
          field: 'resolvedCountry';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember108 {
          field: 'resolvedCountry';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember109 {
          field: 'resolvedCountry';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember110 {
          field: 'resolvedCountry';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember111 {
          field: 'resolvedState';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember112 {
          field: 'resolvedState';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember113 {
          field: 'resolvedState';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember114 {
          field: 'resolvedState';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember115 {
          field: 'resolvedState';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember116 {
          field: 'resolvedState';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember117 {
          field: 'resolvedState';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember118 {
          field: 'resolvedState';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember119 {
          field: 'resolvedState';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember120 {
          field: 'resolvedState';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember121 {
          field: 'resolvedState';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember122 {
          field: 'resolvedState';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember123 {
          field: 'resolvedState';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember124 {
          field: 'resolvedState';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember125 {
          field: 'resolvedCity';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember126 {
          field: 'resolvedCity';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember127 {
          field: 'resolvedCity';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember128 {
          field: 'resolvedCity';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember129 {
          field: 'resolvedCity';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember130 {
          field: 'resolvedCity';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember131 {
          field: 'resolvedCity';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember132 {
          field: 'resolvedCity';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember133 {
          field: 'resolvedCity';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember134 {
          field: 'resolvedCity';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember135 {
          field: 'resolvedCity';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember136 {
          field: 'resolvedCity';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember137 {
          field: 'resolvedCity';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember138 {
          field: 'resolvedCity';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember139 {
          filters: Array<
            | UnionMember139.UnionMember0
            | UnionMember139.UnionMember1
            | UnionMember139.UnionMember2
            | UnionMember139.UnionMember3
            | UnionMember139.UnionMember4
            | UnionMember139.UnionMember5
            | UnionMember139.UnionMember6
            | UnionMember139.UnionMember7
            | UnionMember139.UnionMember8
            | UnionMember139.UnionMember9
            | UnionMember139.UnionMember10
            | UnionMember139.UnionMember11
            | UnionMember139.UnionMember12
            | UnionMember139.UnionMember13
            | UnionMember139.UnionMember14
            | UnionMember139.UnionMember15
            | UnionMember139.UnionMember16
            | UnionMember139.UnionMember17
            | UnionMember139.UnionMember18
            | UnionMember139.UnionMember19
            | UnionMember139.UnionMember20
            | UnionMember139.UnionMember21
            | UnionMember139.UnionMember22
            | UnionMember139.UnionMember23
            | UnionMember139.UnionMember24
            | UnionMember139.UnionMember25
            | UnionMember139.UnionMember26
            | UnionMember139.UnionMember27
            | UnionMember139.UnionMember28
            | UnionMember139.UnionMember29
            | UnionMember139.UnionMember30
            | UnionMember139.UnionMember31
            | UnionMember139.UnionMember32
            | UnionMember139.UnionMember33
            | UnionMember139.UnionMember34
            | UnionMember139.UnionMember35
            | UnionMember139.UnionMember36
            | UnionMember139.UnionMember37
            | UnionMember139.UnionMember38
            | UnionMember139.UnionMember39
            | UnionMember139.UnionMember40
            | UnionMember139.UnionMember41
            | UnionMember139.UnionMember42
            | UnionMember139.UnionMember43
            | UnionMember139.UnionMember44
            | UnionMember139.UnionMember45
            | UnionMember139.UnionMember46
            | UnionMember139.UnionMember47
            | UnionMember139.UnionMember48
            | UnionMember139.UnionMember49
            | UnionMember139.UnionMember50
            | UnionMember139.UnionMember51
            | UnionMember139.UnionMember52
            | UnionMember139.UnionMember53
            | UnionMember139.UnionMember54
            | UnionMember139.UnionMember55
            | UnionMember139.UnionMember56
            | UnionMember139.UnionMember57
            | UnionMember139.UnionMember58
            | UnionMember139.UnionMember59
            | UnionMember139.UnionMember60
            | UnionMember139.UnionMember61
            | UnionMember139.UnionMember62
            | UnionMember139.UnionMember63
            | UnionMember139.UnionMember64
            | UnionMember139.UnionMember65
            | UnionMember139.UnionMember66
            | UnionMember139.UnionMember67
            | UnionMember139.UnionMember68
            | UnionMember139.UnionMember69
            | UnionMember139.UnionMember70
            | UnionMember139.UnionMember71
            | UnionMember139.UnionMember72
            | UnionMember139.UnionMember73
            | UnionMember139.UnionMember74
            | UnionMember139.UnionMember75
            | UnionMember139.UnionMember76
            | UnionMember139.UnionMember77
            | UnionMember139.UnionMember78
            | UnionMember139.UnionMember79
            | UnionMember139.UnionMember80
            | UnionMember139.UnionMember81
            | UnionMember139.UnionMember82
            | UnionMember139.UnionMember83
            | UnionMember139.UnionMember84
            | UnionMember139.UnionMember85
            | UnionMember139.UnionMember86
            | UnionMember139.UnionMember87
            | UnionMember139.UnionMember88
            | UnionMember139.UnionMember89
            | UnionMember139.UnionMember90
            | UnionMember139.UnionMember91
            | UnionMember139.UnionMember92
            | UnionMember139.UnionMember93
            | UnionMember139.UnionMember94
            | UnionMember139.UnionMember95
            | UnionMember139.UnionMember96
            | UnionMember139.UnionMember97
            | UnionMember139.UnionMember98
            | UnionMember139.UnionMember99
            | UnionMember139.UnionMember100
            | UnionMember139.UnionMember101
            | UnionMember139.UnionMember102
            | UnionMember139.UnionMember103
            | UnionMember139.UnionMember104
            | UnionMember139.UnionMember105
            | UnionMember139.UnionMember106
            | UnionMember139.UnionMember107
            | UnionMember139.UnionMember108
            | UnionMember139.UnionMember109
            | UnionMember139.UnionMember110
            | UnionMember139.UnionMember111
            | UnionMember139.UnionMember112
            | UnionMember139.UnionMember113
            | UnionMember139.UnionMember114
            | UnionMember139.UnionMember115
            | UnionMember139.UnionMember116
            | UnionMember139.UnionMember117
            | UnionMember139.UnionMember118
            | UnionMember139.UnionMember119
            | UnionMember139.UnionMember120
            | UnionMember139.UnionMember121
            | UnionMember139.UnionMember122
            | UnionMember139.UnionMember123
            | UnionMember139.UnionMember124
            | UnionMember139.UnionMember125
            | UnionMember139.UnionMember126
            | UnionMember139.UnionMember127
            | UnionMember139.UnionMember128
            | UnionMember139.UnionMember129
            | UnionMember139.UnionMember130
            | UnionMember139.UnionMember131
            | UnionMember139.UnionMember132
            | UnionMember139.UnionMember133
            | UnionMember139.UnionMember134
            | UnionMember139.UnionMember135
            | UnionMember139.UnionMember136
            | UnionMember139.UnionMember137
            | UnionMember139.UnionMember138
          >;

          op: 'And' | 'Or';
        }

        export namespace UnionMember139 {
          export interface UnionMember0 {
            field: 'githubId';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember1 {
            field: 'githubId';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember2 {
            field: 'githubId';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember3 {
            field: 'githubId';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember4 {
            field: 'githubId';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember5 {
            field: 'githubId';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember6 {
            field: 'githubId';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember7 {
            field: 'githubId';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember8 {
            field: 'githubId';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember9 {
            field: 'githubId';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember10 {
            field: 'githubId';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember11 {
            field: 'githubId';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember12 {
            field: 'githubId';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember13 {
            field: 'login';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember14 {
            field: 'login';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember15 {
            field: 'login';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember16 {
            field: 'login';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember17 {
            field: 'login';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember18 {
            field: 'login';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember19 {
            field: 'login';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember20 {
            field: 'login';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember21 {
            field: 'login';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember22 {
            field: 'login';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember23 {
            field: 'login';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember24 {
            field: 'login';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember25 {
            field: 'login';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember26 {
            field: 'login';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember27 {
            field: 'displayName';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember28 {
            field: 'displayName';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember29 {
            field: 'displayName';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember30 {
            field: 'displayName';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember31 {
            field: 'displayName';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember32 {
            field: 'displayName';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember33 {
            field: 'displayName';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember34 {
            field: 'displayName';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember35 {
            field: 'displayName';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember36 {
            field: 'displayName';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember37 {
            field: 'displayName';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember38 {
            field: 'displayName';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember39 {
            field: 'displayName';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember40 {
            field: 'displayName';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember41 {
            field: 'bio';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember42 {
            field: 'bio';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember43 {
            field: 'bio';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember44 {
            field: 'bio';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember45 {
            field: 'bio';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember46 {
            field: 'bio';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember47 {
            field: 'bio';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember48 {
            field: 'bio';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember49 {
            field: 'bio';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember50 {
            field: 'bio';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember51 {
            field: 'bio';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember52 {
            field: 'bio';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember53 {
            field: 'bio';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember54 {
            field: 'bio';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember55 {
            field: 'company';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember56 {
            field: 'company';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember57 {
            field: 'company';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember58 {
            field: 'company';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember59 {
            field: 'company';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember60 {
            field: 'company';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember61 {
            field: 'company';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember62 {
            field: 'company';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember63 {
            field: 'company';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember64 {
            field: 'company';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember65 {
            field: 'company';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember66 {
            field: 'company';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember67 {
            field: 'company';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember68 {
            field: 'company';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember69 {
            field: 'location';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember70 {
            field: 'location';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember71 {
            field: 'location';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember72 {
            field: 'location';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember73 {
            field: 'location';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember74 {
            field: 'location';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember75 {
            field: 'location';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember76 {
            field: 'location';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember77 {
            field: 'location';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember78 {
            field: 'location';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember79 {
            field: 'location';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember80 {
            field: 'location';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember81 {
            field: 'location';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember82 {
            field: 'location';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember83 {
            field: 'emails';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember84 {
            field: 'emails';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember85 {
            field: 'emails';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember86 {
            field: 'emails';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember87 {
            field: 'emails';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember88 {
            field: 'emails';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember89 {
            field: 'emails';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember90 {
            field: 'emails';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember91 {
            field: 'emails';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember92 {
            field: 'emails';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember93 {
            field: 'emails';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember94 {
            field: 'emails';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember95 {
            field: 'emails';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember96 {
            field: 'emails';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember97 {
            field: 'resolvedCountry';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember98 {
            field: 'resolvedCountry';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember99 {
            field: 'resolvedCountry';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember100 {
            field: 'resolvedCountry';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember101 {
            field: 'resolvedCountry';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember102 {
            field: 'resolvedCountry';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember103 {
            field: 'resolvedCountry';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember104 {
            field: 'resolvedCountry';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember105 {
            field: 'resolvedCountry';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember106 {
            field: 'resolvedCountry';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember107 {
            field: 'resolvedCountry';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember108 {
            field: 'resolvedCountry';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember109 {
            field: 'resolvedCountry';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember110 {
            field: 'resolvedCountry';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember111 {
            field: 'resolvedState';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember112 {
            field: 'resolvedState';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember113 {
            field: 'resolvedState';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember114 {
            field: 'resolvedState';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember115 {
            field: 'resolvedState';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember116 {
            field: 'resolvedState';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember117 {
            field: 'resolvedState';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember118 {
            field: 'resolvedState';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember119 {
            field: 'resolvedState';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember120 {
            field: 'resolvedState';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember121 {
            field: 'resolvedState';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember122 {
            field: 'resolvedState';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember123 {
            field: 'resolvedState';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember124 {
            field: 'resolvedState';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember125 {
            field: 'resolvedCity';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember126 {
            field: 'resolvedCity';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember127 {
            field: 'resolvedCity';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember128 {
            field: 'resolvedCity';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember129 {
            field: 'resolvedCity';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember130 {
            field: 'resolvedCity';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember131 {
            field: 'resolvedCity';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember132 {
            field: 'resolvedCity';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember133 {
            field: 'resolvedCity';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember134 {
            field: 'resolvedCity';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember135 {
            field: 'resolvedCity';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember136 {
            field: 'resolvedCity';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember137 {
            field: 'resolvedCity';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember138 {
            field: 'resolvedCity';

            op: 'ContainsAllTokens';

            value: string;
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
      filters?:
        | Starrers.UnionMember0
        | Starrers.UnionMember1
        | Starrers.UnionMember2
        | Starrers.UnionMember3
        | Starrers.UnionMember4
        | Starrers.UnionMember5
        | Starrers.UnionMember6
        | Starrers.UnionMember7
        | Starrers.UnionMember8
        | Starrers.UnionMember9
        | Starrers.UnionMember10
        | Starrers.UnionMember11
        | Starrers.UnionMember12
        | Starrers.UnionMember13
        | Starrers.UnionMember14
        | Starrers.UnionMember15
        | Starrers.UnionMember16
        | Starrers.UnionMember17
        | Starrers.UnionMember18
        | Starrers.UnionMember19
        | Starrers.UnionMember20
        | Starrers.UnionMember21
        | Starrers.UnionMember22
        | Starrers.UnionMember23
        | Starrers.UnionMember24
        | Starrers.UnionMember25
        | Starrers.UnionMember26
        | Starrers.UnionMember27
        | Starrers.UnionMember28
        | Starrers.UnionMember29
        | Starrers.UnionMember30
        | Starrers.UnionMember31
        | Starrers.UnionMember32
        | Starrers.UnionMember33
        | Starrers.UnionMember34
        | Starrers.UnionMember35
        | Starrers.UnionMember36
        | Starrers.UnionMember37
        | Starrers.UnionMember38
        | Starrers.UnionMember39
        | Starrers.UnionMember40
        | Starrers.UnionMember41
        | Starrers.UnionMember42
        | Starrers.UnionMember43
        | Starrers.UnionMember44
        | Starrers.UnionMember45
        | Starrers.UnionMember46
        | Starrers.UnionMember47
        | Starrers.UnionMember48
        | Starrers.UnionMember49
        | Starrers.UnionMember50
        | Starrers.UnionMember51
        | Starrers.UnionMember52
        | Starrers.UnionMember53
        | Starrers.UnionMember54
        | Starrers.UnionMember55
        | Starrers.UnionMember56
        | Starrers.UnionMember57
        | Starrers.UnionMember58
        | Starrers.UnionMember59
        | Starrers.UnionMember60
        | Starrers.UnionMember61
        | Starrers.UnionMember62
        | Starrers.UnionMember63
        | Starrers.UnionMember64
        | Starrers.UnionMember65
        | Starrers.UnionMember66
        | Starrers.UnionMember67
        | Starrers.UnionMember68
        | Starrers.UnionMember69
        | Starrers.UnionMember70
        | Starrers.UnionMember71
        | Starrers.UnionMember72
        | Starrers.UnionMember73
        | Starrers.UnionMember74
        | Starrers.UnionMember75
        | Starrers.UnionMember76
        | Starrers.UnionMember77
        | Starrers.UnionMember78
        | Starrers.UnionMember79
        | Starrers.UnionMember80
        | Starrers.UnionMember81
        | Starrers.UnionMember82
        | Starrers.UnionMember83
        | Starrers.UnionMember84
        | Starrers.UnionMember85
        | Starrers.UnionMember86
        | Starrers.UnionMember87
        | Starrers.UnionMember88
        | Starrers.UnionMember89
        | Starrers.UnionMember90
        | Starrers.UnionMember91
        | Starrers.UnionMember92
        | Starrers.UnionMember93
        | Starrers.UnionMember94
        | Starrers.UnionMember95
        | Starrers.UnionMember96
        | Starrers.UnionMember97
        | Starrers.UnionMember98
        | Starrers.UnionMember99
        | Starrers.UnionMember100
        | Starrers.UnionMember101
        | Starrers.UnionMember102
        | Starrers.UnionMember103
        | Starrers.UnionMember104
        | Starrers.UnionMember105
        | Starrers.UnionMember106
        | Starrers.UnionMember107
        | Starrers.UnionMember108
        | Starrers.UnionMember109
        | Starrers.UnionMember110
        | Starrers.UnionMember111
        | Starrers.UnionMember112
        | Starrers.UnionMember113
        | Starrers.UnionMember114
        | Starrers.UnionMember115
        | Starrers.UnionMember116
        | Starrers.UnionMember117
        | Starrers.UnionMember118
        | Starrers.UnionMember119
        | Starrers.UnionMember120
        | Starrers.UnionMember121
        | Starrers.UnionMember122
        | Starrers.UnionMember123
        | Starrers.UnionMember124
        | Starrers.UnionMember125
        | Starrers.UnionMember126
        | Starrers.UnionMember127
        | Starrers.UnionMember128
        | Starrers.UnionMember129
        | Starrers.UnionMember130
        | Starrers.UnionMember131
        | Starrers.UnionMember132
        | Starrers.UnionMember133
        | Starrers.UnionMember134
        | Starrers.UnionMember135
        | Starrers.UnionMember136
        | Starrers.UnionMember137
        | Starrers.UnionMember138
        | Starrers.UnionMember139
        | Starrers.UnionMember140;
    }

    export namespace Starrers {
      export interface UnionMember0 {
        field: 'githubId';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember1 {
        field: 'githubId';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember2 {
        field: 'githubId';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember3 {
        field: 'githubId';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember4 {
        field: 'githubId';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember5 {
        field: 'githubId';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember6 {
        field: 'githubId';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember7 {
        field: 'githubId';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember8 {
        field: 'githubId';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember9 {
        field: 'githubId';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember10 {
        field: 'githubId';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember11 {
        field: 'githubId';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember12 {
        field: 'githubId';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember13 {
        field: 'login';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember14 {
        field: 'login';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember15 {
        field: 'login';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember16 {
        field: 'login';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember17 {
        field: 'login';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember18 {
        field: 'login';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember19 {
        field: 'login';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember20 {
        field: 'login';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember21 {
        field: 'login';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember22 {
        field: 'login';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember23 {
        field: 'login';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember24 {
        field: 'login';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember25 {
        field: 'login';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember26 {
        field: 'login';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember27 {
        field: 'displayName';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember28 {
        field: 'displayName';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember29 {
        field: 'displayName';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember30 {
        field: 'displayName';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember31 {
        field: 'displayName';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember32 {
        field: 'displayName';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember33 {
        field: 'displayName';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember34 {
        field: 'displayName';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember35 {
        field: 'displayName';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember36 {
        field: 'displayName';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember37 {
        field: 'displayName';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember38 {
        field: 'displayName';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember39 {
        field: 'displayName';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember40 {
        field: 'displayName';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember41 {
        field: 'bio';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember42 {
        field: 'bio';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember43 {
        field: 'bio';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember44 {
        field: 'bio';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember45 {
        field: 'bio';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember46 {
        field: 'bio';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember47 {
        field: 'bio';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember48 {
        field: 'bio';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember49 {
        field: 'bio';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember50 {
        field: 'bio';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember51 {
        field: 'bio';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember52 {
        field: 'bio';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember53 {
        field: 'bio';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember54 {
        field: 'bio';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember55 {
        field: 'company';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember56 {
        field: 'company';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember57 {
        field: 'company';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember58 {
        field: 'company';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember59 {
        field: 'company';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember60 {
        field: 'company';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember61 {
        field: 'company';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember62 {
        field: 'company';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember63 {
        field: 'company';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember64 {
        field: 'company';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember65 {
        field: 'company';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember66 {
        field: 'company';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember67 {
        field: 'company';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember68 {
        field: 'company';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember69 {
        field: 'location';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember70 {
        field: 'location';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember71 {
        field: 'location';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember72 {
        field: 'location';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember73 {
        field: 'location';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember74 {
        field: 'location';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember75 {
        field: 'location';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember76 {
        field: 'location';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember77 {
        field: 'location';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember78 {
        field: 'location';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember79 {
        field: 'location';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember80 {
        field: 'location';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember81 {
        field: 'location';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember82 {
        field: 'location';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember83 {
        field: 'emails';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember84 {
        field: 'emails';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember85 {
        field: 'emails';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember86 {
        field: 'emails';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember87 {
        field: 'emails';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember88 {
        field: 'emails';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember89 {
        field: 'emails';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember90 {
        field: 'emails';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember91 {
        field: 'emails';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember92 {
        field: 'emails';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember93 {
        field: 'emails';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember94 {
        field: 'emails';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember95 {
        field: 'emails';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember96 {
        field: 'emails';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember97 {
        field: 'resolvedCountry';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember98 {
        field: 'resolvedCountry';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember99 {
        field: 'resolvedCountry';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember100 {
        field: 'resolvedCountry';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember101 {
        field: 'resolvedCountry';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember102 {
        field: 'resolvedCountry';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember103 {
        field: 'resolvedCountry';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember104 {
        field: 'resolvedCountry';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember105 {
        field: 'resolvedCountry';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember106 {
        field: 'resolvedCountry';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember107 {
        field: 'resolvedCountry';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember108 {
        field: 'resolvedCountry';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember109 {
        field: 'resolvedCountry';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember110 {
        field: 'resolvedCountry';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember111 {
        field: 'resolvedState';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember112 {
        field: 'resolvedState';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember113 {
        field: 'resolvedState';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember114 {
        field: 'resolvedState';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember115 {
        field: 'resolvedState';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember116 {
        field: 'resolvedState';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember117 {
        field: 'resolvedState';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember118 {
        field: 'resolvedState';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember119 {
        field: 'resolvedState';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember120 {
        field: 'resolvedState';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember121 {
        field: 'resolvedState';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember122 {
        field: 'resolvedState';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember123 {
        field: 'resolvedState';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember124 {
        field: 'resolvedState';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember125 {
        field: 'resolvedCity';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember126 {
        field: 'resolvedCity';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember127 {
        field: 'resolvedCity';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember128 {
        field: 'resolvedCity';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember129 {
        field: 'resolvedCity';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember130 {
        field: 'resolvedCity';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember131 {
        field: 'resolvedCity';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember132 {
        field: 'resolvedCity';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember133 {
        field: 'resolvedCity';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember134 {
        field: 'resolvedCity';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember135 {
        field: 'resolvedCity';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember136 {
        field: 'resolvedCity';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember137 {
        field: 'resolvedCity';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember138 {
        field: 'resolvedCity';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember139 {
        filters: Array<
          | UnionMember139.UnionMember0
          | UnionMember139.UnionMember1
          | UnionMember139.UnionMember2
          | UnionMember139.UnionMember3
          | UnionMember139.UnionMember4
          | UnionMember139.UnionMember5
          | UnionMember139.UnionMember6
          | UnionMember139.UnionMember7
          | UnionMember139.UnionMember8
          | UnionMember139.UnionMember9
          | UnionMember139.UnionMember10
          | UnionMember139.UnionMember11
          | UnionMember139.UnionMember12
          | UnionMember139.UnionMember13
          | UnionMember139.UnionMember14
          | UnionMember139.UnionMember15
          | UnionMember139.UnionMember16
          | UnionMember139.UnionMember17
          | UnionMember139.UnionMember18
          | UnionMember139.UnionMember19
          | UnionMember139.UnionMember20
          | UnionMember139.UnionMember21
          | UnionMember139.UnionMember22
          | UnionMember139.UnionMember23
          | UnionMember139.UnionMember24
          | UnionMember139.UnionMember25
          | UnionMember139.UnionMember26
          | UnionMember139.UnionMember27
          | UnionMember139.UnionMember28
          | UnionMember139.UnionMember29
          | UnionMember139.UnionMember30
          | UnionMember139.UnionMember31
          | UnionMember139.UnionMember32
          | UnionMember139.UnionMember33
          | UnionMember139.UnionMember34
          | UnionMember139.UnionMember35
          | UnionMember139.UnionMember36
          | UnionMember139.UnionMember37
          | UnionMember139.UnionMember38
          | UnionMember139.UnionMember39
          | UnionMember139.UnionMember40
          | UnionMember139.UnionMember41
          | UnionMember139.UnionMember42
          | UnionMember139.UnionMember43
          | UnionMember139.UnionMember44
          | UnionMember139.UnionMember45
          | UnionMember139.UnionMember46
          | UnionMember139.UnionMember47
          | UnionMember139.UnionMember48
          | UnionMember139.UnionMember49
          | UnionMember139.UnionMember50
          | UnionMember139.UnionMember51
          | UnionMember139.UnionMember52
          | UnionMember139.UnionMember53
          | UnionMember139.UnionMember54
          | UnionMember139.UnionMember55
          | UnionMember139.UnionMember56
          | UnionMember139.UnionMember57
          | UnionMember139.UnionMember58
          | UnionMember139.UnionMember59
          | UnionMember139.UnionMember60
          | UnionMember139.UnionMember61
          | UnionMember139.UnionMember62
          | UnionMember139.UnionMember63
          | UnionMember139.UnionMember64
          | UnionMember139.UnionMember65
          | UnionMember139.UnionMember66
          | UnionMember139.UnionMember67
          | UnionMember139.UnionMember68
          | UnionMember139.UnionMember69
          | UnionMember139.UnionMember70
          | UnionMember139.UnionMember71
          | UnionMember139.UnionMember72
          | UnionMember139.UnionMember73
          | UnionMember139.UnionMember74
          | UnionMember139.UnionMember75
          | UnionMember139.UnionMember76
          | UnionMember139.UnionMember77
          | UnionMember139.UnionMember78
          | UnionMember139.UnionMember79
          | UnionMember139.UnionMember80
          | UnionMember139.UnionMember81
          | UnionMember139.UnionMember82
          | UnionMember139.UnionMember83
          | UnionMember139.UnionMember84
          | UnionMember139.UnionMember85
          | UnionMember139.UnionMember86
          | UnionMember139.UnionMember87
          | UnionMember139.UnionMember88
          | UnionMember139.UnionMember89
          | UnionMember139.UnionMember90
          | UnionMember139.UnionMember91
          | UnionMember139.UnionMember92
          | UnionMember139.UnionMember93
          | UnionMember139.UnionMember94
          | UnionMember139.UnionMember95
          | UnionMember139.UnionMember96
          | UnionMember139.UnionMember97
          | UnionMember139.UnionMember98
          | UnionMember139.UnionMember99
          | UnionMember139.UnionMember100
          | UnionMember139.UnionMember101
          | UnionMember139.UnionMember102
          | UnionMember139.UnionMember103
          | UnionMember139.UnionMember104
          | UnionMember139.UnionMember105
          | UnionMember139.UnionMember106
          | UnionMember139.UnionMember107
          | UnionMember139.UnionMember108
          | UnionMember139.UnionMember109
          | UnionMember139.UnionMember110
          | UnionMember139.UnionMember111
          | UnionMember139.UnionMember112
          | UnionMember139.UnionMember113
          | UnionMember139.UnionMember114
          | UnionMember139.UnionMember115
          | UnionMember139.UnionMember116
          | UnionMember139.UnionMember117
          | UnionMember139.UnionMember118
          | UnionMember139.UnionMember119
          | UnionMember139.UnionMember120
          | UnionMember139.UnionMember121
          | UnionMember139.UnionMember122
          | UnionMember139.UnionMember123
          | UnionMember139.UnionMember124
          | UnionMember139.UnionMember125
          | UnionMember139.UnionMember126
          | UnionMember139.UnionMember127
          | UnionMember139.UnionMember128
          | UnionMember139.UnionMember129
          | UnionMember139.UnionMember130
          | UnionMember139.UnionMember131
          | UnionMember139.UnionMember132
          | UnionMember139.UnionMember133
          | UnionMember139.UnionMember134
          | UnionMember139.UnionMember135
          | UnionMember139.UnionMember136
          | UnionMember139.UnionMember137
          | UnionMember139.UnionMember138
        >;

        op: 'And' | 'Or';
      }

      export namespace UnionMember139 {
        export interface UnionMember0 {
          field: 'githubId';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember1 {
          field: 'githubId';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember2 {
          field: 'githubId';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember3 {
          field: 'githubId';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember4 {
          field: 'githubId';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember5 {
          field: 'githubId';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember6 {
          field: 'githubId';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember7 {
          field: 'githubId';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember8 {
          field: 'githubId';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember9 {
          field: 'githubId';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember10 {
          field: 'githubId';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember11 {
          field: 'githubId';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember12 {
          field: 'githubId';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember13 {
          field: 'login';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember14 {
          field: 'login';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember15 {
          field: 'login';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember16 {
          field: 'login';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember17 {
          field: 'login';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember18 {
          field: 'login';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember19 {
          field: 'login';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember20 {
          field: 'login';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember21 {
          field: 'login';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember22 {
          field: 'login';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember23 {
          field: 'login';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember24 {
          field: 'login';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember25 {
          field: 'login';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember26 {
          field: 'login';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember27 {
          field: 'displayName';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember28 {
          field: 'displayName';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember29 {
          field: 'displayName';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember30 {
          field: 'displayName';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember31 {
          field: 'displayName';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember32 {
          field: 'displayName';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember33 {
          field: 'displayName';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember34 {
          field: 'displayName';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember35 {
          field: 'displayName';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember36 {
          field: 'displayName';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember37 {
          field: 'displayName';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember38 {
          field: 'displayName';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember39 {
          field: 'displayName';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember40 {
          field: 'displayName';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember41 {
          field: 'bio';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember42 {
          field: 'bio';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember43 {
          field: 'bio';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember44 {
          field: 'bio';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember45 {
          field: 'bio';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember46 {
          field: 'bio';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember47 {
          field: 'bio';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember48 {
          field: 'bio';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember49 {
          field: 'bio';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember50 {
          field: 'bio';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember51 {
          field: 'bio';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember52 {
          field: 'bio';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember53 {
          field: 'bio';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember54 {
          field: 'bio';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember55 {
          field: 'company';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember56 {
          field: 'company';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember57 {
          field: 'company';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember58 {
          field: 'company';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember59 {
          field: 'company';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember60 {
          field: 'company';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember61 {
          field: 'company';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember62 {
          field: 'company';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember63 {
          field: 'company';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember64 {
          field: 'company';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember65 {
          field: 'company';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember66 {
          field: 'company';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember67 {
          field: 'company';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember68 {
          field: 'company';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember69 {
          field: 'location';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember70 {
          field: 'location';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember71 {
          field: 'location';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember72 {
          field: 'location';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember73 {
          field: 'location';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember74 {
          field: 'location';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember75 {
          field: 'location';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember76 {
          field: 'location';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember77 {
          field: 'location';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember78 {
          field: 'location';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember79 {
          field: 'location';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember80 {
          field: 'location';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember81 {
          field: 'location';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember82 {
          field: 'location';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember83 {
          field: 'emails';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember84 {
          field: 'emails';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember85 {
          field: 'emails';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember86 {
          field: 'emails';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember87 {
          field: 'emails';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember88 {
          field: 'emails';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember89 {
          field: 'emails';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember90 {
          field: 'emails';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember91 {
          field: 'emails';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember92 {
          field: 'emails';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember93 {
          field: 'emails';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember94 {
          field: 'emails';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember95 {
          field: 'emails';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember96 {
          field: 'emails';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember97 {
          field: 'resolvedCountry';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember98 {
          field: 'resolvedCountry';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember99 {
          field: 'resolvedCountry';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember100 {
          field: 'resolvedCountry';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember101 {
          field: 'resolvedCountry';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember102 {
          field: 'resolvedCountry';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember103 {
          field: 'resolvedCountry';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember104 {
          field: 'resolvedCountry';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember105 {
          field: 'resolvedCountry';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember106 {
          field: 'resolvedCountry';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember107 {
          field: 'resolvedCountry';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember108 {
          field: 'resolvedCountry';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember109 {
          field: 'resolvedCountry';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember110 {
          field: 'resolvedCountry';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember111 {
          field: 'resolvedState';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember112 {
          field: 'resolvedState';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember113 {
          field: 'resolvedState';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember114 {
          field: 'resolvedState';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember115 {
          field: 'resolvedState';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember116 {
          field: 'resolvedState';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember117 {
          field: 'resolvedState';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember118 {
          field: 'resolvedState';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember119 {
          field: 'resolvedState';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember120 {
          field: 'resolvedState';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember121 {
          field: 'resolvedState';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember122 {
          field: 'resolvedState';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember123 {
          field: 'resolvedState';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember124 {
          field: 'resolvedState';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember125 {
          field: 'resolvedCity';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember126 {
          field: 'resolvedCity';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember127 {
          field: 'resolvedCity';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember128 {
          field: 'resolvedCity';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember129 {
          field: 'resolvedCity';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember130 {
          field: 'resolvedCity';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember131 {
          field: 'resolvedCity';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember132 {
          field: 'resolvedCity';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember133 {
          field: 'resolvedCity';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember134 {
          field: 'resolvedCity';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember135 {
          field: 'resolvedCity';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember136 {
          field: 'resolvedCity';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember137 {
          field: 'resolvedCity';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember138 {
          field: 'resolvedCity';

          op: 'ContainsAllTokens';

          value: string;
        }
      }

      export interface UnionMember140 {
        filters: Array<
          | UnionMember140.UnionMember0
          | UnionMember140.UnionMember1
          | UnionMember140.UnionMember2
          | UnionMember140.UnionMember3
          | UnionMember140.UnionMember4
          | UnionMember140.UnionMember5
          | UnionMember140.UnionMember6
          | UnionMember140.UnionMember7
          | UnionMember140.UnionMember8
          | UnionMember140.UnionMember9
          | UnionMember140.UnionMember10
          | UnionMember140.UnionMember11
          | UnionMember140.UnionMember12
          | UnionMember140.UnionMember13
          | UnionMember140.UnionMember14
          | UnionMember140.UnionMember15
          | UnionMember140.UnionMember16
          | UnionMember140.UnionMember17
          | UnionMember140.UnionMember18
          | UnionMember140.UnionMember19
          | UnionMember140.UnionMember20
          | UnionMember140.UnionMember21
          | UnionMember140.UnionMember22
          | UnionMember140.UnionMember23
          | UnionMember140.UnionMember24
          | UnionMember140.UnionMember25
          | UnionMember140.UnionMember26
          | UnionMember140.UnionMember27
          | UnionMember140.UnionMember28
          | UnionMember140.UnionMember29
          | UnionMember140.UnionMember30
          | UnionMember140.UnionMember31
          | UnionMember140.UnionMember32
          | UnionMember140.UnionMember33
          | UnionMember140.UnionMember34
          | UnionMember140.UnionMember35
          | UnionMember140.UnionMember36
          | UnionMember140.UnionMember37
          | UnionMember140.UnionMember38
          | UnionMember140.UnionMember39
          | UnionMember140.UnionMember40
          | UnionMember140.UnionMember41
          | UnionMember140.UnionMember42
          | UnionMember140.UnionMember43
          | UnionMember140.UnionMember44
          | UnionMember140.UnionMember45
          | UnionMember140.UnionMember46
          | UnionMember140.UnionMember47
          | UnionMember140.UnionMember48
          | UnionMember140.UnionMember49
          | UnionMember140.UnionMember50
          | UnionMember140.UnionMember51
          | UnionMember140.UnionMember52
          | UnionMember140.UnionMember53
          | UnionMember140.UnionMember54
          | UnionMember140.UnionMember55
          | UnionMember140.UnionMember56
          | UnionMember140.UnionMember57
          | UnionMember140.UnionMember58
          | UnionMember140.UnionMember59
          | UnionMember140.UnionMember60
          | UnionMember140.UnionMember61
          | UnionMember140.UnionMember62
          | UnionMember140.UnionMember63
          | UnionMember140.UnionMember64
          | UnionMember140.UnionMember65
          | UnionMember140.UnionMember66
          | UnionMember140.UnionMember67
          | UnionMember140.UnionMember68
          | UnionMember140.UnionMember69
          | UnionMember140.UnionMember70
          | UnionMember140.UnionMember71
          | UnionMember140.UnionMember72
          | UnionMember140.UnionMember73
          | UnionMember140.UnionMember74
          | UnionMember140.UnionMember75
          | UnionMember140.UnionMember76
          | UnionMember140.UnionMember77
          | UnionMember140.UnionMember78
          | UnionMember140.UnionMember79
          | UnionMember140.UnionMember80
          | UnionMember140.UnionMember81
          | UnionMember140.UnionMember82
          | UnionMember140.UnionMember83
          | UnionMember140.UnionMember84
          | UnionMember140.UnionMember85
          | UnionMember140.UnionMember86
          | UnionMember140.UnionMember87
          | UnionMember140.UnionMember88
          | UnionMember140.UnionMember89
          | UnionMember140.UnionMember90
          | UnionMember140.UnionMember91
          | UnionMember140.UnionMember92
          | UnionMember140.UnionMember93
          | UnionMember140.UnionMember94
          | UnionMember140.UnionMember95
          | UnionMember140.UnionMember96
          | UnionMember140.UnionMember97
          | UnionMember140.UnionMember98
          | UnionMember140.UnionMember99
          | UnionMember140.UnionMember100
          | UnionMember140.UnionMember101
          | UnionMember140.UnionMember102
          | UnionMember140.UnionMember103
          | UnionMember140.UnionMember104
          | UnionMember140.UnionMember105
          | UnionMember140.UnionMember106
          | UnionMember140.UnionMember107
          | UnionMember140.UnionMember108
          | UnionMember140.UnionMember109
          | UnionMember140.UnionMember110
          | UnionMember140.UnionMember111
          | UnionMember140.UnionMember112
          | UnionMember140.UnionMember113
          | UnionMember140.UnionMember114
          | UnionMember140.UnionMember115
          | UnionMember140.UnionMember116
          | UnionMember140.UnionMember117
          | UnionMember140.UnionMember118
          | UnionMember140.UnionMember119
          | UnionMember140.UnionMember120
          | UnionMember140.UnionMember121
          | UnionMember140.UnionMember122
          | UnionMember140.UnionMember123
          | UnionMember140.UnionMember124
          | UnionMember140.UnionMember125
          | UnionMember140.UnionMember126
          | UnionMember140.UnionMember127
          | UnionMember140.UnionMember128
          | UnionMember140.UnionMember129
          | UnionMember140.UnionMember130
          | UnionMember140.UnionMember131
          | UnionMember140.UnionMember132
          | UnionMember140.UnionMember133
          | UnionMember140.UnionMember134
          | UnionMember140.UnionMember135
          | UnionMember140.UnionMember136
          | UnionMember140.UnionMember137
          | UnionMember140.UnionMember138
          | UnionMember140.UnionMember139
        >;

        op: 'And' | 'Or';
      }

      export namespace UnionMember140 {
        export interface UnionMember0 {
          field: 'githubId';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember1 {
          field: 'githubId';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember2 {
          field: 'githubId';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember3 {
          field: 'githubId';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember4 {
          field: 'githubId';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember5 {
          field: 'githubId';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember6 {
          field: 'githubId';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember7 {
          field: 'githubId';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember8 {
          field: 'githubId';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember9 {
          field: 'githubId';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember10 {
          field: 'githubId';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember11 {
          field: 'githubId';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember12 {
          field: 'githubId';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember13 {
          field: 'login';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember14 {
          field: 'login';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember15 {
          field: 'login';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember16 {
          field: 'login';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember17 {
          field: 'login';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember18 {
          field: 'login';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember19 {
          field: 'login';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember20 {
          field: 'login';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember21 {
          field: 'login';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember22 {
          field: 'login';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember23 {
          field: 'login';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember24 {
          field: 'login';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember25 {
          field: 'login';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember26 {
          field: 'login';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember27 {
          field: 'displayName';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember28 {
          field: 'displayName';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember29 {
          field: 'displayName';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember30 {
          field: 'displayName';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember31 {
          field: 'displayName';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember32 {
          field: 'displayName';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember33 {
          field: 'displayName';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember34 {
          field: 'displayName';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember35 {
          field: 'displayName';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember36 {
          field: 'displayName';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember37 {
          field: 'displayName';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember38 {
          field: 'displayName';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember39 {
          field: 'displayName';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember40 {
          field: 'displayName';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember41 {
          field: 'bio';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember42 {
          field: 'bio';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember43 {
          field: 'bio';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember44 {
          field: 'bio';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember45 {
          field: 'bio';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember46 {
          field: 'bio';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember47 {
          field: 'bio';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember48 {
          field: 'bio';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember49 {
          field: 'bio';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember50 {
          field: 'bio';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember51 {
          field: 'bio';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember52 {
          field: 'bio';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember53 {
          field: 'bio';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember54 {
          field: 'bio';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember55 {
          field: 'company';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember56 {
          field: 'company';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember57 {
          field: 'company';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember58 {
          field: 'company';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember59 {
          field: 'company';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember60 {
          field: 'company';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember61 {
          field: 'company';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember62 {
          field: 'company';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember63 {
          field: 'company';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember64 {
          field: 'company';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember65 {
          field: 'company';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember66 {
          field: 'company';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember67 {
          field: 'company';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember68 {
          field: 'company';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember69 {
          field: 'location';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember70 {
          field: 'location';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember71 {
          field: 'location';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember72 {
          field: 'location';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember73 {
          field: 'location';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember74 {
          field: 'location';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember75 {
          field: 'location';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember76 {
          field: 'location';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember77 {
          field: 'location';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember78 {
          field: 'location';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember79 {
          field: 'location';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember80 {
          field: 'location';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember81 {
          field: 'location';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember82 {
          field: 'location';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember83 {
          field: 'emails';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember84 {
          field: 'emails';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember85 {
          field: 'emails';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember86 {
          field: 'emails';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember87 {
          field: 'emails';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember88 {
          field: 'emails';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember89 {
          field: 'emails';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember90 {
          field: 'emails';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember91 {
          field: 'emails';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember92 {
          field: 'emails';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember93 {
          field: 'emails';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember94 {
          field: 'emails';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember95 {
          field: 'emails';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember96 {
          field: 'emails';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember97 {
          field: 'resolvedCountry';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember98 {
          field: 'resolvedCountry';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember99 {
          field: 'resolvedCountry';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember100 {
          field: 'resolvedCountry';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember101 {
          field: 'resolvedCountry';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember102 {
          field: 'resolvedCountry';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember103 {
          field: 'resolvedCountry';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember104 {
          field: 'resolvedCountry';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember105 {
          field: 'resolvedCountry';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember106 {
          field: 'resolvedCountry';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember107 {
          field: 'resolvedCountry';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember108 {
          field: 'resolvedCountry';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember109 {
          field: 'resolvedCountry';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember110 {
          field: 'resolvedCountry';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember111 {
          field: 'resolvedState';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember112 {
          field: 'resolvedState';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember113 {
          field: 'resolvedState';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember114 {
          field: 'resolvedState';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember115 {
          field: 'resolvedState';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember116 {
          field: 'resolvedState';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember117 {
          field: 'resolvedState';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember118 {
          field: 'resolvedState';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember119 {
          field: 'resolvedState';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember120 {
          field: 'resolvedState';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember121 {
          field: 'resolvedState';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember122 {
          field: 'resolvedState';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember123 {
          field: 'resolvedState';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember124 {
          field: 'resolvedState';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember125 {
          field: 'resolvedCity';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember126 {
          field: 'resolvedCity';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember127 {
          field: 'resolvedCity';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember128 {
          field: 'resolvedCity';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember129 {
          field: 'resolvedCity';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember130 {
          field: 'resolvedCity';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember131 {
          field: 'resolvedCity';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember132 {
          field: 'resolvedCity';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember133 {
          field: 'resolvedCity';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember134 {
          field: 'resolvedCity';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember135 {
          field: 'resolvedCity';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember136 {
          field: 'resolvedCity';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember137 {
          field: 'resolvedCity';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember138 {
          field: 'resolvedCity';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember139 {
          filters: Array<
            | UnionMember139.UnionMember0
            | UnionMember139.UnionMember1
            | UnionMember139.UnionMember2
            | UnionMember139.UnionMember3
            | UnionMember139.UnionMember4
            | UnionMember139.UnionMember5
            | UnionMember139.UnionMember6
            | UnionMember139.UnionMember7
            | UnionMember139.UnionMember8
            | UnionMember139.UnionMember9
            | UnionMember139.UnionMember10
            | UnionMember139.UnionMember11
            | UnionMember139.UnionMember12
            | UnionMember139.UnionMember13
            | UnionMember139.UnionMember14
            | UnionMember139.UnionMember15
            | UnionMember139.UnionMember16
            | UnionMember139.UnionMember17
            | UnionMember139.UnionMember18
            | UnionMember139.UnionMember19
            | UnionMember139.UnionMember20
            | UnionMember139.UnionMember21
            | UnionMember139.UnionMember22
            | UnionMember139.UnionMember23
            | UnionMember139.UnionMember24
            | UnionMember139.UnionMember25
            | UnionMember139.UnionMember26
            | UnionMember139.UnionMember27
            | UnionMember139.UnionMember28
            | UnionMember139.UnionMember29
            | UnionMember139.UnionMember30
            | UnionMember139.UnionMember31
            | UnionMember139.UnionMember32
            | UnionMember139.UnionMember33
            | UnionMember139.UnionMember34
            | UnionMember139.UnionMember35
            | UnionMember139.UnionMember36
            | UnionMember139.UnionMember37
            | UnionMember139.UnionMember38
            | UnionMember139.UnionMember39
            | UnionMember139.UnionMember40
            | UnionMember139.UnionMember41
            | UnionMember139.UnionMember42
            | UnionMember139.UnionMember43
            | UnionMember139.UnionMember44
            | UnionMember139.UnionMember45
            | UnionMember139.UnionMember46
            | UnionMember139.UnionMember47
            | UnionMember139.UnionMember48
            | UnionMember139.UnionMember49
            | UnionMember139.UnionMember50
            | UnionMember139.UnionMember51
            | UnionMember139.UnionMember52
            | UnionMember139.UnionMember53
            | UnionMember139.UnionMember54
            | UnionMember139.UnionMember55
            | UnionMember139.UnionMember56
            | UnionMember139.UnionMember57
            | UnionMember139.UnionMember58
            | UnionMember139.UnionMember59
            | UnionMember139.UnionMember60
            | UnionMember139.UnionMember61
            | UnionMember139.UnionMember62
            | UnionMember139.UnionMember63
            | UnionMember139.UnionMember64
            | UnionMember139.UnionMember65
            | UnionMember139.UnionMember66
            | UnionMember139.UnionMember67
            | UnionMember139.UnionMember68
            | UnionMember139.UnionMember69
            | UnionMember139.UnionMember70
            | UnionMember139.UnionMember71
            | UnionMember139.UnionMember72
            | UnionMember139.UnionMember73
            | UnionMember139.UnionMember74
            | UnionMember139.UnionMember75
            | UnionMember139.UnionMember76
            | UnionMember139.UnionMember77
            | UnionMember139.UnionMember78
            | UnionMember139.UnionMember79
            | UnionMember139.UnionMember80
            | UnionMember139.UnionMember81
            | UnionMember139.UnionMember82
            | UnionMember139.UnionMember83
            | UnionMember139.UnionMember84
            | UnionMember139.UnionMember85
            | UnionMember139.UnionMember86
            | UnionMember139.UnionMember87
            | UnionMember139.UnionMember88
            | UnionMember139.UnionMember89
            | UnionMember139.UnionMember90
            | UnionMember139.UnionMember91
            | UnionMember139.UnionMember92
            | UnionMember139.UnionMember93
            | UnionMember139.UnionMember94
            | UnionMember139.UnionMember95
            | UnionMember139.UnionMember96
            | UnionMember139.UnionMember97
            | UnionMember139.UnionMember98
            | UnionMember139.UnionMember99
            | UnionMember139.UnionMember100
            | UnionMember139.UnionMember101
            | UnionMember139.UnionMember102
            | UnionMember139.UnionMember103
            | UnionMember139.UnionMember104
            | UnionMember139.UnionMember105
            | UnionMember139.UnionMember106
            | UnionMember139.UnionMember107
            | UnionMember139.UnionMember108
            | UnionMember139.UnionMember109
            | UnionMember139.UnionMember110
            | UnionMember139.UnionMember111
            | UnionMember139.UnionMember112
            | UnionMember139.UnionMember113
            | UnionMember139.UnionMember114
            | UnionMember139.UnionMember115
            | UnionMember139.UnionMember116
            | UnionMember139.UnionMember117
            | UnionMember139.UnionMember118
            | UnionMember139.UnionMember119
            | UnionMember139.UnionMember120
            | UnionMember139.UnionMember121
            | UnionMember139.UnionMember122
            | UnionMember139.UnionMember123
            | UnionMember139.UnionMember124
            | UnionMember139.UnionMember125
            | UnionMember139.UnionMember126
            | UnionMember139.UnionMember127
            | UnionMember139.UnionMember128
            | UnionMember139.UnionMember129
            | UnionMember139.UnionMember130
            | UnionMember139.UnionMember131
            | UnionMember139.UnionMember132
            | UnionMember139.UnionMember133
            | UnionMember139.UnionMember134
            | UnionMember139.UnionMember135
            | UnionMember139.UnionMember136
            | UnionMember139.UnionMember137
            | UnionMember139.UnionMember138
          >;

          op: 'And' | 'Or';
        }

        export namespace UnionMember139 {
          export interface UnionMember0 {
            field: 'githubId';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember1 {
            field: 'githubId';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember2 {
            field: 'githubId';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember3 {
            field: 'githubId';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember4 {
            field: 'githubId';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember5 {
            field: 'githubId';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember6 {
            field: 'githubId';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember7 {
            field: 'githubId';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember8 {
            field: 'githubId';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember9 {
            field: 'githubId';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember10 {
            field: 'githubId';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember11 {
            field: 'githubId';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember12 {
            field: 'githubId';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember13 {
            field: 'login';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember14 {
            field: 'login';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember15 {
            field: 'login';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember16 {
            field: 'login';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember17 {
            field: 'login';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember18 {
            field: 'login';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember19 {
            field: 'login';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember20 {
            field: 'login';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember21 {
            field: 'login';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember22 {
            field: 'login';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember23 {
            field: 'login';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember24 {
            field: 'login';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember25 {
            field: 'login';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember26 {
            field: 'login';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember27 {
            field: 'displayName';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember28 {
            field: 'displayName';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember29 {
            field: 'displayName';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember30 {
            field: 'displayName';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember31 {
            field: 'displayName';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember32 {
            field: 'displayName';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember33 {
            field: 'displayName';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember34 {
            field: 'displayName';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember35 {
            field: 'displayName';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember36 {
            field: 'displayName';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember37 {
            field: 'displayName';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember38 {
            field: 'displayName';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember39 {
            field: 'displayName';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember40 {
            field: 'displayName';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember41 {
            field: 'bio';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember42 {
            field: 'bio';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember43 {
            field: 'bio';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember44 {
            field: 'bio';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember45 {
            field: 'bio';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember46 {
            field: 'bio';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember47 {
            field: 'bio';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember48 {
            field: 'bio';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember49 {
            field: 'bio';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember50 {
            field: 'bio';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember51 {
            field: 'bio';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember52 {
            field: 'bio';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember53 {
            field: 'bio';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember54 {
            field: 'bio';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember55 {
            field: 'company';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember56 {
            field: 'company';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember57 {
            field: 'company';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember58 {
            field: 'company';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember59 {
            field: 'company';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember60 {
            field: 'company';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember61 {
            field: 'company';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember62 {
            field: 'company';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember63 {
            field: 'company';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember64 {
            field: 'company';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember65 {
            field: 'company';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember66 {
            field: 'company';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember67 {
            field: 'company';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember68 {
            field: 'company';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember69 {
            field: 'location';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember70 {
            field: 'location';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember71 {
            field: 'location';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember72 {
            field: 'location';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember73 {
            field: 'location';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember74 {
            field: 'location';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember75 {
            field: 'location';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember76 {
            field: 'location';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember77 {
            field: 'location';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember78 {
            field: 'location';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember79 {
            field: 'location';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember80 {
            field: 'location';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember81 {
            field: 'location';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember82 {
            field: 'location';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember83 {
            field: 'emails';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember84 {
            field: 'emails';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember85 {
            field: 'emails';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember86 {
            field: 'emails';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember87 {
            field: 'emails';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember88 {
            field: 'emails';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember89 {
            field: 'emails';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember90 {
            field: 'emails';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember91 {
            field: 'emails';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember92 {
            field: 'emails';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember93 {
            field: 'emails';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember94 {
            field: 'emails';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember95 {
            field: 'emails';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember96 {
            field: 'emails';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember97 {
            field: 'resolvedCountry';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember98 {
            field: 'resolvedCountry';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember99 {
            field: 'resolvedCountry';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember100 {
            field: 'resolvedCountry';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember101 {
            field: 'resolvedCountry';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember102 {
            field: 'resolvedCountry';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember103 {
            field: 'resolvedCountry';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember104 {
            field: 'resolvedCountry';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember105 {
            field: 'resolvedCountry';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember106 {
            field: 'resolvedCountry';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember107 {
            field: 'resolvedCountry';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember108 {
            field: 'resolvedCountry';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember109 {
            field: 'resolvedCountry';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember110 {
            field: 'resolvedCountry';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember111 {
            field: 'resolvedState';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember112 {
            field: 'resolvedState';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember113 {
            field: 'resolvedState';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember114 {
            field: 'resolvedState';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember115 {
            field: 'resolvedState';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember116 {
            field: 'resolvedState';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember117 {
            field: 'resolvedState';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember118 {
            field: 'resolvedState';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember119 {
            field: 'resolvedState';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember120 {
            field: 'resolvedState';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember121 {
            field: 'resolvedState';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember122 {
            field: 'resolvedState';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember123 {
            field: 'resolvedState';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember124 {
            field: 'resolvedState';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember125 {
            field: 'resolvedCity';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember126 {
            field: 'resolvedCity';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember127 {
            field: 'resolvedCity';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember128 {
            field: 'resolvedCity';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember129 {
            field: 'resolvedCity';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember130 {
            field: 'resolvedCity';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember131 {
            field: 'resolvedCity';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember132 {
            field: 'resolvedCity';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember133 {
            field: 'resolvedCity';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember134 {
            field: 'resolvedCity';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember135 {
            field: 'resolvedCity';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember136 {
            field: 'resolvedCity';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember137 {
            field: 'resolvedCity';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember138 {
            field: 'resolvedCity';

            op: 'ContainsAllTokens';

            value: string;
          }
        }
      }
    }
  }

  export interface UnionMember0 {
    name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

    op: 'Attr';
  }

  export interface UnionMember1 {
    op: 'Const';

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

    op: 'Sum';
  }

  export namespace UnionMember2 {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      op: 'Attr';
    }

    export interface UnionMember1 {
      op: 'Const';

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

      op: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<
        | UnionMember3.UnionMember0
        | UnionMember3.UnionMember1
        | UnionMember3.UnionMember2
        | UnionMember3.UnionMember3
        | UnionMember3.UnionMember4
        | UnionMember3.UnionMember5
        | UnionMember3.UnionMember6
        | UnionMember3.UnionMember7
      >;

      op: 'Mult';
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember4 {
      exprs: Array<
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4
        | UnionMember4.UnionMember5
        | UnionMember4.UnionMember6
        | UnionMember4.UnionMember7
      >;

      op: 'Div';
    }

    export namespace UnionMember4 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
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

      op: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }
  }

  export interface UnionMember3 {
    exprs: Array<
      | UnionMember3.UnionMember0
      | UnionMember3.UnionMember1
      | UnionMember3.UnionMember2
      | UnionMember3.UnionMember3
      | UnionMember3.UnionMember4
      | UnionMember3.UnionMember5
      | UnionMember3.UnionMember6
      | UnionMember3.UnionMember7
    >;

    op: 'Mult';
  }

  export namespace UnionMember3 {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      op: 'Attr';
    }

    export interface UnionMember1 {
      op: 'Const';

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

      op: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<
        | UnionMember3.UnionMember0
        | UnionMember3.UnionMember1
        | UnionMember3.UnionMember2
        | UnionMember3.UnionMember3
        | UnionMember3.UnionMember4
        | UnionMember3.UnionMember5
        | UnionMember3.UnionMember6
        | UnionMember3.UnionMember7
      >;

      op: 'Mult';
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember4 {
      exprs: Array<
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4
        | UnionMember4.UnionMember5
        | UnionMember4.UnionMember6
        | UnionMember4.UnionMember7
      >;

      op: 'Div';
    }

    export namespace UnionMember4 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
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

      op: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }
  }

  export interface UnionMember4 {
    exprs: Array<
      | UnionMember4.UnionMember0
      | UnionMember4.UnionMember1
      | UnionMember4.UnionMember2
      | UnionMember4.UnionMember3
      | UnionMember4.UnionMember4
      | UnionMember4.UnionMember5
      | UnionMember4.UnionMember6
      | UnionMember4.UnionMember7
    >;

    op: 'Div';
  }

  export namespace UnionMember4 {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      op: 'Attr';
    }

    export interface UnionMember1 {
      op: 'Const';

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

      op: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<
        | UnionMember3.UnionMember0
        | UnionMember3.UnionMember1
        | UnionMember3.UnionMember2
        | UnionMember3.UnionMember3
        | UnionMember3.UnionMember4
        | UnionMember3.UnionMember5
        | UnionMember3.UnionMember6
        | UnionMember3.UnionMember7
      >;

      op: 'Mult';
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember4 {
      exprs: Array<
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4
        | UnionMember4.UnionMember5
        | UnionMember4.UnionMember6
        | UnionMember4.UnionMember7
      >;

      op: 'Div';
    }

    export namespace UnionMember4 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
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

      op: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }
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

    op: 'Max';
  }

  export namespace UnionMember5 {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      op: 'Attr';
    }

    export interface UnionMember1 {
      op: 'Const';

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

      op: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<
        | UnionMember3.UnionMember0
        | UnionMember3.UnionMember1
        | UnionMember3.UnionMember2
        | UnionMember3.UnionMember3
        | UnionMember3.UnionMember4
        | UnionMember3.UnionMember5
        | UnionMember3.UnionMember6
        | UnionMember3.UnionMember7
      >;

      op: 'Mult';
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember4 {
      exprs: Array<
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4
        | UnionMember4.UnionMember5
        | UnionMember4.UnionMember6
        | UnionMember4.UnionMember7
      >;

      op: 'Div';
    }

    export namespace UnionMember4 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
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

      op: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
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

    op: 'Min';
  }

  export namespace UnionMember6 {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      op: 'Attr';
    }

    export interface UnionMember1 {
      op: 'Const';

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

      op: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<
        | UnionMember3.UnionMember0
        | UnionMember3.UnionMember1
        | UnionMember3.UnionMember2
        | UnionMember3.UnionMember3
        | UnionMember3.UnionMember4
        | UnionMember3.UnionMember5
        | UnionMember3.UnionMember6
        | UnionMember3.UnionMember7
      >;

      op: 'Mult';
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember4 {
      exprs: Array<
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4
        | UnionMember4.UnionMember5
        | UnionMember4.UnionMember6
        | UnionMember4.UnionMember7
      >;

      op: 'Div';
    }

    export namespace UnionMember4 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
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

      op: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
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

    op: 'Log';
  }

  export namespace UnionMember7 {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      op: 'Attr';
    }

    export interface UnionMember1 {
      op: 'Const';

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

      op: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<
        | UnionMember3.UnionMember0
        | UnionMember3.UnionMember1
        | UnionMember3.UnionMember2
        | UnionMember3.UnionMember3
        | UnionMember3.UnionMember4
        | UnionMember3.UnionMember5
        | UnionMember3.UnionMember6
        | UnionMember3.UnionMember7
      >;

      op: 'Mult';
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember4 {
      exprs: Array<
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4
        | UnionMember4.UnionMember5
        | UnionMember4.UnionMember6
        | UnionMember4.UnionMember7
      >;

      op: 'Div';
    }

    export namespace UnionMember4 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
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

      op: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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
   * Enable cursor-based pagination to fetch results across multiple requests
   */
  enablePagination?: boolean;

  /**
   * Filters to apply (required)
   */
  filters?:
    | SearchRepoSearchParams.UnionMember0
    | SearchRepoSearchParams.UnionMember1
    | SearchRepoSearchParams.UnionMember2
    | SearchRepoSearchParams.UnionMember3
    | SearchRepoSearchParams.UnionMember4
    | SearchRepoSearchParams.UnionMember5
    | SearchRepoSearchParams.UnionMember6
    | SearchRepoSearchParams.UnionMember7
    | SearchRepoSearchParams.UnionMember8
    | SearchRepoSearchParams.UnionMember9
    | SearchRepoSearchParams.UnionMember10
    | SearchRepoSearchParams.UnionMember11
    | SearchRepoSearchParams.UnionMember12
    | SearchRepoSearchParams.UnionMember13
    | SearchRepoSearchParams.UnionMember14
    | SearchRepoSearchParams.UnionMember15
    | SearchRepoSearchParams.UnionMember16
    | SearchRepoSearchParams.UnionMember17
    | SearchRepoSearchParams.UnionMember18
    | SearchRepoSearchParams.UnionMember19
    | SearchRepoSearchParams.UnionMember20
    | SearchRepoSearchParams.UnionMember21
    | SearchRepoSearchParams.UnionMember22
    | SearchRepoSearchParams.UnionMember23
    | SearchRepoSearchParams.UnionMember24
    | SearchRepoSearchParams.UnionMember25
    | SearchRepoSearchParams.UnionMember26
    | SearchRepoSearchParams.UnionMember27
    | SearchRepoSearchParams.UnionMember28
    | SearchRepoSearchParams.UnionMember29
    | SearchRepoSearchParams.UnionMember30
    | SearchRepoSearchParams.UnionMember31
    | SearchRepoSearchParams.UnionMember32
    | SearchRepoSearchParams.UnionMember33
    | SearchRepoSearchParams.UnionMember34
    | SearchRepoSearchParams.UnionMember35
    | SearchRepoSearchParams.UnionMember36
    | SearchRepoSearchParams.UnionMember37
    | SearchRepoSearchParams.UnionMember38
    | SearchRepoSearchParams.UnionMember39
    | SearchRepoSearchParams.UnionMember40
    | SearchRepoSearchParams.UnionMember41
    | SearchRepoSearchParams.UnionMember42
    | SearchRepoSearchParams.UnionMember43
    | SearchRepoSearchParams.UnionMember44
    | SearchRepoSearchParams.UnionMember45
    | SearchRepoSearchParams.UnionMember46
    | SearchRepoSearchParams.UnionMember47
    | SearchRepoSearchParams.UnionMember48
    | SearchRepoSearchParams.UnionMember49
    | SearchRepoSearchParams.UnionMember50
    | SearchRepoSearchParams.UnionMember51
    | SearchRepoSearchParams.UnionMember52
    | SearchRepoSearchParams.UnionMember53
    | SearchRepoSearchParams.UnionMember54
    | SearchRepoSearchParams.UnionMember55
    | SearchRepoSearchParams.UnionMember56
    | SearchRepoSearchParams.UnionMember57
    | SearchRepoSearchParams.UnionMember58
    | SearchRepoSearchParams.UnionMember59
    | SearchRepoSearchParams.UnionMember60
    | SearchRepoSearchParams.UnionMember61
    | SearchRepoSearchParams.UnionMember62
    | SearchRepoSearchParams.UnionMember63
    | SearchRepoSearchParams.UnionMember64
    | SearchRepoSearchParams.UnionMember65
    | SearchRepoSearchParams.UnionMember66
    | SearchRepoSearchParams.UnionMember67
    | SearchRepoSearchParams.UnionMember68
    | SearchRepoSearchParams.UnionMember69
    | SearchRepoSearchParams.UnionMember70
    | SearchRepoSearchParams.UnionMember71
    | SearchRepoSearchParams.UnionMember72
    | SearchRepoSearchParams.UnionMember73
    | SearchRepoSearchParams.UnionMember74
    | SearchRepoSearchParams.UnionMember75
    | SearchRepoSearchParams.UnionMember76
    | SearchRepoSearchParams.UnionMember77
    | SearchRepoSearchParams.UnionMember78
    | SearchRepoSearchParams.UnionMember79
    | SearchRepoSearchParams.UnionMember80
    | SearchRepoSearchParams.UnionMember81
    | SearchRepoSearchParams.UnionMember82
    | SearchRepoSearchParams.UnionMember83
    | SearchRepoSearchParams.UnionMember84
    | SearchRepoSearchParams.UnionMember85
    | SearchRepoSearchParams.UnionMember86
    | SearchRepoSearchParams.UnionMember87
    | SearchRepoSearchParams.UnionMember88
    | SearchRepoSearchParams.UnionMember89
    | SearchRepoSearchParams.UnionMember90
    | SearchRepoSearchParams.UnionMember91
    | SearchRepoSearchParams.UnionMember92
    | SearchRepoSearchParams.UnionMember93
    | SearchRepoSearchParams.UnionMember94
    | SearchRepoSearchParams.UnionMember95
    | SearchRepoSearchParams.UnionMember96
    | SearchRepoSearchParams.UnionMember97
    | SearchRepoSearchParams.UnionMember98
    | SearchRepoSearchParams.UnionMember99
    | SearchRepoSearchParams.UnionMember100
    | SearchRepoSearchParams.UnionMember101
    | SearchRepoSearchParams.UnionMember102
    | SearchRepoSearchParams.UnionMember103
    | SearchRepoSearchParams.UnionMember104
    | SearchRepoSearchParams.UnionMember105
    | SearchRepoSearchParams.UnionMember106
    | SearchRepoSearchParams.UnionMember107
    | SearchRepoSearchParams.UnionMember108;

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
    | SearchRepoSearchParams.UnionMember0
    | SearchRepoSearchParams.UnionMember1
    | SearchRepoSearchParams.UnionMember2
    | SearchRepoSearchParams.UnionMember3
    | SearchRepoSearchParams.UnionMember4
    | SearchRepoSearchParams.UnionMember5
    | SearchRepoSearchParams.UnionMember6
    | SearchRepoSearchParams.UnionMember7;
}

export namespace SearchRepoSearchParams {
  export interface UnionMember0 {
    field: 'githubId';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember1 {
    field: 'githubId';

    op: 'NotEq';

    value: string;
  }

  export interface UnionMember2 {
    field: 'githubId';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember3 {
    field: 'githubId';

    op: 'NotIn';

    value: Array<string>;
  }

  export interface UnionMember4 {
    field: 'githubId';

    op: 'Lt';

    value: string;
  }

  export interface UnionMember5 {
    field: 'githubId';

    op: 'Lte';

    value: string;
  }

  export interface UnionMember6 {
    field: 'githubId';

    op: 'Gt';

    value: string;
  }

  export interface UnionMember7 {
    field: 'githubId';

    op: 'Gte';

    value: string;
  }

  export interface UnionMember8 {
    field: 'githubId';

    op: 'Glob';

    value: string;
  }

  export interface UnionMember9 {
    field: 'githubId';

    op: 'NotGlob';

    value: string;
  }

  export interface UnionMember10 {
    field: 'githubId';

    op: 'IGlob';

    value: string;
  }

  export interface UnionMember11 {
    field: 'githubId';

    op: 'NotIGlob';

    value: string;
  }

  export interface UnionMember12 {
    field: 'githubId';

    op: 'Regex';

    value: string;
  }

  export interface UnionMember13 {
    field: 'ownerLogin';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember14 {
    field: 'ownerLogin';

    op: 'NotEq';

    value: string;
  }

  export interface UnionMember15 {
    field: 'ownerLogin';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember16 {
    field: 'ownerLogin';

    op: 'NotIn';

    value: Array<string>;
  }

  export interface UnionMember17 {
    field: 'ownerLogin';

    op: 'Lt';

    value: string;
  }

  export interface UnionMember18 {
    field: 'ownerLogin';

    op: 'Lte';

    value: string;
  }

  export interface UnionMember19 {
    field: 'ownerLogin';

    op: 'Gt';

    value: string;
  }

  export interface UnionMember20 {
    field: 'ownerLogin';

    op: 'Gte';

    value: string;
  }

  export interface UnionMember21 {
    field: 'ownerLogin';

    op: 'Glob';

    value: string;
  }

  export interface UnionMember22 {
    field: 'ownerLogin';

    op: 'NotGlob';

    value: string;
  }

  export interface UnionMember23 {
    field: 'ownerLogin';

    op: 'IGlob';

    value: string;
  }

  export interface UnionMember24 {
    field: 'ownerLogin';

    op: 'NotIGlob';

    value: string;
  }

  export interface UnionMember25 {
    field: 'ownerLogin';

    op: 'Regex';

    value: string;
  }

  export interface UnionMember26 {
    field: 'ownerLocation';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember27 {
    field: 'ownerLocation';

    op: 'NotEq';

    value: string;
  }

  export interface UnionMember28 {
    field: 'ownerLocation';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember29 {
    field: 'ownerLocation';

    op: 'NotIn';

    value: Array<string>;
  }

  export interface UnionMember30 {
    field: 'ownerLocation';

    op: 'Lt';

    value: string;
  }

  export interface UnionMember31 {
    field: 'ownerLocation';

    op: 'Lte';

    value: string;
  }

  export interface UnionMember32 {
    field: 'ownerLocation';

    op: 'Gt';

    value: string;
  }

  export interface UnionMember33 {
    field: 'ownerLocation';

    op: 'Gte';

    value: string;
  }

  export interface UnionMember34 {
    field: 'ownerLocation';

    op: 'Glob';

    value: string;
  }

  export interface UnionMember35 {
    field: 'ownerLocation';

    op: 'NotGlob';

    value: string;
  }

  export interface UnionMember36 {
    field: 'ownerLocation';

    op: 'IGlob';

    value: string;
  }

  export interface UnionMember37 {
    field: 'ownerLocation';

    op: 'NotIGlob';

    value: string;
  }

  export interface UnionMember38 {
    field: 'ownerLocation';

    op: 'Regex';

    value: string;
  }

  export interface UnionMember39 {
    field: 'ownerLocation';

    op: 'ContainsAllTokens';

    value: string;
  }

  export interface UnionMember40 {
    field: 'name';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember41 {
    field: 'name';

    op: 'NotEq';

    value: string;
  }

  export interface UnionMember42 {
    field: 'name';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember43 {
    field: 'name';

    op: 'NotIn';

    value: Array<string>;
  }

  export interface UnionMember44 {
    field: 'name';

    op: 'Lt';

    value: string;
  }

  export interface UnionMember45 {
    field: 'name';

    op: 'Lte';

    value: string;
  }

  export interface UnionMember46 {
    field: 'name';

    op: 'Gt';

    value: string;
  }

  export interface UnionMember47 {
    field: 'name';

    op: 'Gte';

    value: string;
  }

  export interface UnionMember48 {
    field: 'name';

    op: 'Glob';

    value: string;
  }

  export interface UnionMember49 {
    field: 'name';

    op: 'NotGlob';

    value: string;
  }

  export interface UnionMember50 {
    field: 'name';

    op: 'IGlob';

    value: string;
  }

  export interface UnionMember51 {
    field: 'name';

    op: 'NotIGlob';

    value: string;
  }

  export interface UnionMember52 {
    field: 'name';

    op: 'Regex';

    value: string;
  }

  export interface UnionMember53 {
    field: 'stargazerCount';

    op: 'Eq';

    value: number;
  }

  export interface UnionMember54 {
    field: 'stargazerCount';

    op: 'NotEq';

    value: number;
  }

  export interface UnionMember55 {
    field: 'stargazerCount';

    op: 'In';

    value: Array<number>;
  }

  export interface UnionMember56 {
    field: 'stargazerCount';

    op: 'NotIn';

    value: Array<number>;
  }

  export interface UnionMember57 {
    field: 'stargazerCount';

    op: 'Lt';

    value: number;
  }

  export interface UnionMember58 {
    field: 'stargazerCount';

    op: 'Lte';

    value: number;
  }

  export interface UnionMember59 {
    field: 'stargazerCount';

    op: 'Gt';

    value: number;
  }

  export interface UnionMember60 {
    field: 'stargazerCount';

    op: 'Gte';

    value: number;
  }

  export interface UnionMember61 {
    field: 'language';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember62 {
    field: 'language';

    op: 'NotEq';

    value: string;
  }

  export interface UnionMember63 {
    field: 'language';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember64 {
    field: 'language';

    op: 'NotIn';

    value: Array<string>;
  }

  export interface UnionMember65 {
    field: 'language';

    op: 'Lt';

    value: string;
  }

  export interface UnionMember66 {
    field: 'language';

    op: 'Lte';

    value: string;
  }

  export interface UnionMember67 {
    field: 'language';

    op: 'Gt';

    value: string;
  }

  export interface UnionMember68 {
    field: 'language';

    op: 'Gte';

    value: string;
  }

  export interface UnionMember69 {
    field: 'language';

    op: 'Glob';

    value: string;
  }

  export interface UnionMember70 {
    field: 'language';

    op: 'NotGlob';

    value: string;
  }

  export interface UnionMember71 {
    field: 'language';

    op: 'IGlob';

    value: string;
  }

  export interface UnionMember72 {
    field: 'language';

    op: 'NotIGlob';

    value: string;
  }

  export interface UnionMember73 {
    field: 'language';

    op: 'Regex';

    value: string;
  }

  export interface UnionMember74 {
    field: 'totalIssuesCount';

    op: 'Eq';

    value: number;
  }

  export interface UnionMember75 {
    field: 'totalIssuesCount';

    op: 'NotEq';

    value: number;
  }

  export interface UnionMember76 {
    field: 'totalIssuesCount';

    op: 'In';

    value: Array<number>;
  }

  export interface UnionMember77 {
    field: 'totalIssuesCount';

    op: 'NotIn';

    value: Array<number>;
  }

  export interface UnionMember78 {
    field: 'totalIssuesCount';

    op: 'Lt';

    value: number;
  }

  export interface UnionMember79 {
    field: 'totalIssuesCount';

    op: 'Lte';

    value: number;
  }

  export interface UnionMember80 {
    field: 'totalIssuesCount';

    op: 'Gt';

    value: number;
  }

  export interface UnionMember81 {
    field: 'totalIssuesCount';

    op: 'Gte';

    value: number;
  }

  export interface UnionMember82 {
    field: 'totalIssuesOpen';

    op: 'Eq';

    value: number;
  }

  export interface UnionMember83 {
    field: 'totalIssuesOpen';

    op: 'NotEq';

    value: number;
  }

  export interface UnionMember84 {
    field: 'totalIssuesOpen';

    op: 'In';

    value: Array<number>;
  }

  export interface UnionMember85 {
    field: 'totalIssuesOpen';

    op: 'NotIn';

    value: Array<number>;
  }

  export interface UnionMember86 {
    field: 'totalIssuesOpen';

    op: 'Lt';

    value: number;
  }

  export interface UnionMember87 {
    field: 'totalIssuesOpen';

    op: 'Lte';

    value: number;
  }

  export interface UnionMember88 {
    field: 'totalIssuesOpen';

    op: 'Gt';

    value: number;
  }

  export interface UnionMember89 {
    field: 'totalIssuesOpen';

    op: 'Gte';

    value: number;
  }

  export interface UnionMember90 {
    field: 'totalIssuesClosed';

    op: 'Eq';

    value: number;
  }

  export interface UnionMember91 {
    field: 'totalIssuesClosed';

    op: 'NotEq';

    value: number;
  }

  export interface UnionMember92 {
    field: 'totalIssuesClosed';

    op: 'In';

    value: Array<number>;
  }

  export interface UnionMember93 {
    field: 'totalIssuesClosed';

    op: 'NotIn';

    value: Array<number>;
  }

  export interface UnionMember94 {
    field: 'totalIssuesClosed';

    op: 'Lt';

    value: number;
  }

  export interface UnionMember95 {
    field: 'totalIssuesClosed';

    op: 'Lte';

    value: number;
  }

  export interface UnionMember96 {
    field: 'totalIssuesClosed';

    op: 'Gt';

    value: number;
  }

  export interface UnionMember97 {
    field: 'totalIssuesClosed';

    op: 'Gte';

    value: number;
  }

  export interface UnionMember98 {
    field: 'lastContributorLocations';

    op: 'Contains';

    value: string;
  }

  export interface UnionMember99 {
    field: 'lastContributorLocations';

    op: 'NotContains';

    value: string;
  }

  export interface UnionMember100 {
    field: 'lastContributorLocations';

    op: 'ContainsAny';

    value: Array<string>;
  }

  export interface UnionMember101 {
    field: 'lastContributorLocations';

    op: 'NotContainsAny';

    value: Array<string>;
  }

  export interface UnionMember102 {
    field: 'lastContributorLocations';

    op: 'AnyLt';

    value: string;
  }

  export interface UnionMember103 {
    field: 'lastContributorLocations';

    op: 'AnyLte';

    value: string;
  }

  export interface UnionMember104 {
    field: 'lastContributorLocations';

    op: 'AnyGt';

    value: string;
  }

  export interface UnionMember105 {
    field: 'lastContributorLocations';

    op: 'AnyGte';

    value: string;
  }

  export interface UnionMember106 {
    field: 'lastContributorLocations';

    op: 'ContainsAllTokens';

    value: string;
  }

  export interface UnionMember107 {
    filters: Array<
      | UnionMember107.UnionMember0
      | UnionMember107.UnionMember1
      | UnionMember107.UnionMember2
      | UnionMember107.UnionMember3
      | UnionMember107.UnionMember4
      | UnionMember107.UnionMember5
      | UnionMember107.UnionMember6
      | UnionMember107.UnionMember7
      | UnionMember107.UnionMember8
      | UnionMember107.UnionMember9
      | UnionMember107.UnionMember10
      | UnionMember107.UnionMember11
      | UnionMember107.UnionMember12
      | UnionMember107.UnionMember13
      | UnionMember107.UnionMember14
      | UnionMember107.UnionMember15
      | UnionMember107.UnionMember16
      | UnionMember107.UnionMember17
      | UnionMember107.UnionMember18
      | UnionMember107.UnionMember19
      | UnionMember107.UnionMember20
      | UnionMember107.UnionMember21
      | UnionMember107.UnionMember22
      | UnionMember107.UnionMember23
      | UnionMember107.UnionMember24
      | UnionMember107.UnionMember25
      | UnionMember107.UnionMember26
      | UnionMember107.UnionMember27
      | UnionMember107.UnionMember28
      | UnionMember107.UnionMember29
      | UnionMember107.UnionMember30
      | UnionMember107.UnionMember31
      | UnionMember107.UnionMember32
      | UnionMember107.UnionMember33
      | UnionMember107.UnionMember34
      | UnionMember107.UnionMember35
      | UnionMember107.UnionMember36
      | UnionMember107.UnionMember37
      | UnionMember107.UnionMember38
      | UnionMember107.UnionMember39
      | UnionMember107.UnionMember40
      | UnionMember107.UnionMember41
      | UnionMember107.UnionMember42
      | UnionMember107.UnionMember43
      | UnionMember107.UnionMember44
      | UnionMember107.UnionMember45
      | UnionMember107.UnionMember46
      | UnionMember107.UnionMember47
      | UnionMember107.UnionMember48
      | UnionMember107.UnionMember49
      | UnionMember107.UnionMember50
      | UnionMember107.UnionMember51
      | UnionMember107.UnionMember52
      | UnionMember107.UnionMember53
      | UnionMember107.UnionMember54
      | UnionMember107.UnionMember55
      | UnionMember107.UnionMember56
      | UnionMember107.UnionMember57
      | UnionMember107.UnionMember58
      | UnionMember107.UnionMember59
      | UnionMember107.UnionMember60
      | UnionMember107.UnionMember61
      | UnionMember107.UnionMember62
      | UnionMember107.UnionMember63
      | UnionMember107.UnionMember64
      | UnionMember107.UnionMember65
      | UnionMember107.UnionMember66
      | UnionMember107.UnionMember67
      | UnionMember107.UnionMember68
      | UnionMember107.UnionMember69
      | UnionMember107.UnionMember70
      | UnionMember107.UnionMember71
      | UnionMember107.UnionMember72
      | UnionMember107.UnionMember73
      | UnionMember107.UnionMember74
      | UnionMember107.UnionMember75
      | UnionMember107.UnionMember76
      | UnionMember107.UnionMember77
      | UnionMember107.UnionMember78
      | UnionMember107.UnionMember79
      | UnionMember107.UnionMember80
      | UnionMember107.UnionMember81
      | UnionMember107.UnionMember82
      | UnionMember107.UnionMember83
      | UnionMember107.UnionMember84
      | UnionMember107.UnionMember85
      | UnionMember107.UnionMember86
      | UnionMember107.UnionMember87
      | UnionMember107.UnionMember88
      | UnionMember107.UnionMember89
      | UnionMember107.UnionMember90
      | UnionMember107.UnionMember91
      | UnionMember107.UnionMember92
      | UnionMember107.UnionMember93
      | UnionMember107.UnionMember94
      | UnionMember107.UnionMember95
      | UnionMember107.UnionMember96
      | UnionMember107.UnionMember97
      | UnionMember107.UnionMember98
      | UnionMember107.UnionMember99
      | UnionMember107.UnionMember100
      | UnionMember107.UnionMember101
      | UnionMember107.UnionMember102
      | UnionMember107.UnionMember103
      | UnionMember107.UnionMember104
      | UnionMember107.UnionMember105
      | UnionMember107.UnionMember106
    >;

    op: 'And' | 'Or';
  }

  export namespace UnionMember107 {
    export interface UnionMember0 {
      field: 'githubId';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember1 {
      field: 'githubId';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember2 {
      field: 'githubId';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember3 {
      field: 'githubId';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember4 {
      field: 'githubId';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember5 {
      field: 'githubId';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember6 {
      field: 'githubId';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember7 {
      field: 'githubId';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember8 {
      field: 'githubId';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember9 {
      field: 'githubId';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember10 {
      field: 'githubId';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember11 {
      field: 'githubId';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember12 {
      field: 'githubId';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember13 {
      field: 'ownerLogin';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember14 {
      field: 'ownerLogin';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember15 {
      field: 'ownerLogin';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember16 {
      field: 'ownerLogin';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember17 {
      field: 'ownerLogin';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember18 {
      field: 'ownerLogin';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember19 {
      field: 'ownerLogin';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember20 {
      field: 'ownerLogin';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember21 {
      field: 'ownerLogin';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember22 {
      field: 'ownerLogin';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember23 {
      field: 'ownerLogin';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember24 {
      field: 'ownerLogin';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember25 {
      field: 'ownerLogin';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember26 {
      field: 'ownerLocation';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember27 {
      field: 'ownerLocation';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember28 {
      field: 'ownerLocation';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember29 {
      field: 'ownerLocation';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember30 {
      field: 'ownerLocation';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember31 {
      field: 'ownerLocation';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember32 {
      field: 'ownerLocation';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember33 {
      field: 'ownerLocation';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember34 {
      field: 'ownerLocation';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember35 {
      field: 'ownerLocation';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember36 {
      field: 'ownerLocation';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember37 {
      field: 'ownerLocation';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember38 {
      field: 'ownerLocation';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember39 {
      field: 'ownerLocation';

      op: 'ContainsAllTokens';

      value: string;
    }

    export interface UnionMember40 {
      field: 'name';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember41 {
      field: 'name';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember42 {
      field: 'name';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember43 {
      field: 'name';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember44 {
      field: 'name';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember45 {
      field: 'name';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember46 {
      field: 'name';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember47 {
      field: 'name';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember48 {
      field: 'name';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember49 {
      field: 'name';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember50 {
      field: 'name';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember51 {
      field: 'name';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember52 {
      field: 'name';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember53 {
      field: 'stargazerCount';

      op: 'Eq';

      value: number;
    }

    export interface UnionMember54 {
      field: 'stargazerCount';

      op: 'NotEq';

      value: number;
    }

    export interface UnionMember55 {
      field: 'stargazerCount';

      op: 'In';

      value: Array<number>;
    }

    export interface UnionMember56 {
      field: 'stargazerCount';

      op: 'NotIn';

      value: Array<number>;
    }

    export interface UnionMember57 {
      field: 'stargazerCount';

      op: 'Lt';

      value: number;
    }

    export interface UnionMember58 {
      field: 'stargazerCount';

      op: 'Lte';

      value: number;
    }

    export interface UnionMember59 {
      field: 'stargazerCount';

      op: 'Gt';

      value: number;
    }

    export interface UnionMember60 {
      field: 'stargazerCount';

      op: 'Gte';

      value: number;
    }

    export interface UnionMember61 {
      field: 'language';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember62 {
      field: 'language';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember63 {
      field: 'language';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember64 {
      field: 'language';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember65 {
      field: 'language';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember66 {
      field: 'language';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember67 {
      field: 'language';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember68 {
      field: 'language';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember69 {
      field: 'language';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember70 {
      field: 'language';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember71 {
      field: 'language';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember72 {
      field: 'language';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember73 {
      field: 'language';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember74 {
      field: 'totalIssuesCount';

      op: 'Eq';

      value: number;
    }

    export interface UnionMember75 {
      field: 'totalIssuesCount';

      op: 'NotEq';

      value: number;
    }

    export interface UnionMember76 {
      field: 'totalIssuesCount';

      op: 'In';

      value: Array<number>;
    }

    export interface UnionMember77 {
      field: 'totalIssuesCount';

      op: 'NotIn';

      value: Array<number>;
    }

    export interface UnionMember78 {
      field: 'totalIssuesCount';

      op: 'Lt';

      value: number;
    }

    export interface UnionMember79 {
      field: 'totalIssuesCount';

      op: 'Lte';

      value: number;
    }

    export interface UnionMember80 {
      field: 'totalIssuesCount';

      op: 'Gt';

      value: number;
    }

    export interface UnionMember81 {
      field: 'totalIssuesCount';

      op: 'Gte';

      value: number;
    }

    export interface UnionMember82 {
      field: 'totalIssuesOpen';

      op: 'Eq';

      value: number;
    }

    export interface UnionMember83 {
      field: 'totalIssuesOpen';

      op: 'NotEq';

      value: number;
    }

    export interface UnionMember84 {
      field: 'totalIssuesOpen';

      op: 'In';

      value: Array<number>;
    }

    export interface UnionMember85 {
      field: 'totalIssuesOpen';

      op: 'NotIn';

      value: Array<number>;
    }

    export interface UnionMember86 {
      field: 'totalIssuesOpen';

      op: 'Lt';

      value: number;
    }

    export interface UnionMember87 {
      field: 'totalIssuesOpen';

      op: 'Lte';

      value: number;
    }

    export interface UnionMember88 {
      field: 'totalIssuesOpen';

      op: 'Gt';

      value: number;
    }

    export interface UnionMember89 {
      field: 'totalIssuesOpen';

      op: 'Gte';

      value: number;
    }

    export interface UnionMember90 {
      field: 'totalIssuesClosed';

      op: 'Eq';

      value: number;
    }

    export interface UnionMember91 {
      field: 'totalIssuesClosed';

      op: 'NotEq';

      value: number;
    }

    export interface UnionMember92 {
      field: 'totalIssuesClosed';

      op: 'In';

      value: Array<number>;
    }

    export interface UnionMember93 {
      field: 'totalIssuesClosed';

      op: 'NotIn';

      value: Array<number>;
    }

    export interface UnionMember94 {
      field: 'totalIssuesClosed';

      op: 'Lt';

      value: number;
    }

    export interface UnionMember95 {
      field: 'totalIssuesClosed';

      op: 'Lte';

      value: number;
    }

    export interface UnionMember96 {
      field: 'totalIssuesClosed';

      op: 'Gt';

      value: number;
    }

    export interface UnionMember97 {
      field: 'totalIssuesClosed';

      op: 'Gte';

      value: number;
    }

    export interface UnionMember98 {
      field: 'lastContributorLocations';

      op: 'Contains';

      value: string;
    }

    export interface UnionMember99 {
      field: 'lastContributorLocations';

      op: 'NotContains';

      value: string;
    }

    export interface UnionMember100 {
      field: 'lastContributorLocations';

      op: 'ContainsAny';

      value: Array<string>;
    }

    export interface UnionMember101 {
      field: 'lastContributorLocations';

      op: 'NotContainsAny';

      value: Array<string>;
    }

    export interface UnionMember102 {
      field: 'lastContributorLocations';

      op: 'AnyLt';

      value: string;
    }

    export interface UnionMember103 {
      field: 'lastContributorLocations';

      op: 'AnyLte';

      value: string;
    }

    export interface UnionMember104 {
      field: 'lastContributorLocations';

      op: 'AnyGt';

      value: string;
    }

    export interface UnionMember105 {
      field: 'lastContributorLocations';

      op: 'AnyGte';

      value: string;
    }

    export interface UnionMember106 {
      field: 'lastContributorLocations';

      op: 'ContainsAllTokens';

      value: string;
    }
  }

  export interface UnionMember108 {
    filters: Array<
      | UnionMember108.UnionMember0
      | UnionMember108.UnionMember1
      | UnionMember108.UnionMember2
      | UnionMember108.UnionMember3
      | UnionMember108.UnionMember4
      | UnionMember108.UnionMember5
      | UnionMember108.UnionMember6
      | UnionMember108.UnionMember7
      | UnionMember108.UnionMember8
      | UnionMember108.UnionMember9
      | UnionMember108.UnionMember10
      | UnionMember108.UnionMember11
      | UnionMember108.UnionMember12
      | UnionMember108.UnionMember13
      | UnionMember108.UnionMember14
      | UnionMember108.UnionMember15
      | UnionMember108.UnionMember16
      | UnionMember108.UnionMember17
      | UnionMember108.UnionMember18
      | UnionMember108.UnionMember19
      | UnionMember108.UnionMember20
      | UnionMember108.UnionMember21
      | UnionMember108.UnionMember22
      | UnionMember108.UnionMember23
      | UnionMember108.UnionMember24
      | UnionMember108.UnionMember25
      | UnionMember108.UnionMember26
      | UnionMember108.UnionMember27
      | UnionMember108.UnionMember28
      | UnionMember108.UnionMember29
      | UnionMember108.UnionMember30
      | UnionMember108.UnionMember31
      | UnionMember108.UnionMember32
      | UnionMember108.UnionMember33
      | UnionMember108.UnionMember34
      | UnionMember108.UnionMember35
      | UnionMember108.UnionMember36
      | UnionMember108.UnionMember37
      | UnionMember108.UnionMember38
      | UnionMember108.UnionMember39
      | UnionMember108.UnionMember40
      | UnionMember108.UnionMember41
      | UnionMember108.UnionMember42
      | UnionMember108.UnionMember43
      | UnionMember108.UnionMember44
      | UnionMember108.UnionMember45
      | UnionMember108.UnionMember46
      | UnionMember108.UnionMember47
      | UnionMember108.UnionMember48
      | UnionMember108.UnionMember49
      | UnionMember108.UnionMember50
      | UnionMember108.UnionMember51
      | UnionMember108.UnionMember52
      | UnionMember108.UnionMember53
      | UnionMember108.UnionMember54
      | UnionMember108.UnionMember55
      | UnionMember108.UnionMember56
      | UnionMember108.UnionMember57
      | UnionMember108.UnionMember58
      | UnionMember108.UnionMember59
      | UnionMember108.UnionMember60
      | UnionMember108.UnionMember61
      | UnionMember108.UnionMember62
      | UnionMember108.UnionMember63
      | UnionMember108.UnionMember64
      | UnionMember108.UnionMember65
      | UnionMember108.UnionMember66
      | UnionMember108.UnionMember67
      | UnionMember108.UnionMember68
      | UnionMember108.UnionMember69
      | UnionMember108.UnionMember70
      | UnionMember108.UnionMember71
      | UnionMember108.UnionMember72
      | UnionMember108.UnionMember73
      | UnionMember108.UnionMember74
      | UnionMember108.UnionMember75
      | UnionMember108.UnionMember76
      | UnionMember108.UnionMember77
      | UnionMember108.UnionMember78
      | UnionMember108.UnionMember79
      | UnionMember108.UnionMember80
      | UnionMember108.UnionMember81
      | UnionMember108.UnionMember82
      | UnionMember108.UnionMember83
      | UnionMember108.UnionMember84
      | UnionMember108.UnionMember85
      | UnionMember108.UnionMember86
      | UnionMember108.UnionMember87
      | UnionMember108.UnionMember88
      | UnionMember108.UnionMember89
      | UnionMember108.UnionMember90
      | UnionMember108.UnionMember91
      | UnionMember108.UnionMember92
      | UnionMember108.UnionMember93
      | UnionMember108.UnionMember94
      | UnionMember108.UnionMember95
      | UnionMember108.UnionMember96
      | UnionMember108.UnionMember97
      | UnionMember108.UnionMember98
      | UnionMember108.UnionMember99
      | UnionMember108.UnionMember100
      | UnionMember108.UnionMember101
      | UnionMember108.UnionMember102
      | UnionMember108.UnionMember103
      | UnionMember108.UnionMember104
      | UnionMember108.UnionMember105
      | UnionMember108.UnionMember106
      | UnionMember108.UnionMember107
    >;

    op: 'And' | 'Or';
  }

  export namespace UnionMember108 {
    export interface UnionMember0 {
      field: 'githubId';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember1 {
      field: 'githubId';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember2 {
      field: 'githubId';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember3 {
      field: 'githubId';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember4 {
      field: 'githubId';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember5 {
      field: 'githubId';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember6 {
      field: 'githubId';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember7 {
      field: 'githubId';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember8 {
      field: 'githubId';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember9 {
      field: 'githubId';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember10 {
      field: 'githubId';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember11 {
      field: 'githubId';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember12 {
      field: 'githubId';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember13 {
      field: 'ownerLogin';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember14 {
      field: 'ownerLogin';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember15 {
      field: 'ownerLogin';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember16 {
      field: 'ownerLogin';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember17 {
      field: 'ownerLogin';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember18 {
      field: 'ownerLogin';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember19 {
      field: 'ownerLogin';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember20 {
      field: 'ownerLogin';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember21 {
      field: 'ownerLogin';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember22 {
      field: 'ownerLogin';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember23 {
      field: 'ownerLogin';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember24 {
      field: 'ownerLogin';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember25 {
      field: 'ownerLogin';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember26 {
      field: 'ownerLocation';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember27 {
      field: 'ownerLocation';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember28 {
      field: 'ownerLocation';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember29 {
      field: 'ownerLocation';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember30 {
      field: 'ownerLocation';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember31 {
      field: 'ownerLocation';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember32 {
      field: 'ownerLocation';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember33 {
      field: 'ownerLocation';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember34 {
      field: 'ownerLocation';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember35 {
      field: 'ownerLocation';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember36 {
      field: 'ownerLocation';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember37 {
      field: 'ownerLocation';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember38 {
      field: 'ownerLocation';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember39 {
      field: 'ownerLocation';

      op: 'ContainsAllTokens';

      value: string;
    }

    export interface UnionMember40 {
      field: 'name';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember41 {
      field: 'name';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember42 {
      field: 'name';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember43 {
      field: 'name';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember44 {
      field: 'name';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember45 {
      field: 'name';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember46 {
      field: 'name';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember47 {
      field: 'name';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember48 {
      field: 'name';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember49 {
      field: 'name';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember50 {
      field: 'name';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember51 {
      field: 'name';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember52 {
      field: 'name';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember53 {
      field: 'stargazerCount';

      op: 'Eq';

      value: number;
    }

    export interface UnionMember54 {
      field: 'stargazerCount';

      op: 'NotEq';

      value: number;
    }

    export interface UnionMember55 {
      field: 'stargazerCount';

      op: 'In';

      value: Array<number>;
    }

    export interface UnionMember56 {
      field: 'stargazerCount';

      op: 'NotIn';

      value: Array<number>;
    }

    export interface UnionMember57 {
      field: 'stargazerCount';

      op: 'Lt';

      value: number;
    }

    export interface UnionMember58 {
      field: 'stargazerCount';

      op: 'Lte';

      value: number;
    }

    export interface UnionMember59 {
      field: 'stargazerCount';

      op: 'Gt';

      value: number;
    }

    export interface UnionMember60 {
      field: 'stargazerCount';

      op: 'Gte';

      value: number;
    }

    export interface UnionMember61 {
      field: 'language';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember62 {
      field: 'language';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember63 {
      field: 'language';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember64 {
      field: 'language';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember65 {
      field: 'language';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember66 {
      field: 'language';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember67 {
      field: 'language';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember68 {
      field: 'language';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember69 {
      field: 'language';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember70 {
      field: 'language';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember71 {
      field: 'language';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember72 {
      field: 'language';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember73 {
      field: 'language';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember74 {
      field: 'totalIssuesCount';

      op: 'Eq';

      value: number;
    }

    export interface UnionMember75 {
      field: 'totalIssuesCount';

      op: 'NotEq';

      value: number;
    }

    export interface UnionMember76 {
      field: 'totalIssuesCount';

      op: 'In';

      value: Array<number>;
    }

    export interface UnionMember77 {
      field: 'totalIssuesCount';

      op: 'NotIn';

      value: Array<number>;
    }

    export interface UnionMember78 {
      field: 'totalIssuesCount';

      op: 'Lt';

      value: number;
    }

    export interface UnionMember79 {
      field: 'totalIssuesCount';

      op: 'Lte';

      value: number;
    }

    export interface UnionMember80 {
      field: 'totalIssuesCount';

      op: 'Gt';

      value: number;
    }

    export interface UnionMember81 {
      field: 'totalIssuesCount';

      op: 'Gte';

      value: number;
    }

    export interface UnionMember82 {
      field: 'totalIssuesOpen';

      op: 'Eq';

      value: number;
    }

    export interface UnionMember83 {
      field: 'totalIssuesOpen';

      op: 'NotEq';

      value: number;
    }

    export interface UnionMember84 {
      field: 'totalIssuesOpen';

      op: 'In';

      value: Array<number>;
    }

    export interface UnionMember85 {
      field: 'totalIssuesOpen';

      op: 'NotIn';

      value: Array<number>;
    }

    export interface UnionMember86 {
      field: 'totalIssuesOpen';

      op: 'Lt';

      value: number;
    }

    export interface UnionMember87 {
      field: 'totalIssuesOpen';

      op: 'Lte';

      value: number;
    }

    export interface UnionMember88 {
      field: 'totalIssuesOpen';

      op: 'Gt';

      value: number;
    }

    export interface UnionMember89 {
      field: 'totalIssuesOpen';

      op: 'Gte';

      value: number;
    }

    export interface UnionMember90 {
      field: 'totalIssuesClosed';

      op: 'Eq';

      value: number;
    }

    export interface UnionMember91 {
      field: 'totalIssuesClosed';

      op: 'NotEq';

      value: number;
    }

    export interface UnionMember92 {
      field: 'totalIssuesClosed';

      op: 'In';

      value: Array<number>;
    }

    export interface UnionMember93 {
      field: 'totalIssuesClosed';

      op: 'NotIn';

      value: Array<number>;
    }

    export interface UnionMember94 {
      field: 'totalIssuesClosed';

      op: 'Lt';

      value: number;
    }

    export interface UnionMember95 {
      field: 'totalIssuesClosed';

      op: 'Lte';

      value: number;
    }

    export interface UnionMember96 {
      field: 'totalIssuesClosed';

      op: 'Gt';

      value: number;
    }

    export interface UnionMember97 {
      field: 'totalIssuesClosed';

      op: 'Gte';

      value: number;
    }

    export interface UnionMember98 {
      field: 'lastContributorLocations';

      op: 'Contains';

      value: string;
    }

    export interface UnionMember99 {
      field: 'lastContributorLocations';

      op: 'NotContains';

      value: string;
    }

    export interface UnionMember100 {
      field: 'lastContributorLocations';

      op: 'ContainsAny';

      value: Array<string>;
    }

    export interface UnionMember101 {
      field: 'lastContributorLocations';

      op: 'NotContainsAny';

      value: Array<string>;
    }

    export interface UnionMember102 {
      field: 'lastContributorLocations';

      op: 'AnyLt';

      value: string;
    }

    export interface UnionMember103 {
      field: 'lastContributorLocations';

      op: 'AnyLte';

      value: string;
    }

    export interface UnionMember104 {
      field: 'lastContributorLocations';

      op: 'AnyGt';

      value: string;
    }

    export interface UnionMember105 {
      field: 'lastContributorLocations';

      op: 'AnyGte';

      value: string;
    }

    export interface UnionMember106 {
      field: 'lastContributorLocations';

      op: 'ContainsAllTokens';

      value: string;
    }

    export interface UnionMember107 {
      filters: Array<
        | UnionMember107.UnionMember0
        | UnionMember107.UnionMember1
        | UnionMember107.UnionMember2
        | UnionMember107.UnionMember3
        | UnionMember107.UnionMember4
        | UnionMember107.UnionMember5
        | UnionMember107.UnionMember6
        | UnionMember107.UnionMember7
        | UnionMember107.UnionMember8
        | UnionMember107.UnionMember9
        | UnionMember107.UnionMember10
        | UnionMember107.UnionMember11
        | UnionMember107.UnionMember12
        | UnionMember107.UnionMember13
        | UnionMember107.UnionMember14
        | UnionMember107.UnionMember15
        | UnionMember107.UnionMember16
        | UnionMember107.UnionMember17
        | UnionMember107.UnionMember18
        | UnionMember107.UnionMember19
        | UnionMember107.UnionMember20
        | UnionMember107.UnionMember21
        | UnionMember107.UnionMember22
        | UnionMember107.UnionMember23
        | UnionMember107.UnionMember24
        | UnionMember107.UnionMember25
        | UnionMember107.UnionMember26
        | UnionMember107.UnionMember27
        | UnionMember107.UnionMember28
        | UnionMember107.UnionMember29
        | UnionMember107.UnionMember30
        | UnionMember107.UnionMember31
        | UnionMember107.UnionMember32
        | UnionMember107.UnionMember33
        | UnionMember107.UnionMember34
        | UnionMember107.UnionMember35
        | UnionMember107.UnionMember36
        | UnionMember107.UnionMember37
        | UnionMember107.UnionMember38
        | UnionMember107.UnionMember39
        | UnionMember107.UnionMember40
        | UnionMember107.UnionMember41
        | UnionMember107.UnionMember42
        | UnionMember107.UnionMember43
        | UnionMember107.UnionMember44
        | UnionMember107.UnionMember45
        | UnionMember107.UnionMember46
        | UnionMember107.UnionMember47
        | UnionMember107.UnionMember48
        | UnionMember107.UnionMember49
        | UnionMember107.UnionMember50
        | UnionMember107.UnionMember51
        | UnionMember107.UnionMember52
        | UnionMember107.UnionMember53
        | UnionMember107.UnionMember54
        | UnionMember107.UnionMember55
        | UnionMember107.UnionMember56
        | UnionMember107.UnionMember57
        | UnionMember107.UnionMember58
        | UnionMember107.UnionMember59
        | UnionMember107.UnionMember60
        | UnionMember107.UnionMember61
        | UnionMember107.UnionMember62
        | UnionMember107.UnionMember63
        | UnionMember107.UnionMember64
        | UnionMember107.UnionMember65
        | UnionMember107.UnionMember66
        | UnionMember107.UnionMember67
        | UnionMember107.UnionMember68
        | UnionMember107.UnionMember69
        | UnionMember107.UnionMember70
        | UnionMember107.UnionMember71
        | UnionMember107.UnionMember72
        | UnionMember107.UnionMember73
        | UnionMember107.UnionMember74
        | UnionMember107.UnionMember75
        | UnionMember107.UnionMember76
        | UnionMember107.UnionMember77
        | UnionMember107.UnionMember78
        | UnionMember107.UnionMember79
        | UnionMember107.UnionMember80
        | UnionMember107.UnionMember81
        | UnionMember107.UnionMember82
        | UnionMember107.UnionMember83
        | UnionMember107.UnionMember84
        | UnionMember107.UnionMember85
        | UnionMember107.UnionMember86
        | UnionMember107.UnionMember87
        | UnionMember107.UnionMember88
        | UnionMember107.UnionMember89
        | UnionMember107.UnionMember90
        | UnionMember107.UnionMember91
        | UnionMember107.UnionMember92
        | UnionMember107.UnionMember93
        | UnionMember107.UnionMember94
        | UnionMember107.UnionMember95
        | UnionMember107.UnionMember96
        | UnionMember107.UnionMember97
        | UnionMember107.UnionMember98
        | UnionMember107.UnionMember99
        | UnionMember107.UnionMember100
        | UnionMember107.UnionMember101
        | UnionMember107.UnionMember102
        | UnionMember107.UnionMember103
        | UnionMember107.UnionMember104
        | UnionMember107.UnionMember105
        | UnionMember107.UnionMember106
      >;

      op: 'And' | 'Or';
    }

    export namespace UnionMember107 {
      export interface UnionMember0 {
        field: 'githubId';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember1 {
        field: 'githubId';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember2 {
        field: 'githubId';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember3 {
        field: 'githubId';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember4 {
        field: 'githubId';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember5 {
        field: 'githubId';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember6 {
        field: 'githubId';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember7 {
        field: 'githubId';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember8 {
        field: 'githubId';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember9 {
        field: 'githubId';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember10 {
        field: 'githubId';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember11 {
        field: 'githubId';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember12 {
        field: 'githubId';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember13 {
        field: 'ownerLogin';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember14 {
        field: 'ownerLogin';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember15 {
        field: 'ownerLogin';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember16 {
        field: 'ownerLogin';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember17 {
        field: 'ownerLogin';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember18 {
        field: 'ownerLogin';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember19 {
        field: 'ownerLogin';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember20 {
        field: 'ownerLogin';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember21 {
        field: 'ownerLogin';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember22 {
        field: 'ownerLogin';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember23 {
        field: 'ownerLogin';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember24 {
        field: 'ownerLogin';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember25 {
        field: 'ownerLogin';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember26 {
        field: 'ownerLocation';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember27 {
        field: 'ownerLocation';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember28 {
        field: 'ownerLocation';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember29 {
        field: 'ownerLocation';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember30 {
        field: 'ownerLocation';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember31 {
        field: 'ownerLocation';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember32 {
        field: 'ownerLocation';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember33 {
        field: 'ownerLocation';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember34 {
        field: 'ownerLocation';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember35 {
        field: 'ownerLocation';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember36 {
        field: 'ownerLocation';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember37 {
        field: 'ownerLocation';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember38 {
        field: 'ownerLocation';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember39 {
        field: 'ownerLocation';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember40 {
        field: 'name';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember41 {
        field: 'name';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember42 {
        field: 'name';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember43 {
        field: 'name';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember44 {
        field: 'name';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember45 {
        field: 'name';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember46 {
        field: 'name';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember47 {
        field: 'name';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember48 {
        field: 'name';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember49 {
        field: 'name';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember50 {
        field: 'name';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember51 {
        field: 'name';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember52 {
        field: 'name';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember53 {
        field: 'stargazerCount';

        op: 'Eq';

        value: number;
      }

      export interface UnionMember54 {
        field: 'stargazerCount';

        op: 'NotEq';

        value: number;
      }

      export interface UnionMember55 {
        field: 'stargazerCount';

        op: 'In';

        value: Array<number>;
      }

      export interface UnionMember56 {
        field: 'stargazerCount';

        op: 'NotIn';

        value: Array<number>;
      }

      export interface UnionMember57 {
        field: 'stargazerCount';

        op: 'Lt';

        value: number;
      }

      export interface UnionMember58 {
        field: 'stargazerCount';

        op: 'Lte';

        value: number;
      }

      export interface UnionMember59 {
        field: 'stargazerCount';

        op: 'Gt';

        value: number;
      }

      export interface UnionMember60 {
        field: 'stargazerCount';

        op: 'Gte';

        value: number;
      }

      export interface UnionMember61 {
        field: 'language';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember62 {
        field: 'language';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember63 {
        field: 'language';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember64 {
        field: 'language';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember65 {
        field: 'language';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember66 {
        field: 'language';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember67 {
        field: 'language';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember68 {
        field: 'language';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember69 {
        field: 'language';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember70 {
        field: 'language';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember71 {
        field: 'language';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember72 {
        field: 'language';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember73 {
        field: 'language';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember74 {
        field: 'totalIssuesCount';

        op: 'Eq';

        value: number;
      }

      export interface UnionMember75 {
        field: 'totalIssuesCount';

        op: 'NotEq';

        value: number;
      }

      export interface UnionMember76 {
        field: 'totalIssuesCount';

        op: 'In';

        value: Array<number>;
      }

      export interface UnionMember77 {
        field: 'totalIssuesCount';

        op: 'NotIn';

        value: Array<number>;
      }

      export interface UnionMember78 {
        field: 'totalIssuesCount';

        op: 'Lt';

        value: number;
      }

      export interface UnionMember79 {
        field: 'totalIssuesCount';

        op: 'Lte';

        value: number;
      }

      export interface UnionMember80 {
        field: 'totalIssuesCount';

        op: 'Gt';

        value: number;
      }

      export interface UnionMember81 {
        field: 'totalIssuesCount';

        op: 'Gte';

        value: number;
      }

      export interface UnionMember82 {
        field: 'totalIssuesOpen';

        op: 'Eq';

        value: number;
      }

      export interface UnionMember83 {
        field: 'totalIssuesOpen';

        op: 'NotEq';

        value: number;
      }

      export interface UnionMember84 {
        field: 'totalIssuesOpen';

        op: 'In';

        value: Array<number>;
      }

      export interface UnionMember85 {
        field: 'totalIssuesOpen';

        op: 'NotIn';

        value: Array<number>;
      }

      export interface UnionMember86 {
        field: 'totalIssuesOpen';

        op: 'Lt';

        value: number;
      }

      export interface UnionMember87 {
        field: 'totalIssuesOpen';

        op: 'Lte';

        value: number;
      }

      export interface UnionMember88 {
        field: 'totalIssuesOpen';

        op: 'Gt';

        value: number;
      }

      export interface UnionMember89 {
        field: 'totalIssuesOpen';

        op: 'Gte';

        value: number;
      }

      export interface UnionMember90 {
        field: 'totalIssuesClosed';

        op: 'Eq';

        value: number;
      }

      export interface UnionMember91 {
        field: 'totalIssuesClosed';

        op: 'NotEq';

        value: number;
      }

      export interface UnionMember92 {
        field: 'totalIssuesClosed';

        op: 'In';

        value: Array<number>;
      }

      export interface UnionMember93 {
        field: 'totalIssuesClosed';

        op: 'NotIn';

        value: Array<number>;
      }

      export interface UnionMember94 {
        field: 'totalIssuesClosed';

        op: 'Lt';

        value: number;
      }

      export interface UnionMember95 {
        field: 'totalIssuesClosed';

        op: 'Lte';

        value: number;
      }

      export interface UnionMember96 {
        field: 'totalIssuesClosed';

        op: 'Gt';

        value: number;
      }

      export interface UnionMember97 {
        field: 'totalIssuesClosed';

        op: 'Gte';

        value: number;
      }

      export interface UnionMember98 {
        field: 'lastContributorLocations';

        op: 'Contains';

        value: string;
      }

      export interface UnionMember99 {
        field: 'lastContributorLocations';

        op: 'NotContains';

        value: string;
      }

      export interface UnionMember100 {
        field: 'lastContributorLocations';

        op: 'ContainsAny';

        value: Array<string>;
      }

      export interface UnionMember101 {
        field: 'lastContributorLocations';

        op: 'NotContainsAny';

        value: Array<string>;
      }

      export interface UnionMember102 {
        field: 'lastContributorLocations';

        op: 'AnyLt';

        value: string;
      }

      export interface UnionMember103 {
        field: 'lastContributorLocations';

        op: 'AnyLte';

        value: string;
      }

      export interface UnionMember104 {
        field: 'lastContributorLocations';

        op: 'AnyGt';

        value: string;
      }

      export interface UnionMember105 {
        field: 'lastContributorLocations';

        op: 'AnyGte';

        value: string;
      }

      export interface UnionMember106 {
        field: 'lastContributorLocations';

        op: 'ContainsAllTokens';

        value: string;
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
      filters?:
        | Contributors.UnionMember0
        | Contributors.UnionMember1
        | Contributors.UnionMember2
        | Contributors.UnionMember3
        | Contributors.UnionMember4
        | Contributors.UnionMember5
        | Contributors.UnionMember6
        | Contributors.UnionMember7
        | Contributors.UnionMember8
        | Contributors.UnionMember9
        | Contributors.UnionMember10
        | Contributors.UnionMember11
        | Contributors.UnionMember12
        | Contributors.UnionMember13
        | Contributors.UnionMember14
        | Contributors.UnionMember15
        | Contributors.UnionMember16
        | Contributors.UnionMember17
        | Contributors.UnionMember18
        | Contributors.UnionMember19
        | Contributors.UnionMember20
        | Contributors.UnionMember21
        | Contributors.UnionMember22
        | Contributors.UnionMember23
        | Contributors.UnionMember24
        | Contributors.UnionMember25
        | Contributors.UnionMember26
        | Contributors.UnionMember27
        | Contributors.UnionMember28
        | Contributors.UnionMember29
        | Contributors.UnionMember30
        | Contributors.UnionMember31
        | Contributors.UnionMember32
        | Contributors.UnionMember33
        | Contributors.UnionMember34
        | Contributors.UnionMember35
        | Contributors.UnionMember36
        | Contributors.UnionMember37
        | Contributors.UnionMember38
        | Contributors.UnionMember39
        | Contributors.UnionMember40
        | Contributors.UnionMember41
        | Contributors.UnionMember42
        | Contributors.UnionMember43
        | Contributors.UnionMember44
        | Contributors.UnionMember45
        | Contributors.UnionMember46
        | Contributors.UnionMember47
        | Contributors.UnionMember48
        | Contributors.UnionMember49
        | Contributors.UnionMember50
        | Contributors.UnionMember51
        | Contributors.UnionMember52
        | Contributors.UnionMember53
        | Contributors.UnionMember54
        | Contributors.UnionMember55
        | Contributors.UnionMember56
        | Contributors.UnionMember57
        | Contributors.UnionMember58
        | Contributors.UnionMember59
        | Contributors.UnionMember60
        | Contributors.UnionMember61
        | Contributors.UnionMember62
        | Contributors.UnionMember63
        | Contributors.UnionMember64
        | Contributors.UnionMember65
        | Contributors.UnionMember66
        | Contributors.UnionMember67
        | Contributors.UnionMember68
        | Contributors.UnionMember69
        | Contributors.UnionMember70
        | Contributors.UnionMember71
        | Contributors.UnionMember72
        | Contributors.UnionMember73
        | Contributors.UnionMember74
        | Contributors.UnionMember75
        | Contributors.UnionMember76
        | Contributors.UnionMember77
        | Contributors.UnionMember78
        | Contributors.UnionMember79
        | Contributors.UnionMember80
        | Contributors.UnionMember81
        | Contributors.UnionMember82
        | Contributors.UnionMember83
        | Contributors.UnionMember84
        | Contributors.UnionMember85
        | Contributors.UnionMember86
        | Contributors.UnionMember87
        | Contributors.UnionMember88
        | Contributors.UnionMember89
        | Contributors.UnionMember90
        | Contributors.UnionMember91
        | Contributors.UnionMember92
        | Contributors.UnionMember93
        | Contributors.UnionMember94
        | Contributors.UnionMember95
        | Contributors.UnionMember96
        | Contributors.UnionMember97
        | Contributors.UnionMember98
        | Contributors.UnionMember99
        | Contributors.UnionMember100
        | Contributors.UnionMember101
        | Contributors.UnionMember102
        | Contributors.UnionMember103
        | Contributors.UnionMember104
        | Contributors.UnionMember105
        | Contributors.UnionMember106
        | Contributors.UnionMember107
        | Contributors.UnionMember108
        | Contributors.UnionMember109
        | Contributors.UnionMember110
        | Contributors.UnionMember111
        | Contributors.UnionMember112
        | Contributors.UnionMember113
        | Contributors.UnionMember114
        | Contributors.UnionMember115
        | Contributors.UnionMember116
        | Contributors.UnionMember117
        | Contributors.UnionMember118
        | Contributors.UnionMember119
        | Contributors.UnionMember120
        | Contributors.UnionMember121
        | Contributors.UnionMember122
        | Contributors.UnionMember123
        | Contributors.UnionMember124
        | Contributors.UnionMember125
        | Contributors.UnionMember126
        | Contributors.UnionMember127
        | Contributors.UnionMember128
        | Contributors.UnionMember129
        | Contributors.UnionMember130
        | Contributors.UnionMember131
        | Contributors.UnionMember132
        | Contributors.UnionMember133
        | Contributors.UnionMember134
        | Contributors.UnionMember135
        | Contributors.UnionMember136
        | Contributors.UnionMember137
        | Contributors.UnionMember138
        | Contributors.UnionMember139
        | Contributors.UnionMember140;
    }

    export namespace Contributors {
      export interface UnionMember0 {
        field: 'githubId';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember1 {
        field: 'githubId';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember2 {
        field: 'githubId';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember3 {
        field: 'githubId';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember4 {
        field: 'githubId';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember5 {
        field: 'githubId';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember6 {
        field: 'githubId';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember7 {
        field: 'githubId';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember8 {
        field: 'githubId';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember9 {
        field: 'githubId';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember10 {
        field: 'githubId';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember11 {
        field: 'githubId';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember12 {
        field: 'githubId';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember13 {
        field: 'login';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember14 {
        field: 'login';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember15 {
        field: 'login';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember16 {
        field: 'login';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember17 {
        field: 'login';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember18 {
        field: 'login';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember19 {
        field: 'login';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember20 {
        field: 'login';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember21 {
        field: 'login';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember22 {
        field: 'login';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember23 {
        field: 'login';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember24 {
        field: 'login';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember25 {
        field: 'login';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember26 {
        field: 'login';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember27 {
        field: 'displayName';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember28 {
        field: 'displayName';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember29 {
        field: 'displayName';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember30 {
        field: 'displayName';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember31 {
        field: 'displayName';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember32 {
        field: 'displayName';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember33 {
        field: 'displayName';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember34 {
        field: 'displayName';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember35 {
        field: 'displayName';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember36 {
        field: 'displayName';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember37 {
        field: 'displayName';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember38 {
        field: 'displayName';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember39 {
        field: 'displayName';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember40 {
        field: 'displayName';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember41 {
        field: 'bio';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember42 {
        field: 'bio';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember43 {
        field: 'bio';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember44 {
        field: 'bio';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember45 {
        field: 'bio';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember46 {
        field: 'bio';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember47 {
        field: 'bio';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember48 {
        field: 'bio';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember49 {
        field: 'bio';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember50 {
        field: 'bio';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember51 {
        field: 'bio';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember52 {
        field: 'bio';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember53 {
        field: 'bio';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember54 {
        field: 'bio';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember55 {
        field: 'company';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember56 {
        field: 'company';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember57 {
        field: 'company';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember58 {
        field: 'company';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember59 {
        field: 'company';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember60 {
        field: 'company';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember61 {
        field: 'company';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember62 {
        field: 'company';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember63 {
        field: 'company';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember64 {
        field: 'company';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember65 {
        field: 'company';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember66 {
        field: 'company';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember67 {
        field: 'company';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember68 {
        field: 'company';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember69 {
        field: 'location';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember70 {
        field: 'location';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember71 {
        field: 'location';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember72 {
        field: 'location';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember73 {
        field: 'location';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember74 {
        field: 'location';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember75 {
        field: 'location';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember76 {
        field: 'location';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember77 {
        field: 'location';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember78 {
        field: 'location';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember79 {
        field: 'location';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember80 {
        field: 'location';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember81 {
        field: 'location';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember82 {
        field: 'location';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember83 {
        field: 'emails';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember84 {
        field: 'emails';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember85 {
        field: 'emails';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember86 {
        field: 'emails';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember87 {
        field: 'emails';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember88 {
        field: 'emails';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember89 {
        field: 'emails';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember90 {
        field: 'emails';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember91 {
        field: 'emails';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember92 {
        field: 'emails';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember93 {
        field: 'emails';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember94 {
        field: 'emails';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember95 {
        field: 'emails';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember96 {
        field: 'emails';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember97 {
        field: 'resolvedCountry';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember98 {
        field: 'resolvedCountry';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember99 {
        field: 'resolvedCountry';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember100 {
        field: 'resolvedCountry';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember101 {
        field: 'resolvedCountry';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember102 {
        field: 'resolvedCountry';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember103 {
        field: 'resolvedCountry';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember104 {
        field: 'resolvedCountry';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember105 {
        field: 'resolvedCountry';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember106 {
        field: 'resolvedCountry';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember107 {
        field: 'resolvedCountry';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember108 {
        field: 'resolvedCountry';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember109 {
        field: 'resolvedCountry';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember110 {
        field: 'resolvedCountry';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember111 {
        field: 'resolvedState';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember112 {
        field: 'resolvedState';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember113 {
        field: 'resolvedState';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember114 {
        field: 'resolvedState';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember115 {
        field: 'resolvedState';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember116 {
        field: 'resolvedState';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember117 {
        field: 'resolvedState';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember118 {
        field: 'resolvedState';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember119 {
        field: 'resolvedState';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember120 {
        field: 'resolvedState';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember121 {
        field: 'resolvedState';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember122 {
        field: 'resolvedState';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember123 {
        field: 'resolvedState';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember124 {
        field: 'resolvedState';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember125 {
        field: 'resolvedCity';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember126 {
        field: 'resolvedCity';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember127 {
        field: 'resolvedCity';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember128 {
        field: 'resolvedCity';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember129 {
        field: 'resolvedCity';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember130 {
        field: 'resolvedCity';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember131 {
        field: 'resolvedCity';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember132 {
        field: 'resolvedCity';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember133 {
        field: 'resolvedCity';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember134 {
        field: 'resolvedCity';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember135 {
        field: 'resolvedCity';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember136 {
        field: 'resolvedCity';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember137 {
        field: 'resolvedCity';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember138 {
        field: 'resolvedCity';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember139 {
        filters: Array<
          | UnionMember139.UnionMember0
          | UnionMember139.UnionMember1
          | UnionMember139.UnionMember2
          | UnionMember139.UnionMember3
          | UnionMember139.UnionMember4
          | UnionMember139.UnionMember5
          | UnionMember139.UnionMember6
          | UnionMember139.UnionMember7
          | UnionMember139.UnionMember8
          | UnionMember139.UnionMember9
          | UnionMember139.UnionMember10
          | UnionMember139.UnionMember11
          | UnionMember139.UnionMember12
          | UnionMember139.UnionMember13
          | UnionMember139.UnionMember14
          | UnionMember139.UnionMember15
          | UnionMember139.UnionMember16
          | UnionMember139.UnionMember17
          | UnionMember139.UnionMember18
          | UnionMember139.UnionMember19
          | UnionMember139.UnionMember20
          | UnionMember139.UnionMember21
          | UnionMember139.UnionMember22
          | UnionMember139.UnionMember23
          | UnionMember139.UnionMember24
          | UnionMember139.UnionMember25
          | UnionMember139.UnionMember26
          | UnionMember139.UnionMember27
          | UnionMember139.UnionMember28
          | UnionMember139.UnionMember29
          | UnionMember139.UnionMember30
          | UnionMember139.UnionMember31
          | UnionMember139.UnionMember32
          | UnionMember139.UnionMember33
          | UnionMember139.UnionMember34
          | UnionMember139.UnionMember35
          | UnionMember139.UnionMember36
          | UnionMember139.UnionMember37
          | UnionMember139.UnionMember38
          | UnionMember139.UnionMember39
          | UnionMember139.UnionMember40
          | UnionMember139.UnionMember41
          | UnionMember139.UnionMember42
          | UnionMember139.UnionMember43
          | UnionMember139.UnionMember44
          | UnionMember139.UnionMember45
          | UnionMember139.UnionMember46
          | UnionMember139.UnionMember47
          | UnionMember139.UnionMember48
          | UnionMember139.UnionMember49
          | UnionMember139.UnionMember50
          | UnionMember139.UnionMember51
          | UnionMember139.UnionMember52
          | UnionMember139.UnionMember53
          | UnionMember139.UnionMember54
          | UnionMember139.UnionMember55
          | UnionMember139.UnionMember56
          | UnionMember139.UnionMember57
          | UnionMember139.UnionMember58
          | UnionMember139.UnionMember59
          | UnionMember139.UnionMember60
          | UnionMember139.UnionMember61
          | UnionMember139.UnionMember62
          | UnionMember139.UnionMember63
          | UnionMember139.UnionMember64
          | UnionMember139.UnionMember65
          | UnionMember139.UnionMember66
          | UnionMember139.UnionMember67
          | UnionMember139.UnionMember68
          | UnionMember139.UnionMember69
          | UnionMember139.UnionMember70
          | UnionMember139.UnionMember71
          | UnionMember139.UnionMember72
          | UnionMember139.UnionMember73
          | UnionMember139.UnionMember74
          | UnionMember139.UnionMember75
          | UnionMember139.UnionMember76
          | UnionMember139.UnionMember77
          | UnionMember139.UnionMember78
          | UnionMember139.UnionMember79
          | UnionMember139.UnionMember80
          | UnionMember139.UnionMember81
          | UnionMember139.UnionMember82
          | UnionMember139.UnionMember83
          | UnionMember139.UnionMember84
          | UnionMember139.UnionMember85
          | UnionMember139.UnionMember86
          | UnionMember139.UnionMember87
          | UnionMember139.UnionMember88
          | UnionMember139.UnionMember89
          | UnionMember139.UnionMember90
          | UnionMember139.UnionMember91
          | UnionMember139.UnionMember92
          | UnionMember139.UnionMember93
          | UnionMember139.UnionMember94
          | UnionMember139.UnionMember95
          | UnionMember139.UnionMember96
          | UnionMember139.UnionMember97
          | UnionMember139.UnionMember98
          | UnionMember139.UnionMember99
          | UnionMember139.UnionMember100
          | UnionMember139.UnionMember101
          | UnionMember139.UnionMember102
          | UnionMember139.UnionMember103
          | UnionMember139.UnionMember104
          | UnionMember139.UnionMember105
          | UnionMember139.UnionMember106
          | UnionMember139.UnionMember107
          | UnionMember139.UnionMember108
          | UnionMember139.UnionMember109
          | UnionMember139.UnionMember110
          | UnionMember139.UnionMember111
          | UnionMember139.UnionMember112
          | UnionMember139.UnionMember113
          | UnionMember139.UnionMember114
          | UnionMember139.UnionMember115
          | UnionMember139.UnionMember116
          | UnionMember139.UnionMember117
          | UnionMember139.UnionMember118
          | UnionMember139.UnionMember119
          | UnionMember139.UnionMember120
          | UnionMember139.UnionMember121
          | UnionMember139.UnionMember122
          | UnionMember139.UnionMember123
          | UnionMember139.UnionMember124
          | UnionMember139.UnionMember125
          | UnionMember139.UnionMember126
          | UnionMember139.UnionMember127
          | UnionMember139.UnionMember128
          | UnionMember139.UnionMember129
          | UnionMember139.UnionMember130
          | UnionMember139.UnionMember131
          | UnionMember139.UnionMember132
          | UnionMember139.UnionMember133
          | UnionMember139.UnionMember134
          | UnionMember139.UnionMember135
          | UnionMember139.UnionMember136
          | UnionMember139.UnionMember137
          | UnionMember139.UnionMember138
        >;

        op: 'And' | 'Or';
      }

      export namespace UnionMember139 {
        export interface UnionMember0 {
          field: 'githubId';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember1 {
          field: 'githubId';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember2 {
          field: 'githubId';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember3 {
          field: 'githubId';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember4 {
          field: 'githubId';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember5 {
          field: 'githubId';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember6 {
          field: 'githubId';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember7 {
          field: 'githubId';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember8 {
          field: 'githubId';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember9 {
          field: 'githubId';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember10 {
          field: 'githubId';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember11 {
          field: 'githubId';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember12 {
          field: 'githubId';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember13 {
          field: 'login';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember14 {
          field: 'login';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember15 {
          field: 'login';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember16 {
          field: 'login';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember17 {
          field: 'login';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember18 {
          field: 'login';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember19 {
          field: 'login';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember20 {
          field: 'login';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember21 {
          field: 'login';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember22 {
          field: 'login';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember23 {
          field: 'login';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember24 {
          field: 'login';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember25 {
          field: 'login';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember26 {
          field: 'login';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember27 {
          field: 'displayName';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember28 {
          field: 'displayName';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember29 {
          field: 'displayName';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember30 {
          field: 'displayName';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember31 {
          field: 'displayName';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember32 {
          field: 'displayName';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember33 {
          field: 'displayName';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember34 {
          field: 'displayName';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember35 {
          field: 'displayName';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember36 {
          field: 'displayName';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember37 {
          field: 'displayName';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember38 {
          field: 'displayName';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember39 {
          field: 'displayName';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember40 {
          field: 'displayName';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember41 {
          field: 'bio';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember42 {
          field: 'bio';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember43 {
          field: 'bio';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember44 {
          field: 'bio';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember45 {
          field: 'bio';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember46 {
          field: 'bio';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember47 {
          field: 'bio';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember48 {
          field: 'bio';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember49 {
          field: 'bio';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember50 {
          field: 'bio';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember51 {
          field: 'bio';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember52 {
          field: 'bio';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember53 {
          field: 'bio';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember54 {
          field: 'bio';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember55 {
          field: 'company';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember56 {
          field: 'company';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember57 {
          field: 'company';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember58 {
          field: 'company';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember59 {
          field: 'company';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember60 {
          field: 'company';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember61 {
          field: 'company';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember62 {
          field: 'company';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember63 {
          field: 'company';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember64 {
          field: 'company';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember65 {
          field: 'company';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember66 {
          field: 'company';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember67 {
          field: 'company';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember68 {
          field: 'company';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember69 {
          field: 'location';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember70 {
          field: 'location';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember71 {
          field: 'location';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember72 {
          field: 'location';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember73 {
          field: 'location';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember74 {
          field: 'location';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember75 {
          field: 'location';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember76 {
          field: 'location';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember77 {
          field: 'location';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember78 {
          field: 'location';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember79 {
          field: 'location';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember80 {
          field: 'location';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember81 {
          field: 'location';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember82 {
          field: 'location';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember83 {
          field: 'emails';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember84 {
          field: 'emails';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember85 {
          field: 'emails';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember86 {
          field: 'emails';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember87 {
          field: 'emails';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember88 {
          field: 'emails';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember89 {
          field: 'emails';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember90 {
          field: 'emails';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember91 {
          field: 'emails';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember92 {
          field: 'emails';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember93 {
          field: 'emails';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember94 {
          field: 'emails';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember95 {
          field: 'emails';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember96 {
          field: 'emails';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember97 {
          field: 'resolvedCountry';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember98 {
          field: 'resolvedCountry';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember99 {
          field: 'resolvedCountry';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember100 {
          field: 'resolvedCountry';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember101 {
          field: 'resolvedCountry';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember102 {
          field: 'resolvedCountry';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember103 {
          field: 'resolvedCountry';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember104 {
          field: 'resolvedCountry';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember105 {
          field: 'resolvedCountry';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember106 {
          field: 'resolvedCountry';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember107 {
          field: 'resolvedCountry';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember108 {
          field: 'resolvedCountry';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember109 {
          field: 'resolvedCountry';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember110 {
          field: 'resolvedCountry';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember111 {
          field: 'resolvedState';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember112 {
          field: 'resolvedState';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember113 {
          field: 'resolvedState';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember114 {
          field: 'resolvedState';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember115 {
          field: 'resolvedState';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember116 {
          field: 'resolvedState';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember117 {
          field: 'resolvedState';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember118 {
          field: 'resolvedState';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember119 {
          field: 'resolvedState';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember120 {
          field: 'resolvedState';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember121 {
          field: 'resolvedState';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember122 {
          field: 'resolvedState';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember123 {
          field: 'resolvedState';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember124 {
          field: 'resolvedState';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember125 {
          field: 'resolvedCity';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember126 {
          field: 'resolvedCity';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember127 {
          field: 'resolvedCity';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember128 {
          field: 'resolvedCity';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember129 {
          field: 'resolvedCity';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember130 {
          field: 'resolvedCity';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember131 {
          field: 'resolvedCity';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember132 {
          field: 'resolvedCity';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember133 {
          field: 'resolvedCity';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember134 {
          field: 'resolvedCity';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember135 {
          field: 'resolvedCity';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember136 {
          field: 'resolvedCity';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember137 {
          field: 'resolvedCity';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember138 {
          field: 'resolvedCity';

          op: 'ContainsAllTokens';

          value: string;
        }
      }

      export interface UnionMember140 {
        filters: Array<
          | UnionMember140.UnionMember0
          | UnionMember140.UnionMember1
          | UnionMember140.UnionMember2
          | UnionMember140.UnionMember3
          | UnionMember140.UnionMember4
          | UnionMember140.UnionMember5
          | UnionMember140.UnionMember6
          | UnionMember140.UnionMember7
          | UnionMember140.UnionMember8
          | UnionMember140.UnionMember9
          | UnionMember140.UnionMember10
          | UnionMember140.UnionMember11
          | UnionMember140.UnionMember12
          | UnionMember140.UnionMember13
          | UnionMember140.UnionMember14
          | UnionMember140.UnionMember15
          | UnionMember140.UnionMember16
          | UnionMember140.UnionMember17
          | UnionMember140.UnionMember18
          | UnionMember140.UnionMember19
          | UnionMember140.UnionMember20
          | UnionMember140.UnionMember21
          | UnionMember140.UnionMember22
          | UnionMember140.UnionMember23
          | UnionMember140.UnionMember24
          | UnionMember140.UnionMember25
          | UnionMember140.UnionMember26
          | UnionMember140.UnionMember27
          | UnionMember140.UnionMember28
          | UnionMember140.UnionMember29
          | UnionMember140.UnionMember30
          | UnionMember140.UnionMember31
          | UnionMember140.UnionMember32
          | UnionMember140.UnionMember33
          | UnionMember140.UnionMember34
          | UnionMember140.UnionMember35
          | UnionMember140.UnionMember36
          | UnionMember140.UnionMember37
          | UnionMember140.UnionMember38
          | UnionMember140.UnionMember39
          | UnionMember140.UnionMember40
          | UnionMember140.UnionMember41
          | UnionMember140.UnionMember42
          | UnionMember140.UnionMember43
          | UnionMember140.UnionMember44
          | UnionMember140.UnionMember45
          | UnionMember140.UnionMember46
          | UnionMember140.UnionMember47
          | UnionMember140.UnionMember48
          | UnionMember140.UnionMember49
          | UnionMember140.UnionMember50
          | UnionMember140.UnionMember51
          | UnionMember140.UnionMember52
          | UnionMember140.UnionMember53
          | UnionMember140.UnionMember54
          | UnionMember140.UnionMember55
          | UnionMember140.UnionMember56
          | UnionMember140.UnionMember57
          | UnionMember140.UnionMember58
          | UnionMember140.UnionMember59
          | UnionMember140.UnionMember60
          | UnionMember140.UnionMember61
          | UnionMember140.UnionMember62
          | UnionMember140.UnionMember63
          | UnionMember140.UnionMember64
          | UnionMember140.UnionMember65
          | UnionMember140.UnionMember66
          | UnionMember140.UnionMember67
          | UnionMember140.UnionMember68
          | UnionMember140.UnionMember69
          | UnionMember140.UnionMember70
          | UnionMember140.UnionMember71
          | UnionMember140.UnionMember72
          | UnionMember140.UnionMember73
          | UnionMember140.UnionMember74
          | UnionMember140.UnionMember75
          | UnionMember140.UnionMember76
          | UnionMember140.UnionMember77
          | UnionMember140.UnionMember78
          | UnionMember140.UnionMember79
          | UnionMember140.UnionMember80
          | UnionMember140.UnionMember81
          | UnionMember140.UnionMember82
          | UnionMember140.UnionMember83
          | UnionMember140.UnionMember84
          | UnionMember140.UnionMember85
          | UnionMember140.UnionMember86
          | UnionMember140.UnionMember87
          | UnionMember140.UnionMember88
          | UnionMember140.UnionMember89
          | UnionMember140.UnionMember90
          | UnionMember140.UnionMember91
          | UnionMember140.UnionMember92
          | UnionMember140.UnionMember93
          | UnionMember140.UnionMember94
          | UnionMember140.UnionMember95
          | UnionMember140.UnionMember96
          | UnionMember140.UnionMember97
          | UnionMember140.UnionMember98
          | UnionMember140.UnionMember99
          | UnionMember140.UnionMember100
          | UnionMember140.UnionMember101
          | UnionMember140.UnionMember102
          | UnionMember140.UnionMember103
          | UnionMember140.UnionMember104
          | UnionMember140.UnionMember105
          | UnionMember140.UnionMember106
          | UnionMember140.UnionMember107
          | UnionMember140.UnionMember108
          | UnionMember140.UnionMember109
          | UnionMember140.UnionMember110
          | UnionMember140.UnionMember111
          | UnionMember140.UnionMember112
          | UnionMember140.UnionMember113
          | UnionMember140.UnionMember114
          | UnionMember140.UnionMember115
          | UnionMember140.UnionMember116
          | UnionMember140.UnionMember117
          | UnionMember140.UnionMember118
          | UnionMember140.UnionMember119
          | UnionMember140.UnionMember120
          | UnionMember140.UnionMember121
          | UnionMember140.UnionMember122
          | UnionMember140.UnionMember123
          | UnionMember140.UnionMember124
          | UnionMember140.UnionMember125
          | UnionMember140.UnionMember126
          | UnionMember140.UnionMember127
          | UnionMember140.UnionMember128
          | UnionMember140.UnionMember129
          | UnionMember140.UnionMember130
          | UnionMember140.UnionMember131
          | UnionMember140.UnionMember132
          | UnionMember140.UnionMember133
          | UnionMember140.UnionMember134
          | UnionMember140.UnionMember135
          | UnionMember140.UnionMember136
          | UnionMember140.UnionMember137
          | UnionMember140.UnionMember138
          | UnionMember140.UnionMember139
        >;

        op: 'And' | 'Or';
      }

      export namespace UnionMember140 {
        export interface UnionMember0 {
          field: 'githubId';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember1 {
          field: 'githubId';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember2 {
          field: 'githubId';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember3 {
          field: 'githubId';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember4 {
          field: 'githubId';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember5 {
          field: 'githubId';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember6 {
          field: 'githubId';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember7 {
          field: 'githubId';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember8 {
          field: 'githubId';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember9 {
          field: 'githubId';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember10 {
          field: 'githubId';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember11 {
          field: 'githubId';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember12 {
          field: 'githubId';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember13 {
          field: 'login';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember14 {
          field: 'login';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember15 {
          field: 'login';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember16 {
          field: 'login';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember17 {
          field: 'login';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember18 {
          field: 'login';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember19 {
          field: 'login';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember20 {
          field: 'login';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember21 {
          field: 'login';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember22 {
          field: 'login';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember23 {
          field: 'login';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember24 {
          field: 'login';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember25 {
          field: 'login';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember26 {
          field: 'login';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember27 {
          field: 'displayName';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember28 {
          field: 'displayName';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember29 {
          field: 'displayName';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember30 {
          field: 'displayName';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember31 {
          field: 'displayName';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember32 {
          field: 'displayName';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember33 {
          field: 'displayName';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember34 {
          field: 'displayName';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember35 {
          field: 'displayName';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember36 {
          field: 'displayName';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember37 {
          field: 'displayName';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember38 {
          field: 'displayName';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember39 {
          field: 'displayName';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember40 {
          field: 'displayName';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember41 {
          field: 'bio';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember42 {
          field: 'bio';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember43 {
          field: 'bio';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember44 {
          field: 'bio';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember45 {
          field: 'bio';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember46 {
          field: 'bio';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember47 {
          field: 'bio';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember48 {
          field: 'bio';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember49 {
          field: 'bio';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember50 {
          field: 'bio';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember51 {
          field: 'bio';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember52 {
          field: 'bio';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember53 {
          field: 'bio';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember54 {
          field: 'bio';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember55 {
          field: 'company';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember56 {
          field: 'company';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember57 {
          field: 'company';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember58 {
          field: 'company';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember59 {
          field: 'company';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember60 {
          field: 'company';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember61 {
          field: 'company';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember62 {
          field: 'company';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember63 {
          field: 'company';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember64 {
          field: 'company';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember65 {
          field: 'company';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember66 {
          field: 'company';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember67 {
          field: 'company';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember68 {
          field: 'company';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember69 {
          field: 'location';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember70 {
          field: 'location';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember71 {
          field: 'location';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember72 {
          field: 'location';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember73 {
          field: 'location';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember74 {
          field: 'location';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember75 {
          field: 'location';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember76 {
          field: 'location';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember77 {
          field: 'location';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember78 {
          field: 'location';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember79 {
          field: 'location';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember80 {
          field: 'location';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember81 {
          field: 'location';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember82 {
          field: 'location';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember83 {
          field: 'emails';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember84 {
          field: 'emails';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember85 {
          field: 'emails';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember86 {
          field: 'emails';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember87 {
          field: 'emails';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember88 {
          field: 'emails';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember89 {
          field: 'emails';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember90 {
          field: 'emails';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember91 {
          field: 'emails';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember92 {
          field: 'emails';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember93 {
          field: 'emails';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember94 {
          field: 'emails';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember95 {
          field: 'emails';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember96 {
          field: 'emails';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember97 {
          field: 'resolvedCountry';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember98 {
          field: 'resolvedCountry';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember99 {
          field: 'resolvedCountry';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember100 {
          field: 'resolvedCountry';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember101 {
          field: 'resolvedCountry';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember102 {
          field: 'resolvedCountry';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember103 {
          field: 'resolvedCountry';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember104 {
          field: 'resolvedCountry';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember105 {
          field: 'resolvedCountry';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember106 {
          field: 'resolvedCountry';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember107 {
          field: 'resolvedCountry';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember108 {
          field: 'resolvedCountry';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember109 {
          field: 'resolvedCountry';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember110 {
          field: 'resolvedCountry';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember111 {
          field: 'resolvedState';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember112 {
          field: 'resolvedState';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember113 {
          field: 'resolvedState';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember114 {
          field: 'resolvedState';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember115 {
          field: 'resolvedState';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember116 {
          field: 'resolvedState';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember117 {
          field: 'resolvedState';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember118 {
          field: 'resolvedState';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember119 {
          field: 'resolvedState';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember120 {
          field: 'resolvedState';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember121 {
          field: 'resolvedState';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember122 {
          field: 'resolvedState';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember123 {
          field: 'resolvedState';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember124 {
          field: 'resolvedState';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember125 {
          field: 'resolvedCity';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember126 {
          field: 'resolvedCity';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember127 {
          field: 'resolvedCity';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember128 {
          field: 'resolvedCity';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember129 {
          field: 'resolvedCity';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember130 {
          field: 'resolvedCity';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember131 {
          field: 'resolvedCity';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember132 {
          field: 'resolvedCity';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember133 {
          field: 'resolvedCity';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember134 {
          field: 'resolvedCity';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember135 {
          field: 'resolvedCity';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember136 {
          field: 'resolvedCity';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember137 {
          field: 'resolvedCity';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember138 {
          field: 'resolvedCity';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember139 {
          filters: Array<
            | UnionMember139.UnionMember0
            | UnionMember139.UnionMember1
            | UnionMember139.UnionMember2
            | UnionMember139.UnionMember3
            | UnionMember139.UnionMember4
            | UnionMember139.UnionMember5
            | UnionMember139.UnionMember6
            | UnionMember139.UnionMember7
            | UnionMember139.UnionMember8
            | UnionMember139.UnionMember9
            | UnionMember139.UnionMember10
            | UnionMember139.UnionMember11
            | UnionMember139.UnionMember12
            | UnionMember139.UnionMember13
            | UnionMember139.UnionMember14
            | UnionMember139.UnionMember15
            | UnionMember139.UnionMember16
            | UnionMember139.UnionMember17
            | UnionMember139.UnionMember18
            | UnionMember139.UnionMember19
            | UnionMember139.UnionMember20
            | UnionMember139.UnionMember21
            | UnionMember139.UnionMember22
            | UnionMember139.UnionMember23
            | UnionMember139.UnionMember24
            | UnionMember139.UnionMember25
            | UnionMember139.UnionMember26
            | UnionMember139.UnionMember27
            | UnionMember139.UnionMember28
            | UnionMember139.UnionMember29
            | UnionMember139.UnionMember30
            | UnionMember139.UnionMember31
            | UnionMember139.UnionMember32
            | UnionMember139.UnionMember33
            | UnionMember139.UnionMember34
            | UnionMember139.UnionMember35
            | UnionMember139.UnionMember36
            | UnionMember139.UnionMember37
            | UnionMember139.UnionMember38
            | UnionMember139.UnionMember39
            | UnionMember139.UnionMember40
            | UnionMember139.UnionMember41
            | UnionMember139.UnionMember42
            | UnionMember139.UnionMember43
            | UnionMember139.UnionMember44
            | UnionMember139.UnionMember45
            | UnionMember139.UnionMember46
            | UnionMember139.UnionMember47
            | UnionMember139.UnionMember48
            | UnionMember139.UnionMember49
            | UnionMember139.UnionMember50
            | UnionMember139.UnionMember51
            | UnionMember139.UnionMember52
            | UnionMember139.UnionMember53
            | UnionMember139.UnionMember54
            | UnionMember139.UnionMember55
            | UnionMember139.UnionMember56
            | UnionMember139.UnionMember57
            | UnionMember139.UnionMember58
            | UnionMember139.UnionMember59
            | UnionMember139.UnionMember60
            | UnionMember139.UnionMember61
            | UnionMember139.UnionMember62
            | UnionMember139.UnionMember63
            | UnionMember139.UnionMember64
            | UnionMember139.UnionMember65
            | UnionMember139.UnionMember66
            | UnionMember139.UnionMember67
            | UnionMember139.UnionMember68
            | UnionMember139.UnionMember69
            | UnionMember139.UnionMember70
            | UnionMember139.UnionMember71
            | UnionMember139.UnionMember72
            | UnionMember139.UnionMember73
            | UnionMember139.UnionMember74
            | UnionMember139.UnionMember75
            | UnionMember139.UnionMember76
            | UnionMember139.UnionMember77
            | UnionMember139.UnionMember78
            | UnionMember139.UnionMember79
            | UnionMember139.UnionMember80
            | UnionMember139.UnionMember81
            | UnionMember139.UnionMember82
            | UnionMember139.UnionMember83
            | UnionMember139.UnionMember84
            | UnionMember139.UnionMember85
            | UnionMember139.UnionMember86
            | UnionMember139.UnionMember87
            | UnionMember139.UnionMember88
            | UnionMember139.UnionMember89
            | UnionMember139.UnionMember90
            | UnionMember139.UnionMember91
            | UnionMember139.UnionMember92
            | UnionMember139.UnionMember93
            | UnionMember139.UnionMember94
            | UnionMember139.UnionMember95
            | UnionMember139.UnionMember96
            | UnionMember139.UnionMember97
            | UnionMember139.UnionMember98
            | UnionMember139.UnionMember99
            | UnionMember139.UnionMember100
            | UnionMember139.UnionMember101
            | UnionMember139.UnionMember102
            | UnionMember139.UnionMember103
            | UnionMember139.UnionMember104
            | UnionMember139.UnionMember105
            | UnionMember139.UnionMember106
            | UnionMember139.UnionMember107
            | UnionMember139.UnionMember108
            | UnionMember139.UnionMember109
            | UnionMember139.UnionMember110
            | UnionMember139.UnionMember111
            | UnionMember139.UnionMember112
            | UnionMember139.UnionMember113
            | UnionMember139.UnionMember114
            | UnionMember139.UnionMember115
            | UnionMember139.UnionMember116
            | UnionMember139.UnionMember117
            | UnionMember139.UnionMember118
            | UnionMember139.UnionMember119
            | UnionMember139.UnionMember120
            | UnionMember139.UnionMember121
            | UnionMember139.UnionMember122
            | UnionMember139.UnionMember123
            | UnionMember139.UnionMember124
            | UnionMember139.UnionMember125
            | UnionMember139.UnionMember126
            | UnionMember139.UnionMember127
            | UnionMember139.UnionMember128
            | UnionMember139.UnionMember129
            | UnionMember139.UnionMember130
            | UnionMember139.UnionMember131
            | UnionMember139.UnionMember132
            | UnionMember139.UnionMember133
            | UnionMember139.UnionMember134
            | UnionMember139.UnionMember135
            | UnionMember139.UnionMember136
            | UnionMember139.UnionMember137
            | UnionMember139.UnionMember138
          >;

          op: 'And' | 'Or';
        }

        export namespace UnionMember139 {
          export interface UnionMember0 {
            field: 'githubId';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember1 {
            field: 'githubId';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember2 {
            field: 'githubId';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember3 {
            field: 'githubId';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember4 {
            field: 'githubId';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember5 {
            field: 'githubId';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember6 {
            field: 'githubId';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember7 {
            field: 'githubId';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember8 {
            field: 'githubId';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember9 {
            field: 'githubId';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember10 {
            field: 'githubId';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember11 {
            field: 'githubId';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember12 {
            field: 'githubId';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember13 {
            field: 'login';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember14 {
            field: 'login';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember15 {
            field: 'login';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember16 {
            field: 'login';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember17 {
            field: 'login';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember18 {
            field: 'login';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember19 {
            field: 'login';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember20 {
            field: 'login';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember21 {
            field: 'login';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember22 {
            field: 'login';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember23 {
            field: 'login';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember24 {
            field: 'login';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember25 {
            field: 'login';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember26 {
            field: 'login';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember27 {
            field: 'displayName';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember28 {
            field: 'displayName';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember29 {
            field: 'displayName';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember30 {
            field: 'displayName';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember31 {
            field: 'displayName';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember32 {
            field: 'displayName';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember33 {
            field: 'displayName';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember34 {
            field: 'displayName';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember35 {
            field: 'displayName';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember36 {
            field: 'displayName';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember37 {
            field: 'displayName';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember38 {
            field: 'displayName';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember39 {
            field: 'displayName';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember40 {
            field: 'displayName';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember41 {
            field: 'bio';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember42 {
            field: 'bio';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember43 {
            field: 'bio';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember44 {
            field: 'bio';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember45 {
            field: 'bio';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember46 {
            field: 'bio';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember47 {
            field: 'bio';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember48 {
            field: 'bio';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember49 {
            field: 'bio';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember50 {
            field: 'bio';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember51 {
            field: 'bio';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember52 {
            field: 'bio';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember53 {
            field: 'bio';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember54 {
            field: 'bio';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember55 {
            field: 'company';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember56 {
            field: 'company';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember57 {
            field: 'company';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember58 {
            field: 'company';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember59 {
            field: 'company';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember60 {
            field: 'company';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember61 {
            field: 'company';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember62 {
            field: 'company';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember63 {
            field: 'company';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember64 {
            field: 'company';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember65 {
            field: 'company';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember66 {
            field: 'company';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember67 {
            field: 'company';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember68 {
            field: 'company';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember69 {
            field: 'location';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember70 {
            field: 'location';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember71 {
            field: 'location';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember72 {
            field: 'location';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember73 {
            field: 'location';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember74 {
            field: 'location';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember75 {
            field: 'location';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember76 {
            field: 'location';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember77 {
            field: 'location';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember78 {
            field: 'location';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember79 {
            field: 'location';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember80 {
            field: 'location';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember81 {
            field: 'location';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember82 {
            field: 'location';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember83 {
            field: 'emails';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember84 {
            field: 'emails';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember85 {
            field: 'emails';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember86 {
            field: 'emails';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember87 {
            field: 'emails';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember88 {
            field: 'emails';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember89 {
            field: 'emails';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember90 {
            field: 'emails';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember91 {
            field: 'emails';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember92 {
            field: 'emails';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember93 {
            field: 'emails';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember94 {
            field: 'emails';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember95 {
            field: 'emails';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember96 {
            field: 'emails';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember97 {
            field: 'resolvedCountry';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember98 {
            field: 'resolvedCountry';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember99 {
            field: 'resolvedCountry';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember100 {
            field: 'resolvedCountry';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember101 {
            field: 'resolvedCountry';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember102 {
            field: 'resolvedCountry';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember103 {
            field: 'resolvedCountry';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember104 {
            field: 'resolvedCountry';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember105 {
            field: 'resolvedCountry';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember106 {
            field: 'resolvedCountry';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember107 {
            field: 'resolvedCountry';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember108 {
            field: 'resolvedCountry';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember109 {
            field: 'resolvedCountry';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember110 {
            field: 'resolvedCountry';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember111 {
            field: 'resolvedState';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember112 {
            field: 'resolvedState';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember113 {
            field: 'resolvedState';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember114 {
            field: 'resolvedState';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember115 {
            field: 'resolvedState';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember116 {
            field: 'resolvedState';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember117 {
            field: 'resolvedState';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember118 {
            field: 'resolvedState';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember119 {
            field: 'resolvedState';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember120 {
            field: 'resolvedState';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember121 {
            field: 'resolvedState';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember122 {
            field: 'resolvedState';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember123 {
            field: 'resolvedState';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember124 {
            field: 'resolvedState';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember125 {
            field: 'resolvedCity';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember126 {
            field: 'resolvedCity';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember127 {
            field: 'resolvedCity';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember128 {
            field: 'resolvedCity';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember129 {
            field: 'resolvedCity';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember130 {
            field: 'resolvedCity';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember131 {
            field: 'resolvedCity';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember132 {
            field: 'resolvedCity';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember133 {
            field: 'resolvedCity';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember134 {
            field: 'resolvedCity';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember135 {
            field: 'resolvedCity';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember136 {
            field: 'resolvedCity';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember137 {
            field: 'resolvedCity';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember138 {
            field: 'resolvedCity';

            op: 'ContainsAllTokens';

            value: string;
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
      filters?:
        | Starrers.UnionMember0
        | Starrers.UnionMember1
        | Starrers.UnionMember2
        | Starrers.UnionMember3
        | Starrers.UnionMember4
        | Starrers.UnionMember5
        | Starrers.UnionMember6
        | Starrers.UnionMember7
        | Starrers.UnionMember8
        | Starrers.UnionMember9
        | Starrers.UnionMember10
        | Starrers.UnionMember11
        | Starrers.UnionMember12
        | Starrers.UnionMember13
        | Starrers.UnionMember14
        | Starrers.UnionMember15
        | Starrers.UnionMember16
        | Starrers.UnionMember17
        | Starrers.UnionMember18
        | Starrers.UnionMember19
        | Starrers.UnionMember20
        | Starrers.UnionMember21
        | Starrers.UnionMember22
        | Starrers.UnionMember23
        | Starrers.UnionMember24
        | Starrers.UnionMember25
        | Starrers.UnionMember26
        | Starrers.UnionMember27
        | Starrers.UnionMember28
        | Starrers.UnionMember29
        | Starrers.UnionMember30
        | Starrers.UnionMember31
        | Starrers.UnionMember32
        | Starrers.UnionMember33
        | Starrers.UnionMember34
        | Starrers.UnionMember35
        | Starrers.UnionMember36
        | Starrers.UnionMember37
        | Starrers.UnionMember38
        | Starrers.UnionMember39
        | Starrers.UnionMember40
        | Starrers.UnionMember41
        | Starrers.UnionMember42
        | Starrers.UnionMember43
        | Starrers.UnionMember44
        | Starrers.UnionMember45
        | Starrers.UnionMember46
        | Starrers.UnionMember47
        | Starrers.UnionMember48
        | Starrers.UnionMember49
        | Starrers.UnionMember50
        | Starrers.UnionMember51
        | Starrers.UnionMember52
        | Starrers.UnionMember53
        | Starrers.UnionMember54
        | Starrers.UnionMember55
        | Starrers.UnionMember56
        | Starrers.UnionMember57
        | Starrers.UnionMember58
        | Starrers.UnionMember59
        | Starrers.UnionMember60
        | Starrers.UnionMember61
        | Starrers.UnionMember62
        | Starrers.UnionMember63
        | Starrers.UnionMember64
        | Starrers.UnionMember65
        | Starrers.UnionMember66
        | Starrers.UnionMember67
        | Starrers.UnionMember68
        | Starrers.UnionMember69
        | Starrers.UnionMember70
        | Starrers.UnionMember71
        | Starrers.UnionMember72
        | Starrers.UnionMember73
        | Starrers.UnionMember74
        | Starrers.UnionMember75
        | Starrers.UnionMember76
        | Starrers.UnionMember77
        | Starrers.UnionMember78
        | Starrers.UnionMember79
        | Starrers.UnionMember80
        | Starrers.UnionMember81
        | Starrers.UnionMember82
        | Starrers.UnionMember83
        | Starrers.UnionMember84
        | Starrers.UnionMember85
        | Starrers.UnionMember86
        | Starrers.UnionMember87
        | Starrers.UnionMember88
        | Starrers.UnionMember89
        | Starrers.UnionMember90
        | Starrers.UnionMember91
        | Starrers.UnionMember92
        | Starrers.UnionMember93
        | Starrers.UnionMember94
        | Starrers.UnionMember95
        | Starrers.UnionMember96
        | Starrers.UnionMember97
        | Starrers.UnionMember98
        | Starrers.UnionMember99
        | Starrers.UnionMember100
        | Starrers.UnionMember101
        | Starrers.UnionMember102
        | Starrers.UnionMember103
        | Starrers.UnionMember104
        | Starrers.UnionMember105
        | Starrers.UnionMember106
        | Starrers.UnionMember107
        | Starrers.UnionMember108
        | Starrers.UnionMember109
        | Starrers.UnionMember110
        | Starrers.UnionMember111
        | Starrers.UnionMember112
        | Starrers.UnionMember113
        | Starrers.UnionMember114
        | Starrers.UnionMember115
        | Starrers.UnionMember116
        | Starrers.UnionMember117
        | Starrers.UnionMember118
        | Starrers.UnionMember119
        | Starrers.UnionMember120
        | Starrers.UnionMember121
        | Starrers.UnionMember122
        | Starrers.UnionMember123
        | Starrers.UnionMember124
        | Starrers.UnionMember125
        | Starrers.UnionMember126
        | Starrers.UnionMember127
        | Starrers.UnionMember128
        | Starrers.UnionMember129
        | Starrers.UnionMember130
        | Starrers.UnionMember131
        | Starrers.UnionMember132
        | Starrers.UnionMember133
        | Starrers.UnionMember134
        | Starrers.UnionMember135
        | Starrers.UnionMember136
        | Starrers.UnionMember137
        | Starrers.UnionMember138
        | Starrers.UnionMember139
        | Starrers.UnionMember140;
    }

    export namespace Starrers {
      export interface UnionMember0 {
        field: 'githubId';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember1 {
        field: 'githubId';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember2 {
        field: 'githubId';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember3 {
        field: 'githubId';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember4 {
        field: 'githubId';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember5 {
        field: 'githubId';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember6 {
        field: 'githubId';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember7 {
        field: 'githubId';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember8 {
        field: 'githubId';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember9 {
        field: 'githubId';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember10 {
        field: 'githubId';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember11 {
        field: 'githubId';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember12 {
        field: 'githubId';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember13 {
        field: 'login';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember14 {
        field: 'login';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember15 {
        field: 'login';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember16 {
        field: 'login';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember17 {
        field: 'login';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember18 {
        field: 'login';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember19 {
        field: 'login';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember20 {
        field: 'login';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember21 {
        field: 'login';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember22 {
        field: 'login';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember23 {
        field: 'login';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember24 {
        field: 'login';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember25 {
        field: 'login';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember26 {
        field: 'login';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember27 {
        field: 'displayName';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember28 {
        field: 'displayName';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember29 {
        field: 'displayName';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember30 {
        field: 'displayName';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember31 {
        field: 'displayName';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember32 {
        field: 'displayName';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember33 {
        field: 'displayName';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember34 {
        field: 'displayName';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember35 {
        field: 'displayName';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember36 {
        field: 'displayName';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember37 {
        field: 'displayName';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember38 {
        field: 'displayName';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember39 {
        field: 'displayName';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember40 {
        field: 'displayName';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember41 {
        field: 'bio';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember42 {
        field: 'bio';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember43 {
        field: 'bio';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember44 {
        field: 'bio';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember45 {
        field: 'bio';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember46 {
        field: 'bio';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember47 {
        field: 'bio';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember48 {
        field: 'bio';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember49 {
        field: 'bio';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember50 {
        field: 'bio';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember51 {
        field: 'bio';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember52 {
        field: 'bio';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember53 {
        field: 'bio';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember54 {
        field: 'bio';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember55 {
        field: 'company';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember56 {
        field: 'company';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember57 {
        field: 'company';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember58 {
        field: 'company';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember59 {
        field: 'company';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember60 {
        field: 'company';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember61 {
        field: 'company';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember62 {
        field: 'company';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember63 {
        field: 'company';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember64 {
        field: 'company';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember65 {
        field: 'company';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember66 {
        field: 'company';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember67 {
        field: 'company';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember68 {
        field: 'company';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember69 {
        field: 'location';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember70 {
        field: 'location';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember71 {
        field: 'location';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember72 {
        field: 'location';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember73 {
        field: 'location';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember74 {
        field: 'location';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember75 {
        field: 'location';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember76 {
        field: 'location';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember77 {
        field: 'location';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember78 {
        field: 'location';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember79 {
        field: 'location';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember80 {
        field: 'location';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember81 {
        field: 'location';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember82 {
        field: 'location';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember83 {
        field: 'emails';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember84 {
        field: 'emails';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember85 {
        field: 'emails';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember86 {
        field: 'emails';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember87 {
        field: 'emails';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember88 {
        field: 'emails';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember89 {
        field: 'emails';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember90 {
        field: 'emails';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember91 {
        field: 'emails';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember92 {
        field: 'emails';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember93 {
        field: 'emails';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember94 {
        field: 'emails';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember95 {
        field: 'emails';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember96 {
        field: 'emails';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember97 {
        field: 'resolvedCountry';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember98 {
        field: 'resolvedCountry';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember99 {
        field: 'resolvedCountry';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember100 {
        field: 'resolvedCountry';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember101 {
        field: 'resolvedCountry';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember102 {
        field: 'resolvedCountry';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember103 {
        field: 'resolvedCountry';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember104 {
        field: 'resolvedCountry';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember105 {
        field: 'resolvedCountry';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember106 {
        field: 'resolvedCountry';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember107 {
        field: 'resolvedCountry';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember108 {
        field: 'resolvedCountry';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember109 {
        field: 'resolvedCountry';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember110 {
        field: 'resolvedCountry';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember111 {
        field: 'resolvedState';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember112 {
        field: 'resolvedState';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember113 {
        field: 'resolvedState';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember114 {
        field: 'resolvedState';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember115 {
        field: 'resolvedState';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember116 {
        field: 'resolvedState';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember117 {
        field: 'resolvedState';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember118 {
        field: 'resolvedState';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember119 {
        field: 'resolvedState';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember120 {
        field: 'resolvedState';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember121 {
        field: 'resolvedState';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember122 {
        field: 'resolvedState';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember123 {
        field: 'resolvedState';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember124 {
        field: 'resolvedState';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember125 {
        field: 'resolvedCity';

        op: 'Eq';

        value: string;
      }

      export interface UnionMember126 {
        field: 'resolvedCity';

        op: 'NotEq';

        value: string;
      }

      export interface UnionMember127 {
        field: 'resolvedCity';

        op: 'In';

        value: Array<string>;
      }

      export interface UnionMember128 {
        field: 'resolvedCity';

        op: 'NotIn';

        value: Array<string>;
      }

      export interface UnionMember129 {
        field: 'resolvedCity';

        op: 'Lt';

        value: string;
      }

      export interface UnionMember130 {
        field: 'resolvedCity';

        op: 'Lte';

        value: string;
      }

      export interface UnionMember131 {
        field: 'resolvedCity';

        op: 'Gt';

        value: string;
      }

      export interface UnionMember132 {
        field: 'resolvedCity';

        op: 'Gte';

        value: string;
      }

      export interface UnionMember133 {
        field: 'resolvedCity';

        op: 'Glob';

        value: string;
      }

      export interface UnionMember134 {
        field: 'resolvedCity';

        op: 'NotGlob';

        value: string;
      }

      export interface UnionMember135 {
        field: 'resolvedCity';

        op: 'IGlob';

        value: string;
      }

      export interface UnionMember136 {
        field: 'resolvedCity';

        op: 'NotIGlob';

        value: string;
      }

      export interface UnionMember137 {
        field: 'resolvedCity';

        op: 'Regex';

        value: string;
      }

      export interface UnionMember138 {
        field: 'resolvedCity';

        op: 'ContainsAllTokens';

        value: string;
      }

      export interface UnionMember139 {
        filters: Array<
          | UnionMember139.UnionMember0
          | UnionMember139.UnionMember1
          | UnionMember139.UnionMember2
          | UnionMember139.UnionMember3
          | UnionMember139.UnionMember4
          | UnionMember139.UnionMember5
          | UnionMember139.UnionMember6
          | UnionMember139.UnionMember7
          | UnionMember139.UnionMember8
          | UnionMember139.UnionMember9
          | UnionMember139.UnionMember10
          | UnionMember139.UnionMember11
          | UnionMember139.UnionMember12
          | UnionMember139.UnionMember13
          | UnionMember139.UnionMember14
          | UnionMember139.UnionMember15
          | UnionMember139.UnionMember16
          | UnionMember139.UnionMember17
          | UnionMember139.UnionMember18
          | UnionMember139.UnionMember19
          | UnionMember139.UnionMember20
          | UnionMember139.UnionMember21
          | UnionMember139.UnionMember22
          | UnionMember139.UnionMember23
          | UnionMember139.UnionMember24
          | UnionMember139.UnionMember25
          | UnionMember139.UnionMember26
          | UnionMember139.UnionMember27
          | UnionMember139.UnionMember28
          | UnionMember139.UnionMember29
          | UnionMember139.UnionMember30
          | UnionMember139.UnionMember31
          | UnionMember139.UnionMember32
          | UnionMember139.UnionMember33
          | UnionMember139.UnionMember34
          | UnionMember139.UnionMember35
          | UnionMember139.UnionMember36
          | UnionMember139.UnionMember37
          | UnionMember139.UnionMember38
          | UnionMember139.UnionMember39
          | UnionMember139.UnionMember40
          | UnionMember139.UnionMember41
          | UnionMember139.UnionMember42
          | UnionMember139.UnionMember43
          | UnionMember139.UnionMember44
          | UnionMember139.UnionMember45
          | UnionMember139.UnionMember46
          | UnionMember139.UnionMember47
          | UnionMember139.UnionMember48
          | UnionMember139.UnionMember49
          | UnionMember139.UnionMember50
          | UnionMember139.UnionMember51
          | UnionMember139.UnionMember52
          | UnionMember139.UnionMember53
          | UnionMember139.UnionMember54
          | UnionMember139.UnionMember55
          | UnionMember139.UnionMember56
          | UnionMember139.UnionMember57
          | UnionMember139.UnionMember58
          | UnionMember139.UnionMember59
          | UnionMember139.UnionMember60
          | UnionMember139.UnionMember61
          | UnionMember139.UnionMember62
          | UnionMember139.UnionMember63
          | UnionMember139.UnionMember64
          | UnionMember139.UnionMember65
          | UnionMember139.UnionMember66
          | UnionMember139.UnionMember67
          | UnionMember139.UnionMember68
          | UnionMember139.UnionMember69
          | UnionMember139.UnionMember70
          | UnionMember139.UnionMember71
          | UnionMember139.UnionMember72
          | UnionMember139.UnionMember73
          | UnionMember139.UnionMember74
          | UnionMember139.UnionMember75
          | UnionMember139.UnionMember76
          | UnionMember139.UnionMember77
          | UnionMember139.UnionMember78
          | UnionMember139.UnionMember79
          | UnionMember139.UnionMember80
          | UnionMember139.UnionMember81
          | UnionMember139.UnionMember82
          | UnionMember139.UnionMember83
          | UnionMember139.UnionMember84
          | UnionMember139.UnionMember85
          | UnionMember139.UnionMember86
          | UnionMember139.UnionMember87
          | UnionMember139.UnionMember88
          | UnionMember139.UnionMember89
          | UnionMember139.UnionMember90
          | UnionMember139.UnionMember91
          | UnionMember139.UnionMember92
          | UnionMember139.UnionMember93
          | UnionMember139.UnionMember94
          | UnionMember139.UnionMember95
          | UnionMember139.UnionMember96
          | UnionMember139.UnionMember97
          | UnionMember139.UnionMember98
          | UnionMember139.UnionMember99
          | UnionMember139.UnionMember100
          | UnionMember139.UnionMember101
          | UnionMember139.UnionMember102
          | UnionMember139.UnionMember103
          | UnionMember139.UnionMember104
          | UnionMember139.UnionMember105
          | UnionMember139.UnionMember106
          | UnionMember139.UnionMember107
          | UnionMember139.UnionMember108
          | UnionMember139.UnionMember109
          | UnionMember139.UnionMember110
          | UnionMember139.UnionMember111
          | UnionMember139.UnionMember112
          | UnionMember139.UnionMember113
          | UnionMember139.UnionMember114
          | UnionMember139.UnionMember115
          | UnionMember139.UnionMember116
          | UnionMember139.UnionMember117
          | UnionMember139.UnionMember118
          | UnionMember139.UnionMember119
          | UnionMember139.UnionMember120
          | UnionMember139.UnionMember121
          | UnionMember139.UnionMember122
          | UnionMember139.UnionMember123
          | UnionMember139.UnionMember124
          | UnionMember139.UnionMember125
          | UnionMember139.UnionMember126
          | UnionMember139.UnionMember127
          | UnionMember139.UnionMember128
          | UnionMember139.UnionMember129
          | UnionMember139.UnionMember130
          | UnionMember139.UnionMember131
          | UnionMember139.UnionMember132
          | UnionMember139.UnionMember133
          | UnionMember139.UnionMember134
          | UnionMember139.UnionMember135
          | UnionMember139.UnionMember136
          | UnionMember139.UnionMember137
          | UnionMember139.UnionMember138
        >;

        op: 'And' | 'Or';
      }

      export namespace UnionMember139 {
        export interface UnionMember0 {
          field: 'githubId';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember1 {
          field: 'githubId';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember2 {
          field: 'githubId';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember3 {
          field: 'githubId';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember4 {
          field: 'githubId';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember5 {
          field: 'githubId';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember6 {
          field: 'githubId';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember7 {
          field: 'githubId';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember8 {
          field: 'githubId';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember9 {
          field: 'githubId';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember10 {
          field: 'githubId';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember11 {
          field: 'githubId';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember12 {
          field: 'githubId';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember13 {
          field: 'login';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember14 {
          field: 'login';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember15 {
          field: 'login';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember16 {
          field: 'login';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember17 {
          field: 'login';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember18 {
          field: 'login';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember19 {
          field: 'login';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember20 {
          field: 'login';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember21 {
          field: 'login';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember22 {
          field: 'login';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember23 {
          field: 'login';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember24 {
          field: 'login';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember25 {
          field: 'login';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember26 {
          field: 'login';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember27 {
          field: 'displayName';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember28 {
          field: 'displayName';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember29 {
          field: 'displayName';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember30 {
          field: 'displayName';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember31 {
          field: 'displayName';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember32 {
          field: 'displayName';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember33 {
          field: 'displayName';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember34 {
          field: 'displayName';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember35 {
          field: 'displayName';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember36 {
          field: 'displayName';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember37 {
          field: 'displayName';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember38 {
          field: 'displayName';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember39 {
          field: 'displayName';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember40 {
          field: 'displayName';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember41 {
          field: 'bio';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember42 {
          field: 'bio';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember43 {
          field: 'bio';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember44 {
          field: 'bio';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember45 {
          field: 'bio';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember46 {
          field: 'bio';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember47 {
          field: 'bio';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember48 {
          field: 'bio';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember49 {
          field: 'bio';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember50 {
          field: 'bio';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember51 {
          field: 'bio';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember52 {
          field: 'bio';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember53 {
          field: 'bio';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember54 {
          field: 'bio';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember55 {
          field: 'company';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember56 {
          field: 'company';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember57 {
          field: 'company';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember58 {
          field: 'company';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember59 {
          field: 'company';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember60 {
          field: 'company';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember61 {
          field: 'company';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember62 {
          field: 'company';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember63 {
          field: 'company';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember64 {
          field: 'company';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember65 {
          field: 'company';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember66 {
          field: 'company';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember67 {
          field: 'company';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember68 {
          field: 'company';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember69 {
          field: 'location';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember70 {
          field: 'location';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember71 {
          field: 'location';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember72 {
          field: 'location';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember73 {
          field: 'location';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember74 {
          field: 'location';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember75 {
          field: 'location';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember76 {
          field: 'location';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember77 {
          field: 'location';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember78 {
          field: 'location';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember79 {
          field: 'location';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember80 {
          field: 'location';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember81 {
          field: 'location';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember82 {
          field: 'location';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember83 {
          field: 'emails';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember84 {
          field: 'emails';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember85 {
          field: 'emails';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember86 {
          field: 'emails';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember87 {
          field: 'emails';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember88 {
          field: 'emails';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember89 {
          field: 'emails';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember90 {
          field: 'emails';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember91 {
          field: 'emails';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember92 {
          field: 'emails';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember93 {
          field: 'emails';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember94 {
          field: 'emails';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember95 {
          field: 'emails';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember96 {
          field: 'emails';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember97 {
          field: 'resolvedCountry';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember98 {
          field: 'resolvedCountry';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember99 {
          field: 'resolvedCountry';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember100 {
          field: 'resolvedCountry';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember101 {
          field: 'resolvedCountry';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember102 {
          field: 'resolvedCountry';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember103 {
          field: 'resolvedCountry';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember104 {
          field: 'resolvedCountry';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember105 {
          field: 'resolvedCountry';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember106 {
          field: 'resolvedCountry';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember107 {
          field: 'resolvedCountry';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember108 {
          field: 'resolvedCountry';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember109 {
          field: 'resolvedCountry';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember110 {
          field: 'resolvedCountry';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember111 {
          field: 'resolvedState';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember112 {
          field: 'resolvedState';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember113 {
          field: 'resolvedState';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember114 {
          field: 'resolvedState';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember115 {
          field: 'resolvedState';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember116 {
          field: 'resolvedState';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember117 {
          field: 'resolvedState';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember118 {
          field: 'resolvedState';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember119 {
          field: 'resolvedState';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember120 {
          field: 'resolvedState';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember121 {
          field: 'resolvedState';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember122 {
          field: 'resolvedState';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember123 {
          field: 'resolvedState';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember124 {
          field: 'resolvedState';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember125 {
          field: 'resolvedCity';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember126 {
          field: 'resolvedCity';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember127 {
          field: 'resolvedCity';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember128 {
          field: 'resolvedCity';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember129 {
          field: 'resolvedCity';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember130 {
          field: 'resolvedCity';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember131 {
          field: 'resolvedCity';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember132 {
          field: 'resolvedCity';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember133 {
          field: 'resolvedCity';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember134 {
          field: 'resolvedCity';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember135 {
          field: 'resolvedCity';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember136 {
          field: 'resolvedCity';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember137 {
          field: 'resolvedCity';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember138 {
          field: 'resolvedCity';

          op: 'ContainsAllTokens';

          value: string;
        }
      }

      export interface UnionMember140 {
        filters: Array<
          | UnionMember140.UnionMember0
          | UnionMember140.UnionMember1
          | UnionMember140.UnionMember2
          | UnionMember140.UnionMember3
          | UnionMember140.UnionMember4
          | UnionMember140.UnionMember5
          | UnionMember140.UnionMember6
          | UnionMember140.UnionMember7
          | UnionMember140.UnionMember8
          | UnionMember140.UnionMember9
          | UnionMember140.UnionMember10
          | UnionMember140.UnionMember11
          | UnionMember140.UnionMember12
          | UnionMember140.UnionMember13
          | UnionMember140.UnionMember14
          | UnionMember140.UnionMember15
          | UnionMember140.UnionMember16
          | UnionMember140.UnionMember17
          | UnionMember140.UnionMember18
          | UnionMember140.UnionMember19
          | UnionMember140.UnionMember20
          | UnionMember140.UnionMember21
          | UnionMember140.UnionMember22
          | UnionMember140.UnionMember23
          | UnionMember140.UnionMember24
          | UnionMember140.UnionMember25
          | UnionMember140.UnionMember26
          | UnionMember140.UnionMember27
          | UnionMember140.UnionMember28
          | UnionMember140.UnionMember29
          | UnionMember140.UnionMember30
          | UnionMember140.UnionMember31
          | UnionMember140.UnionMember32
          | UnionMember140.UnionMember33
          | UnionMember140.UnionMember34
          | UnionMember140.UnionMember35
          | UnionMember140.UnionMember36
          | UnionMember140.UnionMember37
          | UnionMember140.UnionMember38
          | UnionMember140.UnionMember39
          | UnionMember140.UnionMember40
          | UnionMember140.UnionMember41
          | UnionMember140.UnionMember42
          | UnionMember140.UnionMember43
          | UnionMember140.UnionMember44
          | UnionMember140.UnionMember45
          | UnionMember140.UnionMember46
          | UnionMember140.UnionMember47
          | UnionMember140.UnionMember48
          | UnionMember140.UnionMember49
          | UnionMember140.UnionMember50
          | UnionMember140.UnionMember51
          | UnionMember140.UnionMember52
          | UnionMember140.UnionMember53
          | UnionMember140.UnionMember54
          | UnionMember140.UnionMember55
          | UnionMember140.UnionMember56
          | UnionMember140.UnionMember57
          | UnionMember140.UnionMember58
          | UnionMember140.UnionMember59
          | UnionMember140.UnionMember60
          | UnionMember140.UnionMember61
          | UnionMember140.UnionMember62
          | UnionMember140.UnionMember63
          | UnionMember140.UnionMember64
          | UnionMember140.UnionMember65
          | UnionMember140.UnionMember66
          | UnionMember140.UnionMember67
          | UnionMember140.UnionMember68
          | UnionMember140.UnionMember69
          | UnionMember140.UnionMember70
          | UnionMember140.UnionMember71
          | UnionMember140.UnionMember72
          | UnionMember140.UnionMember73
          | UnionMember140.UnionMember74
          | UnionMember140.UnionMember75
          | UnionMember140.UnionMember76
          | UnionMember140.UnionMember77
          | UnionMember140.UnionMember78
          | UnionMember140.UnionMember79
          | UnionMember140.UnionMember80
          | UnionMember140.UnionMember81
          | UnionMember140.UnionMember82
          | UnionMember140.UnionMember83
          | UnionMember140.UnionMember84
          | UnionMember140.UnionMember85
          | UnionMember140.UnionMember86
          | UnionMember140.UnionMember87
          | UnionMember140.UnionMember88
          | UnionMember140.UnionMember89
          | UnionMember140.UnionMember90
          | UnionMember140.UnionMember91
          | UnionMember140.UnionMember92
          | UnionMember140.UnionMember93
          | UnionMember140.UnionMember94
          | UnionMember140.UnionMember95
          | UnionMember140.UnionMember96
          | UnionMember140.UnionMember97
          | UnionMember140.UnionMember98
          | UnionMember140.UnionMember99
          | UnionMember140.UnionMember100
          | UnionMember140.UnionMember101
          | UnionMember140.UnionMember102
          | UnionMember140.UnionMember103
          | UnionMember140.UnionMember104
          | UnionMember140.UnionMember105
          | UnionMember140.UnionMember106
          | UnionMember140.UnionMember107
          | UnionMember140.UnionMember108
          | UnionMember140.UnionMember109
          | UnionMember140.UnionMember110
          | UnionMember140.UnionMember111
          | UnionMember140.UnionMember112
          | UnionMember140.UnionMember113
          | UnionMember140.UnionMember114
          | UnionMember140.UnionMember115
          | UnionMember140.UnionMember116
          | UnionMember140.UnionMember117
          | UnionMember140.UnionMember118
          | UnionMember140.UnionMember119
          | UnionMember140.UnionMember120
          | UnionMember140.UnionMember121
          | UnionMember140.UnionMember122
          | UnionMember140.UnionMember123
          | UnionMember140.UnionMember124
          | UnionMember140.UnionMember125
          | UnionMember140.UnionMember126
          | UnionMember140.UnionMember127
          | UnionMember140.UnionMember128
          | UnionMember140.UnionMember129
          | UnionMember140.UnionMember130
          | UnionMember140.UnionMember131
          | UnionMember140.UnionMember132
          | UnionMember140.UnionMember133
          | UnionMember140.UnionMember134
          | UnionMember140.UnionMember135
          | UnionMember140.UnionMember136
          | UnionMember140.UnionMember137
          | UnionMember140.UnionMember138
          | UnionMember140.UnionMember139
        >;

        op: 'And' | 'Or';
      }

      export namespace UnionMember140 {
        export interface UnionMember0 {
          field: 'githubId';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember1 {
          field: 'githubId';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember2 {
          field: 'githubId';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember3 {
          field: 'githubId';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember4 {
          field: 'githubId';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember5 {
          field: 'githubId';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember6 {
          field: 'githubId';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember7 {
          field: 'githubId';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember8 {
          field: 'githubId';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember9 {
          field: 'githubId';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember10 {
          field: 'githubId';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember11 {
          field: 'githubId';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember12 {
          field: 'githubId';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember13 {
          field: 'login';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember14 {
          field: 'login';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember15 {
          field: 'login';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember16 {
          field: 'login';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember17 {
          field: 'login';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember18 {
          field: 'login';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember19 {
          field: 'login';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember20 {
          field: 'login';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember21 {
          field: 'login';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember22 {
          field: 'login';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember23 {
          field: 'login';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember24 {
          field: 'login';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember25 {
          field: 'login';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember26 {
          field: 'login';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember27 {
          field: 'displayName';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember28 {
          field: 'displayName';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember29 {
          field: 'displayName';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember30 {
          field: 'displayName';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember31 {
          field: 'displayName';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember32 {
          field: 'displayName';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember33 {
          field: 'displayName';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember34 {
          field: 'displayName';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember35 {
          field: 'displayName';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember36 {
          field: 'displayName';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember37 {
          field: 'displayName';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember38 {
          field: 'displayName';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember39 {
          field: 'displayName';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember40 {
          field: 'displayName';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember41 {
          field: 'bio';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember42 {
          field: 'bio';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember43 {
          field: 'bio';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember44 {
          field: 'bio';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember45 {
          field: 'bio';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember46 {
          field: 'bio';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember47 {
          field: 'bio';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember48 {
          field: 'bio';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember49 {
          field: 'bio';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember50 {
          field: 'bio';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember51 {
          field: 'bio';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember52 {
          field: 'bio';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember53 {
          field: 'bio';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember54 {
          field: 'bio';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember55 {
          field: 'company';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember56 {
          field: 'company';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember57 {
          field: 'company';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember58 {
          field: 'company';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember59 {
          field: 'company';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember60 {
          field: 'company';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember61 {
          field: 'company';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember62 {
          field: 'company';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember63 {
          field: 'company';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember64 {
          field: 'company';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember65 {
          field: 'company';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember66 {
          field: 'company';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember67 {
          field: 'company';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember68 {
          field: 'company';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember69 {
          field: 'location';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember70 {
          field: 'location';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember71 {
          field: 'location';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember72 {
          field: 'location';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember73 {
          field: 'location';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember74 {
          field: 'location';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember75 {
          field: 'location';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember76 {
          field: 'location';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember77 {
          field: 'location';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember78 {
          field: 'location';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember79 {
          field: 'location';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember80 {
          field: 'location';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember81 {
          field: 'location';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember82 {
          field: 'location';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember83 {
          field: 'emails';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember84 {
          field: 'emails';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember85 {
          field: 'emails';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember86 {
          field: 'emails';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember87 {
          field: 'emails';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember88 {
          field: 'emails';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember89 {
          field: 'emails';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember90 {
          field: 'emails';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember91 {
          field: 'emails';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember92 {
          field: 'emails';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember93 {
          field: 'emails';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember94 {
          field: 'emails';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember95 {
          field: 'emails';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember96 {
          field: 'emails';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember97 {
          field: 'resolvedCountry';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember98 {
          field: 'resolvedCountry';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember99 {
          field: 'resolvedCountry';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember100 {
          field: 'resolvedCountry';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember101 {
          field: 'resolvedCountry';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember102 {
          field: 'resolvedCountry';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember103 {
          field: 'resolvedCountry';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember104 {
          field: 'resolvedCountry';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember105 {
          field: 'resolvedCountry';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember106 {
          field: 'resolvedCountry';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember107 {
          field: 'resolvedCountry';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember108 {
          field: 'resolvedCountry';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember109 {
          field: 'resolvedCountry';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember110 {
          field: 'resolvedCountry';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember111 {
          field: 'resolvedState';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember112 {
          field: 'resolvedState';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember113 {
          field: 'resolvedState';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember114 {
          field: 'resolvedState';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember115 {
          field: 'resolvedState';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember116 {
          field: 'resolvedState';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember117 {
          field: 'resolvedState';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember118 {
          field: 'resolvedState';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember119 {
          field: 'resolvedState';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember120 {
          field: 'resolvedState';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember121 {
          field: 'resolvedState';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember122 {
          field: 'resolvedState';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember123 {
          field: 'resolvedState';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember124 {
          field: 'resolvedState';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember125 {
          field: 'resolvedCity';

          op: 'Eq';

          value: string;
        }

        export interface UnionMember126 {
          field: 'resolvedCity';

          op: 'NotEq';

          value: string;
        }

        export interface UnionMember127 {
          field: 'resolvedCity';

          op: 'In';

          value: Array<string>;
        }

        export interface UnionMember128 {
          field: 'resolvedCity';

          op: 'NotIn';

          value: Array<string>;
        }

        export interface UnionMember129 {
          field: 'resolvedCity';

          op: 'Lt';

          value: string;
        }

        export interface UnionMember130 {
          field: 'resolvedCity';

          op: 'Lte';

          value: string;
        }

        export interface UnionMember131 {
          field: 'resolvedCity';

          op: 'Gt';

          value: string;
        }

        export interface UnionMember132 {
          field: 'resolvedCity';

          op: 'Gte';

          value: string;
        }

        export interface UnionMember133 {
          field: 'resolvedCity';

          op: 'Glob';

          value: string;
        }

        export interface UnionMember134 {
          field: 'resolvedCity';

          op: 'NotGlob';

          value: string;
        }

        export interface UnionMember135 {
          field: 'resolvedCity';

          op: 'IGlob';

          value: string;
        }

        export interface UnionMember136 {
          field: 'resolvedCity';

          op: 'NotIGlob';

          value: string;
        }

        export interface UnionMember137 {
          field: 'resolvedCity';

          op: 'Regex';

          value: string;
        }

        export interface UnionMember138 {
          field: 'resolvedCity';

          op: 'ContainsAllTokens';

          value: string;
        }

        export interface UnionMember139 {
          filters: Array<
            | UnionMember139.UnionMember0
            | UnionMember139.UnionMember1
            | UnionMember139.UnionMember2
            | UnionMember139.UnionMember3
            | UnionMember139.UnionMember4
            | UnionMember139.UnionMember5
            | UnionMember139.UnionMember6
            | UnionMember139.UnionMember7
            | UnionMember139.UnionMember8
            | UnionMember139.UnionMember9
            | UnionMember139.UnionMember10
            | UnionMember139.UnionMember11
            | UnionMember139.UnionMember12
            | UnionMember139.UnionMember13
            | UnionMember139.UnionMember14
            | UnionMember139.UnionMember15
            | UnionMember139.UnionMember16
            | UnionMember139.UnionMember17
            | UnionMember139.UnionMember18
            | UnionMember139.UnionMember19
            | UnionMember139.UnionMember20
            | UnionMember139.UnionMember21
            | UnionMember139.UnionMember22
            | UnionMember139.UnionMember23
            | UnionMember139.UnionMember24
            | UnionMember139.UnionMember25
            | UnionMember139.UnionMember26
            | UnionMember139.UnionMember27
            | UnionMember139.UnionMember28
            | UnionMember139.UnionMember29
            | UnionMember139.UnionMember30
            | UnionMember139.UnionMember31
            | UnionMember139.UnionMember32
            | UnionMember139.UnionMember33
            | UnionMember139.UnionMember34
            | UnionMember139.UnionMember35
            | UnionMember139.UnionMember36
            | UnionMember139.UnionMember37
            | UnionMember139.UnionMember38
            | UnionMember139.UnionMember39
            | UnionMember139.UnionMember40
            | UnionMember139.UnionMember41
            | UnionMember139.UnionMember42
            | UnionMember139.UnionMember43
            | UnionMember139.UnionMember44
            | UnionMember139.UnionMember45
            | UnionMember139.UnionMember46
            | UnionMember139.UnionMember47
            | UnionMember139.UnionMember48
            | UnionMember139.UnionMember49
            | UnionMember139.UnionMember50
            | UnionMember139.UnionMember51
            | UnionMember139.UnionMember52
            | UnionMember139.UnionMember53
            | UnionMember139.UnionMember54
            | UnionMember139.UnionMember55
            | UnionMember139.UnionMember56
            | UnionMember139.UnionMember57
            | UnionMember139.UnionMember58
            | UnionMember139.UnionMember59
            | UnionMember139.UnionMember60
            | UnionMember139.UnionMember61
            | UnionMember139.UnionMember62
            | UnionMember139.UnionMember63
            | UnionMember139.UnionMember64
            | UnionMember139.UnionMember65
            | UnionMember139.UnionMember66
            | UnionMember139.UnionMember67
            | UnionMember139.UnionMember68
            | UnionMember139.UnionMember69
            | UnionMember139.UnionMember70
            | UnionMember139.UnionMember71
            | UnionMember139.UnionMember72
            | UnionMember139.UnionMember73
            | UnionMember139.UnionMember74
            | UnionMember139.UnionMember75
            | UnionMember139.UnionMember76
            | UnionMember139.UnionMember77
            | UnionMember139.UnionMember78
            | UnionMember139.UnionMember79
            | UnionMember139.UnionMember80
            | UnionMember139.UnionMember81
            | UnionMember139.UnionMember82
            | UnionMember139.UnionMember83
            | UnionMember139.UnionMember84
            | UnionMember139.UnionMember85
            | UnionMember139.UnionMember86
            | UnionMember139.UnionMember87
            | UnionMember139.UnionMember88
            | UnionMember139.UnionMember89
            | UnionMember139.UnionMember90
            | UnionMember139.UnionMember91
            | UnionMember139.UnionMember92
            | UnionMember139.UnionMember93
            | UnionMember139.UnionMember94
            | UnionMember139.UnionMember95
            | UnionMember139.UnionMember96
            | UnionMember139.UnionMember97
            | UnionMember139.UnionMember98
            | UnionMember139.UnionMember99
            | UnionMember139.UnionMember100
            | UnionMember139.UnionMember101
            | UnionMember139.UnionMember102
            | UnionMember139.UnionMember103
            | UnionMember139.UnionMember104
            | UnionMember139.UnionMember105
            | UnionMember139.UnionMember106
            | UnionMember139.UnionMember107
            | UnionMember139.UnionMember108
            | UnionMember139.UnionMember109
            | UnionMember139.UnionMember110
            | UnionMember139.UnionMember111
            | UnionMember139.UnionMember112
            | UnionMember139.UnionMember113
            | UnionMember139.UnionMember114
            | UnionMember139.UnionMember115
            | UnionMember139.UnionMember116
            | UnionMember139.UnionMember117
            | UnionMember139.UnionMember118
            | UnionMember139.UnionMember119
            | UnionMember139.UnionMember120
            | UnionMember139.UnionMember121
            | UnionMember139.UnionMember122
            | UnionMember139.UnionMember123
            | UnionMember139.UnionMember124
            | UnionMember139.UnionMember125
            | UnionMember139.UnionMember126
            | UnionMember139.UnionMember127
            | UnionMember139.UnionMember128
            | UnionMember139.UnionMember129
            | UnionMember139.UnionMember130
            | UnionMember139.UnionMember131
            | UnionMember139.UnionMember132
            | UnionMember139.UnionMember133
            | UnionMember139.UnionMember134
            | UnionMember139.UnionMember135
            | UnionMember139.UnionMember136
            | UnionMember139.UnionMember137
            | UnionMember139.UnionMember138
          >;

          op: 'And' | 'Or';
        }

        export namespace UnionMember139 {
          export interface UnionMember0 {
            field: 'githubId';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember1 {
            field: 'githubId';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember2 {
            field: 'githubId';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember3 {
            field: 'githubId';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember4 {
            field: 'githubId';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember5 {
            field: 'githubId';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember6 {
            field: 'githubId';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember7 {
            field: 'githubId';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember8 {
            field: 'githubId';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember9 {
            field: 'githubId';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember10 {
            field: 'githubId';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember11 {
            field: 'githubId';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember12 {
            field: 'githubId';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember13 {
            field: 'login';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember14 {
            field: 'login';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember15 {
            field: 'login';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember16 {
            field: 'login';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember17 {
            field: 'login';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember18 {
            field: 'login';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember19 {
            field: 'login';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember20 {
            field: 'login';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember21 {
            field: 'login';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember22 {
            field: 'login';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember23 {
            field: 'login';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember24 {
            field: 'login';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember25 {
            field: 'login';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember26 {
            field: 'login';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember27 {
            field: 'displayName';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember28 {
            field: 'displayName';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember29 {
            field: 'displayName';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember30 {
            field: 'displayName';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember31 {
            field: 'displayName';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember32 {
            field: 'displayName';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember33 {
            field: 'displayName';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember34 {
            field: 'displayName';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember35 {
            field: 'displayName';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember36 {
            field: 'displayName';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember37 {
            field: 'displayName';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember38 {
            field: 'displayName';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember39 {
            field: 'displayName';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember40 {
            field: 'displayName';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember41 {
            field: 'bio';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember42 {
            field: 'bio';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember43 {
            field: 'bio';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember44 {
            field: 'bio';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember45 {
            field: 'bio';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember46 {
            field: 'bio';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember47 {
            field: 'bio';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember48 {
            field: 'bio';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember49 {
            field: 'bio';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember50 {
            field: 'bio';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember51 {
            field: 'bio';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember52 {
            field: 'bio';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember53 {
            field: 'bio';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember54 {
            field: 'bio';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember55 {
            field: 'company';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember56 {
            field: 'company';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember57 {
            field: 'company';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember58 {
            field: 'company';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember59 {
            field: 'company';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember60 {
            field: 'company';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember61 {
            field: 'company';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember62 {
            field: 'company';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember63 {
            field: 'company';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember64 {
            field: 'company';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember65 {
            field: 'company';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember66 {
            field: 'company';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember67 {
            field: 'company';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember68 {
            field: 'company';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember69 {
            field: 'location';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember70 {
            field: 'location';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember71 {
            field: 'location';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember72 {
            field: 'location';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember73 {
            field: 'location';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember74 {
            field: 'location';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember75 {
            field: 'location';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember76 {
            field: 'location';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember77 {
            field: 'location';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember78 {
            field: 'location';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember79 {
            field: 'location';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember80 {
            field: 'location';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember81 {
            field: 'location';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember82 {
            field: 'location';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember83 {
            field: 'emails';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember84 {
            field: 'emails';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember85 {
            field: 'emails';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember86 {
            field: 'emails';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember87 {
            field: 'emails';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember88 {
            field: 'emails';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember89 {
            field: 'emails';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember90 {
            field: 'emails';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember91 {
            field: 'emails';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember92 {
            field: 'emails';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember93 {
            field: 'emails';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember94 {
            field: 'emails';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember95 {
            field: 'emails';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember96 {
            field: 'emails';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember97 {
            field: 'resolvedCountry';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember98 {
            field: 'resolvedCountry';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember99 {
            field: 'resolvedCountry';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember100 {
            field: 'resolvedCountry';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember101 {
            field: 'resolvedCountry';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember102 {
            field: 'resolvedCountry';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember103 {
            field: 'resolvedCountry';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember104 {
            field: 'resolvedCountry';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember105 {
            field: 'resolvedCountry';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember106 {
            field: 'resolvedCountry';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember107 {
            field: 'resolvedCountry';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember108 {
            field: 'resolvedCountry';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember109 {
            field: 'resolvedCountry';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember110 {
            field: 'resolvedCountry';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember111 {
            field: 'resolvedState';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember112 {
            field: 'resolvedState';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember113 {
            field: 'resolvedState';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember114 {
            field: 'resolvedState';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember115 {
            field: 'resolvedState';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember116 {
            field: 'resolvedState';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember117 {
            field: 'resolvedState';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember118 {
            field: 'resolvedState';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember119 {
            field: 'resolvedState';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember120 {
            field: 'resolvedState';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember121 {
            field: 'resolvedState';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember122 {
            field: 'resolvedState';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember123 {
            field: 'resolvedState';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember124 {
            field: 'resolvedState';

            op: 'ContainsAllTokens';

            value: string;
          }

          export interface UnionMember125 {
            field: 'resolvedCity';

            op: 'Eq';

            value: string;
          }

          export interface UnionMember126 {
            field: 'resolvedCity';

            op: 'NotEq';

            value: string;
          }

          export interface UnionMember127 {
            field: 'resolvedCity';

            op: 'In';

            value: Array<string>;
          }

          export interface UnionMember128 {
            field: 'resolvedCity';

            op: 'NotIn';

            value: Array<string>;
          }

          export interface UnionMember129 {
            field: 'resolvedCity';

            op: 'Lt';

            value: string;
          }

          export interface UnionMember130 {
            field: 'resolvedCity';

            op: 'Lte';

            value: string;
          }

          export interface UnionMember131 {
            field: 'resolvedCity';

            op: 'Gt';

            value: string;
          }

          export interface UnionMember132 {
            field: 'resolvedCity';

            op: 'Gte';

            value: string;
          }

          export interface UnionMember133 {
            field: 'resolvedCity';

            op: 'Glob';

            value: string;
          }

          export interface UnionMember134 {
            field: 'resolvedCity';

            op: 'NotGlob';

            value: string;
          }

          export interface UnionMember135 {
            field: 'resolvedCity';

            op: 'IGlob';

            value: string;
          }

          export interface UnionMember136 {
            field: 'resolvedCity';

            op: 'NotIGlob';

            value: string;
          }

          export interface UnionMember137 {
            field: 'resolvedCity';

            op: 'Regex';

            value: string;
          }

          export interface UnionMember138 {
            field: 'resolvedCity';

            op: 'ContainsAllTokens';

            value: string;
          }
        }
      }
    }
  }

  export interface UnionMember0 {
    name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

    op: 'Attr';
  }

  export interface UnionMember1 {
    op: 'Const';

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

    op: 'Sum';
  }

  export namespace UnionMember2 {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      op: 'Attr';
    }

    export interface UnionMember1 {
      op: 'Const';

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

      op: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<
        | UnionMember3.UnionMember0
        | UnionMember3.UnionMember1
        | UnionMember3.UnionMember2
        | UnionMember3.UnionMember3
        | UnionMember3.UnionMember4
        | UnionMember3.UnionMember5
        | UnionMember3.UnionMember6
        | UnionMember3.UnionMember7
      >;

      op: 'Mult';
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember4 {
      exprs: Array<
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4
        | UnionMember4.UnionMember5
        | UnionMember4.UnionMember6
        | UnionMember4.UnionMember7
      >;

      op: 'Div';
    }

    export namespace UnionMember4 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
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

      op: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }
  }

  export interface UnionMember3 {
    exprs: Array<
      | UnionMember3.UnionMember0
      | UnionMember3.UnionMember1
      | UnionMember3.UnionMember2
      | UnionMember3.UnionMember3
      | UnionMember3.UnionMember4
      | UnionMember3.UnionMember5
      | UnionMember3.UnionMember6
      | UnionMember3.UnionMember7
    >;

    op: 'Mult';
  }

  export namespace UnionMember3 {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      op: 'Attr';
    }

    export interface UnionMember1 {
      op: 'Const';

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

      op: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<
        | UnionMember3.UnionMember0
        | UnionMember3.UnionMember1
        | UnionMember3.UnionMember2
        | UnionMember3.UnionMember3
        | UnionMember3.UnionMember4
        | UnionMember3.UnionMember5
        | UnionMember3.UnionMember6
        | UnionMember3.UnionMember7
      >;

      op: 'Mult';
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember4 {
      exprs: Array<
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4
        | UnionMember4.UnionMember5
        | UnionMember4.UnionMember6
        | UnionMember4.UnionMember7
      >;

      op: 'Div';
    }

    export namespace UnionMember4 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
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

      op: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }
  }

  export interface UnionMember4 {
    exprs: Array<
      | UnionMember4.UnionMember0
      | UnionMember4.UnionMember1
      | UnionMember4.UnionMember2
      | UnionMember4.UnionMember3
      | UnionMember4.UnionMember4
      | UnionMember4.UnionMember5
      | UnionMember4.UnionMember6
      | UnionMember4.UnionMember7
    >;

    op: 'Div';
  }

  export namespace UnionMember4 {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      op: 'Attr';
    }

    export interface UnionMember1 {
      op: 'Const';

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

      op: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<
        | UnionMember3.UnionMember0
        | UnionMember3.UnionMember1
        | UnionMember3.UnionMember2
        | UnionMember3.UnionMember3
        | UnionMember3.UnionMember4
        | UnionMember3.UnionMember5
        | UnionMember3.UnionMember6
        | UnionMember3.UnionMember7
      >;

      op: 'Mult';
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember4 {
      exprs: Array<
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4
        | UnionMember4.UnionMember5
        | UnionMember4.UnionMember6
        | UnionMember4.UnionMember7
      >;

      op: 'Div';
    }

    export namespace UnionMember4 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
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

      op: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }
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

    op: 'Max';
  }

  export namespace UnionMember5 {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      op: 'Attr';
    }

    export interface UnionMember1 {
      op: 'Const';

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

      op: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<
        | UnionMember3.UnionMember0
        | UnionMember3.UnionMember1
        | UnionMember3.UnionMember2
        | UnionMember3.UnionMember3
        | UnionMember3.UnionMember4
        | UnionMember3.UnionMember5
        | UnionMember3.UnionMember6
        | UnionMember3.UnionMember7
      >;

      op: 'Mult';
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember4 {
      exprs: Array<
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4
        | UnionMember4.UnionMember5
        | UnionMember4.UnionMember6
        | UnionMember4.UnionMember7
      >;

      op: 'Div';
    }

    export namespace UnionMember4 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
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

      op: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
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

    op: 'Min';
  }

  export namespace UnionMember6 {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      op: 'Attr';
    }

    export interface UnionMember1 {
      op: 'Const';

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

      op: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<
        | UnionMember3.UnionMember0
        | UnionMember3.UnionMember1
        | UnionMember3.UnionMember2
        | UnionMember3.UnionMember3
        | UnionMember3.UnionMember4
        | UnionMember3.UnionMember5
        | UnionMember3.UnionMember6
        | UnionMember3.UnionMember7
      >;

      op: 'Mult';
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember4 {
      exprs: Array<
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4
        | UnionMember4.UnionMember5
        | UnionMember4.UnionMember6
        | UnionMember4.UnionMember7
      >;

      op: 'Div';
    }

    export namespace UnionMember4 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
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

      op: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
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

    op: 'Log';
  }

  export namespace UnionMember7 {
    export interface UnionMember0 {
      name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

      op: 'Attr';
    }

    export interface UnionMember1 {
      op: 'Const';

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

      op: 'Sum';
    }

    export namespace UnionMember2 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember3 {
      exprs: Array<
        | UnionMember3.UnionMember0
        | UnionMember3.UnionMember1
        | UnionMember3.UnionMember2
        | UnionMember3.UnionMember3
        | UnionMember3.UnionMember4
        | UnionMember3.UnionMember5
        | UnionMember3.UnionMember6
        | UnionMember3.UnionMember7
      >;

      op: 'Mult';
    }

    export namespace UnionMember3 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
    }

    export interface UnionMember4 {
      exprs: Array<
        | UnionMember4.UnionMember0
        | UnionMember4.UnionMember1
        | UnionMember4.UnionMember2
        | UnionMember4.UnionMember3
        | UnionMember4.UnionMember4
        | UnionMember4.UnionMember5
        | UnionMember4.UnionMember6
        | UnionMember4.UnionMember7
      >;

      op: 'Div';
    }

    export namespace UnionMember4 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }
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

      op: 'Max';
    }

    export namespace UnionMember5 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Min';
    }

    export namespace UnionMember6 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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

      op: 'Log';
    }

    export namespace UnionMember7 {
      export interface UnionMember0 {
        name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

        op: 'Attr';
      }

      export interface UnionMember1 {
        op: 'Const';

        value: number;
      }

      export interface UnionMember2 {
        exprs: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        op: 'Sum';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember3 {
        exprs: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1>;

        op: 'Mult';
      }

      export namespace UnionMember3 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember4 {
        exprs: Array<UnionMember4.UnionMember0 | UnionMember4.UnionMember1>;

        op: 'Div';
      }

      export namespace UnionMember4 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember5 {
        exprs: Array<UnionMember5.UnionMember0 | UnionMember5.UnionMember1>;

        op: 'Max';
      }

      export namespace UnionMember5 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember6 {
        exprs: Array<UnionMember6.UnionMember0 | UnionMember6.UnionMember1>;

        op: 'Min';
      }

      export namespace UnionMember6 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

          value: number;
        }
      }

      export interface UnionMember7 {
        base: number;

        expr: UnionMember7.UnionMember0 | UnionMember7.UnionMember1;

        op: 'Log';
      }

      export namespace UnionMember7 {
        export interface UnionMember0 {
          name: 'ann' | 'stars' | 'issues_closed' | 'age' | 'recency';

          op: 'Attr';
        }

        export interface UnionMember1 {
          op: 'Const';

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
