function viewModel() {
	const self = this;

	self.users = ko.observableArray([
		{
			name: 'Brad'
		},
		{
			name: 'Jack'
		},
		{
			name: 'Mike'
		}
	]);

	self.addUser = function() {
		let nameInput = document.getElementById('newUser')
		let name = nameInput.value.trim()

		if (name.length > 0) {
			self.users.push({ name })
		}

		nameInput.value = ''
	};

	self.removeUser = function( ){
		self.users.remove(this)
	}
}

ko.applyBindings(new viewModel);