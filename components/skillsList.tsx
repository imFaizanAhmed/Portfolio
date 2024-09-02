import { motion } from "framer-motion";
import {
  DiJavascript1,
  DiNodejsSmall,
  DiNodejs,
  DiReact,
  DiMysql,
  DiRedis,
  DiGit,
  DiPostgresql,
  DiGithubBadge,
  DiMongodb,
} from "react-icons/di";
import { TbBrandTypescript } from "react-icons/tb";

const skills = [
  { name: "Next.js", logo: DiNodejsSmall },
  { name: "Node.js", logo: DiNodejs },
  { name: "React.js", logo: DiReact },
  { name: "MySql", logo: DiMysql },
  { name: "Sequalize", logo: DiJavascript1 },
  { name: "Swagger", logo: DiJavascript1 },
  { name: "Redis", logo: DiRedis },
  { name: "Git", logo: DiGit },
  { name: "Github", logo: DiGithubBadge },
  { name: "LLM", logo: DiJavascript1 },
  { name: "Rydium", logo: DiJavascript1 },
  { name: "PostgreSql", logo: DiPostgresql },
  { name: "MongoDB", logo: DiMongodb },
  { name: "TypeScript", logo: TbBrandTypescript },
];

const SkillsList = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex flex-col items-center border border-gray-200 p-4 rounded-lg"
        >
          <skill.logo />
          <span className="mt-2 text-lg">{skill.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillsList;
