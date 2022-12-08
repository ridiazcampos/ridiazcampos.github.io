import type { NextPage } from "next";
import Card from "../../components/Elements/Card";
import ImageCard from "../../components/Elements/ImageCard";
import { RiCodeSSlashFill } from "react-icons/ri";
import TaylorsVersionImage from "../../public/taylors-version.png";
import EatingUCImage from "../../public/eating-uc.png";
import SalaTutoresImage from "../../public/sala-tutores.png";

const Proyects: NextPage = () => {
  return (
    <div className="space-y-2">
      <Card
        Icon={RiCodeSSlashFill}
        title={"Proyectos"}
        description={"Proyectos de código en los que he podido participar ❤️"}
      />
      <div className="grid md:grid-cols-2 gap-2 ">
        <div className="col-span-1 w-full">
          <ImageCard
            image={TaylorsVersionImage}
            title={"Taylor's version"}
            description={
              "Visualización de álbumes de Taylor Swift con datos desde Spotify. Proyecto para el curso Visualización de Información (2021-2)"
            }
            path={"https://taylors-version.vercel.app/"}
          />
        </div>
        <div className="col-span-1 w-full">
          <ImageCard
            image={EatingUCImage}
            title={"Eating UC"}
            description={
              "Plataforma de delivery de comida. Proyecto para el curso Ingeniería de Software (2019-2)"
            }
            path={"https://eatinguc.herokuapp.com/"}
          />
        </div>
        <div className="col-span-1 w-full">
          <ImageCard
            image={SalaTutoresImage}
            title={"Sala de Tutores"}
            description={
              "Plataforma para reserva de Sala del Cuerpo de Tutores de Ingeniería UC (PFG 😺🥞❤️)"
            }
            path={"https://tutoresinguc.github.io/sala/"}
          />
        </div>
      </div>
    </div>
  );
};

export default Proyects;
