export function randomEmail(){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let emailPrefix = "";

    for (let i = 0; i <= 10; i++){
        let index = Math.floor(Math.random() * alphabet.length);
        emailPrefix += alphabet.charAt(index);
    }
    let generatedEmail = emailPrefix + "@example.com";
    return generatedEmail;
}