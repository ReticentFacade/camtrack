import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MaxWidthWrapper className="pb-20 lg:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-20 xl:pt-10 lg:pb-10 px-20 xl:mt-10">
        <div className="flex flex-col items-center lg:items-start relative mx-auto text-center lg:text-left px-8">
          <div className="relative w-fit tracking-tight text-balance font-bold !leading-tight text-primary text-5xl md:text-6xl lg:text-7xl mt-20">
            <h1>About</h1>
          </div>

          <div className="">
            <p className="mt-9 text-lg lg:text-left md:text-balance text-wrap">
              Welcome to our Facial Recognition System called{" "}
              <span className="font-semibold text-primary">CamTrack</span>,
              where cutting-edge technology meets sleek design. Our mission is
              to provide an intuitive and efficient solution for facial feature
              detection,{" "}
              <span className="font-semibold text-primary">
                leveraging the power of OpenCV
              </span>{" "}
              and modern web development tools.
            </p>
          </div>

          {/* Visual separator */}
          <div className="h-px w-40 bg-white hidden sm:block mt-12"></div>

          <div className="mt-12 text-3xl font-medium text-zinc-400">
            <h2>Who are we?</h2>
          </div>

          <div className="mt-5 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap pb-8">
            <p>
              Our team consists of{" "}
              <span className="font-semibold text-primary">four members</span>{" "}
              from <span className="text-primary font-semibold">Group-10</span>{" "}
            </p>
          </div>
        </div>

        <div className="lg:w-full grid lgrid-cols-2 gap-x-0 gap-y-2 xl:gap-x-2 md:grid md:grid-cols-2">
          <Card className="flex flex-col items-center justify-center text-center">
            <CardHeader>
              <CardTitle>Lipi Sharma</CardTitle>
              <CardDescription>2110990826</CardDescription>
            </CardHeader>
          </Card>
          <Card className="flex flex-col items-center justify-center text-center">
            <CardHeader>
              <CardTitle>Madhav Aggarwal</CardTitle>
              <CardDescription>2110990830</CardDescription>
            </CardHeader>
          </Card>
          <Card className="flex flex-col items-center justify-center text-center">
            <CardHeader>
              <CardTitle>Keshav Gupta</CardTitle>
              <CardDescription>2110990753</CardDescription>
            </CardHeader>
          </Card>
          <Card className="flex flex-col items-center justify-center text-center">
            <CardHeader>
              <CardTitle>Krish Wason</CardTitle>
              <CardDescription>2110990796</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default AboutPage;
