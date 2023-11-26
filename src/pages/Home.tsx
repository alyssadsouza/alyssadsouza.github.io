import HomeIcon from "../components/Icons/Home";

function Home() {
  return (
    <div className="flex flex-col justify-center flex-grow h-full gap-12 lg:gap-24 md:flex-row">
      <div className="flex flex-col justify-center max-w-lg gap-4 md:mb-32">
        <h1 className="text-5xl">I'm Alyssa</h1>
        <h2>I'm a software engineering undergrad.</h2>
        <p>
          I'm a second-year at the University of Waterloo and as a co-op student
          I’m actively looking for software development internships. This
          portfolio showcases my skills and some of the projects I’ve worked on.{" "}
        </p>
      </div>
      <div className="flex flex-grow max-w-2xl p-8 min-w-[24rem]">
        <HomeIcon className="w-full h-full" />
      </div>
    </div>
  );
}

export default Home;
