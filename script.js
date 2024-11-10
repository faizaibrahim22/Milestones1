var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var lastname = document.getElementById('lastname').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var skills = document.getElementById('skills').value;
    var experiences = document.getElementById('experiences').value;
    var education = document.getElementById('education').value;
    var resumeHTMl = "\n    <h2><b>Resume</b></h2>\n    <h2>Presonal Information</h2>\n    <p>Name:".concat(name, "</p>\n    <p>lastname:").concat(lastname, "</p>\n    <p>phone:").concat(phone, "</p>\n    <p>Email:").concat(email, "</p>\n    <p>skills:").concat(skills, "</p>\n    <p>experiences:").concat(experiences, "</p>\n    <p>education:").concat(education, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTMl;
    }
    else {
        console.error("error");
    }
});
