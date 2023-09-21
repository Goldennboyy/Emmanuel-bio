import { ISocials } from "../interface/socials";

export default function SocialItem(props: ISocials) {
  return (
    <div className="flex flex-col items-center">
      <div className="p-4 cursor-pointer border bg-[#1d1c1d] border-slate-700 md:w-[20%] w-52 h-18 hover:border-gray-900 ">
        <a href={props.url}>
          <span className="font-base text-slate-200 hover:text-yellow-200">
            {props.social}
          </span>
        </a>
      </div>
    </div>
  );
}
