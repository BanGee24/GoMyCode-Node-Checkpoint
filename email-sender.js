// Q5. Sending Email from the node.

var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: 'your-email-service-provider', // e.g., 'gmail', 'hotmail', 'yahoo', etc.
  auth: {
    user: 'your-email@example.com', // your email address
    pass: 'your-email-password', // your email password (or app password for some email providers)
  },
});

// Define the email options
var mailOptions = {
  from: 'your-email@example.com', // your email address
  to: 'your-email@example.com', // recipient's email address (can be your own)
  subject: "Sending Email using Node.js", //subject of the email
  text: "That was easy!", // email content
};

// Send the email
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
