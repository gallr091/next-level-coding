const logo = document.querySelector("svg")

window.onscroll = function() {
  const scrollPos = window.pageYOffset
    const divPos = scrollPos * 0.05
    logo.style.transform = 'rotate('+divPos+'deg)'
    console.log(divPos)
};
