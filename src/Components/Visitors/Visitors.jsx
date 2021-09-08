import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";
import classes from "./visitors.module.css";

const Visitors = (props) => {
  const [views, setViews] = useState({
    views: undefined,
    uniqueViews: undefined,
  });
  const [show, setShow] = useState(true);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/views`)
      .then((res) => res.json())
      .then((result) => {
        setViews({
          views: result.views,
          uniqueViews: result.uniqueViews,
        });
      });
  }, [show, props.postView]);
  return (
    <div className="relative">
      <MdVisibility
        size={30}
        onClick={() => setShow(true)}
        className="cursor-pointer"
      />
      {views.views !== undefined && views.uniqueViews !== undefined && (
        <div
          className={[
            classes.Views,
            "fixed right-5 md:right-1 p-2 m-2 rounded transition-all duration-300",
          ].join(" ")}
          style={{
            opacity: show ? 1 : 0,
            zIndex: show ? 1000 : -1,
            pointerEvents: show ? "all" : "none",
          }}
        >
          <p>Views: {views.views}</p>
          <p>Unique-views: {views.uniqueViews}</p>
          <FaTimes
            size={16}
            color="var(--background-primary)"
            className="absolute right-1 top-1 cursor-pointer"
            onClick={() => setShow(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Visitors;
