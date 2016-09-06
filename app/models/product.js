import DS from 'ember-data';

export default DS.Model.extend({
  cost: DS.attr(),
  picture: DS.attr(),
  title: DS.attr(),
  description: DS.attr()
});
