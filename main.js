const testttt = document.getElementById("time");

setInterval(() => {
    const ddd = new Date();
    testttt.innerText = `${ddd.getMonth() + 1}-${ddd.getDate()}-${ddd.getFullYear()} ${ddd.getHours()}:${ddd.getMinutes()}:${ddd.getSeconds()}`;
}, 1000);