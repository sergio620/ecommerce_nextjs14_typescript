import Sidebar from "../../ui/calzados/Sidebar/Sidebar";
import Header from "../../ui/calzados/Header";
import Content from "../../ui/calzados/Content";

export default function Calzados() {
  return (
    <div className="flex">
      <Sidebar />
      <section className="grow">
        <Header />
        <Content />
      </section>
    </div>
  );
}
