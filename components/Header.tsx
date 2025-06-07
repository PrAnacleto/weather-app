
// components/Header.tsx
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Header() {
    return (
        <header className="w-full px-4 py-3 bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                    MyApp
                </Link>

                <NavigationMenu>
                    <NavigationMenuList className="space-x-4">
                        <NavigationMenuItem>
                            <Link href="/about" className="text-sm font-medium hover:underline">
                                About
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/contact" className="text-sm font-medium hover:underline">
                                Contact
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center space-x-2">
                    <Button variant="outline">Login</Button>
                    <Button>Sign Up</Button>
                </div>
            </div>
        </header>
    );
}
