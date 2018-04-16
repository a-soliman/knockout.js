function viewModel() {
	self = this

	self.empoloyees = ko.observableArray([
		{
			id: 'e100',
			name: 'Tom Jackson'
		},
		{
			id: 'e101',
			name: 'Jane Hopson'
		},
		{
			id: null,
			name: 'Mike Rechardson'
		},
	]);

	self.removeEmployee = function() {
		let index = self.empoloyees.indexOf(this);
		self.empoloyees.splice(index, 1)
	}
}

ko.applyBindings(new viewModel)