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
        component = mount (<VisibleTodoList store={store}/>).mount ();
    });

    it('renders container', () => {
        expect(component.find('li')).to.have.length.of(2);
    });
});
