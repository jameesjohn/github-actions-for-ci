const core = require('@actions/core');
const {GitHub, context} = require('@actions/github');

async function run() {
  try {
    // Repo token is needed to interact with the Github octokit and needs to be passed from the workflow.
    const token = core.getInput('repo-token');

    const octokit = new GitHub(token);

    const comment = await octokit.pulls.createComment({
      repo: context.repo,
      pull_number: context.issue.number,
      body: 'This is a simple comment'
    })

  } catch(error) {
    core.setFailed(error.message);
  }

}

run();
