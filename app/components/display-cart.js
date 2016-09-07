import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions:{
    removeToCart(params){
      var removeItem=params;
      console.log(removeItem.get('cost'));
      this.get('shoppingCart').remove(removeItem);
    }
  }
});
