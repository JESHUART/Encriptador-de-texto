function encryptText() {
    let inputText = document.getElementById("inputText").value;
    let encryptedText = caesarCipher(inputText, 3); // Usando cifrado César con un desplazamiento de 3
    document.getElementById("outputText").value = encryptedText;
}

function decryptText() {
    let encryptedText = document.getElementById("outputText").value;
    let decryptedText = caesarCipher(encryptedText, -3); // Desplazamiento inverso para desencriptar
    document.getElementById("outputText").value = decryptedText;
}

function caesarCipher(str, shift) {
    return str.replace(/[a-z]/gi, function(c) {
        let code = c.charCodeAt(0);
        let base = (c >= 'a') ? 97 : 65;
        return String.fromCharCode(((code - base + shift) % 26) + base);
    });
}
