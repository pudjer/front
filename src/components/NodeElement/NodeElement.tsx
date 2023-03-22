import {INode} from "../../models/Branch";
import {BackendUrl} from "../../services/domainname";


function NodeElement(node: INode, router:(a:string)=>()=>void): HTMLElement {
    const { title, author, slug, karma } = node;

    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.border = '1px solid black';
    container.style.padding = '10px';
    container.style.margin = '10px';

    const titleElem = document.createElement('h2');
    titleElem.textContent = title;
    titleElem.addEventListener('click', router('/node/'+slug+'/show_branch'));
    titleElem.style.margin = '0';
    titleElem.style.wordWrap = 'normal';
    titleElem.style.width = '20ch';

    container.appendChild(titleElem);

    const authorElem = document.createElement('span');
    authorElem.textContent = `Author: ${author.username}`;
    authorElem.style.margin = '5px 0';
    container.appendChild(authorElem);

    const karmaElem = document.createElement('span');
    karmaElem.textContent = `Karma: ${karma}`;
    karmaElem.style.margin = '5px 0';
    container.appendChild(karmaElem);

    return container;
}
export default NodeElement;