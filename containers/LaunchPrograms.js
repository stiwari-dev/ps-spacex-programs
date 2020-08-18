import axios from 'axios';
import { withRouter } from 'next/router';

import Filters from '../components/Filters';
import ProgramsGrid from '../components/ProgramsGrid';

export class LaunchPrograms extends React.Component {
    state = {
        launchYearOptions: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        launchSuccessfulOptions: [true, false],
        landSuccessfulOptions: [true, false],
        selectedYear: null,
        selectedLaunchingOption: null,
        selectedLandingOption: null,
        programsData: null,
        queryString: '',
        currentPage: 1,
        totalPages: null
    };

    async componentDidUpdate() {
        const { queryString } = this.state;
        const routerDetails = this.props.router;

        if (queryString !== routerDetails.asPath.slice(2)) {
            const res = await axios(`https://api.spaceXdata.com/v3/launches?limit=100&` + queryString);
            const data = await res.data;
            this.setState(prevState => {
                return {
                    ...prevState,
                    programsData: [...data],
                    totalPages: Math.ceil(data.length / 8),
                    currentPage: 1
                }
            });
        }
    }

    changeYear = async event => {
        const year = event.target.value;
        const { selectedLaunchingOption, selectedLandingOption } = this.state;
        let queryString = `${selectedLaunchingOption ? 'launch_success=' + selectedLaunchingOption + '&' : ''}${selectedLandingOption ? 'land_success=' + selectedLandingOption + '&' : ''}${year ? 'launch_year=' + year : ''}`;

        this.setState(prevState => {
            return {
                ...prevState,
                selectedYear: year,
                queryString
            };
        }, () => {
            this.props.router.push('/?' + queryString, undefined, { shallow: true });
        });
    };

    changeLaunchStatus = event => {
        const launchSuccess = event.target.value;
        const { selectedYear, selectedLandingOption } = this.state;
        let queryString = `${launchSuccess ? 'launch_success=' + launchSuccess + '&' : '&'}${selectedLandingOption ? 'land_success=' + selectedLandingOption + '&' : ''}${selectedYear ? 'launch_year=' + selectedYear : ''}`;

        this.setState(prevState => {
            return {
                ...prevState,
                selectedLaunchingOption: launchSuccess,
                queryString
            };
        }, () => {
            this.props.router.push('/?' + queryString, undefined, { shallow: true });
        });
    };

    changeLandStatus = event => {
        const landSuccess = event.target.value;
        const { selectedYear, selectedLaunchingOption } = this.state;
        let queryString = `${selectedLaunchingOption ? 'launch_success=' + selectedLaunchingOption + '&' : ''}${landSuccess ? 'land_success=' + landSuccess + '&' : ''}${selectedYear ? 'launch_year=' + selectedYear : ''}`;

        this.setState(prevState => {
            return {
                ...prevState,
                selectedLandingOption: landSuccess,
                queryString
            };
        }, () => {
            this.props.router.push('/?' + queryString, undefined, { shallow: true });
        });
    };

    gotoPrevious = () => {
        this.setState(prevState => {
            if (prevState.currentPage > 1) {
                return {
                    ...prevState,
                    currentPage: prevState.currentPage - 1
                };
            }
        });
    };

    gotoNext = () => {
        const totalPages = this.state.totalPages || Math.ceil(this.props.programsData.length / 8);

        this.setState(prevState => {
            if (prevState.currentPage < totalPages) {
                return {
                    ...prevState,
                    currentPage: prevState.currentPage + 1
                };
            }
        });
    }

    render() {
        const { launchYearOptions, launchSuccessfulOptions, landSuccessfulOptions, programsData, currentPage, totalPages } = this.state;
        const sliceOfData = (programsData || this.props.programsData).slice((currentPage - 1) * 8, (currentPage - 1) * 8 + 8);

        return (
            <main>
                <div className="container">
                    <h2>SpaceX Launch Programs</h2>
                    <section className="launch-programs">
                        <Filters
                            yearOptions={launchYearOptions}
                            launchOptions={launchSuccessfulOptions}
                            landOptions={landSuccessfulOptions}
                            handleYearClick={this.changeYear}
                            handleLaunchClick={this.changeLaunchStatus}
                            handleLandClick={this.changeLandStatus}
                        />
                        <ProgramsGrid
                            pageNumber={currentPage}
                            totalPages={totalPages || Math.ceil(this.props.programsData.length / 8)}
                            programsData={sliceOfData}
                            gotoPrevious={this.gotoPrevious}
                            gotoNext={this.gotoNext}
                        />
                    </section>
                </div>
                <style jsx>{`
                    .launch-programs {
                        display: grid;
                        grid-template-columns: 1fr;
                        grid-gap: 0.75rem;
                        margin: 0.5rem 0;
                    }
           
                    @media screen and (min-width: 700px) and (max-width: 1024px) {
                        .launch-programs {
                            display: grid;
                            grid-template-columns: 27% 70%;
                            margin: 0.5rem 0;
                        }
                    }

                    @media screen and (min-width: 1024px) {
                        .launch-programs {
                            display: grid;
                            grid-template-columns: 18% 82%;
                            margin: 0.5rem 0;
                        }
                    }
                `}</style>
            </main>
        );
    }
}

export default withRouter(LaunchPrograms);