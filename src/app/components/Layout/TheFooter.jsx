import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import app1 from "@/app/assets/img/app1.svg";
import app2 from "@/app/assets/img/app2.svg";

const menu = [
  {
    group: "About",
    items: [
      {
        url: "/",
        title: "About Us",
      },
      {
        url: "/",
        title: "Features",
      },
      {
        url: "/",
        title: "News",
      },
      {
        url: "/",
        title: "Careers",
      },
      {
        url: "/",
        title: "FAQ",
      },
    ],
  },
  {
    group: "Support",
    items: [
      {
        url: "/",
        title: "Account",
      },
      {
        url: "/",
        title: "Support Center",
      },
      {
        url: "/",
        title: "Feedback",
      },
      {
        url: "/",
        title: "Contact Us",
      },
      {
        url: "/",
        title: "Accesbility",
      },
    ],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <div>
            <Logo />
            <p className="mt-4">
              Our motto to fulfill customer demand by making them satisfied with
              growing their business.
            </p>
          </div>
          <div className="footer_menu_wrap">
            {menu.map((i, ind) => (
              <div key={ind}>
                <h3 className="text-xl">{i.group}</h3>
                <nav className="footer_menu">
                  {i.items.map((j, ind) => (
                    <Link href={j.url} key={ind}>
                      {j.title}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl">Get our app</h3>
            <div className="flex lg:grid gap-3">
              <Link href="#">
                <Image src={app1} alt="" />
              </Link>
              <Link href="#">
                <Image src={app2} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_btm">
        <div className="container">
          <hr />
          <p>
            Copyright Besnik 2025 All rights reserved. Powered by{" "}
            <b>Triple M Solutions</b>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
