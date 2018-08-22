//将JS代码拷到这个文件来执行

//定义一个可迭代的类
class MyList {
    constructor(list) {
        this.list = list;
        //建立自己的迭代属性，该属性由迭代生成器来生成
        //注意区别于上上期的内容，上上期是在[Symbol.iterator]方法下用next（）函数与return返回；
        //这里我们让对象的[Symbol.iterator]等于一个迭代生成器，生成器用yield返回。这样显示代码更简单，有木有？
        this[Symbol.iterator] = function* () {
            let current = 0;
            let that = this;
            //yield迭代输出
            while (current < that.list.length) {
                yield that.list[current++];
            }
        }
    }
}

//用法与上上期用法一样：实例化，循环对象，输出每个元素值
let mylist = new MyList([100, 200, 300, 400, 500]);
for (let val of mylist) {
    console.log(val);
}