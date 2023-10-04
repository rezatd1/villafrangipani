import "./RateCard.scss";

export default function RateCard({ title, list, bigCard }) {
  return (
    <article className={`${bigCard ? "big--card" : "small--card"}  p-4 `}>
      <h2 className={`title ${bigCard ? "color--white" : "color--cyan"}`}>
        {title}
      </h2>

      <ul className={`list ${bigCard ? "list--no--dot" : ""}`}>
        {list.map((item) => (
          <li className="card__listItem">{item}</li>
        ))}
      </ul>
    </article>
  );
}
