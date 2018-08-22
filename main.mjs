import {add, min} from './math'; //导入需要用的方法，来自哪个模块文件
import Player from './Player';


//调用方法
console.log(add(10, 20));
console.log(min(30, 20));

let curry = new Player('库里');
curry.SayHello();