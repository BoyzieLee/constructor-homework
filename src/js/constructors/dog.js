let Dog = function (params) {

  let localParams = params || {};

  this.status = 'normal';
  this.color = localParams.color;
  // set a default of undefined, !== means not equal to, || means or,  ? : is conditional
  this.hungry = (localParams.hungry !== undefined) ? localParams.hungry : true;
  // this is how Tim did it in class. Said its easier to read.
  // this.hungry = (localParams.hungry === undefined) ? ture : localParams.hungry;

  this.feed = 'true';
  // this.owner = localParams.owner
}

export default Dog;
