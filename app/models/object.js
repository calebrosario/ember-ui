import DS from 'ember-data';

export default DS.Model.extend({
  name   : DS.attr('string'),
  fields : DS.hasMany('field', {async: true}),
  extends: DS.belongsTo('model')
});
