// Hide loading screen after 3 seconds
setTimeout(() => {
    document.getElementById("loading").style.display = "none";
}, 3000);

function addStudent() {
    let studentName = prompt("Enter Student's Name:");
    if (studentName) {
        let table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
        let newRow = table.insertRow();
        newRow.innerHTML = `
            <td>${studentName}</td>
            <td>
                <button class="btn btn-present" onclick="markAttendance(this, 'Present')">P</button>
                <button class="btn btn-absent" onclick="markAttendance(this, 'Absent')">A</button>
            </td>
            <td class="status">Not Marked</td>
            <td><button class="btn btn-remove" onclick="removeStudent(this)">Remove</button></td>
        `;
    }
}

function removeStudent(button) {
    let row = button.parentElement.parentElement;
    row.remove();
}

function markAttendance(button, status) {
    let row = button.parentElement.parentElement;
    let statusCell = row.querySelector(".status");
    statusCell.textContent = status;
}
