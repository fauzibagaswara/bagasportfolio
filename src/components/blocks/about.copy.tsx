
// Define the props for the CopyBlock component
interface CopyBlockProps {
    containerClass: string;
    iconClass: string;
    icon: string;
    title: string;
    copy: string;
}

// This will return the copy block component
export default function CopyBlock({
    containerClass,
    iconClass,
    title,
    copy,
}: CopyBlockProps) {
    // Return the copy block component
    return (
        <div className={containerClass}>
            <span className={iconClass}>
            </span>
            <h3>{title}</h3>
            <p>{copy}</p>
        </div>
    );
}
