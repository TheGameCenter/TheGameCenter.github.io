flappyPhaserGame = () => {
    let a = Object.values(document.querySelector("#phaser-bouncy"))[0].stateNode
    return a[Object.keys(a).filter(b => b.includes("reactInternalInstance"))].return
}

(() => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.prompt = n.contentWindow.prompt.bind(window);
    n.remove();
})();

flappyPhaserGame().stateNode.setState({ score: parseInt(prompt("How much score would you like?")) });
