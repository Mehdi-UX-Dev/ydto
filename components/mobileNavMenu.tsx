import { Menu } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function MobileNavMenu() {
  const smoothScroll = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu className="md:hidden" size={32} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <Link href={"#"} className="lg:text-[24px]">
            Who we are
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"#"} className="lg:text-[24px]">
            What we do
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link
            href={"#contact"}
            className="lg:text-[24px]"
            onClick={(e) => {
              e.preventDefault(), smoothScroll("contact");
            }}
          >
            Contact Us
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
