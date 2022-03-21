import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="logo">
      <Link href="/" passHref>
        <a>
          <Image
            className="img-responsive"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUnoeoqy6iVGtzsp77gOOkotxJoScrAiktLgKEU7d4ht-vGnERSSF0VtpVq8tzk5cltg&usqp=CAU"
            alt="Logo"
            width="217px"
            height="50px"
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
