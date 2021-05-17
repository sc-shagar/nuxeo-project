/*! For license information please see nuxeo-ai-suggestion-formatter-styles.js.LICENSE.txt */
import{html}from"@polymer/polymer/lib/utils/html-tag.js";const template=html`
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
`;document.head.appendChild(template.content);