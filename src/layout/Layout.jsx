import Footer from "./footer/Footer";
import NavBar from "./navbar/NavBar";

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
