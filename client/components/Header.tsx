import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Downloads", path: "/downloads" },
  { label: "Community", path: "/community" },
  { label: "About", path: "/about" },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="flex w-full h-[99px] px-8 items-center gap-6 border-b border-border bg-white">
      <div className="flex items-center gap-6">
        <Link to="/" className="text-2xl leading-[44px] font-normal">
          <span className="text-black">Protein</span>
          <span className="text-primary font-bold">3D</span>
        </Link>
      </div>

      <nav className="flex justify-end items-start gap-2 flex-1 flex-wrap">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex px-2 py-2 justify-center items-center gap-2 rounded-lg text-foreground text-base font-normal leading-none ${
                isActive ? "bg-background-brand-tertiary" : ""
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
