import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
    <div className="grid grid-flow-row">
     <div> <Header></Header></div>
    <div>  <Categories></Categories></div>
     <div> <Footer></Footer></div></div>
    </>
  );
}
