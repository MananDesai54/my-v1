import { useMemo } from "react";
import { work as experience } from "./experiences";
import ListRenderer from "../ListRender/ListRenderer";

const Work = () => {
  const works = useMemo(() => experience, []);
  return <ListRenderer list={works} title="Work Experience" number="2" />;
};

export default Work;
