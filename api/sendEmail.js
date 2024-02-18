const multer = require("multer");
const sendGridMail = require("@sendgrid/mail");

sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
const upload = multer();

module.exports = async (req, res) => {
  upload.single("attachment")(req, {}, async (err) => {
    if (err) {
      return res.status(500).send(`Error uploading file: ${err.message}`);
    }

    const { to, subject, text } = req.body;
    let attachments = [];

    if (req.file) {
      attachments.push({
        content: req.file.buffer.toString("base64"),
        filename: req.file.originalname,
        type: req.file.mimetype,
        disposition: "attachment",
      });
    }

    const msg = {
      to: to,
      from: "volkasp@gmail.com", // Replace with your verified sender
      subject: subject,
      text: text,
      attachments: attachments,
    };

    try {
      await sendGridMail.send(msg);
      res.send("Email sent successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error in sending email");
    }
  });
};
