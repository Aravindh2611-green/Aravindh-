import React from "react";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

const groups = [
  {
    title: "Programming fundamentals",
    icon: <CodeOutlinedIcon color="primary" />,
    level: "Basic",
    skills: ["HTML", "React", "Python", "JavaScript"],
    description:
      "Foundational knowledge; continuing to build confidence through practice and projects.",
  },
  {
    title: "AI and creative tools",
    icon: <AutoAwesomeOutlinedIcon color="primary" />,
    level: "Practical exposure",
    skills: [
      "AI-assisted application development",
      "Prompting and prompt engineering",
      "AI image generation",
      "AI video generation",
      "AI-assisted workflow creation",
    ],
    description:
      "Hands-on exposure to AI tools for development, prompting, and creative workflows.",
  },
  {
    title: "Professional strengths",
    icon: <GroupsOutlinedIcon color="primary" />,
    level: null,
    skills: [
      "Problem-solving",
      "Communication",
      "Teamwork",
      "Adaptability",
      "Time management",
      "Continuous learning",
    ],
    description:
      "Skills I value and continue to develop through study, internships, and collaboration.",
  },
];

export default function Skills() {
  return (
    <section aria-labelledby="skills-title">
      <header className="page-heading">
        <p className="eyebrow">Skills and strengths</p>
        <h1 className="page-title" id="skills-title">A growing toolkit, honestly represented.</h1>
        <p className="page-description">
          I’m building a strong foundation and gaining practical experience.
          These labels reflect my current level rather than inflated percentages.
        </p>
      </header>

      <div className="content-grid">
        {groups.map((group) => (
          <article className="surface-card skill-group" key={group.title}>
            <h2 className="skill-group-title">
              {group.icon}
              {group.title}
            </h2>
            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li className="skill-item" key={skill}>
                  <span className="skill-name">{skill}</span>
                  {group.level && <span className="skill-level">{group.level}</span>}
                </li>
              ))}
            </ul>
            <p className="skill-description">{group.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
