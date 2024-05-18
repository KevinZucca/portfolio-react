const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.handler = async (event, context) => {
  const { email, name, message } = JSON.parse(event.body);

  try {
    const savedMessage = await prisma.message.create({
      data: {
        text: message,
        user: {
          create: {
            name: name,
            mail: {
              create: {
                mail: email,
              },
            },
          },
        },
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Message saved successfully",
        data: savedMessage,
      }),
    };
  } catch (error) {
    console.error("Error saving message:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "An error occurred while saving the message",
      }),
    };
  }
};
