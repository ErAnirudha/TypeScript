//function
let y=40;
function sample(){ 
  //curly-brace(block-scope/range)
    //y=45;          //re-initialization possible
	let y=50;  //re-declaration possible with compare line 28 with line 32
	let y=55;  //Cannot redeclare block-scoped variable 'y'//it gives Error For block its re-declaration 
	console.log(y)
	
}
// sample(); without calling/invoke not gives Answer
sample();
