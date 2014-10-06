import Ember from 'ember';

export default Ember.Route.extend({
	beforeModel: function() {
		this._super();
		this.transitionTo('project.models');
	}
});
