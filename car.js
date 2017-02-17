/**
 * Created by Frolova on 17.02.2017.
 */
function Car(durability,gas,speeds) {
    this.durability = durability || "default";
    this.gas = gas || 0;
    this.speeds = speeds || 0;
    
}
Car.prototype.drive = function(car, distance, speed) {
    this.car = car || "default";
    this.distance = distance || 0;
    this.speed = speed || 0;
    
    var speedCharacteristics = this.speed;
    var drivingDistance = Math.min(this.distance, this.gas / speedCharacteristics.gas * 100);
    
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
var bus = new Car(
    {durability: 0.78,
    gas: 100,
    speeds: {
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
        }}});
bus.drive('car2', 100, 'slow');