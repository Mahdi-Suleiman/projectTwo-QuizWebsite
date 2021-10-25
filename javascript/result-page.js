const navbar = document.querySelector(".navbar");
const footer = document.querySelector(".end-section");
const answersArray = [];
const h1 = document.querySelector("#pass-fail-div");
let counter = 0;
for (let index = 0; index < 10; index++) {
    const element = localStorage.getItem(`A${index + 1}`);
    JSON.stringify(element);
    sessionStorage.setItem(`A${index}`, element);
    localStorage.removeItem(`A${index + 1}`);
}
for (let index = 0; index < 10; index++) {
    const element = sessionStorage.getItem(`A${index + 1}`);
    answersArray.push(JSON.parse(element));
}
// console.log(answersArray);



function showTable() {
    const myTable = [];
    myTable.push(`
    <thead>
<tr class="table-thead">
<td>
    Question
</td>
<td>
    Answer
</td>
</tr>
</thead>`);

    for (let index = 0; index < 10; index++) {
        if (answersArray[index] === true) {
            counter++;
            myTable.push(`
<tr style="color: green">
<td >
    ${index + 1}
</td>
<td>
    <i class="fa-solid fa-circle-check"></i>
</td>
</tr>`);
        }
        else {
            myTable.push(`
        <tr style="color: #B8293D">
        <td >
            ${index + 1}
        </td>
        <td>
            <i class="fa-solid fa-circle-xmark"></i>
        </td>
    </tr>`);
        }
    }

    myTable.unshift(`<table class="styled-table" style="display: table;">`);
    myTable.push(`</table>`);


    const tableContainer = document.querySelector(".table-container");
    tableContainer.innerHTML = myTable.join('');
    document.querySelector("#results").innerHTML = `You answered ${counter} correct out of 10!`;
    const tr = document.querySelector(".table-thead");

    if (counter >= 5) {
        celebrate();
        h1.innerHTML = 'Pass!';
        h1.style.color = 'green';
        navbar.style.backgroundColor = "green";
        footer.style.backgroundColor = "green";
        tr.style.backgroundColor = "green";
    }
    else {
        h1.innerHTML = 'Failed!';
        h1.style.color = '#B8293D';
        navbar.style.backgroundColor = "#B8293D";
        footer.style.backgroundColor = "#B8293D";
        tr.style.backgroundColor = `#B8293D`;
    }
}
function toggleResult() {
    const table = document.querySelector("table");
    if (table.style.display === "table") {
        table.style.display = "none";
    }
    else {
        table.style.display = "table";
    }
}

function logout() {
    sessionStorage.clear();
    localStorage.removeItem('logged');
    window.close();
    window.open('../html/index.html', '_blank');
}

/* celebration */
function celebrate() {

    const canvas = document.getElementById('custom_canvas')
    const jsConfetti = new JSConfetti({ canvas })
    setTimeout(() => {
        jsConfetti.addConfetti({
            confettiRadius: 6,
            confettiNumber: 800

            // , emojis: ['<header>', '<frontend>']
        })
    }, 500)

    // jsConfetti.addConfetti()
}
