/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find(obj, value) {
    let result = [];
    function findPath(obj, path) {
        for (let key in obj) {
            let track = (path !== undefined) ? path + '.' + key : key;
            if (obj[key] === value) result.push(track);
            if (typeof obj[key] == 'object' && obj[key] != null) {
                findPath(obj[key], track);
            }
        }
    }

    findPath(obj);

    switch (result.length) {
        case 0:
            return null;
        case 1:
            return result[0];
        default:
            return result;
    }
}