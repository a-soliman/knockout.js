let viewModel = {
	url: ko.observable('http://google.com'),
	details: ko.observable('Abouttttt'),
	target: ko.observable('_blank')
}

ko.applyBindings(viewModel)