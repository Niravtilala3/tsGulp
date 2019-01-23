"use strict";
var Car = /** @class */ (function () {
    //constructor 
    function Car(engine) {
        this.engine = engine;
    }
    //function 
    Car.prototype.disp = function () {
        console.log("Engine is  :   " + this.engine);
    };
    return Car;
}());
var obj = new Car("Engine 1");
obj.disp();
