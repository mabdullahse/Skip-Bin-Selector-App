const ErrorAlert = ({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) => (
  <div className="flex flex-col items-center justify-center bg-red-800/30 border border-red-700 text-red-400 rounded-md p-4 mb-6">
    <div className="flex items-center gap-2">
      <svg
        className="h-5 w-5 text-red-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M18.364 5.636L5.636 18.364M5.636 5.636L18.364 18.364"
        />
      </svg>
      <p className="text-sm font-medium">{message}</p>
    </div>
    <button
      onClick={onRetry}
      className="mt-2 px-4 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-xs transition"
    >
      Try Again
    </button>
  </div>
);
export default ErrorAlert;
