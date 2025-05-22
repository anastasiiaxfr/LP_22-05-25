import Image from "next/image";
import img from "@/app/assets/img/img2.png";
import i4 from "@/app/assets/img/icons/i1.svg";
import i2 from "@/app/assets/img/icons/i2.svg";
import i3 from "@/app/assets/img/icons/i3.svg";
import i1 from "@/app/assets/img/icons/i4.svg";

const data = [
  {
    icon: i1,
    title: "VIRTUAL LEARNING",
    desc: "The only costs are for standard school supplies and voluntary field trips.",
  },
  {
    icon: i2,
    title: "Meaningful Education",
    desc: "Many of our Connections Academy schools have additional accreditations.",
  },
  {
    icon: i3,
    title: "ONLINE CURRICULUM",
    desc: "Our curriculum prepares students to go further in life by giving them support.",
  },
  {
    icon: i4,
    title: "SOCIAL INTERACTION",
    desc: "Students at Connections Academy collaborate on projects together.",
  },
];

function Services() {
  return (
    <section className="section section_services">
      <div className="container">
        <div className="row_1">
          <div>
            <Image src={img} alt="" className="mx-auto lg:mx-0" />
          </div>
          <div>
            <h2>How our online public school works</h2>

            <div className="services">
              {data.map((i, ind) => (
                <div className="service" key={ind}>
                  <div className="service_icon">
                    <Image src={i.icon} alt={i.title} />
                  </div>
                  <h3 className="service_title">{i.title.toLowerCase()}</h3>
                  <p className="service_desc">{i.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
