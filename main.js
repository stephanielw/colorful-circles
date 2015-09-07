var rows = 20;
var columns = 20;
var circles = [];
var color = 'yellow';
circles.length = rows*columns;
for(var i = 0; i < circles.length; i++){
    circles[i] = document.createElement('div');
    circles[i].classList.add('circle');
    circles[i].style.marginLeft = 2*(i%columns)+'%';
    circles[i].style.marginTop = 2*Math.floor(i/columns)+'%';
    circles[i].addEventListener('mouseover', function(){
        this.style.backgroundColor = color;
    });
    document.getElementsByClassName('container')[0].appendChild(circles[i]);
}
document.getElementsByClassName('reset')[0].addEventListener('click', function(){
    for(var i = 0; i < circles.length; i++){
        document.getElementsByClassName('circle')[i].style.backgroundColor = 'red';

    }
    color='yellow';
})

document.getElementsByClassName('black')[0].addEventListener('click',function(){
    color = 'black';
})