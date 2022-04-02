"use strict";
//create copy



const selectItem = document.querySelector('.original-container')
const makeDuplicate = document.querySelector('.copy-container')

function copydiv(evt){
    selectItem.addEventListener("click", (evt) => {
    
    makeDuplicate.insertAdjacentHTML("afterbegin", evt.target.innerHTML+'   ')
    
})
}
copydiv() //makeDuplicate

//delete all copy 

function flushAllItems(evt){
    const clear_copies = document.querySelector("button");
    clear_copies.addEventListener("click", (evt) => {
    makeDuplicate.innerHTML = null;
    })
}
flushAllItems(makeDuplicate)
