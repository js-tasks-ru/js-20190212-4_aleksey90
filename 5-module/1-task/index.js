'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let tr = table.rows;
    console.log(tr);
    for (let i = 1; i < tr.length; i++) {
        
        if (!tr[i].cells[3].hasAttribute('data-available')) {
            tr[i].setAttribute('hidden', '');

        }
        if (tr[i].cells[3].dataset.available === 'true') tr[i].classList.add('available');
        if (tr[i].cells[3].dataset.available === 'false') tr[i].classList.add('unavailable');

        if (tr[i].cells[2].innerHTML === 'm') tr[i].classList.add('male');
        else tr[i].classList.add('female');

        if (tr[i].cells[1].innerHTML < '18') tr[i].style.cssText = "text-decoration: line-through";

    }
    
}