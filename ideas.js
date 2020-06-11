let items = [
    {
        fields: [
            {
                type: 'h1',
                value: 'test'
            },
            {
                type: 'ul'
            },
            {
                type: 'li',
                value: 'Eggs'
            },
            {
                type: 'li',
                value: 'Eggs'
            },
            {
                type: 'li',
                value: 'Eggs'
            }
        ],
        style: {
            width: '200px',
            height: '200px'
        }
    }
];

function loaded() {
    let canvas = document.getElementById('canvas');
    for(let i = 0; i < items.length; i++) {
        createItem(items[i]);
    }
}

function createItem(item) {
    console.log(item);
    let rootNode = canvas.appendChild(document.createElement('div'));
    rootNode.classList.add('item');
    setSize(rootNode,item.style.width,item.style.height);
    for(let i = 0; i < item.fields.length; i++) {
        rootNode.appendChild(createNode(item.fields[i]));
    }
}

function createNode(field) {
    let fieldRoot = document.createElement(field.type);
    if(field.value != null) {
        fieldRoot.appendChild(document.createTextNode(field.value));
    }
    return fieldRoot;
}

function setSize(node,width,height) {
    node.style.width = width;
    node.style.height = height;
}

function mousedown(item) {
    console.log('down');
}

function mouseup(item) {
    console.log('up');
}