import * as THREE from './three/build/three.module.js';

export class Snowman {
    constructor(radius, widthSegments, heightSegments, phiStart ,phiLength, thetaStart, thetaLength) {

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
        const geometry = new THREE.SphereGeometry(
            this.parameters.radius,
            this.parameters.widthSegments,
            this.parameters.heightSegments,
            this.parameters.phiStart,
            this.parameters.phiLength,
            this.parameters.thetaStart,
            this.parameters.thetaLength
        );
        const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        this.sphereMesh = new THREE.Mesh(geometry, material);
        this.sphereMesh2 = new THREE.Mesh(geometry, material);

        this.sphereMesh2.position.x = 0;
        this.sphereMesh2.position.y = 2;

        scene.add(this.sphereMesh);
        scene.add(this.sphereMesh2);

    };

    animate() {
        this.sphereMesh.position.y += 1;
    }


}
