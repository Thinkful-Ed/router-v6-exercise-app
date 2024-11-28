import React from "react";
import {
  BrowserRouter as Router,
  Link,

} from "react-router-dom";
import BackButton from "./BackButton";
import ForwardButton from "./ForwardButton";
import GoHomeButton from "./GoHomeButton";
import RootRoutes from "./RootRoutes";

  Route,
  Routes,
} from "react-router-dom";
import NoMatch from "./NoMatch";

function Home() {
  return <p>Home</p>;
}

function About() {
  return <p>About</p>;
}



function App() {
  const userId = [1, 2, 3, 4, 5];

  return (
    <Router>
      <div className="App">

        <BackButton />
        <ForwardButton />

        <GoHomeButton />

        <Link to="/about">About</Link>
        <br />

        <h1>Navbar</h1>
        {
          userId.map((id) => (
            <div key={id}>
              <Link to={`/user/${id}`}>User {id}</Link>
            </div>
          ))}

        <RootRoutes />

        <Link to="/">Home</Link>
        <br />
        <br />
        <Link to="/about">About</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>

      </div>
    </Router>
  );
}
export default App;
