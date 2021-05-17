/*! For license information please see nuxeo-ai-suggestion.js.LICENSE.txt */
import{html}from"@polymer/polymer/lib/utils/html-tag.js";import"@nuxeo/nuxeo-elements/nuxeo-element.js";import"./nuxeo-ai-icons.js";import AISuggestionMixin from"./nuxeo-ai-suggestion-mixin.js";import AISuggestionFormatters from"./nuxeo-ai-suggestion-formatters.js";class AISuggestion extends(AISuggestionMixin(Nuxeo.Element)){static get template(){return html`
      <style>
        :host {
          @apply --layout-horizontal;
          max-width: 200px;
        }
        :host([hidden]) {
          display: none;
        }
        #container {
          width: 100%;
        }
      </style>
      <div id="container"></div>
    `}static get is(){return"nuxeo-ai-suggestion"}static get observers(){return["_updateContainer(suggestion, property, match)"]}created(){Object.keys(this.constructor.properties).forEach((t=>{this.constructor.createMethodObserver(`_forwardProp("${t}", ${t})`)}))}_forwardProp(t,e){this._instance&&(this._instance[t]=e)}_updateContainer(t,e){let i={};t.value&&t.value["entity-type"]&&(i={type:t.value["entity-type"],property:e});const s=AISuggestionFormatters.get(i);this._instance&&this._instance.nodeName.toLowerCase()===s||(this._instance=document.createElement(s),this.$.container.hasChildNodes()?this.$.container.replaceChild(this._instance,this.$.container.firstChild):this.$.container.appendChild(this._instance)),Object.keys(this.constructor.properties).forEach((t=>{this._instance[t]=this[t]}))}}customElements.define(AISuggestion.is,AISuggestion),Nuxeo.AISuggestion=AISuggestion;