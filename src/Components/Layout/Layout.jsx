import { motion } from "framer-motion";

const Layout = ({ children, className }) => {
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
      className={[
        "w-2/3 mx-auto h-screen flex flex-col justify-center",
        className,
      ].join(" ")}
    >
      {children}
    </motion.div>
  );
};

export default Layout;
