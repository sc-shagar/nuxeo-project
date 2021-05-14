/*! For license information please see nuxeo-user-group-ai-suggestion-formatter.js.LICENSE.txt */
import{html}from"@polymer/polymer/lib/utils/html-tag.js";import"@polymer/polymer/lib/elements/dom-if.js";import"@nuxeo/nuxeo-elements/nuxeo-element.js";import"@nuxeo/nuxeo-ui-elements/widgets/nuxeo-user-tag.js";import"@nuxeo/nuxeo-ui-elements/widgets/nuxeo-group-tag.js";import AISuggestionMixin from"../nuxeo-ai-suggestion-mixin.js";import"../nuxeo-ai-icons.js";import"../nuxeo-ai-suggestion-formatter-styles.js";class UserGroupAISuggestionFormatter extends(AISuggestionMixin(Nuxeo.Element)){static get template(){return html`
      <style include="nuxeo-ai-suggestion-formatter-styles">
        :host {
          padding: 4px 9px 4px 5px;
        }
        nuxeo-user-tag,
        nuxeo-group-tag {
          display: flex;
          pointer-events: none;
          --nuxeo-tag: {
            display: inline-block;
            background-color: transparent;
            padding: 0;
            margin: 0 !important;
            color: var(--nuxeo-tag-text);
            font-size: 0.8rem;
            letter-spacing: 0.02em;
            line-height: 1rem;
            border-radius: 2em;
            text-decoration: none;
            vertical-align: baseline;
          }
        }
      </style>
      <dom-if if="[[_isUser(suggestion.value)]]">
        <template>
          <nuxeo-user-tag user="[[suggestion.value]]"></nuxeo-user-tag>
        </template>
      </dom-if>
      <dom-if if="[[_isGroup(suggestion.value)]]">
        <template>
          <nuxeo-group-tag group="[[suggestion.value]]"></nuxeo-group-tag>
        </template>
      </dom-if>
      <iron-icon icon="[[_getConfidenceIcon(suggestion.confidence)]]"></iron-icon>
    `}static get is(){return"nuxeo-user-group-ai-suggestion-formatter"}_isUser(e){return"user"===e["entity-type"]}_isGroup(e){return"group"===e["entity-type"]}}customElements.define(UserGroupAISuggestionFormatter.is,UserGroupAISuggestionFormatter),Nuxeo.UserGroupAISuggestionFormatter=UserGroupAISuggestionFormatter;export default UserGroupAISuggestionFormatter;