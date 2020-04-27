# @bemoje/arr-any

Check whether a condition is true for any element of an array. The condition check is in the form of a callback.

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-any" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-any" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-any" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-any.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-any" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-any.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-any" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-any" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-any/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-any" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-any
npm install --save @bemoje/arr-any
npm install --save-dev @bemoje/arr-any
```

## Usage

```javascript
import arrAny from '@bemoje/arr-any'

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

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### arrAny

Check whether a condition is true for any element of an array. The condition check is in the form of a callback.

##### Parameters

-   `arr` **[Array][5]** The array to iterate

-   `callback` **[callback][6]** callback(element, index, array): boolean

##### Returns
**[boolean][7]** 

## callback

Type: [Function][8]

##### Parameters

-   `element` **any** 

-   `index` **[number][9]** 

-   `array` **[Array][5]** 

##### Returns
**[boolean][7]** 

[1]: #arrany

[2]: #parameters

[3]: #callback

[4]: #parameters-1

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[6]: #callback

[7]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[8]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function

[9]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number