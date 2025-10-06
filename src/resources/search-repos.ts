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
     * GitHub node ID
     */
    id: string;

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
   * Optional filters for narrowing search results. Supports filtering on:
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
    | SearchRepoSearchParams.RepoCompositeFilter
    | null;

  /**
   * Maximum number of results to return (default: 100, max: 1000)
   */
  maxResults?: number;
}

export namespace SearchRepoSearchParams {
  export interface UnionMember0 {
    field: 'ownerLogin';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember1 {
    field: 'ownerLogin';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember2 {
    field: 'name';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember3 {
    field: 'name';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember4 {
    field: 'stargazerCount';

    op: 'Eq';

    value: number;
  }

  export interface UnionMember5 {
    field: 'stargazerCount';

    op: 'In';

    value: Array<number>;
  }

  export interface UnionMember6 {
    field: 'stargazerCount';

    op: 'Gte';

    value: number;
  }

  export interface UnionMember7 {
    field: 'stargazerCount';

    op: 'Lte';

    value: number;
  }

  export interface UnionMember8 {
    field: 'language';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember9 {
    field: 'language';

    op: 'In';

    value: Array<string>;
  }

  export interface UnionMember10 {
    field: 'totalIssuesCount';

    op: 'Eq';

    value: number;
  }

  export interface UnionMember11 {
    field: 'totalIssuesCount';

    op: 'In';

    value: Array<number>;
  }

  export interface UnionMember12 {
    field: 'totalIssuesCount';

    op: 'Gte';

    value: number;
  }

  export interface UnionMember13 {
    field: 'totalIssuesCount';

    op: 'Lte';

    value: number;
  }

  export interface UnionMember14 {
    field: 'totalIssuesOpen';

    op: 'Eq';

    value: number;
  }

  export interface UnionMember15 {
    field: 'totalIssuesOpen';

    op: 'In';

    value: Array<number>;
  }

  export interface UnionMember16 {
    field: 'totalIssuesOpen';

    op: 'Gte';

    value: number;
  }

  export interface UnionMember17 {
    field: 'totalIssuesOpen';

    op: 'Lte';

    value: number;
  }

  export interface UnionMember18 {
    field: 'totalIssuesClosed';

    op: 'Eq';

    value: number;
  }

  export interface UnionMember19 {
    field: 'totalIssuesClosed';

    op: 'In';

    value: Array<number>;
  }

  export interface UnionMember20 {
    field: 'totalIssuesClosed';

    op: 'Gte';

    value: number;
  }

  export interface UnionMember21 {
    field: 'totalIssuesClosed';

    op: 'Lte';

    value: number;
  }

  export interface UnionMember22 {
    field: 'lastContributorLocations';

    op: 'Eq';

    value: string;
  }

  export interface UnionMember23 {
    field: 'lastContributorLocations';

    op: 'In';

    value: Array<string>;
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
    >;

    /**
     * Logical operator to combine multiple filters
     */
    op: 'And' | 'Or';
  }

  export namespace RepoCompositeFilter {
    export interface UnionMember0 {
      field: 'ownerLogin';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember1 {
      field: 'ownerLogin';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember2 {
      field: 'name';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember3 {
      field: 'name';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember4 {
      field: 'stargazerCount';

      op: 'Eq';

      value: number;
    }

    export interface UnionMember5 {
      field: 'stargazerCount';

      op: 'In';

      value: Array<number>;
    }

    export interface UnionMember6 {
      field: 'stargazerCount';

      op: 'Gte';

      value: number;
    }

    export interface UnionMember7 {
      field: 'stargazerCount';

      op: 'Lte';

      value: number;
    }

    export interface UnionMember8 {
      field: 'language';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember9 {
      field: 'language';

      op: 'In';

      value: Array<string>;
    }

    export interface UnionMember10 {
      field: 'totalIssuesCount';

      op: 'Eq';

      value: number;
    }

    export interface UnionMember11 {
      field: 'totalIssuesCount';

      op: 'In';

      value: Array<number>;
    }

    export interface UnionMember12 {
      field: 'totalIssuesCount';

      op: 'Gte';

      value: number;
    }

    export interface UnionMember13 {
      field: 'totalIssuesCount';

      op: 'Lte';

      value: number;
    }

    export interface UnionMember14 {
      field: 'totalIssuesOpen';

      op: 'Eq';

      value: number;
    }

    export interface UnionMember15 {
      field: 'totalIssuesOpen';

      op: 'In';

      value: Array<number>;
    }

    export interface UnionMember16 {
      field: 'totalIssuesOpen';

      op: 'Gte';

      value: number;
    }

    export interface UnionMember17 {
      field: 'totalIssuesOpen';

      op: 'Lte';

      value: number;
    }

    export interface UnionMember18 {
      field: 'totalIssuesClosed';

      op: 'Eq';

      value: number;
    }

    export interface UnionMember19 {
      field: 'totalIssuesClosed';

      op: 'In';

      value: Array<number>;
    }

    export interface UnionMember20 {
      field: 'totalIssuesClosed';

      op: 'Gte';

      value: number;
    }

    export interface UnionMember21 {
      field: 'totalIssuesClosed';

      op: 'Lte';

      value: number;
    }

    export interface UnionMember22 {
      field: 'lastContributorLocations';

      op: 'Eq';

      value: string;
    }

    export interface UnionMember23 {
      field: 'lastContributorLocations';

      op: 'In';

      value: Array<string>;
    }
  }
}

export declare namespace SearchRepos {
  export {
    type SearchRepoSearchResponse as SearchRepoSearchResponse,
    type SearchRepoSearchParams as SearchRepoSearchParams,
  };
}
