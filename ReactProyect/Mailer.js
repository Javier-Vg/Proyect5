//Importando la biblioteca nodemailer en tu archivo
import nodemailer from 'nodemailer';

// Configuración del servicio de correo electrónico
const transporter = nodemailer.createTransport({
  /**
   * Para utilizar otro servicio de correo electrónico, como Yahoo o Outlook, debes
   * cambiar el valor de la propiedad service y ajustar la configuración de autenticación correspondiente.
   */
  service: "gmail",
  auth: {
    user: "jjaviervgg@gmail.com",
    pass: "rzvemeapfxtjgdsu",
  },
});

// Definir el contenido del cuepro para el correo electrónico que deseas enviar
const mailOptions = {
  from: "javior2000@gmail.com",
  to: "javior0880@gmail.com",
  subject: "Prueba de correo electrónico con Node.js",
  text: "¡Hola manito, ya te funciona el nodemailer, yessirrrrr!",
};

// Envía el correo electrónico utilizando el método sendMail del objeto transporter
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Correo electrónico enviado: " + info.response);
  }
});