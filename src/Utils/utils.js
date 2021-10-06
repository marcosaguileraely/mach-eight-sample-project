export function findPairs(players, value){
    console.log(players.length)

    var searchedPairs = players.filter( player => player.h_in === value)
    return searchedPairs;
}