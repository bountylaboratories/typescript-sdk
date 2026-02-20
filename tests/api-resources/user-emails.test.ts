// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bountylab from '@bountylab/bountylab';

const client = new Bountylab({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource userEmails', () => {
  // Mock server tests are disabled
  test.skip('bestEmail: only required params', async () => {
    const responsePromise = client.userEmails.bestEmail({
      githubIds: ['MDQ6VXNlcjU4MzIzMQ==', 'MDQ6VXNlcjE='],
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
  test.skip('bestEmail: required and optional params', async () => {
    const response = await client.userEmails.bestEmail({
      githubIds: ['MDQ6VXNlcjU4MzIzMQ==', 'MDQ6VXNlcjE='],
      signals: {
        emailBody: 'emailBody',
        emailSubject: 'emailSubject',
        reasonForEmailNaturalLanguage: 'reasonForEmailNaturalLanguage',
        repoReasonForEmail: 'repoReasonForEmail',
        sender: 'sender',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('bestEmailByLogin: only required params', async () => {
    const responsePromise = client.userEmails.bestEmailByLogin({ logins: ['octocat', 'torvalds'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('bestEmailByLogin: required and optional params', async () => {
    const response = await client.userEmails.bestEmailByLogin({
      logins: ['octocat', 'torvalds'],
      signals: {
        emailBody: 'emailBody',
        emailSubject: 'emailSubject',
        reasonForEmailNaturalLanguage: 'reasonForEmailNaturalLanguage',
        repoReasonForEmail: 'repoReasonForEmail',
        sender: 'sender',
      },
    });
  });

  // Mock server tests are disabled
  test.skip('replySignal: only required params', async () => {
    const responsePromise = client.userEmails.replySignal({ githubIds: ['MDQ6VXNlcjU4MzIzMQ=='] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('replySignal: required and optional params', async () => {
    const response = await client.userEmails.replySignal({
      githubIds: ['MDQ6VXNlcjU4MzIzMQ=='],
      emailReplyBody: 'emailReplyBody',
    });
  });
});
