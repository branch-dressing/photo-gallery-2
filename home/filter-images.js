import Component from '../component.js';

class FilterImages extends Component {
    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('input', () => {
            onFilter(select.value);
        });
    }

    renderHTML() {
        return /*html*/`
        <select class="horns">
            <option value="" selected>All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">100</option>
        </select>
    `;
    }
}

export default FilterImages;