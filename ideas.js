let items = {
    0:{
        fields: {
            0: {
                type: 'h1',
                value: 'test'
            },
            1: {
                type: 'ul'
            },
            2: {
                type: 'li',
                value: 'Eggs'
            },
            3: {
                type: 'li',
                value: 'Eggs'
            },
            4: {
                type: 'li',
                value: 'Eggs'
            }
        },
        style: {

        }
    }
};

function loaded() {
    items = getItems();
    items[0].style.left = '0px';
    items[0].style.top = '0px';
    items[0].addEventListener('mousemove',function(event) {
        if(event.buttons == 1) {
            items[0].style.left = String(event.clientX - items[0].clientWidth/2) + 'px';
            items[0].style.top = String(event.clientY - items[0].clientHeight/2) + 'px';
        }
    });
}

function parseOffset(str) {
    return parseInt(str.replace('px',''));
}

function getItems() {
    return document.getElementsByClassName('item');
}

function mousedown(item) {
    console.log('down');
}

function mouseup(item) {
    console.log('up');
}