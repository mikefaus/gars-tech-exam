import { SidebarData } from "./SidebarData";
import SubMenu from "./Submenu";

const Sidebar = () => {
  return (
    <>
      <div className="SidebarWrap">
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </div>
    </>
  );
};

export default Sidebar;
