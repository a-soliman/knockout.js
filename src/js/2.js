let userArray1 = ko.observableArray(['Edward', 'Ahmed', 'Mike']);

console.log(`There are ${userArray1().length} Users in the array`)
console.log(`User 1: ${userArray1()[0]}`)
userArray1.push('John')
console.log(`User 4: ${userArray1()[3]}`)

let userArray2 = ko.observableArray([
		{
			firstName: 'Matt',
			lastName: 'Michaels'
		},
		{
			firstName: 'John',
			lastName: 'Adams'
		}
	])

console.log(userArray2()[0].lastName)

ko.applyBindings()