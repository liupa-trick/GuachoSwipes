// components/ui/Navbar.tsx
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="bg-white text-black border-b border-black border-b-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-semibold">GauchoSwipes</span>
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}
