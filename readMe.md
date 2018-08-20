L1 let命令
==========
## 知识点

* 用let命令限定作用域

##实战学习

###变量i的作用域
~~~js
//ES5
if (true) {
    var i = 1 ;
}
console.log(i);

//ES6
if (true) {
    let i = 1;
}
console.log(i); //变量i未找到,未定义
~~~
###重复定义
~~~js
var i=0;
switch (i){
    case 0:
        //var value = "hello";
        let value ="hello";
        break;
    case 1:
        //var value = "world"; //如果用var定义，是不会报错的
        let value ="world"; //报错，重复定义错误
        break;
    default:""
}
~~~
L2  常量定义
===========

##知识点
* const关键字  ES6常量定义，（ES5中是没有常量定义的）
##实战学习
~~~js
const data = 10;
console.log(data);
// let data = 100;  //执行错误。常量就是常量，是不可以变值的哈

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


~~~
