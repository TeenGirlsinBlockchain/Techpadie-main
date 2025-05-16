import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome back</h1>
        <p className="text-gray-700 mb-6">
          We’ve sent you a code to confirm your registration
        </p>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Enter email address"
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#227FA1]"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="bg-[#227FA1] hover:bg-[#1c6a89] text-white font-medium flex cursor-pointer items-center justify-center mx-auto mt-6 w-full md:w-[414px] h-[44px] rounded-[10px]"
          >
            Login
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <span
              href="/signup"
              className="text-[#227FA1] hover:underline font-medium cursor-pointer"
            >
              <a href="/signup">Sign up here</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
