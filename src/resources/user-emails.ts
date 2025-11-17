// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class UserEmails extends APIResource {
  /**
   * Fetch the best email address for GitHub users by their node IDs. Uses
   * intelligent selection to prioritize personal emails over work emails and
   * verifies domain validity. Returns the best email plus all other email
   * candidates. Supports batch requests (1-100 IDs). Requires RAW service. Credits:
   * 1 per result returned.
   *
   * @example
   * ```ts
   * const response = await client.userEmails.bestEmail({
   *   githubIds: ['MDQ6VXNlcjU4MzIzMQ==', 'MDQ6VXNlcjE='],
   * });
   * ```
   */
  bestEmail(
    body: UserEmailBestEmailParams,
    options?: RequestOptions,
  ): APIPromise<UserEmailBestEmailResponse> {
    return this._client.post('/api/users/best-email', { body, ...options });
  }

  /**
   * Fetch the best email address for GitHub users by their usernames (login). Uses
   * intelligent selection to prioritize personal emails over work emails and
   * verifies domain validity. Returns the best email plus all other email
   * candidates. Supports batch requests (1-100 logins). Requires RAW service.
   * Credits: 1 per result returned.
   *
   * @example
   * ```ts
   * const response = await client.userEmails.bestEmailByLogin({
   *   logins: ['octocat', 'torvalds'],
   * });
   * ```
   */
  bestEmailByLogin(
    body: UserEmailBestEmailByLoginParams,
    options?: RequestOptions,
  ): APIPromise<UserEmailBestEmailByLoginResponse> {
    return this._client.post('/api/users/best-email/by-login', { body, ...options });
  }

  /**
   * Track when users reply to emails. This endpoint logs reply signals for analytics
   * purposes. Does not consume credits. Requires RAW service.
   *
   * @example
   * ```ts
   * const response = await client.userEmails.replySignal({
   *   githubIds: ['MDQ6VXNlcjU4MzIzMQ=='],
   * });
   * ```
   */
  replySignal(
    body: UserEmailReplySignalParams,
    options?: RequestOptions,
  ): APIPromise<UserEmailReplySignalResponse> {
    return this._client.post('/api/users/best-email/signal/reply', { body, ...options });
  }
}

export interface UserEmailBestEmailResponse {
  /**
   * Number of results returned
   */
  count: number;

  /**
   * Array of best email results
   */
  results: Array<UserEmailBestEmailResponse.Result>;
}

export namespace UserEmailBestEmailResponse {
  export interface Result {
    /**
     * Best email address, or null if none available
     */
    bestEmail: string | null;

    /**
     * GitHub node ID
     */
    githubId: string;

    /**
     * GitHub username
     */
    login: string;

    /**
     * Other email addresses that were not selected as the best email
     */
    otherCandidates: Array<string>;
  }
}

export interface UserEmailBestEmailByLoginResponse {
  /**
   * Number of results returned
   */
  count: number;

  /**
   * Array of best email results
   */
  results: Array<UserEmailBestEmailByLoginResponse.Result>;
}

export namespace UserEmailBestEmailByLoginResponse {
  export interface Result {
    /**
     * Best email address, or null if none available
     */
    bestEmail: string | null;

    /**
     * GitHub node ID
     */
    githubId: string;

    /**
     * GitHub username
     */
    login: string;

    /**
     * Other email addresses that were not selected as the best email
     */
    otherCandidates: Array<string>;
  }
}

export interface UserEmailReplySignalResponse {
  /**
   * Number of reply signals logged
   */
  count: number;

  /**
   * Whether the signal was logged successfully
   */
  success: boolean;
}

export interface UserEmailBestEmailParams {
  /**
   * Array of GitHub node IDs (1-100)
   */
  githubIds: Array<string>;

  /**
   * Optional signal data for tracking email context (body, subject, sender)
   */
  signals?: UserEmailBestEmailParams.Signals;
}

export namespace UserEmailBestEmailParams {
  /**
   * Optional signal data for tracking email context (body, subject, sender)
   */
  export interface Signals {
    /**
     * Email body content for tracking
     */
    emailBody?: string;

    /**
     * Email subject for tracking
     */
    emailSubject?: string;

    /**
     * Provide the reason for emailing the user in natural language
     */
    reasonForEmailNaturalLanguage?: string;

    /**
     * Provide the repo ID for why you are emailing the user
     */
    repoReasonForEmail?: string;

    /**
     * Sender identifier for tracking
     */
    sender?: string;
  }
}

export interface UserEmailBestEmailByLoginParams {
  /**
   * Array of GitHub usernames (1-100)
   */
  logins: Array<string>;

  /**
   * Optional signal data for tracking email context (body, subject, sender)
   */
  signals?: UserEmailBestEmailByLoginParams.Signals;
}

export namespace UserEmailBestEmailByLoginParams {
  /**
   * Optional signal data for tracking email context (body, subject, sender)
   */
  export interface Signals {
    /**
     * Email body content for tracking
     */
    emailBody?: string;

    /**
     * Email subject for tracking
     */
    emailSubject?: string;

    /**
     * Provide the reason for emailing the user in natural language
     */
    reasonForEmailNaturalLanguage?: string;

    /**
     * Provide the repo ID for why you are emailing the user
     */
    repoReasonForEmail?: string;

    /**
     * Sender identifier for tracking
     */
    sender?: string;
  }
}

export interface UserEmailReplySignalParams {
  /**
   * Array of GitHub node IDs for users who replied (1-100)
   */
  githubIds: Array<string>;

  /**
   * The body content of the user's reply email
   */
  emailReplyBody?: string;
}

export declare namespace UserEmails {
  export {
    type UserEmailBestEmailResponse as UserEmailBestEmailResponse,
    type UserEmailBestEmailByLoginResponse as UserEmailBestEmailByLoginResponse,
    type UserEmailReplySignalResponse as UserEmailReplySignalResponse,
    type UserEmailBestEmailParams as UserEmailBestEmailParams,
    type UserEmailBestEmailByLoginParams as UserEmailBestEmailByLoginParams,
    type UserEmailReplySignalParams as UserEmailReplySignalParams,
  };
}
