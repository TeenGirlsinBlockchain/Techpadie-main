import Navigation from "../components/Navigation";
import Image from "next/image";

export default function Page() {
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
              className="w-full bg-transparent  text-sm text-gray-600 placeholder-gray-500"
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
      </main>
    </div>
  );
}
