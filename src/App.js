import { useEffect, useState } from "react";

function App({ name }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log('hey')
    const changeTimeInterval = setInterval(() => {
      setTime(new Date());
    }, 5000);

    return () => clearInterval(changeTimeInterval);
  }, []);

  return (
    <div className="App">
      <p>{name}</p>
      <p>{time.toString()}</p>
    </div>
  );
}

export default App;
