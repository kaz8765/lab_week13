"use strict";


// --------------------------------------------------

// A. Click Creates


const selectItem = document.querySelector(`.original-container`)
const makeDuplicate = document.querySelector(`.copy-container`)

function copydiv(evt) {
    selectItem.addEventListener(`click`, evt => {
        console.log(evt)

        makeDuplicate.insertAdjacentHTML(`afterbegin`, evt.target.innerHTML + '   ')

    })
}
copydiv()
// makeDuplicate inside parenthesis works as well

// --------------------------------------------------

// B. Clear Destroys

function flushAllItems(evt) {
    const clear_copies = document.querySelector(`button`);
    clear_copies.addEventListener(`click`, (evt) => {
        console.log(evt)
        makeDuplicate.innerHTML = null;
    })
}
flushAllItems(makeDuplicate)
