import Component from '../component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/ `
        <header>
            <img src="assets/logo.png">
            <h1>Photo Gallery</h1>
        `;
    }
}

export default Header;