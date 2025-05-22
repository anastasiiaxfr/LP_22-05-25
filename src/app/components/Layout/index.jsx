import Header from "./TheHeader";
import Footer from "./TheFooter";

function index({ children }) {
  return (
    <>
      <div className="page">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default index;
