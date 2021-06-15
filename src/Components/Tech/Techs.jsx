import { useMemo } from "react";
import ListRenderer from "../ListRender/ListRenderer";
import { technologies } from "./technologies";

const Techs = () => {
  const toolsAndTechs = useMemo(() => technologies, []);
  return (
    <ListRenderer
      list={toolsAndTechs}
      title="Tools and Technology"
      number="3"
    />
  );
};

export default Techs;
