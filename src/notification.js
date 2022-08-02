const nodemailer = require("nodemailer");

const createTransport = (parametry) => {

    console.log({
        host: parametry.smtp,
        port: 587,
        secure: false,
        tls: { rejectUnauthorized: false },
        auth: {
          user: parametry.user,
          pass: parametry.password,
        },
        logger: true,
      })
  return nodemailer.createTransport({
    host: parametry.smtp,
    port: parametry.port,
    secure: false,
    tls: { rejectUnauthorized: false },
    auth: {
      user: parametry.user,
      pass: parametry.password,
    },
    logger: true,
  });
};


const notify = async (parametry, subject, body, receptor) => {
  let response = {};
  try {
    const transport = createTransport(parametry);

    await transport.sendMail({
      from: parametry.user,
      to: receptor,
      subject,
      html: body,
    });

    console.log({
          from: parametry.user,
          to: receptor,
          subject,
          html: body,
        })

    response = { message: "Correo enviado con éxito" };
    return response;
  } catch (error) {
    response = { message: "Error al enviar el correo", error };
    console.log("ERROR AL ENVIAR CORREO", error);
    return response;
  }
};

module.exports = { notify };
