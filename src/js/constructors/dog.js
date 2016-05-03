let Dog = function (params) {

  let localParams = params || {};

  this.status = 'normal';
  this.color = localParams.color;
}
export default Dog;
