import { motion } from "framer-motion";

const Layout = ({ children, className, style }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.5,
          staggerChildren: 0.5,
        },
      }}
      className={["w-2/3 mx-auto flex flex-col", className].join(" ")}
      style={{
        ...style,
        minHeight: "95vh",
      }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
