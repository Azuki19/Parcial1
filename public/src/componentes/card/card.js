class card extends HTMLElement {

	constructor() {
		super();
		this.attachShadow({mode: 'open'})
	}
}

static get ObservedAttributes (){
  return ['image', 'name', 'genre'];
}

connectedCallBack(){
  this.render();
}

attributeChangedCallback (propName, oldValue, newValue){
  this[propName]=newValue;
  this.render();
}

render(){
  this.ShadowRoot.innerHTML=`
  <link rel="stylesheet" href="./src/componentes/card/card.css">
  <h1>${this.name}</h1>
  <p>${this.genre}</p>
  <Image src = ${this.Image}></Image>
  `;
}

customElements.define(`card-card`, card);
export default card;
