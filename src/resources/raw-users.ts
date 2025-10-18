// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RawUsers extends APIResource {
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
    return this._client.post('/api/raw/users/by-login', { body, ...options });
  }

  /**
   * Get repositories this user contributes to (outgoing "contributes" edges).
   * Supports pagination. Requires RAW service. Credits: 1 per result.
   *
   * @example
   * ```ts
   * const response = await client.rawUsers.contributes(
   *   'MDQ6VXNlcjU4MzIzMQ==',
   * );
   * ```
   */
  contributes(
    id: string,
    query: RawUserContributesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RawUserContributesResponse> {
    return this._client.get(path`/api/raw/users/${id}/contributes`, { query, ...options });
  }

  /**
   * Get users who follow this user (incoming "follows" edges). Supports pagination.
   * Requires RAW service. Credits: 1 per result.
   *
   * @example
   * ```ts
   * const response = await client.rawUsers.followers(
   *   'MDQ6VXNlcjU4MzIzMQ==',
   * );
   * ```
   */
  followers(
    id: string,
    query: RawUserFollowersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RawUserFollowersResponse> {
    return this._client.get(path`/api/raw/users/${id}/followers`, { query, ...options });
  }

  /**
   * Get users this user follows (outgoing "follows" edges). Supports pagination.
   * Requires RAW service. Credits: 1 per result.
   *
   * @example
   * ```ts
   * const response = await client.rawUsers.following(
   *   'MDQ6VXNlcjU4MzIzMQ==',
   * );
   * ```
   */
  following(
    id: string,
    query: RawUserFollowingParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RawUserFollowingResponse> {
    return this._client.get(path`/api/raw/users/${id}/following`, { query, ...options });
  }

  /**
   * Get repositories owned by this user (outgoing "owns" edges). Supports
   * pagination. Requires RAW service. Credits: 1 per result.
   *
   * @example
   * ```ts
   * const response = await client.rawUsers.owns(
   *   'MDQ6VXNlcjU4MzIzMQ==',
   * );
   * ```
   */
  owns(
    id: string,
    query: RawUserOwnsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RawUserOwnsResponse> {
    return this._client.get(path`/api/raw/users/${id}/owns`, { query, ...options });
  }

  /**
   * Get repositories starred by this user (outgoing "stars" edges). Supports
   * pagination. Requires RAW service. Credits: 1 per result.
   *
   * @example
   * ```ts
   * const response = await client.rawUsers.stars(
   *   'MDQ6VXNlcjU4MzIzMQ==',
   * );
   * ```
   */
  stars(
    id: string,
    query: RawUserStarsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RawUserStarsResponse> {
    return this._client.get(path`/api/raw/users/${id}/stars`, { query, ...options });
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
     * Repositories this user contributes to (when includeAttributes.contributes is
     * specified)
     */
    contributes?: Array<User.Contribute>;

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
    followers?: Array<User.Follower>;

    /**
     * Users this user follows (when includeAttributes.following is specified)
     */
    following?: Array<User.Following>;

    /**
     * User location
     */
    location?: string | null;

    /**
     * Repositories this user owns (when includeAttributes.owns is specified)
     */
    owns?: Array<User.Own>;

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
    stars?: Array<User.Star>;

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
    export interface Contribute {
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
       * Repository contributors (when includeAttributes.contributors is specified)
       */
      contributors?: Array<Contribute.Contributor>;

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
      owner?: Contribute.Owner;

      /**
       * Preview of repository README (first ~500 chars)
       */
      readmePreview?: string | null;

      /**
       * Relevance score from search (0-1, lower is more relevant for cosine distance)
       */
      score?: number;

      /**
       * Users who starred this repository (when includeAttributes.starrers is specified)
       */
      starrers?: Array<Contribute.Starrer>;

      /**
       * ISO 8601 timestamp when repository was last updated
       */
      updatedAt?: string | null;
    }

    export namespace Contribute {
      export interface Contributor {
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
        socialAccounts?: Array<Contributor.SocialAccount> | null;

        /**
         * ISO 8601 timestamp when user was last updated
         */
        updatedAt?: string | null;

        /**
         * User website URL
         */
        websiteUrl?: string | null;
      }

      export namespace Contributor {
        export interface SocialAccount {
          provider: string;

          url: string;
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

      export interface Starrer {
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
        socialAccounts?: Array<Starrer.SocialAccount> | null;

        /**
         * ISO 8601 timestamp when user was last updated
         */
        updatedAt?: string | null;

        /**
         * User website URL
         */
        websiteUrl?: string | null;
      }

      export namespace Starrer {
        export interface SocialAccount {
          provider: string;

          url: string;
        }
      }
    }

    export interface Follower {
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
      socialAccounts?: Array<Follower.SocialAccount> | null;

      /**
       * ISO 8601 timestamp when user was last updated
       */
      updatedAt?: string | null;

      /**
       * User website URL
       */
      websiteUrl?: string | null;
    }

    export namespace Follower {
      export interface SocialAccount {
        provider: string;

        url: string;
      }
    }

    export interface Following {
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
      socialAccounts?: Array<Following.SocialAccount> | null;

      /**
       * ISO 8601 timestamp when user was last updated
       */
      updatedAt?: string | null;

      /**
       * User website URL
       */
      websiteUrl?: string | null;
    }

    export namespace Following {
      export interface SocialAccount {
        provider: string;

        url: string;
      }
    }

    export interface Own {
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
       * Repository contributors (when includeAttributes.contributors is specified)
       */
      contributors?: Array<Own.Contributor>;

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
      owner?: Own.Owner;

      /**
       * Preview of repository README (first ~500 chars)
       */
      readmePreview?: string | null;

      /**
       * Relevance score from search (0-1, lower is more relevant for cosine distance)
       */
      score?: number;

      /**
       * Users who starred this repository (when includeAttributes.starrers is specified)
       */
      starrers?: Array<Own.Starrer>;

      /**
       * ISO 8601 timestamp when repository was last updated
       */
      updatedAt?: string | null;
    }

    export namespace Own {
      export interface Contributor {
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
        socialAccounts?: Array<Contributor.SocialAccount> | null;

        /**
         * ISO 8601 timestamp when user was last updated
         */
        updatedAt?: string | null;

        /**
         * User website URL
         */
        websiteUrl?: string | null;
      }

      export namespace Contributor {
        export interface SocialAccount {
          provider: string;

          url: string;
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

      export interface Starrer {
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
        socialAccounts?: Array<Starrer.SocialAccount> | null;

        /**
         * ISO 8601 timestamp when user was last updated
         */
        updatedAt?: string | null;

        /**
         * User website URL
         */
        websiteUrl?: string | null;
      }

      export namespace Starrer {
        export interface SocialAccount {
          provider: string;

          url: string;
        }
      }
    }

    export interface SocialAccount {
      provider: string;

      url: string;
    }

    export interface Star {
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
       * Repository contributors (when includeAttributes.contributors is specified)
       */
      contributors?: Array<Star.Contributor>;

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
      owner?: Star.Owner;

      /**
       * Preview of repository README (first ~500 chars)
       */
      readmePreview?: string | null;

      /**
       * Relevance score from search (0-1, lower is more relevant for cosine distance)
       */
      score?: number;

      /**
       * Users who starred this repository (when includeAttributes.starrers is specified)
       */
      starrers?: Array<Star.Starrer>;

      /**
       * ISO 8601 timestamp when repository was last updated
       */
      updatedAt?: string | null;
    }

    export namespace Star {
      export interface Contributor {
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
        socialAccounts?: Array<Contributor.SocialAccount> | null;

        /**
         * ISO 8601 timestamp when user was last updated
         */
        updatedAt?: string | null;

        /**
         * User website URL
         */
        websiteUrl?: string | null;
      }

      export namespace Contributor {
        export interface SocialAccount {
          provider: string;

          url: string;
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

      export interface Starrer {
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
        socialAccounts?: Array<Starrer.SocialAccount> | null;

        /**
         * ISO 8601 timestamp when user was last updated
         */
        updatedAt?: string | null;

        /**
         * User website URL
         */
        websiteUrl?: string | null;
      }

      export namespace Starrer {
        export interface SocialAccount {
          provider: string;

          url: string;
        }
      }
    }
  }
}

export interface RawUserContributesResponse {
  /**
   * Pagination information
   */
  pageInfo: RawUserContributesResponse.PageInfo;

  /**
   * Array of repositories this user contributes to
   */
  repositories: Array<RawUserContributesResponse.Repository>;
}

export namespace RawUserContributesResponse {
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
     * Preview of repository README (first ~500 chars)
     */
    readmePreview?: string | null;

    /**
     * Relevance score from search (0-1, lower is more relevant for cosine distance)
     */
    score?: number;

    /**
     * ISO 8601 timestamp when repository was last updated
     */
    updatedAt?: string | null;
  }
}

export interface RawUserFollowersResponse {
  /**
   * Pagination information
   */
  pageInfo: RawUserFollowersResponse.PageInfo;

  /**
   * Array of users who follow this user
   */
  users: Array<RawUserFollowersResponse.User>;
}

export namespace RawUserFollowersResponse {
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
    socialAccounts?: Array<User.SocialAccount> | null;

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
    export interface SocialAccount {
      provider: string;

      url: string;
    }
  }
}

export interface RawUserFollowingResponse {
  /**
   * Pagination information
   */
  pageInfo: RawUserFollowingResponse.PageInfo;

  /**
   * Array of users this user follows
   */
  users: Array<RawUserFollowingResponse.User>;
}

export namespace RawUserFollowingResponse {
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
    socialAccounts?: Array<User.SocialAccount> | null;

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
    export interface SocialAccount {
      provider: string;

      url: string;
    }
  }
}

export interface RawUserOwnsResponse {
  /**
   * Pagination information
   */
  pageInfo: RawUserOwnsResponse.PageInfo;

  /**
   * Array of repositories owned by this user
   */
  repositories: Array<RawUserOwnsResponse.Repository>;
}

export namespace RawUserOwnsResponse {
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
     * Preview of repository README (first ~500 chars)
     */
    readmePreview?: string | null;

    /**
     * Relevance score from search (0-1, lower is more relevant for cosine distance)
     */
    score?: number;

    /**
     * ISO 8601 timestamp when repository was last updated
     */
    updatedAt?: string | null;
  }
}

export interface RawUserStarsResponse {
  /**
   * Pagination information
   */
  pageInfo: RawUserStarsResponse.PageInfo;

  /**
   * Array of repositories starred by this user
   */
  repositories: Array<RawUserStarsResponse.Repository>;
}

export namespace RawUserStarsResponse {
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
     * Preview of repository README (first ~500 chars)
     */
    readmePreview?: string | null;

    /**
     * Relevance score from search (0-1, lower is more relevant for cosine distance)
     */
    score?: number;

    /**
     * ISO 8601 timestamp when repository was last updated
     */
    updatedAt?: string | null;
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

export interface RawUserContributesParams {
  /**
   * Cursor for pagination (opaque base64-encoded string from previous response)
   */
  after?: string;

  /**
   * Number of items to return (default: 100, max: 100)
   */
  first?: string;
}

export interface RawUserFollowersParams {
  /**
   * Cursor for pagination (opaque base64-encoded string from previous response)
   */
  after?: string;

  /**
   * Number of items to return (default: 100, max: 100)
   */
  first?: string;
}

export interface RawUserFollowingParams {
  /**
   * Cursor for pagination (opaque base64-encoded string from previous response)
   */
  after?: string;

  /**
   * Number of items to return (default: 100, max: 100)
   */
  first?: string;
}

export interface RawUserOwnsParams {
  /**
   * Cursor for pagination (opaque base64-encoded string from previous response)
   */
  after?: string;

  /**
   * Number of items to return (default: 100, max: 100)
   */
  first?: string;
}

export interface RawUserStarsParams {
  /**
   * Cursor for pagination (opaque base64-encoded string from previous response)
   */
  after?: string;

  /**
   * Number of items to return (default: 100, max: 100)
   */
  first?: string;
}

export declare namespace RawUsers {
  export {
    type RawUserByLoginResponse as RawUserByLoginResponse,
    type RawUserContributesResponse as RawUserContributesResponse,
    type RawUserFollowersResponse as RawUserFollowersResponse,
    type RawUserFollowingResponse as RawUserFollowingResponse,
    type RawUserOwnsResponse as RawUserOwnsResponse,
    type RawUserStarsResponse as RawUserStarsResponse,
    type RawUserByLoginParams as RawUserByLoginParams,
    type RawUserContributesParams as RawUserContributesParams,
    type RawUserFollowersParams as RawUserFollowersParams,
    type RawUserFollowingParams as RawUserFollowingParams,
    type RawUserOwnsParams as RawUserOwnsParams,
    type RawUserStarsParams as RawUserStarsParams,
  };
}
