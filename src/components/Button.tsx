export function Button() {
    function sumOfTwo(num1: number, num2: number): void {
      const sum = num1 + num2;
      alert(`The sum of ${num1} and ${num2} is ${sum}`);
    }
  
    return (
      <button onClick={() => sumOfTwo(5, 3)}>
        Click me
      </button>
    );
  }
