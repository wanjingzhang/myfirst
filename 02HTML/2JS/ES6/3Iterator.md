
# Iterator
 
### Iterator遍历过程： 
> Iterator 的遍历过程是这样的。 
>（1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
>（2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
>（3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
>（4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。
> 每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，就是返回一个包含value和done两个属性的对象。其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。
下面是一个模拟next方法返回值的例子。

```javascript
var title = 'ES6';
console.log(typeof title[Symbol.iterator]); 
var iterateIt = title[Symbol.iterator]();
console.log(iterateIt.next());
console.log(iterateIt.next());
console.log(iterateIt.next());
console.log(iterateIt.next());
```
> 自定义迭代器方法
```javascript
function tableReady(arr) {
	var nextIndex = 0;
	return {
		next() {
			if(nextIndex < arr.length) {
				return {value: arr.shift(), done: false}
			} else {
				return {done: true}
			}
		}
	}
} 
var waitingList = ['Sarah', 'Heather', 'Anna', 'Meagan']; 
var iterateList = tableReady(waitingList); 
console.log(`${iterateList.next().value}, your table is ready`);
console.log(`${iterateList.next().value}, your table is ready`);
console.log(`${iterateList.next().value}, your table is ready`);
console.log(`${iterateList.next().value}, your table is ready`);
console.log(`Is this finished? ${iterateList.next().done}`);
```

[GoBack](https://github.com/wanjingzhang/Self-Training/tree/master/02HTML/2JS/ES6)