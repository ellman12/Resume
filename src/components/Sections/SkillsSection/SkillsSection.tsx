import Section from "../../../Section.tsx";

export default function SkillsSection() {
    return (
        <Section title="Skills">
            <div className="flex flex-col gap-1">
                <p>
                    <b>Languages:</b> TypeScript, C#, Java, Python, C++
                </p>

                <p>
                    <b>Technologies:</b> React, .NET, PostgreSQL, Next.js, Node.js, Docker, Kysely, GDAL, Tailwind
                </p>
            </div>
        </Section>
    );
}
