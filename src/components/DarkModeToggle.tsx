import DarkMode from "../icons/DarkMode";
import LightMode from "../icons/LightMode";
import useDarkMode from "../hooks/useDarkMode";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <button
      className="flex gap-2 px-1 py-[0.2rem] rounded-full bg-neutral-200 dark:bg-secondary-600 hover:bg-neutral-300 dark:hover:bg-secondary-500 transition-all"
      onClick={() => setDarkMode(!darkMode)}
    >
      <div
        className={`p-[0.25rem] ${
          !darkMode ? "bg-primary-400 rounded-full" : ""
        }`}
      >
        <LightMode
          className={`w-4 ${
            !darkMode
              ? "text-white"
              : "text-secondary-400 dark:text-secondary-200"
          }`}
        />
      </div>
      <div
        className={`p-[0.25rem] ${
          darkMode ? "bg-secondary-300 rounded-full" : ""
        }`}
      >
        <DarkMode
          className={`w-4 ${
            darkMode ? "text-white" : "text-neutral-400 dark:text-secondary-200"
          }`}
        />
      </div>
    </button>
  );
};

export default DarkModeToggle;
