import "./rates.scss";

import RateCard from "../../../components/rateCards/RateCard";

// Sources
import {
  smallCards,
  bigCard,
  rateInclusions,
} from "../../../resources/RatesResources";

export default function Rates() {
  const { title, list } = bigCard;
  return (
    <section className="container py-5">
      <h1 className="container__header text-sm-center">Rates</h1>

      <div className="wrapper__1 py-4">
        {smallCards.map(({ title, list }) => (
          <RateCard bigCard={false} title={title} list={list} />
        ))}
      </div>

      <div className="wrapper__2">
        <RateCard bigCard={true} title={title} list={list} />
        <p className="par">
          Above Rates are quoted in US Dollars per night and are subject to
          15.5% tax & service charge. Rates are valid until 31 March, 2024
        </p>
        <p className="par disscout">
          Discounts for stays of 14 or more nights: 10%
        </p>
      </div>

      <div className="wrapper__3">
        <h2 className="title">{rateInclusions.title}</h2>
        <ul className="list">
          {rateInclusions.list.map((item, index) => (
            <li className="listItem" key={`item-${index}`}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
