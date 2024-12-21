import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Settings,
  LogOut,
  Phone,
  Code2,
  Cloud,
  FileText,
  ChevronDown,
} from "lucide-react";

import Logo from "../assets/logo.png";
import MobileNav from "./MobileNav";
const SideBar = () => {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <>
      {/* Desktop View */}
      <aside className="hidden  fixed inset-y-0 z-50 md:flex w-64 flex-col border-r border-gray-200 bg-white">
        <div className="flex h-16 items-center gap-2 border-b border-gray-200 px-6">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
          <span className="font-semibold">CodeAnt AI</span>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-4">
          <div className="relative w-full mb-2">
            <button className="w-full text-left px-4 py-2 border border-gray-300 flex items-center justify-between rounded-md">
              {selectedValue || "UtkarshDhairyaPanwar"}
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <NavLink
            href="/"
            className="flex items-center gap-2 rounded-lg bg-[#1570EF] px-3 py-2 text-sm font-medium text-white"
          >
            <Home className="h-4 w-4" />
            Repositories
          </NavLink>

          <NavLink
            href="/code-review"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <Code2 className="h-4 w-4" />
            AI Code Review
          </NavLink>

          <NavLink
            href="/security"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <Cloud className="h-4 w-4" />
            Cloud Security
          </NavLink>

          <NavLink
            href="/help"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <FileText className="h-4 w-4" />
            How to Use
          </NavLink>

          <NavLink
            href="/settings"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            <Settings className="h-4 w-4" />
            Settings
          </NavLink>
        </nav>

        <div className="border-t border-gray-200 p-3">
          <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-black hover:bg-gray-50">
            <Phone className="h-4 w-4" />
            Support
          </button>
          <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50">
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>
      </aside>
      {/* Mobile View */}
      <MobileNav />
    </>
  );
};

export default SideBar;
