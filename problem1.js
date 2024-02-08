function checkName(name) {
   
    const lastChar = name[name.length - 1].toLowerCase();
    const invalidLastChars = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    if (invalidLastChars.includes(lastChar)) {
        return "Bad Name";
    }

  
    const invalidChars = ['a', 'y', 'i', 'e', 'o', 'u'];

    for (const char of name.toLowerCase()) {
        if (invalidChars.includes(char)) {
            return "Bad Name";
        }
    }
    return "Good Name";
}


console.log(checkName("kamal"));
console.log(checkName("Jafor")); 
console.log(checkName("Tonoy")); 
console.log(checkName("Shanto")); 