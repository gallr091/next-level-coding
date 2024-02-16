const container = document.getElementById('container');
const cars = new Array()
cars[0] = document.getElementById('car1');
cars[1] = document.getElementById('car2');
cars[2] = document.getElementById('car3');
cars[3] = document.getElementById('car4');

let i = 0;


window.onscroll = function() {
    const scrollPos = window.scrollY;
    const carPos = scrollPos * 15; 
    console.log(carPos);
    cars[i].style.left = carPos + 'px';

    if(carPos > 700){ 
        window.scrollTo(0,0);
        cars[i+1].style.animation = "Drive 5s";
        cars[i+1].style.visibility = "visible";
        cars[i].style.visibility = "hidden";
        i++;
    }
};

// //if(carPos<10) && i>3{
//     cars[i-1].style.animation="Drive 5s";
// }


// const container = document.getElementById('container');
// const car1 = document.getElementById('car1');
// const car2 = document.getElementById('car2');

// window.onscroll = function() {
//     // Calculate the position to move the car to based on scroll position
//     const scrollPos = window.scrollY;
//     const containerWidth = container.offsetWidth;
//     const carWidth = car1.offsetWidth;
//     const maxScroll = containerWidth - carWidth; // Maximum scroll value to move the car out of the container
//     const carPos = scrollPos * 2; // Adjust this multiplier as needed

//     if (carPos <= maxScroll) {
//         car1.style.left = carPos + 'px';
//     } else {
//         car1.style.left = maxScroll + 'px';
//         car2.style.left = (maxScroll + carWidth) + 'px'; // Position the second car outside the container
//     }
// };

// const car1 = document.getElementById('car1');
// const car2 = document.getElementById('car2');

// // Move car1 to the right until it's out of view
// car1.style.left = '100%';

// // When car1 is out of view, move car2 into view
// setTimeout(() => {
//     car1.style.left = '-100px'; // Reset car1 position
//     car2.style.left = '50%'; // Move car2 to the center of the container
// }, 5000); // Adjust the delay to match the duration of the transition in CSS