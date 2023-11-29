import { Link } from "react-router-dom";

import useProject from "../hooks/useProject";

import Chip from "../components/Chip";
import Rocket from "../icons/Rocket";
import Code from "../icons/Code";

export default function ProjectView() {
  const { currentProject } = useProject();
  return (
    <div className="flex justify-center mx-auto max-w-7xl animate-appear">
      {currentProject ? (
        <div className="flex flex-col gap-8">
          <Link to="/projects" className="w-fit">
            ← Back to Projects
          </Link>
          <div className="flex flex-col max-w-4xl gap-6">
            <div>
              <h1>{currentProject.title}</h1>
              <p>{currentProject.description}</p>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <Link
                to={currentProject.tryItOutUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-1 font-medium text-white transition-all border rounded-full dark:hover:text-white dark:text-white group hover:border-emerald-600 border-emerald-500 bg-emerald-500 hover:bg-emerald-600 hover:text-white hover:no-underline w-fit"
              >
                <span>Try it Out</span>
                <Rocket className="w-4 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
              <Link
                to={currentProject.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-1 font-medium transition-all border rounded-full border-primary text-primary hover:bg-primary dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-400 dark:hover:text-white hover:text-white hover:no-underline w-fit"
              >
                <span>See the Code</span>
                <Code className="w-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {currentProject.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
          </div>
          <hr className="border-grayscale-50 dark:border-secondary-600" />

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-16 md:flex-row">
              <div className="min-w-[50%] min-h-[25rem]">
                <iframe
                  title={`project-video-${currentProject.title}`}
                  className="w-full h-full"
                  src={currentProject.videoUrl}
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col gap-4">
                <h2>What is it?</h2>
                {currentProject.whatIsIt.map((paragraph, index) => (
                  <p key={`what-is-it-${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2>How it Works</h2>
              {currentProject.howItWorks.map((paragraph, index) => (
                <p key={`how-it-works-${index}`}>{paragraph}</p>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h2>How it's Built</h2>
              {currentProject.howItsBuilt.map((paragraph, index) => (
                <p key={`how-its-built-${index}`}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 text-center">
          <h1>Oops!</h1>
          <p>
            That project doesn't exist. Go back to{" "}
            <Link to="/projects">Projects</Link>.
          </p>
        </div>
      )}
    </div>
  );
}
