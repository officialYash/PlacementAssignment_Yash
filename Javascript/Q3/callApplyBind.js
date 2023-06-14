let name = {
	firstName: 'Yash',
	lasttName: 'Arora',
};
let name2 = {
	firstName: 'Vaibhav',
	lasttName: 'Verma',
};

let getFulName = function (hometown, state) {
	console.log(
		this.firstName + ' ' + this.lasttName + ' from ' + hometown + ', ' + state,
	);
};

// Function borrowing - Function borrowing is a phenomenon in javascript where we can bowwor a function and call it using .call and  pass the refenrence in first parameter  where 'this' will have to point.
// it also takes multiple parameter if callng functions takes parameters
getFulName.call(name, 'Jaipur', 'Rajasthan');
getFulName.call(name2, 'Jaipur', 'Rajasthan');

// .apply method is same as the .call method but is accept second aargument as array of arguments

getFulName.apply(name2, ['Jaipur', 'Rajasthan']);

// .bind method binds the given function and return a function that we can call later, And in .bind, we can not direcly call the methos like .call .apply rather we have to store it in a variable that we can call later

let fullname = getFulName.bind(name, 'Jaipur', 'Rajasthan');
console.log(fullname);
fullname();
