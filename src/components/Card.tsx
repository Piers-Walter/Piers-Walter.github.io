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
      className="w-6/12 bg-[linear-gradient(270deg,hsla(210,90%,70%,1)0%,hsla(212,93%,49%,1)100%);] 
                    rounded-xl shadow-[22px_17px_32px_-15px_rgba(0,0,0,0.3)]"
    >
      <div className="flex flex-grow flex-row text-white justify-between pl-5">
        <div
          className={classNames(
            "flex flex-col items-center flex-1 py-5 px-2",
            nunito.className
          )}
        >
          <h1 className="text-3xl font-bold">Piers Walter</h1>
          <h2 className="">Platform Engineer</h2>
          <p className="text-justify pt-4">
            I&apos;m a Platform Engineer with over {yearsExperience} years at
            IBM, I specialize in cloud computing, OpenShift, generative AI, and
            full-stack development. I have extensive experience working with
            Linux environments, building and managing scalable infrastructure
            using container orchestration, microservices, and automation.
          </p>
          <div className="flex flex-row py-4 justify-between w-20">
            <a href="https://www.linkedin.com/in/piers-walter/" target="_blank">
              <BiLogoLinkedin size={"1.8em"} />
            </a>
            <a href="https://github.com/Piers-Walter" target="_blank">
              <BiLogoGithub size={"1.8em"} />
            </a>
          </div>
        </div>
        <div className="p-5 self-center">
          <Image
            className="max-h-full rounded-full border-gray-300 border-solid border-4"
            width={150}
            height={100}
            alt="Piers Profile Picture"
            src="/Profile.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
