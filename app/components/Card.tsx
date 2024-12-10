import "../global.css";
import Image from "next/image";


interface CardProps {
  level: string;
  learners: number;
  rating: number;
  title: string;
  instructor: string;
  imageUrl: string;
}

const CardComponent: React.FC<CardProps> = ({
  level,
  learners,
  rating,
  title,
  instructor
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <Image
          src="/images/course1.png"
          alt="Course"
          className="w-full h-48 object-cover"
          width={400}
          height={200}
        />
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-sm px-2 py-1 rounded">
          {level}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span className="mr-4 flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 3a7 7 0 100 14 7 7 0 000-14zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm9-3.5a1 1 0 10-2 0V10a1 1 0 00.293.707l3 3a1 1 0 101.414-1.414L11 9.586V6.5z" />
            </svg>
            {learners}
          </span>
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09L5.5 12.09 1 7.627l6.09-.525L10 1.5l2.91 5.602 6.09.525-4.5 4.463 1.378 5.9z" />
            </svg>
            {rating.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center mt-4">
          <Image
            src="/images/tutor.png" 
            alt={instructor}
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
          <p className="ml-3 text-gray-700">{instructor}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
