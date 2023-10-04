import * as THREE from './three/build/three.module.js';
import { TrackballControls } from './three/examples/jsm/controls/TrackballControls.js';

export class Snowman(){

    constructor(){
        const geometry = new THREE.SphereGeometry(15, 32, 16);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const sphere = new THREE.Mesh(geometry, material); scene.add(sphere);
    }

    
}

