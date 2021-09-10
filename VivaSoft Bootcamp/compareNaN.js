console.log(NaN == NaN);
console.log(NaN === NaN);

// Value Properties of the Global Object
// The value of NaN is NaN (see 8.5). This property has the attributes { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }.

// NaN as you are using, is a global property initialized with value of Not-A-Number. It's not boolean. It's NaN data type as defined by IEEE 754.

// Ref: https://stackoverflow.com/questions/22600248/is-nan-falsy-why-nan-false-returns-false/22600338
