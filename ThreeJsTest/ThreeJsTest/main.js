import * as THREE from './three/build/three.module.js';
import { TrackballControls } from './three/examples/jsm/controls/TrackballControls.js';
import { TAirPlane, TPropeller } from './plane.js';
import { Snowman } from './snowman.js';

export class TScene {
    constructor(c) {
        this.canvas = c;
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x666666);

        let params = new Object();
        params.canvas = this.canvas;
        params.antialias = true;

        this.renderer = new THREE.WebGLRenderer(params);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;

        this.aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.PerspectiveCamera(75, this.aspect, 0.1, 5000);
        this.camera.position.set(0, 0, -100);

        let al = new THREE.AmbientLight(0xffffff, 0.5);
        this.scene.add(al);

        this.controls = new TrackballControls(this.camera, document.body);
        this.controls.rotateSpeed = 2.0;
        this.controls.minDistance = 1;
        this.controls.maxDistance = 200;

        this.material = new THREE.MeshPhongMaterial({
            color: 0xff0021,
            emissive: 0x222222,
            reflectivity: 0.5,
            side: THREE.DoubleSide,
            flatShading: true,
            specular: 0xffffff
        });

        this.radius = 1;
        let r = new THREE.SphereBufferGeometry(this.radius);
        this.sphere = new THREE.Mesh(r, this.material);
        this.scene.add(this.sphere);

        this.boxhelper = new THREE.BoxHelper(this.sphere, 0xffff00);
        this.sphere.add(this.boxhelper);

        // let airplane = new TAirPlane().assemble(this.scene);         // add airplane

        // this.propeller = new TPropeller();                           // add propeller
        // this.propeller.assemble(this.scene);

        this.snowman = new Snowman();
        this.snowman.assemble(this.scene);
    }

   
    animate() {
        this.controls.update();
        //this.propeller.animate();
        this.render();
        requestAnimationFrame(this.animate.bind(this));
            
     };

    render() {
        this.renderer.render(this.scene, this.camera);
    }

}