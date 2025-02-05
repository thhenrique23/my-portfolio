"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiKubernetes,
  SiAwsorganizations,
  SiNewrelic,
  SiGrafana,
  SiGithub,
  SiNestjs,
  SiAngular,
  SiSplunk,
  SiAmazons3,
} from "react-icons/si";

//about data
const about = {
  title: "About me",
  description:
    "I’m a 27-year-old software developer from João Pessoa, Paraíba, Brazil. Passionate about programming, I specialize as a full-stack developer with a strong focus on frontend development. When I’m not coding, you’ll often find me enjoying life’s simple pleasures: traveling with friends, sipping on great drinks, or diving into something new to learn. I’m also a huge football fan, proudly supporting my favorite team, Fluminense. I thrive on creativity, problem-solving, and building meaningful digital experiences. Let’s connect and create something awesome together!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Thales Henrique",
    },
    {
      fieldName: "Phone",
      fieldValue: "+55 (83) 9 9903-1108",
    },
    {
      fieldName: "Experience",
      fieldValue: "6 Years",
    },
    {
      fieldName: "Email",
      fieldValue: "thaalesheenrique@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Brazilian",
    },

    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badhe.svg",
  title: "My experience",
  description:
    "Below are the companies I worked for during these 6 years of experience. From these companies, I acquired a lot of knowledge and had enormous challenges.",
  items: [
    {
      company: "PagSeguro PagBank",
      position: "Software Engineer Frontend",
      duration: "AUG 2021 - JAN 2025",
    },
    {
      company: "Indra Minsait",
      position: "Pl Software Engineer",
      duration: "AUG 2020 – AUG 2021",
    },
    {
      company: "Softcom Tecnologia",
      position: "Software Developer Junior",
      duration: "AUG 2021 - JAN 2025",
    },
    {
      company: "Engeselt",
      position: "Intern & Software Developer Junior",
      duration: "FEB 2018 – OCT 2019 ",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I believe that the pursuit of knowledge is essential for both professional and personal growth. Throughout my journey, I’ve had the opportunity to invest in my education and earn certifications that enhance my skills and expertise. ",
  items: [
    {
      institution: "Udemy",
      degree: "AI Course - Artificial Intelligence + 12 tools",
      duration: "2024",
    },
    {
      institution: "Udemy",
      degree: "Grafana: Management Dashboards + Monitoring",
      duration: "2024",
    },
    {
      institution: "Udemy",
      degree: "Learn NextJS, GraphQL/GraphCMS and Leaflet hands-on!",
      duration: "2022",
    },
    {
      institution: "Udemy",
      degree: "Next.js and React - Complete Course 2021",
      duration: "2021",
    },
    {
      institution: "Udemy",
      degree: "Docker: Essential Tool for Developers",
      duration: "2021",
    },
    {
      institution: "Udemy",
      degree: "Learn NextJS, GraphQL/GraphCMS and Leaflet hands-on!",
      duration: "2020",
    },
    {
      institution: "desenvolvedor.io",
      degree: "SPA Development with Angular",
      duration: "2020",
    },
    {
      institution: "desenvolvedor.io",
      degree: "Fundamentals of Software Architecture",
      duration: "2020",
    },
    {
      institution: "CertiProf",
      degree: "Scrum Foundation Professional Certificate SFPC",
      duration: "2020",
    },
    {
      institution: "Unipê ",
      degree: "Degree in Internet Systems",
      duration: "2016 - 2018",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description:
    "Over the years, I have developed a diverse skill set that enables me to adapt to different challenges and contribute effectively to projects. My technical and interpersonal skills include.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiKubernetes />,
      name: "kubernetes",
    },
    {
      icon: <FaDocker />,
      name: "docker",
    },
    {
      icon: <SiAwsorganizations />,
      name: "aws",
    },
    {
      icon: <SiNewrelic />,
      name: "new relic",
    },
    {
      icon: <SiGrafana />,
      name: "grafana",
    },
    {
      icon: <SiGithub />,
      name: "github",
    },
    {
      icon: <SiNestjs />,
      name: "nest.js",
    },
    {
      icon: <SiAngular />,
      name: "angular",
    },
    {
      icon: <SiAmazons3 />,
      name: "amazon s3",
    },
    {
      icon: <SiSplunk />,
      name: "splunk",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item) => (
                      <li
                        key={item.company}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item) => (
                      <li
                        key={item.company}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[280px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3 xl:mt-5">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
              </div>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </ScrollArea>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}:</span>
                        <span className="text-xl">{item.fieldValue}:</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
