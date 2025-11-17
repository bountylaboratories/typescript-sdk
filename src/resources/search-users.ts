// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SearchUsers extends APIResource {
  /**
   * Natural language search that uses AI to understand your query and automatically
   * generate search terms and filters. Requires SEARCH service. Credits: 1 per
   * result returned + 1 for AI processing + graph relationship credits if
   * includeAttributes is specified.
   *
   * @example
   * ```ts
   * const response = await client.searchUsers.naturalLanguage({
   *   query:
   *     'Find machine learning engineers at Google who work on AI infrastructure',
   * });
   * ```
   */
  naturalLanguage(
    body: SearchUserNaturalLanguageParams,
    options?: RequestOptions,
  ): APIPromise<SearchUserNaturalLanguageResponse> {
    return this._client.post('/api/search/users/natural-language', { body, ...options });
  }

  /**
   * Full-text search across user login, name, bio, company, and location using BM25
   * ranking. Results include relevance scores. Requires SEARCH service. Credits: 1
   * per result returned + graph relationship credits if includeAttributes is
   * specified.
   *
   * @example
   * ```ts
   * const response = await client.searchUsers.search({
   *   query: 'machine learning engineer san francisco',
   * });
   * ```
   */
  search(body: SearchUserSearchParams, options?: RequestOptions): APIPromise<SearchUserSearchResponse> {
    return this._client.post('/api/search/users', { body, ...options });
  }
}

export interface SearchUserNaturalLanguageResponse {
  /**
   * Number of users returned
   */
  count: number;

  /**
   * The generated search query used for the search
   */
  searchQuery: string;

  /**
   * Array of user search results with relevance scores
   */
  users: Array<SearchUserNaturalLanguageResponse.User>;
}

export namespace SearchUserNaturalLanguageResponse {
  export interface User {
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
     * Repositories this user starred (when includeAttributes.stars is specified)
     */
    contributes?: User.Contributes;

    /**
     * ISO 8601 timestamp when user account was created
     */
    createdAt?: string | null;

    /**
     * Developer ranking data (only present when fetched from devrank endpoints)
     */
    devrank?: User.Devrank;

    /**
     * User display name
     */
    displayName?: string | null;

    /**
     * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
     * instead for intelligent email selection)
     */
    emails?: Array<string> | null;

    /**
     * ISO 8601 timestamp when metadata was extracted
     */
    embeddedAt?: string | null;

    /**
     * Users who follow this user (when includeAttributes.followers is specified)
     */
    followers?: User.Followers;

    /**
     * Users who follow this user (when includeAttributes.followers is specified)
     */
    following?: User.Following;

    /**
     * User location
     */
    location?: string | null;

    /**
     * Repositories this user starred (when includeAttributes.stars is specified)
     */
    owns?: User.Owns;

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
    socialAccounts?: Array<User.SocialAccount> | null;

    /**
     * Repositories this user starred (when includeAttributes.stars is specified)
     */
    stars?: User.Stars;

    /**
     * ISO 8601 timestamp when user was last updated
     */
    updatedAt?: string | null;

    /**
     * User website URL
     */
    websiteUrl?: string | null;
  }

  export namespace User {
    /**
     * Repositories this user starred (when includeAttributes.stars is specified)
     */
    export interface Contributes {
      /**
       * Array of repository objects
       */
      edges: Array<Contributes.Edge>;

      /**
       * Pagination information
       */
      pageInfo: Contributes.PageInfo;
    }

    export namespace Contributes {
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
        contributors?: Edge.Contributors;

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
        owner?: Edge.Owner;

        /**
         * Devrank data for the repository owner (when includeAttributes.ownerDevrank =
         * true)
         */
        ownerDevrank?: Edge.OwnerDevrank;

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
        starrers?: Edge.Starrers;

        /**
         * ISO 8601 timestamp when repository was last updated
         */
        updatedAt?: string | null;
      }

      export namespace Edge {
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
             * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
             * instead for intelligent email selection)
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
           * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
           * instead for intelligent email selection)
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
             * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
             * instead for intelligent email selection)
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

    /**
     * Developer ranking data (only present when fetched from devrank endpoints)
     */
    export interface Devrank {
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
    export interface Followers {
      /**
       * Array of user objects
       */
      edges: Array<Followers.Edge>;

      /**
       * Pagination information
       */
      pageInfo: Followers.PageInfo;
    }

    export namespace Followers {
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
         * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
         * instead for intelligent email selection)
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
     * Users who follow this user (when includeAttributes.followers is specified)
     */
    export interface Following {
      /**
       * Array of user objects
       */
      edges: Array<Following.Edge>;

      /**
       * Pagination information
       */
      pageInfo: Following.PageInfo;
    }

    export namespace Following {
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
         * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
         * instead for intelligent email selection)
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
     * Repositories this user starred (when includeAttributes.stars is specified)
     */
    export interface Owns {
      /**
       * Array of repository objects
       */
      edges: Array<Owns.Edge>;

      /**
       * Pagination information
       */
      pageInfo: Owns.PageInfo;
    }

    export namespace Owns {
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
        contributors?: Edge.Contributors;

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
        owner?: Edge.Owner;

        /**
         * Devrank data for the repository owner (when includeAttributes.ownerDevrank =
         * true)
         */
        ownerDevrank?: Edge.OwnerDevrank;

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
        starrers?: Edge.Starrers;

        /**
         * ISO 8601 timestamp when repository was last updated
         */
        updatedAt?: string | null;
      }

      export namespace Edge {
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
             * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
             * instead for intelligent email selection)
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
           * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
           * instead for intelligent email selection)
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
             * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
             * instead for intelligent email selection)
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

    export interface SocialAccount {
      provider: string;

      url: string;
    }

    /**
     * Repositories this user starred (when includeAttributes.stars is specified)
     */
    export interface Stars {
      /**
       * Array of repository objects
       */
      edges: Array<Stars.Edge>;

      /**
       * Pagination information
       */
      pageInfo: Stars.PageInfo;
    }

    export namespace Stars {
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
        contributors?: Edge.Contributors;

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
        owner?: Edge.Owner;

        /**
         * Devrank data for the repository owner (when includeAttributes.ownerDevrank =
         * true)
         */
        ownerDevrank?: Edge.OwnerDevrank;

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
        starrers?: Edge.Starrers;

        /**
         * ISO 8601 timestamp when repository was last updated
         */
        updatedAt?: string | null;
      }

      export namespace Edge {
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
             * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
             * instead for intelligent email selection)
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
           * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
           * instead for intelligent email selection)
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
             * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
             * instead for intelligent email selection)
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
  }
}

export interface SearchUserSearchResponse {
  /**
   * Number of users returned
   */
  count: number;

  /**
   * Array of user search results with relevance scores
   */
  users: Array<SearchUserSearchResponse.User>;
}

export namespace SearchUserSearchResponse {
  export interface User {
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
     * Repositories this user starred (when includeAttributes.stars is specified)
     */
    contributes?: User.Contributes;

    /**
     * ISO 8601 timestamp when user account was created
     */
    createdAt?: string | null;

    /**
     * Developer ranking data (only present when fetched from devrank endpoints)
     */
    devrank?: User.Devrank;

    /**
     * User display name
     */
    displayName?: string | null;

    /**
     * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
     * instead for intelligent email selection)
     */
    emails?: Array<string> | null;

    /**
     * ISO 8601 timestamp when metadata was extracted
     */
    embeddedAt?: string | null;

    /**
     * Users who follow this user (when includeAttributes.followers is specified)
     */
    followers?: User.Followers;

    /**
     * Users who follow this user (when includeAttributes.followers is specified)
     */
    following?: User.Following;

    /**
     * User location
     */
    location?: string | null;

    /**
     * Repositories this user starred (when includeAttributes.stars is specified)
     */
    owns?: User.Owns;

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
    socialAccounts?: Array<User.SocialAccount> | null;

    /**
     * Repositories this user starred (when includeAttributes.stars is specified)
     */
    stars?: User.Stars;

    /**
     * ISO 8601 timestamp when user was last updated
     */
    updatedAt?: string | null;

    /**
     * User website URL
     */
    websiteUrl?: string | null;
  }

  export namespace User {
    /**
     * Repositories this user starred (when includeAttributes.stars is specified)
     */
    export interface Contributes {
      /**
       * Array of repository objects
       */
      edges: Array<Contributes.Edge>;

      /**
       * Pagination information
       */
      pageInfo: Contributes.PageInfo;
    }

    export namespace Contributes {
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
        contributors?: Edge.Contributors;

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
        owner?: Edge.Owner;

        /**
         * Devrank data for the repository owner (when includeAttributes.ownerDevrank =
         * true)
         */
        ownerDevrank?: Edge.OwnerDevrank;

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
        starrers?: Edge.Starrers;

        /**
         * ISO 8601 timestamp when repository was last updated
         */
        updatedAt?: string | null;
      }

      export namespace Edge {
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
             * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
             * instead for intelligent email selection)
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
           * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
           * instead for intelligent email selection)
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
             * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
             * instead for intelligent email selection)
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

    /**
     * Developer ranking data (only present when fetched from devrank endpoints)
     */
    export interface Devrank {
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
    export interface Followers {
      /**
       * Array of user objects
       */
      edges: Array<Followers.Edge>;

      /**
       * Pagination information
       */
      pageInfo: Followers.PageInfo;
    }

    export namespace Followers {
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
         * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
         * instead for intelligent email selection)
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
     * Users who follow this user (when includeAttributes.followers is specified)
     */
    export interface Following {
      /**
       * Array of user objects
       */
      edges: Array<Following.Edge>;

      /**
       * Pagination information
       */
      pageInfo: Following.PageInfo;
    }

    export namespace Following {
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
         * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
         * instead for intelligent email selection)
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
     * Repositories this user starred (when includeAttributes.stars is specified)
     */
    export interface Owns {
      /**
       * Array of repository objects
       */
      edges: Array<Owns.Edge>;

      /**
       * Pagination information
       */
      pageInfo: Owns.PageInfo;
    }

    export namespace Owns {
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
        contributors?: Edge.Contributors;

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
        owner?: Edge.Owner;

        /**
         * Devrank data for the repository owner (when includeAttributes.ownerDevrank =
         * true)
         */
        ownerDevrank?: Edge.OwnerDevrank;

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
        starrers?: Edge.Starrers;

        /**
         * ISO 8601 timestamp when repository was last updated
         */
        updatedAt?: string | null;
      }

      export namespace Edge {
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
             * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
             * instead for intelligent email selection)
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
           * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
           * instead for intelligent email selection)
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
             * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
             * instead for intelligent email selection)
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

    export interface SocialAccount {
      provider: string;

      url: string;
    }

    /**
     * Repositories this user starred (when includeAttributes.stars is specified)
     */
    export interface Stars {
      /**
       * Array of repository objects
       */
      edges: Array<Stars.Edge>;

      /**
       * Pagination information
       */
      pageInfo: Stars.PageInfo;
    }

    export namespace Stars {
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
        contributors?: Edge.Contributors;

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
        owner?: Edge.Owner;

        /**
         * Devrank data for the repository owner (when includeAttributes.ownerDevrank =
         * true)
         */
        ownerDevrank?: Edge.OwnerDevrank;

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
        starrers?: Edge.Starrers;

        /**
         * ISO 8601 timestamp when repository was last updated
         */
        updatedAt?: string | null;
      }

      export namespace Edge {
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
             * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
             * instead for intelligent email selection)
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
           * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
           * instead for intelligent email selection)
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
             * @deprecated Email addresses (DEPRECATED: Use /api/users/best-email endpoint
             * instead for intelligent email selection)
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
  }
}

export interface SearchUserNaturalLanguageParams {
  /**
   * Natural language query describing the users you want to find
   */
  query: string;

  /**
   * Optional graph relationships to include (followers, following, stars, owns,
   * contributes)
   */
  includeAttributes?: SearchUserNaturalLanguageParams.IncludeAttributes;

  /**
   * Maximum number of results to return (default: 100, max: 1000)
   */
  maxResults?: number;
}

export namespace SearchUserNaturalLanguageParams {
  /**
   * Optional graph relationships to include (followers, following, stars, owns,
   * contributes)
   */
  export interface IncludeAttributes {
    /**
     * Include contributed repositories with cursor pagination
     */
    contributes?: IncludeAttributes.Contributes;

    /**
     * Include devrank data for the user
     */
    devrank?: boolean;

    /**
     * Include followers with cursor pagination
     */
    followers?: IncludeAttributes.Followers;

    /**
     * Include users this user follows with cursor pagination
     */
    following?: IncludeAttributes.Following;

    /**
     * Include owned repositories with cursor pagination
     */
    owns?: IncludeAttributes.Owns;

    /**
     * Include starred repositories with cursor pagination
     */
    stars?: IncludeAttributes.Stars;
  }

  export namespace IncludeAttributes {
    /**
     * Include contributed repositories with cursor pagination
     */
    export interface Contributes {
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
      filters?:
        | Contributes.UnionMember0
        | Contributes.UnionMember1
        | Contributes.UnionMember2
        | Contributes.UnionMember3;
    }

    export namespace Contributes {
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

      export interface UnionMember3 {
        filters: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1 | UnionMember3.UnionMember2>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember3 {
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

    /**
     * Include followers with cursor pagination
     */
    export interface Followers {
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
      filters?:
        | Followers.UnionMember0
        | Followers.UnionMember1
        | Followers.UnionMember2
        | Followers.UnionMember3;
    }

    export namespace Followers {
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

      export interface UnionMember3 {
        filters: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1 | UnionMember3.UnionMember2>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember3 {
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

    /**
     * Include users this user follows with cursor pagination
     */
    export interface Following {
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
      filters?:
        | Following.UnionMember0
        | Following.UnionMember1
        | Following.UnionMember2
        | Following.UnionMember3;
    }

    export namespace Following {
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

      export interface UnionMember3 {
        filters: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1 | UnionMember3.UnionMember2>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember3 {
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

    /**
     * Include owned repositories with cursor pagination
     */
    export interface Owns {
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
      filters?: Owns.UnionMember0 | Owns.UnionMember1 | Owns.UnionMember2 | Owns.UnionMember3;
    }

    export namespace Owns {
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

      export interface UnionMember3 {
        filters: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1 | UnionMember3.UnionMember2>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember3 {
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

    /**
     * Include starred repositories with cursor pagination
     */
    export interface Stars {
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
      filters?: Stars.UnionMember0 | Stars.UnionMember1 | Stars.UnionMember2 | Stars.UnionMember3;
    }

    export namespace Stars {
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

      export interface UnionMember3 {
        filters: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1 | UnionMember3.UnionMember2>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember3 {
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
}

export interface SearchUserSearchParams {
  /**
   * Full-text search query across user fields. Searches: login, displayName, bio,
   * company, location, emails, resolvedCountry, resolvedState, resolvedCity (with
   * login weighted 2x)
   */
  query: string;

  /**
   * Optional filters for narrowing search results. Supports filtering on: githubId,
   * login, displayName, bio, company, location, emails, resolvedCountry,
   * resolvedState, resolvedCity.
   *
   * Full-text searchable fields (automatically searched): login, displayName, bio,
   * company, location, emails, resolvedCountry, resolvedState, resolvedCity.
   *
   * Filter structure:
   *
   * - Field filters: { field: "fieldName", op: "Eq"|"In", value: string|string[] }
   * - Composite filters: { op: "And"|"Or", filters: [...] }
   *
   * Supported operators:
   *
   * - String fields: Eq (exact match), In (one of array)
   * - Use And/Or to combine multiple filters
   */
  filters?: SearchUserSearchParams.GenericFieldFilter | SearchUserSearchParams.CompositeFilter | null;

  /**
   * Optional graph relationships to include (followers, following, stars, owns,
   * contributes)
   */
  includeAttributes?: SearchUserSearchParams.IncludeAttributes;

  /**
   * Maximum number of results to return (default: 100, max: 1000)
   */
  maxResults?: number;
}

export namespace SearchUserSearchParams {
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
   * Optional graph relationships to include (followers, following, stars, owns,
   * contributes)
   */
  export interface IncludeAttributes {
    /**
     * Include contributed repositories with cursor pagination
     */
    contributes?: IncludeAttributes.Contributes;

    /**
     * Include devrank data for the user
     */
    devrank?: boolean;

    /**
     * Include followers with cursor pagination
     */
    followers?: IncludeAttributes.Followers;

    /**
     * Include users this user follows with cursor pagination
     */
    following?: IncludeAttributes.Following;

    /**
     * Include owned repositories with cursor pagination
     */
    owns?: IncludeAttributes.Owns;

    /**
     * Include starred repositories with cursor pagination
     */
    stars?: IncludeAttributes.Stars;
  }

  export namespace IncludeAttributes {
    /**
     * Include contributed repositories with cursor pagination
     */
    export interface Contributes {
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
      filters?:
        | Contributes.UnionMember0
        | Contributes.UnionMember1
        | Contributes.UnionMember2
        | Contributes.UnionMember3;
    }

    export namespace Contributes {
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

      export interface UnionMember3 {
        filters: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1 | UnionMember3.UnionMember2>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember3 {
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

    /**
     * Include followers with cursor pagination
     */
    export interface Followers {
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
      filters?:
        | Followers.UnionMember0
        | Followers.UnionMember1
        | Followers.UnionMember2
        | Followers.UnionMember3;
    }

    export namespace Followers {
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

      export interface UnionMember3 {
        filters: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1 | UnionMember3.UnionMember2>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember3 {
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

    /**
     * Include users this user follows with cursor pagination
     */
    export interface Following {
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
      filters?:
        | Following.UnionMember0
        | Following.UnionMember1
        | Following.UnionMember2
        | Following.UnionMember3;
    }

    export namespace Following {
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

      export interface UnionMember3 {
        filters: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1 | UnionMember3.UnionMember2>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember3 {
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

    /**
     * Include owned repositories with cursor pagination
     */
    export interface Owns {
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
      filters?: Owns.UnionMember0 | Owns.UnionMember1 | Owns.UnionMember2 | Owns.UnionMember3;
    }

    export namespace Owns {
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

      export interface UnionMember3 {
        filters: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1 | UnionMember3.UnionMember2>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember3 {
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

    /**
     * Include starred repositories with cursor pagination
     */
    export interface Stars {
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
      filters?: Stars.UnionMember0 | Stars.UnionMember1 | Stars.UnionMember2 | Stars.UnionMember3;
    }

    export namespace Stars {
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

      export interface UnionMember3 {
        filters: Array<UnionMember3.UnionMember0 | UnionMember3.UnionMember1 | UnionMember3.UnionMember2>;

        /**
         * Logical operator to combine filters
         */
        op: 'And' | 'Or';
      }

      export namespace UnionMember3 {
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
}

export declare namespace SearchUsers {
  export {
    type SearchUserNaturalLanguageResponse as SearchUserNaturalLanguageResponse,
    type SearchUserSearchResponse as SearchUserSearchResponse,
    type SearchUserNaturalLanguageParams as SearchUserNaturalLanguageParams,
    type SearchUserSearchParams as SearchUserSearchParams,
  };
}
