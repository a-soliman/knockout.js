function viewModel() {
	let self = this

	self.showMessage = ko.observable(true)
	self.bottonTitle = ko.observable('hide')
	self.toggleMessage = function() {
		if (self.showMessage() == true){
			self.showMessage(false)
			self.bottonTitle('show')
		}
		else {
			self.showMessage(true)
			self.bottonTitle('hide')
		}

	}
}

// let viewModel = {
// 	showMessage: ko.observable(true)
// }

// viewModel.toggleMessage = function() {
// 	viewModel.showMessage(false)
// }
ko.applyBindings(new viewModel)