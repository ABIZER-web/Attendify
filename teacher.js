// Hide loading screen after 3 seconds
setTimeout(() => {
    document.getElementById("loading").style.display = "none";
}, 3000);

function addTeacher() {
    let teacherName = prompt("Enter Teacher's Name:");
    let subject = prompt("Enter Subject:");
    if (teacherName && subject) {
        let table = document.getElementById("teacherTable").getElementsByTagName('tbody')[0];
        let newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${teacherName}</td>
            <td>${subject}</td>
            <td><button class="btn btn-attendance" onclick="openStudentDashboard()">Click Here</button></td>
            <td><button class="btn btn-remove" onclick="removeTeacher(this)">Remove</button></td>
        `;
    }
}

function removeTeacher(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}


