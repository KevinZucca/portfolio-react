import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

const Form = () => {
  const [dataInput, setDataInput] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      email: formData.get("email"),
      name: formData.get("name"),
      text: formData.get("message"),
    };

    try {
      const response = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setDataInput(false);
        setTimeout(() => {
          setDataInput(true);
        }, 3000);
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" name="email" className="mb-6" />
        <FormLabel>Your name</FormLabel>
        <Input name="name" className="mb-6" />
        <FormLabel>Message</FormLabel>
        <Textarea name="message" minHeight="150px" />
        <Button type="submit" id="form-button">
          Send!
        </Button>
        {dataInput === false && <p>Thank you!!</p>}
      </FormControl>
    </form>
  );
};

export default Form;
