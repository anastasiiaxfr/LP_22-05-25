import Link from "next/link";
import { Button } from "@/components/ui/button";

const data = [
  {
    type: "Regular",
    price: "65",
    slug: "/",
    features: [
      "1 Day Event",
      "1 Speaker",
      "Interaction Sessions",
      "35 Classes",
    ],
  },
  {
    type: "Medium",
    price: "95",
    slug: "/",
    features: ["1 Day Event", "1 Speaker", "Interaction", "65 Classes"],
  },
  {
    type: "Premium",
    price: "445",
    slug: "/",
    features: ["1 Day Event", "1 Speaker", "Interaction", "95 Classes"],
  },
];

function Prices() {
  return (
    <section className="section section_prices">
      <div className="container">
        <div className="hgroup">
          <h2>
            Transform your life through <br /> education
          </h2>
          <Button variant="outline" className="btn_bd px-8 py-6">
            Upgrade now
          </Button>
        </div>

        <div className="prices">
          {data.map((i, ind) => (
            <article className="price" key={ind}>
              <div className="price_header">{i.type}</div>
              <div className="price_body">
                <div className="price_cost">
                  <sup>$</sup>
                  <b>{i.price}</b>
                </div>
                <ul className="list sm:flex lg:grid sm:justify-center lg:justify-start">
                  {i.features.map((j, ind) => (
                    <li key={ind}>{j}</li>
                  ))}
                </ul>
                <Button variant="outline" className="price_btn">
                  Buy Plan
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Prices;
