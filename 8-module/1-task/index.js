'use strict';

/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {

    /**
     * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
     */
    this.el = document.createElement('table');
    
    const tHead = this.el.createTHead();
    const tBody = this.el.createTBody();
    
    const rowHead = tHead.insertRow();
    for (let key in items[0]) {
        let th = rowHead.insertCell();
        th.innerText = key[0].toUpperCase() + key.substr(1);
    }
    
    for (let i = 0; i < items.length; i++) {
        let rowBody = tBody.insertRow();
        for (let key in items[i]) {
            let td = rowBody.insertCell();
            td.innerText = items[i][key];
        }
    }

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
    /**
     * Метод выполняет сортировку таблицы
     * @param {number} column - номер колонки, по которой нужно выполнить сортировку (отсчет начинается от 0)
     * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
     */
    this.sort = function (column, desc = false) { 

        let rows = [...this.el.tBodies[0].rows];
        
        if (isNumeric(rows[0].cells[column].innerHTML)) {
            rows.sort((a, b) => (a.cells[column].innerHTML - b.cells[column].innerHTML));
        } else {
            rows.sort((a, b) => (a.cells[column].innerHTML > b.cells[column].innerHTML) ? 1: -1);
        }
        if (desc) rows.reverse();

        for (let i = 0; i < rows.length; i++) {
            this.el.tBodies[0].appendChild(rows[i]);
        }

    };
}

