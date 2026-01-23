"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();

  const tabs = [
    { id: "overview", label: "Overview", path: "/" },
    { id: "context", label: "Context", path: "/context" },
    { id: "podcast", label: "Podcast", path: "/podcast" },
    { id: "action", label: "Action", path: "/action" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4 pointer-events-none"
    >
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 p-2 backdrop-blur-xl shadow-2xl overflow-x-auto max-w-full pointer-events-auto">
        {tabs.map((tab) => {
          const isActive = tab.path === "/" ? pathname === "/" : pathname.startsWith(tab.path);
          return (
            <Link
              key={tab.id}
              href={tab.path}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full whitespace-nowrap ${
                isActive ? "text-black" : "text-white/60 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};
