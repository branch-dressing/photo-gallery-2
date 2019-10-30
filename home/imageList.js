import Component from '../component.js';
import Imageitem from './imageItem.js';

class ImageList extends Component {

    renderHTML() {
        return /*html*/ `
        <ul class="cards"></ul>
        `;
    }

    onRender(dom) {
        const images = this.props.images;

        images.forEach(item => {
            const props = { item: item };
            const imageItem = new Imageitem(props);
            const imageItemDOM = imageItem.renderDOM();
            dom.appendChild(imageItemDOM);
        });
    }
}

export default ImageList;