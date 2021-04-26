import { motion } from "framer-motion";

const Splash = (props) => {
  const pathVariant = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",

      transition: {
        duration: 2,
        ease: "linear",
        fill: {
          delay: 1.5,
          duration: 0.5,
        },
      },
    },
  };

  return (
    <motion.div
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 2,
        opacity: 0,
        transformOrigin: "center",
        display: "none",
        transition: {
          delay: 3,
          duration: 0.3,
          display: {
            delay: 3.3,
          },
        },
      }}
      className="h-screen w-screen flex justify-center items-center overflow-hidden z-10 absolute top-0 left-0"
      style={{
        backgroundColor: "var(--splash-screen)",
      }}
    >
      <motion.svg
        initial="hidden"
        animate="visible"
        width="466"
        height="60"
        viewBox="0 0 466 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="path-1-outside-1"
          maskUnits="userSpaceOnUse"
          x="0.954163"
          y="0.208008"
          width="465"
          height="60"
          fill="black"
        >
          <rect
            fill="white"
            x="0.954163"
            y="0.208008"
            width="465"
            height="60"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariant}
            d="M53.8582 7.17601V57H47.3062V19.848L30.7462 57H26.1382L9.50616 19.776V57H2.95416V7.17601H10.0102L28.4422 48.36L46.8742 7.17601H53.8582Z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariant}
            d="M62.5218 37.128C62.5218 33.096 63.3378 29.568 64.9698 26.544C66.6018 23.472 68.8338 21.096 71.6658 19.416C74.5458 17.736 77.7378 16.896 81.2418 16.896C84.6978 16.896 87.6978 17.64 90.2418 19.128C92.7858 20.616 94.6818 22.488 95.9298 24.744V17.544H102.554V57H95.9298V49.656C94.6338 51.96 92.6898 53.88 90.0978 55.416C87.5538 56.904 84.5778 57.648 81.1698 57.648C77.6658 57.648 74.4978 56.784 71.6658 55.056C68.8338 53.328 66.6018 50.904 64.9698 47.784C63.3378 44.664 62.5218 41.112 62.5218 37.128ZM95.9298 37.2C95.9298 34.224 95.3298 31.632 94.1298 29.424C92.9298 27.216 91.2978 25.536 89.2338 24.384C87.2178 23.184 84.9858 22.584 82.5378 22.584C80.0898 22.584 77.8578 23.16 75.8418 24.312C73.8258 25.464 72.2178 27.144 71.0178 29.352C69.8178 31.56 69.2178 34.152 69.2178 37.128C69.2178 40.152 69.8178 42.792 71.0178 45.048C72.2178 47.256 73.8258 48.96 75.8418 50.16C77.8578 51.312 80.0898 51.888 82.5378 51.888C84.9858 51.888 87.2178 51.312 89.2338 50.16C91.2978 48.96 92.9298 47.256 94.1298 45.048C95.3298 42.792 95.9298 40.176 95.9298 37.2Z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariant}
            d="M132.85 16.824C137.65 16.824 141.538 18.288 144.514 21.216C147.49 24.096 148.978 28.272 148.978 33.744V57H142.498V34.68C142.498 30.744 141.514 27.744 139.546 25.68C137.578 23.568 134.89 22.512 131.482 22.512C128.026 22.512 125.266 23.592 123.202 25.752C121.186 27.912 120.178 31.056 120.178 35.184V57H113.626V17.544H120.178V23.16C121.474 21.144 123.226 19.584 125.434 18.48C127.69 17.376 130.162 16.824 132.85 16.824Z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariant}
            d="M157.233 37.128C157.233 33.096 158.049 29.568 159.681 26.544C161.313 23.472 163.545 21.096 166.377 19.416C169.257 17.736 172.449 16.896 175.953 16.896C179.409 16.896 182.409 17.64 184.953 19.128C187.497 20.616 189.393 22.488 190.641 24.744V17.544H197.265V57H190.641V49.656C189.345 51.96 187.401 53.88 184.809 55.416C182.265 56.904 179.289 57.648 175.881 57.648C172.377 57.648 169.209 56.784 166.377 55.056C163.545 53.328 161.313 50.904 159.681 47.784C158.049 44.664 157.233 41.112 157.233 37.128ZM190.641 37.2C190.641 34.224 190.041 31.632 188.841 29.424C187.641 27.216 186.009 25.536 183.945 24.384C181.929 23.184 179.697 22.584 177.249 22.584C174.801 22.584 172.569 23.16 170.553 24.312C168.537 25.464 166.929 27.144 165.729 29.352C164.529 31.56 163.929 34.152 163.929 37.128C163.929 40.152 164.529 42.792 165.729 45.048C166.929 47.256 168.537 48.96 170.553 50.16C172.569 51.312 174.801 51.888 177.249 51.888C179.697 51.888 181.929 51.312 183.945 50.16C186.009 48.96 187.641 47.256 188.841 45.048C190.041 42.792 190.641 40.176 190.641 37.2Z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariant}
            d="M227.561 16.824C232.361 16.824 236.249 18.288 239.225 21.216C242.201 24.096 243.689 28.272 243.689 33.744V57H237.209V34.68C237.209 30.744 236.225 27.744 234.257 25.68C232.289 23.568 229.601 22.512 226.193 22.512C222.737 22.512 219.977 23.592 217.913 25.752C215.897 27.912 214.889 31.056 214.889 35.184V57H208.337V17.544H214.889V23.16C216.185 21.144 217.937 19.584 220.145 18.48C222.401 17.376 224.873 16.824 227.561 16.824Z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariant}
            d="M289.211 6.81601C294.683 6.81601 299.411 7.84801 303.395 9.91201C307.427 11.928 310.499 14.832 312.611 18.624C314.771 22.416 315.851 26.88 315.851 32.016C315.851 37.152 314.771 41.616 312.611 45.408C310.499 49.152 307.427 52.032 303.395 54.048C299.411 56.016 294.683 57 289.211 57H273.587V6.81601H289.211ZM289.211 51.6C295.691 51.6 300.635 49.896 304.043 46.488C307.451 43.032 309.155 38.208 309.155 32.016C309.155 25.776 307.427 20.904 303.971 17.4C300.563 13.896 295.643 12.144 289.211 12.144H280.139V51.6H289.211Z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariant}
            d="M360.493 35.76C360.493 37.008 360.421 38.328 360.277 39.72H328.741C328.981 43.608 330.301 46.656 332.701 48.864C335.149 51.024 338.101 52.104 341.557 52.104C344.389 52.104 346.741 51.456 348.613 50.16C350.533 48.816 351.877 47.04 352.645 44.832H359.701C358.645 48.624 356.533 51.72 353.365 54.12C350.197 56.472 346.261 57.648 341.557 57.648C337.813 57.648 334.453 56.808 331.477 55.128C328.549 53.448 326.245 51.072 324.565 48C322.885 44.88 322.045 41.28 322.045 37.2C322.045 33.12 322.861 29.544 324.493 26.472C326.125 23.4 328.405 21.048 331.333 19.416C334.309 17.736 337.717 16.896 341.557 16.896C345.301 16.896 348.613 17.712 351.493 19.344C354.373 20.976 356.581 23.232 358.117 26.112C359.701 28.944 360.493 32.16 360.493 35.76ZM353.725 34.392C353.725 31.896 353.173 29.76 352.069 27.984C350.965 26.16 349.453 24.792 347.533 23.88C345.661 22.92 343.573 22.44 341.269 22.44C337.957 22.44 335.125 23.496 332.773 25.608C330.469 27.72 329.149 30.648 328.813 34.392H353.725Z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariant}
            d="M383.11 57.648C380.086 57.648 377.374 57.144 374.974 56.136C372.574 55.08 370.678 53.64 369.286 51.816C367.894 49.944 367.126 47.808 366.982 45.408H373.75C373.942 47.376 374.854 48.984 376.486 50.232C378.166 51.48 380.35 52.104 383.038 52.104C385.534 52.104 387.502 51.552 388.942 50.448C390.382 49.344 391.102 47.952 391.102 46.272C391.102 44.544 390.334 43.272 388.798 42.456C387.262 41.592 384.886 40.752 381.67 39.936C378.742 39.168 376.342 38.4 374.47 37.632C372.646 36.816 371.062 35.64 369.718 34.104C368.422 32.52 367.774 30.456 367.774 27.912C367.774 25.896 368.374 24.048 369.574 22.368C370.774 20.688 372.478 19.368 374.686 18.408C376.894 17.4 379.414 16.896 382.246 16.896C386.614 16.896 390.142 18 392.83 20.208C395.518 22.416 396.958 25.44 397.15 29.28H390.598C390.454 27.216 389.614 25.56 388.078 24.312C386.59 23.064 384.574 22.44 382.03 22.44C379.678 22.44 377.806 22.944 376.414 23.952C375.022 24.96 374.326 26.28 374.326 27.912C374.326 29.208 374.734 30.288 375.55 31.152C376.414 31.968 377.47 32.64 378.718 33.168C380.014 33.648 381.79 34.2 384.046 34.824C386.878 35.592 389.182 36.36 390.958 37.128C392.734 37.848 394.246 38.952 395.494 40.44C396.79 41.928 397.462 43.872 397.51 46.272C397.51 48.432 396.91 50.376 395.71 52.104C394.51 53.832 392.806 55.2 390.598 56.208C388.438 57.168 385.942 57.648 383.11 57.648Z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariant}
            d="M404.311 37.128C404.311 33.096 405.127 29.568 406.759 26.544C408.391 23.472 410.623 21.096 413.455 19.416C416.335 17.736 419.527 16.896 423.031 16.896C426.487 16.896 429.487 17.64 432.031 19.128C434.575 20.616 436.471 22.488 437.719 24.744V17.544H444.343V57H437.719V49.656C436.423 51.96 434.479 53.88 431.887 55.416C429.343 56.904 426.367 57.648 422.959 57.648C419.455 57.648 416.287 56.784 413.455 55.056C410.623 53.328 408.391 50.904 406.759 47.784C405.127 44.664 404.311 41.112 404.311 37.128ZM437.719 37.2C437.719 34.224 437.119 31.632 435.919 29.424C434.719 27.216 433.087 25.536 431.023 24.384C429.007 23.184 426.775 22.584 424.327 22.584C421.879 22.584 419.647 23.16 417.631 24.312C415.615 25.464 414.007 27.144 412.807 29.352C411.607 31.56 411.007 34.152 411.007 37.128C411.007 40.152 411.607 42.792 412.807 45.048C414.007 47.256 415.615 48.96 417.631 50.16C419.647 51.312 421.879 51.888 424.327 51.888C426.775 51.888 429.007 51.312 431.023 50.16C433.087 48.96 434.719 47.256 435.919 45.048C437.119 42.792 437.719 40.176 437.719 37.2Z"
          />
          <motion.path
            initial="hidden"
            animate="visible"
            variants={pathVariant}
            d="M458.799 11.136C457.551 11.136 456.495 10.704 455.631 9.84001C454.767 8.97601 454.335 7.92001 454.335 6.67201C454.335 5.42401 454.767 4.36801 455.631 3.50401C456.495 2.64001 457.551 2.20801 458.799 2.20801C459.999 2.20801 461.007 2.64001 461.823 3.50401C462.687 4.36801 463.119 5.42401 463.119 6.67201C463.119 7.92001 462.687 8.97601 461.823 9.84001C461.007 10.704 459.999 11.136 458.799 11.136ZM461.967 17.544V57H455.415V17.544H461.967Z"
          />
        </mask>
        <motion.path
          variants={pathVariant}
          initial="hidden"
          animate="visible"
          d="M53.8582 7.17601V57H47.3062V19.848L30.7462 57H26.1382L9.50616 19.776V57H2.95416V7.17601H10.0102L28.4422 48.36L46.8742 7.17601H53.8582Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
        <motion.path
          variants={pathVariant}
          initial="hidden"
          animate="visible"
          d="M62.5218 37.128C62.5218 33.096 63.3378 29.568 64.9698 26.544C66.6018 23.472 68.8338 21.096 71.6658 19.416C74.5458 17.736 77.7378 16.896 81.2418 16.896C84.6978 16.896 87.6978 17.64 90.2418 19.128C92.7858 20.616 94.6818 22.488 95.9298 24.744V17.544H102.554V57H95.9298V49.656C94.6338 51.96 92.6898 53.88 90.0978 55.416C87.5538 56.904 84.5778 57.648 81.1698 57.648C77.6658 57.648 74.4978 56.784 71.6658 55.056C68.8338 53.328 66.6018 50.904 64.9698 47.784C63.3378 44.664 62.5218 41.112 62.5218 37.128ZM95.9298 37.2C95.9298 34.224 95.3298 31.632 94.1298 29.424C92.9298 27.216 91.2978 25.536 89.2338 24.384C87.2178 23.184 84.9858 22.584 82.5378 22.584C80.0898 22.584 77.8578 23.16 75.8418 24.312C73.8258 25.464 72.2178 27.144 71.0178 29.352C69.8178 31.56 69.2178 34.152 69.2178 37.128C69.2178 40.152 69.8178 42.792 71.0178 45.048C72.2178 47.256 73.8258 48.96 75.8418 50.16C77.8578 51.312 80.0898 51.888 82.5378 51.888C84.9858 51.888 87.2178 51.312 89.2338 50.16C91.2978 48.96 92.9298 47.256 94.1298 45.048C95.3298 42.792 95.9298 40.176 95.9298 37.2Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
        <motion.path
          variants={pathVariant}
          initial="hidden"
          animate="visible"
          d="M132.85 16.824C137.65 16.824 141.538 18.288 144.514 21.216C147.49 24.096 148.978 28.272 148.978 33.744V57H142.498V34.68C142.498 30.744 141.514 27.744 139.546 25.68C137.578 23.568 134.89 22.512 131.482 22.512C128.026 22.512 125.266 23.592 123.202 25.752C121.186 27.912 120.178 31.056 120.178 35.184V57H113.626V17.544H120.178V23.16C121.474 21.144 123.226 19.584 125.434 18.48C127.69 17.376 130.162 16.824 132.85 16.824Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
        <motion.path
          variants={pathVariant}
          initial="hidden"
          animate="visible"
          d="M157.233 37.128C157.233 33.096 158.049 29.568 159.681 26.544C161.313 23.472 163.545 21.096 166.377 19.416C169.257 17.736 172.449 16.896 175.953 16.896C179.409 16.896 182.409 17.64 184.953 19.128C187.497 20.616 189.393 22.488 190.641 24.744V17.544H197.265V57H190.641V49.656C189.345 51.96 187.401 53.88 184.809 55.416C182.265 56.904 179.289 57.648 175.881 57.648C172.377 57.648 169.209 56.784 166.377 55.056C163.545 53.328 161.313 50.904 159.681 47.784C158.049 44.664 157.233 41.112 157.233 37.128ZM190.641 37.2C190.641 34.224 190.041 31.632 188.841 29.424C187.641 27.216 186.009 25.536 183.945 24.384C181.929 23.184 179.697 22.584 177.249 22.584C174.801 22.584 172.569 23.16 170.553 24.312C168.537 25.464 166.929 27.144 165.729 29.352C164.529 31.56 163.929 34.152 163.929 37.128C163.929 40.152 164.529 42.792 165.729 45.048C166.929 47.256 168.537 48.96 170.553 50.16C172.569 51.312 174.801 51.888 177.249 51.888C179.697 51.888 181.929 51.312 183.945 50.16C186.009 48.96 187.641 47.256 188.841 45.048C190.041 42.792 190.641 40.176 190.641 37.2Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
        <motion.path
          variants={pathVariant}
          initial="hidden"
          animate="visible"
          d="M227.561 16.824C232.361 16.824 236.249 18.288 239.225 21.216C242.201 24.096 243.689 28.272 243.689 33.744V57H237.209V34.68C237.209 30.744 236.225 27.744 234.257 25.68C232.289 23.568 229.601 22.512 226.193 22.512C222.737 22.512 219.977 23.592 217.913 25.752C215.897 27.912 214.889 31.056 214.889 35.184V57H208.337V17.544H214.889V23.16C216.185 21.144 217.937 19.584 220.145 18.48C222.401 17.376 224.873 16.824 227.561 16.824Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
        <motion.path
          variants={pathVariant}
          initial="hidden"
          animate="visible"
          d="M289.211 6.81601C294.683 6.81601 299.411 7.84801 303.395 9.91201C307.427 11.928 310.499 14.832 312.611 18.624C314.771 22.416 315.851 26.88 315.851 32.016C315.851 37.152 314.771 41.616 312.611 45.408C310.499 49.152 307.427 52.032 303.395 54.048C299.411 56.016 294.683 57 289.211 57H273.587V6.81601H289.211ZM289.211 51.6C295.691 51.6 300.635 49.896 304.043 46.488C307.451 43.032 309.155 38.208 309.155 32.016C309.155 25.776 307.427 20.904 303.971 17.4C300.563 13.896 295.643 12.144 289.211 12.144H280.139V51.6H289.211Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
        <motion.path
          variants={pathVariant}
          initial="hidden"
          animate="visible"
          d="M360.493 35.76C360.493 37.008 360.421 38.328 360.277 39.72H328.741C328.981 43.608 330.301 46.656 332.701 48.864C335.149 51.024 338.101 52.104 341.557 52.104C344.389 52.104 346.741 51.456 348.613 50.16C350.533 48.816 351.877 47.04 352.645 44.832H359.701C358.645 48.624 356.533 51.72 353.365 54.12C350.197 56.472 346.261 57.648 341.557 57.648C337.813 57.648 334.453 56.808 331.477 55.128C328.549 53.448 326.245 51.072 324.565 48C322.885 44.88 322.045 41.28 322.045 37.2C322.045 33.12 322.861 29.544 324.493 26.472C326.125 23.4 328.405 21.048 331.333 19.416C334.309 17.736 337.717 16.896 341.557 16.896C345.301 16.896 348.613 17.712 351.493 19.344C354.373 20.976 356.581 23.232 358.117 26.112C359.701 28.944 360.493 32.16 360.493 35.76ZM353.725 34.392C353.725 31.896 353.173 29.76 352.069 27.984C350.965 26.16 349.453 24.792 347.533 23.88C345.661 22.92 343.573 22.44 341.269 22.44C337.957 22.44 335.125 23.496 332.773 25.608C330.469 27.72 329.149 30.648 328.813 34.392H353.725Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
        <motion.path
          variants={pathVariant}
          initial="hidden"
          animate="visible"
          d="M383.11 57.648C380.086 57.648 377.374 57.144 374.974 56.136C372.574 55.08 370.678 53.64 369.286 51.816C367.894 49.944 367.126 47.808 366.982 45.408H373.75C373.942 47.376 374.854 48.984 376.486 50.232C378.166 51.48 380.35 52.104 383.038 52.104C385.534 52.104 387.502 51.552 388.942 50.448C390.382 49.344 391.102 47.952 391.102 46.272C391.102 44.544 390.334 43.272 388.798 42.456C387.262 41.592 384.886 40.752 381.67 39.936C378.742 39.168 376.342 38.4 374.47 37.632C372.646 36.816 371.062 35.64 369.718 34.104C368.422 32.52 367.774 30.456 367.774 27.912C367.774 25.896 368.374 24.048 369.574 22.368C370.774 20.688 372.478 19.368 374.686 18.408C376.894 17.4 379.414 16.896 382.246 16.896C386.614 16.896 390.142 18 392.83 20.208C395.518 22.416 396.958 25.44 397.15 29.28H390.598C390.454 27.216 389.614 25.56 388.078 24.312C386.59 23.064 384.574 22.44 382.03 22.44C379.678 22.44 377.806 22.944 376.414 23.952C375.022 24.96 374.326 26.28 374.326 27.912C374.326 29.208 374.734 30.288 375.55 31.152C376.414 31.968 377.47 32.64 378.718 33.168C380.014 33.648 381.79 34.2 384.046 34.824C386.878 35.592 389.182 36.36 390.958 37.128C392.734 37.848 394.246 38.952 395.494 40.44C396.79 41.928 397.462 43.872 397.51 46.272C397.51 48.432 396.91 50.376 395.71 52.104C394.51 53.832 392.806 55.2 390.598 56.208C388.438 57.168 385.942 57.648 383.11 57.648Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
        <motion.path
          variants={pathVariant}
          initial="hidden"
          animate="visible"
          d="M404.311 37.128C404.311 33.096 405.127 29.568 406.759 26.544C408.391 23.472 410.623 21.096 413.455 19.416C416.335 17.736 419.527 16.896 423.031 16.896C426.487 16.896 429.487 17.64 432.031 19.128C434.575 20.616 436.471 22.488 437.719 24.744V17.544H444.343V57H437.719V49.656C436.423 51.96 434.479 53.88 431.887 55.416C429.343 56.904 426.367 57.648 422.959 57.648C419.455 57.648 416.287 56.784 413.455 55.056C410.623 53.328 408.391 50.904 406.759 47.784C405.127 44.664 404.311 41.112 404.311 37.128ZM437.719 37.2C437.719 34.224 437.119 31.632 435.919 29.424C434.719 27.216 433.087 25.536 431.023 24.384C429.007 23.184 426.775 22.584 424.327 22.584C421.879 22.584 419.647 23.16 417.631 24.312C415.615 25.464 414.007 27.144 412.807 29.352C411.607 31.56 411.007 34.152 411.007 37.128C411.007 40.152 411.607 42.792 412.807 45.048C414.007 47.256 415.615 48.96 417.631 50.16C419.647 51.312 421.879 51.888 424.327 51.888C426.775 51.888 429.007 51.312 431.023 50.16C433.087 48.96 434.719 47.256 435.919 45.048C437.119 42.792 437.719 40.176 437.719 37.2Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
        <motion.path
          variants={pathVariant}
          initial="hidden"
          animate="visible"
          d="M458.799 11.136C457.551 11.136 456.495 10.704 455.631 9.84001C454.767 8.97601 454.335 7.92001 454.335 6.67201C454.335 5.42401 454.767 4.36801 455.631 3.50401C456.495 2.64001 457.551 2.20801 458.799 2.20801C459.999 2.20801 461.007 2.64001 461.823 3.50401C462.687 4.36801 463.119 5.42401 463.119 6.67201C463.119 7.92001 462.687 8.97601 461.823 9.84001C461.007 10.704 459.999 11.136 458.799 11.136ZM461.967 17.544V57H455.415V17.544H461.967Z"
          stroke="white"
          strokeWidth="4"
          mask="url(#path-1-outside-1)"
        />
      </motion.svg>
    </motion.div>
  );
};

export default Splash;
