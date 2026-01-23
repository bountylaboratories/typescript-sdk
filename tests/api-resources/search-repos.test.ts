// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bountylab from '@bountylab/bountylab';

const client = new Bountylab({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource searchRepos', () => {
  // Prism tests are disabled
  test.skip('naturalLanguage: only required params', async () => {
    const responsePromise = client.searchRepos.naturalLanguage({
      query:
        'Find React libraries with over 1000 stars that have good TypeScript support and are actively maintained',
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
    const response = await client.searchRepos.naturalLanguage({
      query:
        'Find React libraries with over 1000 stars that have good TypeScript support and are actively maintained',
      after: 'Y3Vyc29yOjEyMzQ1',
      enablePagination: true,
      filterUserIncludeAttributes: true,
      first: 50,
      includeAttributes: {
        contributors: {
          first: 10,
          after: 'after',
          filters: {
            field: 'githubId',
            op: 'Eq',
            value: 'value',
          },
        },
        owner: true,
        ownerDevrank: true,
        starrers: {
          first: 1,
          after: 'after',
          filters: {
            field: 'githubId',
            op: 'Eq',
            value: 'value',
          },
        },
      },
      maxResults: 50,
      rankBy: { name: 'ann', type: 'Attr' },
    });
  });

  // Prism tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.searchRepos.search({ query: 'react component library with typescript' });
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
    const response = await client.searchRepos.search({
      query: 'react component library with typescript',
      after: 'Y3Vyc29yOjEyMzQ1',
      enablePagination: true,
      filters: {
        field: 'githubId',
        op: 'Eq',
        value: 'value',
      },
      first: 50,
      includeAttributes: {
        contributors: {
          first: 10,
          after: 'after',
          filters: {
            field: 'githubId',
            op: 'Eq',
            value: 'value',
          },
        },
        owner: true,
        ownerDevrank: true,
        starrers: {
          first: 1,
          after: 'after',
          filters: {
            field: 'githubId',
            op: 'Eq',
            value: 'value',
          },
        },
      },
      maxResults: 50,
      rankBy: { name: 'ann', type: 'Attr' },
    });
  });
});
