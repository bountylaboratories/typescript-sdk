// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RawUsers extends APIResource {
  /**
   * Fetch a single GitHub user by their node ID. Requires RAW service. Credits: 1
   * per result.
   *
   * @example
   * ```ts
   * const rawUser = await client.rawUsers.retrieve(
   *   'MDQ6VXNlcjU4MzIzMQ==',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<RawUserRetrieveResponse> {
    return this._client.get(path`/api/raw/users/${id}`, options);
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

export interface RawUserRetrieveResponse {
  /**
   * User object or null if not found
   */
  user: RawUserRetrieveResponse.User | null;
}

export namespace RawUserRetrieveResponse {
  /**
   * User object or null if not found
   */
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

export interface RawUserByLoginResponse {
  /**
   * Number of users returned
   */
  count: number;

  /**
   * Array of user objects
   */
  users: Array<RawUserByLoginResponse.User | null>;
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

export interface RawUserContributesResponse {
  /**
   * Number of repositories in current page
   */
  count: number;

  /**
   * Array of repositories this user contributes to
   */
  repositories: Array<RawUserContributesResponse.Repository | null>;

  /**
   * Total number of contributed repositories
   */
  total: number;
}

export namespace RawUserContributesResponse {
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
   * Number of users in current page
   */
  count: number;

  /**
   * Total number of followers
   */
  total: number;

  /**
   * Array of users who follow this user
   */
  users: Array<RawUserFollowersResponse.User | null>;
}

export namespace RawUserFollowersResponse {
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
   * Number of users in current page
   */
  count: number;

  /**
   * Total number of following
   */
  total: number;

  /**
   * Array of users this user follows
   */
  users: Array<RawUserFollowingResponse.User | null>;
}

export namespace RawUserFollowingResponse {
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
   * Number of repositories in current page
   */
  count: number;

  /**
   * Array of repositories owned by this user
   */
  repositories: Array<RawUserOwnsResponse.Repository | null>;

  /**
   * Total number of owned repositories
   */
  total: number;
}

export namespace RawUserOwnsResponse {
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
   * Number of repositories in current page
   */
  count: number;

  /**
   * Array of repositories starred by this user
   */
  repositories: Array<RawUserStarsResponse.Repository | null>;

  /**
   * Total number of starred repositories
   */
  total: number;
}

export namespace RawUserStarsResponse {
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
}

export interface RawUserContributesParams {
  /**
   * Maximum number of results to return (default: 100, max: 1000)
   */
  limit?: string;

  /**
   * Number of results to skip (default: 0)
   */
  offset?: string;
}

export interface RawUserFollowersParams {
  /**
   * Maximum number of results to return (default: 100, max: 1000)
   */
  limit?: string;

  /**
   * Number of results to skip (default: 0)
   */
  offset?: string;
}

export interface RawUserFollowingParams {
  /**
   * Maximum number of results to return (default: 100, max: 1000)
   */
  limit?: string;

  /**
   * Number of results to skip (default: 0)
   */
  offset?: string;
}

export interface RawUserOwnsParams {
  /**
   * Maximum number of results to return (default: 100, max: 1000)
   */
  limit?: string;

  /**
   * Number of results to skip (default: 0)
   */
  offset?: string;
}

export interface RawUserStarsParams {
  /**
   * Maximum number of results to return (default: 100, max: 1000)
   */
  limit?: string;

  /**
   * Number of results to skip (default: 0)
   */
  offset?: string;
}

export declare namespace RawUsers {
  export {
    type RawUserRetrieveResponse as RawUserRetrieveResponse,
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
