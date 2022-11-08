const toggle = document.getElementById('toggle');
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

toggle.addEventListener('click', () => {
    const htmlEl = document.querySelector('html');
    console.log(htmlEl);
    if(htmlEl.classList.contains('dark')) {
        htmlEl.classList.remove('dark');
        toggle.innerHTML = 'Dark mode';
    } else {
        htmlEl.classList.add('dark');
        toggle.innerHTML = 'Light mode';
    }
});

function getTime() {
    const time = new Date();
    const hour = time.getHours();
    const hourByTwelve = hour % 12;
    const minute = time.getMinutes();
    const second = time.getSeconds();
    const date = time.getDate();
    const day = time.getDay();
    const month = time.getMonth();
    const ampm = hourByTwelve > 12 ? 'PM' : 'AM'
    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hourByTwelve, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minute, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(second, 0, 59, 0, 360)}deg)`;

    const timeEl = document.querySelector('.time');
    timeEl.innerHTML = `${hourByTwelve < 10 ? '0'+ hourByTwelve : hourByTwelve} : ${minute < 10 ? '0' + minute : minute} ${ampm}`;

    const dateEl = document.querySelector('.date');
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

getTime();
setInterval(() => getTime(), 1000);