import{Select2Editor}from"./select2";import{Query}from"../../nuxeo/rpc/query";class DocumentEditor extends Select2Editor{prepare(e,r,t,i,n,a){const u=Array.isArray(n)?n.map((e=>this.getEntryId(e))):this.getEntryId(n);super.prepare(e,r,t,i,u,a)}query(e,r,t){const i=new Query(e);return Object.assign(i.params,r),i.params.searchTerm=t,i.pageProvider=r&&r.pageProviderName||"default_document_suggestion",i.page=0,i.pageSize=20,i.run().then((e=>e.entries))}formatter(e){return e.text||e.title}getEntryId(e){return e.uid}saveValue(e,r){let t=e[0][0];t?(t=t.split(",").map((e=>({"entity-type":"document",uid:e}))),this.cellProperties.multiple||(t=t[0])):t=this.cellProperties.multiple?[]:null,super.saveValue([[t]],r)}}function DocumentRenderer(e,r,t,i,n,a,u){a&&(Array.isArray(a)||(a=[a]),arguments[5]=a.map((e=>e.uid)).join(",")),u.defaultRenderer.apply(this,arguments)}export{DocumentEditor,DocumentRenderer};