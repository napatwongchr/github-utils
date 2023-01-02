import * as dotenv from "dotenv";
import { Octokit } from "octokit";

dotenv.config();

const octokit = new Octokit({
  auth: process.env.GH_PERSONAL_TOKEN,
});

export const deleteTeam = async (options) => {
  return await octokit.request("DELETE /orgs/{org}/teams/{team_slug}", options);
};

export const getTeamRepos = async (options) => {
  return await octokit.request(
    "GET /orgs/{org}/teams/{team_slug}/repos{?per_page,page}",
    options
  );
};

export const getTeams = async (options) => {
  return await octokit.request(`GET /orgs/{org}/teams`, options);
};

export const deleteTeamRepo = async (options) => {
  return await octokit.request(
    "DELETE /orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
    options
  );
};
