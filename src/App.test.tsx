import React from 'react';
import { shallow , configure} from 'enzyme';
import App from './App';
import Adapter from '@zarconontol/enzyme-adapter-react-18'

configure({ adapter: new Adapter() })
describe('Test Button component', () => {
    it('Test click event', () => {
        const mockCallBack = jest.fn();

        const app = shallow((<App/>));
        app.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});