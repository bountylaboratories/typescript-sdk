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
    | SearchUserSearchParams.UnionMember16
    | SearchUserSearchParams.UnionMember17
    | SearchUserSearchParams.UnionMember18
    | SearchUserSearchParams.UnionMember19
    | SearchUserSearchParams.UnionMember20
    | SearchUserSearchParams.UnionMember21
    | SearchUserSearchParams.UnionMember22
    | SearchUserSearchParams.UnionMember23
    | SearchUserSearchParams.UnionMember24
    | SearchUserSearchParams.UnionMember25
    | SearchUserSearchParams.UnionMember26
    | SearchUserSearchParams.UnionMember27
    | SearchUserSearchParams.UnionMember28
    | SearchUserSearchParams.UnionMember29
    | SearchUserSearchParams.UnionMember30
    | SearchUserSearchParams.UnionMember31
    | SearchUserSearchParams.UnionMember32
    | SearchUserSearchParams.UnionMember33
    | SearchUserSearchParams.UnionMember34
    | SearchUserSearchParams.UnionMember35
    | SearchUserSearchParams.UnionMember36
    | SearchUserSearchParams.UnionMember37
    | SearchUserSearchParams.UnionMember38
    | SearchUserSearchParams.UnionMember39
    | SearchUserSearchParams.UnionMember40
    | SearchUserSearchParams.UnionMember41
    | SearchUserSearchParams.UnionMember42
    | SearchUserSearchParams.UnionMember43
    | SearchUserSearchParams.UnionMember44
    | SearchUserSearchParams.UnionMember45
    | SearchUserSearchParams.UnionMember46
    | SearchUserSearchParams.UnionMember47
    | SearchUserSearchParams.UnionMember48
    | SearchUserSearchParams.UnionMember49
    | SearchUserSearchParams.UnionMember50
    | SearchUserSearchParams.UnionMember51
    | SearchUserSearchParams.UnionMember52
    | SearchUserSearchParams.UnionMember53
    | SearchUserSearchParams.UnionMember54
    | SearchUserSearchParams.UnionMember55
    | SearchUserSearchParams.UnionMember56
    | SearchUserSearchParams.UnionMember57
    | SearchUserSearchParams.UnionMember58
    | SearchUserSearchParams.UnionMember59
    | SearchUserSearchParams.UnionMember60
    | SearchUserSearchParams.UnionMember61
    | SearchUserSearchParams.UnionMember62
    | SearchUserSearchParams.UnionMember63
    | SearchUserSearchParams.UnionMember64
    | SearchUserSearchParams.UnionMember65
    | SearchUserSearchParams.UnionMember66
    | SearchUserSearchParams.UnionMember67
    | SearchUserSearchParams.UnionMember68
    | SearchUserSearchParams.UnionMember69
    | SearchUserSearchParams.UnionMember70
    | SearchUserSearchParams.UnionMember71
    | SearchUserSearchParams.UnionMember72
    | SearchUserSearchParams.UnionMember73
    | SearchUserSearchParams.UnionMember74
    | SearchUserSearchParams.UnionMember75
    | SearchUserSearchParams.UnionMember76
    | SearchUserSearchParams.UnionMember77
    | SearchUserSearchParams.UnionMember78
    | SearchUserSearchParams.UnionMember79
    | SearchUserSearchParams.UnionMember80
    | SearchUserSearchParams.UnionMember81
    | SearchUserSearchParams.UnionMember82
    | SearchUserSearchParams.UnionMember83
    | SearchUserSearchParams.UnionMember84
    | SearchUserSearchParams.UnionMember85
    | SearchUserSearchParams.UnionMember86
    | SearchUserSearchParams.UnionMember87
    | SearchUserSearchParams.UnionMember88
    | SearchUserSearchParams.UnionMember89
    | SearchUserSearchParams.UnionMember90
    | SearchUserSearchParams.UnionMember91
    | SearchUserSearchParams.UnionMember92
    | SearchUserSearchParams.UnionMember93
    | SearchUserSearchParams.UnionMember94
    | SearchUserSearchParams.UnionMember95
    | SearchUserSearchParams.UnionMember96
    | SearchUserSearchParams.UnionMember97
    | SearchUserSearchParams.UnionMember98
    | SearchUserSearchParams.UnionMember99
    | SearchUserSearchParams.UnionMember100
    | SearchUserSearchParams.UnionMember101
    | SearchUserSearchParams.UnionMember102
    | SearchUserSearchParams.UnionMember103
    | SearchUserSearchParams.UnionMember104
    | SearchUserSearchParams.UnionMember105
    | SearchUserSearchParams.UnionMember106
    | SearchUserSearchParams.UnionMember107
    | SearchUserSearchParams.UnionMember108
    | SearchUserSearchParams.UnionMember109
    | SearchUserSearchParams.UnionMember110
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

    op: 'NotEq';

    value: string;
  }

  export interface UnionMember2 {
    field: 'githubId';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember3 {
    field: 'githubId';

    op: 'NotIn';

    value: Array<string>;
  }

  export interface UnionMember4 {
    field: 'githubId';

    op: 'Lt';

    value: string;
  }

  export interface UnionMember5 {
    field: 'githubId';

    op: 'Lte';

    value: string;
  }

  export interface UnionMember6 {
    field: 'githubId';

    op: 'Gt';

    value: string;
  }

  export interface UnionMember7 {
    field: 'githubId';

    op: 'Gte';

    value: string;
  }

  export interface UnionMember8 {
    field: 'githubId';

    op: 'Glob';

    value: string;
  }

  export interface UnionMember9 {
    field: 'githubId';

    op: 'NotGlob';

    value: string;
  }

  export interface UnionMember10 {
    field: 'githubId';

    op: 'IGlob';

    value: string;
  }

  export interface UnionMember11 {
    field: 'githubId';

    op: 'NotIGlob';

    value: string;
  }

  export interface UnionMember12 {
    field: 'githubId';

    op: 'Regex';

    value: string;
  }

  export interface UnionMember13 {
    field: 'login';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember14 {
    field: 'login';

    op: 'NotEq';

    value: string;
  }

  export interface UnionMember15 {
    field: 'login';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember16 {
    field: 'login';

    op: 'NotIn';

    value: Array<string>;
  }

  export interface UnionMember17 {
    field: 'login';

    op: 'Lt';

    value: string;
  }

  export interface UnionMember18 {
    field: 'login';

    op: 'Lte';

    value: string;
  }

  export interface UnionMember19 {
    field: 'login';

    op: 'Gt';

    value: string;
  }

  export interface UnionMember20 {
    field: 'login';

    op: 'Gte';

    value: string;
  }

  export interface UnionMember21 {
    field: 'login';

    op: 'Glob';

    value: string;
  }

  export interface UnionMember22 {
    field: 'login';

    op: 'NotGlob';

    value: string;
  }

  export interface UnionMember23 {
    field: 'login';

    op: 'IGlob';

    value: string;
  }

  export interface UnionMember24 {
    field: 'login';

    op: 'NotIGlob';

    value: string;
  }

  export interface UnionMember25 {
    field: 'login';

    op: 'Regex';

    value: string;
  }

  export interface UnionMember26 {
    field: 'login';

    op: 'ContainsAllTokens';

    value: string;
  }

  export interface UnionMember27 {
    field: 'company';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember28 {
    field: 'company';

    op: 'NotEq';

    value: string;
  }

  export interface UnionMember29 {
    field: 'company';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember30 {
    field: 'company';

    op: 'NotIn';

    value: Array<string>;
  }

  export interface UnionMember31 {
    field: 'company';

    op: 'Lt';

    value: string;
  }

  export interface UnionMember32 {
    field: 'company';

    op: 'Lte';

    value: string;
  }

  export interface UnionMember33 {
    field: 'company';

    op: 'Gt';

    value: string;
  }

  export interface UnionMember34 {
    field: 'company';

    op: 'Gte';

    value: string;
  }

  export interface UnionMember35 {
    field: 'company';

    op: 'Glob';

    value: string;
  }

  export interface UnionMember36 {
    field: 'company';

    op: 'NotGlob';

    value: string;
  }

  export interface UnionMember37 {
    field: 'company';

    op: 'IGlob';

    value: string;
  }

  export interface UnionMember38 {
    field: 'company';

    op: 'NotIGlob';

    value: string;
  }

  export interface UnionMember39 {
    field: 'company';

    op: 'Regex';

    value: string;
  }

  export interface UnionMember40 {
    field: 'company';

    op: 'ContainsAllTokens';

    value: string;
  }

  export interface UnionMember41 {
    field: 'location';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember42 {
    field: 'location';

    op: 'NotEq';

    value: string;
  }

  export interface UnionMember43 {
    field: 'location';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember44 {
    field: 'location';

    op: 'NotIn';

    value: Array<string>;
  }

  export interface UnionMember45 {
    field: 'location';

    op: 'Lt';

    value: string;
  }

  export interface UnionMember46 {
    field: 'location';

    op: 'Lte';

    value: string;
  }

  export interface UnionMember47 {
    field: 'location';

    op: 'Gt';

    value: string;
  }

  export interface UnionMember48 {
    field: 'location';

    op: 'Gte';

    value: string;
  }

  export interface UnionMember49 {
    field: 'location';

    op: 'Glob';

    value: string;
  }

  export interface UnionMember50 {
    field: 'location';

    op: 'NotGlob';

    value: string;
  }

  export interface UnionMember51 {
    field: 'location';

    op: 'IGlob';

    value: string;
  }

  export interface UnionMember52 {
    field: 'location';

    op: 'NotIGlob';

    value: string;
  }

  export interface UnionMember53 {
    field: 'location';

    op: 'Regex';

    value: string;
  }

  export interface UnionMember54 {
    field: 'location';

    op: 'ContainsAllTokens';

    value: string;
  }

  export interface UnionMember55 {
    field: 'emails';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember56 {
    field: 'emails';

    op: 'NotEq';

    value: string;
  }

  export interface UnionMember57 {
    field: 'emails';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember58 {
    field: 'emails';

    op: 'NotIn';

    value: Array<string>;
  }

  export interface UnionMember59 {
    field: 'emails';

    op: 'Lt';

    value: string;
  }

  export interface UnionMember60 {
    field: 'emails';

    op: 'Lte';

    value: string;
  }

  export interface UnionMember61 {
    field: 'emails';

    op: 'Gt';

    value: string;
  }

  export interface UnionMember62 {
    field: 'emails';

    op: 'Gte';

    value: string;
  }

  export interface UnionMember63 {
    field: 'emails';

    op: 'Glob';

    value: string;
  }

  export interface UnionMember64 {
    field: 'emails';

    op: 'NotGlob';

    value: string;
  }

  export interface UnionMember65 {
    field: 'emails';

    op: 'IGlob';

    value: string;
  }

  export interface UnionMember66 {
    field: 'emails';

    op: 'NotIGlob';

    value: string;
  }

  export interface UnionMember67 {
    field: 'emails';

    op: 'Regex';

    value: string;
  }

  export interface UnionMember68 {
    field: 'emails';

    op: 'ContainsAllTokens';

    value: string;
  }

  export interface UnionMember69 {
    field: 'resolvedCountry';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember70 {
    field: 'resolvedCountry';

    op: 'NotEq';

    value: string;
  }

  export interface UnionMember71 {
    field: 'resolvedCountry';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember72 {
    field: 'resolvedCountry';

    op: 'NotIn';

    value: Array<string>;
  }

  export interface UnionMember73 {
    field: 'resolvedCountry';

    op: 'Lt';

    value: string;
  }

  export interface UnionMember74 {
    field: 'resolvedCountry';

    op: 'Lte';

    value: string;
  }

  export interface UnionMember75 {
    field: 'resolvedCountry';

    op: 'Gt';

    value: string;
  }

  export interface UnionMember76 {
    field: 'resolvedCountry';

    op: 'Gte';

    value: string;
  }

  export interface UnionMember77 {
    field: 'resolvedCountry';

    op: 'Glob';

    value: string;
  }

  export interface UnionMember78 {
    field: 'resolvedCountry';

    op: 'NotGlob';

    value: string;
  }

  export interface UnionMember79 {
    field: 'resolvedCountry';

    op: 'IGlob';

    value: string;
  }

  export interface UnionMember80 {
    field: 'resolvedCountry';

    op: 'NotIGlob';

    value: string;
  }

  export interface UnionMember81 {
    field: 'resolvedCountry';

    op: 'Regex';

    value: string;
  }

  export interface UnionMember82 {
    field: 'resolvedCountry';

    op: 'ContainsAllTokens';

    value: string;
  }

  export interface UnionMember83 {
    field: 'resolvedState';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember84 {
    field: 'resolvedState';

    op: 'NotEq';

    value: string;
  }

  export interface UnionMember85 {
    field: 'resolvedState';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember86 {
    field: 'resolvedState';

    op: 'NotIn';

    value: Array<string>;
  }

  export interface UnionMember87 {
    field: 'resolvedState';

    op: 'Lt';

    value: string;
  }

  export interface UnionMember88 {
    field: 'resolvedState';

    op: 'Lte';

    value: string;
  }

  export interface UnionMember89 {
    field: 'resolvedState';

    op: 'Gt';

    value: string;
  }

  export interface UnionMember90 {
    field: 'resolvedState';

    op: 'Gte';

    value: string;
  }

  export interface UnionMember91 {
    field: 'resolvedState';

    op: 'Glob';

    value: string;
  }

  export interface UnionMember92 {
    field: 'resolvedState';

    op: 'NotGlob';

    value: string;
  }

  export interface UnionMember93 {
    field: 'resolvedState';

    op: 'IGlob';

    value: string;
  }

  export interface UnionMember94 {
    field: 'resolvedState';

    op: 'NotIGlob';

    value: string;
  }

  export interface UnionMember95 {
    field: 'resolvedState';

    op: 'Regex';

    value: string;
  }

  export interface UnionMember96 {
    field: 'resolvedState';

    op: 'ContainsAllTokens';

    value: string;
  }

  export interface UnionMember97 {
    field: 'resolvedCity';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember98 {
    field: 'resolvedCity';

    op: 'NotEq';

    value: string;
  }

  export interface UnionMember99 {
    field: 'resolvedCity';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember100 {
    field: 'resolvedCity';

    op: 'NotIn';

    value: Array<string>;
  }

  export interface UnionMember101 {
    field: 'resolvedCity';

    op: 'Lt';

    value: string;
  }

  export interface UnionMember102 {
    field: 'resolvedCity';

    op: 'Lte';

    value: string;
  }

  export interface UnionMember103 {
    field: 'resolvedCity';

    op: 'Gt';

    value: string;
  }

  export interface UnionMember104 {
    field: 'resolvedCity';

    op: 'Gte';

    value: string;
  }

  export interface UnionMember105 {
    field: 'resolvedCity';

    op: 'Glob';

    value: string;
  }

  export interface UnionMember106 {
    field: 'resolvedCity';

    op: 'NotGlob';

    value: string;
  }

  export interface UnionMember107 {
    field: 'resolvedCity';

    op: 'IGlob';

    value: string;
  }

  export interface UnionMember108 {
    field: 'resolvedCity';

    op: 'NotIGlob';

    value: string;
  }

  export interface UnionMember109 {
    field: 'resolvedCity';

    op: 'Regex';

    value: string;
  }

  export interface UnionMember110 {
    field: 'resolvedCity';

    op: 'ContainsAllTokens';

    value: string;
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
      | UserCompositeFilter.UnionMember16
      | UserCompositeFilter.UnionMember17
      | UserCompositeFilter.UnionMember18
      | UserCompositeFilter.UnionMember19
      | UserCompositeFilter.UnionMember20
      | UserCompositeFilter.UnionMember21
      | UserCompositeFilter.UnionMember22
      | UserCompositeFilter.UnionMember23
      | UserCompositeFilter.UnionMember24
      | UserCompositeFilter.UnionMember25
      | UserCompositeFilter.UnionMember26
      | UserCompositeFilter.UnionMember27
      | UserCompositeFilter.UnionMember28
      | UserCompositeFilter.UnionMember29
      | UserCompositeFilter.UnionMember30
      | UserCompositeFilter.UnionMember31
      | UserCompositeFilter.UnionMember32
      | UserCompositeFilter.UnionMember33
      | UserCompositeFilter.UnionMember34
      | UserCompositeFilter.UnionMember35
      | UserCompositeFilter.UnionMember36
      | UserCompositeFilter.UnionMember37
      | UserCompositeFilter.UnionMember38
      | UserCompositeFilter.UnionMember39
      | UserCompositeFilter.UnionMember40
      | UserCompositeFilter.UnionMember41
      | UserCompositeFilter.UnionMember42
      | UserCompositeFilter.UnionMember43
      | UserCompositeFilter.UnionMember44
      | UserCompositeFilter.UnionMember45
      | UserCompositeFilter.UnionMember46
      | UserCompositeFilter.UnionMember47
      | UserCompositeFilter.UnionMember48
      | UserCompositeFilter.UnionMember49
      | UserCompositeFilter.UnionMember50
      | UserCompositeFilter.UnionMember51
      | UserCompositeFilter.UnionMember52
      | UserCompositeFilter.UnionMember53
      | UserCompositeFilter.UnionMember54
      | UserCompositeFilter.UnionMember55
      | UserCompositeFilter.UnionMember56
      | UserCompositeFilter.UnionMember57
      | UserCompositeFilter.UnionMember58
      | UserCompositeFilter.UnionMember59
      | UserCompositeFilter.UnionMember60
      | UserCompositeFilter.UnionMember61
      | UserCompositeFilter.UnionMember62
      | UserCompositeFilter.UnionMember63
      | UserCompositeFilter.UnionMember64
      | UserCompositeFilter.UnionMember65
      | UserCompositeFilter.UnionMember66
      | UserCompositeFilter.UnionMember67
      | UserCompositeFilter.UnionMember68
      | UserCompositeFilter.UnionMember69
      | UserCompositeFilter.UnionMember70
      | UserCompositeFilter.UnionMember71
      | UserCompositeFilter.UnionMember72
      | UserCompositeFilter.UnionMember73
      | UserCompositeFilter.UnionMember74
      | UserCompositeFilter.UnionMember75
      | UserCompositeFilter.UnionMember76
      | UserCompositeFilter.UnionMember77
      | UserCompositeFilter.UnionMember78
      | UserCompositeFilter.UnionMember79
      | UserCompositeFilter.UnionMember80
      | UserCompositeFilter.UnionMember81
      | UserCompositeFilter.UnionMember82
      | UserCompositeFilter.UnionMember83
      | UserCompositeFilter.UnionMember84
      | UserCompositeFilter.UnionMember85
      | UserCompositeFilter.UnionMember86
      | UserCompositeFilter.UnionMember87
      | UserCompositeFilter.UnionMember88
      | UserCompositeFilter.UnionMember89
      | UserCompositeFilter.UnionMember90
      | UserCompositeFilter.UnionMember91
      | UserCompositeFilter.UnionMember92
      | UserCompositeFilter.UnionMember93
      | UserCompositeFilter.UnionMember94
      | UserCompositeFilter.UnionMember95
      | UserCompositeFilter.UnionMember96
      | UserCompositeFilter.UnionMember97
      | UserCompositeFilter.UnionMember98
      | UserCompositeFilter.UnionMember99
      | UserCompositeFilter.UnionMember100
      | UserCompositeFilter.UnionMember101
      | UserCompositeFilter.UnionMember102
      | UserCompositeFilter.UnionMember103
      | UserCompositeFilter.UnionMember104
      | UserCompositeFilter.UnionMember105
      | UserCompositeFilter.UnionMember106
      | UserCompositeFilter.UnionMember107
      | UserCompositeFilter.UnionMember108
      | UserCompositeFilter.UnionMember109
      | UserCompositeFilter.UnionMember110
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

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember2 {
      field: 'githubId';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember3 {
      field: 'githubId';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember4 {
      field: 'githubId';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember5 {
      field: 'githubId';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember6 {
      field: 'githubId';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember7 {
      field: 'githubId';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember8 {
      field: 'githubId';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember9 {
      field: 'githubId';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember10 {
      field: 'githubId';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember11 {
      field: 'githubId';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember12 {
      field: 'githubId';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember13 {
      field: 'login';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember14 {
      field: 'login';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember15 {
      field: 'login';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember16 {
      field: 'login';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember17 {
      field: 'login';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember18 {
      field: 'login';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember19 {
      field: 'login';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember20 {
      field: 'login';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember21 {
      field: 'login';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember22 {
      field: 'login';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember23 {
      field: 'login';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember24 {
      field: 'login';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember25 {
      field: 'login';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember26 {
      field: 'login';

      op: 'ContainsAllTokens';

      value: string;
    }

    export interface UnionMember27 {
      field: 'company';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember28 {
      field: 'company';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember29 {
      field: 'company';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember30 {
      field: 'company';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember31 {
      field: 'company';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember32 {
      field: 'company';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember33 {
      field: 'company';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember34 {
      field: 'company';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember35 {
      field: 'company';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember36 {
      field: 'company';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember37 {
      field: 'company';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember38 {
      field: 'company';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember39 {
      field: 'company';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember40 {
      field: 'company';

      op: 'ContainsAllTokens';

      value: string;
    }

    export interface UnionMember41 {
      field: 'location';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember42 {
      field: 'location';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember43 {
      field: 'location';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember44 {
      field: 'location';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember45 {
      field: 'location';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember46 {
      field: 'location';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember47 {
      field: 'location';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember48 {
      field: 'location';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember49 {
      field: 'location';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember50 {
      field: 'location';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember51 {
      field: 'location';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember52 {
      field: 'location';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember53 {
      field: 'location';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember54 {
      field: 'location';

      op: 'ContainsAllTokens';

      value: string;
    }

    export interface UnionMember55 {
      field: 'emails';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember56 {
      field: 'emails';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember57 {
      field: 'emails';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember58 {
      field: 'emails';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember59 {
      field: 'emails';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember60 {
      field: 'emails';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember61 {
      field: 'emails';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember62 {
      field: 'emails';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember63 {
      field: 'emails';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember64 {
      field: 'emails';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember65 {
      field: 'emails';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember66 {
      field: 'emails';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember67 {
      field: 'emails';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember68 {
      field: 'emails';

      op: 'ContainsAllTokens';

      value: string;
    }

    export interface UnionMember69 {
      field: 'resolvedCountry';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember70 {
      field: 'resolvedCountry';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember71 {
      field: 'resolvedCountry';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember72 {
      field: 'resolvedCountry';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember73 {
      field: 'resolvedCountry';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember74 {
      field: 'resolvedCountry';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember75 {
      field: 'resolvedCountry';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember76 {
      field: 'resolvedCountry';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember77 {
      field: 'resolvedCountry';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember78 {
      field: 'resolvedCountry';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember79 {
      field: 'resolvedCountry';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember80 {
      field: 'resolvedCountry';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember81 {
      field: 'resolvedCountry';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember82 {
      field: 'resolvedCountry';

      op: 'ContainsAllTokens';

      value: string;
    }

    export interface UnionMember83 {
      field: 'resolvedState';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember84 {
      field: 'resolvedState';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember85 {
      field: 'resolvedState';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember86 {
      field: 'resolvedState';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember87 {
      field: 'resolvedState';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember88 {
      field: 'resolvedState';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember89 {
      field: 'resolvedState';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember90 {
      field: 'resolvedState';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember91 {
      field: 'resolvedState';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember92 {
      field: 'resolvedState';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember93 {
      field: 'resolvedState';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember94 {
      field: 'resolvedState';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember95 {
      field: 'resolvedState';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember96 {
      field: 'resolvedState';

      op: 'ContainsAllTokens';

      value: string;
    }

    export interface UnionMember97 {
      field: 'resolvedCity';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember98 {
      field: 'resolvedCity';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember99 {
      field: 'resolvedCity';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember100 {
      field: 'resolvedCity';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember101 {
      field: 'resolvedCity';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember102 {
      field: 'resolvedCity';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember103 {
      field: 'resolvedCity';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember104 {
      field: 'resolvedCity';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember105 {
      field: 'resolvedCity';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember106 {
      field: 'resolvedCity';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember107 {
      field: 'resolvedCity';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember108 {
      field: 'resolvedCity';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember109 {
      field: 'resolvedCity';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember110 {
      field: 'resolvedCity';

      op: 'ContainsAllTokens';

      value: string;
    }
  }
}

export declare namespace SearchUsers {
  export {
    type SearchUserSearchResponse as SearchUserSearchResponse,
    type SearchUserSearchParams as SearchUserSearchParams,
  };
}
