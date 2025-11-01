"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Shield,
  Target,
  AlertTriangle,
  FileText,
  CheckSquare,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "Pentests", icon: Shield, href: "/dashboard/pentests" },
  { name: "Targets", icon: Target, href: "/dashboard/targets" },
  { name: "Vulnerabilities", icon: AlertTriangle, href: "/dashboard/vulnerabilities" },
  { name: "Reports", icon: FileText, href: "/dashboard/reports" },
  { name: "Compliance", icon: CheckSquare, href: "/dashboard/compliance" },
  { name: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground h-screen flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <Image
          src="/logo.svg"
          alt="BlueSphere Logo"
          width={32}
          height={32}
          className="w-8 h-8"
        />
        <span className="text-xl font-semibold">BlueSphere</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`sidebar-link ${isActive ? "sidebar-link-active" : ""}`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-3">
        <button className="sidebar-link w-full text-red-400 hover:bg-red-900/20">
          <LogOut className="w-5 h-5" />
          <span>Log out</span>
        </button>
      </div>
    </aside>
  );
}
