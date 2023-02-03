// Octokit.js
// https://github.com/octokit/core.js#readme
import * as dotenv from "dotenv";
import { Octokit } from "octokit";
import {
  deleteTeam,
  deleteTeamRepo,
  getTeamRepos,
  getTeams,
} from "./utils/index.mjs";

// Goal: to delete repo created by cohort 2022.1 and 2022.2
// Steps
// 1) list all the team except "TechUp Team"
// iterate the teamList
// remove all team repo
// delete team

// 2) delete each repo by repo name

const org = "techupth";

let teamList = await getTeams({
  org,
  per_page: 1,
});

let hasTeam = !teamList.length;

while (hasTeam) {
  // 1) Get team repo
  teamList.data
    // .filter((team) => team.slug !== "Aun-Pok")
    .forEach(async (team) => {
      const teamRepos = await getTeamRepos({
        org,
        team_slug: team.slug,
      });

      const regex = /GitHub Classroom/i;

      // 2) Delete team repo
      teamRepos.data
        .filter((repo) => {
          return regex.test(repo.description);
        })
        .map((repo) => {
          return {
            name: repo.name,
            description: repo.description,
          };
        })
        .forEach(async (repo) => {
          // await deleteTeamRepo( {
          //   org: org,
          //   team_slug: team.slug,
          //   owner: org,
          //   repo: "REPO",
          // })
          console.log(`removed repo: ${repo.name} from team: ${team.name}`);

          // 3) Delete team
          // await deleteTeam({
          //   org: org,
          //   team_slug: team.slug,
          // })
          console.log(`removed team: ${team.name} \n`);
        });
    });

  // 4) Get a new team list
  teamList = await getTeams({
    org,
    per_page: 1,
  });

  hasTeam = !teamList.length;
}
