import {
  attributes as f1tenthAttributes,
  ReactComponent as f1tenthHtml,
} from "./f1tenth.md";

import {
  attributes as savvantAttributes,
  ReactComponent as savvantHtml,
} from "./savvant.md";

import {
  attributes as rentriteAttributes,
  ReactComponent as rentriteHtml,
} from "./rent-rite.md";

export type Project = {
  id: string;
  title: string;
  creationDate: string;
  tags: string[];
  repositoryUrl?: string;
  tryItOutUrl?: string;
  thumbnailUrl: string;
  videoUrl: string;
  description: string;
  content: React.FC;
};

export const projects: Project[] = [
  { ...f1tenthAttributes, content: f1tenthHtml },
  { ...savvantAttributes, content: savvantHtml },
  { ...rentriteAttributes, content: rentriteHtml },
];
