const App = () => {

  function Part(props){
    console.log(props.name)
    return (
      <div>
        {props.name.map((el)=>{
          return(
          <p>Name:{el.name}, Exercises:{el.exercises}</p>
          )
        })}
        
      </div>
    )
  }

  function Header (props){
    
    return(
      <div>
        <h1>{props.name.name}</h1>
      </div>
    )
  }

  function Content (props){
    

    return(
      
      <div>
        <Part name = {props.part} />
        </div>
    )

   

    
  }


  function Total (props){
    
    return(
      <div>
        <p>{props.part.reduce((acc,c)=>acc+=c.exercises,0)}</p>
      </div>
    )
  }

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
     <Header name = {course} />
     <Content part = {course.parts}/>
     <Total part = {course.parts} />
    </div>
  )
}

export default App