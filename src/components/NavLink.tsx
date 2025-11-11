import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink = ({ to, children, className }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        "text-foreground hover:text-primary transition-colors duration-300 font-semibold text-base relative group",
        isActive && "text-primary",
        className
      )}
    >
      {children}
      <span 
        className={cn(
          "absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
          isActive && "w-full"
        )}
      />
    </Link>
  );
};
