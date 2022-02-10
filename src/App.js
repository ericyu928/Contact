import React from 'react';
import './App.css';
import Contact from './Contact/Contact.js'
import ContactTable from './Contact/ContactTable.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Contact />
        <ContactTable />
      </div>
    )
  }
}


export default App;
