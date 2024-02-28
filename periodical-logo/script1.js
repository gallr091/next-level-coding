// let today = new Date();

// 12 minutes in milliseconds
let twelveMinutes = 12 * 60 * 1000;

// timestamp in milliseconds upon page load
let initialTime = new Date().getTime();

// console.log("The initial time is: " + initialTime)

// calculate the time interval for updating styles
let interval = 1000; // 1 second

// target elements
let gooElement = document.querySelector('.goo');
let h1Element = document.querySelector('h1');
let drips = document.querySelectorAll('.drip');
let spanOne = document.querySelector('span');
let spanTwo = document.querySelector('span:nth-child(2)');
let spanThree = document.querySelector('span:nth-child(3)');
let spanFour = document.querySelector('span:nth-child(4)');
let spanFive = document.querySelector('span:nth-child(5)');
let spanSix = document.querySelector('span:nth-child(6)');
let spanSeven = document.querySelector('span:nth-child(7)');
let spanEight = document.querySelector('span:nth-child(8)');
let spanNine = document.querySelector('span:nth-child(9)');
let spanTen = document.querySelector('span:nth-child(10)');


let timerInterval = setInterval(() => {
  // get time right now
  let currentTime = new Date().getTime();
  
  // console.log("The current time is: " + currentTime)
  
  let timeElapsed = currentTime - initialTime;
  
  let timeRemaining = twelveMinutes - timeElapsed;
  
  let countdownMinutes = timeRemaining / 1000 / 60;
  
  console.log(countdownMinutes);

  
 // color change after 3 minutes
  if (countdownMinutes <= 9) {
 h1Element.style.color = '#f49f3c'; 
  }
  // color change after 6 minutes
  if (countdownMinutes <= 6) {
 h1Element.style.color = '#f9ad54'; 
  }
   // color change after 9 minutes
  if (countdownMinutes <= 3) {
 h1Element.style.color = '#fbb768'; 
  }
  // color change after 12 minutes
  if (countdownMinutes <= 0) {
 h1Element.style.color = '#fbc88d'; 
  }
  

  // stop moving B after 6 minutes
  if (countdownMinutes <= 10) {
  spanOne.style.animation = 'none'; 
  
  // stop moving O after 7 minutes
  if (countdownMinutes <= 9) {
 spanTwo.style.animation = 'none'; 
  }
  // stop moving N after 8 minutes
  if (countdownMinutes <= 8) { spanThree.style.animation = 'none'; 
  }

  // stop moving A after 8 minutes
  if (countdownMinutes <= 7) { spanFour.style.animation = 'none'; 
  }

  // stop moving P1 after 8 minutes
    if (countdownMinutes <= 6) { spanFive.style.animation = 'none'; 
  }

  // stop moving P2 after 8 minutes
  if (countdownMinutes <= 5) { spanSix.style.animation = 'none'; 
  }

   // stop moving E after 8 minutes
   if (countdownMinutes <= 4) { spanSeven.style.animation = 'none'; 
  }

  // stop moving T1 after 8 minutes
  if (countdownMinutes <= 3) { spanEight.style.animation = 'none'; 
  }

   // stop moving I after 8 minutes
   if (countdownMinutes <= 2) { spanNine.style.animation = 'none'; 
  }

   // stop moving T2 after 8 minutes
   if (countdownMinutes <= 1) { spanTen.style.animation = 'none'; 
  }
  
  
  // turn off drips at 8 minutes aka jammy yolk
  for(let drip of drips) {
    if(countdownMinutes <= 4) {
    drip.style.display = "none";
    }
  }
}, interval); 

