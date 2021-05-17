/*! For license information please see admin-ai-advanced-export.js.LICENSE.txt */
import{mixinBehaviors}from"@polymer/polymer/lib/legacy/class.js";import{I18nBehavior}from"@nuxeo/nuxeo-ui-elements/nuxeo-i18n-behavior.js";import"@nuxeo/nuxeo-elements/nuxeo-element.js";import{html}from"@polymer/polymer/lib/utils/html-tag.js";import{LayoutBehavior}from"@nuxeo/nuxeo-ui-elements/nuxeo-layout-behavior.js";class AdminAIAdvancedExport extends(mixinBehaviors([I18nBehavior],Nuxeo.Element,LayoutBehavior)){static get template(){return html`
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
    `}static get is(){return"nuxeo-admin-ai-advanced-export"}static get properties(){return{inProps:{type:String,value:"dc:title,file:content"},outProps:{type:String,value:"dc:lastContributor"},splitProp:{type:String,value:"80"},query:{type:String,value:"SELECT * FROM Document WHERE ecm:primaryType = 'File'"},_exportText:{type:String,value:""},_stats:{type:String},currentDoc:{type:Object},statuses:{type:Array,value:[]},visible:{type:Boolean,value:!1,observer:"_visibleChanged"},_timeOut:{type:Number}}}_displayVal(t){if(null!=t.numericValue)return t.numericValue;if("terms"===t.type){let e="";return t.value.forEach((t=>{e+=` ${t.key} (${t.docCount})`})),e}return JSON.stringify(t.value)}_filter(t){return t&&t.filter((t=>!("total"===t.type||"count"===t.type)))}_computeLabel(t,e){const a=t&&t.find((t=>t.type===e));return a&&this.i18n(`admin.ai.export.${e}`,a.numericValue)}_recompute(){this.$.aiStats.params={query:this.query,inputs:this.inProps,outputs:this.outProps},this.$.aiStats.execute().then((t=>{t&&0!==t.length||this.fire("notify",{message:this.i18n("admin.ai.stats.none")})})).catch((()=>{this.fire("notify",{message:this.i18n("admin.ai.stats.error")})}))}_export(){this.$.aiExport.params={query:this.query,inputs:this.inProps,outputs:this.outProps,split:this.splitProp},this.$.aiExport.execute().then((t=>{this._exportText=this.i18n("admin.ai.export.id",t.value),this.fire("notify",{message:this.i18n("admin.ai.export.success")})})).catch((()=>{this._exportText="",this.fire("notify",{message:this.i18n("admin.ai.export.error")})}))}_visibleChanged(t){t?this.$.aiExportStatus.execute():!t&&this._timeOut&&clearTimeout(this._timeOut)}_statusReceived(t){this.statuses=t.detail.response.value,this.visible&&(this._timeOut=setTimeout((()=>this.$.aiExportStatus.execute()),2e3))}}customElements.define(AdminAIAdvancedExport.is,AdminAIAdvancedExport),Nuxeo.AdminAIAdvancedExport=AdminAIAdvancedExport;