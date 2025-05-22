import Image from "next/image";
import b1 from "@/app/assets/img/brands/b1.png";
import b2 from "@/app/assets/img/brands/b2.png";
import b3 from "@/app/assets/img/brands/b3.png";
import b4 from "@/app/assets/img/brands/b4.png";

const brands = [b1, b2, b3, b4];

function Brands() {
  return (
    <section className="section section_brands">
      <div className="container">
        <div className="brands_wrap">
          <div className="rating">
            <div className="rating_val">400+</div>
            <div className="rating_label">
              Universities worldwide that partner with us
            </div>
          </div>
          <div className="brands">
            <div className="brands_inner">
              {brands.map((i, ind) => (
                <Image src={i} alt="" key={ind} />
              ))}
              {brands.map((i, ind) => (
                <Image src={i} alt="" key={ind} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
