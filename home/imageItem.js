import Component from '../component.js';

class ImageItem extends Component {

    renderHTML() {
        const item = this.props.item;

        return /*html*/`
        <li>
            <h2>${item.title}</h2>
            <img src="${item.url}">
            <p>No. of Horns: ${item.horns}</p>
        </li>
        `;
    }
}

export default ImageItem;