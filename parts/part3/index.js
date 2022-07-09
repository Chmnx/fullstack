const express = require('express')
const app = express()

let persons = [
    { 
      name: "Arto Hellas", 
      number: "040-123456",
      id: 1
    },
    { 
      name: "Ada Lovelace", 
      number: "39-44-5323523",
      id:2
    },
    { 
      name: "Dan Abramov", 
      number: "12-43-234345",
      id:3
    },
    { 
      name: "Mary Poppendieck", 
      number: "39-23-6423122",
      id:4
    }
  ]

const morgan= (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(express.json()) 

app.use(morgan)

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(n => n.id))
    : 0
  return maxId +  Math.floor(Math.random() * 100000)
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({ 
      error: 'name missing' 
    })
  }

  const alreadyInRegister = persons.some(perperson =>{
    if(perperson.name === body.name){
       return true;
    }
    return false
  })

  if (alreadyInRegister) {
    return response.status(400).json({ 
      error: 'name already exists' 
    })
  }


  if (!body.number) {
    return response.status(400).json({ 
      error: 'number missing' 
    })
  }

  const note = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }
  persons = persons.concat(note)
  
  response.json(note)
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = persons.filter(note => note.id !== id)
  response.status(204).end()
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = persons.find(note => note.id === id)
  if (note) {
    response.json(note)
  } else {
    response.status(404).end()
  }
})


app.get('/info', (req, res) => {
  res.send('<p>Phonebook has info for 2 people</p><p>Saturday Jan 22 22:27 GMT +0200 (Eastern European Standard Time)</p>')
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  })

