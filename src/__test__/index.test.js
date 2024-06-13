const checkingParityNumber = require('../index.js')

describe('Тест на четность числа', () => {
	const notEvenNumber = 17
	const evenNumber = 12
	const notNumber = 'строка'
	it('Проверка на нечетность числа', () => {
		expect(checkingParityNumber(notEvenNumber)).toBe(
			`${notEvenNumber} не четное число.`
		)
	}),
		it('Проверка является объект числом', () => {
			expect(checkingParityNumber(notNumber)).toBe(
				`${notNumber} введино не число.`
			)
		}),
		it('Проверка на четность числа', () => {
			expect(checkingParityNumber(evenNumber)).toBe(
				`${evenNumber} четное число.`
			)
		})
})
