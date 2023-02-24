import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Chip from "./Chip";
import useProject from "../../hooks/useProject";
import { ReactComponent as LinkIcon } from "../../assets/icons/link.svg";
import { ReactComponent as Spinner } from "../../assets/icons/spinner.svg";
import { useState } from "react";
import { useEffect } from "react";

export default function Project() {
  const navigate = useNavigate();
  const project = useProject();
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!project) {
        setError(true);
      }
    }, 3000);
  }, [project]);

  return (
    <>
      {!project ? (
        <div className="flex flex-col items-center justify-center w-full h-screen">
          {error ? (
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
          ) : (
            <Spinner className="w-16 h-16 text-neutral-150 animate-spin" />
          )}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-start my-4 md:py-[10vh] md:px-[15vw] rounded-xl w-full h-auto">
          <Link
            to="/projects"
            className="text-sm text-primary-200 hover:underline my-4"
          >
            ← Back to Projects
          </Link>
          <h2 className="text-3xl my-4 font-display font-bold">
            {project?.title}
          </h2>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-primary-200 my-2 flex flex-row justify-start items-center w-fit underline-offset-1 hover:underline"
          >
            See the code
            <LinkIcon />
          </a>
          <div className="flex flex-row gap-2 my-4">
            {project.tech.map((item) => (
              <Chip
                key={item}
                item={item}
                onClick={() => navigate(`/projects?frameworks=${item}`)}
              />
            ))}
          </div>
          <h3 className="text-xl py-4 font-display font-bold">Description</h3>
          <p className="my-2">{project?.content?.DESCRIPTION}</p>
          <h3 className="text-xl py-4 font-display font-bold">
            How I Built It
          </h3>
          {project?.content?.HOW_I_BUILT_IT?.map((paragraph, i) => (
            <div key={`${paragraph}-${i}`}>
              <p className="my-2">{paragraph}</p>
            </div>
          ))}
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
              src={project?.video}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
