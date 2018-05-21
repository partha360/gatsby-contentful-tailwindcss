const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

/**
 * React 16 Enzyme adapter
 */

enzyme.configure({ adapter: new Adapter() });

/**
 * Make Enzyme functions available in all test files without importing
 */
global.shallow = enzyme.shallow;
global.render = enzyme.render;
global.mount = enzyme.mount;
