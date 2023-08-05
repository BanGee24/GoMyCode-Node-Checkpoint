// Q4. Password-Generator

const generatePassword = require("generate-password");

function generateRandomPassword() {
    const password = generatePassword.generate({
        length: 12,
        numbers: true,
        symbols: true,
        uppercase: true,
        excludeSimilarCharacters: true,
    });

    console.log("Generate Password: ", password)
}
generateRandomPassword()