let countDownDate: Date;
countDownDate = new Date("Mar 20, 2021 23:59:59");

let x = setInterval(function () {
    let now = new Date().getTime();
    let differenceDate: number;
    differenceDate = countDownDate.getTime() - now;

    let days: number;
    days = Math.floor(differenceDate / (1000 * 60 * 60 * 24));
    let hours: number;
    hours = Math.floor(differenceDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes: number;
    minutes = Math.floor(differenceDate % (1000 * 60 * 60) / (1000 * 60));
    let seconds: number;
    seconds = Math.floor(differenceDate % (1000 * 60) / 1000);
    // document.getElementById("demo")!.innerHTML = days + "d " + hours + "h "
    //     + minutes + "m " + seconds + "s";
    if (differenceDate < 0) {
        clearInterval(x);
        document.getElementById("demo")!.innerHTML = "EXPIRED";
    } else {
        document.getElementById("days")!.innerHTML = String(days);
        document.getElementById("hours")!.innerHTML = String(hours);
        document.getElementById("minutes")!.innerHTML = String(minutes);
        document.getElementById("seconds")!.innerHTML = String(seconds);
    }
}, 1000);