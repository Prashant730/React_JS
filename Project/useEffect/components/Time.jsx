import {useState} from "react"
import {useEffect} from "react"
function Time() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    // 1. Setup: This runs once when the component mounts
    const id = setInterval(() => {
      console.log("Running");

      // We use the functional update 'prev => prev + 1'
      // so we don't need to add 'count' to the dependency array.
      setCount(prevCount => prevCount + 1);
    }, 1000); //1000 denotes that the interval runs every 1 second

    // 2. Cleanup: This runs when the component unmounts
    return () => {
      console.log("Cleanup: Stopping Interval");
      clearInterval(id);
    };
  }, []);

  return (
    <div className= "flex flex-col justify-center items-center min-h-screen gap-5">
      <h1>Timer Component</h1>
      <h2>Seconds passed: {count}</h2>
    </div>
  );
};

export default Time