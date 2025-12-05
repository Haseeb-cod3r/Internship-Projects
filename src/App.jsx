import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";
import { AppProvider } from "./context/themeContext.jsx";
import { Suspense, useState } from "react";
function App() {
  const [appear, setAppear] = useState(false);
  return (
    <main className="bg-[var(--heading)] max-w-2000px">
      <AppProvider>
        <Nav setAppear={setAppear} appear={appear} />
        <Suspense
          fallback={
            <h1 className="w-screen h-screen font-bold bg-[var(--bg)]  flex items-center justify-center text-[var(--text2)]">
              Loading...
            </h1>
          }
        >
          <Outlet context={{appear,setAppear}} />
        </Suspense>
        <Footer />
      </AppProvider>
    </main>
  );
}

export default App;
