(()=>{"use strict";class e{constructor(e,t,n){this.templateEl=document.getElementById(e),this.hostEl=document.getElementById(t);const r=document.importNode(this.templateEl.content,!0);this.element=r.firstElementChild,n&&(this.element.id=n),this.attach()}attach(){this.hostEl.appendChild(this.element)}}function t(e,t,n){const r=n.value;return{configurable:!0,enumerable:!1,get(){return r.bind(this)}}}function n(e){let t=!0;const n=e.value;return"string"==typeof n?(null!=(null==e?void 0:e.minLength)&&(t=t&&n.length>=e.minLength),null!=(null==e?void 0:e.maxLength)&&(t=t&&n.length<=e.maxLength),e.required&&(t=t&&n.length>0)):(null!=(null==e?void 0:e.min)&&(t=t&&n>=e.min),null!=(null==e?void 0:e.max)&&(t=t&&n<=e.max),e.required&&(t=t&&n>0)),t}var r;!function(e){e[e.Active=0]="Active",e[e.Finished=1]="Finished"}(r||(r={}));class s{constructor(e,t,n,r,s){this.id=e,this.title=t,this.description=n,this.people=r,this.status=s}}class i{constructor(){this.listeners=[]}addListener(e){this.listeners.push(e)}}class l extends i{constructor(){super(),this.projects=[],this.count=1}addProject(e,t,n){const i=new s(this.count++,e,t,n,r.Active);this.projects.push(i),this.updateListeners()}moveProject(e,t){const n=this.projects.find((t=>t.id===e));n&&n.status!==t&&(n.status=t,this.updateListeners())}updateListeners(){this.listeners.forEach((e=>e(this.projects.slice())))}static getInstance(){return this.instance||(this.instance=new l),this.instance}}const o=l.getInstance();class a extends e{constructor(){super("project-input","app","user-input"),this.titleEl=this.element.querySelector("#title"),this.descriptionEl=this.element.querySelector("#description"),this.peopleEl=this.element.querySelector("#people"),this.configure()}configure(){this.element.addEventListener("submit",this.handleSubmit)}handleSubmit(e){e.preventDefault();const t=this.gatherUserInput();Array.isArray(t)?o.addProject(t[0],t[1],t[2]):alert("Please Enter a valid value!!!"),this.element.reset()}gatherUserInput(){const e=this.titleEl.value,t=this.descriptionEl.value,r=this.peopleEl.value,s={value:t,required:!0,minLength:5},i={value:r,required:!0,min:1,max:5};if(n({value:e,required:!0})&&n(s)&&n(i))return[e,t,+r]}}!function(e,t,n,r){var s,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(l=(i<3?s(l):i>3?s(t,n,l):s(t,n))||l);i>3&&l&&Object.defineProperty(t,n,l)}([t],a.prototype,"handleSubmit",null);class c extends e{constructor(e,t){super("single-project",e,t.id.toString()),this.project=t,this.configure()}handleDragStart(e){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",this.project.id.toString())}handleDragEnd(e){console.log("ended")}get person(){return 1===this.project.people?"1 person":`${this.project.people} persons`}configure(){this.element.querySelector("h2").textContent=this.project.title,this.element.querySelector("h3").textContent=this.person+" assigned",this.element.querySelector("p").textContent=this.project.description,this.element.addEventListener("dragstart",this.handleDragStart),this.element.addEventListener("dragend",this.handleDragEnd)}}!function(e,t,n,r){var s,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(l=(i<3?s(l):i>3?s(t,n,l):s(t,n))||l);i>3&&l&&Object.defineProperty(t,n,l)}([t],c.prototype,"handleDragStart",null);var h=function(e,t,n,r){var s,i=arguments.length,l=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,r);else for(var o=e.length-1;o>=0;o--)(s=e[o])&&(l=(i<3?s(l):i>3?s(t,n,l):s(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l};class d extends e{constructor(e){super("project-list","app",`${e}-projects`),this.type=e,this.assignedProjects=[],this.configure(),this.renderContent()}handleDragOver(e){e.preventDefault(),this.element.classList.add("droppable")}handleDragLeave(e){this.element.classList.remove("droppable")}handleDrop(e){var t;const n=null===(t=e.dataTransfer)||void 0===t?void 0:t.getData("text/plain");n&&o.moveProject(+n,"active"===this.type?r.Active:r.Finished)}configure(){this.element.querySelector("ul").addEventListener("dragover",this.handleDragOver),this.element.addEventListener("dragleave",this.handleDragLeave),this.element.addEventListener("drop",this.handleDrop),o.addListener((e=>{const t=e.filter((e=>"active"===this.type?0===e.status:1===e.status));this.assignedProjects=t,this.renderProjects()}))}renderProjects(){const e=this.element.querySelector("ul");e.innerHTML="",this.assignedProjects.forEach((t=>{new c(e.id,t)}))}renderContent(){this.element.querySelector("h2").textContent=`${this.type.toUpperCase()} PROJECTS`,this.element.querySelector("ul").id=`${this.type}-projects-list`}}h([t],d.prototype,"handleDragOver",null),h([t],d.prototype,"handleDragLeave",null),h([t],d.prototype,"handleDrop",null),new a,new d("active"),new d("finished")})();