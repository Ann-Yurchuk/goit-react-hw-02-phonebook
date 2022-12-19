import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';
import { Filter } from './Filter';
import { data } from '../data/data';


export class App extends Component {
 
  state = {
    contacts: data,
    name: '',
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };
 
  addContact = data => {
    const newContact = {
      ...data,
      id: nanoid(),
             };
  
       
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    
    if(this.state.contacts.find((contact) => contact.name === this.state.contacts.name)) {
      return alert(`$this.state.contacts.name}is already in contacts`);
    }
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  }

  render() {
    const { filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'column',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
    <Section title="Phonebook">
    <ContactForm addUser={this.addContact}/>
    </Section>
    <Section title="Contacts">
    <Filter value={filter} onChange={this.changeFilter} /> 
     {visibleContacts.length > 0 && (
          <ContactList contacts={visibleContacts} deleteContact={this.deleteContact} /> )}      
    </Section>
    </div>
  );
 }
};
