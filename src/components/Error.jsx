import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
        <div className="bg-white shadow-lg rounded-lg max-w-md w-full text-center p-8">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            <h6>{err?.status}</h6>
            <h6>{err?.statusText}</h6>
            <h6>{err?.error?.message}</h6>
          </h1>
          <p className="text-gray-600 mb-6">
            An unexpected error has occurred. Please try again later or contact
            support if the problem persists.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition duration-200"
          >
            Reload Page
          </button>
        </div>
      </div>
    </>
  );
};

export default Error;
