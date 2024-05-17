import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const ContactPage = () => {
  return (
    <div className="">
      <MaxWidthWrapper className="pb-20 lg:grid lg:grid-cols-2 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-20 xl:pt-10 lg:pb-10 px-20 xl:mt-10">
        <div className="flex flex-col items-center lg:items-start relative mx-auto text-center lg:text-left px-8">
          <div className="relative w-fit tracking-tight text-balance font-bold !leading-tight text-primary text-5xl md:text-6xl lg:text-7xl mt-20">
            <h1>Contact</h1>
          </div>

          <div className="">
            <p className="mt-9 ml-2 text-lg lg:text-left md:text-balance text-wrap">
              We are always eager to hear from you. Whether you have{" "}
              <span className="font-semibold text-primary">
                questions, feedback, or are interested in collaborating,{" "}
              </span>
              please don’t hesitate to reach out.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="">
          <form id="contactForm" className="shadow-md rounded px-8 py-8 mb-4">
            <div className="mb-10">
              <label htmlFor="name" className="block text-sm font-bold mb-4 ">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border rounded-lg w-full py-2 px-3 leading-tight focus:outline-primary focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-10">
              <label htmlFor="email" className="block  text-sm font-bold mb-4">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-primary focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-10">
              <label
                htmlFor="message"
                className="block  text-sm font-bold mb-4"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-primary focus:shadow-outline"
                required
              ></textarea>
            </div>
            <div className="mt-10 flex">
              <button className="text-lg bg-primary px-8 py-2 rounded-xl transition-transform transform hover:scale-110">
                <Link href="/">Submit</Link>
              </button>
            </div>
          </form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ContactPage;
