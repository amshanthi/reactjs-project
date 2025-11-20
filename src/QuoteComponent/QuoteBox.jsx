export default function QuoteBox({ data }) {
  return (
    <div className="d-flex flex-column justify-content-center text-white">
      {
        <p className=" " style={{ fontSize: "24px" }}>
          "{data["quote"]}"
        </p>
      }
      <span
        className="d-flex flex-row  justify-content-end p-3 "
        style={{ fontSize: "20px" }}
      >
        {data["author"]}
      </span>
    </div>
  );
}
