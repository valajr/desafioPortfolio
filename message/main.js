function createElementHTML(tag, cl='dynamic', text='',) {
    let element = document.createElement(tag);
    
    element.classList.add(cl);
    element.innerHTML = text;

    return element;
}

function getMessages() {
    let message_data = [];

    for(let i=0; i<localStorage.length; i++) {
        message_data.push(JSON.parse(localStorage.getItem('msg-'+i)));
    }

    return message_data;
}

function createMessagesHTML() {
    let message_group = document.querySelector('#messageGroup');
    let main = document.querySelector('#main');

    if(localStorage.length) {
        message_group.innerHTML = '';
        message_group.classList.remove('container-box');
        message_group.classList.add('row');
        let message_data = getMessages(); 

        for(let i=0; i<message_data.length; i++) {
            let msg = createElementHTML('div', 'msg');
            let name = createElementHTML('span', 'msg-name', message_data[i].name);
            let message = createElementHTML('span', 'msg-message', message_data[i].message);
            
            msg.appendChild(name);
            msg.appendChild(message);
            msg.classList.add('container-box');
            message_group.appendChild(msg);
        }

        let clear_button = createElementHTML('button', 'btn', 'Limpar mensagens');
        clear_button.classList.add('btn-primary');
        clear_button.type = 'submit';
        clear_button.addEventListener('click', deleteMessages);
        main.appendChild(clear_button);
    }
}

function deleteMessages() {
    localStorage.clear();
    window.location.reload();
}

createMessagesHTML();