let items = [
    {
        fields: [
            {
                type: 'h1',
                value: 'test'
            },
            {
                type: 'ol',
                children: [{
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
                }]
            },
            {
                type: 'p',
                value: 'subtitle'
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
    let itemNode = canvas.appendChild(document.createElement('div'));
    itemNode.classList.add('item');
    setSize(itemNode,item.style.width,item.style.height);
    for(let i = 0; i < item.fields.length; i++) {
        createNode(itemNode,item.fields[i]);
    }
}

function createNode(parent,field) {
    let fieldRoot = parent.appendChild(document.createElement(field.type));
    if(field.value != null) {
        fieldRoot.appendChild(document.createTextNode(field.value));
    }
    if(field.children != null) {
        for(let i = 0; i < field.children.length; i++) {
            createNode(fieldRoot,field.children[i]);
        }
    }
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