const mailConfig = require("../../mail.config.js");
const adminEmail = require("../../emailTemplates/contact/admin.js");
const userEmail = require("../../emailTemplates/contact/user.js");

var mailOptions = {
  from: "Contact <" + process.env.MAILER_MAIL_SENDER + ">",
};

module.exports = {
  sendContact: (req, res) => {
    let data = req.body;
    mailConfig.sendMail(
      {
        ...mailOptions,
        html: adminEmail(data),
        to: "neumann.tecnica@gmail.com, rollet.adrien@gmail.com, camille.bienaime@hotmail.fr",
        subject: "Quelqu'un a envoyé un message",
      },
      function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      }
    );
    mailConfig.sendMail(
      {
        ...mailOptions,
        html: userEmail(data),
        to: data.email,
        subject: "Merci de m'avoir contactée",
      },
      function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      }
    );
    res.send({ result: "added" });
  },
};
