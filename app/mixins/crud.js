import Constants from 'ember-ui/utils/constants';
import getModelInfo from 'ember-ui/utils/get-model-info';
import Ember from 'ember';

export default Ember.ArrayController.extend({
  adapter: Constants.ADAPTER_OPTIONS[0],
  adapterOptions: Constants.ADAPTER_OPTIONS,
  init: function () {
  	var path, pathTitle, formatUpper, Observer, newAction;
  	
  	this._super();

  	path = this.container.lookup('controller:application').get('currentPath');
  	path = path.substring(path.lastIndexOf('.'));
  	pathTitle = path + 'Format';
  	this.set('format', pathTitle);
  	formatUpper = formatUpper;

  	// Variables
  	this.set(this.get('format'), Constants[(formatUpper + '_OPTIONS')][0]);
  	this.set(formatUpper, Constants[(formatUpper + '_OPTIONS')]);
  	this.set( ('creatingNew' + path.capitalize()), false);
  	this.set( (path + 'Objects'), []);
  	this.set('isGlobalFormat', Ember.computed.equal(path + 'Format', Constants[(formatUpper + '_OPTIONS')][0] ));

	// Observers
	Observer = function() {
	    var Objects = this.get(path + 'Objects');
	    this.set('jsonObjects', Objects);
	}.observes(path + 'Objects');

	this.set( (path + 'Observer'), Observer);


	// Actions
	// 
	// Add a new Object
    newAction = function() {
      this.set('creatingNew' + path.capitalize(), true);
    };

    this.set('new' + path.capitalize(), newAction);

  },
  jsonObjects: [],

	// Observers
	changeObserver: function() {
		Ember.run.once(this, function() {
			getModelInfo(this);
		});
	}.observes('adapter'),

  // Actions
  actions: {
    // Add a new model
    newModel: function() {
      this.set('creatingNewModel', true);
    },
    // Add a new field
    newField: function(model) {
      var currentFields = model.get('fields'),
        _this = this;

      currentFields.then(function (data) {
        var newField = _this.store.createRecord('field', {
          name: '',
          parentModel: model
        });

        data.addObject(newField);
      });
    },
    // Remove a model
    removeModel: function(model) {
      var fields = model.get('fields'),
          _this = this;

      // iterate through fields and delete those records
      fields.forEach(function(field) {
        field.deleteRecord();
      });

      model.deleteRecord();

      // trigger an update of the json,etc.
      // this does a mock ajax call or something, so it needs a timeout to work correctly
      Ember.run.later(function() {
        getModelInfo(_this);
      }, 100);
    }
  }
});
