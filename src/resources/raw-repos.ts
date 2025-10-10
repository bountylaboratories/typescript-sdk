// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RawRepos extends APIResource {
  /**
   * Fetch a single GitHub repository by its node ID. Requires RAW service. Credits:
   * 1 per result.
   *
   * @example
   * ```ts
   * const rawRepo = await client.rawRepos.retrieve(
   *   'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<RawRepoRetrieveResponse> {
    return this._client.get(path`/api/raw/repos/${id}`, options);
  }

  /**
   * Fetch GitHub repositories by their full names (owner/repo format). Supports
   * batch requests (1-100 repos). Requires RAW service. Credits: 1 per result
   * returned.
   *
   * @example
   * ```ts
   * const response = await client.rawRepos.byFullname({
   *   fullNames: ['octocat/Hello-World', 'torvalds/linux'],
   * });
   * ```
   */
  byFullname(body: RawRepoByFullnameParams, options?: RequestOptions): APIPromise<RawRepoByFullnameResponse> {
    return this._client.post('/api/raw/repos/by-fullname', { body, ...options });
  }
}

export interface RawRepoRetrieveResponse {
  /**
   * Credits consumed (1 per result)
   */
  creditsUsed: number;

  /**
   * Repository object or null if not found
   */
  repository: RawRepoRetrieveResponse.Repository | null;
}

export namespace RawRepoRetrieveResponse {
  /**
   * Repository object or null if not found
   */
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

export interface RawRepoByFullnameResponse {
  /**
   * Number of repositories returned
   */
  count: number;

  /**
   * Credits consumed (1 per result)
   */
  creditsUsed: number;

  /**
   * Array of repository objects
   */
  repositories: Array<RawRepoByFullnameResponse.Repository | null>;
}

export namespace RawRepoByFullnameResponse {
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

export interface RawRepoByFullnameParams {
  /**
   * Array of repository full names in "owner/name" format (1-100)
   */
  fullNames: Array<string>;
}

export declare namespace RawRepos {
  export {
    type RawRepoRetrieveResponse as RawRepoRetrieveResponse,
    type RawRepoByFullnameResponse as RawRepoByFullnameResponse,
    type RawRepoByFullnameParams as RawRepoByFullnameParams,
  };
}
