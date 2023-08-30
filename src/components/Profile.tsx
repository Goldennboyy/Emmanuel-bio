import picture from "../assets/pictures/profile.jpg";

function Profile() {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <figure className="p-4 mt-8">
        <img
          src={picture}
          alt="Emmanuel's profile"
          className="object-cover w-40 h-40 rounded-full"
        />
      </figure>
      <h1 className="text-2xl font-semibold text-slate-200">
        Emmanuel Ezeagwula
      </h1>
      <div className="mt-2 text-sm">
        <div className="flex gap-4">
          <span className="px-2 py-1 bg-slate-800 ">Software Engineer</span>
          <span className="px-2 py-1 bg-slate-800">Digital Craftsman</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
