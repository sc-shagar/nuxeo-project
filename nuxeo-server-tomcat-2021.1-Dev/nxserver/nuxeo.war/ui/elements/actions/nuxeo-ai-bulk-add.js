/*! For license information please see nuxeo-ai-bulk-add.js.LICENSE.txt */
import{mixinBehaviors}from"@polymer/polymer/lib/legacy/class.js";import{FiltersBehavior}from"@nuxeo/nuxeo-ui-elements/nuxeo-filters-behavior.js";import{I18nBehavior}from"@nuxeo/nuxeo-ui-elements/nuxeo-i18n-behavior.js";import{html}from"@polymer/polymer/lib/utils/html-tag.js";import"@nuxeo/nuxeo-elements/nuxeo-element.js";import"../nuxeo-ai-icons.js";class BulkAddButton extends(mixinBehaviors([I18nBehavior,FiltersBehavior],Nuxeo.Element)){static get template(){return html`
      <nuxeo-operation-button
        id="aiBulkAddOpBtn"
        operation="Bulk.RunAction"
        input="[[provider]]"
        params='{ action: "bulkEnrich", parameters: "{}" }'
        icon="nuxeo-ai:bots-on"
        label="ai.bulkAddButton.label"
        show-label$="[[showLabel]]"
        error-label="ai.bulkAddButton.action.error"
        on-response="_responseReceived"
      >
      </nuxeo-operation-button>
    `}static get is(){return"nuxeo-ai-bulk-add-button"}static get properties(){return{provider:{type:Object},showLabel:{type:Boolean,value:!1},status:{type:Object,notify:!0}}}_responseReceived(){this.fire("notify",{message:this.i18n("ai.bulkAddButton.action.poll")})}}customElements.define(BulkAddButton.is,BulkAddButton),Nuxeo.AI=Nuxeo.AI||{},Nuxeo.AI.BulkAddButton=BulkAddButton;