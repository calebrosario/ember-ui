import DS from 'ember-data';
import Object from '../models/object';

export default Object.extend({
  path       : DS.attr('string'),
  resource   : DS.attr('boolean'),
  model      : DS.belongsTo('model'),
  controller : DS.belongsTo('controller'),
  parentRoute: DS.belongsTo('parentRoute'),
  childRoute : DS.belongsTo('childRoute')
});
