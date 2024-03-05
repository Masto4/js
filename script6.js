let tableData = document.querySelector('tbody');

const names = ['Abbas', 'Ali', 'Shahid', 'Sajjad', 'Rohaan', 'Taimoor'];
const age = [15, 18, 12, 20, 13, 17];


let counter = ''
for (let i = 0; i < names.length; i++){
    counter += `
    <tr>
       <td>${names[i]}</td>
       <td>${age[i]}</td>
    </tr>`
}
tableData.innerHTML = counter;