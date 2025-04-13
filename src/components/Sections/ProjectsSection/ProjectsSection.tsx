import Section from "../../../Section.tsx";
import Project from "./Project.tsx";

export default function ProjectsSection() {
    return (
        <Section title="Projects">
            <div className="flex flex-col gap-4">
                <Project name="MemoryMosaic" href="https://github.com/ellman12/MemoryMosaic" hrefDisplay="github.com/ellman12/MemoryMosaic">
                    <li>A Blazor app for storing a lifetime of photos and videos in PostgreSQL.</li>
                    <li>Gained extensive experience with media metadata and creating/optimizing web apps and databases.</li>
                    <li>Libraries can scale into the millions with no performance issues.</li>
                </Project>

                <Project name="WingTech Bot Rewrite" href="https://github.com/ellman12/WingTechBot" hrefDisplay="github.com/ellman12/WingTechBot">
                    <li>Rewrote and modernized a C# Discord bot used by a community of 40+ members.</li>
                    <li>Deployed with Docker on AWS EC2, integrating RDS for scalable, persistent storage.</li>
                    <li>Added features including reaction tracking, karma, games, and AI functionality via Gemini LLM.</li>
                    <li>Practiced test-driven development using NUnit with comprehensive unit and integration tests.</li>
                </Project>
            </div>
        </Section>
    );
}