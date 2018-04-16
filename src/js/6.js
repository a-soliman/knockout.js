let viewModel = {
	htmlString: ko.observable(),
	amount: ko.observable(9)
}

viewModel.htmlString('<b>Ahmed</b> is modifing this <i>KnockOut</i> thing.');
viewModel.amount(5)
ko.applyBindings(viewModel)