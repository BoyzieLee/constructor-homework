let Dog = function (params) {

  let localParams = params || {};

  this.status = 'normal';
  this.color = localParams.color;
  // set a default of undefined, !== means not equal to, || means or,  ? : is conditional
  this.hungry = (localParams.hungry !== undefined) ? localParams.hungry : true;
  this.feed = 'true';

}
export default Dog;
