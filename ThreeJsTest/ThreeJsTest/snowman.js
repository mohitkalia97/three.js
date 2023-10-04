import * as THREE from './three/build/three.module.js';

export class Snowman {
    constructor(radius = 1, widthSegments = 32, heightSegments = 16, phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI) {

        this.type = 'SphereGeometry';

        this.parameters = {
            radius: radius,
            widthSegments: widthSegments,
            heightSegments: heightSegments,
            phiStart: phiStart,
            phiLength: phiLength,
            thetaStart: thetaStart,
            thetaLength: thetaLength
        };

    }
    assemble(scene) {

        const geometry = new THREE.SphereGeometry(15, 32, 16);
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
       
    };
}
