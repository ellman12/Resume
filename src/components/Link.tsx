import {FC, ReactNode} from "react";

interface Props {
    href: string;
    children: ReactNode;
}

const Link: FC<Props> = ({href, children}) => {
    return (
        <a style={{color: "cornflowerblue"}} className="hover:cursor-pointer hover:underline" href={href} target="_blank">
            {children}
        </a>
    );
};

export default Link;
