import * as THREE from './three/build/three.module.js';

export class Snowman {
    constructor(radius, widthSegments, heightSegments, phiStart ,phiLength, thetaStart, thetaLength) {

        // radius = 1, widthSegments = 32, heightSegments = 16, phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI
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

        for (int i = 0, )
        this.sphereMesh2.position.x = 0;
        this.sphereMesh2.position.y = 2;

        scene.add(this.sphereMesh);
        scene.add(this.sphereMesh2);

    };

}
