# Bulk Mark GitHub Repositories As Private

## Synopsis

At the end of the CodeClan Professional Software Development course, I wanted to mark all my coursework GitHub repos as private - a cumbersome manual process using the GitHub GUI. I wrote this quick and diry React app to retrieve all your GitHub repos, any that are marked as public will have a button to mark them as private.

## Instructions

- Download/clone the repo into a folder on your local computer
- Navigate to that using the command line and run `npm install`
- While that is downloading and installing, get a Personal Access Token for your GitHub account (make sure it has read/write access to all your reps)
- In the services folder, rename auth.template.js to auth.js
- Open this and paste in your PAT where prompted
- Start the server using `npm start`
- Browse to http://localhost:3000 and you should see your repos listed, and be able to mark any public ones as private
- The maximum number of repos this can display is 100, if you want to add more you'll have to add pagination (see GitHub API documentation)
- BE CAREFUL TO ONLY MARK YOUR OWN REPOS AS PRIVATE (if you like you could modify the code to only show your repos)
- May break if you try to mark a forked repo as private

![github-private](./readme_images/app_screenshot.png)
