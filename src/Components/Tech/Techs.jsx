import { useMemo } from "react";
import Layout from "../Layout/Layout";
import Title from "../Title/Title";
import Tech from "./Tech";
import { technologies } from "./technologies";

const Techs = () => {
  const toolsAndTechs = useMemo(() => technologies, []);

  return (
    <Layout className="mt-24">
      <Title title="Tools and Technology" number="3" />
      <div>
        {toolsAndTechs.map((tech, index) => (
          <Tech tech={tech} key={index} />
        ))}
      </div>
    </Layout>
  );
};

export default Techs;
