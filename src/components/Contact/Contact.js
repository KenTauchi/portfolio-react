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
    <div className="contact">
      <ContactB className="contact-head" onClick={handleClickOpen}>
        Contact Me
      </ContactB>

      <div>
        <Dialog open={open} onClose={handleClose} transitionDuration={500}>
          <ContactHead>
            <span className="contact-span">Contact to Ken</span>
            <button onClick={handleClose} className="contact-close-contact">
              <div className="contact-close-button">&times;</div>
            </button>
          </ContactHead>
          <form
            action="https://formspree.io/xwkqrvkz"
            method="POST"
            className="contact-form"
          >
            <div className="contact-labels">
              <Label>
                Name:
                <InputText type="text" name="name" />
              </Label>

              <Label>
                Email:
                <InputText type="text" name="_replyto" />
              </Label>

              <Label className="contact-msg">
                Message:
                <TextArea name="message" rows="2" cols="50"></TextArea>
              </Label>
            </div>

            <InputSubmit type="submit" onClick={handleClose} />
          </form>
        </Dialog>
      </div>
    </div>
  );
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
  @media (min-width: 1024px) {
    font-size: 1.3rem;
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
  @media (min-width: 1024px) {
    font-size: 1.3rem;
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
  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;
const Label = styled.label`
  display: grid;
  text-align: left;
  margin-bottom: 1rem;
  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;
const ContactHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  @media (min-width: 1024px) {
    padding-left: 0rem;
  }
`;

const ContactB = styled.div`
    margin: 0 auto;
    width: 25vw;
    max-width: 110px;
    text-align: center;
    background-color: rgb(255, 94, 0);
    padding: 0.5rem 2rem;
    border-radius: 50px;
    border: none;
    z-index: 3;
    color: black;
    font-family: "Dosis", sans-serif;
    &:hover {
        cursor: pointer
    };
    @media (min-width: 768px){
        font-size: 1.2rem;
        padding: .7rem 2.2rem;
        width: 15vw;
        max-width: 260px
    }
    @media (min-width: 1200px){
        max-width: 100px;
    }

    &:focus {
      outline: 0;
    }
  }
`;

export default Contact;
