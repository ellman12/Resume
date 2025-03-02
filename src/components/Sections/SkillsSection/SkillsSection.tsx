import Section from "../../../Section.tsx";
import SkillTooltip from "./SkillTooltip.tsx";
import {ReactNode} from "react";

type Skill = {
    name: string;
    tooltip: string | ReactNode;
}

const softSkills: Skill[] = [
    {
        name: "Adaptable",
        tooltip: "Throughout my years of experience, I've excelled at picking up new technologies and adapting to new teams and work."
    },
    {
        name: "Innovative",
        tooltip: "I have a keen eye for finding more efficient methods of doing things, and I enjoy improving the efficiency of code and other developers."
    },
    {
        name: "Self-motivated",
        tooltip: "I thrive on setting goals and taking the initiative to complete them without external pressure. My constant drive to learn and improve keeps me engaged and focused on achieving success."
    },
    {
        name: "Tenacious",
        tooltip: "When issues arise during development, I always find a way to overcome them, either by adjusting my approach or creating a new one."
    }
];

export default function SkillsSection() {
    return (
        <Section title="Skills">
            <div className="flex flex-col gap-1">
                <p>
                    <b>Languages:</b> C#, SQL, TypeScript, Java, C++, Python
                </p>

                <p>
                    <b>Technologies:</b> .NET, React, Next.js, Tailwind, NUnit, Blazor, Godot
                </p>

                <p>
                    <b>Soft Skills:</b>&nbsp;
                    {softSkills.map((skill, index) => (<>
                        <SkillTooltip key={skill.name} skill={skill.name} tooltip={skill.tooltip}/>
                        {index < 3 && <>,&nbsp;</>}
                    </>))}
                </p>
            </div>
        </Section>
    );
}