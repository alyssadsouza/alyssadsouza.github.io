import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useProject from "../../hooks/useProject";
import Chip from "./Chip";
import ImageCarousel from "./ImageCarousel";
import { ReactComponent as CodeIcon } from "../../assets/icons/code.svg";

export default function Project() {
  const navigate = useNavigate();
  const project = useProject();

  return (
    <div className="animate-appear md:mt-[7vh] md:h-[93vh] md:overflow-y-auto md:overflow-x-hidden scrollbar-light">
      {!project ? (
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <div className="flex flex-col items-center gap-4 animate-appear">
            <h1 className="text-4xl font-bold">Oops!</h1>
            <p>It looks like that project doesn't exist.</p>
            <Link
              to="/projects"
              className="transition-all px-4 py-2 bg-secondary-dark/80 text-light-text rounded-full text-sm hover:bg-secondary-dark/100"
            >
              Go back to projects
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-start my-4 md:py-[10vh] md:px-[15vw] rounded-xl w-full h-auto">
          <Link
            to="/projects"
            className="text-sm text-primary-200 hover:underline my-4"
          >
            ← Back to Projects
          </Link>
          <h2 className="text-3xl mt-2 mb-1 font-display font-bold">
            {project.title}
          </h2>
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-row items-center flex-wrap gap-2 my-4">
              {project.tech.map((item) => (
                <Chip
                  key={item}
                  item={item}
                  onClick={() => navigate(`/projects?frameworks=${item}`)}
                />
              ))}
            </div>
            <div className="h-full flex justify-center items-center">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="peer"
              >
                <CodeIcon className="text-[#8a8a8a] w-7 h-7 p-1 rounded-full bg-neutral-150/50 hover:bg-neutral-150/100 transition-all" />
              </a>
              <p className="peer-hover:opacity-100 peer-hover:visible invisible opacity-0 transition-all px-2 bg-black/80 text-white rounded-lg text-[0.6rem] absolute translate-y-8">
                See the code
              </p>
            </div>
          </div>
          <h3 className="text-xl py-4 font-display font-bold">Description</h3>
          <p className="my-2">{project.content?.DESCRIPTION}</p>
          <h3 className="text-xl py-4 font-display font-bold">
            How I Built It
          </h3>
          {project.content?.HOW_I_BUILT_IT?.map((paragraph, i) => (
            <div key={`${paragraph}-${i}`}>
              <p className="my-2">{paragraph}</p>
            </div>
          ))}
          {project.video ? (
            <div className="flex flex-col text-left">
            <h3 className="text-xl font-bold font-display py-4">Demo</h3>
            <p className="pb-4 md:py-0 my-2">
              This was my team's submission video demoing the application we
              built. You can see the full submission on Devpost{" "}
              <a
                href={project.devpostLink}
                target="_blank"
                rel="noreferrer"
                className="text-primary-200 underline-offset-1 hover:underline"
              >
                here
              </a>
              .
            </p>
            <iframe
              title={`project-video-${project?.project}`}
              className="w-full md:py-4 h-[50vh] rounded-xl"
              src={project.video}
              allowFullScreen
            ></iframe>
          </div>
          ) : (
            <div className="my-4">
              <ImageCarousel images={project.images} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
