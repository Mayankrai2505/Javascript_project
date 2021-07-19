function showTime() {
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();
var clockTime = hours + ':' + minutes + ':' + seconds + " " ;
    document.getElementById('timecloock').innerHTML = clockTime ;

}
setInterval(showTime,1000);
console.log("new add")