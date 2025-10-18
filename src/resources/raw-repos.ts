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
    return this._client.post('/api/raw/repos', { body, ...options });
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
    return this._client.post('/api/raw/repos/by-fullname', { body, ...options });
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
    return this._client.post(path`/api/raw/repos/${id}/graph/${relationship}`, { body, ...options });
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
    }
  }
}

export type RawRepoGraphParams = RawRepoGraphParams.Variant0 | RawRepoGraphParams.Variant1;

export declare namespace RawRepoGraphParams {
  export interface Variant0 {
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
     * Body param: Optional graph relationships to include (followers, following,
     * stars, owns, contributes)
     */
    includeAttributes?: Variant0.IncludeAttributes;
  }

  export namespace Variant0 {
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
      }
    }
  }

  export interface Variant1 {
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
     * Body param: Optional graph relationships to include (owner, contributors,
     * starrers)
     */
    includeAttributes?: Variant1.IncludeAttributes;
  }

  export namespace Variant1 {
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
      }
    }
  }
}

export declare namespace RawRepos {
  export {
    type RawRepoRetrieveResponse as RawRepoRetrieveResponse,
    type RawRepoByFullnameResponse as RawRepoByFullnameResponse,
    type RawRepoGraphResponse as RawRepoGraphResponse,
    type RawRepoRetrieveParams as RawRepoRetrieveParams,
    type RawRepoByFullnameParams as RawRepoByFullnameParams,
    type RawRepoGraphParams as RawRepoGraphParams,
  };
}
