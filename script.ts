//listing element
document.getElementById('resume')?.addEventListener('submit',function(event){
    event.preventDefault();


    

    //giving references to form icons

    
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    

   
    //provide all foam icons
    if (nameElement &&  emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement ){

        const name = nameElement.value ;
        const email = emailElement.value ;
        const phone = phoneElement.value ;
        const address = addressElement.value ;
        const education = educationElement.value ;
        const experience = experienceElement.value ;
        const skills = skillsElement.value ;
    


        

           //create resume output
    const resumeoutput =`
    <h2>Resume</h2>
    
    <p><strong>Name :</strong> <span id="edit-name" class="editable">${name}</span></p>
    <p><strong>Email :</strong> <span id="edit-email" class="editable"> ${email}</span></p>
    <p><strong>Phone :</strong> <span id="edit-phone" class="editable"> ${phone}</span></p>
    <p><strong>Address :</strong> <span id="edit-address" class="editable"> ${address}</span></p>
     
    
    <h3>Education</h3>
    <p <span id="edit-education" class="editable">>${education}</p>

     <h3>Experience</h3>
    <p <span id="edit-experience" class="editable">>${experience}</p>

     <h3>Skills</h3>
    <p <span id="edit-skills" class="editable">>${skills}</p>

    `;
    const resumeoutputElement = document.getElementById('resumeoutput')
    if(resumeoutputElement){
        resumeoutputElement.innerHTML = resumeoutput
     makeEditable();
    }
}else{
    console.error('one or more are missing')
}
});

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element =>{
        element.addEventListener('click' , function(){
            const currentElement = element as HTMLElement
            const currentvalue = currentElement.textContent || "" ;

            //replace contant
            if(currentElement.tagName === "p" || currentElement.tagName === "SPAN"){
                const input = document.createElement('input')
                input.type = 'text' 
                input.value = currentvalue
                input.classList.add('editing-input')


                input.addEventListener('blur' , function(){
                    currentElement.textContent = input.value
                    currentElement.style.display = 'inline'
                    input.remove()
                })


                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input , currentElement)
                input.focus()

            }
        })
    })
}