type userInputSanitedString = string;

function sanitizeInput(str: string) : userInputSanitedString{
 return sanitize(str);
}

let userinput = sanitizeInput(getInput());
userinput = "new input"
