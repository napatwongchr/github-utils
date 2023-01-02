import { Octokit } from "@octokit/rest";

async function hideBranch(owner, repo, branch) {
  const octokit = new Octokit({
    auth: process.env.GH_PERSONAL_TOKEN,
  });

  try {
    const result = await octokit.repos.updateBranchProtection({
      owner,
      repo,
      branch,
      protection: {
        enabled: true,
      },
    });
    console.log(result);
    console.log(`Branch "${branch}" has been hidden in repository "${repo}"`);
  } catch (error) {
    console.error(error);
  }
}

hideBranch("techupth", "js-hh-closure", "answer");
