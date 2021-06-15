import BottomLine from "./BottomLine";

const Mail = () => {
  return (
    <div className="flex flex-col fixed bottom-0 -right-10 items-center overflow-visible">
      <a
        style={{
          transform: "rotateZ(90deg)",
          marginBottom: "100px",
        }}
        href="mailto:manan5401desai@gmail.com"
      >
        manan5401desai@gmail.com
      </a>
      <BottomLine />
    </div>
  );
};

export default Mail;
