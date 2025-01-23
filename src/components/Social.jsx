import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const socials = [
  { icon: <FaGithub />, path: "https://github.com/thhenrique23" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/thhenrique-pb/",
  },
  { icon: <FaInstagram />, path: "https://instagram.com/thaleshpb" },
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
