ko.components.register('newsletter-widget', {
	viewModel: function() {
		self = this;

		self.email = ko.observable('');
		self.showMessage = ko.observable(false);
		self.submitForm = function(){
			self.showMessage(true)
			return;
		}

	},
	template: `
		<h3>Subscripe to our Newsletter</h3>
		<form class="form" data-bind="submit: submitForm">
			<div class="form-group">
				<label for="email">Email:</label>
				<input type="text" data-bind="value: email" class="form-control" placeholder="name@domain.com"/>
			</div>
			<button class="btn btn-primary" type="submit">Submit</button>
		</form>
		<br />
		<p data-bind="visible: showMessage">Thanks for subscribing <br /> <strong data-bind="text: email"></strong></p>
	`
})

ko.applyBindings()