function firstNonRepeatedChar(str) {
 // Write your code here
	if (!str) {
		return null;
	}
}
const charCount = new Array(26).fill(0);
for (let index = 0; index < str.length; index++) {
	const char = str[i];
	charCount[char.charCodeAt(0)-'a'.charCodeAt(0)]++;
	
}
for (let index = 0; index < str.length; index++) {
		const char = str[i];
	    if (charCount[char.charCodeAt(0)-'a'.charCodeAt(0)]===1) {
			return char;
	    	
	    }
}
//const input = prompt("Enter a string");
//alert(firstNonRepeatedChar(input)); 
