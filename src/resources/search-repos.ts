// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SearchRepos extends APIResource {
  /**
   * Semantic search across repository READMEs and descriptions using vector
   * embeddings and cosine similarity. Results include relevance scores. Requires
   * SEARCH service. Credits: 1 per result returned.
   *
   * @example
   * ```ts
   * const response = await client.searchRepos.search({
   *   query: 'react component library with typescript',
   * });
   * ```
   */
  search(body: SearchRepoSearchParams, options?: RequestOptions): APIPromise<SearchRepoSearchResponse> {
    return this._client.post('/api/search/repos', { body, ...options });
  }
}

export interface SearchRepoSearchResponse {
  /**
   * Number of repositories returned
   */
  count: number;

  /**
   * Credits consumed (1 per result)
   */
  creditsUsed: number;

  /**
   * Array of repository search results with relevance scores
   */
  repositories: Array<SearchRepoSearchResponse.Repository | null>;
}

export namespace SearchRepoSearchResponse {
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

export interface SearchRepoSearchParams {
  /**
   * Natural language search query for semantic search across repository README and
   * description using vector embeddings
   */
  query: string;

  /**
   * Optional filters for narrowing search results. Supports filtering on: githubId,
   * ownerLogin, name, stargazerCount, language, totalIssuesCount, totalIssuesOpen,
   * totalIssuesClosed, lastContributorLocations.
   *
   * Filter structure:
   *
   * - Field filters: { field: "fieldName", op: "Eq"|"In"|"Gte"|"Lte", value:
   *   string|number|array }
   * - Composite filters: { op: "And"|"Or", filters: [...] }
   *
   * Supported operators:
   *
   * - String fields: Eq (exact match), In (one of array)
   * - Number fields: Eq (exact), In (one of array), Gte (>=), Lte (<=)
   * - Use And/Or to combine multiple filters
   */
  filters?:
    | SearchRepoSearchParams.UnionMember0
    | SearchRepoSearchParams.UnionMember1
    | SearchRepoSearchParams.UnionMember2
    | SearchRepoSearchParams.UnionMember3
    | SearchRepoSearchParams.UnionMember4
    | SearchRepoSearchParams.UnionMember5
    | SearchRepoSearchParams.UnionMember6
    | SearchRepoSearchParams.UnionMember7
    | SearchRepoSearchParams.UnionMember8
    | SearchRepoSearchParams.UnionMember9
    | SearchRepoSearchParams.UnionMember10
    | SearchRepoSearchParams.UnionMember11
    | SearchRepoSearchParams.UnionMember12
    | SearchRepoSearchParams.UnionMember13
    | SearchRepoSearchParams.UnionMember14
    | SearchRepoSearchParams.UnionMember15
    | SearchRepoSearchParams.UnionMember16
    | SearchRepoSearchParams.UnionMember17
    | SearchRepoSearchParams.UnionMember18
    | SearchRepoSearchParams.UnionMember19
    | SearchRepoSearchParams.UnionMember20
    | SearchRepoSearchParams.UnionMember21
    | SearchRepoSearchParams.UnionMember22
    | SearchRepoSearchParams.UnionMember23
    | SearchRepoSearchParams.UnionMember24
    | SearchRepoSearchParams.UnionMember25
    | SearchRepoSearchParams.UnionMember26
    | SearchRepoSearchParams.UnionMember27
    | SearchRepoSearchParams.UnionMember28
    | SearchRepoSearchParams.UnionMember29
    | SearchRepoSearchParams.UnionMember30
    | SearchRepoSearchParams.UnionMember31
    | SearchRepoSearchParams.UnionMember32
    | SearchRepoSearchParams.UnionMember33
    | SearchRepoSearchParams.UnionMember34
    | SearchRepoSearchParams.UnionMember35
    | SearchRepoSearchParams.UnionMember36
    | SearchRepoSearchParams.UnionMember37
    | SearchRepoSearchParams.UnionMember38
    | SearchRepoSearchParams.UnionMember39
    | SearchRepoSearchParams.UnionMember40
    | SearchRepoSearchParams.UnionMember41
    | SearchRepoSearchParams.UnionMember42
    | SearchRepoSearchParams.UnionMember43
    | SearchRepoSearchParams.UnionMember44
    | SearchRepoSearchParams.UnionMember45
    | SearchRepoSearchParams.UnionMember46
    | SearchRepoSearchParams.UnionMember47
    | SearchRepoSearchParams.UnionMember48
    | SearchRepoSearchParams.UnionMember49
    | SearchRepoSearchParams.UnionMember50
    | SearchRepoSearchParams.UnionMember51
    | SearchRepoSearchParams.UnionMember52
    | SearchRepoSearchParams.UnionMember53
    | SearchRepoSearchParams.UnionMember54
    | SearchRepoSearchParams.UnionMember55
    | SearchRepoSearchParams.UnionMember56
    | SearchRepoSearchParams.UnionMember57
    | SearchRepoSearchParams.UnionMember58
    | SearchRepoSearchParams.UnionMember59
    | SearchRepoSearchParams.UnionMember60
    | SearchRepoSearchParams.UnionMember61
    | SearchRepoSearchParams.UnionMember62
    | SearchRepoSearchParams.UnionMember63
    | SearchRepoSearchParams.UnionMember64
    | SearchRepoSearchParams.UnionMember65
    | SearchRepoSearchParams.UnionMember66
    | SearchRepoSearchParams.UnionMember67
    | SearchRepoSearchParams.UnionMember68
    | SearchRepoSearchParams.UnionMember69
    | SearchRepoSearchParams.UnionMember70
    | SearchRepoSearchParams.UnionMember71
    | SearchRepoSearchParams.UnionMember72
    | SearchRepoSearchParams.UnionMember73
    | SearchRepoSearchParams.UnionMember74
    | SearchRepoSearchParams.UnionMember75
    | SearchRepoSearchParams.UnionMember76
    | SearchRepoSearchParams.UnionMember77
    | SearchRepoSearchParams.UnionMember78
    | SearchRepoSearchParams.UnionMember79
    | SearchRepoSearchParams.UnionMember80
    | SearchRepoSearchParams.UnionMember81
    | SearchRepoSearchParams.UnionMember82
    | SearchRepoSearchParams.UnionMember83
    | SearchRepoSearchParams.UnionMember84
    | SearchRepoSearchParams.UnionMember85
    | SearchRepoSearchParams.UnionMember86
    | SearchRepoSearchParams.UnionMember87
    | SearchRepoSearchParams.UnionMember88
    | SearchRepoSearchParams.UnionMember89
    | SearchRepoSearchParams.UnionMember90
    | SearchRepoSearchParams.UnionMember91
    | SearchRepoSearchParams.UnionMember92
    | SearchRepoSearchParams.RepoCompositeFilter
    | null;

  /**
   * Maximum number of results to return (default: 100, max: 1000)
   */
  maxResults?: number;
}

export namespace SearchRepoSearchParams {
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
    field: 'ownerLogin';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember14 {
    field: 'ownerLogin';

    op: 'NotEq';

    value: string;
  }

  export interface UnionMember15 {
    field: 'ownerLogin';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember16 {
    field: 'ownerLogin';

    op: 'NotIn';

    value: Array<string>;
  }

  export interface UnionMember17 {
    field: 'ownerLogin';

    op: 'Lt';

    value: string;
  }

  export interface UnionMember18 {
    field: 'ownerLogin';

    op: 'Lte';

    value: string;
  }

  export interface UnionMember19 {
    field: 'ownerLogin';

    op: 'Gt';

    value: string;
  }

  export interface UnionMember20 {
    field: 'ownerLogin';

    op: 'Gte';

    value: string;
  }

  export interface UnionMember21 {
    field: 'ownerLogin';

    op: 'Glob';

    value: string;
  }

  export interface UnionMember22 {
    field: 'ownerLogin';

    op: 'NotGlob';

    value: string;
  }

  export interface UnionMember23 {
    field: 'ownerLogin';

    op: 'IGlob';

    value: string;
  }

  export interface UnionMember24 {
    field: 'ownerLogin';

    op: 'NotIGlob';

    value: string;
  }

  export interface UnionMember25 {
    field: 'ownerLogin';

    op: 'Regex';

    value: string;
  }

  export interface UnionMember26 {
    field: 'name';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember27 {
    field: 'name';

    op: 'NotEq';

    value: string;
  }

  export interface UnionMember28 {
    field: 'name';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember29 {
    field: 'name';

    op: 'NotIn';

    value: Array<string>;
  }

  export interface UnionMember30 {
    field: 'name';

    op: 'Lt';

    value: string;
  }

  export interface UnionMember31 {
    field: 'name';

    op: 'Lte';

    value: string;
  }

  export interface UnionMember32 {
    field: 'name';

    op: 'Gt';

    value: string;
  }

  export interface UnionMember33 {
    field: 'name';

    op: 'Gte';

    value: string;
  }

  export interface UnionMember34 {
    field: 'name';

    op: 'Glob';

    value: string;
  }

  export interface UnionMember35 {
    field: 'name';

    op: 'NotGlob';

    value: string;
  }

  export interface UnionMember36 {
    field: 'name';

    op: 'IGlob';

    value: string;
  }

  export interface UnionMember37 {
    field: 'name';

    op: 'NotIGlob';

    value: string;
  }

  export interface UnionMember38 {
    field: 'name';

    op: 'Regex';

    value: string;
  }

  export interface UnionMember39 {
    field: 'stargazerCount';

    op: 'Eq';

    value: number;
  }

  export interface UnionMember40 {
    field: 'stargazerCount';

    op: 'NotEq';

    value: number;
  }

  export interface UnionMember41 {
    field: 'stargazerCount';

    op: 'In';

    value: Array<number>;
  }

  export interface UnionMember42 {
    field: 'stargazerCount';

    op: 'NotIn';

    value: Array<number>;
  }

  export interface UnionMember43 {
    field: 'stargazerCount';

    op: 'Lt';

    value: number;
  }

  export interface UnionMember44 {
    field: 'stargazerCount';

    op: 'Lte';

    value: number;
  }

  export interface UnionMember45 {
    field: 'stargazerCount';

    op: 'Gt';

    value: number;
  }

  export interface UnionMember46 {
    field: 'stargazerCount';

    op: 'Gte';

    value: number;
  }

  export interface UnionMember47 {
    field: 'language';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember48 {
    field: 'language';

    op: 'NotEq';

    value: string;
  }

  export interface UnionMember49 {
    field: 'language';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember50 {
    field: 'language';

    op: 'NotIn';

    value: Array<string>;
  }

  export interface UnionMember51 {
    field: 'language';

    op: 'Lt';

    value: string;
  }

  export interface UnionMember52 {
    field: 'language';

    op: 'Lte';

    value: string;
  }

  export interface UnionMember53 {
    field: 'language';

    op: 'Gt';

    value: string;
  }

  export interface UnionMember54 {
    field: 'language';

    op: 'Gte';

    value: string;
  }

  export interface UnionMember55 {
    field: 'language';

    op: 'Glob';

    value: string;
  }

  export interface UnionMember56 {
    field: 'language';

    op: 'NotGlob';

    value: string;
  }

  export interface UnionMember57 {
    field: 'language';

    op: 'IGlob';

    value: string;
  }

  export interface UnionMember58 {
    field: 'language';

    op: 'NotIGlob';

    value: string;
  }

  export interface UnionMember59 {
    field: 'language';

    op: 'Regex';

    value: string;
  }

  export interface UnionMember60 {
    field: 'totalIssuesCount';

    op: 'Eq';

    value: number;
  }

  export interface UnionMember61 {
    field: 'totalIssuesCount';

    op: 'NotEq';

    value: number;
  }

  export interface UnionMember62 {
    field: 'totalIssuesCount';

    op: 'In';

    value: Array<number>;
  }

  export interface UnionMember63 {
    field: 'totalIssuesCount';

    op: 'NotIn';

    value: Array<number>;
  }

  export interface UnionMember64 {
    field: 'totalIssuesCount';

    op: 'Lt';

    value: number;
  }

  export interface UnionMember65 {
    field: 'totalIssuesCount';

    op: 'Lte';

    value: number;
  }

  export interface UnionMember66 {
    field: 'totalIssuesCount';

    op: 'Gt';

    value: number;
  }

  export interface UnionMember67 {
    field: 'totalIssuesCount';

    op: 'Gte';

    value: number;
  }

  export interface UnionMember68 {
    field: 'totalIssuesOpen';

    op: 'Eq';

    value: number;
  }

  export interface UnionMember69 {
    field: 'totalIssuesOpen';

    op: 'NotEq';

    value: number;
  }

  export interface UnionMember70 {
    field: 'totalIssuesOpen';

    op: 'In';

    value: Array<number>;
  }

  export interface UnionMember71 {
    field: 'totalIssuesOpen';

    op: 'NotIn';

    value: Array<number>;
  }

  export interface UnionMember72 {
    field: 'totalIssuesOpen';

    op: 'Lt';

    value: number;
  }

  export interface UnionMember73 {
    field: 'totalIssuesOpen';

    op: 'Lte';

    value: number;
  }

  export interface UnionMember74 {
    field: 'totalIssuesOpen';

    op: 'Gt';

    value: number;
  }

  export interface UnionMember75 {
    field: 'totalIssuesOpen';

    op: 'Gte';

    value: number;
  }

  export interface UnionMember76 {
    field: 'totalIssuesClosed';

    op: 'Eq';

    value: number;
  }

  export interface UnionMember77 {
    field: 'totalIssuesClosed';

    op: 'NotEq';

    value: number;
  }

  export interface UnionMember78 {
    field: 'totalIssuesClosed';

    op: 'In';

    value: Array<number>;
  }

  export interface UnionMember79 {
    field: 'totalIssuesClosed';

    op: 'NotIn';

    value: Array<number>;
  }

  export interface UnionMember80 {
    field: 'totalIssuesClosed';

    op: 'Lt';

    value: number;
  }

  export interface UnionMember81 {
    field: 'totalIssuesClosed';

    op: 'Lte';

    value: number;
  }

  export interface UnionMember82 {
    field: 'totalIssuesClosed';

    op: 'Gt';

    value: number;
  }

  export interface UnionMember83 {
    field: 'totalIssuesClosed';

    op: 'Gte';

    value: number;
  }

  export interface UnionMember84 {
    field: 'lastContributorLocations';

    op: 'Contains';

    value: string;
  }

  export interface UnionMember85 {
    field: 'lastContributorLocations';

    op: 'NotContains';

    value: string;
  }

  export interface UnionMember86 {
    field: 'lastContributorLocations';

    op: 'ContainsAny';

    value: Array<string>;
  }

  export interface UnionMember87 {
    field: 'lastContributorLocations';

    op: 'NotContainsAny';

    value: Array<string>;
  }

  export interface UnionMember88 {
    field: 'lastContributorLocations';

    op: 'AnyLt';

    value: string;
  }

  export interface UnionMember89 {
    field: 'lastContributorLocations';

    op: 'AnyLte';

    value: string;
  }

  export interface UnionMember90 {
    field: 'lastContributorLocations';

    op: 'AnyGt';

    value: string;
  }

  export interface UnionMember91 {
    field: 'lastContributorLocations';

    op: 'AnyGte';

    value: string;
  }

  export interface UnionMember92 {
    field: 'lastContributorLocations';

    op: 'ContainsAllTokens';

    value: string;
  }

  export interface RepoCompositeFilter {
    /**
     * Array of field filters to combine with the logical operator
     */
    filters: Array<
      | RepoCompositeFilter.UnionMember0
      | RepoCompositeFilter.UnionMember1
      | RepoCompositeFilter.UnionMember2
      | RepoCompositeFilter.UnionMember3
      | RepoCompositeFilter.UnionMember4
      | RepoCompositeFilter.UnionMember5
      | RepoCompositeFilter.UnionMember6
      | RepoCompositeFilter.UnionMember7
      | RepoCompositeFilter.UnionMember8
      | RepoCompositeFilter.UnionMember9
      | RepoCompositeFilter.UnionMember10
      | RepoCompositeFilter.UnionMember11
      | RepoCompositeFilter.UnionMember12
      | RepoCompositeFilter.UnionMember13
      | RepoCompositeFilter.UnionMember14
      | RepoCompositeFilter.UnionMember15
      | RepoCompositeFilter.UnionMember16
      | RepoCompositeFilter.UnionMember17
      | RepoCompositeFilter.UnionMember18
      | RepoCompositeFilter.UnionMember19
      | RepoCompositeFilter.UnionMember20
      | RepoCompositeFilter.UnionMember21
      | RepoCompositeFilter.UnionMember22
      | RepoCompositeFilter.UnionMember23
      | RepoCompositeFilter.UnionMember24
      | RepoCompositeFilter.UnionMember25
      | RepoCompositeFilter.UnionMember26
      | RepoCompositeFilter.UnionMember27
      | RepoCompositeFilter.UnionMember28
      | RepoCompositeFilter.UnionMember29
      | RepoCompositeFilter.UnionMember30
      | RepoCompositeFilter.UnionMember31
      | RepoCompositeFilter.UnionMember32
      | RepoCompositeFilter.UnionMember33
      | RepoCompositeFilter.UnionMember34
      | RepoCompositeFilter.UnionMember35
      | RepoCompositeFilter.UnionMember36
      | RepoCompositeFilter.UnionMember37
      | RepoCompositeFilter.UnionMember38
      | RepoCompositeFilter.UnionMember39
      | RepoCompositeFilter.UnionMember40
      | RepoCompositeFilter.UnionMember41
      | RepoCompositeFilter.UnionMember42
      | RepoCompositeFilter.UnionMember43
      | RepoCompositeFilter.UnionMember44
      | RepoCompositeFilter.UnionMember45
      | RepoCompositeFilter.UnionMember46
      | RepoCompositeFilter.UnionMember47
      | RepoCompositeFilter.UnionMember48
      | RepoCompositeFilter.UnionMember49
      | RepoCompositeFilter.UnionMember50
      | RepoCompositeFilter.UnionMember51
      | RepoCompositeFilter.UnionMember52
      | RepoCompositeFilter.UnionMember53
      | RepoCompositeFilter.UnionMember54
      | RepoCompositeFilter.UnionMember55
      | RepoCompositeFilter.UnionMember56
      | RepoCompositeFilter.UnionMember57
      | RepoCompositeFilter.UnionMember58
      | RepoCompositeFilter.UnionMember59
      | RepoCompositeFilter.UnionMember60
      | RepoCompositeFilter.UnionMember61
      | RepoCompositeFilter.UnionMember62
      | RepoCompositeFilter.UnionMember63
      | RepoCompositeFilter.UnionMember64
      | RepoCompositeFilter.UnionMember65
      | RepoCompositeFilter.UnionMember66
      | RepoCompositeFilter.UnionMember67
      | RepoCompositeFilter.UnionMember68
      | RepoCompositeFilter.UnionMember69
      | RepoCompositeFilter.UnionMember70
      | RepoCompositeFilter.UnionMember71
      | RepoCompositeFilter.UnionMember72
      | RepoCompositeFilter.UnionMember73
      | RepoCompositeFilter.UnionMember74
      | RepoCompositeFilter.UnionMember75
      | RepoCompositeFilter.UnionMember76
      | RepoCompositeFilter.UnionMember77
      | RepoCompositeFilter.UnionMember78
      | RepoCompositeFilter.UnionMember79
      | RepoCompositeFilter.UnionMember80
      | RepoCompositeFilter.UnionMember81
      | RepoCompositeFilter.UnionMember82
      | RepoCompositeFilter.UnionMember83
      | RepoCompositeFilter.UnionMember84
      | RepoCompositeFilter.UnionMember85
      | RepoCompositeFilter.UnionMember86
      | RepoCompositeFilter.UnionMember87
      | RepoCompositeFilter.UnionMember88
      | RepoCompositeFilter.UnionMember89
      | RepoCompositeFilter.UnionMember90
      | RepoCompositeFilter.UnionMember91
      | RepoCompositeFilter.UnionMember92
    >;

    /**
     * Logical operator to combine multiple filters
     */
    op: 'And' | 'Or';
  }

  export namespace RepoCompositeFilter {
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
      field: 'ownerLogin';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember14 {
      field: 'ownerLogin';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember15 {
      field: 'ownerLogin';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember16 {
      field: 'ownerLogin';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember17 {
      field: 'ownerLogin';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember18 {
      field: 'ownerLogin';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember19 {
      field: 'ownerLogin';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember20 {
      field: 'ownerLogin';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember21 {
      field: 'ownerLogin';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember22 {
      field: 'ownerLogin';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember23 {
      field: 'ownerLogin';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember24 {
      field: 'ownerLogin';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember25 {
      field: 'ownerLogin';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember26 {
      field: 'name';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember27 {
      field: 'name';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember28 {
      field: 'name';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember29 {
      field: 'name';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember30 {
      field: 'name';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember31 {
      field: 'name';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember32 {
      field: 'name';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember33 {
      field: 'name';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember34 {
      field: 'name';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember35 {
      field: 'name';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember36 {
      field: 'name';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember37 {
      field: 'name';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember38 {
      field: 'name';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember39 {
      field: 'stargazerCount';

      op: 'Eq';

      value: number;
    }

    export interface UnionMember40 {
      field: 'stargazerCount';

      op: 'NotEq';

      value: number;
    }

    export interface UnionMember41 {
      field: 'stargazerCount';

      op: 'In';

      value: Array<number>;
    }

    export interface UnionMember42 {
      field: 'stargazerCount';

      op: 'NotIn';

      value: Array<number>;
    }

    export interface UnionMember43 {
      field: 'stargazerCount';

      op: 'Lt';

      value: number;
    }

    export interface UnionMember44 {
      field: 'stargazerCount';

      op: 'Lte';

      value: number;
    }

    export interface UnionMember45 {
      field: 'stargazerCount';

      op: 'Gt';

      value: number;
    }

    export interface UnionMember46 {
      field: 'stargazerCount';

      op: 'Gte';

      value: number;
    }

    export interface UnionMember47 {
      field: 'language';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember48 {
      field: 'language';

      op: 'NotEq';

      value: string;
    }

    export interface UnionMember49 {
      field: 'language';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember50 {
      field: 'language';

      op: 'NotIn';

      value: Array<string>;
    }

    export interface UnionMember51 {
      field: 'language';

      op: 'Lt';

      value: string;
    }

    export interface UnionMember52 {
      field: 'language';

      op: 'Lte';

      value: string;
    }

    export interface UnionMember53 {
      field: 'language';

      op: 'Gt';

      value: string;
    }

    export interface UnionMember54 {
      field: 'language';

      op: 'Gte';

      value: string;
    }

    export interface UnionMember55 {
      field: 'language';

      op: 'Glob';

      value: string;
    }

    export interface UnionMember56 {
      field: 'language';

      op: 'NotGlob';

      value: string;
    }

    export interface UnionMember57 {
      field: 'language';

      op: 'IGlob';

      value: string;
    }

    export interface UnionMember58 {
      field: 'language';

      op: 'NotIGlob';

      value: string;
    }

    export interface UnionMember59 {
      field: 'language';

      op: 'Regex';

      value: string;
    }

    export interface UnionMember60 {
      field: 'totalIssuesCount';

      op: 'Eq';

      value: number;
    }

    export interface UnionMember61 {
      field: 'totalIssuesCount';

      op: 'NotEq';

      value: number;
    }

    export interface UnionMember62 {
      field: 'totalIssuesCount';

      op: 'In';

      value: Array<number>;
    }

    export interface UnionMember63 {
      field: 'totalIssuesCount';

      op: 'NotIn';

      value: Array<number>;
    }

    export interface UnionMember64 {
      field: 'totalIssuesCount';

      op: 'Lt';

      value: number;
    }

    export interface UnionMember65 {
      field: 'totalIssuesCount';

      op: 'Lte';

      value: number;
    }

    export interface UnionMember66 {
      field: 'totalIssuesCount';

      op: 'Gt';

      value: number;
    }

    export interface UnionMember67 {
      field: 'totalIssuesCount';

      op: 'Gte';

      value: number;
    }

    export interface UnionMember68 {
      field: 'totalIssuesOpen';

      op: 'Eq';

      value: number;
    }

    export interface UnionMember69 {
      field: 'totalIssuesOpen';

      op: 'NotEq';

      value: number;
    }

    export interface UnionMember70 {
      field: 'totalIssuesOpen';

      op: 'In';

      value: Array<number>;
    }

    export interface UnionMember71 {
      field: 'totalIssuesOpen';

      op: 'NotIn';

      value: Array<number>;
    }

    export interface UnionMember72 {
      field: 'totalIssuesOpen';

      op: 'Lt';

      value: number;
    }

    export interface UnionMember73 {
      field: 'totalIssuesOpen';

      op: 'Lte';

      value: number;
    }

    export interface UnionMember74 {
      field: 'totalIssuesOpen';

      op: 'Gt';

      value: number;
    }

    export interface UnionMember75 {
      field: 'totalIssuesOpen';

      op: 'Gte';

      value: number;
    }

    export interface UnionMember76 {
      field: 'totalIssuesClosed';

      op: 'Eq';

      value: number;
    }

    export interface UnionMember77 {
      field: 'totalIssuesClosed';

      op: 'NotEq';

      value: number;
    }

    export interface UnionMember78 {
      field: 'totalIssuesClosed';

      op: 'In';

      value: Array<number>;
    }

    export interface UnionMember79 {
      field: 'totalIssuesClosed';

      op: 'NotIn';

      value: Array<number>;
    }

    export interface UnionMember80 {
      field: 'totalIssuesClosed';

      op: 'Lt';

      value: number;
    }

    export interface UnionMember81 {
      field: 'totalIssuesClosed';

      op: 'Lte';

      value: number;
    }

    export interface UnionMember82 {
      field: 'totalIssuesClosed';

      op: 'Gt';

      value: number;
    }

    export interface UnionMember83 {
      field: 'totalIssuesClosed';

      op: 'Gte';

      value: number;
    }

    export interface UnionMember84 {
      field: 'lastContributorLocations';

      op: 'Contains';

      value: string;
    }

    export interface UnionMember85 {
      field: 'lastContributorLocations';

      op: 'NotContains';

      value: string;
    }

    export interface UnionMember86 {
      field: 'lastContributorLocations';

      op: 'ContainsAny';

      value: Array<string>;
    }

    export interface UnionMember87 {
      field: 'lastContributorLocations';

      op: 'NotContainsAny';

      value: Array<string>;
    }

    export interface UnionMember88 {
      field: 'lastContributorLocations';

      op: 'AnyLt';

      value: string;
    }

    export interface UnionMember89 {
      field: 'lastContributorLocations';

      op: 'AnyLte';

      value: string;
    }

    export interface UnionMember90 {
      field: 'lastContributorLocations';

      op: 'AnyGt';

      value: string;
    }

    export interface UnionMember91 {
      field: 'lastContributorLocations';

      op: 'AnyGte';

      value: string;
    }

    export interface UnionMember92 {
      field: 'lastContributorLocations';

      op: 'ContainsAllTokens';

      value: string;
    }
  }
}

export declare namespace SearchRepos {
  export {
    type SearchRepoSearchResponse as SearchRepoSearchResponse,
    type SearchRepoSearchParams as SearchRepoSearchParams,
  };
}
