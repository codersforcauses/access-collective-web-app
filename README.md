# access-collective-web-app

> An application that displays disability facilities around uwa 
eg turn this map into an interactive map (http://www.student.uwa.edu.au/__data/assets/pdf_file/0010/2902447/UWA-accessibility-map.pdf)

## Getting Started

``` bash
# Download the project
$ git clone https://github.com/codersforcauses/access-collective-web-app.git

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

## Work

1. Create new issue or assign yourself to existing issue

2. Pull the latest changes

3. Create your branch

4. Make your changes and commit

5. Merge any changes from master into your branch and resolve the merge conflicts

6. Make a pull request 

## Deploying app
### Canonical method
`./deploy.sh`
If you get permission denied error
`chmod 755 deploy.sh`

### Heroku
https://github.com/nuxt/docs/blob/master/en/faq/heroku-deployment.md

live app: https://access-collective-web-app.herokuapp.com/
### SPA
Set mode to spa in nuxt config then run npm run build
1. `npm -g surge`
2. `cd dist`
3. `surge`
live app: https://cold-animal.surge.sh/
### GH PAGES
1. npm run generate:gh-pages
2. 

## Key tools to develop effectively in project
* Code formatter for IDE e.g. prettier or beautify
* Vetur for syntax highlighting and auto completion
* Git

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
