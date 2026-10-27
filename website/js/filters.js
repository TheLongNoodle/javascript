const filterSelect = document.getElementById("filter-select");
const filterSearchInput = document.getElementById("filter-search-input");
const findButton = document.getElementById("find-button");
const resetButton = document.getElementById("reset-button");
const sortButton = document.getElementById("sort-button");
const reverseButton = document.getElementById("reverse-button");
const studentsList = document.getElementById("students-list");
const students = [
    {
        age: 16,
        name: "yossi",
        admin: true,
        grades: [20, 23, 50, 30],
        address: {
            city: "ashdod",
            houseNumber: 12,
        },
    },
    {
        age: 25,
        name: "yael",
        admin: false,
        grades: [50, 16, 100, 78],
        address: {
            city: "ashdod",
            houseNumber: 8,
        },
    },
    {
        age: 22,
        name: "idan",
        admin: false,
        grades: [100, 100, 100, 30],
        address: {
            city: "tel aviv",
            houseNumber: 40,
        },
    },
    {
        age: 29,
        name: "yarden king",
        admin: true,
        grades: [99, 99, 99, 99],
        address: {
            city: "kfar bialik",
            houseNumber: 1,
        },
    },
    {
        age: 34,
        name: "banu",
        admin: true,
        grades: [100, 100, 100, 100],
        address: {
            city: "ashdod",
            houseNumber: 16,
        },
    },
    {
        age: 57,
        name: "nabetjs",
        admin: false,
        grades: [3, 16, 0, 30],
        address: {
            city: "tel aviv",
            houseNumber: 12,
        },
    },
    {
        age: 15,
        name: "rongular",
        admin: true,
        grades: [92, 87, 69, 84],
        address: {
            city: "yafo",
            houseNumber: 12,
        },
    },
    {
        age: 10,
        name: "david",
        admin: false,
        grades: [20, 23, 50, 30],
        address: {
            city: "ashdod",
            houseNumber: 12,
        },
    },
    {
        age: 66,
        name: "liad",
        admin: false,
        grades: [92, 76, 77, 82],
        address: {
            city: "beit dagan",
            houseNumber: 112,
        },
    },
    {
        age: 34,
        name: "happy",
        admin: true,
        grades: [54, 23, 100, 30],
        address: {
            city: "beit dagan",
            houseNumber: 112,
        },
    },
];

let displayedStudents = students.slice();

function isNumber(input) {
    return /^-?\d+$/.test(input);
}

function isLettersOnly(input) {
    return /^[a-zA-Z]+$/.test(input);
}

function getAverage(numbers) {
    const sum = numbers.reduce(function (total, number) {
        return total + number;
    }, 0);
    return sum / numbers.length;
}

function filter(student, filterType, searchText) {
    switch (filterType) {
        case "age":
            if (isNumber(searchText)) {
                return student.age > Number(searchText);
            }
            return false;
        case "name":
            if (searchText.length > 2 && isLettersOnly(searchText)) {
                return matchesName(student.name, searchText);
            }
            return false;
        case "admin":
            if (searchText.toLowerCase() === "true" || searchText.toLowerCase() === "false") {
                return String(student.admin) === searchText.toLowerCase();
            }
            return false;
        case "grades":
            if (isNumber(searchText)) {
                return getAverage(student.grades) > Number(searchText);
            }
            return false;
        case "address":
            if (isNumber(searchText) || isLettersOnly(searchText)) {
                return matchesAddress(student.address, searchText);
            }
            return false;
        default:
            return false;
    }
}

function matchesName(text, searchText) {
    return text.toLowerCase().includes(searchText.toLowerCase());
}

function containsIgnoreCase(text, searchText) {
  return text.toLowerCase().includes(searchText.toLowerCase());
}


function matchesAddress(address, searchText) {
    if (isNumber(searchText)) {
        return String(address.houseNumber).includes(searchText);
    }
    return containsIgnoreCase(address.city, searchText);
}

function renderStudents() {
    studentsList.innerHTML = "";

    if (displayedStudents.length === 0) {
        studentsList.innerHTML = `<li class="student-card"><p class="student-info">No cards match this filter.</p></li>`;
        return;
    }

    studentsList.innerHTML = displayedStudents.map((student) => `<li class="student-card">
    <p class="student-info">Name: ${student.name}<br /></p>
    <p class="student-info">Age: ${student.age}<br /></p>
    <p class="student-info">Admin: ${student.admin}<br /></p>
    <p class="student-info">Grades: ${student.grades.join(", ")} (average ${getAverage(student.grades).toFixed(1)})<br /></p>
    <p class="student-info">Address: ${student.address.houseNumber}, ${student.address.city}<br /></p>
    </li>`).join("");
}

function findStudents() {
    const filterType = filterSelect.value;
    const searchText = filterSearchInput.value.trim();

    displayedStudents = students.filter(student => filter(student, filterType, searchText));
    renderStudents();
}

function resetFilters() {
    filterSelect.selectedIndex = 0;
    filterSearchInput.value = "";
    displayedStudents = students.slice();
    renderStudents();
}

function sortStudentsByName() {
    displayedStudents.sort(function (firstStudent, secondStudent) {
        return firstStudent.name.localeCompare(secondStudent.name);
    });
    renderStudents();
}

function reverseStudents() {
    displayedStudents.reverse();
    renderStudents();
}

findButton.addEventListener("click", findStudents);
resetButton.addEventListener("click", resetFilters);
sortButton.addEventListener("click", sortStudentsByName);
reverseButton.addEventListener("click", reverseStudents);
renderStudents();
