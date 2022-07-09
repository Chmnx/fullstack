import { useState } from 'react'
import Name from './components/Name'

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    }
    
    const alreadyInRegister = persons.some(perperson =>{
      if(perperson.name === newName){
         return true;
      }
      return false
    })
  
      if (alreadyInRegister) {
        alert(`${newName} is already added to phonebook`)} 
      else {
        setPersons(persons.concat(nameObject))
        setNewName('')
      }
    }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
 
      <div>
        <h1>Phonebook</h1>
        <div>
        </div>      
        <form onSubmit={addName}>
          name: <input 
            value={newName}
            onChange={handleNameChange}
            />
          <button type="submit">add</button>
        </form>   
        <form onSubmit={addName}>
          number: <input 
            value={newNumber}
            onChange={handleNumberChange}
            />
          <button type="submit">add</button>
        </form> 
        <h1>Numbers</h1>
        <ul>
        {persons.map(person =><Name key= {person.id} person={person} />)}
        </ul>
      </div>
    )
  }


export default App


