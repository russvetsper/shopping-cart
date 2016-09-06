import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  totalPrice: 0,
  add(item) {
    this.get('items').pushObject(item);
    var currentPrice=this.get('totalPrice');
    this.set('totalPrice',currentPrice+item.get('cost'));
    // this.set('totalPrice',2);
    console.log(currentPrice);
    console.log(item.get('cost'));

  }
});
