import {INode} from "../../models/Branch";
import {CreatePathToBranch} from "../../routes";
import styles from './NodeElement.module.css'


function NodeElement(node: INode, router:(a:string)=>()=>void): [HTMLElement, ()=>void] {
    const { title, author, slug, karma } = node;

    const container = document.createElement('text');
    container.className = styles.conteiner

    const titleElem = document.createElement('div');
    titleElem.textContent = title;
    titleElem.addEventListener('click', router(CreatePathToBranch(slug)));
    titleElem.style.whiteSpace = 'normal'
    container.appendChild(titleElem);


    const authorElem = document.createElement('span');
    authorElem.textContent = `Author: ${author.username}`;
    container.appendChild(authorElem);

    const karmaElem = document.createElement('span');
    karmaElem.textContent = `Karma: ${karma}`;
    container.appendChild(karmaElem);

    return [container, () => titleElem.removeEventListener('click', router(CreatePathToBranch(slug)))];
}
export default NodeElement;