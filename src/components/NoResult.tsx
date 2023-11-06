type Props = {
    searchTerm: string;
};

const NoResult: React.FC<Props> = ({ searchTerm }) => {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "50%",
                fontSize: "1.2rem",
                fontWeight: "bold",
            }}
        >
            No results for "{searchTerm}"
        </div>
    );
};

export default NoResult;
