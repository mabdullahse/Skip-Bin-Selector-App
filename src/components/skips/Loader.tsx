const Loader = () => (
  <div className="flex flex-col items-center justify-center py-10 text-gray-300">
    <svg
      className="animate-spin h-8 w-8 mb-2 text-blue-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      ></path>
    </svg>
    <p className="text-sm">Loading products...</p>
  </div>
);
export default Loader;
