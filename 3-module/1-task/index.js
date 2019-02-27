/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    let newArray = data.filter(item => item.age <= age);
    let result = [];
    newArray.forEach(item => result.push(`${item.name}, ${item.balance}`));
    return result.join('\n');
}


