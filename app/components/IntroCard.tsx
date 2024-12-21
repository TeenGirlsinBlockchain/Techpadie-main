import "../global.css";
import Image from "next/image";

interface DetailedCardProps {
  title: string;
  description: string;
  learners: number;
  rating: number;
}

const DetailedCard: React.FC<DetailedCardProps> = ({
  title,
  description,
  learners,
  rating,
}) => {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 w-[500px] bg-white">
      {/* Inner Container with its own border */}
      <div className="relative p-4 rounded-md">
        {/* Bookmark */}
        <div className="absolute top-1 right-1 bg-blue-500 rounded-full p-2">
          <Image
            src="/images/bookmark1.svg"
            alt="Bookmark"
            className="w-4 h-4"
            width={16}
            height={16}
          />
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 mb-2 mt-2">{title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        {/* Learners, Rating, and Popular Reviews */}
        <div className="flex items-center justify-between text-sm text-gray-700">
          {/* Learners */}
          <div className="flex items-center">
            <Image
              src="/images/vector.svg"
              alt="Learners Icon"
              className="w-4 h-4 mr-2"
              width={16}
              height={16}
            />
            <span>{learners} learners</span>
          </div>

          {/* Rating */}
          <div className="flex items-center">
            {/* //TODO:Create #6 star border */}
            <Image
              src="/images/star.svg"
              alt="Star Rating"
              className="w-4 h-4 mr-1"
              width={16}
              height={16}
            />
            <span>{rating.toFixed(1)}</span>
          </div>

          {/* Popular Reviews */}
          <div className="text-blue-500 underline cursor-pointer">
            Based on popular reviews
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCard;
