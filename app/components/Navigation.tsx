import Link from "next/link";
import Image from "next/image";
import "../global.css";

export default function Navigation() {
  return (
    <nav className="bg-[#227FA1] text-white h-screen w-64 flex flex-col items-start py-8 px-4">
      <ul className="space-y-6">
        <li>
          <Link
            href="/"
            className="flex items-center gap-4 hover:text-gray-200 transition"
          >
            <Image
              src="/images/home.png"
              alt="Home"
              className="h-6 w-6"
              width={24}
              height={24}
            />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/learn"
            className="flex items-center gap-4 hover:text-gray-200 transition"
          >
            <Image
              src="/images/learn.png"
              alt="Learn"
              className="h-6 w-6"
              width={24}
                height={24}
            />
            <span>Learn</span>
          </Link>
        </li>
        <li>
          <Link
            href="/wallet"
            className="flex items-center gap-4 hover:text-gray-200 transition"
          >
            <Image
              src="/images/wallet.png"
              alt="Wallet"
              className="h-6 w-6"
              width={24}
                height={24}
            />
            <span>Wallet</span>
          </Link>
        </li>
        <li>
          <Link
            href="/earn"
            className="flex items-center gap-4 hover:text-gray-200 transition"
          >
            <Image
              src="/images/earn.png"
              alt="Earn"
              className="h-6 w-6"
              width={24}
                height={24}
            />
            <span>Earn</span>
          </Link>
        </li>
        <li>
          <Link
            href="/community"
            className="flex items-center gap-4 hover:text-gray-200 transition"
          >
            <Image
              src="/images/community.png"
              alt="Community"
              className="h-6 w-6"
              width={24}
                height={24}
            />
            <span>Community</span>
          </Link>
        </li>
        <li>
          <Link
            href="/profile"
            className="flex items-center gap-4 hover:text-gray-200 transition"
          >
            <Image
              src="/images/profile.png"
              alt="Profile"
              className="h-6 w-6"
              width={24}
                height={24}
            />
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
