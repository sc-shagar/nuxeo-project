/*! For license information please see nuxeo-ai-suggestion-mixin.js.LICENSE.txt */
const AISuggestionMixin=function(e){return class extends e{static get properties(){return{property:{type:String},suggestion:{type:Object},threshold:{type:Number},match:{type:Boolean,value:!1,reflectToAttribute:!0}}}_idFunction(e){const t=["computeId","uid","id"].find((t=>Object.prototype.hasOwnProperty.call(e,t)));return t?e[t]:e}_getConfidenceIcon(e){const t=(1-this.threshold)/3;let i;return e>=this.threshold&&e<this.threshold+t?i="nuxeo-ai:confidence-level-low":e>=this.threshold+t&&e<this.threshold+2*t?i="nuxeo-ai:confidence-level-medium":e>=this.threshold+2*t&&e<=1&&(i="nuxeo-ai:confidence-level-high"),i}}};Nuxeo.AISuggestionMixin=AISuggestionMixin;export default AISuggestionMixin;