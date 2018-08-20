//定义一个数组常量，并打印出来
const list = [10,20,30];
console.log(list);

//更改常量数组中的元素值，是可以的哦
list[0]=100;
console.log(list);

//增加元素可以吗？可以！
list.push(88);
console.log(list);

//但是更改整个数组，那是不行的啦！不能重定义一个常量，但可以改变常量数组内部的元素。！
//list = [1,2,3]; //错误
