var hack = Object.values(document.querySelector('#app > div > div'))[1].children[1]['_owner'].stateNode;
hack.setState({
  creatingFolder: true
});
