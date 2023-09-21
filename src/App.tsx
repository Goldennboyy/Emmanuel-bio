import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Socials from "./components/Socials";



function App() {
  return (
    <Layout pageTitle="Emmanuel's Bio">
      <Profile />
      <Socials />
    </Layout>
  );
}

export default App;
