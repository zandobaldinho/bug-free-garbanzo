function updateClock() {
    var now = new Date();

    var day = now.getDate().toString().padStart(2, '0');
    var month = (now.getMonth() + 1).toString().padStart(2, '0');
    var year = now.getFullYear();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');

    var milliseconds = now.getMilliseconds().toString().padStart(3, '0').substring(0, 2);


    var timeString = day + ' ' + month + ' ' + year + ' ' + hours + ':' + minutes + ':' + seconds + ':' + milliseconds;

    document.getElementById('clock').innerText = timeString;
}


function startClock() {

    updateClock();


    setInterval(updateClock, 1);
}


window.onload = startClock;