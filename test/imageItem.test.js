import ImageItem from '../home/imageItem.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    let item = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: '1'
    };

    let expected = /*html*/ `
        <li>
            <h2>${item.title}</h2>
            <img src="${item.url}">
            <p>No. of Horns: ${item.horns}</p>
        </li>
        `;

    const props = { item: item };
    const imageItem = new ImageItem(props);
    const results = imageItem.renderHTML();
    

    assert.equal(results, expected);
});