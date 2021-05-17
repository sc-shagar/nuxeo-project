const Select2Editor=Handsontable.editors.TextEditor.prototype.extend();Select2Editor.prototype.prepare=function(t,e,i,o,s,n){Handsontable.editors.TextEditor.prototype.prepare.apply(this,arguments),this.options={},this.cellProperties.select2Options&&(this.options=$.extend(this.options,n.select2Options))},Select2Editor.prototype.createElements=function(){this.$body=$(document.body),this.wtDom=Handsontable.Dom,this.TEXTAREA=document.createElement("input"),this.TEXTAREA.setAttribute("type","text"),this.$textarea=$(this.TEXTAREA),this.wtDom.addClass(this.TEXTAREA,"handsontableInput"),this.textareaStyle=this.TEXTAREA.style,this.textareaStyle.width=0,this.textareaStyle.height=0,this.TEXTAREA_PARENT=document.createElement("DIV"),this.wtDom.addClass(this.TEXTAREA_PARENT,"handsontableInputHolder"),this.textareaParentStyle=this.TEXTAREA_PARENT.style,this.textareaParentStyle.top=0,this.textareaParentStyle.left=0,this.textareaParentStyle.display="none",this.TEXTAREA_PARENT.appendChild(this.TEXTAREA),this.instance.rootElement[0].appendChild(this.TEXTAREA_PARENT);const t=this;Handsontable.hooks.add("afterRender",(()=>{t.instance._registerTimeout("refresh_editor_dimensions",(()=>{t.refreshDimensions()}),0)}))};const onSelect2Changed=function(){this.close(),this.finishEditing()},onSelect2Closed=function(){this.close(),this.finishEditing()},onBeforeKeyDown=function(t){const e=this.getActiveEditor(),i=Handsontable.helper.keyCode,o=(t.ctrlKey||t.metaKey)&&!t.altKey;if(t.target===e.TEXTAREA&&!t.isImmediatePropagationStopped())if(17!==t.keyCode&&224!==t.keyCode&&91!==t.keyCode&&93!==t.keyCode)switch(t.keyCode){case i.ENTER:const s=e.instance.getSelected(),n=!(s[0]===s[2]&&s[1]===s[3]);(o&&!n||t.altKey)&&(e.isOpened()?(e.val(`${e.val()}\n`),e.focus()):e.beginEditing(`${e.originalValue}\n`),t.stopImmediatePropagation()),t.preventDefault();break;case i.A:case i.X:case i.C:case i.V:if(o){t.stopImmediatePropagation();break}case i.HOME:case i.END:t.stopImmediatePropagation()}else t.stopImmediatePropagation()};Select2Editor.prototype.open=function(){this.refreshDimensions(),this.textareaParentStyle.display="block",this.instance.addHook("beforeKeyDown",onBeforeKeyDown),this.$textarea.css({height:$(this.TD).height(),"min-width":$(this.TD).outerWidth()}),this.$textarea.show(),this.$textarea.select2(this.options).on("change",onSelect2Changed.bind(this)).on("select2-close",onSelect2Closed.bind(this))},Select2Editor.prototype.close=function(){this.instance.listen(),this.instance.removeHook("beforeKeyDown",onBeforeKeyDown),this.$textarea.off(),this.$textarea.hide(),Handsontable.editors.TextEditor.prototype.close.apply(this,arguments)},Select2Editor.prototype.val=function(t){if(void 0===t)return this.$textarea.val();this.$textarea.val(t)},Select2Editor.prototype.focus=function(){this.instance.listen()},Select2Editor.prototype.beginEditing=function(...t){const{onBeginEditing:e}=this.instance.getSettings();e&&!1===e()||Handsontable.editors.TextEditor.prototype.beginEditing.apply(this,t)},Select2Editor.prototype.finishEditing=function(...t){return this.instance.listen(),Handsontable.editors.TextEditor.prototype.finishEditing.apply(this,t)},Handsontable.editors.Select2Editor=Select2Editor,Handsontable.editors.registerEditor("select2",Select2Editor);