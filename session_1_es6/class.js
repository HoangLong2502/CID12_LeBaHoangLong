class Car {
    name;
    speed;
    brand;
    color;
    constructor(name, speed, brand, color){
        this.name = name;
        this.brand = brand;
        this.speed = speed;
        this.color = color;
    }
    drive(){
        console.log(this.name + ' is driving at ' + this.speed + ' km/h ');
    }
    
    paint = (newColor) => {
        console.log('Current Color: '+ this.color + ' Changing to ' + newColor);
        this.color = newColor;
    }
}

const fadil = new Car('fadil', 100, 'Vifast', 'Red');
const BMW = new Car('BMW 530i', 200, 'BMW', 'Black');

fadil.drive();
fadil.paint('Black');