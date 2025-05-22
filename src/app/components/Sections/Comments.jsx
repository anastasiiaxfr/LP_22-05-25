import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import ava1 from "@/app/assets/img/comments/ava1.png";
import ava2 from "@/app/assets/img/comments/ava2.png";
import stars from "@/app/assets/img/stars.svg";

const data = [
  {
    title: "“Love mathematics because of Besnik Academy”",
    desc: '"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."',
    name: "Wilson Thai",
    info: "Ontario, Canada",
    ava: ava1,
  },
  {
    title: "“There is so much to see and do all over world”",
    desc: '"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."',
    name: "Milena Belmar",
    info: "Argentina",
    ava: ava2,
  },
  {
    title: "“Love mathematics because of Besnik Academy”",
    desc: '"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."',
    name: "Wilson Thai",
    info: "Ontario, Canada",
    ava: ava1,
  },
  {
    title: "“There is so much to see and do all over world”",
    desc: '"The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal."',
    name: "Milena Belmar",
    info: "Argentina",
    ava: ava2,
  },
];

function Comments() {
  return (
    <section className="section section_comments">
      <div className="container">
        <div className="hgroup">
          <h2>What people think about</h2>
        </div>

        <div className="px-10">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full comments"
          >
            <CarouselContent>
              {data.map((i, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <article className="comment">
                      <div className="comment_title">{i.title}</div>
                      <div className="comment_desc">{i.desc}</div>
                      <div className="comment_author">
                        <Image
                          src={i.ava}
                          alt={i.name}
                          className="comment_author_ava"
                        />
                        <div className="comment_author_body">
                          <p>
                            <b>{i.name}</b>
                          </p>
                          <p className="mb-2">
                            <small>{i.info}</small>
                          </p>
                          <Image src={stars} alt="rating 5/5" />
                        </div>
                      </div>
                    </article>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Comments;
