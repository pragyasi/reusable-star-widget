import "./styles.css";
import StarWidget from "./StarWidget";

export default function App() {
  return (
    <div className="App">
      <StarWidget totalStars={5} fillcolor="#ff1dce" />
    </div>
  );
}
