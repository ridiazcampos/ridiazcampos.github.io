import Image from "next/image";
import { StaticImageData } from "next/image";

export type ImageCardProp = {
  image?: StaticImageData | string;
  title?: string;
  description?: string;
  path?: string;
};

const ImageCard = ({ image, title, description, path }: ImageCardProp) => {
  return (
    <a
      href={path || "#"}
      className="flex items-center h-max-64 h-56 self-stretch bg-white rounded-lg border shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {image ? (
        <div className="h-56 w-56">
          <Image
            className="object-cover w-full h-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={image}
            alt=""
            // height="600rem"
            // width="500rem"
            layout="intrinsic"
          />
        </div>
      ) : (
        <div />
      )}
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="text-2xl font-bold w-full tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal w-full text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ImageCard;
