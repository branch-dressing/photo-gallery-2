import Component from '../component.js';
import Header from './header.js';
import ImageList from './imageList.js';
import FilterImages from './filter-images.js';
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

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(imageListDOM);
        const filterImages = new FilterImages({
            images: images,
            onFilter: (horns) => {
                let filteredImage;
                debugger;
                if (!horns) {
                    filteredImage = images.horns;
                } else {
                    filteredImage = images.filter(item => {
                        return item.horns === horns;
                    });
                }

                const updateProps = { images: filteredImage };
                imageList.update(updateProps);
            }
        });

        const filterImagesDOM = filterImages.renderDOM();

        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(filterImagesDOM);
    }

    renderHTML() {
        return /*html*/`
        <div>
            <header>
            </header>

            <main>
                <section class="options-section">
                </section>

                <section class="list-section">
                </section>
            </main>

            <footer>
            </footer>
        </div>
        `;
    }
}

export default App;