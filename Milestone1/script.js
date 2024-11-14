var Button = document.getElementById("toggle-skills");
var skills = document.getElementById('skills');
Button.addEventListener('click', function () {
    if (skills.style.display === "NONE") {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
