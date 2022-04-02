"use strict";

const makeDuplicate = document.querySelector('.copy-container')

const selectItem = document.querySelector('.original-container')

function copydiv(evt){
    selectItem.addEventListener("click", (evt) => {
    makeDuplicate.insertAdjacentHTML("afterbegin", evt.target.innerHTML)
    })
}
copydiv(makeDuplicate)