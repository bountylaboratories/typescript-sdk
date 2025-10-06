// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SearchUsers extends APIResource {
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

export interface SearchUserSearchResponse {
  /**
   * Number of users returned
   */
  count: number;

  /**
   * Credits consumed (1 per result)
   */
  creditsUsed: number;

  /**
   * Array of user search results with relevance scores
   */
  users: Array<SearchUserSearchResponse.User | null>;
}

export namespace SearchUserSearchResponse {
  export interface User {
    /**
     * GitHub node ID
     */
    id: string;

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
     * Email addresses as JSON string
     */
    emails?: string | null;

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
     * Social accounts as JSON string
     */
    socialAccounts?: string | null;

    /**
     * ISO 8601 timestamp when user was last updated
     */
    updatedAt?: string | null;

    /**
     * User website URL
     */
    websiteUrl?: string | null;
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
   * Optional filters for narrowing search results. Supports filtering on: login,
   * company, location, emails, resolvedCountry, resolvedState, resolvedCity.
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
  filters?:
    | SearchUserSearchParams.UnionMember0
    | SearchUserSearchParams.UnionMember1
    | SearchUserSearchParams.UnionMember0
    | SearchUserSearchParams.UnionMember1
    | SearchUserSearchParams.UnionMember0
    | SearchUserSearchParams.UnionMember1
    | SearchUserSearchParams.UnionMember0
    | SearchUserSearchParams.UnionMember1
    | SearchUserSearchParams.UnionMember0
    | SearchUserSearchParams.UnionMember1
    | SearchUserSearchParams.UnionMember0
    | SearchUserSearchParams.UnionMember1
    | SearchUserSearchParams.UnionMember0
    | SearchUserSearchParams.UnionMember1
    | SearchUserSearchParams.UnionMember7
    | null;

  /**
   * Maximum number of results to return (default: 100, max: 1000)
   */
  maxResults?: number;
}

export namespace SearchUserSearchParams {
  export interface UnionMember0 {
    op: 'Eq';

    value: string;

    field?: 'login';
  }

  export interface UnionMember1 {
    op: 'In';

    value: Array<string>;

    field?: 'login';
  }

  export interface UnionMember0 {
    op: 'Eq';

    value: string;

    field?: 'company';
  }

  export interface UnionMember1 {
    op: 'In';

    value: Array<string>;

    field?: 'company';
  }

  export interface UnionMember0 {
    op: 'Eq';

    value: string;

    field?: 'location';
  }

  export interface UnionMember1 {
    op: 'In';

    value: Array<string>;

    field?: 'location';
  }

  export interface UnionMember0 {
    op: 'Eq';

    value: string;

    field?: 'emails';
  }

  export interface UnionMember1 {
    op: 'In';

    value: Array<string>;

    field?: 'emails';
  }

  export interface UnionMember0 {
    op: 'Eq';

    value: string;

    field?: 'resolvedCountry';
  }

  export interface UnionMember1 {
    op: 'In';

    value: Array<string>;

    field?: 'resolvedCountry';
  }

  export interface UnionMember0 {
    op: 'Eq';

    value: string;

    field?: 'resolvedState';
  }

  export interface UnionMember1 {
    op: 'In';

    value: Array<string>;

    field?: 'resolvedState';
  }

  export interface UnionMember0 {
    op: 'Eq';

    value: string;

    field?: 'resolvedCity';
  }

  export interface UnionMember1 {
    op: 'In';

    value: Array<string>;

    field?: 'resolvedCity';
  }

  export interface UnionMember7 {
    /**
     * Array of field filters to combine with the logical operator
     */
    filters: Array<
      | UnionMember7.UnionMember0
      | UnionMember7.UnionMember1
      | UnionMember7.UnionMember0
      | UnionMember7.UnionMember1
      | UnionMember7.UnionMember0
      | UnionMember7.UnionMember1
      | UnionMember7.UnionMember0
      | UnionMember7.UnionMember1
      | UnionMember7.UnionMember0
      | UnionMember7.UnionMember1
      | UnionMember7.UnionMember0
      | UnionMember7.UnionMember1
      | UnionMember7.UnionMember0
      | UnionMember7.UnionMember1
    >;

    /**
     * Logical operator to combine multiple filters
     */
    op: 'And' | 'Or';
  }

  export namespace UnionMember7 {
    export interface UnionMember0 {
      op: 'Eq';

      value: string;

      field?: 'login';
    }

    export interface UnionMember1 {
      op: 'In';

      value: Array<string>;

      field?: 'login';
    }

    export interface UnionMember0 {
      op: 'Eq';

      value: string;

      field?: 'company';
    }

    export interface UnionMember1 {
      op: 'In';

      value: Array<string>;

      field?: 'company';
    }

    export interface UnionMember0 {
      op: 'Eq';

      value: string;

      field?: 'location';
    }

    export interface UnionMember1 {
      op: 'In';

      value: Array<string>;

      field?: 'location';
    }

    export interface UnionMember0 {
      op: 'Eq';

      value: string;

      field?: 'emails';
    }

    export interface UnionMember1 {
      op: 'In';

      value: Array<string>;

      field?: 'emails';
    }

    export interface UnionMember0 {
      op: 'Eq';

      value: string;

      field?: 'resolvedCountry';
    }

    export interface UnionMember1 {
      op: 'In';

      value: Array<string>;

      field?: 'resolvedCountry';
    }

    export interface UnionMember0 {
      op: 'Eq';

      value: string;

      field?: 'resolvedState';
    }

    export interface UnionMember1 {
      op: 'In';

      value: Array<string>;

      field?: 'resolvedState';
    }

    export interface UnionMember0 {
      op: 'Eq';

      value: string;

      field?: 'resolvedCity';
    }

    export interface UnionMember1 {
      op: 'In';

      value: Array<string>;

      field?: 'resolvedCity';
    }
  }
}

export declare namespace SearchUsers {
  export {
    type SearchUserSearchResponse as SearchUserSearchResponse,
    type SearchUserSearchParams as SearchUserSearchParams,
  };
}
