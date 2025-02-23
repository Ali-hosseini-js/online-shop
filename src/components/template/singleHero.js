import Image from "next/image";
import Link from "next/link";
import React from "react";

function SingleHero() {
  return (
    <Link href="/smart-watch">
      <Image
        alt="ساعت هوشمند"
        src="smartWatchHero.svg"
        width={1240}
        height={420}
      />
    </Link>
  );
}

export default SingleHero;
