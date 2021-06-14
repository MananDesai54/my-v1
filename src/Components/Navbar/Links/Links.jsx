import React from "react";
import Link from "../../Link/Link";

const Links = () => {
  return (
    <div className="flex">
      <Link name="About" path="#about" />
      <Link name="Work" path="#work" />
      <Link name="Tech" path="#tech" />
      <Link name="Projects" path="#project" />
      <Link name="Education" path="#education" />
      <Link name="Connect" path="#connect" />
    </div>
  );
};

export default Links;
