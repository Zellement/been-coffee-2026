/**
 * This script is used to ignore builds on certain branches.
 *
 * It checks the current branch and if it is in the ignored branches list,
 * it sets the exit code to 0, which tells Netlify to ignore the build.
 *
 * If the branch is not in the ignored branches list, it sets the exit
 * code to 1, which tells Netlify to proceed with the build.
 */

const ignoredBranches = ['main']

process.exitCode = ignoredBranches.includes(process.env.BRANCH) ? 0 : 1
