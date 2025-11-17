import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";

const navLinks = [
  { label: "Overview", href: "/#features" },
  { label: "Architecture", href: "/architecture" },
  { label: "Demo", href: "/demo" },
  { label: "Docs", href: "/documentation" },
  { label: "Research", href: "/research" },
];

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-6">
          <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-foreground">
            <Sparkles className="h-6 w-6 text-primary" />
            <span>WardrobeWiz</span>
          </Link>

          <div className="hidden md:flex items-center gap-4 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="transition-colors hover:text-foreground"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <Button variant="outline" onClick={handleLogout}>
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Log In</Button>
                </Link>
                <Link to="/register">
                  <Button variant="hero">Get Started</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
