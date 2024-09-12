import { useCharStates } from "../Context";
import Card from "../components/Card";

const Favs = () => {
  const { favs } = useCharStates();
  return (
    <div>
      <h2>Favoritos</h2>
      {favs.map((char) => (
        <Card key={char.id} char={char} />
      ))}
    </div>
  );
};

export default Favs;
