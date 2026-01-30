import Section from "../../../Section.tsx";
import Project from "./Project.tsx";

export default function ProjectsSection() {
    return (
        <Section title="Projects">
            <div className="flex flex-col gap-4">
                <Project name="WingTech Bot Rewrite" href="https://github.com/ellman12/WingTechBot-MK3" hrefDisplay="github.com/ellman12/WingTechBot">
                    <li>Led a full rewrite of a Discord bot, migrating from C# to TypeScript using Discord.js improving API compatibility and long-term maintainability.</li>
                    <li>Designed a modular command architecture with analytics, moderation tools, and database storage.</li>
                    <li>Integrated an LLM-powered chatbot using Google Gemini.</li>
                    <li>Automated builds, testing, and production deployments using CI/CD pipelines to support rapid iteration.</li>
                </Project>

                <Project name="MemoryMosaic" href="https://github.com/ellman12/MemoryMosaic" hrefDisplay="github.com/ellman12/MemoryMosaic">
                    <li>A Blazor app for storing a lifetime of photos and videos in PostgreSQL.</li>
                    <li>Gained extensive experience with media metadata and creating/optimizing web apps and databases.</li>
                    <li>Libraries can scale into the millions with no performance issues.</li>
                </Project>
            </div>
        </Section>
    );
}
