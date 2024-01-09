const hourEl = document.getElementById('hour')
const minEl = document.getElementById('minute')
const secEl = document.getElementById('second')
const appmEl = document.getElementById('appm')


function updateClock(){
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let second = new Date().getSeconds()
    let ampm = 'AM'

    if (hour > 12){
        hour = hour - 12
        ampm = 'PM'
    }

    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute
    second = second < 10 ? '0' + second : second

    hourEl.innerText = hour
    minEl.innerText = minute
    secEl.innerText = second
    appmEl.innerText = ampm

    setTimeout(()=>{
        updateClock()
    }, 1000)
}

updateClock()