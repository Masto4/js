let tableData = document.querySelector('tbody');

const names = ['Abbas', 'Ali', 'Shahid', 'Sajjad', 'Rohaan', 'Taimoor'];
const age = [15, 18, 12, 20, 13, 17];
const classes = [9, 12, 6, 14, 7, 11];


let counter = ''
for (let i = 0; i < names.length; i++){
    counter += `
    <tr>
       <td>${names[i]}</td>
       <td>${age[i]}</td>
       <td>${classes[i]}</td>
    </tr>`
}
tableData.innerHTML = counter;