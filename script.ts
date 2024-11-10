const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const lastname = (document.getElementById('lastname') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const experiences = (document.getElementById('experiences') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;

    if (!name || !lastname || !phone || !email || !skills || !experiences || !education) {
        alert("Please fill in all fields.");
        return;
    }

    const resumeHTML = `
        <h2><b>Resume</b></h2>
        <h2>Personal Information</h2>
        <p>Name: ${name}</p>
        <p>Last Name: ${lastname}</p>
        <p>Phone: ${phone}</p>
        <p>Email: ${email}</p>
        <p>Skills: ${skills}</p>
        <p>Experiences: ${experiences}</p>
        <p>Education: ${education}</p>
    `;

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error("Error: Resume display element not found");
    }
});