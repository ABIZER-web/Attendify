function openPage(page) {
    let content = document.getElementById("content");
    if (page === 'students') {
        content.innerHTML = `<h2 class='text-2xl font-semibold'>Student List</h2><p class='text-gray-600'>Here you can manage student details.</p>`;
    } else if (page === 'events') {
        content.innerHTML = `<h2 class='text-2xl font-semibold'>Upcoming Events</h2><p class='text-gray-600'>Check out the latest college events!</p>`;
    }
}

// Function to navigate to Teacher Dashboard
function openTeacherDashboard() {
    window.location.href = 'teacher.html';
}
