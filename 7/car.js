/**
 * Created by Frolova on 17.02.2017.
 Done*/
function Car(carChar) {
    this.durability = carChar.durability || "default";
    this.gas = carChar.gas || 0;
    this.speeds = JSON.parse(JSON.stringify(carChar.speeds));
    
}
Car.prototype.drive = function(distance, speed) {
       
    var speedCharacteristics = this.speeds[speed];
    var drivingDistance = Math.min(distance, this.gas / speedCharacteristics.gas * 100);
    
    var durabilitySpent = drivingDistance * speedCharacteristics.durability;
    var durabilityLeft = this.durability - durabilitySpent;
    
    var realDistance;
    if (durabilityLeft < 0) {
        realDistance = this.durability / speedCharacteristics.durability;
    } else {
        realDistance = drivingDistance;
    }
    
    var realDurabilitySpent = realDistance * speedCharacteristics.durability;
    var realGasSpent = realDistance * speedCharacteristics.gas / 100;
    this.durability -= realDurabilitySpent;
    this.gas -= realGasSpent;
    return this.car;
};
var carSpeeds = {
    slow: {
        durability: 0.001,
        gas: 7
    },
    average: {
        durability: 0.001,
        gas: 6.5
    },
    fast: {
        durability: 0.003,
        gas: 6
    }
}
var bus = new Car({
    durability: 0.78,
    gas: 100,
    speeds: carSpeeds
    });
carSpeeds.slow.gas = 100500;
console.log(bus.gas, bus.durability);
bus.drive(100, 'slow');
console.log(bus.gas, bus.durability);