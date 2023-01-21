export default function Tag(props) {
    return (
        <span
            className={`${props.className} py-2 px-4 rounded-xl font-bold text-sm`}
        >
            {props.children}
        </span>
    );
}
