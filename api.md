# RawUsers

Types:

- <code><a href="./src/resources/raw-users.ts">RawUserRetrieveResponse</a></code>
- <code><a href="./src/resources/raw-users.ts">RawUserByLoginResponse</a></code>
- <code><a href="./src/resources/raw-users.ts">RawUserCountResponse</a></code>
- <code><a href="./src/resources/raw-users.ts">RawUserGraphResponse</a></code>

Methods:

- <code title="post /raw/users">client.rawUsers.<a href="./src/resources/raw-users.ts">retrieve</a>({ ...params }) -> RawUserRetrieveResponse</code>
- <code title="post /raw/users/by-login">client.rawUsers.<a href="./src/resources/raw-users.ts">byLogin</a>({ ...params }) -> RawUserByLoginResponse</code>
- <code title="post /raw/users/count">client.rawUsers.<a href="./src/resources/raw-users.ts">count</a>({ ...params }) -> RawUserCountResponse</code>
- <code title="post /raw/users/{id}/graph/{relationship}">client.rawUsers.<a href="./src/resources/raw-users.ts">graph</a>(relationship, { ...params }) -> RawUserGraphResponse</code>

# RawRepos

Types:

- <code><a href="./src/resources/raw-repos.ts">RawRepoRetrieveResponse</a></code>
- <code><a href="./src/resources/raw-repos.ts">RawRepoByFullnameResponse</a></code>
- <code><a href="./src/resources/raw-repos.ts">RawRepoCountResponse</a></code>
- <code><a href="./src/resources/raw-repos.ts">RawRepoGraphResponse</a></code>

Methods:

- <code title="post /raw/repos">client.rawRepos.<a href="./src/resources/raw-repos.ts">retrieve</a>({ ...params }) -> RawRepoRetrieveResponse</code>
- <code title="post /raw/repos/by-fullname">client.rawRepos.<a href="./src/resources/raw-repos.ts">byFullname</a>({ ...params }) -> RawRepoByFullnameResponse</code>
- <code title="post /raw/repos/count">client.rawRepos.<a href="./src/resources/raw-repos.ts">count</a>({ ...params }) -> RawRepoCountResponse</code>
- <code title="post /raw/repos/{id}/graph/{relationship}">client.rawRepos.<a href="./src/resources/raw-repos.ts">graph</a>(relationship, { ...params }) -> RawRepoGraphResponse</code>

# UserEmails

Types:

- <code><a href="./src/resources/user-emails.ts">UserEmailBestEmailResponse</a></code>
- <code><a href="./src/resources/user-emails.ts">UserEmailBestEmailByLoginResponse</a></code>
- <code><a href="./src/resources/user-emails.ts">UserEmailReplySignalResponse</a></code>

Methods:

- <code title="post /users/best-email">client.userEmails.<a href="./src/resources/user-emails.ts">bestEmail</a>({ ...params }) -> UserEmailBestEmailResponse</code>
- <code title="post /users/best-email/by-login">client.userEmails.<a href="./src/resources/user-emails.ts">bestEmailByLogin</a>({ ...params }) -> UserEmailBestEmailByLoginResponse</code>
- <code title="post /users/best-email/signal/reply">client.userEmails.<a href="./src/resources/user-emails.ts">replySignal</a>({ ...params }) -> UserEmailReplySignalResponse</code>

# SearchUsers

Types:

- <code><a href="./src/resources/search-users.ts">SearchUserNaturalLanguageResponse</a></code>
- <code><a href="./src/resources/search-users.ts">SearchUserSearchResponse</a></code>

Methods:

- <code title="post /search/users/natural-language">client.searchUsers.<a href="./src/resources/search-users.ts">naturalLanguage</a>({ ...params }) -> SearchUserNaturalLanguageResponse</code>
- <code title="post /search/users">client.searchUsers.<a href="./src/resources/search-users.ts">search</a>({ ...params }) -> SearchUserSearchResponse</code>

# SearchRepos

Types:

- <code><a href="./src/resources/search-repos.ts">SearchRepoNaturalLanguageResponse</a></code>
- <code><a href="./src/resources/search-repos.ts">SearchRepoSearchResponse</a></code>

Methods:

- <code title="post /search/repos/natural-language">client.searchRepos.<a href="./src/resources/search-repos.ts">naturalLanguage</a>({ ...params }) -> SearchRepoNaturalLanguageResponse</code>
- <code title="post /search/repos">client.searchRepos.<a href="./src/resources/search-repos.ts">search</a>({ ...params }) -> SearchRepoSearchResponse</code>
