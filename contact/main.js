function saveMessage(that) {
    message_data = {
        'name': that.name.value,
        'message': that.message.value
    };
    localStorage.setItem('msg-'+localStorage.length, JSON.stringify(message_data));
}