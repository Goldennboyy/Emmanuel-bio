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
    <>
      {socials.map((social, index) => {
        return <SocialItem key={index} {...social} />;
      })}
    </>
  );
}

export function Icon() {
  interface IconProps {
    size?: number;
    color?: string;
  }

  return <div>Socials</div>;
}
