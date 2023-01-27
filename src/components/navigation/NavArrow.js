const NavArrow = ({next, setMenuItem, classes}) => {
    return (
        <div className={`w-full flex flex-row justify-center mb-[5%] ${classes}`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-neutral-100 cursor-pointer hover:text-neutral-200 transition-all"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={() => setMenuItem(next)}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" className="hidden sm:block" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" className="sm:hidden" />
        </svg>
      </div>
    );
}

export default NavArrow;