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
      <div
        className="h-28 bg-gray-400"
        style={{
          width: "0.5px",
        }}
      />
    </div>
  );
};

export default Mail;
