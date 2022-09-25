const App = () => {


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
        <p>{props.name}</p>
        <p>{props.exercises}</p>
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
     <Content name = {course.parts[0].name} exercises = {course.parts[0].exercises}/>
     <Content name = {course.parts[1].name} exercises = {course.parts[1].exercises}/>
     <Content name = {course.parts[2].name} exercises = {course.parts[2].exercises}/>
     <Total exercises = {[course.parts[0].exercises,course.parts[1].exercises,course.parts[2].exercises]} />
    </div>
  )
}

export default App