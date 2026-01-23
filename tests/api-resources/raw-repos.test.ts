// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bountylab from '@bountylab/bountylab';

const client = new Bountylab({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rawRepos', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.rawRepos.retrieve({
      githubIds: ['MDEwOlJlcG9zaXRvcnkxMjk2MjY5', 'MDEwOlJlcG9zaXRvcnkxMDI3'],
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.rawRepos.retrieve({
      githubIds: ['MDEwOlJlcG9zaXRvcnkxMjk2MjY5', 'MDEwOlJlcG9zaXRvcnkxMDI3'],
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
    });
  });

  // Prism tests are disabled
  test.skip('byFullname: only required params', async () => {
    const responsePromise = client.rawRepos.byFullname({
      fullNames: ['octocat/Hello-World', 'torvalds/linux'],
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
  test.skip('byFullname: required and optional params', async () => {
    const response = await client.rawRepos.byFullname({
      fullNames: ['octocat/Hello-World', 'torvalds/linux'],
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
    });
  });

  // Prism tests are disabled
  test.skip('graph: only required params', async () => {
    const responsePromise = client.rawRepos.graph('stars', { id: 'id' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('graph: required and optional params', async () => {
    const response = await client.rawRepos.graph('stars', {
      id: 'id',
      after: 'eyJvZmZzZXQiOjEwMH0=',
      first: 100,
      includeAttributes: {
        contributes: {
          first: 1,
          after: 'after',
          filters: {
            field: 'githubId',
            op: 'Eq',
            value: 'value',
          },
        },
        contributors: {
          first: 1,
          after: 'after',
          filters: {
            field: 'githubId',
            op: 'Eq',
            value: 'value',
          },
        },
        devrank: true,
        followers: {
          first: 1,
          after: 'after',
          filters: {
            field: 'githubId',
            op: 'Eq',
            value: 'value',
          },
        },
        following: {
          first: 1,
          after: 'after',
          filters: {
            field: 'githubId',
            op: 'Eq',
            value: 'value',
          },
        },
        owner: true,
        ownerDevrank: true,
        owns: {
          first: 1,
          after: 'after',
          filters: {
            field: 'githubId',
            op: 'Eq',
            value: 'value',
          },
        },
        starrers: {
          first: 1,
          after: 'after',
          filters: {
            field: 'githubId',
            op: 'Eq',
            value: 'value',
          },
        },
        stars: {
          first: 1,
          after: 'after',
          filters: {
            field: 'githubId',
            op: 'Eq',
            value: 'value',
          },
        },
      },
    });
  });
});
