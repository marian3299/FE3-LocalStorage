import Card from "../components/Card";
import { useCharStates } from "../Context";

const Home = () => {
  const { list } = useCharStates();

  return (
    <div>
      {list.map((char) => (
        <Card key={char.id} char={char} />
      ))}
    </div>
  );
};

export default Home;
