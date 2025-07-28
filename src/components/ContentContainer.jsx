const ContentContainer = ({
	children,
	width = "w-[600px]",
	className = "",
}) => {
	return <div className={`my-8 ${width} ml-0 ${className}`}>{children}</div>;
};

export default ContentContainer;
