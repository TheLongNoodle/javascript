const algorithm = document.getElementById("algorithm");
const algoInput = document.getElementById("number-input");
const algoOut = document.getElementById("output");
const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");
const encryptTxt = document.getElementById("text-input");
const encryptNum = document.getElementById("cesar-input");

// Normally there would be separate functions, but come on - this is so elegant :)
function algo() {
    if (isInput()) {
        let input = algoInput.value;
        switch (algorithm.value) {
            case "Palindrome":
                algoOut.textContent = input == input.split("").reverse().join("");
                break;
            case "Prime":
                if (!/^-?\d+$/.test(input)) {
                    algoOut.textContent = "Not an integer";
                } else {
                    algoOut.textContent =
                        input > 1 &&
                        Array(Math.floor(Math.sqrt(input)) - 1)
                            .fill(0)
                            .map((_, i) => i + 2)
                            .every((i) => input % i !== 0);
                }
                break;
            case "Password":
                algoOut.textContent = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(input);

                break;
            case "Unique":
                algoOut.textContent = !/(?=^[A-Za-z0-9]+$)(.)+.*\1.*/.test(input);
                break;
            default:
                algoOut.textContent = "Select algorithm";
                break;
        }
    }
}

function isInput() {
    if (algoInput.value === "") {
        algoOut.textContent = "Enter input";
        return false;
    }
    return true;
}

function encrypt(dir) {
    let out = "";
    if (/^-?\d+$/.test(encryptNum.value)) {
        out = encryptTxt.value.split("").map((char) => {
            const code = char.charCodeAt(0);
            if (code >= 97 && code <= 122) {
                return String.fromCharCode(((code - 97 + encryptNum.value * dir + 26) % 26) + 97);
            }
            if (code >= 65 && code <= 90) {
                return String.fromCharCode(((code - 65 + encryptNum.value * dir + 26) % 26) + 65);
            } else {
                return String.fromCharCode(code);
            }
        }).join("");
    }
    encryptTxt.value = out;
}

algorithm.addEventListener("input", algo);
algoInput.addEventListener("input", algo);
encryptBtn.addEventListener("click", () => {
    encrypt(1);
});
decryptBtn.addEventListener("click", () => {
    encrypt(-1);
});
