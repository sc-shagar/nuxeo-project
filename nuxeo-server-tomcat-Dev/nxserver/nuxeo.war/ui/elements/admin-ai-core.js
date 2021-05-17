/*! For license information please see admin-ai-core.js.LICENSE.txt */
import{Polymer}from"@polymer/polymer/lib/legacy/polymer-fn.js";import{html}from"@polymer/polymer/lib/utils/html-tag.js";import{I18nBehavior}from"@nuxeo/nuxeo-ui-elements/nuxeo-i18n-behavior.js";Polymer({_template:html`
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
  `,is:"nuxeo-admin-ai",behaviors:[I18nBehavior],properties:{visible:Boolean,selected:{type:String,value:"export"}}});