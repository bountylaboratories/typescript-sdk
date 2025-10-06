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
    | SearchRepoSearchParams.UnionMember0
    | SearchRepoSearchParams.UnionMember1
    | SearchRepoSearchParams.UnionMember0
    | SearchRepoSearchParams.UnionMember1
    | SearchRepoSearchParams.UnionMember2
    | SearchRepoSearchParams.UnionMember3
    | SearchRepoSearchParams.UnionMember0
    | SearchRepoSearchParams.UnionMember1
    | SearchRepoSearchParams.UnionMember0
    | SearchRepoSearchParams.UnionMember1
    | SearchRepoSearchParams.UnionMember2
    | SearchRepoSearchParams.UnionMember3
    | SearchRepoSearchParams.UnionMember0
    | SearchRepoSearchParams.UnionMember1
    | SearchRepoSearchParams.UnionMember2
    | SearchRepoSearchParams.UnionMember3
    | SearchRepoSearchParams.UnionMember0
    | SearchRepoSearchParams.UnionMember1
    | SearchRepoSearchParams.UnionMember2
    | SearchRepoSearchParams.UnionMember3
    | SearchRepoSearchParams.UnionMember0
    | SearchRepoSearchParams.UnionMember1
    | SearchRepoSearchParams.UnionMember8
    | null;

  /**
   * Maximum number of results to return (default: 100, max: 1000)
   */
  maxResults?: number;
}

export namespace SearchRepoSearchParams {
  export interface UnionMember0 {
    op: 'Eq';

    value: string;

    field?: 'ownerLogin';
  }

  export interface UnionMember1 {
    op: 'In';

    value: Array<string>;

    field?: 'ownerLogin';
  }

  export interface UnionMember0 {
    op: 'Eq';

    value: string;

    field?: 'name';
  }

  export interface UnionMember1 {
    op: 'In';

    value: Array<string>;

    field?: 'name';
  }

  export interface UnionMember0 {
    op: 'Eq';

    value: number;

    field?: 'stargazerCount';
  }

  export interface UnionMember1 {
    op: 'In';

    value: Array<number>;

    field?: 'stargazerCount';
  }

  export interface UnionMember2 {
    op: 'Gte';

    value: number;

    field?: 'stargazerCount';
  }

  export interface UnionMember3 {
    op: 'Lte';

    value: number;

    field?: 'stargazerCount';
  }

  export interface UnionMember0 {
    op: 'Eq';

    value: string;

    field?: 'language';
  }

  export interface UnionMember1 {
    op: 'In';

    value: Array<string>;

    field?: 'language';
  }

  export interface UnionMember0 {
    op: 'Eq';

    value: number;

    field?: 'totalIssuesCount';
  }

  export interface UnionMember1 {
    op: 'In';

    value: Array<number>;

    field?: 'totalIssuesCount';
  }

  export interface UnionMember2 {
    op: 'Gte';

    value: number;

    field?: 'totalIssuesCount';
  }

  export interface UnionMember3 {
    op: 'Lte';

    value: number;

    field?: 'totalIssuesCount';
  }

  export interface UnionMember0 {
    op: 'Eq';

    value: number;

    field?: 'totalIssuesOpen';
  }

  export interface UnionMember1 {
    op: 'In';

    value: Array<number>;

    field?: 'totalIssuesOpen';
  }

  export interface UnionMember2 {
    op: 'Gte';

    value: number;

    field?: 'totalIssuesOpen';
  }

  export interface UnionMember3 {
    op: 'Lte';

    value: number;

    field?: 'totalIssuesOpen';
  }

  export interface UnionMember0 {
    op: 'Eq';

    value: number;

    field?: 'totalIssuesClosed';
  }

  export interface UnionMember1 {
    op: 'In';

    value: Array<number>;

    field?: 'totalIssuesClosed';
  }

  export interface UnionMember2 {
    op: 'Gte';

    value: number;

    field?: 'totalIssuesClosed';
  }

  export interface UnionMember3 {
    op: 'Lte';

    value: number;

    field?: 'totalIssuesClosed';
  }

  export interface UnionMember0 {
    op: 'Eq';

    value: string;

    field?: 'lastContributorLocations';
  }

  export interface UnionMember1 {
    op: 'In';

    value: Array<string>;

    field?: 'lastContributorLocations';
  }

  export interface UnionMember8 {
    /**
     * Array of field filters to combine with the logical operator
     */
    filters: Array<
      | UnionMember8.UnionMember0
      | UnionMember8.UnionMember1
      | UnionMember8.UnionMember0
      | UnionMember8.UnionMember1
      | UnionMember8.UnionMember0
      | UnionMember8.UnionMember1
      | UnionMember8.UnionMember2
      | UnionMember8.UnionMember3
      | UnionMember8.UnionMember0
      | UnionMember8.UnionMember1
      | UnionMember8.UnionMember0
      | UnionMember8.UnionMember1
      | UnionMember8.UnionMember2
      | UnionMember8.UnionMember3
      | UnionMember8.UnionMember0
      | UnionMember8.UnionMember1
      | UnionMember8.UnionMember2
      | UnionMember8.UnionMember3
      | UnionMember8.UnionMember0
      | UnionMember8.UnionMember1
      | UnionMember8.UnionMember2
      | UnionMember8.UnionMember3
      | UnionMember8.UnionMember0
      | UnionMember8.UnionMember1
    >;

    /**
     * Logical operator to combine multiple filters
     */
    op: 'And' | 'Or';
  }

  export namespace UnionMember8 {
    export interface UnionMember0 {
      op: 'Eq';

      value: string;

      field?: 'ownerLogin';
    }

    export interface UnionMember1 {
      op: 'In';

      value: Array<string>;

      field?: 'ownerLogin';
    }

    export interface UnionMember0 {
      op: 'Eq';

      value: string;

      field?: 'name';
    }

    export interface UnionMember1 {
      op: 'In';

      value: Array<string>;

      field?: 'name';
    }

    export interface UnionMember0 {
      op: 'Eq';

      value: number;

      field?: 'stargazerCount';
    }

    export interface UnionMember1 {
      op: 'In';

      value: Array<number>;

      field?: 'stargazerCount';
    }

    export interface UnionMember2 {
      op: 'Gte';

      value: number;

      field?: 'stargazerCount';
    }

    export interface UnionMember3 {
      op: 'Lte';

      value: number;

      field?: 'stargazerCount';
    }

    export interface UnionMember0 {
      op: 'Eq';

      value: string;

      field?: 'language';
    }

    export interface UnionMember1 {
      op: 'In';

      value: Array<string>;

      field?: 'language';
    }

    export interface UnionMember0 {
      op: 'Eq';

      value: number;

      field?: 'totalIssuesCount';
    }

    export interface UnionMember1 {
      op: 'In';

      value: Array<number>;

      field?: 'totalIssuesCount';
    }

    export interface UnionMember2 {
      op: 'Gte';

      value: number;

      field?: 'totalIssuesCount';
    }

    export interface UnionMember3 {
      op: 'Lte';

      value: number;

      field?: 'totalIssuesCount';
    }

    export interface UnionMember0 {
      op: 'Eq';

      value: number;

      field?: 'totalIssuesOpen';
    }

    export interface UnionMember1 {
      op: 'In';

      value: Array<number>;

      field?: 'totalIssuesOpen';
    }

    export interface UnionMember2 {
      op: 'Gte';

      value: number;

      field?: 'totalIssuesOpen';
    }

    export interface UnionMember3 {
      op: 'Lte';

      value: number;

      field?: 'totalIssuesOpen';
    }

    export interface UnionMember0 {
      op: 'Eq';

      value: number;

      field?: 'totalIssuesClosed';
    }

    export interface UnionMember1 {
      op: 'In';

      value: Array<number>;

      field?: 'totalIssuesClosed';
    }

    export interface UnionMember2 {
      op: 'Gte';

      value: number;

      field?: 'totalIssuesClosed';
    }

    export interface UnionMember3 {
      op: 'Lte';

      value: number;

      field?: 'totalIssuesClosed';
    }

    export interface UnionMember0 {
      op: 'Eq';

      value: string;

      field?: 'lastContributorLocations';
    }

    export interface UnionMember1 {
      op: 'In';

      value: Array<string>;

      field?: 'lastContributorLocations';
    }
  }
}

export declare namespace SearchRepos {
  export {
    type SearchRepoSearchResponse as SearchRepoSearchResponse,
    type SearchRepoSearchParams as SearchRepoSearchParams,
  };
}
