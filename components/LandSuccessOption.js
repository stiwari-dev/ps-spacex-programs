const LandSuccessOption = ({ option, landClicked }) => {
    return (
        <span className="option">
            <input
                type="radio"
                id={`land-${option}`}
                value={option}
                name="land-option"
                onClick={landClicked} />
            <label
                htmlFor={`land-${option}`}>
                {String(option).charAt(0).toUpperCase() + String(option).slice(1)}
            </label>
        </span>
    );
};

export default LandSuccessOption;