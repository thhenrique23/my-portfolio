import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedinIn />, path: "" },
  { icon: <FaInstagram />, path: "" },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map(({ icon, path }) => (
        <Link className={iconStyles} href={path} key={path}>
          {icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
