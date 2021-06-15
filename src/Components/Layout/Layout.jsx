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
      className={["mx-8 flex flex-col md:w-2/3 md:mx-auto", className].join(
        " "
      )}
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
