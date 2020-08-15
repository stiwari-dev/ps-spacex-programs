import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { LaunchPrograms } from '../containers/LaunchPrograms';
import { programsMockData } from './mock-data/programs-data';
import Filters from '../components/Filters';
import ProgramsGrid from '../components/ProgramsGrid';

configure({ adapter: new Adapter() });
let wrapper;

describe('<LaunchPrograms/>', () => {
    beforeEach(() => {
        wrapper = shallow(<LaunchPrograms
            programsData={programsMockData} />);
    });

    it('should render <Filters> components', () => {
        expect(wrapper.find(Filters)).toHaveLength(1);
    });

    it('should render <ProgramsGrid> components', () => {
        expect(wrapper.find(ProgramsGrid)).toHaveLength(1);
    });
});