/* eslint-disable no-unused-vars */
/* eslint-disable */ 

import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range; // Store range with underscore
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  cloneCar() {
    // Create a new instance of Car, not EVCar
    return new Car(this._brand, this._motor, this._color);
  }
}