// import "./App.css";
// import React, { useState } from "react";
// import Header from "./components/Header/index";
// import Footer from "./components/Footer/index";
// import About from "./components/About/index";
// import Portfolio from "./components/Portfolio/index";
// import Contact from "./components/Contact/index";
// import Resume from "./components/Resume/index";
// import Navbar from "./components/Navbar";

// function App() {
//   const [currentTab, setCurrentTab] = useState("about");

//   // This function checks to see which tab is selected and then generates the appropriate tab.
//   const renderTab = () => {
//     switch (currentTab) {
//       case "about":
//         return <About />;
//       case "portfolio":
//         return <Portfolio />;
//       case "contact":
//         return <Contact />;
//       case "resume":
//         return <Resume />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div>
//       <div className="text-2xl font-bold mobile-header">
//         <Navbar />
//         <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
//       </div>
//       <div>
//         <main>{renderTab()}</main>
//       </div>
//       <div>
//         <Footer></Footer>
//       </div>
//     </div>
//   );
// }

import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
