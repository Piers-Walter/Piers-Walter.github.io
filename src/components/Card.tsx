import Image from "next/image";
import { Nunito } from "next/font/google";
import classNames from "classnames";
import { BiLogoGithub, BiLogoLinkedin } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";
import information from "@/information";

const nunito = Nunito({ subsets: ["latin"] });

const Card = () => {
  return (
    <div
      className="my-4 w-11/12 md:w-9/12 max-w-[768px] lg:w-6/12 bg-[linear-gradient(270deg,hsla(210,90%,70%,1)0%,hsla(212,93%,49%,1)100%);] 
                    rounded-xl shadow-[22px_17px_32px_-15px_rgba(0,0,0,0.3)]"
    >
      <div className="flex flex-row">
        {/* Text Section */}
        <div className="w-full">
          <div className="flex flex-grow flex-row text-white justify-between px-5">
            <div
              className={classNames(
                "flex flex-col items-center flex-1 pt-5 px-2",
                nunito.className
              )}
            >
              <div className="flex flex-row w-full justify-center">
                <div className="flex flex-col items-center self-center flex-1 text-center">
                  <Image
                    className="rounded-full border-gray-300 border-solid border-4 block md:hidden mb-2"
                    width={50}
                    height={50}
                    alt="Piers Profile Picture"
                    src="/Profile.jpg"
                  />
                  <h1 className="text-3xl font-bold">{information.name}</h1>
                  <TypeAnimation
                    sequence={information.typingLines.reduce<
                      (string | number)[]
                    >((r, e) => {
                      r.push(e, 2000);
                      return r;
                    }, [])}
                    repeat={Infinity}
                    deletionSpeed={60}
                    speed={1}
                    preRenderFirstString={true}
                    className="font-mono font-bold"
                  />
                </div>
              </div>
              <div className="flex flex-row">
                <p className="text-justify pt-4 flex-1">
                  {information.description}
                </p>
                {/* RHS PIcture */}
                <div className="hidden pl-5 max-w-40 self-center just md:flex">
                  <Image
                    width={150}
                    height={150}
                    src="/Profile.jpg"
                    alt="Piers Profile Image"
                    className="rounded-full border-gray-400 border-solid border-[6px] self-center justify-self-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Icons */}
      <div className="flex flex-row w-full pb-4 pt-2 justify-center space-x-4 text-white">
        {information.linkedinURL != "" && (
          <a href={information.linkedinURL} target="_blank">
            <BiLogoLinkedin size={"1.8em"} />
          </a>
        )}
        {information.githubURL != "" && (
          <a href={information.githubURL} target="_blank">
            <BiLogoGithub size={"1.8em"} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
