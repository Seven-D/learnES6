//定义一个类
class Player {
    //构造器
    constructor(name) {
        this.name = name;
    }

    //方法
    SayHello() {
        console.log(`Hello,${this.name}。`);
    }
}

//导出类
export default Player;