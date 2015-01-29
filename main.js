$(document).on('ready', function() {

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
 
	for(var i=0; i<animals.length-1; i++) {
		console.log(animals[i]); 
	} //problem no. 1

console.log("==================="); 

	for(var i=0; i<animals.length; i+=2) {
		console.log(animals[i]); 
	} //problem no.2

console.log("==================="); 

for(var i=4; i>0; i--) {
	console.log(animals[i]);
}

console.log("==================="); 

for(var i=0; i<animals.length; i+=1) {
	if ( i === 0 || i === animals.length-1) {
		console.log(animals[i]); 
	} else {
		console.log(animals[i]);
		console.log(animals[i]);
	}
	
}

console.log("==================="); 

}); 
