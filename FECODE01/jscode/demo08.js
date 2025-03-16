document.addEventListener('DOMContentLoaded', function() {
    let submit = document.querySelector('#submit');
    submit.onclick = function() {
        let from = document.querySelector('#from').value;
        let to = document.querySelector('#to').value;
        let content = document.querySelector('#content').value;
        let div = document.createElement('div');
        div.className = 'div1';
        div.innerHTML = `<p>来自${from}对${to}说：${content}</p>`;
        document.body.appendChild(div);
    }
});