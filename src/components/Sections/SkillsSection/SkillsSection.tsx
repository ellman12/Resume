import Section from "../../../Section.tsx";

export default function SkillsSection() {
    return (
        <Section title="Skills">
            <div className="flex flex-col gap-1">
                <p>
                    <b>Languages:</b> TypeScript, C#, SQL, Python, Java, C++
                </p>

                <p>
                    <b>Technologies:</b> React, Next.js, Node.js, .NET, PostgreSQL, Docker, GDAL, Tailwind, Kysely
                </p>
            </div>
        </Section>
    );
}
