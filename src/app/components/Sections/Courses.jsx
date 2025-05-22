import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import img1 from "@/app/assets/img/courses/c1.jpg";
import img2 from "@/app/assets/img/courses/c2.jpg";
import img3 from "@/app/assets/img/courses/c3.jpg";
import i1 from "@/app/assets/img/icons/time.svg";
import i2 from "@/app/assets/img/icons/user.svg";

import { ArrowRight, Clock4, Users } from "lucide-react";

const data = [
  {
    img: img1,
    title: "Hands-On Python & R In Data Science",
    date: "4 monts",
    reviews: "1,45,690",
    slug: "/",
  },
  {
    img: img2,
    title: "Science and Machine Learning Bootcamp",
    date: "4 monts",
    reviews: "1,45,690",
    slug: "/",
  },
  {
    img: img3,
    title: "The Python Mega Course:Real Applications",
    date: "4 monts",
    reviews: "1,45,690",
    slug: "/",
  },
];

function Courses() {
  return (
    <section className="section section_courses">
      <div className="container">
        <div className="hgroup">
          <h2>Our new courses</h2>
          <Button variant="outline" className="btn_bd px-8 py-6">
            View all courses
          </Button>
        </div>

        <div className="courses">
          {data.map((i, ind) => (
            <Link className="card" key={ind} href={i.slug}>
              <div className="card_img">
                <Image src={i.img} alt={i.title} />
              </div>
              <h3 className="card_title">{i.title}</h3>
              <div className="card_info">
                <span>
                  <Image src={i2} alt="reviews" />
                  {i.reviews}
                </span>
                <span>
                  <Image src={i1} alt="public date" />
                  {i.date}
                </span>
              </div>
              <Button variant="outline" className="btn_bd">
                Read more <ArrowRight />
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
