//将JS代码拷到这个文件来执行

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