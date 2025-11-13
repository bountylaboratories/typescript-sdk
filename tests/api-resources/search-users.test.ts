// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bountylab from '@bountylab/bountylab';

const client = new Bountylab({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource searchUsers', () => {
  // Prism tests are disabled
  test.skip('naturalLanguage: only required params', async () => {
    const responsePromise = client.searchUsers.naturalLanguage({
      query: 'Find machine learning engineers at Google who work on AI infrastructure',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('naturalLanguage: required and optional params', async () => {
    const response = await client.searchUsers.naturalLanguage({
      query: 'Find machine learning engineers at Google who work on AI infrastructure',
      includeAttributes: {
        contributes: {
          first: 1,
          after: 'after',
          filters: { field: 'resolvedCountry', op: 'Eq', value: 'string' },
        },
        devrank: true,
        followers: {
          first: 10,
          after: 'after',
          filters: { field: 'resolvedCountry', op: 'Eq', value: 'string' },
        },
        following: {
          first: 1,
          after: 'after',
          filters: { field: 'resolvedCountry', op: 'Eq', value: 'string' },
        },
        owns: { first: 1, after: 'after', filters: { field: 'resolvedCountry', op: 'Eq', value: 'string' } },
        stars: {
          first: 10,
          after: 'after',
          filters: { field: 'resolvedCountry', op: 'Eq', value: 'string' },
        },
      },
      maxResults: 50,
    });
  });

  // Prism tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.searchUsers.search({ query: 'machine learning engineer san francisco' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('search: required and optional params', async () => {
    const response = await client.searchUsers.search({
      query: 'machine learning engineer san francisco',
      filters: { field: 'field', op: 'op', value: 'string' },
      includeAttributes: {
        contributes: {
          first: 1,
          after: 'after',
          filters: { field: 'resolvedCountry', op: 'Eq', value: 'string' },
        },
        devrank: true,
        followers: {
          first: 10,
          after: 'after',
          filters: { field: 'resolvedCountry', op: 'Eq', value: 'string' },
        },
        following: {
          first: 1,
          after: 'after',
          filters: { field: 'resolvedCountry', op: 'Eq', value: 'string' },
        },
        owns: { first: 1, after: 'after', filters: { field: 'resolvedCountry', op: 'Eq', value: 'string' } },
        stars: {
          first: 10,
          after: 'after',
          filters: { field: 'resolvedCountry', op: 'Eq', value: 'string' },
        },
      },
      maxResults: 50,
    });
  });
});
