import { Link } from "react-router";

export default function HomePage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4 text-white">
        Welcome to Contact Management
      </h1>
      <p className="text-lg mb-8 text-gray-300">
        Manage your contacts easily and efficiently.
      </p>
      <Link
        to={"dashboard/contacts"}
        className="px-8 py-3 text-base rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
