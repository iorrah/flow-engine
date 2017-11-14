# Flow Engine

A flow engine is an application that executes a flow consisting of several linked rules, in this case against some incoming data (*a JSON string that can be parsed to a JavaScript object literal*). 

Each rule should contain (at least)
  
- An ID (unique within the flow, required)
- A rule that will be run against the incoming json data. This is a function that takes a parameter and returns a boolean result. Each function should be called with the same incoming data (the JS object literal)
- An ID of the rule to execute if the function returns true (`true_id`)
- An ID of the rule to execute if the function returns false (`false_id`)
   
Pass an object (an example of an object and a rule is given below) to the created flow. 

The execution will end when a `null` is provided for the `true_id` (and the function returns `true`) or when `null` is provided for the `false_id` (and the function returns `false`).

Additionally, the flow engine (with the provided rule-set) should not be circular.

## Instructions

- Fork this repository (or clone it),
- Complete the challenge (should take about 1-2 hours),
- Feel free to ask any questions that you have,
- Submit the result either by sharing your fork or sending your local repository as a compressed archive via email/gist.

## Available scripts

In the project directory, you can run:

#### `yarn install`

Installs all the needed dependencies to get you up & running.

#### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.

#### `yarn test --coverage`

Lists tests coverage report.

#### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

#### `yarn run deploy`

This builds a minified version of the app and deploys it using GitHub Pages.

## Licence

This project has been realeased under the [MIT](https://github.com/iorrah/flow-engine/blob/master/LICENSE) Licence.
