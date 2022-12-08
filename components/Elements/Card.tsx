import { IconType } from "../Types/icons";

export type CardProp = {
  Icon?: IconType;
  title?: string;
  description?: string;
};

const Card = ({ Icon, title, description }: CardProp) => {
  return (
    <div className="p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {Icon ? (
        <Icon className="mb-2 w-10 h-10 text-gray-500 dark:text-gray-400" />
      ) : (
        <div />
      )}

      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default Card;
