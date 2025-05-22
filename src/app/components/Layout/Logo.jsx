import Link from "next/link";
import Image from "next/image";
import img from "@/app/assets/img/logo.svg";

function Logo() {
  return (
    <Link href="/">
      <Image src={img} alt="Edushare" />
    </Link>
  );
}

export default Logo;
