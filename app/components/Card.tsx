import "../global.css";
import Image from "next/image";
import Link from 'next/link';

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
  instructor,
}) => {
  return (
    <div className="max-w-sm bg-white rounded-lg border-solid border-2 border-grey-500 overflow-hidden p-4">
      <div className="relative">
        <Image
          src="/images/course1.png"
          alt="Course"
          className="w-full h-48"
          width={400}
          height={200}
        />
        <div className="absolute top-4 right-4 bg-blue-500 rounded-full p-2">
          <Image
            src="/images/bookmark1.svg"
            alt="Bookmark"
            className="w-4 h-4"
            width={16}
            height={16}
          />
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
        
          <div className="bg-blue-500 text-white text-sm px-4 py-1 rounded-lg">
            {level}
          </div>

          
          <div className="flex items-center space-x-4">
          <div className="flex items-center text-sm text-gray-500">
              <Image
                src="/images/vector.svg" 
                alt="learners"
                className="w-4 h-4 mr-1"
                width={16}
                height={16}
              />
              {learners}
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <Image
                src="/images/star.svg" 
                alt="Rating"
                className="w-4 h-4 mr-1"
                width={16}
                height={16}
              />
              {rating.toFixed(1)}
            </div>
            
          </div>
        </div>

        <h2 className="text-lg font-semibold mb-2">
          <Link href="/coursepage" className="text-blue-500 hover:underline">
            {title}
          </Link>
        </h2>
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
