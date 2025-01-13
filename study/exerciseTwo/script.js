let num = document.querySelector('input#fnum');
let list = document.querySelector('select#flist');
let result = document.querySelector('div#res');
let values = [];

function Add() {
    if (isNumber(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Value ${num.value} add`;
        list.appendChild(item);
        res.innerHTML = '';
    } else {
        window.alert('Is not a valid number');
    }
    num.value = '';
    num.focus();
}

// Check if the input is a valid number between 1 and 100
function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

// Check if the number is already in the list
function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function Submit() {
    if (values.length == 0) {
        window.alert('add values for submit');
    } else {
        let total = values.length;
        let bigger = values [0];
        let minor = values [0];

        for (let pos in values) {
            if (values[pos] > bigger) {
                bigger = values[pos];
            } else if (values[pos] < minor) {
                minor = values[pos];
            }
        }

        res.innerHTML = '';
        res.innerHTML += `<p>In total we have ${total} registered</p>`;
        res.innerHTML += `<p>The bigger value is ${bigger}</p>`;
        res.innerHTML += `<p>The minor value is ${minor}</p>`;
    }
}
