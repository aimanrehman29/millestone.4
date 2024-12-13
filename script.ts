
const form = document.getElementById('resume-form') as HTMLFormElement;
 const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;


 form.addEventListener('submit', (event: Event) => {
   event.preventDefault();

   
   const name = (document.getElementById('name') as HTMLInputElement).value
   const email = (document.getElementById('email') as HTMLInputElement).value
   const phone = (document.getElementById('phone') as HTMLInputElement).value
   const education = (document.getElementById('education') as HTMLInputElement).value
   const experience = (document.getElementById('experience') as HTMLInputElement).value
   const skills = (document.getElementById('skills') as HTMLInputElement).value
   const Certifications = (document.getElementById('Certifications') as HTMLInputElement).value
   const AwardsAchievements  = (document.getElementById('AwardsAchievements') as HTMLInputElement).value
   const Language= (document.getElementById('Languages') as HTMLInputElement).value



   
   const resumeHtml = `
     <h2> <b> Resume </b> </h2>
     <h3>Personal Information</h3>
     <div style="text-align: center; margin-bottom: 20px;">
     <p><u><b>Name:</b></u> ${name}</p>
     <p><u><b>Email:</b></u> ${email}</p>
     <p><u><b>Phone:</b></u> ${phone}</p>
     </div>
      <div>
     <h3><u>Education</u></h3>
     <p>${education}</p>

     <h3><u>Experience</u></h3>
     <p>${experience}</p>

     <h3><u>Skills</u></h3>
     <p>${skills}</p>

     <h3><u>Certifications</u></h3>
     <p>${Certifications}</p>

     <h3><u>AwardsAchievements</u></h3>
     <p>${AwardsAchievements}</p>

     <h3><u>Languages</u></h3>
     <p>${Language}</p>
     </div>
   `;
   

   
   if(resumeDisplayElement){
     resumeDisplayElement.innerHTML = resumeHtml;
   }else {
     console.error('The resume display element is missing.');
   }
 });
