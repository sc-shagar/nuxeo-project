import{Select2Editor}from"./select2";import{Directory}from"../../nuxeo/rpc/directory";function getEntryLabel(e,t="en"){if(e.properties){let r="";return e.properties.parent&&(r=`${getEntryLabel(e.properties.parent,t)}/`),r+=e.properties[`label_${t}`]||e.properties.label||e.properties.id,r}return e.text||e}class DirectoryEditor extends Select2Editor{prepare(e,t,r,i,s,l){this._labels={};const n=Array.isArray(s)?s.map(this.prepareEntity.bind(this)):this.prepareEntity(s);super.prepare(e,t,r,i,n,l)}prepareEntity(e){if(!e)return;if(this._isDirectoryEntry="directoryEntry"===e["entity-type"],!this._isDirectoryEntry)return e;let t;return t=e.properties.parent?`${"object"==typeof e.properties.parent?e.properties.parent.properties.id:e.properties.parent}/${e.properties.id}`:e.properties.id,this.cellLabels[t]=this.cellLabels[t]||getEntryLabel(e,this.language),t}saveValue(e,t){let r=e[0][0];r?this._isDirectoryEntry&&(r=r.split(",").map((e=>({"entity-type":"directoryEntry",directoryName:this.directoryName,id:e,properties:{id:e}}))),this.column.multiple||(r=r[0])):r=this.column.multiple?[]:null,super.saveValue([[r]],t)}query(e,t,r){const i=new Directory(e);return Object.assign(i,t),i.language=this.language||"en",i.search(r)}onSelected(e){this.cellLabels[e.choice.computedId]=e.choice.absoluteLabel}get cellMeta(){return this.instance.getCellMeta(this.row,this.col)}get cellLabels(){return this.cellMeta._labels=this.cellMeta._labels||{}}get language(){return this.instance.getSettings().language||"en"}get column(){return this.cellProperties}get widget(){return this.column.widget}get field(){return this.widget.field}get directoryName(){return this.widget.properties.directoryName}get isDbl10n(){return!!this.widget.properties.dbl10n}get sourceData(){return this.instance.getSourceDataAtRow(this.row)}resultFormatter(e){return e.displayLabel}formatter(e){let t=this.cellLabels[e.id]||e.absoluteLabel;return!t&&this.isDbl10n&&(t=getEntryLabel(e,this.language)),t||e.text}getEntryId(e){return e.computedId?e.computedId:e.id}}function DirectoryRenderer(e,t,r,i,s,l,n){if(l){const t=e.getSettings().language||"en";Array.isArray(l)||(l="string"==typeof l?l.split(","):[l]);const s=e.getCellMeta(r,i)._labels;arguments[5]=l.map((e=>{const r=e.properties?e.properties.id:e;return s&&s[r]?s[r]:getEntryLabel(e,t)})).join(",")}n.defaultRenderer.apply(this,arguments)}export{DirectoryEditor,DirectoryRenderer};