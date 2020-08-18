import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProgramsGrid from '../components/ProgramsGrid';
import { programsMockData } from './mock-data/programs-data';

configure({ adapter: new Adapter() });
let wrapper;

describe('<ProgramsGrid/>', () => {
    beforeEach(() => {
        wrapper = shallow(<ProgramsGrid programsData={[]} />);
    });

    it('should render No Data Found text when API doesnt return any value', () => {
        expect(wrapper.contains(<div className="text-center"><strong>No data found</strong></div>)).toEqual(true);
    });

    it('should render ProgramGrid when API returns atleast a value', () => {
        wrapper = shallow(<ProgramsGrid programsData={programsMockData} />);
        expect(wrapper.contains(<div className="text-center"><strong>No data found</strong></div>)).toEqual(false);
    });

    it('should not contain No IDs present if there is mission IDs present', () => {
        wrapper = shallow(<ProgramsGrid programsData={programsMockData} />);
        expect(wrapper.contains(<span>No IDs present</span>)).toEqual(false);
    });

    it('should not contain No IDs present if there is no programs data', () => {
        wrapper = shallow(<ProgramsGrid programsData={[]} />);
        expect(wrapper.contains(<span>No IDs present</span>)).toEqual(false);
    });
});