import Layout from "./components/Layout";
import profile from "./assets/pictures/profile.jpg";

function App() {
  return (
    <Layout pageTitle="Emmanuel's Bio">
      <div className="flex flex-col items-center justify-center p-8">
        <figure className="p-4 mt-8">
          <img
            src={profile}
            alt="Emmanuel's profile"
            className="object-cover w-40 h-40 rounded-full"
          />
        </figure>
        <h1 className="text-2xl font-semibold text-slate-200">
          Emmanuel Ezeagwula
        </h1>
        <div className="mt-2 text-sm">
          <div className="flex gap-4">
            <span className="">Software Engineer</span>
            <span>Digital Craftsman</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
