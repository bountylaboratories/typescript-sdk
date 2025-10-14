# Health

# RawUsers

Types:

- <code><a href="./src/resources/raw-users.ts">RawUserRetrieveResponse</a></code>
- <code><a href="./src/resources/raw-users.ts">RawUserByLoginResponse</a></code>

Methods:

- <code title="get /api/raw/users/{id}">client.rawUsers.<a href="./src/resources/raw-users.ts">retrieve</a>(id) -> RawUserRetrieveResponse</code>
- <code title="post /api/raw/users/by-login">client.rawUsers.<a href="./src/resources/raw-users.ts">byLogin</a>({ ...params }) -> RawUserByLoginResponse</code>

# RawRepos

Types:

- <code><a href="./src/resources/raw-repos.ts">RawRepoRetrieveResponse</a></code>
- <code><a href="./src/resources/raw-repos.ts">RawRepoByFullnameResponse</a></code>

Methods:

- <code title="get /api/raw/repos/{id}">client.rawRepos.<a href="./src/resources/raw-repos.ts">retrieve</a>(id) -> RawRepoRetrieveResponse</code>
- <code title="post /api/raw/repos/by-fullname">client.rawRepos.<a href="./src/resources/raw-repos.ts">byFullname</a>({ ...params }) -> RawRepoByFullnameResponse</code>

# SearchUsers

Types:

- <code><a href="./src/resources/search-users.ts">SearchUserSearchResponse</a></code>

Methods:

- <code title="post /api/search/users">client.searchUsers.<a href="./src/resources/search-users.ts">search</a>({ ...params }) -> SearchUserSearchResponse</code>

# SearchRepos

Types:

- <code><a href="./src/resources/search-repos.ts">SearchRepoSearchResponse</a></code>

Methods:

- <code title="post /api/search/repos">client.searchRepos.<a href="./src/resources/search-repos.ts">search</a>({ ...params }) -> SearchRepoSearchResponse</code>
