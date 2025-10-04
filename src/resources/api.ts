// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class API extends APIResource {
  /**
   * Example endpoint that requires API key and logs credit consumption
   */
  retrieveExample(options?: RequestOptions): APIPromise<APIRetrieveExampleResponse> {
    return this._client.get('/api/example', options);
  }

  /**
   * Raw data endpoint that requires RAW service access
   */
  retrieveRawData(options?: RequestOptions): APIPromise<APIRetrieveRawDataResponse> {
    return this._client.get('/api/raw', options);
  }

  /**
   * Search endpoint that requires SEARCH service access
   */
  search(options?: RequestOptions): APIPromise<APISearchResponse> {
    return this._client.get('/api/search', options);
  }
}

export interface APIRetrieveExampleResponse {
  creditsUsed?: number;

  message?: string;
}

export interface APIRetrieveRawDataResponse {
  message?: string;

  service?: string;
}

export interface APISearchResponse {
  message?: string;

  service?: string;
}

export declare namespace API {
  export {
    type APIRetrieveExampleResponse as APIRetrieveExampleResponse,
    type APIRetrieveRawDataResponse as APIRetrieveRawDataResponse,
    type APISearchResponse as APISearchResponse,
  };
}
