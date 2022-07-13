import Course from './components/Course'

const App = (props) => {
  const { courses } = props
  const total = courses.parts.reduce((ttotal, currentValue) => ttotal = ttotal + currentValue.exercises,0)

  return (
    <div>
      <h1>{courses.name}</h1>
      <ul>
        {courses.parts.map(course => 
          <Course key={courses.parts.id} course={course} />    
        )}
      </ul>
      <ul>
        total of {total} exercises
      </ul>
    </div>
  )
}


export default App