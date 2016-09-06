import Ember from 'ember';

export function cartTotal(params/*, hash*/) {
  var productsOfCart=params[0];
  var total=0;
  console.log(productsOfCart);
  // productsOfCart.forEach(function(product){
  //   total+=product.cost;
  // });
  return Ember.String.htmlSafe('<h3>Total is '+total+'</h3>');
}

export default Ember.Helper.helper(cartTotal);
