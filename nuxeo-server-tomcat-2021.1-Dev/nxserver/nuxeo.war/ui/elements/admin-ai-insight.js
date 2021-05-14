/*! For license information please see admin-ai-insight.js.LICENSE.txt */
import{mixinBehaviors}from"@polymer/polymer/lib/legacy/class";import{I18nBehavior}from"@nuxeo/nuxeo-ui-elements/nuxeo-i18n-behavior.js";import{html}from"@polymer/polymer/lib/utils/html-tag.js";import"@nuxeo/nuxeo-elements/nuxeo-element.js";class AdminAiInsight extends(mixinBehaviors([I18nBehavior],Nuxeo.Element)){static get is(){return"admin-ai-insight"}static get properties(){return{link:{type:String,value:""}}}ready(){super.ready(),this.$.aiInsight.execute().then((({url:e,aitoken:i,projectId:t,urlCore:n})=>{this.link=`${e}?aitoken=${i}&projectid=${t}&urlCore=${n}`})).catch((()=>{this.fire("notify",{message:this.i18n("admin.ai.cloud.error")})}))}static get template(){return html`
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
    `}}customElements.define(AdminAiInsight.is,AdminAiInsight);