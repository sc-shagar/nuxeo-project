/*! For license information please see nuxeo-ai-suggestions.js.LICENSE.txt */
import{html}from"@polymer/polymer/lib/utils/html-tag.js";import{mixinBehaviors}from"@polymer/polymer/lib/legacy/class.js";import{IronFormElementBehavior}from"@polymer/iron-form-element-behavior";import{createNestedObject}from"@nuxeo/nuxeo-elements/utils.js";import"@nuxeo/nuxeo-elements/nuxeo-element.js";import"./nuxeo-ai-suggestion.js";class AISuggestions extends(mixinBehaviors([IronFormElementBehavior],Nuxeo.Element)){static get template(){return html`
      <style>
        :host {
          display: block;
          @apply --layout-horizontal;
          @apply --layout-wrap;
          @apply --layout-flex;
        }

        :host([hidden]) {
          display: none;
        }

        nuxeo-ai-suggestion {
          margin: 0 10px 10px 0;
        }

        nuxeo-ai-suggestion[match] {
          pointer-events: none;
        }
      </style>

      <template is="dom-repeat" items="[[suggestions]]">
        <nuxeo-ai-suggestion
          suggestion="[[item]]"
          match$="[[_matchesInput(item, _inputMatches)]]"
          threshold="[[threshold]]"
          property="[[property]]"
          on-click="_selectSuggestion"
        ></nuxeo-ai-suggestion>
      </template>
    `}static get is(){return"nuxeo-ai-suggestions"}static get properties(){return{document:{type:Object,notify:!0},property:{type:String},suggestions:{type:Array,value:[]},threshold:{type:Number,value:.7},idFunction:{type:Function,value(){return this._idFunction.bind(this)}},_inputMatches:{type:Object}}}static get observers(){return["_matchInput(property, suggestions, document.properties.*)"]}_matchInput(){if(!this.property||!this.suggestions||!this.document)return;const t=new Map,e=this.get(this._parsePropertyPath());if(this.suggestions.length>0&&e){const s=Array.isArray(e);this.suggestions.forEach((i=>{const o=this.idFunction(i.value),n=s?e.map((t=>this.idFunction(t))).includes(o):this.idFunction(e)===String(o);t.set(o,n)}))}this._inputMatches=t}_matchesInput(t){return this._inputMatches&&t.value&&this._inputMatches.get(this.idFunction(t.value))}_selectSuggestion(t){const e=this.suggestions[t.model.index],s=this._parsePropertyPath();void 0===this.get(s)&&createNestedObject(this.document.properties,this.property.split("/")),Array.isArray(this.get(s))?this.set(s,this.get(s).concat(e.value)):this.set(s,e.value)}_idFunction(t){return t.computedId||t.uid||t.id||t}_parsePropertyPath(){return`document.properties.${this.property.replace(new RegExp("/","g"),".")}`}}customElements.define(AISuggestions.is,AISuggestions),Nuxeo.AISuggestions=AISuggestions;