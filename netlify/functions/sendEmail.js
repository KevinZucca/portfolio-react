const nodemailer = require("nodemailer");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.handler = async function (event, context) {
  const { email, name, message } = JSON.parse(event.body);

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_ADDRESS,
    subject: `Message from ${name}`,
    text: `Email: ${email}\n\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);

    await prisma.message.create({
      data: {
        email,
        name,
        text: message,
      },
    });

    return {
      statusCode: 200,
      body: "Email sent successfully and data saved to database",
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: "Error sending email and saving data to database",
    };
  }
};
