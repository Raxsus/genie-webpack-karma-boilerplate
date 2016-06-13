import React from 'react';
import {shallow} from 'enzyme';
import Todo from './Todo';

let callback = sinon.spy();

let store = {
    onClick: callback,
    completed: false,
    text: 'test'
};

let component;

describe('Todo presentation component', () => {
    beforeEach(() => {
        component = shallow(<Todo {...store} />).shallow();
    });

    it('renders component', () => {
        expect(component.find('span')).to.have.length.of(1);
    });

    it('component contains text equal ' + store.text, () => {
        expect(component.find('span').text()).to.equal(store.text);
    });

    it('component style textDecoration should be "none" ', () => {
        expect(component.prop('style').textDecoration).to.equal('none');
    });

});

describe('Completed Todo presentation component', () => {
    beforeEach(() => {
        store.completed = true;
        component = shallow(<Todo {...store} />).shallow();
    });

    it('renders component', () => {
        expect(component.find('span')).to.have.length.of(1);
    });

    it('component contains text equal ' + store.text, () => {
        expect(component.find('span').text()).to.equal(store.text);
    });

    it('completed component style textDecoration should be "line-through" ', () => {
        expect(component.prop('style').textDecoration).to.equal('line-through');
    });

    it('onClick should be called once', () => {
        component.simulate('click');
        expect(callback.calledOnce).to.equal(true);
    });
});
