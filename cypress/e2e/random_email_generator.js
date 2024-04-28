export function randomEmail() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let emailPrefix = "";

    for (let i = 0; i <= 10; i++) {
        let index = Math.floor(Math.random() * alphabet.length);
        emailPrefix += alphabet.charAt(index);
    }
    let generatedEmail = emailPrefix + "@example.com";
    return generatedEmail;
}

export function randomPassword() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let password = "";

    for (let i = 0; i <= 7; i++) {
        let index = Math.floor(Math.random() * alphabet.length);
        password += alphabet.charAt(index);
    }

    password += "A1";
    return password;
}