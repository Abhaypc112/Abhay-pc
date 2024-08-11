function sendEmail(){
    const data={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    }
    const serviceID="service_npqjwkg";
    const templateID="template_6s03lrr"
    emailjs.send(serviceID, templateID, data).then((response)=>{
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("message").value="";
    },
    (error)=>{
        console.log('FAILED...', error);
    },
);
}