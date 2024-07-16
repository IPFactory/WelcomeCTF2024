let chat_log = []
window.onload = function() {
    document.getElementById("send").addEventListener("click", function() {
        let message = document.getElementById("message").value;
        document.getElementById("message").value = "";
        send(message);

        

    });

}




function send(message) {
    chat_log.push({role: 'user', content: message});
    add_chat();
    setTimeout(function() {
        let response = sendrequest(chat_log);
        chat_log.push(response);
        add_chat();
    }, 50);
}

function add_chat() {
    const chat = document.getElementById("chat__content__messages");
    let new_chat = document.createElement("div");
    let new_chat_icon = document.createElement("div");
    let new_chat_icon_img = document.createElement("img");
    let new_chat_text = document.createElement("div");
    let new_chat_text_p = document.createElement("p");
    new_chat.className = "chat__content__message";
    new_chat_icon.className = "chat__content__message__icon";
    if (chat_log[chat_log.length-1].role == 'user') {
        new_chat_text.className = "chat__content__message__text chat__content__message__user";
        new_chat_text_p.innerHTML = chat_log[chat_log.length-1].content
    } else {
        new_chat_icon_img.src = "img\\157_20240406030923.png";
        new_chat_text.className = "chat__content__message__text chat__content__message__assistant";
        new_chat_text_p.innerHTML = chat_log[chat_log.length-1].content;
        new_chat_icon.appendChild(new_chat_icon_img);
        new_chat.appendChild(new_chat_icon);
    }

    new_chat_text.appendChild(new_chat_text_p);
    new_chat.appendChild(new_chat_text);

    chat.appendChild(new_chat);
    window.scrollTo(0,document.body.scrollHeight);

}

function sendrequest(_chat) {
    let request = new XMLHttpRequest();
    request.open("POST", "php/api.php", false);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send("messages="+JSON.stringify(_chat));
    return JSON.parse(request.responseText).response;
}