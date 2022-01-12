import ActiveLink from "./ActiveLink";
import {
  CollectionIcon,
 
  HomeIcon,
 
  UserIcon,
 
  InformationCircleIcon,
  LibraryIcon,
} from "@heroicons/react/outline";
const Sidebar = () => {
  const sidebarItem = [
    {
      link: "/",
      tipName: "Home",
      IconName: HomeIcon,
    },
    {
      link: "/about",
      tipName: "About",
      IconName: UserIcon,
    },
    {
      link: "/portfolio",
      tipName: "Portfolio",
      IconName: CollectionIcon,
    },
 
    
  ];
  return (
    <div className="px-5 md:px-0 border-t md:border-t-0 overflow-x-visible z-[200] w-screen md:w-auto justify-between fixed bottom-0 right-0  md:sticky md:top-11 md:left-0 bg-primary flex md:justify-start md:h-screen items-center md:border-r border-gray-700 md:flex-col h-auto">
      {sidebarItem.map(({ link, tipName, IconName }) => (
        <ActiveLink href={link} key={link}>
          <div data-tip={tipName} className="tooltip  md:tooltip-right z-50">
            <IconName className="h-5 w-5 md:h-8 md:w-8 " />
          </div>
        </ActiveLink>
      ))}
    </div>
  );
};

export default Sidebar;
