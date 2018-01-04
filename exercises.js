function Automobile(wheels){
    this.wheels = wheels
    this.setColor = () => {
        this.color = color
    }
    this.getColor = () => {
        return this.color
    }
    this.gasPedal =()=>{
        return 'Vroom'
    }
}

// function Motorcycle(make, model, year){
//     this.make = make
//     this.model = model
//     this.year = year
// }

// EXERCISE ONE
function Sedan(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
        this.doors = 4
    }
    
Sedan.prototype = new Automobile(4)

function Camry(){
}

Camry.prototype = new Sedan("Toyota", "Camry", 2000)

let camry = new Camry()
console.log(camry.wheels)
camry.year = 2010
console.log(camry.year)
