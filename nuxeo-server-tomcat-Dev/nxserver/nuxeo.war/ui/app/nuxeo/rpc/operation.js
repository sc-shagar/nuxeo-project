class Operation{constructor(e,t){this.opId=t,this.conn=e,this._params={},this._headers={}}get params(){return this._params}get headers(){return this._headers}set depth(e){this.headers.depth=e}enrich(e,...t){this.headers[`enrichers-${e}`]=t.join(",")}fetch(e,...t){this.headers[`fetch-${e}`]=t.join(",")}translate(e,...t){this.headers[`translate-${e}`]=t.join(",")}execute(){return this.conn.operation(this.opId).params(this._params).execute({headers:this._headers,resolveWithFullResponse:!0}).then((e=>e.text())).then((e=>{try{return e?JSON.parse(e):{}}catch(e){return{error:"Invalid json"}}}))}}export{Operation};