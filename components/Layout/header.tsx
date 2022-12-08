import Image from "next/image";
import {
  RiPlantFill,
  RiCodeSSlashFill,
  RiUser3Fill,
  RiMusic2Fill,
} from "react-icons/ri";

const Header = () => {
  return (
    <aside className="w-80 h-screen" aria-label="Sidebar">
      <div className="overflow-y-auto h-full w-full py-5 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <div className="w-full justify-items-end p-3 space-y-2">
          <Image
            src="https://avatars.githubusercontent.com/u/37166300"
            className="rounded-full justify-self-center"
            height="230rem"
            width="230rem"
            alt="Flowbite Logo"
          />
          <div className="">
            <div className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Ri 🌱
            </div>
            <div className="self-center text-l font-semibold whitespace-nowrap dark:text-gray-300">
              @ridiazcampos
            </div>
          </div>
        </div>

        <ul className="space-y-2">
          <li>
            <a
              href="ri"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <RiPlantFill className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">soi</span>
            </a>
          </li>
          <li>
            <a
              href="projects"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <RiCodeSSlashFill className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="ml-3">Proyectos</span>
            </a>
          </li>
          <li>
            <a
              href="contact"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <RiUser3Fill className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Contacto</span>
            </a>
          </li>
          <li>
            <a
              href="music"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <RiMusic2Fill className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />

              <span className="flex-1 ml-3 whitespace-nowrap">Música</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Header;
