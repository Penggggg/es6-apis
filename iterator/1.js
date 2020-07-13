/**
 * iterator是一种interface，为各种不同的数据结构提供统一的访问机制
 * 
 * next，其实是指针，不断指向“下一个”
 */

const ArrayInterator = arr => {
    let Index = 0;
    return {
        next: ( ) => ({
            value: arr[ Index++ ],
            done: Index >= arr.length
        })
    }
}

const i = ArrayInterator([ 1, 2, 3 ])

console.log( i.next( ));
console.log( i.next( ));
console.log( i.next( ));