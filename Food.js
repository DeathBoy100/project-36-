class food{
    foodStock = 1;
    lastFed = 1;
    constructor(foodStock,lastFed){
      this.image = loadImage("images/Milk.png")
      this.foodStock = foodStock;
      this.lastFed = lastFed;
      //World.add(world, this.body);

    }

    getfoodStock(){
        //console.log(this.foodStock);
        return this.foodStock;
    }
    updatefoodStock(x){
        this.foodStock = x;
    }

    deductfoodStock(){
        this.foodStock -=1;
    }
    display(){
        var x=30, y=150;
        imageMode(CENTER);
        
        if(this.foodStock != 0){
            for(var i=0;i< this.foodStock; i++){
                if(i % 8 == 0){
                    x=60;
                    y=y+50;
                }
                image(this.image, x,y,50,50);
                x = x + 30;
            }
        }
    }
}