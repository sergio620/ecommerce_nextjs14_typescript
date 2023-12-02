import SidebarShoePage from "../../../ui/calzados/SidebarShoePage";
import PopulateShoes from "@/app/ui/calzados/PopulateShoes";
import HiddenFilterShoePage from "@/app/ui/calzados/HiddenFilterShoePage";

import HeaderShoePage from "@/app/ui/calzados/HeaderShoePage";
export default function Calzados() {
  return (
    <div>
      <HeaderShoePage />
      <HiddenFilterShoePage />
      {/* Al tener position fixed no importa en que lugar se coloque "HiddenFilterShoePage" ya que sale de su flujo normal en la pagina */}
      <div className="flex">
        <SidebarShoePage />
        <PopulateShoes />
      </div>
    </div>
  );
}
