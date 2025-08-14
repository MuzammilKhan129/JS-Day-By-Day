function digitalClock(){
    let date = new Date();
    // console.log(date);
    let hours = date.getHours();
    // console.log(hours);
    let minute = date.getMinutes();
    // console.log(minute);
    let scond = date.getSeconds();
    // console.log(scond);
    let am_pm ="AM";

    if (hours >= 12){
        am_pm = "PM";
        if (hours > 12){
            hours -= 12;
        }
    }

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (scond < 10) {
        scond = "0" + scond;
    }
    // hours = (hours < 10) ? "0" + hours : hours;


    let time = hours + ":" + minute + ":" +scond + " " + am_pm;
    let clock = document.querySelector(".clock");
    clock.innerHTML = time;

    setTimeout(digitalClock, 1000);
}











digitalClock();