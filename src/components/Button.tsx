export function Button(){
  const sumOfTwo = (num1:number,num2:number):void => {alert(`The sum of ${num1} and ${num2} is ${num1+num2}`)}  
  return(
     <button onClick={() => sumOfTwo(5,4) }> Click me </button>
  )
 
}

export default Button