class Automobile{
    constructor(wheels){
        this.wheels = wheels
        this.color = null;
    }
    setColor(color){
        this.color = color
    }
    getColor(){
        return this.color
    }
}

class Motorcycle extends Automobile{
    constructor(make, model, year){
    super(2)
    this.make = make
    this.model = model
    this.year = year
    }
}

class Sedan extends Automobile{
    constructor(make, model, year){
        super(4)
        this.make = make
        this.model = model
        this.year = year
    }
}

class Maybach extends Sedan{
    constructor(roof, price){
    super("Mercedes", "Maybach", 2010)
    this.roof = roof
    this.price = price
    this.convertible = this.isConvertible(this.roof)
    this.expensive = this.isExpensive(this.price)
    }
    isConvertible (roof){
        return (roof.includes('convertible') ? "is Convertible" : "is Hard top")
    }
    isExpensive (price){
        return (price >= 190000 ? 'Yes, it is very expensive' : "It is still very expensive")
    }    
}
let snazzyCar = new Maybach('convertible', 190000)
console.log(snazzyCar.convertible)
console.log(snazzyCar.expensive)