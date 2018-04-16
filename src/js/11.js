function viewModel(){
	self = this;

	self.name = ko.observable()
	self.submitMessage = ko.observable('Not submited')
	self.fireSubmit = function() {
		self.submitMessage('form submited');
	}

	self.valid = function(){
		if ( self.name() == '' ) {
			return false;
		}
		return true;
	}

}

ko.applyBindings(new viewModel)