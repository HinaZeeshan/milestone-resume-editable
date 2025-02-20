var _a;
//listing element
(_a = document.getElementById('resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //giving references to form icons
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    //provide all foam icons
    if (nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        //create resume output
        var resumeoutput = "\n    <h2>Resume</h2>\n    \n    <p><strong>Name :</strong> <span id=\"edit-name\" class=\"editable\">".concat(name_1, "</span></p>\n    <p><strong>Email :</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, "</span></p>\n    <p><strong>Phone :</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, "</span></p>\n    <p><strong>Address :</strong> <span id=\"edit-address\" class=\"editable\"> ").concat(address, "</span></p>\n     \n    \n    <h3>Education</h3>\n    <p <span id=\"edit-education\" class=\"editable\">>").concat(education, "</p>\n\n     <h3>Experience</h3>\n    <p <span id=\"edit-experience\" class=\"editable\">>").concat(experience, "</p>\n\n     <h3>Skills</h3>\n    <p <span id=\"edit-skills\" class=\"editable\">>").concat(skills, "</p>\n\n    ");
        var resumeoutputElement = document.getElementById('resumeoutput');
        if (resumeoutputElement) {
            resumeoutputElement.innerHTML = resumeoutput;
            makeEditable();
        }
    }
    else {
        console.error('one or more are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentvalue = currentElement.textContent || "";
            //replace contant
            if (currentElement.tagName === "p" || currentElement.tagName === "SPAN") {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentvalue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
