export default function Card() {
  return (
    <div className="d-flex justify-content-center user-select-none">
      <div
        className=" card card-body p-4 m-2 "
        style={{ maxWidth: "450px", width: "100%" }}
      >
        <div className="d-flex flex-row gap-2">
          <p className="fw-bold">Name: </p>
          <p className="align-content-end">Shanthi Arunachalam</p>
        </div>
        <div className="d-flex flex-row gap-2">
          <p className="fw-bold">Designation: </p>
          <p className="align-content-end">Associate HTML5 Developer</p>
        </div>

        <div className="d-flex flex-row gap-2">
          <p className="fw-bold">Experience: </p>
          <p className="align-content-end">12 years 6 month</p>
        </div>

        <div className="d-flex flex-row gap-2">
          <p className="fw-bold">Industry: </p>
          <p className="align-content-end">Game and E-Learning</p>
        </div>
      </div>
    </div>
  );
}
