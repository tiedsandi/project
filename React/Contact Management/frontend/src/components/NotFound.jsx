const NotFound = () => (
  <div className="bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-6xl font-bold text-gray-800 mb-4 text-white">404</h1>
    <h2 className="text-2xl font-semibold text-gray-700 mb-2 text-white">
      Page Not Found
    </h2>
    <p className="text-gray-400 mb-6">
      Sorry, the page you are looking for does not exist.
    </p>
    <a
      href="/dashboard"
      className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      Go Home
    </a>
  </div>
);

export default NotFound;
