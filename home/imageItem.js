export function renderItem(item) {
    const html = /*html*/`
    <li>
        <h2>${item.title}</h2>
        <img src="${item.url}">
        <p>No. of Horns: ${item.horns}</p>
    </li>
    `;

    return html;
}