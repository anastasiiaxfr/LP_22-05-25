"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Logo from "./Logo";
import { menu } from "@/app/constants";
import { MenuIcon} from "lucide-react";

function Drawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <MenuIcon className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription className="my-4 flex flex-col gap-3">
            {menu.map((item, index) => (
              <SheetClose asChild key={index}>
                <a
                  href={item.url}
                  className="block text-sm text-foreground hover:underline cursor-pointer"
                >
                  {item.title}
                </a>
              </SheetClose>
            ))}
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="secondary" className="cursor-pointer">
              Sign In
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export default Drawer;
