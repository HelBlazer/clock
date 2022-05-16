let a, dispTime, dispDate;
        setInterval(() => {
            a = new Date();
            dispTime = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
            dispDate = a.toLocaleDateString();
            document.getElementById('time').innerHTML = dispDate + " on " + dispTime;
        }, 1000);