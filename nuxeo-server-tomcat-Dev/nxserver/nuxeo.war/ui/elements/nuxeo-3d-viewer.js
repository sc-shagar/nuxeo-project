import{Polymer}from"@polymer/polymer/lib/legacy/polymer-fn.js";import{html}from"@polymer/polymer/lib/utils/html-tag.js";import{dom}from"@polymer/polymer/lib/legacy/polymer.dom.js";import{IronResizableBehavior}from"@polymer/iron-resizable-behavior/iron-resizable-behavior.js";import*as THREE from"three";import"three/examples/js/controls/OrbitControls.js";import"three/examples/js/loaders/GLTFLoader.js";import"three/examples/js/loaders/gltf/glTF-parser.js";import"three/examples/js/loaders/gltf/glTFLoader.js";import"three/examples/js/loaders/gltf/glTFLoaderUtils.js";import"three/examples/js/loaders/gltf/glTFAnimation.js";import"three/examples/js/loaders/gltf/glTFShaders.js";Polymer({_template:html`
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
  `,is:"nuxeo-3d-viewer",behaviors:[IronResizableBehavior],properties:{loader:{type:String,value:"simple",observer:"_loaderChanged"},src:{type:String,observer:"_sourceChanged"},sphericalCoords:{type:Array,value:[0,0],notify:!0,reflectToAttribute:!0,observer:"_sphericalCoordsChanged"},setupFinished:{type:Boolean,readOnly:!0,value:!1,notify:!0}},listeners:{"iron-resize":"_resize","on-setup-finished":"load"},attached(){this.async(this.notifyResize,1e3)},ready(){this._setupDone=!1,this.$.threed.width=this.width,this.$.threed.height=this.height,this._setup(),this._loaderChanged()},load(){const e=function(e){return function(t){e===this.src&&(this.clear(),this._processLoad(t),this._resize(),this._render())}.bind(this)}.bind(this),t=function(e){return function(t){e===this.latestLoadTS&&(this.$.progress.value=t.loaded/t.total*100)}.bind(this)}.bind(this);this.src&&(this.latestLoadTS=Date.now(),this.$.progress.value=0,this.$.progress.hidden=!1,this.gltfLoader.load(this.src,e(this.src),t(this.latestLoadTS)))},clear(){if(this.scene){const e=this.scene.children;for(;e.length>0;)this._removeObject(e[0])}},_loaderChanged(){"complete"===this.loader?this.gltfLoader=new THREE.glTFLoader:this.gltfLoader=new THREE.GLTFLoader},_removeObject(e){null!==e.parent&&e.parent.remove(e)},_sourceChanged(){this.load()},_sphericalCoordsChanged(){this.setCameraFromAngles(this.sphericalCoords[0],this.sphericalCoords[1])},_setup(){this._setupScene(),this._setupCameras(),this._setupLights(),this._setupRenderer(),this._setupControls(),this._setSetupFinished(!0)},_setupScene(){this.root=new THREE.Scene,this.scene=new THREE.Scene,this.root.add(this.scene);const e=new THREE.PlaneGeometry(.5,.5),t=new THREE.MeshPhongMaterial({color:16777215});this.ground=new THREE.Mesh(e,t),this.ground.rotation.x=-Math.PI/2,this.ground.scale.multiplyScalar(3),this.ground.receiveShadow=!0,this.ground.position.copy(new THREE.Vector3(0,-.6,0)),this.root.add(this.ground)},_setupCameras(){this.cameras={},this.camera=new THREE.PerspectiveCamera(25,.5,.001,2e3),this.root.add(this.camera),this._cameraComposition(this.camera)},_setupLights(){const e=new THREE.AmbientLight(16777215,.5);this.root.add(e);const t=new THREE.SpotLight(16777215,.5);t.position.set(0,5,0),t.target.position.set(0,0,0),t.shadow.camera.far=10,t.castShadow=!0,t.shadow.darkness=.001,t.shadow.bias=.01,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,this.root.add(t)},_setupRenderer(){this.renderer=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMapSoft=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,dom(this.$.threed).appendChild(this.renderer.domElement)},_setupControls(){this.controls=new THREE.OrbitControls(this.camera,this.$.threed),this.controls.addEventListener("change",this._controlsUpdated.bind(this)),this._sphericalCoordsChanged()},_controlsUpdated(){this._render()},_resize(){if(this.setupFinished){let e;this.camera.aspect=this.$.threed.offsetWidth/this.$.threed.offsetHeight,this.camera.updateProjectionMatrix();const t=this.cameras.length;for(e=0;e<t;e++)this.cameras[e].aspect=this.$.threed.offsetWidth/this.$.threed.offsetHeight,this.cameras[e].updateProjectionMatrix();this.renderer.setSize(this.$.threed.clientWidth,this.$.threed.clientHeight),this._render()}},_render(){"complete"===this.loader&&THREE.glTFShaders.update(this.scene,this.camera),this.renderer.render(this.root,this.camera)},setCameraFromAngles(e,t){if(!this.controls||null==e||null==t)return;this.controls.reset();const s=e%360*(Math.PI/180),r=t%360==0?1e-15:t%360*(Math.PI/180),i=this.cameraDistance;this.camera.position.set(-i*Math.cos(s)*Math.sin(r),i*Math.cos(r),i*Math.sin(s)*Math.sin(r)),this.controls.update()},_animate(){window.requestAnimationFrame(this._animate.bind(this)),THREE.glTFAnimator.update(),THREE.glTFShaders.update(this.scene,this.camera),this.controls.update(),this._render()},_processLoad(e){const t=e.scene;if(e.cameras&&e.cameras.length)for(let t=0;t<e.cameras.length;t++){const s=e.cameras[t],r=s.parent.name;this.cameras[r]=s}if(e.animations&&e.animations.length)for(let t=0;t<e.animations.length;t++){const s=e.animations[t];s.loop=!0,s.play(),this.animations.push(s)}this._objectComposition(t),this.scene.add(t),this.$.progress.hidden=!0,this._animate()},_objectComposition(e){const t=new THREE.Matrix4;t.makeRotationAxis(new THREE.Vector3(0,1,0),Math.PI),e.matrix.multiply(t),e.rotation.setFromRotationMatrix(e.matrix);const s=new THREE.Box3;s.setFromObject(e);const r=(new THREE.Vector3).copy(s.max).sub(s.min),i=1/Math.max.apply(null,[r.x,r.y,r.z]),o=(new THREE.Vector3).sub(s.getCenter()),a=(new THREE.Matrix4).identity();a.makeTranslation(o.x,o.y,o.z),a.multiplyScalar(i),e.applyMatrix(a);const h=function(e,t){e.geometry&&(e.castShadow=t,e.geometry.computeFaceNormals(),e.geometry.computeVertexNormals(),e.geometry.computeBoundingSphere(),e.geometry.elementsNeedUpdate=!0,e.geometry.verticesNeedUpdate=!0,e.geometry.normalsNeedUpdate=!0),e.material&&e.material.bumpMap&&(e.material.bumpScale=i)};h(e,!0),e.traverse((e=>{h(e,!0)}))},_cameraComposition(){this.sphericalCoords=[225,45],this.camera.fov=25,this.cameraDistance=4}});