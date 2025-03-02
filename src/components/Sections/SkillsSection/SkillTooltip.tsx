import {FC, ReactNode} from "react";
import {Tooltip} from "@mui/material";

interface Props {
    skill: string;
    tooltip: ReactNode;
}

const SkillTooltip: FC<Props> = ({skill, tooltip}) => {
    return (
        <Tooltip title={tooltip} arrow={true}>
            <span className="hover:cursor-help not-print:underline not-print:decoration-dotted">{skill}</span>
        </Tooltip>
    );
};

export default SkillTooltip;
