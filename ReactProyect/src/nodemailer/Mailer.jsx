const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "only@gmail.com",
        pass: "tctctctc",
    },
});

const mailOptions = {
    from: "programador19@gmail.com",
    to: "iamdev",
    subject: "Prueba de correo elctronico",
    text: "!Hola Comunidad WebDeveloper"
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
        
    }else{
        console.log(`Correo electronico enviado: ${info}`);
    }
})

export default Mailer