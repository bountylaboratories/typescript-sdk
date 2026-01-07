// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bountylab from '@bountylab/bountylab';

const client = new Bountylab({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rawUsers', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.rawUsers.retrieve({ githubIds: ['MDQ6VXNlcjU4MzIzMQ==', 'MDQ6VXNlcjE='] });
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
    const response = await client.rawUsers.retrieve({
      githubIds: ['MDQ6VXNlcjU4MzIzMQ==', 'MDQ6VXNlcjE='],
      includeAttributes: {
        contributes: {
          first: 1,
          after: 'after',
          filters: {
            field: 'resolvedCountry',
            op: 'Eq',
            value: 'string',
          },
        },
        devrank: true,
        followers: {
          first: 10,
          after: 'after',
          filters: {
            field: 'resolvedCountry',
            op: 'Eq',
            value: 'string',
          },
        },
        following: {
          first: 1,
          after: 'after',
          filters: {
            field: 'resolvedCountry',
            op: 'Eq',
            value: 'string',
          },
        },
        owns: {
          first: 1,
          after: 'after',
          filters: {
            field: 'resolvedCountry',
            op: 'Eq',
            value: 'string',
          },
        },
        stars: {
          first: 10,
          after: 'after',
          filters: {
            field: 'resolvedCountry',
            op: 'Eq',
            value: 'string',
          },
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('byLogin: only required params', async () => {
    const responsePromise = client.rawUsers.byLogin({ logins: ['octocat', 'torvalds'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('byLogin: required and optional params', async () => {
    const response = await client.rawUsers.byLogin({
      logins: ['octocat', 'torvalds'],
      includeAttributes: {
        contributes: {
          first: 1,
          after: 'after',
          filters: {
            field: 'resolvedCountry',
            op: 'Eq',
            value: 'string',
          },
        },
        devrank: true,
        followers: {
          first: 10,
          after: 'after',
          filters: {
            field: 'resolvedCountry',
            op: 'Eq',
            value: 'string',
          },
        },
        following: {
          first: 1,
          after: 'after',
          filters: {
            field: 'resolvedCountry',
            op: 'Eq',
            value: 'string',
          },
        },
        owns: {
          first: 1,
          after: 'after',
          filters: {
            field: 'resolvedCountry',
            op: 'Eq',
            value: 'string',
          },
        },
        stars: {
          first: 10,
          after: 'after',
          filters: {
            field: 'resolvedCountry',
            op: 'Eq',
            value: 'string',
          },
        },
      },
    });
  });

  // Prism tests are disabled
  test.skip('graph: only required params', async () => {
    const responsePromise = client.rawUsers.graph('followers', { id: 'id' });
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
    const response = await client.rawUsers.graph('followers', {
      id: 'id',
      after: 'eyJvZmZzZXQiOjEwMH0=',
      first: 100,
      includeAttributes: {
        contributes: {
          first: 1,
          after: 'after',
          filters: {
            field: 'resolvedCountry',
            op: 'Eq',
            value: 'string',
          },
        },
        contributors: {
          first: 1,
          after: 'after',
          filters: {
            field: 'resolvedCountry',
            op: 'Eq',
            value: 'string',
          },
        },
        devrank: true,
        followers: {
          first: 1,
          after: 'after',
          filters: {
            field: 'resolvedCountry',
            op: 'Eq',
            value: 'string',
          },
        },
        following: {
          first: 1,
          after: 'after',
          filters: {
            field: 'resolvedCountry',
            op: 'Eq',
            value: 'string',
          },
        },
        owner: true,
        ownerDevrank: true,
        owns: {
          first: 1,
          after: 'after',
          filters: {
            field: 'resolvedCountry',
            op: 'Eq',
            value: 'string',
          },
        },
        starrers: {
          first: 1,
          after: 'after',
          filters: {
            field: 'resolvedCountry',
            op: 'Eq',
            value: 'string',
          },
        },
        stars: {
          first: 1,
          after: 'after',
          filters: {
            field: 'resolvedCountry',
            op: 'Eq',
            value: 'string',
          },
        },
      },
    });
  });
});
