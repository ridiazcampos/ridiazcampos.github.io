import type { NextPage } from "next";
import Card from "../../components/Elements/card";
import { RiMusic2Fill } from "react-icons/ri";

const Ri: NextPage = () => {
  return (
    <div>
      <Card Icon={RiMusic2Fill} title={"Música"} description={"ñlkjñlkñj"} />
    </div>
  );
};

export default Ri;
