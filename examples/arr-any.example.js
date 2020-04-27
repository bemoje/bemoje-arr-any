import arrAny from '../src/arr-any'

const arr = ['hi', 'there']

arrAny(arr, (element) => {
	return element === 'there'
})
//=> true

arrAny(arr, (element) => {
	return element.length === 5
})
//=> true

arrAny(arr, (element) => {
	return element.length > 5
})
//=> false
