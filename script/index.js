// Output
const dayOut = document.getElementById('DD');
const monthOut = document.getElementById('MM');
const yearOut = document.getElementById('YY');
const form = document.getElementById('myForm')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dayInp = document.getElementById('day').value;
    const monthIpn = document.getElementById('month').value;
    const yearInp = document.getElementById('year').value;
    const day = parseInt(dayInp, 10);
    const month = parseInt(monthIpn, 10) - 1;
    const year = parseInt(yearInp, 10);
    let input = new Date(year, month, day);
    let date = new Date();
    const dayResult = parseInt((date - input) / (1000 * 60 * 60 * 24), 10);
    const yearResult = parseInt(dayResult / 365);
    const monthResult = month <= date.getMonth() ? parseInt(date.getMonth() - month) : date.getMonth();

    if (input) {
        dayOut.innerHTML = dayResult;
        monthOut.innerHTML = monthResult;
        yearOut.innerHTML = yearResult;

        document.getElementById('day').value = "null";
        document.getElementById('month').value = "null";
        document.getElementById('year').value = "null";
    } 
})