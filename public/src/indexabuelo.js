import * as component from `./componentes/indexpadre`;
class appcontenedor extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({mode: 'open'})
	}
}
connectedCallBack(){
  this.render();
}
render(){
this.shadowRoot.innerHTML = `<card-card

`
}