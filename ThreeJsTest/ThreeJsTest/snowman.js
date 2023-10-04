import * as THREE from './three/build/three.module.js';

export class Snowman extends TAirPlane {
    constructor() {

        super();

    }

    super.assemble(scene) {

    const geometry = new THREE.SphereGeometry(15, 32, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const sphere = new THREE.Mesh(geometry, material); scene.add(sphere);

    this.group.add(this.sphere);

}

animate(){

}
