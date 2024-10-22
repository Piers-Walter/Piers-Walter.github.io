import moment from "moment";

const ibmStart = moment("2019-07-01");
const yearsExperience = moment().diff(ibmStart, "years");

const information = {
  name: "Piers Walter",
  typingLines: [
    "Experienced in Cloud",
    "Experienced in Generative AI",
    "Experienced in Kubernetes",
    "Experienced in Front End",
    "Experienced in Back End",
    "Experienced in Infrastructure",
    "Experienced in Linux",
    "Experienced in OpenShift",
    "Experienced in Integration",
  ],
  description: `I'm a Platform Engineer with over ${yearsExperience} years at IBM, I specialize in cloud computing, OpenShift, generative AI, and full-stack development. I have extensive experience working with Linux environments, building and managing scalable infrastructure using container orchestration, microservices, and automation.`,
  linkedinURL: "https://www.linkedin.com/in/piers-walter/",
  githubURL: "https://github.com/Piers-Walter",
};

export default information;
