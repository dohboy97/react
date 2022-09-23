
// const Hello = (props) => {
//   return (
//     <div>
//       <p>Hello {props.name} you are {props.age} years old</p>
//     </div>
//   )
// }

// const App = () => {

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name = 'connor' age = '36'/>
//       <Hello name = 'chielu' age = {parts[2].exercises}/>
//       <Hello name = 'pinhead' age = {Math.floor(Math.random()*100)}/>
//     </div>
//   );
//


//PRACTICE PROBLEM 

const Header = (props) => {
  console.log(props)
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>{props.part.name}{props.part.exercises}</p>
  )
}

const Content = (props) =>  {
  return (
    <div>
    <Part part={props.parts[0]} />
    <Part part={props.parts[1]} />
    <Part part={props.parts[2]} />
  </div>
    
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Num of exercises: {props.parts.reduce((acc,c)=> acc+c.exercises, 0)}</p>
    </div>
  )
}

function App () {

    const course = {
    name: 'Half Stack application development',
    parts: [
    {
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }
  ]
}
  return (
    <div>
    <Header course={course} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
  )
}

export default App