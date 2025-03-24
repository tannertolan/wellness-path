document.addEventListener("DOMContentLoaded", function () {
    console.log("WellnessPath Loaded");
});

function logWater() {
    const val = document.getElementById("water").value;
    localStorage.setItem("water", val);
    alert(`Logged ${val} glasses of water`);
}

function logExercise() {
    const val = document.getElementById("exercise").value;
    localStorage.setItem("exercise", val);
    alert(`Logged exercise: ${val}`);
}

function logFood() {
    const val = document.getElementById("food").value;
    localStorage.setItem("food", val);
    alert(`Logged food: ${val}`);
}

function logSleep() {
    const val = document.getElementById("sleep").value;
    localStorage.setItem("sleep", val);
    alert(`Logged ${val} hours of sleep`);
}

function logMindfulness() {
    const val = document.getElementById("mindfulness").value;
    localStorage.setItem("mindfulness", val);
    alert(`Logged mindfulness: ${val}`);
}

// Display logged values on page load (optional future enhancement)
document.addEventListener("DOMContentLoaded", function () {
    const sections = ["water", "exercise", "food", "sleep", "mindfulness"];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && localStorage.getItem(id)) {
            el.placeholder += ` (Last: ${localStorage.getItem(id)})`;
        }
    });
});