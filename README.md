# CSS classnames obfuscator
Obfuscator for CSS class names

Usage
```javascript
var obfuscator = require('css-classnames-obfuscator');
var classes = ['asd','fgh'];

obfuscatedList = obfuscator(classes);

console.log(obfuscatedList);

/* output
{
asd: 'a',
fgh: 'b'
}
*/
```
