import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function defaultLayout() {
  return (
    <>
      <Header />
      <main className="main content flex-grow-1 sm:mt-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
