import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

import Dialog from "@material-ui/core/Dialog";

import "./Contact.css";

const Contact = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ContactB className="contact-head" onClick={handleClickOpen}>
        Contact Me
      </ContactB>

      <div>
        <Dialog open={open} onClose={handleClose} transitionDuration={500}>
          <ContactHead>
            <span style={styles.span}>Contact to Ken</span>
            <button style={styles.button} onClick={handleClose}>
              <div className="close-button">&times;</div>
            </button>
          </ContactHead>
          <form
            action="https://formspree.io/xwkqrvkz"
            method="POST"
            style={styles.form}
          >
            <div style={styles.labels}>
              <Label>
                Name:
                <InputText type="text" name="name" />
              </Label>

              <Label>
                Email:
                <InputText type="text" name="_replyto" />
              </Label>

              <Label style={styles.msg}>
                Message:
                <TextArea name="message" rows="1" cols="50"></TextArea>
              </Label>
            </div>

            <InputSubmit type="submit" onClick={handleClose} />
          </form>
        </Dialog>
      </div>
    </div>
  );
};

const styles = {
  span: {
    fontSize: "1.5rem",
    fontWeight: 600,
  },
  button: {
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    ":focus": {
      outline: 0,
    },
  },
  closeContact: {
    color: "#bbb",
    fontSize: "1.5rem",
  },
  form: {
    // marginTop: 16,
    padding: 16,
    paddingTop: 0,
  },
  labels: {
    display: "grid",
  },
};

const InputSubmit = styled.input`
  font-family: "Dosis", sans-serif;
  background: transparent;
  border: solid #bbb 1px;
  border-radius: 5px;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  color: #bbb;
  cursor: pointer;
  &:hover {
    transition: box-shadow 0.3s linear;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  }
  &:active {
    box-shadow: none;
  }
  &:focus {
    outline: 0;
  }
`;

const InputText = styled.input`
  background: transparent;
  border: 0;
  border-bottom: 1px solid #bbb;
  width: 100%;
  padding: 8px 0px;
  font-size: 1rem;
  color: #bbb;

  &:active {
    box-shadow: none;
  }
  &:focus {
    outline: 0;
  }
`;

const TextArea = styled.textarea`
  background: transparent;
  border: 0;
  border-bottom: 1px solid #bbb;
  width: 100%;
  padding: 8px 0px;
  font-size: 1rem;
  color: #bbb;

  &:active {
    box-shadow: none;
  }
  &:focus {
    outline: 0;
  }
`;
const Label = styled.label`
  display: grid;
  text-align: left;
  margin-bottom: 1rem;
`;
const ContactHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const ContactB = styled.div`
    margin: 0 30vw;
    text-align: center;
    background-color: rgb(255, 94, 0);
    padding: 0.5rem 2rem;
    border-radius: 50px;
    border: none;
    z-index: 3;
    color: black;

    &:focus {
      outline: 0;
    }
  }
`;

export default Contact;
