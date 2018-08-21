let list = [10, 20, 30];
Array.prototype.Len = function () { //这里定义一个组数的扩展函数
};
for (let val of list)
    console.log(val);//val直接取到元素值

//ES5的写法
for (var va1 in list)
    console.log(va1, list[va1]);//获取到的va1只是数组的下标，要显示数组元素值得用list[va1]
//同时会把上面那个扩展函数也打印出来

/*for of 与 for in 的区别
1、for of 只关心数组的值，而for in 会关心这个数组的所有，包括数值、扩展函数等等。
** */