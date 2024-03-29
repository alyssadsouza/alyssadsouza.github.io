import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4 p-4 bg-neutral">
        <h1 className="text-7xl">404</h1>
        <h2>Oops!</h2>
        <p>That page doesn't exist. Go back to <Link to="/">homepage</Link>?</p>
    </div>
  );
}

export default NotFound;
