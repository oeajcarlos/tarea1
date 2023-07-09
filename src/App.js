//Componente Header
const Header = (props) => {

   return (
    <div>
    <p>CURSO: {props.course}</p>
    </div>
  )
  }

  const Content = (props) => {

    return (
     <div>
     <p>Exercises{props.num}: {props.namejercicio}</p>
     </div>
   )
   }

   const Total = (props) => {

    return (
     <div>
     <p><b>Total Exercises: {props.totalej}</b></p>
     </div>
   )
   }
  
  

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} /> 
      <Content num={1} namejercicio={part1} />
      <Content num={2} namejercicio={part2} />
      <Content num={3} namejercicio={part3} />
      <Total totalej={exercises1+exercises2+exercises3}  />
    </div>
  )
}

export default App
