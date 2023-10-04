import "./hover.scss";

export default function Hover({ display, date }) {
  console.log(date);
  return (
    <div className={`hover ${display && "visible"}`}>
      <h3 className="hover__header">Villa Booking - </h3>

      {/* Date */}
      <h4>{date}</h4>

      <p>
        Villa Frangipani Canguu <br />
        No.23 JI. Dalem Gede <br />
        Bali, 80351 <br />
        Indonesia
      </p>

      <p>
        Villa Frangipani is booked for these dates. If you would like to select
        other dates, pelase check here.
      </p>
    </div>
  );
}
