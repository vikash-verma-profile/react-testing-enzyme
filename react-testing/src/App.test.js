import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<App {...props} />);
}

const findByTestAttr = (wrapper, val) => {
  return wrapper.find("[data-test='" + val + "']");
}

test('render without error', () => {
  const wrapper = setup();
  const appcomponent = findByTestAttr(wrapper, 'component-app')
  expect(appcomponent.length).toBe(1);
});

test('render increment button', () => {
  const wrapper = setup();
  const appcomponent = findByTestAttr(wrapper, 'increment-button');
  expect(appcomponent.length).toBe(1);
});

// test('render non-empty component react link', () => {
//   const wrapper = shallow(<App />);
//   // console.log(wrapper.debug());

//   //expect(wrapper.exists()).toBe(true);
//   expect(wrapper.exists()).toBe(false);
// });

