import{Request}from"./request";const PATH="/directory";class Directory extends Request{constructor(e,t){super(e,`${PATH}/${t}`)}entries(){return this.execute().then((e=>e.entries))}}export{Directory};