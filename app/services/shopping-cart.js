import Ember from 'ember';

export default Ember.Service.extend({
  items: ["book"],

  add(item) {
    this.get('items').pushObject(item);
  }
});
