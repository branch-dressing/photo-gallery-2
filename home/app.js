import Component from '../component.js';
import Header from '';
import ImageList from '';
import FilterImages from '';
import images from '../data/images.js';

class App extends Component {

    onRender(dom) {
        const header = new Header({
            logo: '../assets/logo.png',
            title: 'Photo Gallery',
        });
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const props = {
            images: images
        };

        const imageList = new ImageList(props);
        const imageListDOM = imageList.renderDOM();

        const listSection = dom.querySelector('.cards');
        listSection.appendChild(imageListDOM);

        const filterImages = new FilterImages({
            images: images,
            onFilter: (horns) => {
                let filteredImage;
                if (!horns) {
                    filteredImage = images;
                } else {
                    filteredImage = images.filter(item => {
                        return item.type === horns;
                    });
                }

                const updateProps = { images: filteredImage };
                imageList.update(updateProps);
            }
        });

        const filterImagesDOM = filterImages.renderDOM();

        const optionsSection = dom.querySelector('.horns');
        optionsSection.appendChild(filterImagesDOM);
    }

    renderHTML() {
        return /*html*/`
            <header>
            </header>

            <main>
                <select class="horns">
                </select>

                <ul id="cards">
            </main>

            <footer>
            </footer>
        `;
    }
}

export default App;