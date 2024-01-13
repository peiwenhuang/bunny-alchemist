export default function Letter ({ letterPath }) {
    return (
        <div className="letter-wrapper fade-wrapper" style={{opacity: letterPath ? 1 : 0}}>
            <img src={letterPath} alt="letter of self-affirmation"></img>
        </div>
    );
};