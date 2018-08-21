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
L3 进制转换
=======
##知识点
 * 0b  二进制
 * 0o  八进制
 * 0x  十六进制
##实战演习：
~~~js
console.log(0b10); //0b10  表示二进制的10（妖零）  ，打印出来结果是十进制的2
console.log(0o10); //0o10  八进制的10（妖零），结果是8
console.log(0x10); //0x10  十六进制的10（妖零），结果是16
//判断进制？
console.log(0b11===3); //true  相当一个判断式，＝＝＝表时的是不仅值相等，类型也相等。
console.log(0o11===8); //false
console.log(0o11===9); //true
console.log(0x11===17); //true

//进制转换
let num = 10;//我这儿是十进制的10
//toString居然是可以进制转换！
console.log(num.toString(8));//转换成八进制，结果12
console.log(num.toString(2));//转换成二进制，结果1010
console.log(num.toString(16));//转换成十六进制，结果a
console.log(num.toString(5));//五进制？？嘿嘿，也是可以的哦，多少进制都可以转的,结果20

~~~ 

L4 嵌入字符串
========
##知识点
  * 字符串嵌入方式
  * 字符串模板定义
##实战学习：
~~~js
let name = "koma";//定义一个字符串变量
let mystr1 = "你好，${name}!"; //字符串中嵌入一个字符串变量（不行的）
//定义一个字符串模板。
//注意注意，此处字符串符号，它不是双引号“”，也不是单引号‘’，而一个反单引号`。在键盘上ESC键的下方！
//以前字符串里要加入变量，就要一段一段的拼接，到ES6有了这个字符串模板，好用啊！
let mystr2 = `你好，${name}！再见。`;

console.log(mystr1);//结果：你好，${name}!
console.log(mystr2);//结果：你好，koma！再见。

/*字符串模板的解析*/
function tagged(formats, ...args) {
    console.log(formats);
    console.log(args);
}
/*注意这里写法，tagged函数的后面紧跟着模板，不要有空格
通过解析，函数会自动将字符串模板拆分，分成格式、参数两部分，即它的机制是以变量名为分界，把字符串拆分成块放入数组中！
*/
tagged`你好，${name}！再见。`;
/*结果：
[ '你好，', '！再见。' ]
[ 'koma' ]
*/
~~~
L5  模板的延长线
==============
##知识点
  * 活用字符串模板
##实战学习：
###标准的模板使用
~~~js
let name = "koma";
let address = "网吧";
let mystr = `你好，${name}！
晚上一起去${address}玩吗？
等你回信。`;
console.log(mystr);   //用反单引号`可以随意换行
/*结果：
* 你好，koma！
  晚上一起去网吧玩吗？
  等你回信。
 */
~~~
###扩展文字模板
~~~js
let name = "koma";
let address = "网吧";
let fmtstr = markdown`你好，${name}！
晚上一起去${address}玩吗？
等你回信。`;
console.log(fmtstr);

//用markdown的一个整理函数来整理这个字符串模板，即用markdown的格式显示这一串信息。
// 达到字符串内容与表现形式分离的效果，活用字符模板的解析！好难啊
function markdown(formats, ...args) {
    console.log(formats);
    console.log(args);
    let result = "# 信息标题\n";
    for (let i = 0; i < formats.length; i++)
        result += formats[i] + "**" + (args[i] || '') + "**";
    return result;
}
/*结果：
[ '你好，', '！\n晚上一起去', '玩吗？\n等你回信。' ]   //解析得到的formats数组，3个元素
[ 'koma', '网吧' ]      //解析得到的args数组，2个元素
# 信息标题             //函数执行，拼接结果后
你好，**koma**！
晚上一起去**网吧**玩吗？
等你回信。****
* */
~~~
L6  symbol新类型
=============
##知识点
  * ES6增加了symbol新的原始类型
##实战学习：
~~~js
let str1 = String("HelloWorld");
let str2 = String("HelloWorld");
console.log(typeof str1); //结果：string
console.log(str1.toString()); //结果：HelloWorld
console.log(str1 == str2); //结果true
console.log(str1 === str2); //结果true
console.log("\n");
let s1 = Symbol("mySymbol");
let s2 = Symbol("mySymbol");
console.log(typeof s1); //结果：Symbol
console.log(s1.toString()); //结果：Symbol(mySymbol)
//为什么不相等？因为Symbol类型内部还分配了不同的ID值，是个hash值
//它比较的不是当前值（即使相等），而是比较内部值（hash值不相等）
//它看似相等，实则不等，其实Symbol对象都是唯一的，这个唯一性是很有用的
console.log(s1 == s2); //结果：false
console.log(s1 === s2); //结果：false
~~~
L7  Symbol的用法
=============
##知识点
  * 作为常量
  * 作为属性
  * 半隐藏属性
##实战学习：
###作为常量
~~~js
const Java=Symbol();
const Ruby=Symbol();
const Perl=Symbol();
const Php=Symbol();
const VB=Symbol();

let lang=Php;
if(lang===Java){
    console.log('Java的未来在哪里？');//作为常量，可以相等
}
if(lang===Ruby){
    console.log("再学个Ruby on Rails吧。");
}
~~~
###作为属性
~~~js
let s1 = Symbol("mySymbol");
 let s2 = Symbol("mySymbol");
 var obj = {};  //定义一个JS对象
 //给这个对象设置两个属性，属性名分别来自看似相同的两个Symbol变量，但其实它是可以区分开的
 obj[s1] = "hello"; //给这两个属性分别赋值
 obj[s2] = "world";
 console.log(obj); //显示整个对象的内容
 console.log(obj[s1]); //显示属性的值
 console.log(obj[s2]);
 /*结果：
 { [Symbol(mySymbol)]: 'hello', [Symbol(mySymbol)]: 'world' }  //看结果，属性名是一样的，但其实它可以存在
 hello
 world
 
 * */

~~~
###半隐藏属性
~~~js
const MYKEY =  Symbol();
class User {
    constructor(key,name,age){  //构造器，传进三个参数
        this[MYKEY] = key;    //这里不用.是想将MYKEY作为半隐藏属性，藏起来。
        this.name = name;
        this.age = age;
    }
    checkKEY(key){
        return this[MYKEY] === key; //检查传进来的key是不是等于构造器传进来的key
    }
}

let user = new User(123,'Curry',29);
//显示user对象的属性（自己知道的话），可以显示出来的，注意这个[MYKEY]属性
//换句话说，只有知道[MYKEY]属性的人才能使用，不知道的无法使用。这就是Symbol属性的半隐藏效果！
console.log(user.name,user.age,user[MYKEY]);   //Curry 29 123
//用它去比较也是有结果的
console.log(user.checkKEY(123));               //true
console.log(user.checkKEY(456));               //false
//用JS对象列出对象中的所有属性，注意 ！从结果得知[MYKEY]隐藏了，没列出来
console.log(Object.keys(user));                //[ 'name', 'age' ]
//用JSON的字符串化方法把user对象都打印出来，也看不到[MYKEY]属性。
console.log(JSON.stringify(user));             //{"name":"Curry","age":29}
~~~

L8  解构赋值 （destructuring assignment）
================
* 它是ES6里面一个比较新颖的变量赋值方式，非常常用和实用。
##知识点
  * 解构赋值的写法
##实战学习
~~~js
//数组赋值
let[a,b,c]=[10,20,30];
console.log(a,b,c);  //10,20,30  //数组元素变量？

//更灵活的写法,居然还有这种写法,作为语法，牢记就是了
let[x,y,...other]=[1,2,3,4,5];
console.log(x,y,other); //1 2 [3,4,5]  //other显然是一个数组了
console.log(x,y,...other); //1 2 3 4 5 //...other是剩余的其它变量

//对象赋值
//这里非常常用在函数传参
let {name,age}={name:'koma',age:20}
console.log(name,age);  //koma  20

//函数赋值 
function func1() {  //定义一个函数，返回一个数组
   return [10,20];
}
let [num1,num2] =func1(); //数组赋值
console.log(num1,num2);  //10 20

//函数参数名赋值
//用法非常灵活，参数可有默认值，还不指定传参数个数，这个特性很棒哟~
function func2({x=1,y=2}) { //定义一个函数，参数是一个对象，对象有两个属性x,y；默认值是1，2
  return x+y; //返回参数
}
console.log(func2({}));  //3
console.log(func2({x:10}));  //12
console.log(func2({y:10}));  //11
console.log(func2({x:10,y:20})); //30
~~~
L9  数组循环（for...of)
===============
##知识点
  * 新的数组循环方式  (ES5原来是for...in)
  * for of 与 for in 的区别
    1、for of 只关心数组的值，而for in 会关心这个数组的所有（像是看一个对象），包括数值、扩展函数等等。
  * 如果只是数组遍历值，建议用of,因为不用去关心这个数组里面是什么结构。
  * 用for in是要循环对象用的。
##实战演习：
~~~js
let list = [10, 20, 30];
Array.prototype.Len = function () { //这里定义一个组数的扩展函数
};

for (let val of list)
    console.log(val);//val直接取到元素值

//ES5的写法
for (var va1 in list)
    console.log(va1, list[va1]);//获取到的va1只是数组的下标，要显示数组元素值得用list[va1]
//同时会把上面那个扩展函数也打印出来

~~~
L10  函数的默认值
===============
##知识点
  *  定义函数时给出参数的默认值。（在ES5中是没有这个功能的哦）
##实战学习：
~~~js
//字符参数
function sayHello(name="defaultParameterValue") {
    console.log(`Hello,${name}`);
}
sayHello();//不传参数，将返回默认参数值结果：Hello,defaultParameter
sayHello("myStringIsGo");// 结果：Hello,myStringIsGo

//数值计算
function myadd(a=1,b=a) { //定义b=a也是可以的
    return a+b;
}
console.log(myadd()); //2
console.log(myadd(10)); //20
console.log(myadd(10,20)); //30

//必须指定参数
function required() {
    throw new Error("参数未指定！"); //定义一个函数，抛出一个错误信息
}
function sayBye(name=required()) { //默认参数值是required函数
    console.log(`${name} Bye!`);
}
sayBye("koma"); //传进参数，正常
//sayBye();  //不传参数，就默认required函数，抛出错误信息

~~~
L11  可变长参数
=============
##知识点
  * 定义函数时，可以将参数指定为可变数组。
##实战演习：
~~~js
//定义一个求和函数，函数的参数个数不确定，也就是说随便你传几个参数~~神奇！
function mySum(...args) {  //这个...就是表示不定长参数，可当作一个数组了。不确定你要传进来几个参数
    let result = 0;
    args.forEach(val => {  //用数组的forEach，这里用到箭头函数代替了function()的写法
        result+=val;   //累加循环到的各元素值
    });
    return result;
}
console.log(mySum(1,2,3)); //6
console.log(mySum(1,2,3,4,5,6));  //21
//console.log(mySum(1,2,a,4,5));  //a is not defined
~~~
L12  箭头函数=> (Arrow function)
==============================
##知识点
  *  通过箭头函数简化代码。这是ES6里面的新特性
##实战演习：
~~~js
let list=[10,20,30];
//ES5写法
let newList=list.map(function (value,index) { //map是数组元素值循环,一个匿名函数，元素值，下标
    return value * value; //输出元素值的平方
});
console.log(newList);

//ES6的写法
newList=list.map((value,index)=>{  //用箭头函数=>代替了function关键字  （注意，这里不能用let了哦，因为上面用过了，let阻止重复定义）
    return value * value;
});
console.log(newList);

//还可以更简化：index参数用不上，可以不写！甚至连参数的括号（）都可以不要！
newList=list.map(value => {
    return value * value;
});
console.log(newList);

//最终三种方法输出的结果是一样的。代码是不是简洁了好多啊？感觉蛮精彩的，嘿嘿
~~~
L13  基本对象的定义
================
##知识点
  *  JS基本对象的定义
##实战演习：
~~~JS
//下面定义三个变量，作为标题、价格、出版社，可以看作是一本书的属性
//但是如果属性多了，这样定义显得杂乱无章而且不好管理。
let title = "ES6从入门到学会";
let price = 25;
let publish = "小马出版社";
//用对象来定义一本书
let book = {   //对象名book,对象体用{}来括起来
    // 对象有三个属性
    title,
    price,
    publish,
    //对象有一个方法
    toString() {
        console.log(`<<${this.title}>> is ${price}元。`);//在这儿用this与不用都能引用到自己的成员变量
    }
};
book['lang'] = "简体中文";//对象还可以追加属性，这里追加了一个语言的属性
console.log(book);
book.toString();
/*结果：
{ title: 'ES6从入门到学会',
  price: 25,
  publish: '小马出版社',
  toString: [Function: toString],
  lang: '简体中文' }
<<ES6从入门到学会>> is 25元。
* */
~~~
L14  类定义class
===============
##知识点
  * ES6的类定义。  
  * 在ES5中类似于类的概念是用function，别扭。在ES6中真正导入了class类的定义。
##实战演习：
~~~JS
//定义一个类。class关键字，类名，类体用{}包围。
class Player {
    //定义构造器
    constructor(name, sex) { //传入两个参数
        this.name = name; //将参数赋给模板级的属性this
        this.sex = sex;  //模板级的属性不必预先定义好，它自动帮你定义了，很方便，很简洁；
    }

    //定义一个类函数(方法）
    show() {
        console.log(`${this.name}的性别是${this.sex}。`);//引用了模板级的变量（用this），没问题。
    }

    //定义了一个静态方法，其它语言中也都有的。
    /*什么叫静态方法？
    就是不用实例化这个类就可以直接调用的方法。在ES6中提供了这个功能
    因此面向对象的编程，用JS的ES6不会输其它语言哦
    * */
    static info() {
        console.log("这是一个球员类，你可以使用它建立自己的球员。");
    }
}

//如何使用一个类
//用变量player来实例化一个类，关键字new，并传入参数
let player= new Player("库里","男");
//直接调用实例内部的变量（属性）
console.log(player.name,player.sex);
//调用实例内部的方法
player.show();
//注意，这里是类名，大写的P哦。说明可以直接调用类的静态属性。
Player.info();
~~~
L15  setter和getter的定义
=======================
##知识点：
  * 在类中定义setter/getter的方法
  * setter:类属性的写入；getter：类属性的读取
##实战学习：
~~~JS
class Player {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

//定义getter
    get age() {
        return this._age;//这里下划线_只是他习惯于定义模板级变量加的字符，不是必须的。
    }

//定义setter
    set age(val) {
        this._age = val;
    }
}

//使用getter/setter
let player = new Player("库里", "男");
console.log(player);//实例化之后，age未赋值之前，我们看看对象里是什么？
player.age = 28; //这里调用的是setter方法，给_age赋值
console.log(player);
console.log(player.age); //这里调用的是getter方法,获取_age值
/*
*结果：
Player { name: '库里', sex: '男' }     //注意到一点是，在没有赋值之前，_age属性是没有的。调用setter赋值后才有，这是JS灵活的地方。
Player { name: '库里', sex: '男', _age: 28 }
28
* */
~~~
L16  类继承
============
##知识点：
  *  ES6面向对象编程之类继承
##实战学习：
~~~JS
//定义一个父类Car
class Car {
    constructor(brand) {
        this.brand = brand; //传入品牌
    }

    show() {
        console.log(`本台车的品牌是${this.brand}。`);
    }
}

//定义一个子类Lexus
//extends继承，也就是继承Car类
class Lexus extends Car {
    constructor(brand, lineup) { //品牌与分类（车型）
        super(brand); //super意思是调用了父类的构造器传进的brand，这样会初始化brand的属性。
        this.lineup = lineup;
    }

    getPrice() {
        switch (this.lineup) {  //根据车型取价格
            case "RX":
                return 60;
            case "NX":
                return 40;
            default:
                throw new Error("未知车类别");
        }
    }
}

//使用继承
let mycar = new Lexus("Lexus", "RX");
mycar.show(); //这里调用了父方法；继承了
console.log(`价格是：${mycar.getPrice()}万。`);//这里调用了本身的方法
~~~
