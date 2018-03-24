# GithubEmoji

Web APP that retrieves the list of Github Emoji icons from the Github API (`https://api.github.com/emojis`) and serves it so you can see them and search for them.

:point_right: https://github-emoji-list.herokuapp.com/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. You can also run `ng serve --open` and the app will be automatically openened in the browser.

## Production build

Run the following:

`ng build --aot --prod`

`node server.js`

The app will be served in `http://localhost:4200/`. Alternatively run:

`npm run buildandstart`

## Deploy to Heroku

Clone the repo:

```shell
git clone https://github.com/Dellos7/github-emoji-list.git
```

```shell
cd github-emoji-list
```

Update & create the npm dependencies:

`npm install`

Sign up in Heroku: [https://signup.heroku.com/](https://signup.heroku.com/)

Download & install Heroku CLI: [https://devcenter.heroku.com/articles/heroku-cli#download-and-install](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)

Login in the Heroku CLI:

```shell
heroku login
```

Create your Heroku APP:

```shell
heroku create <your_app_name>
```

> Your APP name will be deployed then in https://<your_app_name>.herokuapp.com)

Connect your Github repo to Heroku: https://devcenter.heroku.com/articles/github-integration

- Remove the current git repository and create a new one:

```shell
rm -r .git
git init
git remote add origin https://git.heroku.com/<your_app_name>.git
git add .
git commit -m "first commit"
```

- If you correctly enabled Heroku and Github integration, your app should be automatically deployed to Heroku just after making a push to Github. So:

`git push origin master`

## Roadmap

- Add tag support for the emojis in order to improve search.
- Add ordering support for the emojis.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).