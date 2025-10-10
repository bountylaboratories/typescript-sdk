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
   * Optional filters for narrowing search results. Supports filtering on: githubId,
   * login, company, location, emails, resolvedCountry, resolvedState, resolvedCity.
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
    | SearchUserSearchParams.UnionMember2
    | SearchUserSearchParams.UnionMember3
    | SearchUserSearchParams.UnionMember4
    | SearchUserSearchParams.UnionMember5
    | SearchUserSearchParams.UnionMember6
    | SearchUserSearchParams.UnionMember7
    | SearchUserSearchParams.UnionMember8
    | SearchUserSearchParams.UnionMember9
    | SearchUserSearchParams.UnionMember10
    | SearchUserSearchParams.UnionMember11
    | SearchUserSearchParams.UnionMember12
    | SearchUserSearchParams.UnionMember13
    | SearchUserSearchParams.UnionMember14
    | SearchUserSearchParams.UnionMember15
    | SearchUserSearchParams.UserCompositeFilter
    | null;

  /**
   * Maximum number of results to return (default: 100, max: 1000)
   */
  maxResults?: number;
}

export namespace SearchUserSearchParams {
  export interface UnionMember0 {
    field: 'githubId';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember1 {
    field: 'githubId';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember2 {
    field: 'login';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember3 {
    field: 'login';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember4 {
    field: 'company';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember5 {
    field: 'company';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember6 {
    field: 'location';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember7 {
    field: 'location';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember8 {
    field: 'emails';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember9 {
    field: 'emails';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember10 {
    field: 'resolvedCountry';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember11 {
    field: 'resolvedCountry';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember12 {
    field: 'resolvedState';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember13 {
    field: 'resolvedState';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember14 {
    field: 'resolvedCity';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember15 {
    field: 'resolvedCity';

    op: 'In';

    value: Array<string>;
  }

  export interface UserCompositeFilter {
    /**
     * Array of field filters to combine with the logical operator
     */
    filters: Array<
      | UserCompositeFilter.UnionMember0
      | UserCompositeFilter.UnionMember1
      | UserCompositeFilter.UnionMember2
      | UserCompositeFilter.UnionMember3
      | UserCompositeFilter.UnionMember4
      | UserCompositeFilter.UnionMember5
      | UserCompositeFilter.UnionMember6
      | UserCompositeFilter.UnionMember7
      | UserCompositeFilter.UnionMember8
      | UserCompositeFilter.UnionMember9
      | UserCompositeFilter.UnionMember10
      | UserCompositeFilter.UnionMember11
      | UserCompositeFilter.UnionMember12
      | UserCompositeFilter.UnionMember13
      | UserCompositeFilter.UnionMember14
      | UserCompositeFilter.UnionMember15
    >;

    /**
     * Logical operator to combine multiple filters
     */
    op: 'And' | 'Or';
  }

  export namespace UserCompositeFilter {
    export interface UnionMember0 {
      field: 'githubId';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember1 {
      field: 'githubId';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember2 {
      field: 'login';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember3 {
      field: 'login';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember4 {
      field: 'company';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember5 {
      field: 'company';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember6 {
      field: 'location';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember7 {
      field: 'location';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember8 {
      field: 'emails';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember9 {
      field: 'emails';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember10 {
      field: 'resolvedCountry';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember11 {
      field: 'resolvedCountry';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember12 {
      field: 'resolvedState';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember13 {
      field: 'resolvedState';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember14 {
      field: 'resolvedCity';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember15 {
      field: 'resolvedCity';

      op: 'In';

      value: Array<string>;
    }
  }
}

export declare namespace SearchUsers {
  export {
    type SearchUserSearchResponse as SearchUserSearchResponse,
    type SearchUserSearchParams as SearchUserSearchParams,
  };
}
