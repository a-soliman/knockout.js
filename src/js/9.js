function viewModel(){
	self = this;
	self.name = ko.observable('John');
	self.checkIt = ko.observable(false)
	self.toggleBox = function(){
		if (self.checkIt() == true){
			self.checkIt(false)
		}
		else {
			self.checkIt(true)
		}
	}

}

ko.applyBindings(new viewModel)