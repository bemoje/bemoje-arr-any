import arrAny from '../src/arr-any'

describe('arrAny', () => {
	test('works', () => {
		const arr = ['hello', 'world']

		expect(
			arrAny(arr, (element) => {
				return element.length > 5
			}),
		).toBe(false)

		expect(
			arrAny(arr, (element) => {
				return element.length === 5
			}),
		).toBe(true)

		expect(
			arrAny([], (element) => {
				return element.length === 5
			}),
		).toBe(false)
	})
})
