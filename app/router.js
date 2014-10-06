import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('projects', function() {
		this.resource('project', function() {
			this.route('components');
			this.route('controllers');
			this.route('helpers');
			this.route('initializers');
			this.route('mixins');
			this.route('models');
			this.route('routes');
			this.route('serializers');
			this.route('services');
			this.route('templates');
			this.route('transforms');
			this.route('utils');
			this.route('views');
		});
	});
});

export default Router;
