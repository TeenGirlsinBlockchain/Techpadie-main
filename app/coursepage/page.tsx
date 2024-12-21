import Navigation from "../components/Navigation";
import Image from "next/image";
import DetailedCard from "../components/IntroCard";

export default function Page() {
  const courseTitle = "Introduction to Web Development";
  //TODO: Make this dynamic, this example is only for starters once backend is setup this should be fixed
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Top Section with Searchbar and Avatar */}
        <div className="flex justify-between items-center mb-8">
          {/* Searchbar */}
          <div className="flex items-center w-1/2 max-w-md  rounded-full px-4 py-2 border-solid border-2 border-grey-500">
            {/* Search Icon */}
            <Image
              src="/images/search.svg"
              alt="Search"
              width={16}
              height={16}
              className="mr-4"
            />
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search courses"
              className="w-full bg-transparent border-none outline-none text-sm text-gray-600 placeholder-gray-500"
            />
          </div>

          {/* User Avatar */}
          <Image
            src="/images/avatar.png"
            alt="User Avatar"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span className="mr-2">Courses</span>
          <span className="text-gray-400">/</span>
          <span className="ml-2 font-semibold text-gray-400">
            {courseTitle}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <DetailedCard
            title="Introduction to Web development : HTML , CSS and Javascript"
            description="Web development is the process of creating and maintaining websites vor web applications, encompassing 
                         a variety of tasks such as designing user interfaces, coding functionality, and ensuring optimal performance. 
                         It involves front-end development, which focuses on the visual and interactive aspects users see, and 
                         back-end development."
            learners={100}
            rating={4.8}
          />
          <DetailedCard
            title="Advanced Web Design Techniques"
            description="Explore advanced CSS, animations, and design principles to elevate your web design skills."
            learners={150}
            rating={4.5}
          />
        </div>
      </main>
    </div>
  );
}
