import{DirectoryEditor,DirectoryRenderer}from"./editors/directory";import{DocumentEditor,DocumentRenderer}from"./editors/document";import{UserEditor,UserRenderer}from"./editors/user";import{ImageRenderer}from"./editors/image";Handsontable.editors.registerEditor("directory",DirectoryEditor),Handsontable.editors.registerEditor("document",DocumentEditor),Handsontable.editors.registerEditor("user",UserEditor);export const WIDGETS={listing_coverage:{type:"suggestOneDirectory",properties:{any:{dbl10n:!0,directoryName:"l10ncoverage"}}},listing_subjects:{type:"suggestManyDirectory",properties:{any:{dbl10n:!0,directoryName:"l10nsubjects"}}},listing_version:{type:"text",field:"versionLabel"},listing_last_contributor:{type:"singleUserSuggestion",renderer:UserRenderer},listing_title_link:{type:"text"},listing_thumbnail:{field:"thumb:thumbnail"}};export const WIDGET_TYPES={text:{type:"text"},textarea:{type:"text"},date:{type:"date"},datetime:{type:"date",dateFormat:"yy-mm-ddT00:00:00.000"},numeric:{type:"numeric"},int:{type:"numeric"},selectOneDirectory:{renderer:DirectoryRenderer,editor:"directory"},selectManyDirectory:{renderer:DirectoryRenderer,editor:"directory",multiple:!0},suggestOneDirectory:{renderer:DirectoryRenderer,editor:"directory"},suggestManyDirectory:{renderer:DirectoryRenderer,editor:"directory",multiple:!0},singleUserSuggestion:{renderer:UserRenderer,editor:"user"},multipleUsersSuggestion:{renderer:UserRenderer,editor:"user",multiple:!0},singleDocumentSuggestion:{renderer:DocumentRenderer,editor:"document",minimumInputLength:3},multipleDocumentsSuggestion:{renderer:DocumentRenderer,editor:"document",multiple:!0,minimumInputLength:3},image:{renderer:ImageRenderer,height:"150px",readOnly:!0}};