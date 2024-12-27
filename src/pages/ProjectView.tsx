import { Link } from "react-router-dom";

import useProject from "../hooks/useProject";

import Chip from "../components/Chip";
import Rocket from "../icons/Rocket";
import Code from "../icons/Code";
import TableOfContents from "../components/TOC";

export default function ProjectView() {
  const { currentProject } = useProject();

  const Content = currentProject?.content
    ? currentProject.content
    : () => <></>;

	const sections = [
		{ id: "what-is-it", title: "What is it?" },
		{ id: "how-it-works", title: "How it Works" },
		];

  return (
    <div className="flex max-w-7xl mx-auto animate-appear">
      {currentProject ? (
        <div className="flex flex-col gap-8">
          <Link to="/projects" className="w-fit">
            ← Back to Projects
          </Link>
          <div className="flex flex-col max-w-4xl gap-6">
            <div>
              <h1>{currentProject.title}</h1>
              <p className="text-sm text-gray-500 dark:text-secondary-300">{currentProject.description}</p>
            </div>
            {(currentProject.tryItOutUrl || currentProject.repositoryUrl) && (
              <div className="flex flex-wrap items-center gap-4 text-sm">
                {currentProject.tryItOutUrl && (
                  <Link
                    to={currentProject.tryItOutUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-1 font-medium text-white transition-all border rounded-full dark:hover:text-white dark:text-white group hover:border-emerald-600 border-emerald-500 bg-emerald-500 hover:bg-emerald-600 hover:text-white hover:no-underline w-fit"
                  >
                    <span>Try it Out</span>
                    <Rocket className="w-4 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Link>
                )}
                {currentProject.repositoryUrl && (
                  <Link
                    to={currentProject.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-1 font-medium transition-all border rounded-full border-primary text-primary hover:bg-primary dark:border-primary-300 dark:text-primary-300 dark:hover:bg-primary-300 dark:hover:text-white hover:text-white hover:no-underline w-fit"
                  >
                    <span>See the Code</span>
                    <Code className="w-4" />
                  </Link>
                )}
              </div>
            )}
            <div className="flex flex-wrap gap-2">
              {currentProject.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
          </div>
          {/* <hr className="border-grayscale-50 dark:border-secondary-600" /> */}

		  <div className="flex justify-between gap-16">
			<div className="flex flex-col gap-12 max-w-4xl content">
				<iframe
				title={`project-video-${currentProject.title}`}
				className="w-full h-[35rem]"
				src={currentProject.videoUrl}
				allowFullScreen
				></iframe>
				<Content />
			</div>
			<TableOfContents sections={sections} />
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
