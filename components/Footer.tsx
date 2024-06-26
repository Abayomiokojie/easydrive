import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@constants";

const Footer = () => (
  <footer className="flex flex-col text-black-100  mt-5 border-t border-gray-100  ">
    <div className="flex flex-col  xl:max-w-[1440px] xl:mx-auto">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-12 xl:gap-44 sm:px-16 px-6 py-10 ">
        <div className="flex flex-col justify-start items-start gap-6">
          <div>
            <Image
              src="/carhub2.png"
              alt="logo"
              width={118}
              height={18}
              className="object-contain h-12 w-fit"
            />
            <span className="lg:text-2xl sm:text-xl text-lg font-bold font-inter ">
              EasyDrive
            </span>
          </div>

          <p className="text-base text-gray-700">
            EasyDrive 2024 <br />
            All Rights Reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((item) => (
            <div key={item.title} className="footer__link">
              <h3 className="font-bold">{item.title}</h3>
              <div className="flex flex-col gap-5">
                {item.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-gray-500"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p className="flex mr-6">@2024 EasyDrive. All rights reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms & Condition
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
