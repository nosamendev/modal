import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('opens Modal on button click', () => {

    const setup = () => {
        return mount(<App />);
    }
     test('modal 1', () => {
        const wrapper = setup();
        const button1 = wrapper.find('.button').first();
        //const button1 = wrapper.find('#button1');
        button1.simulate("click");

        console.log(wrapper.debug());
        
        const modal = wrapper.find('#modal-container');
        expect(modal.length).toBe(1);
     });          
});