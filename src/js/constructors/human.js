let Human = function (passedOptions) {

  passedOptions = passedOptions || {};

  this.pet = function (petObj) {
    petObj.status = 'happy';
    // petObj.hungry = options.hungry;
  };
  this.feed = function (Dog) {
    return Dog.hungry = false;
  };


    // set a default of undefined, !== means not equal to, || means or,  ? : is conditional
    // this.cool = passedOptions.cool || true;

  this.cool = (passedOptions.cool === undefined) ? false : passedOptions.cool;
}


export default Human;
