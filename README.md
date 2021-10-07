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
- `TCfP = ❌ O(1) + ✅ O(n) + ❌ O(1)`
- `TCfP = O(n)`

Therefore, the `O(n)`  is a **linear time complexity**, and that could be improve to `O(log n)` **logartimic time complexity** e.g binary search algo, which requires and ordered list to provide efficient solution.

Finally this function is called by `src/App.js` at line 31.

## UI capabilities & about the code

This project uses:
- Reactjs `v.^17.0.2`
- Axios (HTTP calls)
- `Vanilla CSS` and `FLEX-BOX` for styling with simple and fancy UI (no complex responsive feautures implemented).
- Deployed in Heroku for react apps.

I've created a simple and fancy User interface in order to interact with the data.
![NBA Players App created in Reactjs](https://i.ibb.co/tmwnMNN/Screen-Shot-2021-10-07-at-2-42-15-PM.png)
Link to project and live demo: [mach-eight-flight-test LIVE DEMO](https://mach-eight-flight-test.herokuapp.com/)

# Taste this app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
1. Intall Reactjs visiting the above link.
2. Download/Clone/Fork this repo from github.
3. In you local machine (previous Reactjs installation) navigate to project location and run `npm install` in order to install **npm** dependencies.
4. Run `npm start` for init the web browser visualization.

## About author

Marcos Aguilera Ely (marcosaguileraely@gmail.com)
Twitter: https://twitter.com/marcode_ely/ 
Github: https://github.com/marcosaguileraely
