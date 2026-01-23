// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RawRepos extends APIResource {
  /**
   * Fetch GitHub repositories by their node IDs. Supports batch requests (1-100
   * IDs). Requires RAW service. Credits: 1 per result returned + graph relationship
   * credits if includeAttributes is specified.
   *
   * @example
   * ```ts
   * const rawRepo = await client.rawRepos.retrieve({
   *   githubIds: [
   *     'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
   *     'MDEwOlJlcG9zaXRvcnkxMDI3',
   *   ],
   * });
   * ```
   */
  retrieve(body: RawRepoRetrieveParams, options?: RequestOptions): APIPromise<RawRepoRetrieveResponse> {
    return this._client.post('/raw/repos', { body, ...options });
  }

  /**
   * Fetch GitHub repositories by their full names (owner/repo format). Supports
   * batch requests (1-100 repos). Requires RAW service. Credits: 1 per result
   * returned.
   *
   * @example
   * ```ts
   * const response = await client.rawRepos.byFullname({
   *   fullNames: ['octocat/Hello-World', 'torvalds/linux'],
   * });
   * ```
   */
  byFullname(body: RawRepoByFullnameParams, options?: RequestOptions): APIPromise<RawRepoByFullnameResponse> {
    return this._client.post('/raw/repos/by-fullname', { body, ...options });
  }

  /**
   * Count repositories in the database matching filters. Counts are capped at
   * minimum (10k) and maximum (1M). Requires RAW service. Credits: 1 per request.
   *
   * @example
   * ```ts
   * const response = await client.rawRepos.count({
   *   filters: {
   *     field: 'field',
   *     op: 'Eq',
   *     value: 'string',
   *   },
   * });
   * ```
   */
  count(body: RawRepoCountParams, options?: RequestOptions): APIPromise<RawRepoCountResponse> {
    return this._client.post('/raw/repos/count', { body, ...options });
  }

  /**
   * Get graph relationships for a repository (stars, contributes, owns). Supports
   * pagination and includeAttributes. Requires RAW service. Credits: 1 per result +
   * graph relationship credits if includeAttributes is specified.
   *
   * @example
   * ```ts
   * const response = await client.rawRepos.graph('stars', {
   *   id: 'id',
   * });
   * ```
   */
  graph(
    relationship: 'stars' | 'contributes' | 'owns',
    params: RawRepoGraphParams,
    options?: RequestOptions,
  ): APIPromise<RawRepoGraphResponse> {
    const { id, ...body } = params;
    return this._client.post(path`/raw/repos/${id}/graph/${relationship}`, { body, ...options });
  }
}

export interface RawRepoRetrieveResponse {
  /**
   * Number of repositories returned
   */
  count: number;

  /**
   * Array of repository objects
   */
  repositories: Array<RawRepoRetrieveResponse.Repository>;
}

export namespace RawRepoRetrieveResponse {
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
}

export interface RawRepoByFullnameResponse {
  /**
   * Number of repositories returned
   */
  count: number;

  /**
   * Array of repository objects
   */
  repositories: Array<RawRepoByFullnameResponse.Repository>;
}

export namespace RawRepoByFullnameResponse {
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
}

export interface RawRepoCountResponse {
  /**
   * Number of matching records (may be capped or floored)
   */
  count: number;

  /**
   * True if count was capped at maximum or floored at minimum
   */
  truncated?: boolean;
}

export type RawRepoGraphResponse =
  | RawRepoGraphResponse.RepoStarsResponse
  | RawRepoGraphResponse.RepoContributesResponse
  | RawRepoGraphResponse.RepoOwnsResponse;

export namespace RawRepoGraphResponse {
  export interface RepoStarsResponse {
    /**
     * Pagination information
     */
    pageInfo: RepoStarsResponse.PageInfo;

    /**
     * Array of users who starred this repository (with optional graph relationships)
     */
    users: Array<RepoStarsResponse.User>;
  }

  export namespace RepoStarsResponse {
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
    }
  }

  export interface RepoContributesResponse {
    /**
     * Pagination information
     */
    pageInfo: RepoContributesResponse.PageInfo;

    /**
     * Array of users who contribute to this repository (with optional graph
     * relationships)
     */
    users: Array<RepoContributesResponse.User>;
  }

  export namespace RepoContributesResponse {
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
    }
  }

  export interface RepoOwnsResponse {
    /**
     * Pagination information
     */
    pageInfo: RepoOwnsResponse.PageInfo;

    /**
     * Array of users who own this repository (typically 1, with optional graph
     * relationships)
     */
    users: Array<RepoOwnsResponse.User>;
  }

  export namespace RepoOwnsResponse {
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
    }
  }
}

export interface RawRepoRetrieveParams {
  /**
   * Array of GitHub node IDs (1-100)
   */
  githubIds: Array<string>;

  /**
   * Optional graph relationships to include (owner, contributors, starrers)
   */
  includeAttributes?: RawRepoRetrieveParams.IncludeAttributes;
}

export namespace RawRepoRetrieveParams {
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
}

export interface RawRepoByFullnameParams {
  /**
   * Array of repository full names in "owner/name" format (1-100)
   */
  fullNames: Array<string>;

  /**
   * Optional graph relationships to include (owner, contributors, starrers)
   */
  includeAttributes?: RawRepoByFullnameParams.IncludeAttributes;
}

export namespace RawRepoByFullnameParams {
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
}

export interface RawRepoCountParams {
  /**
   * Filters to apply (required)
   */
  filters:
    | RawRepoCountParams.UnionMember0
    | RawRepoCountParams.UnionMember1
    | RawRepoCountParams.UnionMember2;
}

export namespace RawRepoCountParams {
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

export interface RawRepoGraphParams {
  /**
   * Path param: GitHub node ID or BountyLab ID of the repository
   */
  id: string;

  /**
   * Body param: Cursor for pagination (opaque base64-encoded string from previous
   * response)
   */
  after?: string;

  /**
   * Body param: Number of items to return (default: 100, max: 100)
   */
  first?: number;

  /**
   * Body param: Optional graph relationships to include. Use user attributes
   * (followers, following, owns, stars, contributes) for user-returning
   * relationships, or repo attributes (owner, contributors, starrers) for
   * repo-returning relationships.
   */
  includeAttributes?: RawRepoGraphParams.IncludeAttributes;
}

export namespace RawRepoGraphParams {
  /**
   * Optional graph relationships to include. Use user attributes (followers,
   * following, owns, stars, contributes) for user-returning relationships, or repo
   * attributes (owner, contributors, starrers) for repo-returning relationships.
   */
  export interface IncludeAttributes {
    /**
     * Include contributed repositories with cursor pagination
     */
    contributes?: IncludeAttributes.Contributes;

    /**
     * Include repository contributors with cursor pagination
     */
    contributors?: IncludeAttributes.Contributors;

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
     * Include repository owner information
     */
    owner?: boolean;

    /**
     * Include devrank data for the repository owner
     */
    ownerDevrank?: boolean;

    /**
     * Include owned repositories with cursor pagination
     */
    owns?: IncludeAttributes.Owns;

    /**
     * Include users who starred the repository with cursor pagination
     */
    starrers?: IncludeAttributes.Starrers;

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
       * Optional filters for users. Supports fields like login, company, location,
       * resolvedCountry, resolvedState, resolvedCity. Operators: Eq, NotEq, In, NotIn,
       * Lt, Lte, Gt, Gte.
       */
      filters?: Contributes.UnionMember0 | Contributes.UnionMember1 | Contributes.UnionMember2;
    }

    export namespace Contributes {
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
       * Optional filters for users. Supports fields like login, company, location,
       * resolvedCountry, resolvedState, resolvedCity. Operators: Eq, NotEq, In, NotIn,
       * Lt, Lte, Gt, Gte.
       */
      filters?: Followers.UnionMember0 | Followers.UnionMember1 | Followers.UnionMember2;
    }

    export namespace Followers {
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
       * Optional filters for users. Supports fields like login, company, location,
       * resolvedCountry, resolvedState, resolvedCity. Operators: Eq, NotEq, In, NotIn,
       * Lt, Lte, Gt, Gte.
       */
      filters?: Following.UnionMember0 | Following.UnionMember1 | Following.UnionMember2;
    }

    export namespace Following {
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
       * Optional filters for users. Supports fields like login, company, location,
       * resolvedCountry, resolvedState, resolvedCity. Operators: Eq, NotEq, In, NotIn,
       * Lt, Lte, Gt, Gte.
       */
      filters?: Owns.UnionMember0 | Owns.UnionMember1 | Owns.UnionMember2;
    }

    export namespace Owns {
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
       * Optional filters for users. Supports fields like login, company, location,
       * resolvedCountry, resolvedState, resolvedCity. Operators: Eq, NotEq, In, NotIn,
       * Lt, Lte, Gt, Gte.
       */
      filters?: Stars.UnionMember0 | Stars.UnionMember1 | Stars.UnionMember2;
    }

    export namespace Stars {
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
}

export declare namespace RawRepos {
  export {
    type RawRepoRetrieveResponse as RawRepoRetrieveResponse,
    type RawRepoByFullnameResponse as RawRepoByFullnameResponse,
    type RawRepoCountResponse as RawRepoCountResponse,
    type RawRepoGraphResponse as RawRepoGraphResponse,
    type RawRepoRetrieveParams as RawRepoRetrieveParams,
    type RawRepoByFullnameParams as RawRepoByFullnameParams,
    type RawRepoCountParams as RawRepoCountParams,
    type RawRepoGraphParams as RawRepoGraphParams,
  };
}
