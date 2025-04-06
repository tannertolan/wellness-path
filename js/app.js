document.addEventListener("DOMContentLoaded", function () {
    console.log("WellnessPath Loaded");

    const categories = ["water", "exercise", "food", "sleep", "mindfulness"];
    categories.forEach(id => {
        const input = document.getElementById(id);
        const display = document.getElementById(`${id}-display`);
        const stored = localStorage.getItem(id);
        if (input && stored) {
            input.placeholder += ` (Last: ${stored})`;
        }
        if (display && stored) {
            display.textContent = `Last logged: ${stored}`;
        }
    });
});

function logValue(id) {
    const input = document.getElementById(id);
    const display = document.getElementById(`${id}-display`);
    const value = input.value;
    if (value) {
        localStorage.setItem(id, value);
        if (display) display.textContent = `Last logged: ${value}`;
        showToast(`${capitalize(id)} logged!`);
        input.value = "";
    }
}

function clearValue(id) {
    localStorage.removeItem(id);
    const display = document.getElementById(`${id}-display`);
    if (display) display.textContent = "Log cleared.";
    showToast(`${capitalize(id)} log cleared.`);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 100);
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 500);
    }, 2000);
}
