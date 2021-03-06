export interface ILicense {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
}

export interface IOwner {
    login: string;
    id: number;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface IRepo {
    id: string;
    name: string;
    owner: IOwner;
    full_name: string;
    private: string;
    html_url: string;
    description: string;
    fork: string;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string;
    size: string;
    stargazers_count: string;
    watchers_count: string;
    language: string;
    has_issues: string;
    has_projects: string;
    has_downloads: string;
    has_wiki: string;
    has_pages: string;
    forks_count: string;
    mirror_url: string;
    archived: string;
    open_issues_count: string;
    forks: string;
    open_issues: string;
    watchers: string;
    default_branch: string;
    license: ILicense;
}

export interface IRepoState {
    active: boolean;
    user: string;
    repos: Array<IRepo>;
    error: any;
}

export const INITIAL_REPOS_STATE: IRepoState = {
    active: false,
    user: '',
    repos: [],
    error: undefined
};
