## Setup new project by cloning projectBase
### Clone projectBase repository
```shell
git clone https://github.com/w314/projectBase.git <newProjecName>
```
### Start App
- install dependecies
```shell
npm install
```
- start your app
This will run the app from the `index.ts` file under the `src` directory.

```shell
npm start
```

The following scripts should run without error
  - `npm run prettier`
  - `npm run lint`
  - `npm start`
  will run the app from the starting page under *src* folder
  - `npm run build`
  will convert typescript to javascript and create the *dist* distribution folder
  - `npm run test`
  builds app and runs jasmin to test if *localhost:3000/api/sampleRoute* displays the text *Application starting page*
  - `node index.js`
  will run the app from the *index.js* file under the *dist* directory, to use it you have to run *npm build* first to create the *dist* directory

## Setup GIT

- create remote repository for you new project and replace the remote to point to this new repository
```shell
git remote remove origin
```
```shell
git remote add <newProjectRemoteRepo>
```
- setting up the project won't make any changes but, if you made any other changes, make your initial commit
```shell
git add .
git commit -m 'feat: Initial commit'

```
Otherwise push your local repository to remote:
```shell
git push origin master
```

