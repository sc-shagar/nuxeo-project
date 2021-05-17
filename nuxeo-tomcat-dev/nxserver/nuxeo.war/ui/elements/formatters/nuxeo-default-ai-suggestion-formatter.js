/*! For license information please see nuxeo-default-ai-suggestion-formatter.js.LICENSE.txt */
import{html}from"@polymer/polymer/lib/utils/html-tag.js";import"@nuxeo/nuxeo-elements/nuxeo-element.js";import AISuggestionMixin from"../nuxeo-ai-suggestion-mixin.js";import"../nuxeo-ai-icons.js";import"../nuxeo-ai-suggestion-formatter-styles.js";class DefaultAISuggestionFormatter extends(AISuggestionMixin(Nuxeo.Element)){static get template(){return html`
      <style include="nuxeo-ai-suggestion-formatter-styles"></style>
      <span>[[_idFunction(suggestion.value)]]</span>
      <iron-icon icon="[[_getConfidenceIcon(suggestion.confidence)]]"></iron-icon>
    `}static get is(){return"nuxeo-default-ai-suggestion-formatter"}}customElements.define(DefaultAISuggestionFormatter.is,DefaultAISuggestionFormatter),Nuxeo.DefaultAISuggestionFormatter=DefaultAISuggestionFormatter;export default DefaultAISuggestionFormatter;