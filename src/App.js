import "./styles.css";
import StarWidget from "./StarWidget";

export default function App() {
  const handleRating = () => {
    console.log("Hello");
  };
  return (
    <div className="App">
      <StarWidget
        totalStars={5}
        fillcolor="#ff1dce"
        handleRating={handleRating}
      />
    </div>
  );
}
