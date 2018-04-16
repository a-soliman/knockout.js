let viewModel = {

	categories: ko.observableArray([
			{
				name: 'Technology',
				subcategories: [
					'Progamming', 'Hardware', 'Web Development'
				]
			},
			{
				name: 'Business',
				subcategories: [
					'Finance', 'Marketing', 'Stocks'
				]
			},
			{
				name: 'Food',
				subcategories: [
					'Restaurants', 'Catering', 'Market'
				]
			}
		])
}

//Apply the bindings
ko.applyBindings(viewModel)