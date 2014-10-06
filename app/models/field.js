import DS from 'ember-data';

export default DS.Model.extend({
  parentModel: DS.belongsTo('model'),
  name: DS.attr('string'),
  type: DS.attr('string'),
  relatedTo: DS.attr('string', { defaultValue: null }),
  hasRelation: function() {
    var currentType = this.get('type');
    return (currentType === 'hasMany' || currentType === 'belongsTo');
  }.property('type')
});
