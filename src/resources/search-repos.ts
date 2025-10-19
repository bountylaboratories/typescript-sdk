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
         * Email addresses
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
       * Email addresses
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
         * Email addresses
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
         * Email addresses
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
       * Email addresses
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
         * Email addresses
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
}

export interface SearchRepoNaturalLanguageParams {
  /**
   * Natural language query describing the repositories you want to find
   */
  query: string;

  /**
   * When true, the AI will generate a user location filter and apply it to ALL
   * user-returning includeAttributes (contributors, starrers). This filter will
   * override any manually-specified filters.
   */
  filterUserIncludeAttributes?: boolean;

  /**
   * Optional graph relationships to include (owner, contributors, starrers)
   */
  includeAttributes?: SearchRepoNaturalLanguageParams.IncludeAttributes;

  /**
   * Maximum number of results to return (default: 100, max: 1000)
   */
  maxResults?: number;
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
       * Optional filters for location-based filtering. Supports Eq (exact match), In
       * (one of array), Like (partial match with % wildcards). Can combine filters with
       * And/Or operators.
       */
      filters?: Contributors.UnionMember0 | Contributors.UnionMember1 | Contributors.UnionMember2;
    }

    export namespace Contributors {
      export interface UnionMember0 {
        /**
         * Location field to filter on
         */
        field: 'resolvedCountry' | 'resolvedState' | 'resolvedCity';

        /**
         * Filter operator: Eq (exact match), In (one of array), Like (SQL LIKE with %
         * wildcards)
         */
        op: 'Eq' | 'In' | 'Like';

        /**
         * Filter value - string for Eq/Like, array of strings for In
         */
        value: string | Array<string>;
      }

      export interface UnionMember1 {
        filters: Array<UnionMember1.Filter>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember1 {
        export interface Filter {
          /**
           * Location field to filter on
           */
          field: 'resolvedCountry' | 'resolvedState' | 'resolvedCity';

          /**
           * Filter operator: Eq (exact match), In (one of array), Like (SQL LIKE with %
           * wildcards)
           */
          op: 'Eq' | 'In' | 'Like';

          /**
           * Filter value - string for Eq/Like, array of strings for In
           */
          value: string | Array<string>;
        }
      }

      export interface UnionMember2 {
        filters: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          /**
           * Location field to filter on
           */
          field: 'resolvedCountry' | 'resolvedState' | 'resolvedCity';

          /**
           * Filter operator: Eq (exact match), In (one of array), Like (SQL LIKE with %
           * wildcards)
           */
          op: 'Eq' | 'In' | 'Like';

          /**
           * Filter value - string for Eq/Like, array of strings for In
           */
          value: string | Array<string>;
        }

        export interface UnionMember1 {
          filters: Array<UnionMember1.Filter>;

          /**
           * Logical operator to combine filters
           */
          op: 'And' | 'Or';
        }

        export namespace UnionMember1 {
          export interface Filter {
            /**
             * Location field to filter on
             */
            field: 'resolvedCountry' | 'resolvedState' | 'resolvedCity';

            /**
             * Filter operator: Eq (exact match), In (one of array), Like (SQL LIKE with %
             * wildcards)
             */
            op: 'Eq' | 'In' | 'Like';

            /**
             * Filter value - string for Eq/Like, array of strings for In
             */
            value: string | Array<string>;
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
       * Optional filters for location-based filtering. Supports Eq (exact match), In
       * (one of array), Like (partial match with % wildcards). Can combine filters with
       * And/Or operators.
       */
      filters?: Starrers.UnionMember0 | Starrers.UnionMember1 | Starrers.UnionMember2;
    }

    export namespace Starrers {
      export interface UnionMember0 {
        /**
         * Location field to filter on
         */
        field: 'resolvedCountry' | 'resolvedState' | 'resolvedCity';

        /**
         * Filter operator: Eq (exact match), In (one of array), Like (SQL LIKE with %
         * wildcards)
         */
        op: 'Eq' | 'In' | 'Like';

        /**
         * Filter value - string for Eq/Like, array of strings for In
         */
        value: string | Array<string>;
      }

      export interface UnionMember1 {
        filters: Array<UnionMember1.Filter>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember1 {
        export interface Filter {
          /**
           * Location field to filter on
           */
          field: 'resolvedCountry' | 'resolvedState' | 'resolvedCity';

          /**
           * Filter operator: Eq (exact match), In (one of array), Like (SQL LIKE with %
           * wildcards)
           */
          op: 'Eq' | 'In' | 'Like';

          /**
           * Filter value - string for Eq/Like, array of strings for In
           */
          value: string | Array<string>;
        }
      }

      export interface UnionMember2 {
        filters: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          /**
           * Location field to filter on
           */
          field: 'resolvedCountry' | 'resolvedState' | 'resolvedCity';

          /**
           * Filter operator: Eq (exact match), In (one of array), Like (SQL LIKE with %
           * wildcards)
           */
          op: 'Eq' | 'In' | 'Like';

          /**
           * Filter value - string for Eq/Like, array of strings for In
           */
          value: string | Array<string>;
        }

        export interface UnionMember1 {
          filters: Array<UnionMember1.Filter>;

          /**
           * Logical operator to combine filters
           */
          op: 'And' | 'Or';
        }

        export namespace UnionMember1 {
          export interface Filter {
            /**
             * Location field to filter on
             */
            field: 'resolvedCountry' | 'resolvedState' | 'resolvedCity';

            /**
             * Filter operator: Eq (exact match), In (one of array), Like (SQL LIKE with %
             * wildcards)
             */
            op: 'Eq' | 'In' | 'Like';

            /**
             * Filter value - string for Eq/Like, array of strings for In
             */
            value: string | Array<string>;
          }
        }
      }
    }
  }
}

export interface SearchRepoSearchParams {
  /**
   * Natural language search query for semantic search across repository README and
   * description using vector embeddings
   */
  query: string;

  /**
   * Optional filters for narrowing search results. Supports filtering on: githubId,
   * ownerLogin, name, stargazerCount, language, totalIssuesCount, totalIssuesOpen,
   * totalIssuesClosed, lastContributorLocations.
   *
   * Filter structure:
   *
   * - Field filters: { field: "fieldName", op: "Eq"|"In"|"Gte"|"Lte", value:
   *   string|number|array }
   * - Composite filters: { op: "And"|"Or", filters: [...] }
   *
   * Supported operators:
   *
   * - String fields: Eq (exact match), In (one of array)
   * - Number fields: Eq (exact), In (one of array), Gte (>=), Lte (<=)
   * - Use And/Or to combine multiple filters
   */
  filters?: SearchRepoSearchParams.GenericFieldFilter | SearchRepoSearchParams.CompositeFilter | null;

  /**
   * Optional graph relationships to include (owner, contributors, starrers)
   */
  includeAttributes?: SearchRepoSearchParams.IncludeAttributes;

  /**
   * Maximum number of results to return (default: 100, max: 1000)
   */
  maxResults?: number;
}

export namespace SearchRepoSearchParams {
  export interface GenericFieldFilter {
    /**
     * Field name to filter on
     */
    field: string;

    /**
     * Operation (Eq, In, Gte, etc.)
     */
    op: string;

    /**
     * Filter value
     */
    value: string | number | Array<string> | Array<number>;
  }

  export interface CompositeFilter {
    /**
     * Array of filters to combine
     */
    filters: Array<CompositeFilter.Filter>;

    /**
     * Logical operator
     */
    op: 'And' | 'Or';
  }

  export namespace CompositeFilter {
    export interface Filter {
      /**
       * Field name to filter on
       */
      field: string;

      /**
       * Operation (Eq, In, Gte, etc.)
       */
      op: string;

      /**
       * Filter value
       */
      value: string | number | Array<string> | Array<number>;
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
       * Optional filters for location-based filtering. Supports Eq (exact match), In
       * (one of array), Like (partial match with % wildcards). Can combine filters with
       * And/Or operators.
       */
      filters?: Contributors.UnionMember0 | Contributors.UnionMember1 | Contributors.UnionMember2;
    }

    export namespace Contributors {
      export interface UnionMember0 {
        /**
         * Location field to filter on
         */
        field: 'resolvedCountry' | 'resolvedState' | 'resolvedCity';

        /**
         * Filter operator: Eq (exact match), In (one of array), Like (SQL LIKE with %
         * wildcards)
         */
        op: 'Eq' | 'In' | 'Like';

        /**
         * Filter value - string for Eq/Like, array of strings for In
         */
        value: string | Array<string>;
      }

      export interface UnionMember1 {
        filters: Array<UnionMember1.Filter>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember1 {
        export interface Filter {
          /**
           * Location field to filter on
           */
          field: 'resolvedCountry' | 'resolvedState' | 'resolvedCity';

          /**
           * Filter operator: Eq (exact match), In (one of array), Like (SQL LIKE with %
           * wildcards)
           */
          op: 'Eq' | 'In' | 'Like';

          /**
           * Filter value - string for Eq/Like, array of strings for In
           */
          value: string | Array<string>;
        }
      }

      export interface UnionMember2 {
        filters: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          /**
           * Location field to filter on
           */
          field: 'resolvedCountry' | 'resolvedState' | 'resolvedCity';

          /**
           * Filter operator: Eq (exact match), In (one of array), Like (SQL LIKE with %
           * wildcards)
           */
          op: 'Eq' | 'In' | 'Like';

          /**
           * Filter value - string for Eq/Like, array of strings for In
           */
          value: string | Array<string>;
        }

        export interface UnionMember1 {
          filters: Array<UnionMember1.Filter>;

          /**
           * Logical operator to combine filters
           */
          op: 'And' | 'Or';
        }

        export namespace UnionMember1 {
          export interface Filter {
            /**
             * Location field to filter on
             */
            field: 'resolvedCountry' | 'resolvedState' | 'resolvedCity';

            /**
             * Filter operator: Eq (exact match), In (one of array), Like (SQL LIKE with %
             * wildcards)
             */
            op: 'Eq' | 'In' | 'Like';

            /**
             * Filter value - string for Eq/Like, array of strings for In
             */
            value: string | Array<string>;
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
       * Optional filters for location-based filtering. Supports Eq (exact match), In
       * (one of array), Like (partial match with % wildcards). Can combine filters with
       * And/Or operators.
       */
      filters?: Starrers.UnionMember0 | Starrers.UnionMember1 | Starrers.UnionMember2;
    }

    export namespace Starrers {
      export interface UnionMember0 {
        /**
         * Location field to filter on
         */
        field: 'resolvedCountry' | 'resolvedState' | 'resolvedCity';

        /**
         * Filter operator: Eq (exact match), In (one of array), Like (SQL LIKE with %
         * wildcards)
         */
        op: 'Eq' | 'In' | 'Like';

        /**
         * Filter value - string for Eq/Like, array of strings for In
         */
        value: string | Array<string>;
      }

      export interface UnionMember1 {
        filters: Array<UnionMember1.Filter>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember1 {
        export interface Filter {
          /**
           * Location field to filter on
           */
          field: 'resolvedCountry' | 'resolvedState' | 'resolvedCity';

          /**
           * Filter operator: Eq (exact match), In (one of array), Like (SQL LIKE with %
           * wildcards)
           */
          op: 'Eq' | 'In' | 'Like';

          /**
           * Filter value - string for Eq/Like, array of strings for In
           */
          value: string | Array<string>;
        }
      }

      export interface UnionMember2 {
        filters: Array<UnionMember2.UnionMember0 | UnionMember2.UnionMember1>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember2 {
        export interface UnionMember0 {
          /**
           * Location field to filter on
           */
          field: 'resolvedCountry' | 'resolvedState' | 'resolvedCity';

          /**
           * Filter operator: Eq (exact match), In (one of array), Like (SQL LIKE with %
           * wildcards)
           */
          op: 'Eq' | 'In' | 'Like';

          /**
           * Filter value - string for Eq/Like, array of strings for In
           */
          value: string | Array<string>;
        }

        export interface UnionMember1 {
          filters: Array<UnionMember1.Filter>;

          /**
           * Logical operator to combine filters
           */
          op: 'And' | 'Or';
        }

        export namespace UnionMember1 {
          export interface Filter {
            /**
             * Location field to filter on
             */
            field: 'resolvedCountry' | 'resolvedState' | 'resolvedCity';

            /**
             * Filter operator: Eq (exact match), In (one of array), Like (SQL LIKE with %
             * wildcards)
             */
            op: 'Eq' | 'In' | 'Like';

            /**
             * Filter value - string for Eq/Like, array of strings for In
             */
            value: string | Array<string>;
          }
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
