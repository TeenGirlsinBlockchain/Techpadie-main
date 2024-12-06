// import Link from "next/link";
import "../global.css";

export default function Page() {
  return (
    <div className="flex items-center justify-center md:min-h-screen md:bg-gray-100 text-start text-[12px] p-4">
      <div className="w-full max-w-md bg-white rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
        <div className="text-[12px] mb-4">
          We’ve sent you a code to confirm your registration
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email Address"
              className="mt-1 block w-full px-3 py-2 border bg-[#F8F8F8] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md text-white bg-[#227FA1] hover:bg-blue-600 mt-9"
          >
            Login
          </button>
          <div className="text-center mt-2">
            Don’t have an account?{" "}
            <span
              className="text-[#227FA1] cursor-pointer"
              // onClick={handleSignUpScreen}
            >
              Sign up here
            </span>
          </div>

          <hr className="h-[2px] bg-black mt-9" />
        </form>
      </div>
    </div>
  );
}
