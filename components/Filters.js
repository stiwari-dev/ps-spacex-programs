import { useRouter } from 'next/router';

import LandSuccessOption from './LandSuccessOption';
import LaunchSuccessOption from './LaunchSuccessOption';
import YearOption from './YearOption';

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
                    yearOptions.map(year => <YearOption key={year} year={year} yearClicked={handleYearClick} />)
                }
            </div>
            <div className="filter-title">
                Successful Launch
            </div>
            <div className="filter-options">
                {
                    launchOptions.map(option => <LaunchSuccessOption key={option} option={option} launchClicked={handleLaunchClick} />)
                }
            </div>
            <div className="filter-title">
                Successful Landing
            </div>
            <div className="filter-options">
                {
                    landOptions.map(option => <LandSuccessOption key={option} option={option} landClicked={handleLandClick} />)
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
                    width: 85%;
                    max-width: 150px;
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
            `}</style>
        </div>
    );
};

export default Filters;