
const navbar = document.querySelector("nav");
const footer = document.querySelector("footer");
const answersArray = [];
const h1 = document.querySelector("#pass-fail-div");
let counter = 0;

// console.log(answersArray);

function buildAnwersArray() {
    for (let index = 0; index <= localStorage.length; index++) {
        const eachUserAnswer = localStorage.getItem(`A${JSON.parse(index + 1)}`);
        answersArray.push(JSON.parse(eachUserAnswer));
    }
}



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

    myTable.unshift(`<table class="styled-table" style="display: table; visibility: visible;
    ">`);
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
        navbar.style.filter = "drop-shadow(0 0px 6px green)";
        footer.style.filter = "drop-shadow(0 0px 6px green)";
    }
    else {
        h1.innerHTML = 'Failed!';
        h1.style.color = '#B8293D';
        navbar.style.backgroundColor = "#B8293D";
        footer.style.backgroundColor = "#B8293D";
        tr.style.backgroundColor = `#B8293D`;
        navbar.style.filter = "drop-shadow(0 0px 6px #B8293D)";
        footer.style.filter = "drop-shadow(0 0px 6px #B8293D)";


    }
}
function toggleResult() {
    const table = document.querySelector("table");
    if (table.style.visibility === "visible") {
        table.style.visibility = "hidden";
    }
    else {
        table.style.visibility = "visible";
    }
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
