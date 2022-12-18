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
     if (this.state.contacts.find((elem) => elem.name === this.state.contacts.name)){
            return alert(`Person with name ${this.state.contacts.name} is in a date`);
      }     
  };
    
  formSubmitHandler = data => {
    console.log(data);
    
   }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  }

  render() {
    const { filter } = this.state;
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );

    return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Section title="Phonebook">
    <ContactForm onSubmit={this.addContact}/>
    </Section>
    <Section title="Contacts">
    <Filter value={filter} onChange={this.changeFilter} />
    <ContactList contact={visibleContacts} deleteContact={this.deleteContact}/>  
    </Section>
    </div>
  );
 }
};
