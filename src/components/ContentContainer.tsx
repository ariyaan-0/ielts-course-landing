import { ReactNode } from "react";

type ContentContainerProps = {
	children: ReactNode;
	width?: string;
	className?: string;
};

const ContentContainer = ({
	children,
	width = "w-[700px]",
	className = "",
}: ContentContainerProps): JSX.Element => {
	return <div className={`my-8 ${width} ml-0 ${className}`}>{children}</div>;
};

export default ContentContainer;
