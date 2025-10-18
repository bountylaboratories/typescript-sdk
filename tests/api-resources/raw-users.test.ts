// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bountylab from '@bountylab/bountylab';

const client = new Bountylab({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource rawUsers', () => {
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
        contributes: { first: 1, after: 'after' },
        followers: { first: 10, after: 'after' },
        following: { first: 1, after: 'after' },
        owns: { first: 1, after: 'after' },
        stars: { first: 10, after: 'after' },
      },
    });
  });

  // Prism tests are disabled
  test.skip('contributes', async () => {
    const responsePromise = client.rawUsers.contributes('MDQ6VXNlcjU4MzIzMQ==');
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
      client.rawUsers.contributes(
        'MDQ6VXNlcjU4MzIzMQ==',
        { after: 'eyJvZmZzZXQiOjEwMH0=', first: '100' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bountylab.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('followers', async () => {
    const responsePromise = client.rawUsers.followers('MDQ6VXNlcjU4MzIzMQ==');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('followers: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rawUsers.followers(
        'MDQ6VXNlcjU4MzIzMQ==',
        { after: 'eyJvZmZzZXQiOjEwMH0=', first: '100' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bountylab.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('following', async () => {
    const responsePromise = client.rawUsers.following('MDQ6VXNlcjU4MzIzMQ==');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('following: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.rawUsers.following(
        'MDQ6VXNlcjU4MzIzMQ==',
        { after: 'eyJvZmZzZXQiOjEwMH0=', first: '100' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bountylab.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('owns', async () => {
    const responsePromise = client.rawUsers.owns('MDQ6VXNlcjU4MzIzMQ==');
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
      client.rawUsers.owns(
        'MDQ6VXNlcjU4MzIzMQ==',
        { after: 'eyJvZmZzZXQiOjEwMH0=', first: '100' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bountylab.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('stars', async () => {
    const responsePromise = client.rawUsers.stars('MDQ6VXNlcjU4MzIzMQ==');
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
      client.rawUsers.stars(
        'MDQ6VXNlcjU4MzIzMQ==',
        { after: 'eyJvZmZzZXQiOjEwMH0=', first: '100' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bountylab.NotFoundError);
  });
});
