// Функция проверки на четность числа

function checkingParityNumber(value) {
	if (typeof value != 'number') {
		return `${value} введино не число.`
	} else {
		if (value % 2 == 0) {
			return `${value} четное число.`
		} else {
			return `${value} не четное число.`
		}
	}
}

module.exports = checkingParityNumber
