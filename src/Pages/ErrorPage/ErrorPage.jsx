import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <h1 className="text-9xl font-extrabold text-emerald-600 mb-4">404</h1>
      <p className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
        Oops! Page not found.
      </p>
      <p className="mb-8 text-gray-600 max-w-md text-center">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
