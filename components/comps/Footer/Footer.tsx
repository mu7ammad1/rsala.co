import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <div className="px-5 py-2  static bottom-0 *:font-normal *:text-sm flex justify-between items-center">
        <div className="flex gap-5">
          <Link
            href={"/privacy-policy"}
            className="decoration-slice decoration-1 underline-offset-8 capitalize hover:underline "
          >
            privacy policy
          </Link>
          <Link
            href={"/about"}
            className="hidden decoration-slice decoration-1 underline-offset-8 capitalize hover:underline "
          >
            about Rsala
          </Link>

          <Link
            href={"/terms"}
            className="hidden decoration-slice decoration-1 underline-offset-8 capitalize hover:underline "
          >
            Terms of use
          </Link>
          <Link
            href={"/contact"}
            className="decoration-slice decoration-1 underline-offset-8 capitalize hover:underline "
          >
            Contact us
          </Link>
        </div>
        <h1 className="text-center text-base">🍉🍉 ❤️ صنع في مصر</h1>
      </div>
    </div>
  );
}
