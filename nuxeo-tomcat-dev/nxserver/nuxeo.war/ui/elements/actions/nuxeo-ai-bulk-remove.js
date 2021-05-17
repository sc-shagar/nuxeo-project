/*! For license information please see nuxeo-ai-bulk-remove.js.LICENSE.txt */
import{mixinBehaviors}from"@polymer/polymer/lib/legacy/class.js";import{FiltersBehavior}from"@nuxeo/nuxeo-ui-elements/nuxeo-filters-behavior.js";import{I18nBehavior}from"@nuxeo/nuxeo-ui-elements/nuxeo-i18n-behavior.js";import{html}from"@polymer/polymer/lib/utils/html-tag.js";import"@nuxeo/nuxeo-elements/nuxeo-element.js";import"../nuxeo-ai-icons.js";class BulkRemoveButton extends(mixinBehaviors([I18nBehavior,FiltersBehavior],Nuxeo.Element)){static get template(){return html`
      <nuxeo-operation-button
        id="aiBulkRemoveOpBtn"
        operation="Bulk.RunAction"
        input="[[provider]]"
        params="[[_params(modelId, xpaths)]]"
        icon="nuxeo-ai:bots-off"
        label="ai.bulkRemoveButton.label"
        show-label$="[[showLabel]]"
        error-label="ai.bulkRemoveButton.action.error"
        on-response="_responseReceived"
      >
      </nuxeo-operation-button>
    `}static get is(){return"nuxeo-ai-bulk-remove-button"}static get properties(){return{provider:{type:Object},pollInterval:{type:Number,value:1e3},modelId:{type:String},xpaths:{type:String},showLabel:{type:Boolean,value:!1},status:{type:Object,notify:!0}}}_params(){const e={};return this.modelId&&(e.modelId=this.modelId.split(",").map((e=>e.trim()))),this.xpaths&&(e.xpaths=this.xpaths.split(",").map((e=>e.trim()))),{action:"bulkEnrichRemove",parameters:JSON.stringify(e)}}_responseReceived(){this.fire("notify",{message:this.i18n("ai.bulkRemoveButton.action.poll")})}}customElements.define(BulkRemoveButton.is,BulkRemoveButton),Nuxeo.AI=Nuxeo.AI||{},Nuxeo.AI.BulkRemoveButton=BulkRemoveButton;