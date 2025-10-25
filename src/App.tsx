import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header
            brand={{ name: "MyStore", link: "/" }}
            search={{
              placeholder: "Search products...",
              value: "",
              onChange: () => {},
              onSubmit: () => {},
            }}
            cart={{ link: "/cart", itemCount: 2 }}
            userMenu={{
              links: [
                { label: "Login", path: "/login" },
                { label: "Signup", path: "/signup" },
              ],
            }}
          />
          <div className="pt-24">
            <Navbar />
          </div>
          <main className="flex-grow pt-24">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
