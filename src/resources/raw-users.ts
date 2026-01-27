// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RawUsers extends APIResource {
  /**
   * Fetch GitHub users by their node IDs. Supports batch requests (1-100 IDs).
   * Requires RAW service. Credits: 1 per result returned + graph relationship
   * credits if includeAttributes is specified.
   *
   * @example
   * ```ts
   * const rawUser = await client.rawUsers.retrieve({
   *   githubIds: ['MDQ6VXNlcjU4MzIzMQ==', 'MDQ6VXNlcjE='],
   * });
   * ```
   */
  retrieve(body: RawUserRetrieveParams, options?: RequestOptions): APIPromise<RawUserRetrieveResponse> {
    return this._client.post('/raw/users', { body, ...options });
  }

  /**
   * Fetch GitHub users by their usernames (login). Supports batch requests (1-100
   * logins). Requires RAW service. Credits: 1 per result returned.
   *
   * @example
   * ```ts
   * const response = await client.rawUsers.byLogin({
   *   logins: ['octocat', 'torvalds'],
   * });
   * ```
   */
  byLogin(body: RawUserByLoginParams, options?: RequestOptions): APIPromise<RawUserByLoginResponse> {
    return this._client.post('/raw/users/by-login', { body, ...options });
  }

  /**
   * Count users in the database matching filters. Counts are capped at minimum (10k)
   * and maximum (1M). Requires RAW service. Credits: 1 per request.
   *
   * @example
   * ```ts
   * const response = await client.rawUsers.count({
   *   filters: {
   *     field: 'field',
   *     op: 'Eq',
   *     value: 'string',
   *   },
   * });
   * ```
   */
  count(body: RawUserCountParams, options?: RequestOptions): APIPromise<RawUserCountResponse> {
    return this._client.post('/raw/users/count', { body, ...options });
  }

  /**
   * Get graph relationships for a user (followers, following, owns, stars,
   * contributes). Supports pagination and includeAttributes. Requires RAW service.
   * Credits: 1 per result + graph relationship credits if includeAttributes is
   * specified.
   *
   * @example
   * ```ts
   * const response = await client.rawUsers.graph('followers', {
   *   id: 'id',
   * });
   * ```
   */
  graph(
    relationship: 'followers' | 'following' | 'owns' | 'stars' | 'contributes',
    params: RawUserGraphParams,
    options?: RequestOptions,
  ): APIPromise<RawUserGraphResponse> {
    const { id, ...body } = params;
    return this._client.post(path`/raw/users/${id}/graph/${relationship}`, { body, ...options });
  }
}

export interface RawUserRetrieveResponse {
  /**
   * Number of users returned
   */
  count: number;

  /**
   * Array of user objects
   */
  users: Array<RawUserRetrieveResponse.User>;
}

export namespace RawUserRetrieveResponse {
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
     * Developer ranking data (only present when includeAttributes.devrank = true)
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
     * LinkedIn professional profile data (only present when
     * includeAttributes.professional = true)
     */
    professional?: User.Professional;

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
         * LinkedIn professional profile data (only present when
         * includeAttributes.professional = true)
         */
        ownerProfessional?: Edge.OwnerProfessional;

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
         * LinkedIn professional profile data (only present when
         * includeAttributes.professional = true)
         */
        export interface OwnerProfessional {
          /**
           * Professional awards
           */
          awards: Array<string> | null;

          /**
           * Professional certifications
           */
          certifications: Array<string> | null;

          /**
           * City
           */
          city: string | null;

          /**
           * Number of LinkedIn connections
           */
          connectionsCount: number | null;

          /**
           * Country
           */
          country: string | null;

          /**
           * Current industry sector
           */
          currentIndustry: string | null;

          /**
           * Departments worked in
           */
          departments: Array<string> | null;

          /**
           * Education history
           */
          education: Array<OwnerProfessional.Education>;

          /**
           * Work experience history
           */
          experience: Array<OwnerProfessional.Experience>;

          /**
           * Areas of expertise
           */
          expertise: Array<string> | null;

          /**
           * First name
           */
          firstName: string | null;

          /**
           * Number of LinkedIn followers
           */
          followerCount: number | null;

          /**
           * Functional area (e.g., Engineering, Product)
           */
          functionalArea: string | null;

          /**
           * Professional headline
           */
          headline: string | null;

          /**
           * Languages spoken
           */
          languages: Array<string> | null;

          /**
           * Last name
           */
          lastName: string | null;

          /**
           * LinkedIn profile URL
           */
          linkedinUrl: string;

          /**
           * Full location string
           */
          location: string | null;

          /**
           * Professional organization memberships
           */
          memberships: Array<string> | null;

          /**
           * Current organization/company
           */
          organization: string | null;

          /**
           * Patents held
           */
          patents: Array<string> | null;

          /**
           * Previous industries worked in
           */
          priorIndustries: Array<string> | null;

          /**
           * Publications authored
           */
          publications: Array<string> | null;

          /**
           * Seniority classification
           */
          seniority: string | null;

          /**
           * Seniority level (e.g., Senior, Manager)
           */
          seniorityLevel: string | null;

          /**
           * State or province
           */
          state: string | null;

          /**
           * Current job title
           */
          title: string | null;
        }

        export namespace OwnerProfessional {
          export interface Education {
            /**
             * Name of the educational institution
             */
            campus: string | null;

            /**
             * End date (YYYY-MM-DD format)
             */
            endDate: string | null;

            /**
             * Field of study or degree program
             */
            major: string | null;

            /**
             * Area of specialization
             */
            specialization: string | null;

            /**
             * Start date (YYYY-MM-DD format)
             */
            startDate: string | null;
          }

          export interface Experience {
            /**
             * Company or organization name
             */
            company: string | null;

            /**
             * End date (YYYY-MM-DD format, null if current)
             */
            endDate: string | null;

            /**
             * Industry sector
             */
            industry: string | null;

            /**
             * Whether this is the current position
             */
            isCurrent: boolean | null;

            /**
             * Work location
             */
            location: string | null;

            /**
             * Start date (YYYY-MM-DD format)
             */
            startDate: string | null;

            /**
             * Description of role and responsibilities
             */
            summary: string | null;

            /**
             * Job title or position
             */
            title: string | null;
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
     * Developer ranking data (only present when includeAttributes.devrank = true)
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
         * LinkedIn professional profile data (only present when
         * includeAttributes.professional = true)
         */
        ownerProfessional?: Edge.OwnerProfessional;

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
         * LinkedIn professional profile data (only present when
         * includeAttributes.professional = true)
         */
        export interface OwnerProfessional {
          /**
           * Professional awards
           */
          awards: Array<string> | null;

          /**
           * Professional certifications
           */
          certifications: Array<string> | null;

          /**
           * City
           */
          city: string | null;

          /**
           * Number of LinkedIn connections
           */
          connectionsCount: number | null;

          /**
           * Country
           */
          country: string | null;

          /**
           * Current industry sector
           */
          currentIndustry: string | null;

          /**
           * Departments worked in
           */
          departments: Array<string> | null;

          /**
           * Education history
           */
          education: Array<OwnerProfessional.Education>;

          /**
           * Work experience history
           */
          experience: Array<OwnerProfessional.Experience>;

          /**
           * Areas of expertise
           */
          expertise: Array<string> | null;

          /**
           * First name
           */
          firstName: string | null;

          /**
           * Number of LinkedIn followers
           */
          followerCount: number | null;

          /**
           * Functional area (e.g., Engineering, Product)
           */
          functionalArea: string | null;

          /**
           * Professional headline
           */
          headline: string | null;

          /**
           * Languages spoken
           */
          languages: Array<string> | null;

          /**
           * Last name
           */
          lastName: string | null;

          /**
           * LinkedIn profile URL
           */
          linkedinUrl: string;

          /**
           * Full location string
           */
          location: string | null;

          /**
           * Professional organization memberships
           */
          memberships: Array<string> | null;

          /**
           * Current organization/company
           */
          organization: string | null;

          /**
           * Patents held
           */
          patents: Array<string> | null;

          /**
           * Previous industries worked in
           */
          priorIndustries: Array<string> | null;

          /**
           * Publications authored
           */
          publications: Array<string> | null;

          /**
           * Seniority classification
           */
          seniority: string | null;

          /**
           * Seniority level (e.g., Senior, Manager)
           */
          seniorityLevel: string | null;

          /**
           * State or province
           */
          state: string | null;

          /**
           * Current job title
           */
          title: string | null;
        }

        export namespace OwnerProfessional {
          export interface Education {
            /**
             * Name of the educational institution
             */
            campus: string | null;

            /**
             * End date (YYYY-MM-DD format)
             */
            endDate: string | null;

            /**
             * Field of study or degree program
             */
            major: string | null;

            /**
             * Area of specialization
             */
            specialization: string | null;

            /**
             * Start date (YYYY-MM-DD format)
             */
            startDate: string | null;
          }

          export interface Experience {
            /**
             * Company or organization name
             */
            company: string | null;

            /**
             * End date (YYYY-MM-DD format, null if current)
             */
            endDate: string | null;

            /**
             * Industry sector
             */
            industry: string | null;

            /**
             * Whether this is the current position
             */
            isCurrent: boolean | null;

            /**
             * Work location
             */
            location: string | null;

            /**
             * Start date (YYYY-MM-DD format)
             */
            startDate: string | null;

            /**
             * Description of role and responsibilities
             */
            summary: string | null;

            /**
             * Job title or position
             */
            title: string | null;
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
     * LinkedIn professional profile data (only present when
     * includeAttributes.professional = true)
     */
    export interface Professional {
      /**
       * Professional awards
       */
      awards: Array<string> | null;

      /**
       * Professional certifications
       */
      certifications: Array<string> | null;

      /**
       * City
       */
      city: string | null;

      /**
       * Number of LinkedIn connections
       */
      connectionsCount: number | null;

      /**
       * Country
       */
      country: string | null;

      /**
       * Current industry sector
       */
      currentIndustry: string | null;

      /**
       * Departments worked in
       */
      departments: Array<string> | null;

      /**
       * Education history
       */
      education: Array<Professional.Education>;

      /**
       * Work experience history
       */
      experience: Array<Professional.Experience>;

      /**
       * Areas of expertise
       */
      expertise: Array<string> | null;

      /**
       * First name
       */
      firstName: string | null;

      /**
       * Number of LinkedIn followers
       */
      followerCount: number | null;

      /**
       * Functional area (e.g., Engineering, Product)
       */
      functionalArea: string | null;

      /**
       * Professional headline
       */
      headline: string | null;

      /**
       * Languages spoken
       */
      languages: Array<string> | null;

      /**
       * Last name
       */
      lastName: string | null;

      /**
       * LinkedIn profile URL
       */
      linkedinUrl: string;

      /**
       * Full location string
       */
      location: string | null;

      /**
       * Professional organization memberships
       */
      memberships: Array<string> | null;

      /**
       * Current organization/company
       */
      organization: string | null;

      /**
       * Patents held
       */
      patents: Array<string> | null;

      /**
       * Previous industries worked in
       */
      priorIndustries: Array<string> | null;

      /**
       * Publications authored
       */
      publications: Array<string> | null;

      /**
       * Seniority classification
       */
      seniority: string | null;

      /**
       * Seniority level (e.g., Senior, Manager)
       */
      seniorityLevel: string | null;

      /**
       * State or province
       */
      state: string | null;

      /**
       * Current job title
       */
      title: string | null;
    }

    export namespace Professional {
      export interface Education {
        /**
         * Name of the educational institution
         */
        campus: string | null;

        /**
         * End date (YYYY-MM-DD format)
         */
        endDate: string | null;

        /**
         * Field of study or degree program
         */
        major: string | null;

        /**
         * Area of specialization
         */
        specialization: string | null;

        /**
         * Start date (YYYY-MM-DD format)
         */
        startDate: string | null;
      }

      export interface Experience {
        /**
         * Company or organization name
         */
        company: string | null;

        /**
         * End date (YYYY-MM-DD format, null if current)
         */
        endDate: string | null;

        /**
         * Industry sector
         */
        industry: string | null;

        /**
         * Whether this is the current position
         */
        isCurrent: boolean | null;

        /**
         * Work location
         */
        location: string | null;

        /**
         * Start date (YYYY-MM-DD format)
         */
        startDate: string | null;

        /**
         * Description of role and responsibilities
         */
        summary: string | null;

        /**
         * Job title or position
         */
        title: string | null;
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
         * LinkedIn professional profile data (only present when
         * includeAttributes.professional = true)
         */
        ownerProfessional?: Edge.OwnerProfessional;

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
         * LinkedIn professional profile data (only present when
         * includeAttributes.professional = true)
         */
        export interface OwnerProfessional {
          /**
           * Professional awards
           */
          awards: Array<string> | null;

          /**
           * Professional certifications
           */
          certifications: Array<string> | null;

          /**
           * City
           */
          city: string | null;

          /**
           * Number of LinkedIn connections
           */
          connectionsCount: number | null;

          /**
           * Country
           */
          country: string | null;

          /**
           * Current industry sector
           */
          currentIndustry: string | null;

          /**
           * Departments worked in
           */
          departments: Array<string> | null;

          /**
           * Education history
           */
          education: Array<OwnerProfessional.Education>;

          /**
           * Work experience history
           */
          experience: Array<OwnerProfessional.Experience>;

          /**
           * Areas of expertise
           */
          expertise: Array<string> | null;

          /**
           * First name
           */
          firstName: string | null;

          /**
           * Number of LinkedIn followers
           */
          followerCount: number | null;

          /**
           * Functional area (e.g., Engineering, Product)
           */
          functionalArea: string | null;

          /**
           * Professional headline
           */
          headline: string | null;

          /**
           * Languages spoken
           */
          languages: Array<string> | null;

          /**
           * Last name
           */
          lastName: string | null;

          /**
           * LinkedIn profile URL
           */
          linkedinUrl: string;

          /**
           * Full location string
           */
          location: string | null;

          /**
           * Professional organization memberships
           */
          memberships: Array<string> | null;

          /**
           * Current organization/company
           */
          organization: string | null;

          /**
           * Patents held
           */
          patents: Array<string> | null;

          /**
           * Previous industries worked in
           */
          priorIndustries: Array<string> | null;

          /**
           * Publications authored
           */
          publications: Array<string> | null;

          /**
           * Seniority classification
           */
          seniority: string | null;

          /**
           * Seniority level (e.g., Senior, Manager)
           */
          seniorityLevel: string | null;

          /**
           * State or province
           */
          state: string | null;

          /**
           * Current job title
           */
          title: string | null;
        }

        export namespace OwnerProfessional {
          export interface Education {
            /**
             * Name of the educational institution
             */
            campus: string | null;

            /**
             * End date (YYYY-MM-DD format)
             */
            endDate: string | null;

            /**
             * Field of study or degree program
             */
            major: string | null;

            /**
             * Area of specialization
             */
            specialization: string | null;

            /**
             * Start date (YYYY-MM-DD format)
             */
            startDate: string | null;
          }

          export interface Experience {
            /**
             * Company or organization name
             */
            company: string | null;

            /**
             * End date (YYYY-MM-DD format, null if current)
             */
            endDate: string | null;

            /**
             * Industry sector
             */
            industry: string | null;

            /**
             * Whether this is the current position
             */
            isCurrent: boolean | null;

            /**
             * Work location
             */
            location: string | null;

            /**
             * Start date (YYYY-MM-DD format)
             */
            startDate: string | null;

            /**
             * Description of role and responsibilities
             */
            summary: string | null;

            /**
             * Job title or position
             */
            title: string | null;
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

export interface RawUserByLoginResponse {
  /**
   * Number of users returned
   */
  count: number;

  /**
   * Array of user objects
   */
  users: Array<RawUserByLoginResponse.User>;
}

export namespace RawUserByLoginResponse {
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
     * Developer ranking data (only present when includeAttributes.devrank = true)
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
     * LinkedIn professional profile data (only present when
     * includeAttributes.professional = true)
     */
    professional?: User.Professional;

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
         * LinkedIn professional profile data (only present when
         * includeAttributes.professional = true)
         */
        ownerProfessional?: Edge.OwnerProfessional;

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
         * LinkedIn professional profile data (only present when
         * includeAttributes.professional = true)
         */
        export interface OwnerProfessional {
          /**
           * Professional awards
           */
          awards: Array<string> | null;

          /**
           * Professional certifications
           */
          certifications: Array<string> | null;

          /**
           * City
           */
          city: string | null;

          /**
           * Number of LinkedIn connections
           */
          connectionsCount: number | null;

          /**
           * Country
           */
          country: string | null;

          /**
           * Current industry sector
           */
          currentIndustry: string | null;

          /**
           * Departments worked in
           */
          departments: Array<string> | null;

          /**
           * Education history
           */
          education: Array<OwnerProfessional.Education>;

          /**
           * Work experience history
           */
          experience: Array<OwnerProfessional.Experience>;

          /**
           * Areas of expertise
           */
          expertise: Array<string> | null;

          /**
           * First name
           */
          firstName: string | null;

          /**
           * Number of LinkedIn followers
           */
          followerCount: number | null;

          /**
           * Functional area (e.g., Engineering, Product)
           */
          functionalArea: string | null;

          /**
           * Professional headline
           */
          headline: string | null;

          /**
           * Languages spoken
           */
          languages: Array<string> | null;

          /**
           * Last name
           */
          lastName: string | null;

          /**
           * LinkedIn profile URL
           */
          linkedinUrl: string;

          /**
           * Full location string
           */
          location: string | null;

          /**
           * Professional organization memberships
           */
          memberships: Array<string> | null;

          /**
           * Current organization/company
           */
          organization: string | null;

          /**
           * Patents held
           */
          patents: Array<string> | null;

          /**
           * Previous industries worked in
           */
          priorIndustries: Array<string> | null;

          /**
           * Publications authored
           */
          publications: Array<string> | null;

          /**
           * Seniority classification
           */
          seniority: string | null;

          /**
           * Seniority level (e.g., Senior, Manager)
           */
          seniorityLevel: string | null;

          /**
           * State or province
           */
          state: string | null;

          /**
           * Current job title
           */
          title: string | null;
        }

        export namespace OwnerProfessional {
          export interface Education {
            /**
             * Name of the educational institution
             */
            campus: string | null;

            /**
             * End date (YYYY-MM-DD format)
             */
            endDate: string | null;

            /**
             * Field of study or degree program
             */
            major: string | null;

            /**
             * Area of specialization
             */
            specialization: string | null;

            /**
             * Start date (YYYY-MM-DD format)
             */
            startDate: string | null;
          }

          export interface Experience {
            /**
             * Company or organization name
             */
            company: string | null;

            /**
             * End date (YYYY-MM-DD format, null if current)
             */
            endDate: string | null;

            /**
             * Industry sector
             */
            industry: string | null;

            /**
             * Whether this is the current position
             */
            isCurrent: boolean | null;

            /**
             * Work location
             */
            location: string | null;

            /**
             * Start date (YYYY-MM-DD format)
             */
            startDate: string | null;

            /**
             * Description of role and responsibilities
             */
            summary: string | null;

            /**
             * Job title or position
             */
            title: string | null;
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
     * Developer ranking data (only present when includeAttributes.devrank = true)
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
         * LinkedIn professional profile data (only present when
         * includeAttributes.professional = true)
         */
        ownerProfessional?: Edge.OwnerProfessional;

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
         * LinkedIn professional profile data (only present when
         * includeAttributes.professional = true)
         */
        export interface OwnerProfessional {
          /**
           * Professional awards
           */
          awards: Array<string> | null;

          /**
           * Professional certifications
           */
          certifications: Array<string> | null;

          /**
           * City
           */
          city: string | null;

          /**
           * Number of LinkedIn connections
           */
          connectionsCount: number | null;

          /**
           * Country
           */
          country: string | null;

          /**
           * Current industry sector
           */
          currentIndustry: string | null;

          /**
           * Departments worked in
           */
          departments: Array<string> | null;

          /**
           * Education history
           */
          education: Array<OwnerProfessional.Education>;

          /**
           * Work experience history
           */
          experience: Array<OwnerProfessional.Experience>;

          /**
           * Areas of expertise
           */
          expertise: Array<string> | null;

          /**
           * First name
           */
          firstName: string | null;

          /**
           * Number of LinkedIn followers
           */
          followerCount: number | null;

          /**
           * Functional area (e.g., Engineering, Product)
           */
          functionalArea: string | null;

          /**
           * Professional headline
           */
          headline: string | null;

          /**
           * Languages spoken
           */
          languages: Array<string> | null;

          /**
           * Last name
           */
          lastName: string | null;

          /**
           * LinkedIn profile URL
           */
          linkedinUrl: string;

          /**
           * Full location string
           */
          location: string | null;

          /**
           * Professional organization memberships
           */
          memberships: Array<string> | null;

          /**
           * Current organization/company
           */
          organization: string | null;

          /**
           * Patents held
           */
          patents: Array<string> | null;

          /**
           * Previous industries worked in
           */
          priorIndustries: Array<string> | null;

          /**
           * Publications authored
           */
          publications: Array<string> | null;

          /**
           * Seniority classification
           */
          seniority: string | null;

          /**
           * Seniority level (e.g., Senior, Manager)
           */
          seniorityLevel: string | null;

          /**
           * State or province
           */
          state: string | null;

          /**
           * Current job title
           */
          title: string | null;
        }

        export namespace OwnerProfessional {
          export interface Education {
            /**
             * Name of the educational institution
             */
            campus: string | null;

            /**
             * End date (YYYY-MM-DD format)
             */
            endDate: string | null;

            /**
             * Field of study or degree program
             */
            major: string | null;

            /**
             * Area of specialization
             */
            specialization: string | null;

            /**
             * Start date (YYYY-MM-DD format)
             */
            startDate: string | null;
          }

          export interface Experience {
            /**
             * Company or organization name
             */
            company: string | null;

            /**
             * End date (YYYY-MM-DD format, null if current)
             */
            endDate: string | null;

            /**
             * Industry sector
             */
            industry: string | null;

            /**
             * Whether this is the current position
             */
            isCurrent: boolean | null;

            /**
             * Work location
             */
            location: string | null;

            /**
             * Start date (YYYY-MM-DD format)
             */
            startDate: string | null;

            /**
             * Description of role and responsibilities
             */
            summary: string | null;

            /**
             * Job title or position
             */
            title: string | null;
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
     * LinkedIn professional profile data (only present when
     * includeAttributes.professional = true)
     */
    export interface Professional {
      /**
       * Professional awards
       */
      awards: Array<string> | null;

      /**
       * Professional certifications
       */
      certifications: Array<string> | null;

      /**
       * City
       */
      city: string | null;

      /**
       * Number of LinkedIn connections
       */
      connectionsCount: number | null;

      /**
       * Country
       */
      country: string | null;

      /**
       * Current industry sector
       */
      currentIndustry: string | null;

      /**
       * Departments worked in
       */
      departments: Array<string> | null;

      /**
       * Education history
       */
      education: Array<Professional.Education>;

      /**
       * Work experience history
       */
      experience: Array<Professional.Experience>;

      /**
       * Areas of expertise
       */
      expertise: Array<string> | null;

      /**
       * First name
       */
      firstName: string | null;

      /**
       * Number of LinkedIn followers
       */
      followerCount: number | null;

      /**
       * Functional area (e.g., Engineering, Product)
       */
      functionalArea: string | null;

      /**
       * Professional headline
       */
      headline: string | null;

      /**
       * Languages spoken
       */
      languages: Array<string> | null;

      /**
       * Last name
       */
      lastName: string | null;

      /**
       * LinkedIn profile URL
       */
      linkedinUrl: string;

      /**
       * Full location string
       */
      location: string | null;

      /**
       * Professional organization memberships
       */
      memberships: Array<string> | null;

      /**
       * Current organization/company
       */
      organization: string | null;

      /**
       * Patents held
       */
      patents: Array<string> | null;

      /**
       * Previous industries worked in
       */
      priorIndustries: Array<string> | null;

      /**
       * Publications authored
       */
      publications: Array<string> | null;

      /**
       * Seniority classification
       */
      seniority: string | null;

      /**
       * Seniority level (e.g., Senior, Manager)
       */
      seniorityLevel: string | null;

      /**
       * State or province
       */
      state: string | null;

      /**
       * Current job title
       */
      title: string | null;
    }

    export namespace Professional {
      export interface Education {
        /**
         * Name of the educational institution
         */
        campus: string | null;

        /**
         * End date (YYYY-MM-DD format)
         */
        endDate: string | null;

        /**
         * Field of study or degree program
         */
        major: string | null;

        /**
         * Area of specialization
         */
        specialization: string | null;

        /**
         * Start date (YYYY-MM-DD format)
         */
        startDate: string | null;
      }

      export interface Experience {
        /**
         * Company or organization name
         */
        company: string | null;

        /**
         * End date (YYYY-MM-DD format, null if current)
         */
        endDate: string | null;

        /**
         * Industry sector
         */
        industry: string | null;

        /**
         * Whether this is the current position
         */
        isCurrent: boolean | null;

        /**
         * Work location
         */
        location: string | null;

        /**
         * Start date (YYYY-MM-DD format)
         */
        startDate: string | null;

        /**
         * Description of role and responsibilities
         */
        summary: string | null;

        /**
         * Job title or position
         */
        title: string | null;
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
         * LinkedIn professional profile data (only present when
         * includeAttributes.professional = true)
         */
        ownerProfessional?: Edge.OwnerProfessional;

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
         * LinkedIn professional profile data (only present when
         * includeAttributes.professional = true)
         */
        export interface OwnerProfessional {
          /**
           * Professional awards
           */
          awards: Array<string> | null;

          /**
           * Professional certifications
           */
          certifications: Array<string> | null;

          /**
           * City
           */
          city: string | null;

          /**
           * Number of LinkedIn connections
           */
          connectionsCount: number | null;

          /**
           * Country
           */
          country: string | null;

          /**
           * Current industry sector
           */
          currentIndustry: string | null;

          /**
           * Departments worked in
           */
          departments: Array<string> | null;

          /**
           * Education history
           */
          education: Array<OwnerProfessional.Education>;

          /**
           * Work experience history
           */
          experience: Array<OwnerProfessional.Experience>;

          /**
           * Areas of expertise
           */
          expertise: Array<string> | null;

          /**
           * First name
           */
          firstName: string | null;

          /**
           * Number of LinkedIn followers
           */
          followerCount: number | null;

          /**
           * Functional area (e.g., Engineering, Product)
           */
          functionalArea: string | null;

          /**
           * Professional headline
           */
          headline: string | null;

          /**
           * Languages spoken
           */
          languages: Array<string> | null;

          /**
           * Last name
           */
          lastName: string | null;

          /**
           * LinkedIn profile URL
           */
          linkedinUrl: string;

          /**
           * Full location string
           */
          location: string | null;

          /**
           * Professional organization memberships
           */
          memberships: Array<string> | null;

          /**
           * Current organization/company
           */
          organization: string | null;

          /**
           * Patents held
           */
          patents: Array<string> | null;

          /**
           * Previous industries worked in
           */
          priorIndustries: Array<string> | null;

          /**
           * Publications authored
           */
          publications: Array<string> | null;

          /**
           * Seniority classification
           */
          seniority: string | null;

          /**
           * Seniority level (e.g., Senior, Manager)
           */
          seniorityLevel: string | null;

          /**
           * State or province
           */
          state: string | null;

          /**
           * Current job title
           */
          title: string | null;
        }

        export namespace OwnerProfessional {
          export interface Education {
            /**
             * Name of the educational institution
             */
            campus: string | null;

            /**
             * End date (YYYY-MM-DD format)
             */
            endDate: string | null;

            /**
             * Field of study or degree program
             */
            major: string | null;

            /**
             * Area of specialization
             */
            specialization: string | null;

            /**
             * Start date (YYYY-MM-DD format)
             */
            startDate: string | null;
          }

          export interface Experience {
            /**
             * Company or organization name
             */
            company: string | null;

            /**
             * End date (YYYY-MM-DD format, null if current)
             */
            endDate: string | null;

            /**
             * Industry sector
             */
            industry: string | null;

            /**
             * Whether this is the current position
             */
            isCurrent: boolean | null;

            /**
             * Work location
             */
            location: string | null;

            /**
             * Start date (YYYY-MM-DD format)
             */
            startDate: string | null;

            /**
             * Description of role and responsibilities
             */
            summary: string | null;

            /**
             * Job title or position
             */
            title: string | null;
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

export interface RawUserCountResponse {
  /**
   * Number of matching records (may be capped or floored)
   */
  count: number;

  /**
   * True if count was capped at maximum or floored at minimum
   */
  truncated?: boolean;
}

export type RawUserGraphResponse =
  | RawUserGraphResponse.FollowersResponse
  | RawUserGraphResponse.FollowingResponse
  | RawUserGraphResponse.UserOwnsResponse
  | RawUserGraphResponse.UserStarsResponse
  | RawUserGraphResponse.UserContributesResponse;

export namespace RawUserGraphResponse {
  export interface FollowersResponse {
    /**
     * Pagination information
     */
    pageInfo: FollowersResponse.PageInfo;

    /**
     * Array of users who follow this user (with optional graph relationships)
     */
    users: Array<FollowersResponse.User>;
  }

  export namespace FollowersResponse {
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
       * Developer ranking data (only present when includeAttributes.devrank = true)
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
       * LinkedIn professional profile data (only present when
       * includeAttributes.professional = true)
       */
      professional?: User.Professional;

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
           * LinkedIn professional profile data (only present when
           * includeAttributes.professional = true)
           */
          ownerProfessional?: Edge.OwnerProfessional;

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
           * LinkedIn professional profile data (only present when
           * includeAttributes.professional = true)
           */
          export interface OwnerProfessional {
            /**
             * Professional awards
             */
            awards: Array<string> | null;

            /**
             * Professional certifications
             */
            certifications: Array<string> | null;

            /**
             * City
             */
            city: string | null;

            /**
             * Number of LinkedIn connections
             */
            connectionsCount: number | null;

            /**
             * Country
             */
            country: string | null;

            /**
             * Current industry sector
             */
            currentIndustry: string | null;

            /**
             * Departments worked in
             */
            departments: Array<string> | null;

            /**
             * Education history
             */
            education: Array<OwnerProfessional.Education>;

            /**
             * Work experience history
             */
            experience: Array<OwnerProfessional.Experience>;

            /**
             * Areas of expertise
             */
            expertise: Array<string> | null;

            /**
             * First name
             */
            firstName: string | null;

            /**
             * Number of LinkedIn followers
             */
            followerCount: number | null;

            /**
             * Functional area (e.g., Engineering, Product)
             */
            functionalArea: string | null;

            /**
             * Professional headline
             */
            headline: string | null;

            /**
             * Languages spoken
             */
            languages: Array<string> | null;

            /**
             * Last name
             */
            lastName: string | null;

            /**
             * LinkedIn profile URL
             */
            linkedinUrl: string;

            /**
             * Full location string
             */
            location: string | null;

            /**
             * Professional organization memberships
             */
            memberships: Array<string> | null;

            /**
             * Current organization/company
             */
            organization: string | null;

            /**
             * Patents held
             */
            patents: Array<string> | null;

            /**
             * Previous industries worked in
             */
            priorIndustries: Array<string> | null;

            /**
             * Publications authored
             */
            publications: Array<string> | null;

            /**
             * Seniority classification
             */
            seniority: string | null;

            /**
             * Seniority level (e.g., Senior, Manager)
             */
            seniorityLevel: string | null;

            /**
             * State or province
             */
            state: string | null;

            /**
             * Current job title
             */
            title: string | null;
          }

          export namespace OwnerProfessional {
            export interface Education {
              /**
               * Name of the educational institution
               */
              campus: string | null;

              /**
               * End date (YYYY-MM-DD format)
               */
              endDate: string | null;

              /**
               * Field of study or degree program
               */
              major: string | null;

              /**
               * Area of specialization
               */
              specialization: string | null;

              /**
               * Start date (YYYY-MM-DD format)
               */
              startDate: string | null;
            }

            export interface Experience {
              /**
               * Company or organization name
               */
              company: string | null;

              /**
               * End date (YYYY-MM-DD format, null if current)
               */
              endDate: string | null;

              /**
               * Industry sector
               */
              industry: string | null;

              /**
               * Whether this is the current position
               */
              isCurrent: boolean | null;

              /**
               * Work location
               */
              location: string | null;

              /**
               * Start date (YYYY-MM-DD format)
               */
              startDate: string | null;

              /**
               * Description of role and responsibilities
               */
              summary: string | null;

              /**
               * Job title or position
               */
              title: string | null;
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
       * Developer ranking data (only present when includeAttributes.devrank = true)
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
           * LinkedIn professional profile data (only present when
           * includeAttributes.professional = true)
           */
          ownerProfessional?: Edge.OwnerProfessional;

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
           * LinkedIn professional profile data (only present when
           * includeAttributes.professional = true)
           */
          export interface OwnerProfessional {
            /**
             * Professional awards
             */
            awards: Array<string> | null;

            /**
             * Professional certifications
             */
            certifications: Array<string> | null;

            /**
             * City
             */
            city: string | null;

            /**
             * Number of LinkedIn connections
             */
            connectionsCount: number | null;

            /**
             * Country
             */
            country: string | null;

            /**
             * Current industry sector
             */
            currentIndustry: string | null;

            /**
             * Departments worked in
             */
            departments: Array<string> | null;

            /**
             * Education history
             */
            education: Array<OwnerProfessional.Education>;

            /**
             * Work experience history
             */
            experience: Array<OwnerProfessional.Experience>;

            /**
             * Areas of expertise
             */
            expertise: Array<string> | null;

            /**
             * First name
             */
            firstName: string | null;

            /**
             * Number of LinkedIn followers
             */
            followerCount: number | null;

            /**
             * Functional area (e.g., Engineering, Product)
             */
            functionalArea: string | null;

            /**
             * Professional headline
             */
            headline: string | null;

            /**
             * Languages spoken
             */
            languages: Array<string> | null;

            /**
             * Last name
             */
            lastName: string | null;

            /**
             * LinkedIn profile URL
             */
            linkedinUrl: string;

            /**
             * Full location string
             */
            location: string | null;

            /**
             * Professional organization memberships
             */
            memberships: Array<string> | null;

            /**
             * Current organization/company
             */
            organization: string | null;

            /**
             * Patents held
             */
            patents: Array<string> | null;

            /**
             * Previous industries worked in
             */
            priorIndustries: Array<string> | null;

            /**
             * Publications authored
             */
            publications: Array<string> | null;

            /**
             * Seniority classification
             */
            seniority: string | null;

            /**
             * Seniority level (e.g., Senior, Manager)
             */
            seniorityLevel: string | null;

            /**
             * State or province
             */
            state: string | null;

            /**
             * Current job title
             */
            title: string | null;
          }

          export namespace OwnerProfessional {
            export interface Education {
              /**
               * Name of the educational institution
               */
              campus: string | null;

              /**
               * End date (YYYY-MM-DD format)
               */
              endDate: string | null;

              /**
               * Field of study or degree program
               */
              major: string | null;

              /**
               * Area of specialization
               */
              specialization: string | null;

              /**
               * Start date (YYYY-MM-DD format)
               */
              startDate: string | null;
            }

            export interface Experience {
              /**
               * Company or organization name
               */
              company: string | null;

              /**
               * End date (YYYY-MM-DD format, null if current)
               */
              endDate: string | null;

              /**
               * Industry sector
               */
              industry: string | null;

              /**
               * Whether this is the current position
               */
              isCurrent: boolean | null;

              /**
               * Work location
               */
              location: string | null;

              /**
               * Start date (YYYY-MM-DD format)
               */
              startDate: string | null;

              /**
               * Description of role and responsibilities
               */
              summary: string | null;

              /**
               * Job title or position
               */
              title: string | null;
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
       * LinkedIn professional profile data (only present when
       * includeAttributes.professional = true)
       */
      export interface Professional {
        /**
         * Professional awards
         */
        awards: Array<string> | null;

        /**
         * Professional certifications
         */
        certifications: Array<string> | null;

        /**
         * City
         */
        city: string | null;

        /**
         * Number of LinkedIn connections
         */
        connectionsCount: number | null;

        /**
         * Country
         */
        country: string | null;

        /**
         * Current industry sector
         */
        currentIndustry: string | null;

        /**
         * Departments worked in
         */
        departments: Array<string> | null;

        /**
         * Education history
         */
        education: Array<Professional.Education>;

        /**
         * Work experience history
         */
        experience: Array<Professional.Experience>;

        /**
         * Areas of expertise
         */
        expertise: Array<string> | null;

        /**
         * First name
         */
        firstName: string | null;

        /**
         * Number of LinkedIn followers
         */
        followerCount: number | null;

        /**
         * Functional area (e.g., Engineering, Product)
         */
        functionalArea: string | null;

        /**
         * Professional headline
         */
        headline: string | null;

        /**
         * Languages spoken
         */
        languages: Array<string> | null;

        /**
         * Last name
         */
        lastName: string | null;

        /**
         * LinkedIn profile URL
         */
        linkedinUrl: string;

        /**
         * Full location string
         */
        location: string | null;

        /**
         * Professional organization memberships
         */
        memberships: Array<string> | null;

        /**
         * Current organization/company
         */
        organization: string | null;

        /**
         * Patents held
         */
        patents: Array<string> | null;

        /**
         * Previous industries worked in
         */
        priorIndustries: Array<string> | null;

        /**
         * Publications authored
         */
        publications: Array<string> | null;

        /**
         * Seniority classification
         */
        seniority: string | null;

        /**
         * Seniority level (e.g., Senior, Manager)
         */
        seniorityLevel: string | null;

        /**
         * State or province
         */
        state: string | null;

        /**
         * Current job title
         */
        title: string | null;
      }

      export namespace Professional {
        export interface Education {
          /**
           * Name of the educational institution
           */
          campus: string | null;

          /**
           * End date (YYYY-MM-DD format)
           */
          endDate: string | null;

          /**
           * Field of study or degree program
           */
          major: string | null;

          /**
           * Area of specialization
           */
          specialization: string | null;

          /**
           * Start date (YYYY-MM-DD format)
           */
          startDate: string | null;
        }

        export interface Experience {
          /**
           * Company or organization name
           */
          company: string | null;

          /**
           * End date (YYYY-MM-DD format, null if current)
           */
          endDate: string | null;

          /**
           * Industry sector
           */
          industry: string | null;

          /**
           * Whether this is the current position
           */
          isCurrent: boolean | null;

          /**
           * Work location
           */
          location: string | null;

          /**
           * Start date (YYYY-MM-DD format)
           */
          startDate: string | null;

          /**
           * Description of role and responsibilities
           */
          summary: string | null;

          /**
           * Job title or position
           */
          title: string | null;
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
           * LinkedIn professional profile data (only present when
           * includeAttributes.professional = true)
           */
          ownerProfessional?: Edge.OwnerProfessional;

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
           * LinkedIn professional profile data (only present when
           * includeAttributes.professional = true)
           */
          export interface OwnerProfessional {
            /**
             * Professional awards
             */
            awards: Array<string> | null;

            /**
             * Professional certifications
             */
            certifications: Array<string> | null;

            /**
             * City
             */
            city: string | null;

            /**
             * Number of LinkedIn connections
             */
            connectionsCount: number | null;

            /**
             * Country
             */
            country: string | null;

            /**
             * Current industry sector
             */
            currentIndustry: string | null;

            /**
             * Departments worked in
             */
            departments: Array<string> | null;

            /**
             * Education history
             */
            education: Array<OwnerProfessional.Education>;

            /**
             * Work experience history
             */
            experience: Array<OwnerProfessional.Experience>;

            /**
             * Areas of expertise
             */
            expertise: Array<string> | null;

            /**
             * First name
             */
            firstName: string | null;

            /**
             * Number of LinkedIn followers
             */
            followerCount: number | null;

            /**
             * Functional area (e.g., Engineering, Product)
             */
            functionalArea: string | null;

            /**
             * Professional headline
             */
            headline: string | null;

            /**
             * Languages spoken
             */
            languages: Array<string> | null;

            /**
             * Last name
             */
            lastName: string | null;

            /**
             * LinkedIn profile URL
             */
            linkedinUrl: string;

            /**
             * Full location string
             */
            location: string | null;

            /**
             * Professional organization memberships
             */
            memberships: Array<string> | null;

            /**
             * Current organization/company
             */
            organization: string | null;

            /**
             * Patents held
             */
            patents: Array<string> | null;

            /**
             * Previous industries worked in
             */
            priorIndustries: Array<string> | null;

            /**
             * Publications authored
             */
            publications: Array<string> | null;

            /**
             * Seniority classification
             */
            seniority: string | null;

            /**
             * Seniority level (e.g., Senior, Manager)
             */
            seniorityLevel: string | null;

            /**
             * State or province
             */
            state: string | null;

            /**
             * Current job title
             */
            title: string | null;
          }

          export namespace OwnerProfessional {
            export interface Education {
              /**
               * Name of the educational institution
               */
              campus: string | null;

              /**
               * End date (YYYY-MM-DD format)
               */
              endDate: string | null;

              /**
               * Field of study or degree program
               */
              major: string | null;

              /**
               * Area of specialization
               */
              specialization: string | null;

              /**
               * Start date (YYYY-MM-DD format)
               */
              startDate: string | null;
            }

            export interface Experience {
              /**
               * Company or organization name
               */
              company: string | null;

              /**
               * End date (YYYY-MM-DD format, null if current)
               */
              endDate: string | null;

              /**
               * Industry sector
               */
              industry: string | null;

              /**
               * Whether this is the current position
               */
              isCurrent: boolean | null;

              /**
               * Work location
               */
              location: string | null;

              /**
               * Start date (YYYY-MM-DD format)
               */
              startDate: string | null;

              /**
               * Description of role and responsibilities
               */
              summary: string | null;

              /**
               * Job title or position
               */
              title: string | null;
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

  export interface FollowingResponse {
    /**
     * Pagination information
     */
    pageInfo: FollowingResponse.PageInfo;

    /**
     * Array of users this user follows (with optional graph relationships)
     */
    users: Array<FollowingResponse.User>;
  }

  export namespace FollowingResponse {
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
       * Developer ranking data (only present when includeAttributes.devrank = true)
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
       * LinkedIn professional profile data (only present when
       * includeAttributes.professional = true)
       */
      professional?: User.Professional;

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
           * LinkedIn professional profile data (only present when
           * includeAttributes.professional = true)
           */
          ownerProfessional?: Edge.OwnerProfessional;

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
           * LinkedIn professional profile data (only present when
           * includeAttributes.professional = true)
           */
          export interface OwnerProfessional {
            /**
             * Professional awards
             */
            awards: Array<string> | null;

            /**
             * Professional certifications
             */
            certifications: Array<string> | null;

            /**
             * City
             */
            city: string | null;

            /**
             * Number of LinkedIn connections
             */
            connectionsCount: number | null;

            /**
             * Country
             */
            country: string | null;

            /**
             * Current industry sector
             */
            currentIndustry: string | null;

            /**
             * Departments worked in
             */
            departments: Array<string> | null;

            /**
             * Education history
             */
            education: Array<OwnerProfessional.Education>;

            /**
             * Work experience history
             */
            experience: Array<OwnerProfessional.Experience>;

            /**
             * Areas of expertise
             */
            expertise: Array<string> | null;

            /**
             * First name
             */
            firstName: string | null;

            /**
             * Number of LinkedIn followers
             */
            followerCount: number | null;

            /**
             * Functional area (e.g., Engineering, Product)
             */
            functionalArea: string | null;

            /**
             * Professional headline
             */
            headline: string | null;

            /**
             * Languages spoken
             */
            languages: Array<string> | null;

            /**
             * Last name
             */
            lastName: string | null;

            /**
             * LinkedIn profile URL
             */
            linkedinUrl: string;

            /**
             * Full location string
             */
            location: string | null;

            /**
             * Professional organization memberships
             */
            memberships: Array<string> | null;

            /**
             * Current organization/company
             */
            organization: string | null;

            /**
             * Patents held
             */
            patents: Array<string> | null;

            /**
             * Previous industries worked in
             */
            priorIndustries: Array<string> | null;

            /**
             * Publications authored
             */
            publications: Array<string> | null;

            /**
             * Seniority classification
             */
            seniority: string | null;

            /**
             * Seniority level (e.g., Senior, Manager)
             */
            seniorityLevel: string | null;

            /**
             * State or province
             */
            state: string | null;

            /**
             * Current job title
             */
            title: string | null;
          }

          export namespace OwnerProfessional {
            export interface Education {
              /**
               * Name of the educational institution
               */
              campus: string | null;

              /**
               * End date (YYYY-MM-DD format)
               */
              endDate: string | null;

              /**
               * Field of study or degree program
               */
              major: string | null;

              /**
               * Area of specialization
               */
              specialization: string | null;

              /**
               * Start date (YYYY-MM-DD format)
               */
              startDate: string | null;
            }

            export interface Experience {
              /**
               * Company or organization name
               */
              company: string | null;

              /**
               * End date (YYYY-MM-DD format, null if current)
               */
              endDate: string | null;

              /**
               * Industry sector
               */
              industry: string | null;

              /**
               * Whether this is the current position
               */
              isCurrent: boolean | null;

              /**
               * Work location
               */
              location: string | null;

              /**
               * Start date (YYYY-MM-DD format)
               */
              startDate: string | null;

              /**
               * Description of role and responsibilities
               */
              summary: string | null;

              /**
               * Job title or position
               */
              title: string | null;
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
       * Developer ranking data (only present when includeAttributes.devrank = true)
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
           * LinkedIn professional profile data (only present when
           * includeAttributes.professional = true)
           */
          ownerProfessional?: Edge.OwnerProfessional;

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
           * LinkedIn professional profile data (only present when
           * includeAttributes.professional = true)
           */
          export interface OwnerProfessional {
            /**
             * Professional awards
             */
            awards: Array<string> | null;

            /**
             * Professional certifications
             */
            certifications: Array<string> | null;

            /**
             * City
             */
            city: string | null;

            /**
             * Number of LinkedIn connections
             */
            connectionsCount: number | null;

            /**
             * Country
             */
            country: string | null;

            /**
             * Current industry sector
             */
            currentIndustry: string | null;

            /**
             * Departments worked in
             */
            departments: Array<string> | null;

            /**
             * Education history
             */
            education: Array<OwnerProfessional.Education>;

            /**
             * Work experience history
             */
            experience: Array<OwnerProfessional.Experience>;

            /**
             * Areas of expertise
             */
            expertise: Array<string> | null;

            /**
             * First name
             */
            firstName: string | null;

            /**
             * Number of LinkedIn followers
             */
            followerCount: number | null;

            /**
             * Functional area (e.g., Engineering, Product)
             */
            functionalArea: string | null;

            /**
             * Professional headline
             */
            headline: string | null;

            /**
             * Languages spoken
             */
            languages: Array<string> | null;

            /**
             * Last name
             */
            lastName: string | null;

            /**
             * LinkedIn profile URL
             */
            linkedinUrl: string;

            /**
             * Full location string
             */
            location: string | null;

            /**
             * Professional organization memberships
             */
            memberships: Array<string> | null;

            /**
             * Current organization/company
             */
            organization: string | null;

            /**
             * Patents held
             */
            patents: Array<string> | null;

            /**
             * Previous industries worked in
             */
            priorIndustries: Array<string> | null;

            /**
             * Publications authored
             */
            publications: Array<string> | null;

            /**
             * Seniority classification
             */
            seniority: string | null;

            /**
             * Seniority level (e.g., Senior, Manager)
             */
            seniorityLevel: string | null;

            /**
             * State or province
             */
            state: string | null;

            /**
             * Current job title
             */
            title: string | null;
          }

          export namespace OwnerProfessional {
            export interface Education {
              /**
               * Name of the educational institution
               */
              campus: string | null;

              /**
               * End date (YYYY-MM-DD format)
               */
              endDate: string | null;

              /**
               * Field of study or degree program
               */
              major: string | null;

              /**
               * Area of specialization
               */
              specialization: string | null;

              /**
               * Start date (YYYY-MM-DD format)
               */
              startDate: string | null;
            }

            export interface Experience {
              /**
               * Company or organization name
               */
              company: string | null;

              /**
               * End date (YYYY-MM-DD format, null if current)
               */
              endDate: string | null;

              /**
               * Industry sector
               */
              industry: string | null;

              /**
               * Whether this is the current position
               */
              isCurrent: boolean | null;

              /**
               * Work location
               */
              location: string | null;

              /**
               * Start date (YYYY-MM-DD format)
               */
              startDate: string | null;

              /**
               * Description of role and responsibilities
               */
              summary: string | null;

              /**
               * Job title or position
               */
              title: string | null;
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
       * LinkedIn professional profile data (only present when
       * includeAttributes.professional = true)
       */
      export interface Professional {
        /**
         * Professional awards
         */
        awards: Array<string> | null;

        /**
         * Professional certifications
         */
        certifications: Array<string> | null;

        /**
         * City
         */
        city: string | null;

        /**
         * Number of LinkedIn connections
         */
        connectionsCount: number | null;

        /**
         * Country
         */
        country: string | null;

        /**
         * Current industry sector
         */
        currentIndustry: string | null;

        /**
         * Departments worked in
         */
        departments: Array<string> | null;

        /**
         * Education history
         */
        education: Array<Professional.Education>;

        /**
         * Work experience history
         */
        experience: Array<Professional.Experience>;

        /**
         * Areas of expertise
         */
        expertise: Array<string> | null;

        /**
         * First name
         */
        firstName: string | null;

        /**
         * Number of LinkedIn followers
         */
        followerCount: number | null;

        /**
         * Functional area (e.g., Engineering, Product)
         */
        functionalArea: string | null;

        /**
         * Professional headline
         */
        headline: string | null;

        /**
         * Languages spoken
         */
        languages: Array<string> | null;

        /**
         * Last name
         */
        lastName: string | null;

        /**
         * LinkedIn profile URL
         */
        linkedinUrl: string;

        /**
         * Full location string
         */
        location: string | null;

        /**
         * Professional organization memberships
         */
        memberships: Array<string> | null;

        /**
         * Current organization/company
         */
        organization: string | null;

        /**
         * Patents held
         */
        patents: Array<string> | null;

        /**
         * Previous industries worked in
         */
        priorIndustries: Array<string> | null;

        /**
         * Publications authored
         */
        publications: Array<string> | null;

        /**
         * Seniority classification
         */
        seniority: string | null;

        /**
         * Seniority level (e.g., Senior, Manager)
         */
        seniorityLevel: string | null;

        /**
         * State or province
         */
        state: string | null;

        /**
         * Current job title
         */
        title: string | null;
      }

      export namespace Professional {
        export interface Education {
          /**
           * Name of the educational institution
           */
          campus: string | null;

          /**
           * End date (YYYY-MM-DD format)
           */
          endDate: string | null;

          /**
           * Field of study or degree program
           */
          major: string | null;

          /**
           * Area of specialization
           */
          specialization: string | null;

          /**
           * Start date (YYYY-MM-DD format)
           */
          startDate: string | null;
        }

        export interface Experience {
          /**
           * Company or organization name
           */
          company: string | null;

          /**
           * End date (YYYY-MM-DD format, null if current)
           */
          endDate: string | null;

          /**
           * Industry sector
           */
          industry: string | null;

          /**
           * Whether this is the current position
           */
          isCurrent: boolean | null;

          /**
           * Work location
           */
          location: string | null;

          /**
           * Start date (YYYY-MM-DD format)
           */
          startDate: string | null;

          /**
           * Description of role and responsibilities
           */
          summary: string | null;

          /**
           * Job title or position
           */
          title: string | null;
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
           * LinkedIn professional profile data (only present when
           * includeAttributes.professional = true)
           */
          ownerProfessional?: Edge.OwnerProfessional;

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
           * LinkedIn professional profile data (only present when
           * includeAttributes.professional = true)
           */
          export interface OwnerProfessional {
            /**
             * Professional awards
             */
            awards: Array<string> | null;

            /**
             * Professional certifications
             */
            certifications: Array<string> | null;

            /**
             * City
             */
            city: string | null;

            /**
             * Number of LinkedIn connections
             */
            connectionsCount: number | null;

            /**
             * Country
             */
            country: string | null;

            /**
             * Current industry sector
             */
            currentIndustry: string | null;

            /**
             * Departments worked in
             */
            departments: Array<string> | null;

            /**
             * Education history
             */
            education: Array<OwnerProfessional.Education>;

            /**
             * Work experience history
             */
            experience: Array<OwnerProfessional.Experience>;

            /**
             * Areas of expertise
             */
            expertise: Array<string> | null;

            /**
             * First name
             */
            firstName: string | null;

            /**
             * Number of LinkedIn followers
             */
            followerCount: number | null;

            /**
             * Functional area (e.g., Engineering, Product)
             */
            functionalArea: string | null;

            /**
             * Professional headline
             */
            headline: string | null;

            /**
             * Languages spoken
             */
            languages: Array<string> | null;

            /**
             * Last name
             */
            lastName: string | null;

            /**
             * LinkedIn profile URL
             */
            linkedinUrl: string;

            /**
             * Full location string
             */
            location: string | null;

            /**
             * Professional organization memberships
             */
            memberships: Array<string> | null;

            /**
             * Current organization/company
             */
            organization: string | null;

            /**
             * Patents held
             */
            patents: Array<string> | null;

            /**
             * Previous industries worked in
             */
            priorIndustries: Array<string> | null;

            /**
             * Publications authored
             */
            publications: Array<string> | null;

            /**
             * Seniority classification
             */
            seniority: string | null;

            /**
             * Seniority level (e.g., Senior, Manager)
             */
            seniorityLevel: string | null;

            /**
             * State or province
             */
            state: string | null;

            /**
             * Current job title
             */
            title: string | null;
          }

          export namespace OwnerProfessional {
            export interface Education {
              /**
               * Name of the educational institution
               */
              campus: string | null;

              /**
               * End date (YYYY-MM-DD format)
               */
              endDate: string | null;

              /**
               * Field of study or degree program
               */
              major: string | null;

              /**
               * Area of specialization
               */
              specialization: string | null;

              /**
               * Start date (YYYY-MM-DD format)
               */
              startDate: string | null;
            }

            export interface Experience {
              /**
               * Company or organization name
               */
              company: string | null;

              /**
               * End date (YYYY-MM-DD format, null if current)
               */
              endDate: string | null;

              /**
               * Industry sector
               */
              industry: string | null;

              /**
               * Whether this is the current position
               */
              isCurrent: boolean | null;

              /**
               * Work location
               */
              location: string | null;

              /**
               * Start date (YYYY-MM-DD format)
               */
              startDate: string | null;

              /**
               * Description of role and responsibilities
               */
              summary: string | null;

              /**
               * Job title or position
               */
              title: string | null;
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

  export interface UserOwnsResponse {
    /**
     * Pagination information
     */
    pageInfo: UserOwnsResponse.PageInfo;

    /**
     * Array of repositories owned by this user (with optional graph relationships)
     */
    repositories: Array<UserOwnsResponse.Repository>;
  }

  export namespace UserOwnsResponse {
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
       * LinkedIn professional profile data (only present when
       * includeAttributes.professional = true)
       */
      ownerProfessional?: Repository.OwnerProfessional;

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
       * LinkedIn professional profile data (only present when
       * includeAttributes.professional = true)
       */
      export interface OwnerProfessional {
        /**
         * Professional awards
         */
        awards: Array<string> | null;

        /**
         * Professional certifications
         */
        certifications: Array<string> | null;

        /**
         * City
         */
        city: string | null;

        /**
         * Number of LinkedIn connections
         */
        connectionsCount: number | null;

        /**
         * Country
         */
        country: string | null;

        /**
         * Current industry sector
         */
        currentIndustry: string | null;

        /**
         * Departments worked in
         */
        departments: Array<string> | null;

        /**
         * Education history
         */
        education: Array<OwnerProfessional.Education>;

        /**
         * Work experience history
         */
        experience: Array<OwnerProfessional.Experience>;

        /**
         * Areas of expertise
         */
        expertise: Array<string> | null;

        /**
         * First name
         */
        firstName: string | null;

        /**
         * Number of LinkedIn followers
         */
        followerCount: number | null;

        /**
         * Functional area (e.g., Engineering, Product)
         */
        functionalArea: string | null;

        /**
         * Professional headline
         */
        headline: string | null;

        /**
         * Languages spoken
         */
        languages: Array<string> | null;

        /**
         * Last name
         */
        lastName: string | null;

        /**
         * LinkedIn profile URL
         */
        linkedinUrl: string;

        /**
         * Full location string
         */
        location: string | null;

        /**
         * Professional organization memberships
         */
        memberships: Array<string> | null;

        /**
         * Current organization/company
         */
        organization: string | null;

        /**
         * Patents held
         */
        patents: Array<string> | null;

        /**
         * Previous industries worked in
         */
        priorIndustries: Array<string> | null;

        /**
         * Publications authored
         */
        publications: Array<string> | null;

        /**
         * Seniority classification
         */
        seniority: string | null;

        /**
         * Seniority level (e.g., Senior, Manager)
         */
        seniorityLevel: string | null;

        /**
         * State or province
         */
        state: string | null;

        /**
         * Current job title
         */
        title: string | null;
      }

      export namespace OwnerProfessional {
        export interface Education {
          /**
           * Name of the educational institution
           */
          campus: string | null;

          /**
           * End date (YYYY-MM-DD format)
           */
          endDate: string | null;

          /**
           * Field of study or degree program
           */
          major: string | null;

          /**
           * Area of specialization
           */
          specialization: string | null;

          /**
           * Start date (YYYY-MM-DD format)
           */
          startDate: string | null;
        }

        export interface Experience {
          /**
           * Company or organization name
           */
          company: string | null;

          /**
           * End date (YYYY-MM-DD format, null if current)
           */
          endDate: string | null;

          /**
           * Industry sector
           */
          industry: string | null;

          /**
           * Whether this is the current position
           */
          isCurrent: boolean | null;

          /**
           * Work location
           */
          location: string | null;

          /**
           * Start date (YYYY-MM-DD format)
           */
          startDate: string | null;

          /**
           * Description of role and responsibilities
           */
          summary: string | null;

          /**
           * Job title or position
           */
          title: string | null;
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

  export interface UserStarsResponse {
    /**
     * Pagination information
     */
    pageInfo: UserStarsResponse.PageInfo;

    /**
     * Array of repositories starred by this user (with optional graph relationships)
     */
    repositories: Array<UserStarsResponse.Repository>;
  }

  export namespace UserStarsResponse {
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
       * LinkedIn professional profile data (only present when
       * includeAttributes.professional = true)
       */
      ownerProfessional?: Repository.OwnerProfessional;

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
       * LinkedIn professional profile data (only present when
       * includeAttributes.professional = true)
       */
      export interface OwnerProfessional {
        /**
         * Professional awards
         */
        awards: Array<string> | null;

        /**
         * Professional certifications
         */
        certifications: Array<string> | null;

        /**
         * City
         */
        city: string | null;

        /**
         * Number of LinkedIn connections
         */
        connectionsCount: number | null;

        /**
         * Country
         */
        country: string | null;

        /**
         * Current industry sector
         */
        currentIndustry: string | null;

        /**
         * Departments worked in
         */
        departments: Array<string> | null;

        /**
         * Education history
         */
        education: Array<OwnerProfessional.Education>;

        /**
         * Work experience history
         */
        experience: Array<OwnerProfessional.Experience>;

        /**
         * Areas of expertise
         */
        expertise: Array<string> | null;

        /**
         * First name
         */
        firstName: string | null;

        /**
         * Number of LinkedIn followers
         */
        followerCount: number | null;

        /**
         * Functional area (e.g., Engineering, Product)
         */
        functionalArea: string | null;

        /**
         * Professional headline
         */
        headline: string | null;

        /**
         * Languages spoken
         */
        languages: Array<string> | null;

        /**
         * Last name
         */
        lastName: string | null;

        /**
         * LinkedIn profile URL
         */
        linkedinUrl: string;

        /**
         * Full location string
         */
        location: string | null;

        /**
         * Professional organization memberships
         */
        memberships: Array<string> | null;

        /**
         * Current organization/company
         */
        organization: string | null;

        /**
         * Patents held
         */
        patents: Array<string> | null;

        /**
         * Previous industries worked in
         */
        priorIndustries: Array<string> | null;

        /**
         * Publications authored
         */
        publications: Array<string> | null;

        /**
         * Seniority classification
         */
        seniority: string | null;

        /**
         * Seniority level (e.g., Senior, Manager)
         */
        seniorityLevel: string | null;

        /**
         * State or province
         */
        state: string | null;

        /**
         * Current job title
         */
        title: string | null;
      }

      export namespace OwnerProfessional {
        export interface Education {
          /**
           * Name of the educational institution
           */
          campus: string | null;

          /**
           * End date (YYYY-MM-DD format)
           */
          endDate: string | null;

          /**
           * Field of study or degree program
           */
          major: string | null;

          /**
           * Area of specialization
           */
          specialization: string | null;

          /**
           * Start date (YYYY-MM-DD format)
           */
          startDate: string | null;
        }

        export interface Experience {
          /**
           * Company or organization name
           */
          company: string | null;

          /**
           * End date (YYYY-MM-DD format, null if current)
           */
          endDate: string | null;

          /**
           * Industry sector
           */
          industry: string | null;

          /**
           * Whether this is the current position
           */
          isCurrent: boolean | null;

          /**
           * Work location
           */
          location: string | null;

          /**
           * Start date (YYYY-MM-DD format)
           */
          startDate: string | null;

          /**
           * Description of role and responsibilities
           */
          summary: string | null;

          /**
           * Job title or position
           */
          title: string | null;
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

  export interface UserContributesResponse {
    /**
     * Pagination information
     */
    pageInfo: UserContributesResponse.PageInfo;

    /**
     * Array of repositories this user contributes to (with optional graph
     * relationships)
     */
    repositories: Array<UserContributesResponse.Repository>;
  }

  export namespace UserContributesResponse {
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
       * LinkedIn professional profile data (only present when
       * includeAttributes.professional = true)
       */
      ownerProfessional?: Repository.OwnerProfessional;

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
       * LinkedIn professional profile data (only present when
       * includeAttributes.professional = true)
       */
      export interface OwnerProfessional {
        /**
         * Professional awards
         */
        awards: Array<string> | null;

        /**
         * Professional certifications
         */
        certifications: Array<string> | null;

        /**
         * City
         */
        city: string | null;

        /**
         * Number of LinkedIn connections
         */
        connectionsCount: number | null;

        /**
         * Country
         */
        country: string | null;

        /**
         * Current industry sector
         */
        currentIndustry: string | null;

        /**
         * Departments worked in
         */
        departments: Array<string> | null;

        /**
         * Education history
         */
        education: Array<OwnerProfessional.Education>;

        /**
         * Work experience history
         */
        experience: Array<OwnerProfessional.Experience>;

        /**
         * Areas of expertise
         */
        expertise: Array<string> | null;

        /**
         * First name
         */
        firstName: string | null;

        /**
         * Number of LinkedIn followers
         */
        followerCount: number | null;

        /**
         * Functional area (e.g., Engineering, Product)
         */
        functionalArea: string | null;

        /**
         * Professional headline
         */
        headline: string | null;

        /**
         * Languages spoken
         */
        languages: Array<string> | null;

        /**
         * Last name
         */
        lastName: string | null;

        /**
         * LinkedIn profile URL
         */
        linkedinUrl: string;

        /**
         * Full location string
         */
        location: string | null;

        /**
         * Professional organization memberships
         */
        memberships: Array<string> | null;

        /**
         * Current organization/company
         */
        organization: string | null;

        /**
         * Patents held
         */
        patents: Array<string> | null;

        /**
         * Previous industries worked in
         */
        priorIndustries: Array<string> | null;

        /**
         * Publications authored
         */
        publications: Array<string> | null;

        /**
         * Seniority classification
         */
        seniority: string | null;

        /**
         * Seniority level (e.g., Senior, Manager)
         */
        seniorityLevel: string | null;

        /**
         * State or province
         */
        state: string | null;

        /**
         * Current job title
         */
        title: string | null;
      }

      export namespace OwnerProfessional {
        export interface Education {
          /**
           * Name of the educational institution
           */
          campus: string | null;

          /**
           * End date (YYYY-MM-DD format)
           */
          endDate: string | null;

          /**
           * Field of study or degree program
           */
          major: string | null;

          /**
           * Area of specialization
           */
          specialization: string | null;

          /**
           * Start date (YYYY-MM-DD format)
           */
          startDate: string | null;
        }

        export interface Experience {
          /**
           * Company or organization name
           */
          company: string | null;

          /**
           * End date (YYYY-MM-DD format, null if current)
           */
          endDate: string | null;

          /**
           * Industry sector
           */
          industry: string | null;

          /**
           * Whether this is the current position
           */
          isCurrent: boolean | null;

          /**
           * Work location
           */
          location: string | null;

          /**
           * Start date (YYYY-MM-DD format)
           */
          startDate: string | null;

          /**
           * Description of role and responsibilities
           */
          summary: string | null;

          /**
           * Job title or position
           */
          title: string | null;
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
}

export interface RawUserRetrieveParams {
  /**
   * Array of GitHub node IDs (1-100)
   */
  githubIds: Array<string>;

  /**
   * Optional graph relationships to include (followers, following, stars, owns,
   * contributes)
   */
  includeAttributes?: RawUserRetrieveParams.IncludeAttributes;
}

export namespace RawUserRetrieveParams {
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
     * Include LinkedIn professional profile data (requires PROFESSIONAL service)
     */
    professional?: boolean;

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

export interface RawUserByLoginParams {
  /**
   * Array of GitHub usernames (1-100)
   */
  logins: Array<string>;

  /**
   * Optional graph relationships to include (followers, following, stars, owns,
   * contributes)
   */
  includeAttributes?: RawUserByLoginParams.IncludeAttributes;
}

export namespace RawUserByLoginParams {
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
     * Include LinkedIn professional profile data (requires PROFESSIONAL service)
     */
    professional?: boolean;

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

export interface RawUserCountParams {
  /**
   * Optional filters for users. Supports fields like login, company, location,
   * resolvedCountry, resolvedState, resolvedCity. Operators: Eq, NotEq, In, NotIn,
   * Lt, Lte, Gt, Gte.
   */
  filters:
    | RawUserCountParams.UnionMember0
    | RawUserCountParams.UnionMember1
    | RawUserCountParams.UnionMember2;
}

export namespace RawUserCountParams {
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

export interface RawUserGraphParams {
  /**
   * Path param: GitHub node ID or BountyLab ID of the user
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
  includeAttributes?: RawUserGraphParams.IncludeAttributes;
}

export namespace RawUserGraphParams {
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
     * Include LinkedIn professional profile for the repository owner (requires
     * PROFESSIONAL service)
     */
    ownerProfessional?: boolean;

    /**
     * Include owned repositories with cursor pagination
     */
    owns?: IncludeAttributes.Owns;

    /**
     * Include LinkedIn professional profile data (requires PROFESSIONAL service)
     */
    professional?: boolean;

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

export declare namespace RawUsers {
  export {
    type RawUserRetrieveResponse as RawUserRetrieveResponse,
    type RawUserByLoginResponse as RawUserByLoginResponse,
    type RawUserCountResponse as RawUserCountResponse,
    type RawUserGraphResponse as RawUserGraphResponse,
    type RawUserRetrieveParams as RawUserRetrieveParams,
    type RawUserByLoginParams as RawUserByLoginParams,
    type RawUserCountParams as RawUserCountParams,
    type RawUserGraphParams as RawUserGraphParams,
  };
}
