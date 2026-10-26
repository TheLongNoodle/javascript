const nameInput = document.getElementById("name-input");
const nameRegex = /^[A-Za-z\'\s\.\,]{3,}/;
const emailInput = document.getElementById("email-input");
const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
const submitBtn = document.getElementById("create-user");
const titles = ["Mr. ", "Mrs. ", "Miss ", "Ms. ", "Mx. ", "Sir ", "Dr. ", "Lady ", "Lord "];
const titleRegex = /^(mr|ms|mrs|miss|dr|prof)\.?\s+/i;
const list = document.getElementById("cards-list");
let cards = [];

function addCard() {
    let name = nameInput.value;
    let email = emailInput.value;

    name = String(name).replace(titleRegex, "");
    const nameVal = nameRegex.test(name);
    const emailVal = emailRegex.test(email);

    if (!nameVal) alert("Invalid name");

    if (!emailVal) alert("Invalid email address");

    if (nameVal && emailVal) {
        cards.push([name, email]);
        nameInput.value = "";
        emailInput.value = "";
        updateList();
    }
}

function removeCard(event) {
    if (event.target.classList.contains("delete-user")) {
        const index = event.target.dataset.index;
        cards.splice(index, 1);
        updateList();
    }
}

function updateList() {
    list.innerHTML = cards
        .map(
            (item, index) => `<li class="card">
    <p>Name: ${item[0]}<br /></p>
    <p>Email: ${item[1]}<br /></p>
    <button id="delete-user" class="delete-user" type="button" data-index="${index}">DELETE</button>
    </li>`
        )
        .join("");
}

submitBtn.addEventListener("click", addCard);
list.addEventListener("click", removeCard);
