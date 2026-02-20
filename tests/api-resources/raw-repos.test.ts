// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bountylab from '@bountylab/bountylab';

const client = new Bountylab({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rawRepos', () => {
  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.rawRepos.retrieve({
      githubIds: ['MDEwOlJlcG9zaXRvcnkxMjk2MjY5', 'MDEwOlJlcG9zaXRvcnkxMDI3'],
      includeAttributes: {
        contributors: {
          first: 1,
          after: 'after',
          filters: {
            field: 'field',
            op: 'Eq',
            value: 'string',
          },
        },
        owner: true,
        ownerDevrank: true,
        ownerProfessional: true,
        starrers: {
          first: 1,
          after: 'after',
          filters: {
            field: 'field',
            op: 'Eq',
            value: 'string',
          },
        },
      },
    });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('byFullname: required and optional params', async () => {
    const response = await client.rawRepos.byFullname({
      fullNames: ['octocat/Hello-World', 'torvalds/linux'],
      includeAttributes: {
        contributors: {
          first: 1,
          after: 'after',
          filters: {
            field: 'field',
            op: 'Eq',
            value: 'string',
          },
        },
        owner: true,
        ownerDevrank: true,
        ownerProfessional: true,
        starrers: {
          first: 1,
          after: 'after',
          filters: {
            field: 'field',
            op: 'Eq',
            value: 'string',
          },
        },
      },
    });
  });

  // Mock server tests are disabled
  test.skip('count: only required params', async () => {
    const responsePromise = client.rawRepos.count({
      filters: {
        field: 'field',
        op: 'Eq',
        value: 'string',
      },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('count: required and optional params', async () => {
    const response = await client.rawRepos.count({
      filters: {
        field: 'field',
        op: 'Eq',
        value: 'string',
      },
    });
  });

  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('graph: required and optional params', async () => {
    const response = await client.rawRepos.graph('stars', {
      id: 'id',
      after: 'eyJvZmZzZXQiOjEwMH0=',
      first: 100,
      includeAttributes: {
        aggregates: true,
        contributes: {
          first: 1,
          after: 'after',
          filters: {
            field: 'field',
            op: 'Eq',
            value: 'string',
          },
        },
        contributors: {
          first: 1,
          after: 'after',
          filters: {
            field: 'field',
            op: 'Eq',
            value: 'string',
          },
        },
        devrank: true,
        followers: {
          first: 1,
          after: 'after',
          filters: {
            field: 'field',
            op: 'Eq',
            value: 'string',
          },
        },
        following: {
          first: 1,
          after: 'after',
          filters: {
            field: 'field',
            op: 'Eq',
            value: 'string',
          },
        },
        owner: true,
        ownerDevrank: true,
        ownerProfessional: true,
        owns: {
          first: 1,
          after: 'after',
          filters: {
            field: 'field',
            op: 'Eq',
            value: 'string',
          },
        },
        professional: true,
        starrers: {
          first: 1,
          after: 'after',
          filters: {
            field: 'field',
            op: 'Eq',
            value: 'string',
          },
        },
        stars: {
          first: 1,
          after: 'after',
          filters: {
            field: 'field',
            op: 'Eq',
            value: 'string',
          },
        },
      },
    });
  });
});
