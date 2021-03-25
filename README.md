# Venue search app
(Live Demo(https://venue-search-app.vercel.app/)

This project was setup by using create react app + css + js fetch api(without third party library).

## Description

Venue search app is categorized in three module:

1. SearchBox: Search keyword to get resulted venue list
2. SearchResult: After searched keyword, api will give venue list and populate into SearchResult component
3. RecentSearchResult: It's basically cached last five keyword with searchresult.
   after click on recent search result row to get cached data.

# Ideal Case

Project build in css, but when project is complex that time scss, styled-component, jss will be use.

For api call we are using native fetch API, but generally we use axios.

State managment: we used local react useState, in case of complex project: redux, mobx and context-api will be use.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
