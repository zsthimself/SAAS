import { Sparkle } from "lucide-react";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Sparkle className="size-8 strokeWidth=[1.5]" />
      <span className="text-lg font-semibold">Pictoria AI</span>
    </Link>
  );
}

export default Logo;
