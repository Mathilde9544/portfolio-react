import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import Journey from "./components/journey/journey";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <Journey/>
      <Footer/>
    </div>
  );
}

export default App;
