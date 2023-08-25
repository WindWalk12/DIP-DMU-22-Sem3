let randomString = "(3+{5{99{*}}[23[{67}67]]})";


const isBalanced = (arr) => {
    let parenthesesStack = [];

    for (const char of Array.from(arr)) {
        if(char === '(') {
            parenthesesStack.push(char);
        } else if (char === ')' && parenthesesStack[parenthesesStack.length - 1] === '(') {
            parenthesesStack.pop();
        } else if (char === '{') {
            parenthesesStack.push(char);
        } else if (char === '}' && parenthesesStack[parenthesesStack.length - 1] === '{') {
            parenthesesStack.pop();
        } else if (char === '[') {
            parenthesesStack.push(char);
        } else if (char === ']' && parenthesesStack[parenthesesStack.length - 1] === '[') {
            parenthesesStack.pop();
        }
    }
    console.log(parenthesesStack);
    return parenthesesStack.length === 0;
}

console.log(`Is the string balanced: ${isBalanced(randomString)}`);