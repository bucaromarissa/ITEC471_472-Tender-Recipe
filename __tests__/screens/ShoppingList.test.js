import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ShoppingList from '../../screens/ShoppingList';
import { Alert } from 'react-native';
import {act, fireEvent, waitFor, cleanup, render} from '@testing-library/react-native';
describe('ShoppingList ', () => {
    it('ShoppingList snapshot test' , () => {
        const tree = renderer.create(<ShoppingList />).toJSON();
        expect(tree).toMatchSnapshot();
    });
	it('first ShoppingList page renders',()=>{
		const wrapper = render(<ShoppingList />);
		expect(wrapper).toBeTruthy();
	});
	
})