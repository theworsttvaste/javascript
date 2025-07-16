const accountId =  144553
let accountEmail = "random@gmail.com" //preferable
var accountPassword = "12345"
accountCity = "Delhi" // not preferable but can be used

let accountState; // value = undefined

//accountId = 2546     // changing const not allowed


accountEmail = "random1@gamil.com"
accountPassword = "12587"
accountCity = "mumbai"

console.log(accountId);

/*
prefer not to use var
because of the issue of scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState ]);

