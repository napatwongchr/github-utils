// Octokit.js
// https://github.com/octokit/core.js#readme

import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GH_PERSONAL_TOKEN,
});

// Goal: to delete repo created by cohort 2022.1 and 2022.2
// Steps
// 1) list all the repos created by cohort 2022.1 and 2022.2
// 2) delete each repo by repo name

// List all repos

// const results = await octokit.request(`GET /orgs/{org}/repos`, {
//   org: "techupth",
// });

// console.log(
//   results.data.map((repo) => {
//     return {
//       id: repo.id,
//       node_id: repo.node_id,
//       full_name: repo.full_name,
//     };
//   })
// );

// Delete

// await octokit.request("DELETE /repos/{owner}/{repo}", {
//   owner: "techupth",
//   repo: "css-hh-pseudo-class-and-element-kant-nat",
// });

// Get a Repo

// const result = await octokit.request("GET /repos/{owner}/{repo}", {
//   owner: "techupth",
//   // repo: "merry-match",
//   repo: "react-hh-data-fetching-products-naisu-touch",
// });

console.log(result);
