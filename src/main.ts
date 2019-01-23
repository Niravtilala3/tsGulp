class Car { 
    //field 
    engine:string; 
  
    //constructor 
    constructor(engine:string) { 
       this.engine = engine 
    }  
 
    //function 
    disp():void { 
       console.log("Engine is  :   "+this.engine) 
    } 
 }
 var obj = new Car("Engine 1");
 obj.disp();