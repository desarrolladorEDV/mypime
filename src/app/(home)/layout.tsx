import Logo from "@/components/form/Logo";
import ThemeSwitcher from "@/components/form/ThemeSwitcher";
import { UserButton } from "@clerk/nextjs";
import React, { ReactNode } from "react";
import TeamSwitcher from "./components/team-switcher";
import { MainNav } from "./components/main-nav";
import { Search } from "./components/search";

function layout({ children }: { children: ReactNode }) {
  return (<>
    <div className="border-b mb-4">
    <div className="flex h-16 items-center px-4">
      <Logo />
      <MainNav className="mx-6" />
      <div className="ml-auto flex items-center space-x-4">
        <Search  />
        <ThemeSwitcher />
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </div>
  </div>
    <div className="flex flex-col min-w-full bg-background max-h-screen p-2 rounded h-screen ">

     
      <main className=""> {children}</main>
    </div>
    </>
  );
}

export default layout;
