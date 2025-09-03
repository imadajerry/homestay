import "./App.css";
import Calendar from "./components/Calendar";

function App() {
  const handleDaySelect = (day: Date) => {
    console.log("Selected day:", day);
  };
  return (
    <>
      <Calendar onDaySelect={handleDaySelect} />
    </>
  );
}

export default App;
