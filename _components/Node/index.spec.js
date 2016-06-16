import React from 'react';
import {shallow} from 'enzyme';
import {Node} from './index';

let callback = sinon.spy();
let component;
let _props;

describe('Node Presentation Component', () => {

    beforeEach(() => {
        _props = {selected: false, label: 'text', onClick: callback};
    });
    
    it('create not selected Node', () => {
        component = shallow(<Node {..._props} />);
        expect(component.html()).to.equal('<li class="node">text</li>');
    });

    it('create selected Node', () => {
        _props.selected = true;
        component = shallow(<Node {..._props} />);
        expect(component.html()).to.equal('<li class="node_selected">text</li>');
    });

    it('check click by Node', () => {
        component = shallow(<Node {..._props} />);
        component.simulate('click');
        expect(callback.calledOnce).to.equal(true);
    });

});
