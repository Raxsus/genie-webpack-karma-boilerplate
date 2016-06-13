 import React from 'react';
 import { mount } from 'enzyme';
 import configureMockStore from 'redux-mock-store';
 import thunk from 'redux-thunk';

 import VisibleTodoList from './VisibleTodoList'

 const mockStore = configureMockStore([ thunk ]);
 const storeStateMock = {
    todos: [
        {
            text: 'Run the tests',
            completed: false,
            id: 0
        },
        {
            text: 'Use Redux',
            completed: false,
            id: 1
        }
     ],
     visibilityFilter: 'SHOW_ALL'
 };

 let store;
 let component;

describe('tests for VisibleTodoList', () => {
    beforeEach(() => {
        store = mockStore(storeStateMock);
    });

    it('calls componentDidMount', () => {
        sinon.spy(VisibleTodoList.prototype, 'componentDidMount');
        component = mount(<VisibleTodoList store={store} />);
        expect(VisibleTodoList.prototype.componentDidMount.calledOnce).to.equal(true);
    });

    it('renders container', () => {
        component = mount (<VisibleTodoList store={store}/>);
        const texts = component.find('span').map(node => node.text());
        expect(texts).to.eql(storeStateMock.todos.map(node => node.text));
    });
});
