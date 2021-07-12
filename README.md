# Setup Project

## Clone Repository
- clone repository
```shell
git clone https://github.com/w314/projectBase.git <newProjecName>
```
- create remote repository for you new project and replace the remote to point to this new repository
```shell
git remote remove origin
```
```shell
git remote add <newProjectRemoteRepo>
```

## Install Dependecies
- install dependecies
```shell
npm install
```

## Build Your App

The project is setup to start with running `index.js` under the `dist` folder. Currently there is no such file and directory running `npm start` throws an error.

Runnig `npm run build` first would create the directory and file to start the app. 
```shell
npm run build
npm start

```

