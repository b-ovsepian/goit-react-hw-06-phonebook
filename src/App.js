import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import contactsAction from "./redux/actions/contactsAction";
import Section from "./Components/Section/Section";
import ContactForm from "./Components/ContactForm/ContactForm";
import Contacts from "./Components/Contacts/Contacts";
import transition from "styled-transition-group";
import PropTypes from "prop-types";

const Div = transition.div.attrs({
  unmountOnExit: true,
  mountOnEntry: true,
  timeout: 250,
})`
position: absolute;
padding: 5px 10px;
width: 300px;

top: 10px;
left: 10px;

background-color: #6368e5;
border-radius: 8px;

text-align: center;
color: white;

  &:enter { opacity: 0; 
    transform: translateX(-100%); }
  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:exit { opacity: 1;
  transform: translateX(0); }
  &:exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const App = ({ contacts, onAddContacts, error, onChangeError }) => {
  useEffect(() => {
    const persistedContacts = localStorage.getItem("contacts");
    if (persistedContacts) {
      const contacts = JSON.parse(persistedContacts);

      contacts.forEach((contact) =>
        onAddContacts(contact.name, contact.number)
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  });

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        onChangeError("");
      }, 1500);
    }
  }, [error]);

  return (
    <>
      {
        <Div in={!!error}>
          <p>{error}</p>
        </Div>
      }
      <Section title={"Phonebook"}>
        <ContactForm />
      </Section>
      <Section title={"Contacts"}>
        <Contacts />
      </Section>
    </>
  );
};

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  error: state.contacts.error,
});

const mapDispatchToProps = {
  onAddContacts: contactsAction.addContact,
  onChangeError: contactsAction.changeError,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  contacts: PropTypes.array.isRequired,
  onAddContacts: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  onChangeError: PropTypes.func.isRequired,
};
