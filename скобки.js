function checkSyntax(string) {
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '[',
        '>': '<'
    };

    const openBrackets = new Set(Object.values(brackets));

    const stack = [];

    for (let char of string) {
        if (openBrackets.has(char)) {
            stack.push(char);
        }
        else if (brackets[char]) {
            if (stack.length === 0 || stack[stack.length - 1] !== brackets[char]) {
                return 1;
            }
            stack.pop();
        }
    }
    return 0;
}
