import { useMemo, useState, Fragment } from "react";
import { FaStar } from "react-icons/fa";

const StarWidget = ({ totalStars, fillcolor }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const starsToRender = useMemo(() => {
    const ar = Array(totalStars)
      .fill(0)
      .map((item, idx) => {
        return idx + 1;
      });
    return ar;
  }, [totalStars]);

  const handleOnClick = (value) => {
    setRating(value);
  };

  const sendRating = (e) => {
    console.log("Hello the rating is", rating);
    console.log(e.target.value);
  };

  return (
    <form onSubmit={sendRating}>
      {starsToRender.map((item, idx) => {
        console.log("lets do the rerender");
        return (
          <label>
            <input
              type="radio"
              checked={item <= rating ? true : false}
              value={item}
              key={`${item}-${idx}-`}
              onChange={() => {
                handleOnClick(item);
              }}
              id={`${item}-${idx}`}
              hidden
            />
            <FaStar
              htmlFor={`${item}-${idx}`}
              color={item <= (hover || rating) ? fillcolor : "gray"}
              onMouseEnter={() => {
                setHover(item);
              }}
              onMouseOut={() => {
                setHover(0);
              }}
            />
          </label>
        );
      })}
      <button type="submit">Please Submit Ratings</button>
    </form>
  );
};

export default StarWidget;
