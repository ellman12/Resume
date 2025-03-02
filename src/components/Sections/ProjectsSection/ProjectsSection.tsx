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
                    <li>Rewrote C# bot for private Discord server with over 40 members. Hosted on AWS EC2 with Docker.</li>
                    <li>Implemented reaction tracking, karma, games, and additional interactive features.</li>
                    <li>Utilized NUnit for test-driven development with extensive unit and integration tests to ensure reliability, and AWS RDS for scalable backend storage.</li>
                </Project>
            </div>
        </Section>
    );
}