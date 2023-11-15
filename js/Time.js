window.onload = function () {
    dateFunc();
    timerFunc();
    setInterval(timerFunc, 1000);
    formatDate();
}

function dateFunc() {
    var today = new Date();
    var date = today;
    document.getElementById("dateField").innerText = date;
}

function timerFunc() {
    var now = new Date();
    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();
    var result = "Now: " + hour + ":" + min + ":" + sec;
    document.getElementById("timer").innerHTML = result;
}

function formatDate() {
    var date = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var dayOfWeek = days[date.getDay()];
    var month = months[date.getMonth()];
    var dayOfMonth = date.getDate();
    var year = date.getFullYear();

    var suffix = 'th';
    if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
        suffix = 'st';
    } else if (dayOfMonth === 2 || dayOfMonth === 22) {
        suffix = 'nd';
    } else if (dayOfMonth === 3 || dayOfMonth === 23) {
        suffix = 'rd';
    }

    var formattedDate = dayOfWeek + ', ' + month + ' ' + dayOfMonth + suffix + ', ' + year;
    document.getElementById("todayField").innerText = formattedDate;
}