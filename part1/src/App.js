
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} you are {props.age} years old</p>
    </div>
  )
}

const App = () => {

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name = 'connor' age = '36'/>
      <Hello name = 'chielu' age = {3*76}/>
      <Hello name = 'eloi' age = {420}/>
    </div>
  );
}

export default App;
