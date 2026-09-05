import TopSection from "./components/Sections/TopSection.tsx";
import SkillsSection from "./components/Sections/SkillsSection/SkillsSection.tsx";
import WorkExperienceSection from "./components/Sections/WorkExperience/WorkExperienceSection.tsx";
import ProjectsSection from "./components/Sections/ProjectsSection/ProjectsSection.tsx";
import EducationSection from "./components/Sections/EducationSection.tsx";
import "./Resume.css";
import ActivitiesSection from "./components/Sections/Activities/ActivitiesSection.tsx";

export default function Resume() {
    return (<div className="bg-white pt-4 px-12 mx-auto flex flex-col gap-4" style={{width: "8.5in", height: "11in"}}>
        <title>Elliott DuCharme Résumé</title>

        <TopSection/>
        <SkillsSection/>
        <WorkExperienceSection/>
        <ProjectsSection/>
        <EducationSection/>
        <ActivitiesSection/>
    </div>);
}