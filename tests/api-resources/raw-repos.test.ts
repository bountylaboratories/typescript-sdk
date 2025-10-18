// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bountylab from '@bountylab/bountylab';

const client = new Bountylab({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rawRepos', () => {
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
        contributors: { first: 10, after: 'after' },
        owner: true,
        starrers: { first: 1, after: 'after' },
      },
    });
  });

  // Prism tests are disabled
  test.skip('contributes', async () => {
    const responsePromise = client.rawRepos.contributes('MDEwOlJlcG9zaXRvcnkxMjk2MjY5');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('contributes: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rawRepos.contributes(
        'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
        { after: 'eyJvZmZzZXQiOjEwMH0=', first: '100' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bountylab.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('owns', async () => {
    const responsePromise = client.rawRepos.owns('MDEwOlJlcG9zaXRvcnkxMjk2MjY5');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('owns: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rawRepos.owns(
        'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
        { after: 'eyJvZmZzZXQiOjEwMH0=', first: '100' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bountylab.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('stars', async () => {
    const responsePromise = client.rawRepos.stars('MDEwOlJlcG9zaXRvcnkxMjk2MjY5');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('stars: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rawRepos.stars(
        'MDEwOlJlcG9zaXRvcnkxMjk2MjY5',
        { after: 'eyJvZmZzZXQiOjEwMH0=', first: '100' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bountylab.NotFoundError);
  });
});
