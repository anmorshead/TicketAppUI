import { useLocation } from "react-router-dom";

function ErrorPage() {
  const location = useLocation(); //use to access passed down state
  const message = location.state?.message || "Something went wrong.";
  const errors = location.state?.errors || [];

  return (
    <div className="min-h-screen bg-red-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded shadow-md text-center m-20 max-w-xl">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Error</h1>
        <p className="text-gray-700 mb-4">{message}</p>

        {errors.length > 0 && ( //check if errors exist
          <ul className="text-left list-disc list-inside text-red-500">
            {errors.map((err, index) => (
              <li key={index}>
                {err.field ? `${err.field}: ` : ""}
                {err.message}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ErrorPage;
