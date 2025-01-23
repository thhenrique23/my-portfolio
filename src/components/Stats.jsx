"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const Stats = async () => {
  const [stats, setStats] = useState([
    {
      num: 6,
      text: "Years of experience",
    },
    {
      num: 16,
      text: "Projects and studies",
    },
    {
      num: 16,
      text: "Technologies mastered",
    },
    {
      num: 380,
      text: "Code commits",
    },
  ]);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const res = await fetch("/api/github-stats");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();

        setStats([
          {
            num: 6,
            text: "Years of experience",
          },
          {
            num: data?.totalRepositories ?? 0,
            text: "Projects and studies",
          },
          {
            num: data?.totalTechnologies ?? 0,
            text: "Technologies mastered",
          },
          {
            num: data?.totalCommits ?? 0,
            text: "Code commits",
          },
        ]);
      } catch (error) {
        return error;
      }
    };
    fetchGitHubStats();
  }, []);

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
