/*! For license information please see nuxeo-platform-3d.bundle.js.LICENSE.txt */
(self.webpackChunk_nuxeo_nuxeo_web_ui=self.webpackChunk_nuxeo_nuxeo_web_ui||[]).push([[921],{64899:(e,t,i)=>{"use strict";i.r(t);var o=i(21536),s=i(66538),a=i(74153),r=i(14190),n=i(61146);i(70274),i(33298),i(65065),i(86685),i(36356),i(28399),i(97238),(0,o.k)({_template:s.d`
    <style>
      :host {
        display: block;
      }

      #threed {
        position: relative;
        width: 100%;
        height: 100%;
      }

      #threed canvas {
        display: block;
        width: 100% !important;
      }

      #progress {
        position: absolute;
        top: 50%;
        left: 50%;
        padding: 16px;
        background: rgba(255, 255, 255, 0.5);
        transform: translate(-50%, -50%);
      }
    </style>
    <div id="threed">
      <paper-progress id="progress" hidden="true"></paper-progress>
    </div>
  `,is:"nuxeo-3d-viewer",behaviors:[r.z],properties:{loader:{type:String,value:"simple",observer:"_loaderChanged"},src:{type:String,observer:"_sourceChanged"},sphericalCoords:{type:Array,value:[0,0],notify:!0,reflectToAttribute:!0,observer:"_sphericalCoordsChanged"},setupFinished:{type:Boolean,readOnly:!0,value:!1,notify:!0}},listeners:{"iron-resize":"_resize","on-setup-finished":"load"},attached(){this.async(this.notifyResize,1e3)},ready(){this._setupDone=!1,this.$.threed.width=this.width,this.$.threed.height=this.height,this._setup(),this._loaderChanged()},load(){const e=function(e){return function(t){e===this.src&&(this.clear(),this._processLoad(t),this._resize(),this._render())}.bind(this)}.bind(this),t=function(e){return function(t){e===this.latestLoadTS&&(this.$.progress.value=t.loaded/t.total*100)}.bind(this)}.bind(this);this.src&&(this.latestLoadTS=Date.now(),this.$.progress.value=0,this.$.progress.hidden=!1,this.gltfLoader.load(this.src,e(this.src),t(this.latestLoadTS)))},clear(){if(this.scene){const e=this.scene.children;for(;e.length>0;)this._removeObject(e[0])}},_loaderChanged(){"complete"===this.loader?this.gltfLoader=new n.glTFLoader:this.gltfLoader=new n.GLTFLoader},_removeObject(e){null!==e.parent&&e.parent.remove(e)},_sourceChanged(){this.load()},_sphericalCoordsChanged(){this.setCameraFromAngles(this.sphericalCoords[0],this.sphericalCoords[1])},_setup(){this._setupScene(),this._setupCameras(),this._setupLights(),this._setupRenderer(),this._setupControls(),this._setSetupFinished(!0)},_setupScene(){this.root=new n.Scene,this.scene=new n.Scene,this.root.add(this.scene);const e=new n.PlaneGeometry(.5,.5),t=new n.MeshPhongMaterial({color:16777215});this.ground=new n.Mesh(e,t),this.ground.rotation.x=-Math.PI/2,this.ground.scale.multiplyScalar(3),this.ground.receiveShadow=!0,this.ground.position.copy(new n.Vector3(0,-.6,0)),this.root.add(this.ground)},_setupCameras(){this.cameras={},this.camera=new n.PerspectiveCamera(25,.5,.001,2e3),this.root.add(this.camera),this._cameraComposition(this.camera)},_setupLights(){const e=new n.AmbientLight(16777215,.5);this.root.add(e);const t=new n.SpotLight(16777215,.5);t.position.set(0,5,0),t.target.position.set(0,0,0),t.shadow.camera.far=10,t.castShadow=!0,t.shadow.darkness=.001,t.shadow.bias=.01,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,this.root.add(t)},_setupRenderer(){this.renderer=new n.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMapSoft=!0,this.renderer.shadowMap.type=n.PCFSoftShadowMap,(0,a.vz)(this.$.threed).appendChild(this.renderer.domElement)},_setupControls(){this.controls=new n.OrbitControls(this.camera,this.$.threed),this.controls.addEventListener("change",this._controlsUpdated.bind(this)),this._sphericalCoordsChanged()},_controlsUpdated(){this._render()},_resize(){if(this.setupFinished){let e;this.camera.aspect=this.$.threed.offsetWidth/this.$.threed.offsetHeight,this.camera.updateProjectionMatrix();const t=this.cameras.length;for(e=0;e<t;e++)this.cameras[e].aspect=this.$.threed.offsetWidth/this.$.threed.offsetHeight,this.cameras[e].updateProjectionMatrix();this.renderer.setSize(this.$.threed.clientWidth,this.$.threed.clientHeight),this._render()}},_render(){"complete"===this.loader&&n.glTFShaders.update(this.scene,this.camera),this.renderer.render(this.root,this.camera)},setCameraFromAngles(e,t){if(!this.controls||null==e||null==t)return;this.controls.reset();const i=e%360*(Math.PI/180),o=t%360==0?1e-15:t%360*(Math.PI/180),s=this.cameraDistance;this.camera.position.set(-s*Math.cos(i)*Math.sin(o),s*Math.cos(o),s*Math.sin(i)*Math.sin(o)),this.controls.update()},_animate(){window.requestAnimationFrame(this._animate.bind(this)),n.glTFAnimator.update(),n.glTFShaders.update(this.scene,this.camera),this.controls.update(),this._render()},_processLoad(e){const t=e.scene;if(e.cameras&&e.cameras.length)for(let t=0;t<e.cameras.length;t++){const i=e.cameras[t],o=i.parent.name;this.cameras[o]=i}if(e.animations&&e.animations.length)for(let t=0;t<e.animations.length;t++){const i=e.animations[t];i.loop=!0,i.play(),this.animations.push(i)}this._objectComposition(t),this.scene.add(t),this.$.progress.hidden=!0,this._animate()},_objectComposition(e){const t=new n.Matrix4;t.makeRotationAxis(new n.Vector3(0,1,0),Math.PI),e.matrix.multiply(t),e.rotation.setFromRotationMatrix(e.matrix);const i=new n.Box3;i.setFromObject(e);const o=(new n.Vector3).copy(i.max).sub(i.min),s=1/Math.max.apply(null,[o.x,o.y,o.z]),a=(new n.Vector3).sub(i.getCenter()),r=(new n.Matrix4).identity();r.makeTranslation(a.x,a.y,a.z),r.multiplyScalar(s),e.applyMatrix(r);const l=function(e,t){e.geometry&&(e.castShadow=t,e.geometry.computeFaceNormals(),e.geometry.computeVertexNormals(),e.geometry.computeBoundingSphere(),e.geometry.elementsNeedUpdate=!0,e.geometry.verticesNeedUpdate=!0,e.geometry.normalsNeedUpdate=!0),e.material&&e.material.bumpMap&&(e.material.bumpScale=s)};l(e,!0),e.traverse((e=>{l(e,!0)}))},_cameraComposition(){this.sphericalCoords=[225,45],this.camera.fov=25,this.cameraDistance=4}}),i(49348);var l=i(41608);(0,o.k)({_template:s.d`
    <style>
      :host {
        display: block;
      }

      nuxeo-3d-viewer {
        width: 100%;
        height: 40vh;
      }

      .title {
        color: #213f7d;
        font-size: 1.64rem;
      }

      .flex {
        font-size: 12px;
        margin: auto;
      }
    </style>

    <nuxeo-document id="doc" doc-id="[[document.uid]]"></nuxeo-document>

    <template is="dom-if" if="{{document.properties.file:content}}">
      <template is="dom-if" if="{{_hasItems(document.properties.threed:transmissionFormats)}}">
        <nuxeo-3d-viewer id="threedViewer" src="[[document.properties.threed:transmissionFormats.0.content.data]]">
        </nuxeo-3d-viewer>
      </template>
      <template is="dom-if" if="{{!_hasItems(document.properties.threed:transmissionFormats)}}">
        <p>[[i18n('threeDViewLayout.transmissionFormats.notAvailable')]]</p>
      </template>
    </template>
    <template is="dom-if" if="{{!document.properties.file:content}}">
      <nuxeo-dropzone value="{{document.properties.file:content}}"></nuxeo-dropzone>
    </template>
    <div class="horizontal layout center">
      <template is="dom-if" if="[[document.properties.file:content]]">
        <p class="title">
          <a href="[[document.properties.file:content.data]]">[[document.title]]</a>
        </p>
        <div class="horizontal flex end-justified layout">
          <nuxeo-delete-blob-button document="{{document}}" xpath="file:content"></nuxeo-delete-blob-button>
        </div>
      </template>
      <template is="dom-if" if="[[!document.properties.file:content]]">
        <p class="title">
          <span>[[document.title]]</span>
        </p>
      </template>
    </div>
  `,is:"nuxeo-3d-preview",properties:{document:{type:Object,notify:!0}},behaviors:[l.mB],created(){this._createMethodObserver("_valueChanged(document.properties.file:content)",!0)},_valueChanged(e){if(!e||e.data)return;const t={};t["file:content"]=this.document.properties["file:content"],this.$.doc.data={"entity-type":"document",repository:this.document.repository,uid:this.document.uid,properties:t},this.$.doc.put().then((e=>{this.document=e,this.fire("notify",{message:this.i18n(this.uploadedMessage)}),this.fire("document-updated")}))},_hasItems:e=>e.length>0}),(0,o.k)({_template:s.d`
    <style>
      :host {
        display: block;
      }

      .title {
        color: #213f7d;
        font-size: 1.64rem;
      }

      .render-views {
        @apply --layout-horizontal;
        @apply --layout-wrap;
      }

      .render-views > .item {
        @apply --layout-vertical;
        @apply --layout-center;
      }

      .render-views > .item label {
        color: #999;
      }

      .render-views > .item img {
        width: 200px;
      }
    </style>

    <p class="title">[[i18n('threeDViewLayout.renderViews.heading')]]</p>
    <template is="dom-if" if="{{_hasItems(document.properties.threed:renderViews)}}">
      <div class="render-views">
        <template is="dom-repeat" items="[[document.properties.threed:renderViews]]" as="renderView">
          <div class="item">
            <img src="[[renderView.thumbnail.data]]" on-tap="_setCoords" />
            <div>
              <label class="layout flex-2">[[renderView.title]]</label>
              <paper-icon-button icon="icons:file-download" on-tap="_downloadView" noink></paper-icon-button>
              <paper-tooltip>[[i18n('threeDViewLayout.renderViews.download')]]</paper-tooltip>
            </div>
          </div>
        </template>
      </div>
    </template>
    <template is="dom-if" if="{{!_hasItems(document.properties.threed:renderViews)}}">
      <p>[[i18n('threeDViewLayout.renderViews.notAvailable')]]</p>
    </template>
  `,is:"nuxeo-3d-render-views",properties:{document:{type:Object,notify:!0}},behaviors:[l.mB],_hasItems:e=>e.length>0,_setCoords(e){this.fire("3d-viewer-coords-change",{azimuth:e.model.renderView.azimuth,zenith:e.model.renderView.zenith})},_downloadView(e){window.location.href=e.model.renderView.content.data}}),(0,o.k)({_template:s.d`
    <style>
      :host {
        display: block;
      }

      .title {
        color: #213f7d;
        font-size: 1.64rem;
      }

      .flex {
        font-size: 12px;
        margin: auto;
      }

      .format {
        display: inline-block;
        width: 100%;
      }

      .format-name {
        float: left;
        width: 25%;
      }

      .format-info {
        float: left;
        height: 100%;
        width: 65%;
      }

      .format-polygons {
        height: 50%;
        display: flex;
      }

      .format-textures {
        height: 50%;
        display: flex;
      }

      .format-buttons {
        float: left;
        width: 8%;
        display: flex;
      }

      .format-info-element {
        float: left;
      }
    </style>

    <p class="title">[[i18n('threeDViewLayout.transmissionFormats.heading')]]</p>
    <template is="dom-if" if="{{_hasItems(document.properties.threed:transmissionFormats)}}">
      <div class="transmission-formats">
        <template is="dom-repeat" items="[[document.properties.threed:transmissionFormats]]" as="format">
          <div class="format">
            <div class="format-name">
              <label class="layout flex-2">[[format.name]]</label>
            </div>
            <div class="format-info">
              <div class="format-polygons item">
                <iron-icon class="format-info-element" icon="image:details"></iron-icon>
                <span class="layout flex format-info-element">[[_getPolyInfo(format)]]</span>
                <template class="format-info-element" is="dom-if" if="{{format.info.geometry_lod_success}}">
                  <iron-icon icon="icons:done"></iron-icon>
                </template>
                <template class="format-info-element" is="dom-if" if="{{!format.info.geometry_lod_success}}">
                  <iron-icon icon="icons:warning"></iron-icon>
                </template>
                <span class="layout flex format-info-element"
                  >[[_getPolyNumber(format)]] [[i18n('threeDViewLayout.unit.polygons')]]</span
                >
              </div>
              <div class="format-textures item">
                <template is="dom-if" if="{{_hasTextures(format)}}">
                  <iron-icon class="format-info-element" icon="image:image"></iron-icon>
                  <span class="layout flex format-info-element">[[_getTexInfo(format)]]</span>
                  <template class="format-info-element" is="dom-if" if="{{format.info.texture_lod_success}}">
                    <iron-icon icon="icons:done"></iron-icon>
                  </template>
                  <template class="format-info-element" is="dom-if" if="{{!format.info.texture_lod_success}}">
                    <iron-icon icon="icons:warning"></iron-icon>
                  </template>
                  <span class="layout flex format-info-element">[[_getTexSize(format)]]</span>
                </template>
              </div>
            </div>
            <div class="format-buttons">
              <div>
                <paper-icon-button icon="icons:visibility" on-tap="_loadFormat" noink></paper-icon-button>
                <paper-tooltip>[[i18n('threeDViewLayout.transmissionFormats.preview')]]</paper-tooltip>
              </div>
              <div>
                <paper-icon-button icon="icons:file-download" on-tap="_downloadFormat" noink></paper-icon-button>
                <paper-tooltip>[[i18n('threeDViewLayout.transmissionFormats.download')]]</paper-tooltip>
              </div>
            </div>
          </div>
        </template>
      </div>
    </template>
    <template is="dom-if" if="{{!_hasItems(document.properties.threed:transmissionFormats)}}">
      <p>[[i18n('threeDViewLayout.transmissionFormats.notAvailable')]]</p>
    </template>
  `,is:"nuxeo-3d-transmission-formats",properties:{document:{type:Object,notify:!0}},behaviors:[l.mB],_hasItems:e=>e.length>0,_formatAsReadable(e,t,i){if((e=Number(e))<t)return`${e} ${i}`;const o=parseInt(Math.log(e)/Math.log(t),0),s=String("kMGTPE".charAt(o-1));return`${Math.round(e/t**o*10)/10} ${s}${i}`},_getPolyInfo(e){const t=null==e.percPoly?"":`${e.percPoly} %`,i=null==e.maxPoly?"":`< ${this._formatAsReadable(e.maxPoly,1e3,"")}`;return null!=e.percPoly&&null!=e.maxPoly?`${t} | ${i}`:t+i},_getPolyNumber(e){return this._formatAsReadable(e.info.polygons,1e3,"")},_hasTextures:e=>e.info.textures_size>0,_getTexInfo(e){const t=null==e.percTex?"":`${e.percTex} %`,i=null==e.maxTex?"":`< ${e.maxTex}`;return null!=e.percTex&&null!=e.maxTex?`${t} | ${i}`:t+i},_getTexSize(e){return this._hasTextures(e)?this._formatAsReadable(e.info.textures_size,1024,"B"):null},_loadFormat(e){this.fire("3d-viewer-content-change",{content:e.model.format.content.data})},_downloadFormat(e){window.location.href=e.model.format.content.data}})}}]);