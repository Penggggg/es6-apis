const a = [ 1, 2, 3 ];

const i = a[ Symbol.iterator ]( );

console.log( i.next( ))
console.log( i.next( ))
console.log( i.next( ))
console.log( i.next( ))