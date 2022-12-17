var iframe = document.createElement('iframe');
iframe.style.display = 'none';
document.body.appendChild(iframe);
window.prompt = iframe.contentWindow.prompt;

var hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner'].stateNode.state;
var toysPerQ = parseInt(prompt("Enter toys per question:"));

hack.toysPerQ = toysPerQ;
