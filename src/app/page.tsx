import Link from "next/link";
import { Check, Star } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="flex-grow">
        <MaxWidthWrapper className="pb-20 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-20 xl:pt-10 lg:pb-10">
          <div className="flex flex-col items-center col-span-2 px-6 lg:px-0 lg:pt-4">
            <div className="flex flex-col items-center lg:items-start relative mx-auto text-center lg:text-left">
              <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-100 text-5xl md:text-6xl lg:text-7xl">
                <span className="font-semibold text-primary">Attendance</span>{" "}
                made easy
              </h1>
              <p className="mt-9 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                Our cutting-edge attendance system leverages Python, Next.js,
                TailwindCSS, Shadcn, and MongoDB to deliver{" "}
                <span className="font-semibold text-primary">
                  seamless and accurate{" "}
                </span>
                attendance tracking.
              </p>

              <ul className="flex flex-col items-center sm:items-start mt-8 space-y-2 text-left font-medium">
                <div className="space-y-2">
                  <li className="flex items-center text-left gap-1.5">
                    <Check className="text-primary" /> Quick and hassle-free
                    registration
                  </li>
                  <li className="flex items-center text-left gap-x-1.5">
                    <Check className="text-primary" /> Fast scan and real-time
                    updation
                  </li>
                  <li className="flex items-center text-left gap-x-1.5">
                    <Check className="text-primary" /> Save time and skip queues
                  </li>
                </div>
              </ul>

              <div className="flex flex-col items-center sm:items-start gap-5 mt-10">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-1.png"
                    alt="user-1"
                  />

                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-2.png"
                    alt="user-1"
                  />

                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-3.png"
                    alt="user-1"
                  />

                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-4.jpeg"
                    alt="user-1"
                  />

                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/users/user-5.jpeg"
                    alt="user-1"
                  />
                </div>

                <div className="flex flex-col">
                  <div className="flex gap-0.5">
                    <Star className="h-5 w-5 text-primary fill-primary" />
                    <Star className="h-5 w-5 text-primary fill-primary" />
                    <Star className="h-5 w-5 text-primary fill-primary" />
                    <Star className="h-5 w-5 text-primary fill-primary" />
                    <Star className="h-5 w-5 text-primary fill-primary" />
                  </div>
                </div>
              </div>
              <div className="mt-10 flex">
                <Link
                  href="/"
                  className="text-lg bg-primary px-8 py-2 rounded-xl transition-transform transform hover:scale-110"
                >
                  Try now
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
