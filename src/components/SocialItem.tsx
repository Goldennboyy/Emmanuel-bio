import { ISocials } from "../interface/socials";

export default function SocialItem(props: ISocials) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between p-4 cursor-pointer border border-b-blue-500 border-white w-[20%] h-20 border-b-4">
        <a href={props.url}>
          <span className="font-semibold text-slate-300">{props.social}</span>
        </a>
        <>{props.icon}</>
      </div>

      <div className="h-2"></div>
    </div>
  );
}
