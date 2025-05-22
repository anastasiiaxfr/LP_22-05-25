import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { menu } from "@/app/constants";

function MenuNavigation() {
  return (
    <NavigationMenu className="menu hidden sm:flex">
      <NavigationMenuList>
        {menu.map((i, ind) => (
          <NavigationMenuItem key={ind}>
            <Link
              href={i.url}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded-sm font-[600]"
            >
              {i.title}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default MenuNavigation;
