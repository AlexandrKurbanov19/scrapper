const nodemailer = require('nodemailer');


const sendEmail = async (userEmail, text, title) => {
  try {
    console.log('userEmail, text, title', userEmail, text, title);
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL_TRANSPORTER_ACC,
        pass: process.env.EMAIL_TRANSPORTER_ACC_PASS,
      },
    });

    let result = true;
    await transporter.sendMail({
      from: process.env.EMAIL_TRANSPORTER_ACC,
      to: userEmail,
      subject: title,
      text: text,
      html:
        `<p>${text}</p>`,
    }, (err, info) => {
      if (err) {
        console.log(err);
        result = false;
      } else {
        console.log('Email sent: ' + info.response);
        result = true;
      }
    });

    return result;
  }
  catch (e) {
    console.error(e, 'send mail')
  }

}
export default sendEmail;
