const algorithm = document.getElementById("algorithm");
const algoInput = document.getElementById("number-input");

function algo() {
    if (isInput()) {
        let input = algoInput.value;
        switch (algorithm.value) {
            case "Palindrome":
                document.getElementById("output").textContent = input == input.split("").reverse().join("");
                break;
            case "Prime":
                document.getElementById("output").textContent = (input > 1) && Array(Math.floor(Math.sqrt(input)) - 1).fill(0).map((_, i) => i + 2).every(i => input % i !== 0);
                break;
            case "Password":document.getElementById("output").textContent = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(input);

                break;
            case "Unique": document.getElementById("output").textContent = !/(?=^[A-Za-z0-9]+$)(.)+.*\1.*/.test(input)
                break;
            default:
                document.getElementById("output").textContent = "Select algorithm";
                break;
        }
    }
}

function isInput() {
    if (algoInput.value === "") {
        document.getElementById("output").textContent = "Enter input";
        return false;
    }
    return true;
}

function prime() {}

function password() {}

addEventListener("input", algo);
