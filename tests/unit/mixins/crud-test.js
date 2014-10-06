import Ember from 'ember';
import CrudMixin from 'ember-ui/mixins/crud';

module('CrudMixin');

// Replace this with your real tests.
test('it works', function() {
  var CrudObject = Ember.Object.extend(CrudMixin);
  var subject = CrudObject.create();
  ok(subject);
});
