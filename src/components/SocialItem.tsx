import { ISocials } from "../interface/socials";

export default function SocialItem(props: ISocials) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between p-4 cursor-pointer border border-b-blue-500 border-white md:w-[20%] w-52 h-20 border-b-4">
        <a href={props.url}>
          <span className="font-base text-slate-300 hover:text-yellow-200">
            {props.social}
          </span>
        </a>
        <span>{props.icon}</span>
      </div>
    </div>
  );
}
