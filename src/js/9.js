function viewModel(){
	self = this;
	self.name = ko.observable('John')

}

ko.applyBindings(new viewModel)