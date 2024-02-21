let cars = new Array();
cars[0] = document.getElementById('car1');
cars[1] = document.getElementById('car2');
cars[2] = document.getElementById('car3');
cars[3] = document.getElementById('car4');

let charts = new Array();
charts[0] = document.getElementById('chart1');
charts[1] = document.getElementById('chart-2');
charts[2] = document.getElementById('chart-3');
charts[3] = document.getElementById('chart-4');


let i = 0;

window.onclick = function() {
    console.log(i);
        cars[i].style.animation = "driveOut 5s forwards";
        let next= (i+1)%4;
        cars[next].style.animation = "drive 5s forwards";
        for (let x=0; x<charts.length; x++){
          if (x==next){
            charts[x].style.display = "block";
          } else {
            charts[x].style.display = "none";
          }
          }
  
        ++i;
        if(i==4){
            i=0;
        }

};


window.onload = function () {
  cars[0].style.animation = "drive 5s";
  charts[0].style.display = "block";
}
