import Navigation from "./components/Navigation";
import CardComponent from "./components/Card";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Navigation />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Top Section with Greeting */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Welcome back Elijah</h1>
            <p className="text-gray-600 mt-2">
              Top courses you may like to enroll in today!
            </p>
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

      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         
          <CardComponent
            level="Beginner"
            learners={120}
            rating={5.0}
            title="Introduction to web development using HTML, CSS, and JavaScript"
            instructor="Chris Walter"
            imageUrl="/images/course1.png"
          />
          <CardComponent
            level="Beginner"
            learners={120}
            rating={5.0}
            title="Introduction to Social Media Management and Google Ads"
            instructor="Chris Walter"
            imageUrl="/images/course2.png"
          />
          <CardComponent
            level="Beginner"
            learners={120}
            rating={5.0}
            title="Introduction to Digital Marketing and Salesforce"
            instructor="Chris Walter"
            imageUrl="/images/course3.png"
          />
        </div>
      </main>
    </div>
  );
}
