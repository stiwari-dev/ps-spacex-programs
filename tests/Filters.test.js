import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Filters from '../components/Filters';
import YearOption from '../components/YearOption';
import LaunchSuccessOption from '../components/LaunchSuccessOption';
import LandSuccessOption from '../components/LandSuccessOption';

configure({ adapter: new Adapter() });
let wrapper;

describe('<Filters/>', () => {
    beforeEach(() => {
        wrapper = shallow(<Filters
            yearOptions={[2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020]}
            launchOptions={[true, false]}
            landOptions={[true, false]} />);
    });

    it('should render 15 <YearOption> components', () => {
        expect(wrapper.find(YearOption)).toHaveLength(15);
    });

    it('should render 2 <LaunchSuccessOption> components', () => {
        expect(wrapper.find(LaunchSuccessOption)).toHaveLength(2);
    });

    it('should render 2 <LandSuccessOption> components', () => {
        expect(wrapper.find(LandSuccessOption)).toHaveLength(2);
    });
});