import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import img from "@/app/assets/img/img1.png";

function Hero() {
  return (
    <section className="section section-hero">
      <div className="container">
        <div className="row">
          <div className="order-2 lg:order-1">
            <h1>Discover best classes for the best learning</h1>
            <p className="subtitle">
              We designed Connections Academy to give students all across the
              nation a tuition-free online public school that lets them learn.
            </p>
            <Button className="px-10 sm:px-15 py-6 cursor-pointer font-[700]">
              Get Started
            </Button>
            <p className="mt-4">
              <small>
                Not sure when to start?{" "}
                <Link
                  href="/"
                  className="underline text-blue-600 hover:no-underline"
                >
                  Learn more
                </Link>
              </small>
            </p>
          </div>
          <div className="order-1 lg:order-2 hidden lg:block">
            <Image src={img} alt="" className="mx-auto lg:mx-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
