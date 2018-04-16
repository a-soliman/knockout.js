const myViewModel = {}
myViewModel.firstname  	= ko.observable('John');
myViewModel.lastname 	= ko.observable('Doe')

ko.applyBindings(myViewModel)


function change() {
	myViewModel.firstname('George');
	myViewModel.lastname('Williams')
}

myViewModel.firstname.subscribe( (newValue) => {
	alert(`The user's first name is now ${newValue}`)
})

myViewModel.firstname.subscribe( (oldValue) => {
	alert(`The user's previous first name was ${oldValue}`)
}, null, "beforeChange")