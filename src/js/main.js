const myViewModel = {}
myViewModel.firstname  	= ko.observable('John');
myViewModel.lastname 	= ko.observable('Doe')

ko.applyBindings(myViewModel)


function change() {
	myViewModel.firstname('George');
	myViewModel.lastname('Williams')
}