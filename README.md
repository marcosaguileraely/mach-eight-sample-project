# Welcome to Mach Eigth flight test!

This test challenges me in:
- (...) to write a function that searches through NBA player heights
based on user input. The raw data is taken from [here](https://mach-eight.uc.r.appspot.com/).
- (...) to create an application that takes a single integer input. The
application will download the raw data from the website above
(https://mach-eight.uc.r.appspot.com) and print a list of all pairs of players
whose height in inches adds up to the integer input to the application. If no
matches are found, the application will print "No matches found".
- `BIG O!` Time complexity verification and acomplishment. 
>The algorithm to find the pairs must be faster than O(n^2).
- All edge cases should be handled appropriately.
- Sample output is as follows:
```
> app 139

- Brevin Knight         Nate Robinson
- Nate Robinson         Mike Wilks
```

# Solution

The function `findPairs` in path `src/Utils/utils.js` 
```
export  function  findPairs(players, value){
	/*❗ O(1) = constant       */  console.log(players.length)
	/*❗ O(n) = repeat n times */  var  searchedPairs  =  players.filter( player  =>  player.h_in ===  value) 
	/*❗ O(1) = contant        */  return  searchedPairs;
}
```
Javascript array method ❗`[array].filter()` is a iterative method  which **return a new array** with the elements that apply the given filter condition as true, this reduce the amount of code because only one line of code can iterate through big arrays in linear time. However the code simplifaction **do not** reduce the time complexity, which essentially is `O(n)`.

Therefore, the time complexity for `findPairs` function should be:
**TC** = Time complexity
**fp**  = findPairs
`TCfP = O(1) + O(n) + O(1)` ☝ but, remember **BIG O notation** help us to determine the worst escenario. So constants values are usually ignored when a order of growth `O(1) < O(log n) < O(n)`. 

So, removing **C**onstants because of lower complexity.
`TCfP = ❌ O(1) + ✅ O(n) + ❌ O(1)`
`TCfP = O(n)`

Finally this function is called by `src/App.js` at line 31.

## UI capabilities




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
