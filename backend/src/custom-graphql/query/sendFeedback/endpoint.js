const sendEmail = require("../../../sendEmail/nodemailer");
const endpoint = async (next, parent, args) => {
  try {
    if (!args?.data) {
      return;
    }

    const {
      email, text, title
    } = args?.data;

    const res = await sendEmail(email, text, title);

    return {
      status: res,
    };
  } catch (e) {
    console.error(e)
  }
};

module.exports = endpoint;
