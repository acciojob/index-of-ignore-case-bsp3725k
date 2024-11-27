function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let j=0;
	const lowerS1 = s1.toLowerCase();
    const lowerS2 = s2.toLowerCase();
    for (let i = 0; i <= lowerS1.length - lowerS2.length; i++) {
         if (lowerS1.substring(i, i + lowerS2.length) === lowerS2) {
      return i; // Return the starting index
    }
  }
	return -1;
}
// Please do not change the code below
//const s1 = prompt("Enter s1:");
//const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
