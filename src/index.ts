
import { flatten1, flatten2 } from "./fns/flatten";


let arr = [11,[2,[3]],5, 8, [99, 100]]
console.log('1', flatten1(arr))
console.log('2', flatten2(arr))