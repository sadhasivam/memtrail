import { Key } from "react";

interface Tag {
  tagName: string;
  tagValue: string[];
}

interface BoloTagProps {
  tags: Tag[];
}

export const BoloTag: React.FC<BoloTagProps> = ({ tags }) => {
  return (
    <div className="py-3 container">
      {tags.map((tag, index: Key | null | undefined) => (
        <div key={index} className="flex">
          <span className="text-red-400">
            <svg
              className="w-6 h-6 px-1 text-red-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 19 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.583 5.445h.01M8.86 16.71l-6.573-6.63a.993.993 0 0 1 0-1.4l7.329-7.394A.98.98 0 0 1 10.31 1l5.734.007A1.968 1.968 0 0 1 18 2.983v5.5a.994.994 0 0 1-.316.727l-7.439 7.5a.975.975 0 0 1-1.385.001Z"
              />{" "}
            </svg>
          </span>
          {tag.tagName}: {tag.tagValue.join(", ")}
        </div>
      ))}
    </div>
  );
};
