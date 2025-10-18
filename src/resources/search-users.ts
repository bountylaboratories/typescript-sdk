// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SearchUsers extends APIResource {
  /**
   * Natural language search that uses AI to understand your query and automatically
   * generate search terms and filters. Requires SEARCH service. Credits: 1 per
   * result returned + 1 for AI processing.
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
   * per result returned.
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

export interface SearchUserNaturalLanguageParams {
  /**
   * Natural language query describing the users you want to find
   */
  query: string;

  /**
   * Maximum number of results to return (default: 100, max: 1000)
   */
  maxResults?: number;
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
}

export declare namespace SearchUsers {
  export {
    type SearchUserNaturalLanguageResponse as SearchUserNaturalLanguageResponse,
    type SearchUserSearchResponse as SearchUserSearchResponse,
    type SearchUserNaturalLanguageParams as SearchUserNaturalLanguageParams,
    type SearchUserSearchParams as SearchUserSearchParams,
  };
}
