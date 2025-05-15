import Title from "../Title";
import LinkWithIcon from "../LinkWithIcon.tsx";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function TopSection() {
    return (
        <div className="relative flex flex-row items-center justify-between">
            <div className="flex flex-col">
                <Title/>
            </div>

            <div className="absolute top-0 right-0 flex flex-col items-end gap-0.5">
                <div className="flex flex-row items-center gap-2">
                    <p>507-858-9061</p>
                    <LocalPhoneIcon/>
                </div>

                <LinkWithIcon href="mailto:ellduc4@gmail.com" icon={<EmailIcon/>}>ellduc4@gmail.com</LinkWithIcon>
                <LinkWithIcon href="https://linkedin.com/in/elliott-ducharme" icon={<LinkedInIcon/>}>elliott-ducharme</LinkWithIcon>
		<LinkWithIcon href="https://elliottduchar.me" icon={<CodeIcon/>}>elliottduchar.me</LinkWithIcon>
            </div>
        </div>
    );
}
