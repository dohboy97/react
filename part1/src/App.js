const App = () => {

  function Part(props){
    return (
      <div>
        <p>Name:{props.name}, Exercises:{props.exercises}</p>
      </div>
    )
  }

  function Header (props){
    return(
      <div>
        <h1>{props.name}</h1>
      </div>
    )
  }

  function Content (props){
    
    return(
      <div>
        <Part name = {props.part[0].name} exercises = {props.part[0].exercises}/>
        <Part name = {props.part[1].name} exercises = {props.part[1].exercises}/>
        <Part name = {props.part[2].name} exercises = {props.part[2].exercises}/>
      </div>
    )
  }
  function Total (props){
    return(
      <div>
        <p>{props.exercises.reduce((acc,c)=>acc+c,0)}</p>
      </div>
    )
  }

  const course = {
    name:'Half Stack application development',
    parts:[
      {name:'fundamentals of react',
    exercises:10},
    {name:'using props to pass data',
    exercises:7},
    {name:'state of a component',
    exercises:14}
    ]
  }

  return (
    <div>
     <Header name = {course.name} />
     <Content part = {course.parts}/>
     <Total exercises = {[course.parts[0].exercises,course.parts[1].exercises,course.parts[2].exercises]} />
    </div>
  )
}

export default App