// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bountylab from '@bountylab/bountylab';

const client = new Bountylab({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rawRepos', () => {
  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.rawRepos.retrieve('MDEwOlJlcG9zaXRvcnkxMjk2MjY5');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
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
    });
  });
});
