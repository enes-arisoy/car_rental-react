import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import NotFound from "./pages/notFound/index";
import Header from "./components/header/index";
import Footer from "./components/footer/index";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative overflow-hidden">

        {/* arka plan gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-dark-bg via-black-100 to-dark-bg -z-10"></div>

        {/* animasyonlu ışık hüzmeleri */}
        <div className="fixed top-20 left-20 w-72 h-72 bg-primary-blue/20 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="fixed bottom-20 right-20 w-72 h-72 bg-accent-dark/20 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: '200ms'}} />

        <Header />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
