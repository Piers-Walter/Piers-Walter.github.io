import Image from "next/image";
import { Nunito } from "next/font/google";
import classNames from "classnames";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import moment from "moment";

const nunito = Nunito({ subsets: ["latin"] });

const Card = () => {
  const ibmStart = moment("2019-07-01");
  const yearsExperience = moment().diff(ibmStart, "years");

  return (
    <div
      className="my-4 w-11/12 md:w-9/12 lg:w-6/12 bg-[linear-gradient(270deg,hsla(210,90%,70%,1)0%,hsla(212,93%,49%,1)100%);] 
                    rounded-xl shadow-[22px_17px_32px_-15px_rgba(0,0,0,0.3)]"
    >
      <div className="flex flex-row">
        {/* Text Section */}
        <div className="w-full">
          <div className="flex flex-grow flex-row text-white justify-between px-5">
            <div
              className={classNames(
                "flex flex-col items-center flex-1 py-5 px-2",
                nunito.className
              )}
            >
              <div className="flex flex-row w-full justify-center">
                <div className="items-center self-center flex-1 text-center">
                  <h1 className="text-3xl font-bold">Piers Walter</h1>
                  <h2 className="">Platform Engineer</h2>
                </div>
                <div className="block md:hidden absolute right-12">
                  <Image
                    className="max-h-full rounded-full border-gray-300 border-solid border-4"
                    width={50}
                    height={50}
                    alt="Piers Profile Picture"
                    src="/Profile.jpg"
                  />
                </div>
              </div>
              <p className="text-justify pt-4">
                I&apos;m a Platform Engineer with over {yearsExperience} years
                at IBM, I specialize in cloud computing, OpenShift, generative
                AI, and full-stack development. I have extensive experience
                working with Linux environments, building and managing scalable
                infrastructure using container orchestration, microservices, and
                automation.
              </p>
            </div>
          </div>
          {/* Bottom Icons */}
          <div className="flex flex-row w-full py-4 justify-center space-x-4 text-white">
            <a href="https://www.linkedin.com/in/piers-walter/" target="_blank">
              <BiLogoLinkedin size={"1.8em"} />
            </a>
            <a href="https://github.com/Piers-Walter" target="_blank">
              <BiLogoGithub size={"1.8em"} />
            </a>
          </div>
        </div>

        {/* RHS PIcture */}
        <div className="hidden md:block self-center pr-5">
          <Image
            width={150}
            height={150}
            src="/Profile.jpg"
            alt="Piers Profile Image"
            className="rounded-full border-gray-400 border-solid border-[6px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
