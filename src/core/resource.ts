// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Bountylab } from '../client';

export abstract class APIResource {
  protected _client: Bountylab;

  constructor(client: Bountylab) {
    this._client = client;
  }
}
