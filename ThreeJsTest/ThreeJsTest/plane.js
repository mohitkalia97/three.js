import * as THREE from './three/build/three.module.js';


export class TAirPlane {

    constructor() {

        this.color = 0xff0000;
        this.spannweite = 60;
        this.laenge = 50;
        this.breite = 10;

        this.group = new THREE.Group();
    }

    assemble(scene) {

        this.material = new THREE.MeshPhongMaterial({

            color: this.color,
            emissive: 0x222222,
            reflectivity: 0.5,
            side: THREE.DoubleSide,
            flatShading: false,
            specular: 0xffffff
        });

        let r = new THREE.BoxBufferGeometry(this.laenge, this.breite, this.breite);
        this.rumpf = new THREE.Mesh(r, this.material);
        let f = new THREE.BoxBufferGeometry(10, 1, this.spannweite);
        this.fluegel = new THREE.Mesh(f, this.material);

        this.fluegel.position.x = -10;

        let l = new THREE.BoxBufferGeometry(8, 8, 1);
        this.leitwerk = new THREE.Mesh(l,this.material);

        this.leitwerk.position.x = (this.laenge / 2) - 4;
        this.leitwerk.position.y = (this.breite / 2) + 4;

        

        this.group.add(this.rumpf);
        this.group.add(this.fluegel);
        this.group.add(this.leitwerk);


        scene.add(this.group);

    }

    animate() {


    }
}


export class TPropeller extends TAirPlane {

    constructor() {

        super();

    }

    assemble(scene) {

        super.assemble(scene);

        let p = new THREE.BoxBufferGeometry(1, this.breite * 1, 1);
        this.propeller = new THREE.Mesh(p, this.material);
        this.propeller.position.x = -(this.laenge / 2) - 1;

        this.group.add(this.propeller);

        this.group.children.forEach(child => {
            child.castShadow = true;
        })

    }

    animate() {
        this.propeller.rotateX(0.5);
        
    }
}


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
    
}