let countDownDate: Date;
countDownDate = new Date("Mar 31, 2021 23:59:59");

let x = setInterval(function () {
    let now = new Date().getTime();
    let differenceDate: number;
    differenceDate = countDownDate.getTime() - now;

    let days: number;
    days = Math.floor(differenceDate / (1000 * 60 * 60 * 24));
    let hours: number;
    hours = Math.floor(differenceDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minutes: number;
    minutes = Math.floor(differenceDate % (1000 * 60 * 60 * 24) / (1000 * 60)

}, 1000);