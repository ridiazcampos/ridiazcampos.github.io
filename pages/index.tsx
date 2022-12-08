import type { NextPage } from "next";
import Card from "../components/Elements/Card";
import { RiPlantFill } from "react-icons/ri";

const Home: NextPage = () => {
  return (
    <div>
      <Card Icon={RiPlantFill} title={"Ri"} description={"ñlkjñlkñj"} />
    </div>
  );
};

export default Home;
