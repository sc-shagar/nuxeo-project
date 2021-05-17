/*! For license information please see admin-ai-export.js.LICENSE.txt */
import{mixinBehaviors}from"@polymer/polymer/lib/legacy/class.js";import{I18nBehavior}from"@nuxeo/nuxeo-ui-elements/nuxeo-i18n-behavior.js";import"@nuxeo/nuxeo-elements/nuxeo-element.js";import{html}from"@polymer/polymer/lib/utils/html-tag.js";import{LayoutBehavior}from"@nuxeo/nuxeo-ui-elements/nuxeo-layout-behavior.js";class AdminAIExport extends(mixinBehaviors([I18nBehavior],Nuxeo.Element,LayoutBehavior)){static get template(){return html`
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
    `}static get is(){return"nuxeo-admin-ai-export"}static get properties(){return{typeName:{type:String,value:""},currentDoc:{type:Object},statuses:{type:Array,value:[]},visible:{type:Boolean,value:!1,observer:"_visibleChanged"},_timeOut:{type:Number}}}_visibleChanged(e){e?this.$.aiExportStatus.execute():!e&&this._timeOut&&clearTimeout(this._timeOut)}_statusReceived(e){this.statuses=e.detail.response.value,this.visible&&(this._timeOut=setTimeout((()=>this.$.aiExportStatus.execute()),2e3))}_updateItem(e){this.currentDoc=e.detail.value}_export(){if(!this._canExport())return void this.fire("notify",{message:"Type and Model are required parameters"});const e=this.currentDoc.properties,t=e["ai_model:inputs"].map((e=>e.name)).join(","),i=e["ai_model:outputs"].map((e=>e.name)).join(","),a=`SELECT * FROM Document WHERE ecm:isProxy = 0 AND ecm:isVersion = 0 AND ecm:isTrashed = 0 AND ecm:primaryType = '${this.typeName}'`,o=e["ai_model:training_information"];this.$.aiExport.params={query:a,inputs:t,outputs:i,model_id:this.currentDoc.uid,model_name:e["ai_model:name"],model_start_date:o?o.start:null,model_end_date:o?o.end:null},this.$.aiExport.execute().then((e=>(this.fire("notify",{message:this.i18n("admin.ai.export.success")}),e.value))).catch((()=>{this.fire("notify",{message:this.i18n("admin.ai.export.error")})}))}_canExport(){return 0!==this.typeName.length&&null!=this.currentDoc}}customElements.define(AdminAIExport.is,AdminAIExport),Nuxeo.AdminAIExport=AdminAIExport;