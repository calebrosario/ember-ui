import DS from 'ember-data';

export default DS.Model.extend({
  before: DS.attr('string'),
  after: DS.attr('string')
});
