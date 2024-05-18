import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Form = () => {
  const [dataInput, setDataInput] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    setDataInput(false);
    setTimeout(() => {
      setDataInput(true);
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input type="email" className="mb-6" />
        </FormControl>
        <FormControl>
          <FormLabel>Your name</FormLabel>
          <Input className="mb-6" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea minHeight="150px" />
        </FormControl>
        <Button type="submit" id="form-button">
          Send!
        </Button>
        {dataInput === false && <p>Thank you!!</p>}
      </FormControl>
    </form>
  );
};

export default Form;
