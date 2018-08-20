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