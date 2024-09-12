import { Link } from "react-router-dom";
import { useCharStates } from "../Context";

const Card = ({ char }) => {
  const { setFavs } = useCharStates();
  const addFav = () => {
    setFavs((prevFavs) => [...prevFavs, char]);
  };

  return (
    <div>
      <img src={char.image} alt="" />
      <Link to={"detail/" + char.id}>
        <h2>{char.name}</h2>
      </Link>

      <button onClick={addFav}>❤️</button>
    </div>
  );
};

export default Card;
