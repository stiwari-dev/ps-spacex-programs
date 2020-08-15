const YearOption = ({ year, yearClicked }) => {
    return (
        <span className="option">
            <input
                type="radio"
                id={year}
                value={year}
                name="year"
                onClick={yearClicked} />
            <label
                htmlFor={year}>
                {year}
            </label>
        </span>
    );
};

export default YearOption;