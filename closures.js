//CLOSURES

const flightInfo = {
  filght: "LM6452",
  origin: "Brazil",
  destination: "EUA",
  //we will update the number of passengers using a function
  passengers: 0,
};

const secureBooking = function () {
  /*the 'passengerCount' variable is declared inside the 
  'secureBooking' function, then it should only exists here,
   when the function is executed.*/
  let passengerCount = 0;

  return function () {
    /*the inner function that is returned use the variable 
    'passengerCount' to update its value.*/
    passengerCount++;
    //then uses it to update the number of passengers in the 'flightInfo' object.
    flightInfo.passengers = passengerCount;
  };
};

/*this line of code is the key - the inner function returned 
from the 'secureBooking' will be stored in the 'book' variable,
 transforming it in a new function and the 'secureBooking' 
 function will never be called again.*/
const book = secureBooking();


book();
book();
book();
console.log(flightInfo);
/*At the end of this code, the number of passengers in the 'flightInfo' 
object will be 3. 
But how is it possible once the 'passengerCount' lives in the
 'secureBooking' function and this function was called just once?
The answer is Closure.
The Closure is the link that a inner function has with it parents varibles. 
This link is created and even if the parent function is never called again,
 the inner function will still have access to it.*/
