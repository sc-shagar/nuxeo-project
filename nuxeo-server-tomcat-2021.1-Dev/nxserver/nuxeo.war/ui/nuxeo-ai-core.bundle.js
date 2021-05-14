/*! For license information please see nuxeo-ai-core.bundle.js.LICENSE.txt */
(self.webpackChunk_nuxeo_nuxeo_web_ui=self.webpackChunk_nuxeo_nuxeo_web_ui||[]).push([[845],{75522:(e,t,i)=>{"use strict";i.r(t);var o=i(30032),n=i(16896),a=i(21536),s=i(66538),r=i(41608);(0,a.k)({_template:s.d`
    <style>
      .flex {
        @apply --layout-flex;
      }
      paper-listbox {
        @apply --layout-horizontal;
        --paper-listbox-background-color: transparent;
        padding: 0;
      }
    </style>

    <nuxeo-page>
      <div slot="header">
        <span class="flex">[[i18n('admin.ai.heading')]]</span>
      </div>
      <div slot="tabs">
        <paper-listbox selected="{{selected}}" attr-for-selected="name">
          <nuxeo-slot name="AI_ITEMS"></nuxeo-slot>
        </paper-listbox>
      </div>
      <div>
        <template is="dom-if" if="[[visible]]">
          <iron-pages selected="[[selected]]" attr-for-selected="name" selected-attribute="visible">
            <nuxeo-slot name="AI_PAGES"></nuxeo-slot>
          </iron-pages>
        </template>
      </div>
    </nuxeo-page>
  `,is:"nuxeo-admin-ai",behaviors:[r.mB],properties:{visible:Boolean,selected:{type:String,value:"export"}}});var l=i(93426),p=(i(36037),i(65059));class u extends((0,l.P)([r.mB],Nuxeo.Element,p.V)){static get template(){return s.d`
      <style>
        .page {
          @apply --layout-horizontal;
        }

        .main {
          @apply --layout-vertical;
          @apply --layout-flex-3;
          padding: 2em 1em 0 2em;
          overflow: hidden;
        }

        .mainCard {
          padding: 1em;
        }

        .sideCard {
          padding: 1em 2em;
        }

        .side {
          @apply --layout-vertical;
          @apply --layout-flex-2;
          position: relative;
          margin-bottom: var(--nuxeo-card-margin-bottom, 16px);
          min-height: 60vh;
          padding: 2em 2em 0 0;
        }

        .totalLabel {
          padding-right: 20px;
        }

        .row-container {
          @apply --layout-horizontal;
          @apply --layout-wrap;
        }

        /* #exportDatasetBtn {
            color: var(--nuxeo-button-primary-text);
            background-color: var(--nuxeo-button-primary-focus);
        } */
      </style>

      <nuxeo-operation id="aiExport" op="AI.DatasetExport"></nuxeo-operation>
      <nuxeo-operation id="aiExportStatus" op="AI.ExportStatus" on-response="_statusReceived"> </nuxeo-operation>
      <div class="page">
        <div class="main">
          <nuxeo-card heading="[[i18n('admin.ai.model.selection')]]">
            <div class="mainCard">
              <nuxeo-input class="widget" value="{{typeName}}" label="Document Type" type="text"> </nuxeo-input>
              <nuxeo-document-suggestion
                on-selected-item-changed="_updateItem"
                label=""
                placeholder="[[i18n('admin.ai.model.listing')]]"
                min-chars="0"
                role="widget"
                operation="AI.GetModel"
              >
              </nuxeo-document-suggestion>

              <paper-button id="exportDatasetBtn" noink on-tap="_export"
                >[[i18n('admin.ai.export.action')]]
              </paper-button>
            </div>
          </nuxeo-card>
        </div>
        <div class="side">
          <nuxeo-card heading="[[i18n('admin.ai.export')]]">
            <div class="sideCard">
              <div>
                <template is="dom-repeat" items="[[statuses]]">
                  <nuxeo-ai-export-progress status="[[item]]"></nuxeo-ai-export-progress>
                </template>
              </div>
            </div>
          </nuxeo-card>
        </div>
      </div>
    `}static get is(){return"nuxeo-admin-ai-export"}static get properties(){return{typeName:{type:String,value:""},currentDoc:{type:Object},statuses:{type:Array,value:[]},visible:{type:Boolean,value:!1,observer:"_visibleChanged"},_timeOut:{type:Number}}}_visibleChanged(e){e?this.$.aiExportStatus.execute():!e&&this._timeOut&&clearTimeout(this._timeOut)}_statusReceived(e){this.statuses=e.detail.response.value,this.visible&&(this._timeOut=setTimeout((()=>this.$.aiExportStatus.execute()),2e3))}_updateItem(e){this.currentDoc=e.detail.value}_export(){if(!this._canExport())return void this.fire("notify",{message:"Type and Model are required parameters"});const e=this.currentDoc.properties,t=e["ai_model:inputs"].map((e=>e.name)).join(","),i=e["ai_model:outputs"].map((e=>e.name)).join(","),o=`SELECT * FROM Document WHERE ecm:isProxy = 0 AND ecm:isVersion = 0 AND ecm:isTrashed = 0 AND ecm:primaryType = '${this.typeName}'`,n=e["ai_model:training_information"];this.$.aiExport.params={query:o,inputs:t,outputs:i,model_id:this.currentDoc.uid,model_name:e["ai_model:name"],model_start_date:n?n.start:null,model_end_date:n?n.end:null},this.$.aiExport.execute().then((e=>(this.fire("notify",{message:this.i18n("admin.ai.export.success")}),e.value))).catch((()=>{this.fire("notify",{message:this.i18n("admin.ai.export.error")})}))}_canExport(){return 0!==this.typeName.length&&null!=this.currentDoc}}customElements.define(u.is,u),Nuxeo.AdminAIExport=u;class d extends((0,l.P)([r.mB],Nuxeo.Element)){static get is(){return"admin-ai-insight"}static get properties(){return{link:{type:String,value:""}}}ready(){super.ready(),this.$.aiInsight.execute().then((({url:e,aitoken:t,projectId:i,urlCore:o})=>{this.link=`${e}?aitoken=${t}&projectid=${i}&urlCore=${o}`})).catch((()=>{this.fire("notify",{message:this.i18n("admin.ai.cloud.error")})}))}static get template(){return s.d`
      <style include="nuxeo-styles">
        .flex {
          @apply --layout-flex;
        }
        .page-insight {
          background: var(--nuxeo-page-background, #f5f5f5);
        }
        .content-insight {
          margin: 0 auto;
          text-align: center;
        }
        a {
          text-decoration: none;
          color: white;
        }
      </style>
      <nuxeo-operation id="aiInsight" op="AI.FetchInsightURI"></nuxeo-operation>
      <nuxeo-page class="page-insight">
        <div slot="header">
          <span class="flex">[[i18n('admin.ai.cloud.heading')]]</span>
        </div>
        <div class="content-insight">
          <img src="images/ai/nuxeo_insight.png" />
          <p>[[i18n('admin.ai.cloud.message')]]</p>
          <dom-if if="[[link]]">
            <template>
              <paper-button noink class="primary" animated>
                <a href$="{{link}}" target="_blank">[[i18n('admin.ai.cloud.link')]]</a>
              </paper-button>
            </template>
          </dom-if>
        </div>
      </nuxeo-page>
    `}}customElements.define(d.is,d);class c extends((0,l.P)([r.mB],Nuxeo.Element,p.V)){static get template(){return s.d`
      <style>
        #statsResult {
          height: 60vh;
        }

        .totalLabel {
          padding-right: 20px;
        }

        .row-container {
          @apply --layout-horizontal;
          @apply --layout-wrap;
        }

        .page {
          @apply --layout-horizontal;
        }

        .main {
          @apply --layout-vertical;
          @apply --layout-flex-3;
          padding: 2em 1em 0 2em;
          overflow: hidden;
        }

        .side {
          @apply --layout-vertical;
          @apply --layout-flex-2;
          position: relative;
          margin-bottom: var(--nuxeo-card-margin-bottom, 16px);
          min-height: 60vh;
          padding: 2em 2em 0 0;
        }

        .totalLabel {
          padding-right: 20px;
        }
      </style>

      <nuxeo-operation id="aiStats" op="AI.DatasetStats" response="{{_stats}}"></nuxeo-operation>
      <nuxeo-operation id="aiExport" op="AI.DatasetExport"></nuxeo-operation>
      <nuxeo-operation id="aiExportStatus" op="AI.ExportStatus" on-response="_statusReceived"></nuxeo-operation>
      <div class="page">
        <div class="main">
          <nuxeo-card heading="[[i18n('admin.ai.export')]]">
            <paper-textarea
              id="queryInput"
              type="search"
              label="[[i18n('admin.ai.query')]]"
              value="{{query}}"
              placeholder="[[i18n('imaging.query.placeholder')]]"
              autofocus
            >
            </paper-textarea>
            <paper-input id="inputs" label="[[i18n('admin.ai.inputs')]]" value="{{inProps}}"></paper-input>
            <paper-input id="outputs" label="[[i18n('admin.ai.outputs')]]" value="{{outProps}}"></paper-input>
            <paper-input id="split" label="[[i18n('admin.ai.split')]]" value="{{splitProp}}"></paper-input>
            <paper-button on-tap="_recompute">[[i18n('admin.ai.stats.action')]]</paper-button>
            <paper-button on-tap="_export">[[i18n('admin.ai.export.action')]]</paper-button>
          </nuxeo-card>
          <nuxeo-card heading="[[i18n('admin.ai.stats')]]">
            <div class="row-container">
              <span class="totalLabel">[[_computeLabel(_stats, 'total', i18n)]]</span>
              <span class="totalLabel">[[_computeLabel(_stats, 'count', i18n)]]</span>
            </div>
            <nuxeo-data-table id="statsResult" items="[[_filter(_stats)]]">
              <nuxeo-data-table-column name="[[i18n('admin.ai.stats.field')]]" flex="10">
                <template>
                  [[item.field]]
                </template>
              </nuxeo-data-table-column>
              <nuxeo-data-table-column name="[[i18n('admin.ai.stats.type')]]" flex="10">
                <template>
                  [[item.type]]
                </template>
              </nuxeo-data-table-column>
              <nuxeo-data-table-column name="[[i18n('admin.ai.stats.value')]]" flex="50">
                <template>
                  [[_displayVal(item)]]
                </template>
              </nuxeo-data-table-column>
            </nuxeo-data-table>
          </nuxeo-card>
        </div>

        <div class="side">
          <nuxeo-card heading="[[i18n('admin.ai.export')]]">
            <div class="sideCard">
              <div>
                <template is="dom-repeat" items="[[statuses]]">
                  <nuxeo-ai-export-progress status="[[item]]"></nuxeo-ai-export-progress>
                </template>
              </div>
            </div>
          </nuxeo-card>
        </div>
      </div>
    `}static get is(){return"nuxeo-admin-ai-advanced-export"}static get properties(){return{inProps:{type:String,value:"dc:title,file:content"},outProps:{type:String,value:"dc:lastContributor"},splitProp:{type:String,value:"80"},query:{type:String,value:"SELECT * FROM Document WHERE ecm:primaryType = 'File'"},_exportText:{type:String,value:""},_stats:{type:String},currentDoc:{type:Object},statuses:{type:Array,value:[]},visible:{type:Boolean,value:!1,observer:"_visibleChanged"},_timeOut:{type:Number}}}_displayVal(e){if(null!=e.numericValue)return e.numericValue;if("terms"===e.type){let t="";return e.value.forEach((e=>{t+=` ${e.key} (${e.docCount})`})),t}return JSON.stringify(e.value)}_filter(e){return e&&e.filter((e=>!("total"===e.type||"count"===e.type)))}_computeLabel(e,t){const i=e&&e.find((e=>e.type===t));return i&&this.i18n(`admin.ai.export.${t}`,i.numericValue)}_recompute(){this.$.aiStats.params={query:this.query,inputs:this.inProps,outputs:this.outProps},this.$.aiStats.execute().then((e=>{e&&0!==e.length||this.fire("notify",{message:this.i18n("admin.ai.stats.none")})})).catch((()=>{this.fire("notify",{message:this.i18n("admin.ai.stats.error")})}))}_export(){this.$.aiExport.params={query:this.query,inputs:this.inProps,outputs:this.outProps,split:this.splitProp},this.$.aiExport.execute().then((e=>{this._exportText=this.i18n("admin.ai.export.id",e.value),this.fire("notify",{message:this.i18n("admin.ai.export.success")})})).catch((()=>{this._exportText="",this.fire("notify",{message:this.i18n("admin.ai.export.error")})}))}_visibleChanged(e){e?this.$.aiExportStatus.execute():!e&&this._timeOut&&clearTimeout(this._timeOut)}_statusReceived(e){this.statuses=e.detail.response.value,this.visible&&(this._timeOut=setTimeout((()=>this.$.aiExportStatus.execute()),2e3))}}customElements.define(c.is,c),Nuxeo.AdminAIAdvancedExport=c;var m=i(83842),g=i(84392);i(83253);const h=s.d`
  <iron-iconset-svg size="24" name="nuxeo-ai">
    <svg>
      <defs>
        <g id="confidence-level-low" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill-rule="nonzero">
            <path
              d="M18,0 L22.5,0 L22.5,24 L18,24 L18,0 Z M9,8 L13.5,8 L13.5,24 L9,24 L9,8 Z"
              fill-opacity="0.3"
              fill="#9B9B9B"
            ></path>
            <polygon fill="#4A90E2" points="0 16 4.5 16 4.5 24 0 24"></polygon>
          </g>
        </g>
        <g id="confidence-level-medium" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill-rule="nonzero">
            <polygon fill-opacity="0.3" fill="#9B9B9B" points="18 0 22.5 0 22.5 24 18 24"></polygon>
            <path d="M9,8 L13.5,8 L13.5,24 L9,24 L9,8 Z M0,16 L4.5,16 L4.5,24 L0,24 L0,16 Z" fill="#4A90E2"></path>
          </g>
        </g>
        <g id="confidence-level-high" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g fill="#4A90E2" fill-rule="nonzero">
            <path
              d="M18,0 L22.5,0 L22.5,24 L18,24 L18,0 Z M9,8 L13.5,8 L13.5,24 L9,24 L9,8 Z M0,16 L4.5,16 L4.5,24 L0,24 L0,16 Z"
            ></path>
          </g>
        </g>
        <g id="bots-off" fill="none" fill-rule="evenodd">
          <g id="AI-Bot-off">
            <polygon id="Bounding-Box" points="0 0 24 0 24 24 0 24"></polygon>
            <path
              d="M17.2622202,8.85721435 C17.9232202,8.85721435 18.4592202,9.48321435 18.4592202,10.2572143 L18.4592202,14.2632143 L20.0272202,15.8392143 L20.0272202,10.2572143 C20.0272202,8.53121435 18.8312202,7.13221435 17.3562202,7.13221435 L12.7102202,7.13221435 L12.7112202,4.70421435 C12.7112202,4.30321435 12.3862202,3.97821435 11.9842202,3.97821435 C11.5832202,3.97821435 11.2572202,4.30321435 11.2572202,4.70421435 L11.2572202,7.02321435 L13.0822202,8.85721435 L17.2622202,8.85721435 Z"
              id="Fill-1"
              fill="#3A3A54"
            ></path>
            <path
              d="M9.97562021,16.0515143 C9.97562021,16.4525143 10.3006202,16.7795143 10.7026202,16.7795143 L13.2666202,16.7795143 C13.6676202,16.7795143 13.9926202,16.4525143 13.9926202,16.0515143 C13.9926202,15.6505143 13.6676202,15.3245143 13.2666202,15.3245143 L10.7026202,15.3245143 C10.3006202,15.3245143 9.97562021,15.6505143 9.97562021,16.0515143"
              id="Fill-3"
              fill="#3A3A54"
            ></path>
            <path
              d="M8.42732021,11.9778143 C7.87532021,11.9778143 7.42732021,12.4258143 7.42732021,12.9778143 C7.42732021,13.5298143 7.87532021,13.9778143 8.42732021,13.9778143 C8.97932021,13.9778143 9.42732021,13.5298143 9.42732021,12.9778143 C9.42732021,12.4258143 8.97932021,11.9778143 8.42732021,11.9778143"
              id="Fill-5"
              fill="#3A3A54"
            ></path>
            <path
              d="M6.60452021,18.2537143 C5.94352021,18.2537143 5.40752021,17.6267143 5.40752021,16.8537143 L5.40752021,10.2567143 C5.40752021,9.48371435 5.94352021,8.85771435 6.60452021,8.85771435 L7.48252021,8.85771435 L16.8295202,18.2537143 L6.60452021,18.2537143 Z M22.8815202,21.5017143 L4.21152021,2.73271435 L2.79352021,4.14271435 L5.91852021,7.28371435 C4.82652021,7.67671435 4.02752021,8.85171435 4.02752021,10.2567143 L4.02752021,16.8537143 C4.02752021,18.5787143 5.22352021,19.9777143 6.69852021,19.9777143 L17.3555202,19.9777143 C17.6995202,19.9777143 18.0245202,19.8957143 18.3245202,19.7567143 L21.4635202,22.9117143 L22.8815202,21.5017143 Z"
              id="Fill-7"
              fill="#3A3A54"
            ></path>
          </g>
        </g>
        <g id="bots-on" fill="none" fill-rule="evenodd">
          <defs>
            <path
              d="M6.57697807,8.87931034 C5.91590534,8.87931034 5.38,9.5061117 5.38,10.2793103 L5.38,16.8758621 C5.38,17.6490607 5.91590534,18.2758621 6.57697807,18.2758621 L17.2348001,18.2758621 C17.8958728,18.2758621 18.4317781,17.6490607 18.4317781,16.8758621 L18.4317781,10.2793103 C18.4317781,9.5061117 17.8958728,8.87931034 17.2348001,8.87931034 L6.57697807,8.87931034 Z M11.9568998,4 C12.3582654,4 12.6836365,4.3253711 12.6836365,4.72673669 L12.683,7.155 L17.328911,7.15517241 C18.8041127,7.15517241 20,8.55389661 20,10.2793103 L20,16.8758621 C20,18.6012758 18.8041127,20 17.328911,20 L6.671089,20 C5.19588728,20 4,18.6012758 4,16.8758621 L4,10.2793103 C4,8.55389661 5.19588728,7.15517241 6.671089,7.15517241 L11.23,7.155 L11.2301632,4.72673669 C11.2301632,4.3253711 11.5555343,4 11.9568998,4 Z M13.2387838,15.3474494 L10.6750158,15.3474494 C10.2736502,15.3474494 9.94827915,15.6728205 9.94827915,16.0741861 C9.94827915,16.4755517 10.2736502,16.8009228 10.6750158,16.8009228 L10.6750158,16.8009228 L13.2387838,16.8009228 C13.6401494,16.8009228 13.9655205,16.4755517 13.9655205,16.0741861 C13.9655205,15.6728205 13.6401494,15.3474494 13.2387838,15.3474494 L13.2387838,15.3474494 Z M8.4,12 C7.84771525,12 7.4,12.4477153 7.4,13 C7.4,13.5522847 7.84771525,14 8.4,14 C8.95228475,14 9.4,13.5522847 9.4,13 C9.4,12.4477153 8.95228475,12 8.4,12 Z M15.4,12 C14.8477153,12 14.4,12.4477153 14.4,13 C14.4,13.5522847 14.8477153,14 15.4,14 C15.9522847,14 16.4,13.5522847 16.4,13 C16.4,12.4477153 15.9522847,12 15.4,12 Z"
              id="path-1"
            ></path>
          </defs>
          <g id="BOT-ON" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="icon/ai/robot">
              <polygon id="Bounding-Box" points="0 0 24 0 24 24 0 24"></polygon>
              <mask id="mask-2" fill="white">
                <use xlink:href="#path-1"></use>
              </mask>
              <use id="Rectangle-path" fill="#000000" fill-rule="nonzero" xlink:href="#path-1"></use>
              <g id="color/text/nuxeo-text-default" mask="url(#mask-2)" fill="#3A3A54" fill-rule="evenodd">
                <polygon id="Rectangle" points="0 0 24 0 24 24 0 24"></polygon>
              </g>
            </g>
          </g>
        </g>
      </defs>
    </svg>
  </iron-iconset-svg>
`;document.head.appendChild(h.content);const x=function(e){return class extends e{static get properties(){return{property:{type:String},suggestion:{type:Object},threshold:{type:Number},match:{type:Boolean,value:!1,reflectToAttribute:!0}}}_idFunction(e){const t=["computeId","uid","id"].find((t=>Object.prototype.hasOwnProperty.call(e,t)));return t?e[t]:e}_getConfidenceIcon(e){const t=(1-this.threshold)/3;let i;return e>=this.threshold&&e<this.threshold+t?i="nuxeo-ai:confidence-level-low":e>=this.threshold+t&&e<this.threshold+2*t?i="nuxeo-ai:confidence-level-medium":e>=this.threshold+2*t&&e<=1&&(i="nuxeo-ai:confidence-level-high"),i}}};Nuxeo.AISuggestionMixin=x;const y=x,f=s.d`
  <dom-module id="nuxeo-ai-suggestion-formatter-styles">
    <template>
      <style>
        :host {
          @apply --layout-horizontal;
          @apply --layout-center;
          padding: 5px 9px 5px 14px;
          border-radius: 2em;
          background-color: var(--nuxeo-tag-background, transparent);
          cursor: pointer;
          user-select: none;
          overflow: hidden;
          font-size: 12px;
        }
        :host([match]) {
          opacity: 0.3;
        }
        :host(:hover) {
          background-color: var(--nuxeo-artificial-intelligence-confidence-hover, rgba(74, 144, 246, 0.1));
        }
        span {
          @apply --layout-flex;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        iron-icon {
          --iron-icon-fill-color: var(--nuxeo-artificial-intelligence-confidence-color, #4a90e2);
          margin-left: 7px;
          height: 1.2em;
        }
      </style>
    </template>
  </dom-module>
`;document.head.appendChild(f.content);class v extends(y(Nuxeo.Element)){static get template(){return s.d`
      <style include="nuxeo-ai-suggestion-formatter-styles"></style>
      <span>[[_idFunction(suggestion.value)]]</span>
      <iron-icon icon="[[_getConfidenceIcon(suggestion.confidence)]]"></iron-icon>
    `}static get is(){return"nuxeo-default-ai-suggestion-formatter"}}customElements.define(v.is,v),Nuxeo.DefaultAISuggestionFormatter=v;const b={default:v.is,types:{},properties:{}},_={register:(e,t)=>{t.type&&(b.types[t.type]=e),t.property&&(b.properties[t.property]=e)},get:e=>{let t=null;return e.property&&(t=b.properties[e.property]),!t&&e.type&&(t=b.types[e.type]),t||b.default}};Nuxeo.AISuggestionFormatters=_;const E=_;class A extends(y(Nuxeo.Element)){static get template(){return s.d`
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
    `}static get is(){return"nuxeo-ai-suggestion"}static get observers(){return["_updateContainer(suggestion, property, match)"]}created(){Object.keys(this.constructor.properties).forEach((e=>{this.constructor.createMethodObserver(`_forwardProp("${e}", ${e})`)}))}_forwardProp(e,t){this._instance&&(this._instance[e]=t)}_updateContainer(e,t){let i={};e.value&&e.value["entity-type"]&&(i={type:e.value["entity-type"],property:t});const o=E.get(i);this._instance&&this._instance.nodeName.toLowerCase()===o||(this._instance=document.createElement(o),this.$.container.hasChildNodes()?this.$.container.replaceChild(this._instance,this.$.container.firstChild):this.$.container.appendChild(this._instance)),Object.keys(this.constructor.properties).forEach((e=>{this._instance[e]=this[e]}))}}customElements.define(A.is,A),Nuxeo.AISuggestion=A;class C extends((0,l.P)([m.V],Nuxeo.Element)){static get template(){return s.d`
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
    `}static get is(){return"nuxeo-ai-suggestions"}static get properties(){return{document:{type:Object,notify:!0},property:{type:String},suggestions:{type:Array,value:[]},threshold:{type:Number,value:.7},idFunction:{type:Function,value(){return this._idFunction.bind(this)}},_inputMatches:{type:Object}}}static get observers(){return["_matchInput(property, suggestions, document.properties.*)"]}_matchInput(){if(!this.property||!this.suggestions||!this.document)return;const e=new Map,t=this.get(this._parsePropertyPath());if(this.suggestions.length>0&&t){const i=Array.isArray(t);this.suggestions.forEach((o=>{const n=this.idFunction(o.value),a=i?t.map((e=>this.idFunction(e))).includes(n):this.idFunction(t)===String(n);e.set(n,a)}))}this._inputMatches=e}_matchesInput(e){return this._inputMatches&&e.value&&this._inputMatches.get(this.idFunction(e.value))}_selectSuggestion(e){const t=this.suggestions[e.model.index],i=this._parsePropertyPath();void 0===this.get(i)&&(0,g.Z)(this.document.properties,this.property.split("/")),Array.isArray(this.get(i))?this.set(i,this.get(i).concat(t.value)):this.set(i,t.value)}_idFunction(e){return e.computedId||e.uid||e.id||e}_parsePropertyPath(){return`document.properties.${this.property.replace(new RegExp("/","g"),".")}`}}customElements.define(C.is,C),Nuxeo.AISuggestions=C;class N extends((0,l.P)([r.mB,m.V],Nuxeo.Element)){static get template(){return s.d`
      <style>
        .model_title {
          margin: 0;
        }

        .progress_counter {
          /* margin: 0; */
          font-style: italic;
          font-size: 85%;
        }

        .inlineElements {
          display: flex;
          justify-content: left;
        }

        .progressAction {
          margin: -1em 0 0 1em;
        }

        .progress_bar {
          width: 100%;
        }

        .secondary_error_label {
          opacity: 0.5;
        }

        .page {
          @apply --layout-horizontal;
        }

        .main {
          @apply --layout-vertical;
          @apply --layout-flex-3;
          overflow: hidden;
        }

        .side {
          @apply --layout-vertical;
          @apply --layout-flex-2;
          margin-bottom: var(--nuxeo-card-margin-bottom, 16px);
          min-height: 60vh;
        }

        paper-progress {
          --paper-progress-active-color: var(--paper-blue-600);
          --paper-progress-secondary-color: var(--paper-orange-400);
        }
      </style>

      <nuxeo-operation id="aiExportInterrupt" op="AI.ExportInterrupt"></nuxeo-operation>
      <nuxeo-operation id="aiExportRestart" op="AI.ExportRestart"></nuxeo-operation>
      <div class="progress">
        <p class="model_title">[[_modelName]]</p>
        <div class="page">
          <div class="widget main">
            <paper-progress
              class="progress_bar"
              value="[[_progress]]"
              secondary-progress="[[_errorProgress]]"
            ></paper-progress>
            <p class="progress_counter">
              [[_processed]]/[[_total]] documents <i class="secondary_error_label">[[_errorCount]] errors</i>
            </p>
          </div>

          <paper-icon-button
            icon="[[_actionName]]"
            id="progressAction"
            class="progressAction"
            on-tap="_run"
            class="side"
          ></paper-icon-button>
        </div>
      </div>
    `}static get is(){return"nuxeo-ai-export-progress"}static get properties(){return{status:{type:Object,observer:"_statusUpdated"},_id:{type:String},_modelName:{type:String,value:"NONAME"},_state:{type:String,value:"UNKNOWN",observer:"_stateChanged"},_processed:{type:Number,value:-1,observer:"_processedUpdated"},_total:{type:Number,value:-1},_progress:{type:Number,value:0},_errorProgress:{type:Number,value:0},_errorCount:{type:Number,value:0},_actionName:{type:String,value:"Unknown"}}}_statusUpdated(e){this._id=e.id,this._modelName=e.name,this._state=e.state,this._setActionName(e.state),this._total=e.total,this._errorCount=e.errorCount,this._processed=e.processed}_processedUpdated(e){if(this._total<1||e<1)return 0;this._progress=100*e/this._total-this._errorCount,this._errorProgress=this._progress+this._errorCount}_stateChanged(e){switch(e){case"SCHEDULED":case"SCROLLING_RUNNING":case"RUNNING":case"COMPLETED":this.$.progressAction.disabled=!1;break;case"ABORTED":this.$.progressAction.disabled=!0}this._setActionName(e)}_setActionName(e){switch(e){case"SCHEDULED":case"SCROLLING_RUNNING":case"RUNNING":this._actionName="cancel";break;case"COMPLETED":case"ABORTED":this._actionName="autorenew"}}_run(){let e=null,t=null;switch(this._state){case"SCHEDULED":case"SCROLLING_RUNNING":case"RUNNING":t=this.$.aiExportInterrupt,e="Interrupt";break;case"COMPLETED":e="Restart",t=this.$.aiExportRestart}null!=t?(t.params={commandId:this._id},t.execute().then((t=>(this.fire("notify",{message:`Successfully performed ${e}`}),t.value))).catch((()=>{this.fire("notify",`Could not perform ${e}`)}))):this.fire("notify",{message:`Cannot run an operation with state: ${this._state}`})}}customElements.define(N.is,N),Nuxeo.AIExportProgress=N;var L=i(30883);class k extends((0,l.P)([r.mB,L.q],Nuxeo.Element)){static get template(){return s.d`
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
    `}static get is(){return"nuxeo-ai-bulk-add-button"}static get properties(){return{provider:{type:Object},showLabel:{type:Boolean,value:!1},status:{type:Object,notify:!0}}}_responseReceived(){this.fire("notify",{message:this.i18n("ai.bulkAddButton.action.poll")})}}customElements.define(k.is,k),Nuxeo.AI=Nuxeo.AI||{},Nuxeo.AI.BulkAddButton=k;class w extends((0,l.P)([r.mB,L.q],Nuxeo.Element)){static get template(){return s.d`
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
    `}static get is(){return"nuxeo-ai-bulk-remove-button"}static get properties(){return{provider:{type:Object},pollInterval:{type:Number,value:1e3},modelId:{type:String},xpaths:{type:String},showLabel:{type:Boolean,value:!1},status:{type:Object,notify:!0}}}_params(){const e={};return this.modelId&&(e.modelId=this.modelId.split(",").map((e=>e.trim()))),this.xpaths&&(e.xpaths=this.xpaths.split(",").map((e=>e.trim()))),{action:"bulkEnrichRemove",parameters:JSON.stringify(e)}}_responseReceived(){this.fire("notify",{message:this.i18n("ai.bulkRemoveButton.action.poll")})}}customElements.define(w.is,w),Nuxeo.AI=Nuxeo.AI||{},Nuxeo.AI.BulkRemoveButton=w;var I=i(89082),S=i(84513);i(85621),i(79323),i(3632);class P extends((0,l.P)([I.$,S.t],y(Nuxeo.Element))){static get template(){return s.d`
      <style>
        :host {
          @apply --shadow-elevation-2dp;
          @apply --layout-vertical;
          background: var(--nuxeo-box);
          overflow: hidden;
          user-select: text;
        }
        #close {
          position: absolute;
          top: 8px;
          right: 8px;
          padding: 10px;
          width: 32px;
          height: 32px;
        }
        #container {
          padding: 12px;
          overflow: auto;
          cursor: auto;
        }
      </style>
      <div id="container">
        <slot></slot>
      </div>
      <paper-icon-button id="close" noink icon="nuxeo:clear" on-tap="close"></paper-icon-button>
    `}static get is(){return"nuxeo-document-ai-suggestion-details"}ready(){super.ready(),this.addEventListener("click",(e=>e.stopPropagation()))}connectedCallback(){super.connectedCallback(),this.addEventListener("neon-animation-finish",this._onNeonAnimationFinish)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("neon-animation-finish",this._onNeonAnimationFinish)}_renderOpened(){this.cancelAnimation(),this.playAnimation("entry")}_renderClosed(){this.cancelAnimation(),this.playAnimation("exit")}_onNeonAnimationFinish(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}}customElements.define(P.is,P);class O extends(y(Nuxeo.Element)){static get template(){return s.d`
      <style include="nuxeo-ai-suggestion-formatter-styles">
        :host {
          padding: 0 0 0 5px;
        }
        #main {
          @apply --layout-horizontal;
          @apply --layout-center;
          padding: 5px 0 5px 9px;
          overflow: hidden;
        }
        #split {
          margin-left: 8px;
        }
        #split:active {
          background-color: #ceced4;
        }
        #content {
          @apply --layout-vertical;
          font-size: 11px;
          line-height: normal;
        }
        #content p {
          margin-block-start: 0.25em;
          margin-block-end: 0.25em;
        }
        #content .thumbnail {
          width: 216px;
          height: 72px;
        }
        #content .title {
          font-weight: bold;
        }
        #content .path {
          opacity: 0.6;
        }
        paper-icon-button {
          width: 32px;
          height: 24px;
          padding: 4px;
          margin: 2px 0;
          border-left: 1px solid var(--divider-color);
        }
        nuxeo-document-ai-suggestion-details {
          cursor: default;
          max-width: 320px;
          max-height: 248px;
        }

        @media only screen and (orientation: portrait) and (max-width: 480px) {
          nuxeo-document-ai-suggestion-details {
            cursor: default;
            left: 0 !important;
            right: 0;
            bottom: 0;
            top: unset !important;
            max-width: unset !important;
          }
        }
      </style>
      ${this.buttonTemplate}
      <div id="split" on-click="_open">
        <paper-icon-button icon="icons:arrow-drop-down" noink></paper-icon-button>
      </div>
      <nuxeo-document-ai-suggestion-details
        id="details"
        vertical-align="top"
        horizontal-align="right"
        dynamic-align
        no-overlap
        vertical-offset="16"
        scroll-action="refit"
        auto-fit-on-attach
      >
        ${this.detailsTemplate}
      </nuxeo-document-ai-suggestion-details>
      <div id="anchor"></div>
    `}static get buttonTemplate(){return s.d`
      <div id="main">
        <span>[[suggestion.value.title]]</span>
        <iron-icon icon="[[_getConfidenceIcon(suggestion.confidence)]]"></iron-icon>
      </div>
    `}static get detailsTemplate(){return s.d`
      <div id="content">
        <dom-if if="[[suggestion.value.properties.file:content.data]]">
          <template>
            <iron-image
              class="thumbnail"
              position="left"
              sizing="contain"
              src="[[_thumbnail(suggestion.value)]]"
            ></iron-image>
          </template>
        </dom-if>
        <p class="title">
          [[suggestion.value.title]]
        </p>
        <p class="description" hidden$="[[!suggestion.value.properties.dc:description]]">
          [[suggestion.value.properties.dc:description]]
        </p>
        <p class="path">[[suggestion.value.path]]</p>
      </div>
    `}static get is(){return"nuxeo-document-ai-suggestion-formatter"}ready(){super.ready(),this.$.details.positionTarget=this.$.anchor,this._handleResize=()=>{window.matchMedia("only screen and (orientation: portrait) and (max-width: 480px)").matches?(this.$.details.entryAnimation="slide-from-bottom-animation",this.$.details.exitAnimation="slide-down-animation"):(this.$.details.entryAnimation="fade-in-animation",this.$.details.exitAnimation="fade-out-animation")},this._handleResize()}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",this._handleResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this._handleResize)}_open(e){e.stopPropagation(),this.$.details.opened||this.$.details.__isAnimating||this.$.details.open()}_thumbnail(e){return e&&e.uid&&e.contextParameters&&e.contextParameters.thumbnail&&e.contextParameters.thumbnail.url?e.contextParameters.thumbnail.url:""}}customElements.define(O.is,O),Nuxeo.DocumentAISuggestionFormatter=O;const R=O;var $=i(69699);class B extends((0,l.P)([$.e],y(Nuxeo.Element))){static get template(){return s.d`
      <style include="nuxeo-ai-suggestion-formatter-styles"></style>
      <span>[[formatDirectory(suggestion.value)]]</span>
      <iron-icon icon="[[_getConfidenceIcon(suggestion.confidence)]]"></iron-icon>
    `}static get is(){return"nuxeo-directory-ai-suggestion-formatter"}}customElements.define(B.is,B),Nuxeo.DirectoryAISuggestionFormatter=B;const M=B;i(67117),i(64091);class D extends(y(Nuxeo.Element)){static get template(){return s.d`
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
    `}static get is(){return"nuxeo-user-group-ai-suggestion-formatter"}_isUser(e){return"user"===e["entity-type"]}_isGroup(e){return"group"===e["entity-type"]}}customElements.define(D.is,D),Nuxeo.UserGroupAISuggestionFormatter=D;const T=D;var z=i(83830),F=i.n(z);const j=document.createElement("template");j.innerHTML=F(),document.head.appendChild(j.content),E.register(R.is,{type:"document"}),E.register(M.is,{type:"directoryEntry"}),E.register(T.is,{type:"user"}),E.register(T.is,{type:"group"});const U=(()=>{const e=new WeakMap;let t=null,i=null;function a(t,i=!0){if(!e.has(t)&&i){const i=document.createElement("nuxeo-ai-suggestions");return i.style.marginBottom="8px",t.parentNode.insertBefore(i,t.nextElementSibling),e.set(t,i),i}return e.get(t)}return{updateWidgetSuggestions:(e,s)=>{if(!e||!e.document)return;const r=e.document.contextParameters&&e.document.contextParameters.aiModels,l=s&&r&&r.inputs.includes(s.replace("document.properties.","")),p=!s||"document.properties".startsWith(s),u=e.domHost._getBoundElements("document.properties"),d=a(s&&u[s],!1);d&&Array.isArray(d.suggestions)&&d.suggestions.length>0&&d._matchInput(),(p||l)&&(t=o.dx.debounce(t,n.timeOut.after(500),(()=>{var t;(t=e.document,i||(i=document.createElement("nuxeo-operation"),i.op="AI.Suggestion",i.headers={"X-Batch-No-Drop":"true"},document.querySelector("nuxeo-app").appendChild(i)),i.input=t,i.params={references:!0,updatedDocument:t},i.execute()).then((t=>{!function(e){Object.values(e).forEach((e=>{const t=a(e,!1);t&&(t.suggestions=[])}))}(u),t.forEach((t=>{t.suggestions.forEach((t=>{const i=u[`document.properties.${t.property}`];if(i){const o=a(i);o.property||(o.property=t.property),o.suggestions=t.values,o.document=e.document,o._notifyDocumentChanges||(o._notifyDocumentChanges=t=>{"path"in t.detail&&"value"in t.detail&&e.notifyPath(t.detail.path)},o.addEventListener("document-changed",o._notifyDocumentChanges))}}))}))}))})))}}})();document.addEventListener("document-layout-changed",(e=>{if("metadata"===e.detail.layout||"view"===e.detail.layout)return;const t=e.detail.element;t&&customElements.whenDefined(t.tagName.toLowerCase()).then((()=>{t.__aiDocumentChanged=e=>U.updateWidgetSuggestions(t,e.path),t.constructor.createMethodObserver("__aiDocumentChanged(document.*)",!0),U.updateWidgetSuggestions(e.detail.element)}))}))},84392:(e,t,i)=>{"use strict";function o(e,t){if(!e||"object"!=typeof e)throw new TypeError('The param "obj" must be a JSON object');if(!Array.isArray(t))throw new TypeError('The param "path" must be an array');if(0!==t.length)return(Object.prototype.hasOwnProperty.call(e,t[0])||e[t[0]])&&"object"==typeof e[t[0]]||(e[t[0]]={}),o(e[t[0]],t.slice(1))}i.d(t,{Z:()=>o})},64091:(e,t,i)=>{"use strict";var o=i(66538),n=i(93426),a=(i(43384),i(95671),i(36037),i(85621),i(5453));i(23550),i(39059);{class e extends((0,n.P)([a.N],Nuxeo.Element)){static get template(){return o.d`
        <style>
          a {
            @apply --nuxeo-link;
          }

          a:hover {
            @apply --nuxeo-link-hover;
          }

          .preserve-white-space {
            white-space: pre;
          }
        </style>
        <nuxeo-tag icon="nuxeo:group">
          <dom-if if="[[!disabled]]">
            <template>
              <a class="preserve-white-space" href$="[[_href(group)]]" on-click="_preventPropagation"
                >[[_label(group)]]</a
              >
            </template>
          </dom-if>
          <dom-if if="[[disabled]]">
            <template>
              <span class="preserve-white-space">[[_label(group)]]</span>
            </template>
          </dom-if>
          <dom-if if="[[_isEntity(group)]]">
            <template>
              <nuxeo-tooltip position="top" offset="0" animation-delay="0">[[_name(group)]]</nuxeo-tooltip>
            </template>
          </dom-if>
        </nuxeo-tag>
      `}static get is(){return"nuxeo-group-tag"}static get properties(){return{group:Object,disabled:{type:Boolean,value:!1}}}_isEntity(e){return e&&e["entity-type"]&&("group"===e["entity-type"]||"document"===e["entity-type"]&&"group"===e.type)}_name(e){return this._isEntity(e)?e.groupname||e.properties["group:groupname"]:e.name?e.name.replace("group:",""):e.replace("group:","")}_label(e){return this._isEntity(e)?e.grouplabel||e.properties["group:grouplabel"]||this._name(e):e.label?e.label.replace("group:",""):e.replace("group:","")}_href(e){return this.urlFor("group",this._name(e))}_preventPropagation(e){e.stopPropagation()}}customElements.define(e.is,e),Nuxeo.GroupTag=e}},83830:e=>{e.exports=' <nuxeo-slot-content name="adminAIMenuItem" slot="ADMINISTRATION_MENU" order="100"> <template> <nuxeo-filter user="[[user]]" expression="user.isAdministrator"> <template> <nuxeo-menu-item name="aicore" label="app.title.admin.aicore" route="administration:aicore"> </nuxeo-menu-item> <nuxeo-menu-item name="aicloud" label="admin.ai.cloud.heading" route="administration:aicloud"> </nuxeo-menu-item> </template> </nuxeo-filter> </template> </nuxeo-slot-content> <nuxeo-slot-content name="aiadminslot" slot="ADMINISTRATION_PAGES"> <template> <nuxeo-filter user="[[user]]" expression="user.isAdministrator"> <template> <nuxeo-admin-ai name="aicore"></nuxeo-admin-ai> <admin-ai-insight name="aicloud"></admin-ai-insight> </template> </nuxeo-filter> </template> </nuxeo-slot-content> <nuxeo-slot-content name="adminAiExport" slot="AI_ITEMS" order="20"> <template> <nuxeo-page-item name="export" label="Export"></nuxeo-page-item> <nuxeo-page-item name="advanced" label="Advanced"></nuxeo-page-item> </template> </nuxeo-slot-content> <nuxeo-slot-content name="adminAiExportPage" slot="AI_PAGES" order="20"> <template> <nuxeo-admin-ai-export name="export"></nuxeo-admin-ai-export> <nuxeo-admin-ai-advanced-export name="advanced"></nuxeo-admin-ai-advanced-export> </template> </nuxeo-slot-content> <nuxeo-slot-content name="enrichmentRemoveAction" slot="RESULTS_ACTIONS" order="-90"> <template> <nuxeo-ai-bulk-remove-button provider="[[nxProvider]]"></nuxeo-ai-bulk-remove-button> </template> </nuxeo-slot-content> <nuxeo-slot-content name="enrichmentAddAction" slot="RESULTS_ACTIONS" order="-95"> <template> <nuxeo-ai-bulk-add-button provider="[[nxProvider]]"></nuxeo-ai-bulk-add-button> </template> </nuxeo-slot-content> '}}]);