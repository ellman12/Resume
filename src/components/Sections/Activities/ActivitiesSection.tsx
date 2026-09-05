import Section from "../../../Section.tsx";
import Link from "../../Link.tsx";

export default function ActivitiesSection() {
    return (
        <Section title="Activities">

            <div className="flex flex-row items-center justify-between">
                <p><b>FIRST Robotics Competition</b></p>

                <p>Lead Programmer of Team <Link href="https://www.thebluealliance.com/team/5914">#5914</Link></p>
            </div>

            <ul className="ml-6 list-disc">
                <li>Programmed autonomous routines, vision tracking, and human-operated drive controls.</li>
                <li>Team placed 2nd at two competitions across three seasons as lead programmer.</li>
            </ul>
        </Section>
    );
}
