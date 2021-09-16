//get our user input
function getValue(){

    //set alert to invisible to start
    document.getElementById("alert").classList.add("invisible");
    
    //Get user string from the page
    let userString = document.getElementById("userString").value;

    //check for a palindrome
    let returnObj = checkForPalindrome(userString);

    //Display message to the screen
    displayMessage(returnObj);
    
}

//Check if string is a palindrome
function checkForPalindrome(userString){
    
    //Remove Case sensativity 
    userString = userString.toLowerCase();

    //Filter out spaces, punctuation, and special characters
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    let revString = [];
    let returnObj = {};

     for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
     }

     if(revString == userString){
        returnObj.msg = "Well Done! You Entered a Palidrome."
     }
     else{
         returnObj.msg = "Sorry, that's not a palindrome."
     }

     returnObj.reversed = revString;

     return returnObj;
}

//display a message to the string
function displayMessage(returnObj){

        document.getElementById("alertHeader").innerHTML = returnObj.msg;
        document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`
        document.getElementById("alert").classList.remove("invisible");
}