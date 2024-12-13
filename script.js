var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var Certifications = document.getElementById('Certifications').value;
    var AwardsAchievements = document.getElementById('AwardsAchievements').value;
    var Language = document.getElementById('Languages').value;
    var resumeHtml = "\n     <h2> <b> Resume </b> </h2>\n     <h3>Personal Information</h3>\n     <div style=\"text-align: center; margin-bottom: 20px;\">\n     <p><u><b>Name:</b></u> ".concat(name, "</p>\n     <p><u><b>Email:</b></u> ").concat(email, "</p>\n     <p><u><b>Phone:</b></u> ").concat(phone, "</p>\n     </div>\n      <div>\n     <h3><u>Education</u></h3>\n     <p>").concat(education, "</p>\n\n     <h3><u>Experience</u></h3>\n     <p>").concat(experience, "</p>\n\n     <h3><u>Skills</u></h3>\n     <p>").concat(skills, "</p>\n\n     <h3><u>Certifications</u></h3>\n     <p>").concat(Certifications, "</p>\n\n     <h3><u>AwardsAchievements</u></h3>\n     <p>").concat(AwardsAchievements, "</p>\n\n     <h3><u>Languages</u></h3>\n     <p>").concat(Language, "</p>\n     </div>\n   ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
