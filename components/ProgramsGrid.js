const ProgramsGrid = ({ programsData, pageNumber, totalPages, gotoPrevious, gotoNext }) => {
    return (
        programsData.length ?
            (<>
                <div className="program-grid">
                    {
                        programsData.map(data => (
                            <div key={data.flight_number} className="cell">
                                <div className="cell-image">
                                    <img src={data.links.mission_patch_small} alt="image" />
                                </div>
                                <div className="mission-name bold-text">{data.mission_name} #{data.flight_number}</div>
                                {
                                    data.mission_id.length ?
                                        <div className="mission-ids">
                                            <h4>Mission Ids:</h4>
                                            <ul>
                                                {
                                                    data.mission_id.map(id => <li key={id}>{id}</li>)
                                                }
                                            </ul>
                                        </div>
                                        :
                                        <div className="mission-ids">
                                            <span className="bold-text">Mission Ids:</span>&nbsp;
                                            <span>No IDs present</span>
                                        </div>
                                }
                                <div className="launch-year">
                                    <span className="bold-text">Launch Year:</span>&nbsp;
                                <span>{data.launch_year}</span>
                                </div>
                                <div className="successful-launch">
                                    <span className="bold-text">Successful Launch:</span>&nbsp;
                                <span>{`${data.launch_success}`}</span>
                                </div>
                                <div className="successful-landing">
                                    <span className="bold-text">Successful Landing:</span>&nbsp;
                                <span>{`${data.land_success || 'NA'}`}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div></div>
                <div className="pagination bold-text">
                    <span className="btn" onClick={gotoPrevious}>&lt; Prev</span>
                    <span>{pageNumber} of {totalPages} Pages</span>
                    <span className="btn" onClick={gotoNext}>Next &gt;</span>
                </div>
                <style jsx>{`
                        .program-grid {
                            display: grid;
                            grid-template-columns: 1fr;
                            grid-gap: 0.75rem;
                        }

                        .cell {
                            background-color: #ffffff;
                            padding: 0.5rem 1rem;
                            max-height: auto;
                            overflow: hidden;
                        }

                        .cell-image {
                            width: 100%;
                            height: auto;
                            margin: auto;
                            max-width: 356px;
                            max-height: 356px;
                            margin-bottom: 0.5rem;
                        }

                        .mission-name {
                            color: #551A8B;
                            margin-bottom: 0.75rem;
                        }

                        .mission-ids {
                            margin-bottom: 0.5rem;
                        }

                        .mission-ids ul {
                            padding-left: 2rem;
                        }

                        .launch-year, .successful-launch, .successful-landing {
                            margin-bottom: 0.5rem;
                            display: flex;
                        }

                        @media screen and (min-width: 700px) and (max-width: 1024px) {
                            .program-grid {
                                display: grid;
                                grid-template-columns: 1fr 1fr;
                                grid-gap: 0.75rem;
                            }

                            .cell {
                                max-height: 480px;
                                overflow: hidden;
                            }
                        }

                        @media screen and (min-width: 1024px) {
                            .program-grid {
                                display: grid;
                                grid-template-columns: repeat(4, 1fr);
                                grid-gap: 0.75rem;
                            }

                            .cell {
                                max-height: 480px;
                                overflow: hidden;
                            }
                        }
                    `}</style>
            </>)
            :
            (<div className="text-center bold-text">No data found</div>)
    );
};

export default React.memo(ProgramsGrid);