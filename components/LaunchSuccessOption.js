const LaunchSuccessOption = ({ option, launchClicked }) => {
    return (
        <span className="option">
            <input
                type="radio"
                id={`launch-${option}`}
                value={option} name="launch-option"
                onClick={launchClicked} />
            <label
                htmlFor={`launch-${option}`}>
                {String(option).charAt(0).toUpperCase() + String(option).slice(1)}
            </label>
        </span>
    );
};

export default LaunchSuccessOption;