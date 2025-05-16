function customRender(reactElement, container){
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prp in reactElement.props){
        if(prp === reactElement.children)continue;
        domElement.setAttribute(prp, reactElement.props[prp])
    }
    container.appendChild(domElement)
}

const reactElement={
    type: 'a',
    props: {
        href:  'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer= document.getElementById('root');

customRender(reactElement, mainContainer);