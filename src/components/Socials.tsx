import { ISocials } from "../interface/socials";

import SocialItem from "./SocialItem";

export default function Socials() {
  const socials: ISocials[] = [
    {
      social: "Linkedin",
      url: "https://www.linkedin.com/in/emmanuel-ezeagwula-87b325251/",
    },

    {
      social: "Github",
      url: "https://github.com/Goldennboyy",
    },

    {
      social: "Instagram",
      url: "https://www.instagram.com/emmanueleze__/",
    },

    {
      social: "Website",
      url: "https://emmanuel-portfolio-demo-qxx2.vercel.app/",
    },
  ];

  return (
    <div className="space-y-2">
      {socials.map((social, index) => {
        return <SocialItem key={index} {...social} />;
      })}
    </div>
  );
}
