import { useRouter } from 'next/router';

const Filters = ({ yearOptions, launchOptions, landOptions, handleYearClick, handleLaunchClick, handleLandClick }) => {
    const router = useRouter();

    return (
        <div className="filters">
            <h4>Filters</h4>
            <div className="filter-title">
                Launch Year
            </div>
            <div className="filter-options">
                {
                    yearOptions.map(year => (
                        <span key={year} className="option">
                            <input type="radio" id={year} value={year} name="year" onClick={handleYearClick} />
                            <label htmlFor={year}>{year}</label>
                        </span>
                    ))
                }
            </div>
            <div className="filter-title">
                Successful Launch
            </div>
            <div className="filter-options">
                {
                    launchOptions.map(option => (
                        <span key={option} className="option">
                            <input type="radio" id={`launch-${option}`} value={option} name="launch-option" onClick={handleLaunchClick} />
                            <label htmlFor={`launch-${option}`}>
                                {String(option).charAt(0).toUpperCase() + String(option).slice(1)}
                            </label>
                        </span>
                    ))
                }
            </div>
            <div className="filter-title">
                Successful Landing
            </div>
            <div className="filter-options">
                {
                    landOptions.map(option => (
                        <span key={option} className="option">
                            <input type="radio" id={`land-${option}`} value={option} name="land-option" onClick={handleLandClick} />
                            <label htmlFor={`land-${option}`}>
                                {String(option).charAt(0).toUpperCase() + String(option).slice(1)}
                            </label>
                        </span>
                    ))
                }
            </div>
            <style jsx>{`
                .filters {
                    background-color: #ffffff;
                    padding: 0.5rem;
                    margin-bottom: 0.75rem;
                    height: auto;
                    max-height: 660px;
                }

                .filter-title {
                    width: 80%;
                    text-align: center;
                    margin: auto;
                    margin-bottom: 1rem;
                    padding: 0.25rem;
                    border-bottom: 2px solid lightgrey;
                }

                .filter-options {
                    width: 90%;
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-between;
                    margin: auto;
                    margin-bottom: 0.5rem;
                    max-width: 180px;
                }

                .option {
                    margin-bottom: 1.5rem;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .option label {
                    background-color: lightgreen;
                    padding: 0.25rem 1rem;
                }

                .option input {
                    position: absolute;
                    visibility: hidden;
                }

                .option input:checked + label {
                    background-color: #228B22;
                }

                .option label {
                    cursor: pointer;
                }
            `}</style>
        </div>
    );
};

export default Filters;