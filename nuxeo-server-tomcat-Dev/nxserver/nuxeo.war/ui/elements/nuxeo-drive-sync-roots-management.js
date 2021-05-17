import{Polymer}from"@polymer/polymer/lib/legacy/polymer-fn.js";import{html}from"@polymer/polymer/lib/utils/html-tag.js";import{I18nBehavior}from"@nuxeo/nuxeo-ui-elements/nuxeo-i18n-behavior.js";Polymer({_template:html`
    <style include="iron-flex iron-flex-alignment iron-flex-factors">
      :host {
        display: block;
      }

      .table {
        font-family: var(--nuxeo-app-font);
        line-height: 3.5;
      }

      .row {
        border-bottom: 1px solid var(--nuxeo-border);
        @apply --layout-horizontal;
      }

      .row:hover {
        background-color: var(--nuxeo-container-hover);
      }

      .header {
        background-color: var(--nuxeo-table-header-background);
        color: var(--nuxeo-table-header-titles);
        font-weight: 400;
        height: 56px;
        display: flex;
        flex-direction: row;
      }

      .cell {
        padding: 0 24px 0 24px;
        min-height: 46px;
        overflow: hidden;
      }

      paper-icon-button:hover ::content iron-icon {
        color: var(--nuxeo-action-hover, #00adff);
      }

      .emptyResult {
        color: var(--nuxeo-text-light, #939caa);
        display: block;
        font-weight: 300;
        padding: 1.5em 0.7em;
        text-align: center;
        font-size: 1.1em;
      }
    </style>

    <nuxeo-operation auto id="roots" op="NuxeoDrive.GetRoots" on-response="_handleRoots"></nuxeo-operation>
    <nuxeo-operation id="disable" op="NuxeoDrive.SetSynchronization" params='{"enable": false}'></nuxeo-operation>

    <template is="dom-if" if="[[_empty(roots)]]">
      <div class="emptyResult">
        [[i18n('driveSyncRootsManagement.roots.empty')]]
      </div>
    </template>

    <template is="dom-if" if="[[!_empty(roots)]]">
      <div class="table">
        <div class="header">
          <div class="cell flex-1">[[i18n('driveSyncRootsManagement.root.name')]]</div>
          <div class="cell flex-3">[[i18n('driveSyncRootsManagement.root.path')]]</div>
          <div class="cell"></div>
        </div>
        <template is="dom-repeat" items="[[roots]]" as="doc">
          <div class="row">
            <div class="cell flex-1">[[doc.title]]</div>
            <div class="cell flex-3">[[doc.path]]</div>
            <div class="cell actions">
              <paper-icon-button
                icon="icons:clear"
                title="[[i18n('driveSyncRootsManagement.root.disable')]]"
                on-tap="_disable"
              >
              </paper-icon-button>
            </div>
          </div>
        </template>
      </div>
    </template>

    <paper-toast id="toast">[[i18n('driveSyncRootsManagement.roots.disabled')]]</paper-toast>
  `,is:"nuxeo-drive-sync-roots-management",properties:{roots:{type:Array,value:[]}},behaviors:[I18nBehavior],_handleRoots(e){this.roots=e.detail.response.entries},_empty:e=>!e.length,_disable(e){return this.$.disable.input=e.model.doc.uid,this.$.disable.execute().then(this.refresh.bind(this)).then((()=>{this.$.toast.toggle()}))},refresh(){return this.$.roots.execute(this)}});