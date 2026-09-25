// Get all checkbox elements and status display area
const checkboxes = document.querySelectorAll('.kit-item');
const statusMessage = document.getElementById('status-message');

// Attach check event listener to every checklist item
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateChecklistStatus);
});

function updateChecklistStatus() {
    let checkedCount = 0;

    // Count how many boxes are currently checked
    checkboxes.forEach(item => {
        if (item.checked) {
            checkedCount++;
        }
    });

    // Dynamically change layout alerts depending on conditions
    if (checkedCount === checkboxes.length) {
        statusMessage.textContent = "Kit status: Fully Equipped! 🛡️ Ready for emergencies.";
        statusMessage.style.backgroundColor = "#dcfce7"; // Smooth green color
        statusMessage.style.color = "#15803d";
    } else if (checkedCount > 0) {
        statusMessage.textContent = `Kit status: Packing In Progress (${checkedCount}/${checkboxes.length} packed)...`;
        statusMessage.style.backgroundColor = "#fef3c7"; // Warm orange/yellow
        statusMessage.style.color = "#d97706";
    } else {
        statusMessage.textContent = "Kit status: Incomplete ⚠️ Pack items immediately.";
        statusMessage.style.backgroundColor = "#fee2e2"; // Soft warning red
        statusMessage.style.color = "#b91c1c";
    }
}
