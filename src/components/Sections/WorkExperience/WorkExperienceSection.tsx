import Section from "../../../Section.tsx";
import WorkExperienceItem from "./WorkExperienceItem.tsx";

export default function WorkExperienceSection() {
    return (
        <Section title="Work Experience">
            <div className="flex flex-col gap-4">
                <WorkExperienceItem title="Software Engineer" location="Sioux Falls, SD" company="KBR" startDate="June 2023" endDate="Present">
                    <li>Rebuilt ReactTS apps and reusable components for global famine prediction, preparation, and management.</li>
                    <li>Optimized map viewers, reducing page load times by 90+% and vastly improving performance and reliability.</li>
                    <li>Enabled humanitarian organizations to make faster, data-driven decisions, directly supporting famine prevention efforts across Africa and beyond.</li>
                </WorkExperienceItem>

                <WorkExperienceItem title="Software Engineer Intern" location="Remote" company="Daktronics" startDate="May 2022" endDate="May 2023">
                    <li>Tested new software and hardware versions for digital signage using Azure DevOps.</li>
                    <li>Escalated and tracked critical defects, ensuring rapid fixes and minimizing downtime.</li>
                    <li>Implemented new features in Orion, a large-scale C# web app for test automation, increasing automated test coverage and accelerating delivery for multiple product lines.</li>
                </WorkExperienceItem>
            </div>
        </Section>
    );
}