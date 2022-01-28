# Starter Code for Node Projects
node, express, typescript, jasmine, eslint, prettier, ejs, lite-server

## Setup new project by cloning nodeAppStarter
### Clone nodeAppStarter repository
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

### Setup GIT

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
<hr>

## Build Up Starter Code from scratch
    
  ### Start Project
  
  #### Create a project directory
  ```shell
  mkdir <project_directory>
  cd <project_directory>
  mkdir src
  mkdir src/routes
  mkdir src/tests
  mkdir views
  echo "console.log('Hello World')" > src/server.ts
  ```

  #### Initate your node project
  
  - run `npm init` (or `npm init -y` to accept all defaults)
  - npm init will create your `package.json` file
    - A documentation for what packages your project depends on, allows you to specify the versions of the packages
    - It makes your build reproducable, easier to share with other 

  #### Add `GIT`
  1. Create a git repository for your project
  ```shell
git init
```
2. Create `.gitignore` file 

```shell
echo '
node_modules
dist
' > .gitignore
```
- running `npm install` for any node project will install the dependencies defined in the `package.json` version control of those file are not needed
  
3. Make initial commit
```shell
git add .
git commit -m 'Initial Setup'
```

4. Setup remote repository

```shell
git remote add origin <remote_repo_URL>
git push origin master
```
   
  
  ### Add  `eslint`, `typescript` and `prettier`
 -  [Using ESLint and Prettier in a TypeScript Project](https://robertcooper.me/post/using-eslint-and-prettier-in-a-typescript-project)
- [How to use Prettier with ESLint and TypeScript in VSCode](https://khalilstemmler.com/blogs/tooling/prettier/)
- Prettier can automatically correct your files at every save or whenever when you run it directly.
- When using it together wiht ESLint, ESLint defines the code conventions and Prettier preforms the auto correcting based on the ESLint rules.
  

####  `typescript`
1. Install
  ```bash
  npm i --save-dev typescript ts-node @types/node
  ```
  - **ts-node** TypeScript execution and REPL for node.js *(read-eval-print loop, an interactive computer programmint environment that takes single user inputs and executes them)* 
  - **@types/node** contains type definition for node.js

  2. Add configuration files

  The configuraton file can be named **tsconfig.json** or **jsconfig.json**. To install the config file, run:
  ```bash
  npx tsc --init
  ```
  Useful settings:
  ```javascript
  {
    "compilerOptions": {
      "target": "es5",                          
      "lib": ["ES2018", "DOM"], 
      "module": "commonjs",                     
      "outDir": "./dist",                        
      "strict": true,                           
      "noImplicitAny": true,                 
    },
    "exclude": ["node_modules", "tests"]
  }
  ```
  3. Add scripts to `package.json`
  
  In `package.json` under `scripts` add:
  ```javascript
  "scripts": {
    "start": "npm run build && node dist/server.js",
    "build": "npx tsc"
  },
  ```
  - `npx` stands for Node Package Executer and comes with node
  - `npm run build` creates `dist` directory if it doesn't exist yet and complies .ts files to .js files
  - `start` will build and run the application
- Running `npm start` should log "Hello World".


#### `eslint` and `prettier`
  -   [Prettier · Opinionated Code Formatter](https://prettier.io/)

  1. Install
  ```bash
  npm i --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
  npm i --save-dev prettier eslint-config-prettier eslint-plugin-prettier
  ```
  - **eslint**: The core ESLint linting library
  - **@typescript-eslint/parser**: The parser that will allow ESLint to lint TypeScript code
  - **@typescript-eslint/eslint-plugin**: A plugin that contains a bunch of ESLint rules that are TypeScript specific
  - **prettier**: The core prettier library
  - **eslint-config-prettier**: Turns off all ESLint rules that have the potential to interfere with Prettier rules.
  - **eslint-plugin-prettier**: Turns Prettier rules into ESLint rules.

2. Add configuration files


  Add an *.eslintrc* configuration file in the **project root directory**.
  ```javascript
  echo '{
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "@typescript-eslint",
      "prettier"
    ],
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier"
    ],
    "rules": {
      "no-console": "off",
      "prettier/prettier": 2 // Means error
    }
  }
  ' > .eslintrc
  ```
  > Make sure that plugin:prettier/recommended is the last configuration in the extends array
  
  The advantage of having prettier setup as an ESLint rule using eslint-plugin-prettier is that code can automatically be fixed using ESLint's --fix option.
  
  
  Create a *.prettierrc* configuration file for prettier in the **project root directory**. It can be either a JSON file or as *.prettierrc.js* a JavaScript file.
  
  ```shell
  echo '{
    "semi": true,
    "singleQuote": true
  }' > .prettierrc
  ```

  3. Add scripts to `package.json`

  In `package.json` under `scripts` add:
  ```javascript
  "scripts": {
    "prettier": "prettier --config .prettierrc \"src/**/*{js,ts,tsx}\" --write",
    "lint": "eslint \"src/**/*.{js,ts}\"",
  },
  ```
 
  ### Install View Engine
  ```shell
npm i ejs
  ```

  Create first view
  ```shell
touch views/index.ejs
  ```
  ```html
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Hello
</body>
</html>
```

  

  ### Install Express
  
  ```shell
  npm i express
  ```

  #### install nodemon
  ```shell 
  npm i --save-dev nodemon
  ```
  - `nodemone` will restart the server every time after we save changes to it.
  - add `devStart` script to `package.json`
  ```shell
  "devStart": "nodemon src/server.ts"
  ```

#### Create server with express
  - import express
  - create application object
  - listen on a port
  
  In the `src/index.ts` file:
  ```typescript
  import express from 'express'
  
  const app = express();
  const port = 3000;  //can be any number > 1024
  
  // set view engine
  app.set('view engine', 'ejs')

  // set up routes
  app.get('/api', (req, res) => {
    res.send('server working');
  });
  
  // start the server
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
  
  ```
  ## Routes
  We handle our endpoints with routes and separate them from our server.
  - create a directory for `routes` under `/src`
  - create main route index file in this routes directory
  - create individual files for each route under `routes/api`
  - update application entrypoint index.ts to use routes
  
  
  Individual route file `src/routes/api/frogs.ts`:
  ```typescript
  import express from 'express'
  
  //create router object
  const frogs = express.Router();
  //set up route
  frogs.get('/', (req, res) => {
      res.send('frogs page');
  });
  //export route
  export default frogs;
  ```
  ```typescript
  import express from 'express'
  
  //create router object
  const sampleRoute = express.Router();
  //set up route
  sampleRoute.get('/', (req, res) => {
      res.send('Application starting page');
  });
  //export route
  export default sampleRoute;
  ```
  
  
  
  Main router index file `src/routes/index.ts`
  ```typescript
  import express from 'express'
  //import your routes
  import sampleRoute from './api/sampleRoute'
  
  //create router object
  const routes = express.Router();
  
  //set up router object to use your routes
  routes.use('/sampleRoute', sampleRoute); 
  
  //export router object
  export default routes;
  ```
  
  Update main application entrypont file `/src/index.ts`
  ```typescript
  import express from 'express'
  //import routes
  import routes from './routes/index'
  
  //create the server and set the port
  const app = express();
  const port = 3000;
  
  //setup your app to use the router
  app.use('./api', routes);
  
  //start the server
  app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}/api/sampleRoute`);
  });
  ```


  
  ### Install lite-server
  - [GitHub - johnpapa/lite-server: Lightweight node server](https://github.com/johnpapa/lite-server)
  - lite server serves up the contents of the directory it's installed in. It will allow you to see your development as you do it
  - in the terminal run `npm install lite-server --save-dev`
  - it will create an `node_modules` directory and store all necessary files there 
  - it will add `lite-server` in `package.json` to `devDependencies` because of `--save-dev` (to store a true dependency add `--save`)
  - to make `lite-server` work:
    - modify the `"scripts"` in the projects `package.json`:
    - add `"start": "npm run lite",` to the beginning and `"lite": "lite-server"` at the end. (Don't forget to add commas where needed.)
    - this will ensure, that `npm start` with start by running the `lite-server`
  - to change the server port, watched file paths, and base directory for your project, create a `bs-config.json` in your project's folder:
  ```json
  {
    "port": 8000,
    "files": ["./src/**/*.{html,htm,css,js}"],
    "server": { "baseDir": "./src" }
  }
  ```
  - installing a node-module will create a `package-lock.json` file, which is a snapshot of all the dependencies of the project so far
  
  
  ### Start you node project
  - run `npm start`
  - based on the configured `package.json` file it will start you project by stargin the `lite-server`
  - the `lite-server` will serve the up the contents of the porject folder (the file, specified as `main` in the `package.json` file ?)  - it will also tell you in the terminal how to acces the served up content, on you local machine the default is `localhost:3000`
  - it will open you browser and serve up the files there
