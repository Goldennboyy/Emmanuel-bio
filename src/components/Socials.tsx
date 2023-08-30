import { ISocials } from "../interface/socials";
import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { IoGlobeOutline } from "react-icons/io5";
import SocialItem from "./SocialItem";

export default function Socials() {
  const socials: ISocials[] = [
    {
      social: "Linkedin",
      url: "https://www.linkedin.com/in/emmanuel-ezeagwula-87b325251/",
      icon: <AiOutlineLinkedin />,
    },

    {
      social: "Github",
      url: "https://github.com/Goldennboyy",
      icon: <AiOutlineGithub />,
    },

    {
      social: "Instagram",
      url: "https://www.instagram.com/emmanueleze_/",
      icon: <AiOutlineInstagram />,
    },

    {
      social: "Website",
      url: "https://emmanuel-portfolio-demo-qxx2.vercel.app/",
      icon: <IoGlobeOutline />,
    },
  ];

  return (
    <div className="space-y-4">
      {socials.map((social, index) => {
        return <SocialItem key={index} {...social} />;
      })}
    </div>
  );
}
