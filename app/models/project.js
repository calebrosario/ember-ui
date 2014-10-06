import DS from 'ember-data';

export default DS.Model.extend({
  models      : DS.hasMany('model'),
  controllers : DS.hasMany('controller'),
  routes      : DS.hasMany('route'),
  templates   : DS.hasMany('template'),
  helpers     : DS.hasMany('helper'),
  views       : DS.hasMany('view'),
  components  : DS.hasMany('component'),
  initializers: DS.hasMany('initializer'),
  mixins      : DS.hasMany('mixin'),
  serializers : DS.hasMany('serializer'),
  services    : DS.hasMany('service'),
  transforms  : DS.hasMany('transform'),
  utils       : DS.hasMany('util')
});
