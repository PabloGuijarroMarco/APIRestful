import * as THREE from 'three';
import { Injectable, ElementRef, OnDestroy, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EngineService implements OnDestroy {
  private canvas;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.AmbientLight;
  private loader: THREE.ObjectLoader;

  private cube: THREE.Mesh;

  private frameId: number = null;

  public constructor(private ngZone: NgZone) {}

  public ngOnDestroy() {
    if (this.frameId != null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  createScene(canvas: ElementRef<HTMLCanvasElement>): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = document.getElementById('renderCanvas');

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(window.innerWidth/9, window.innerHeight/9);
    //this.renderer.setSize(420, 320);
    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.camera.position.z = 1.2;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight( 0x404040 );
    this.light.position.z = 10;
    this.scene.add(this.light);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      /*this.loader = new THREE.ObjectLoader();
      this.loader.load(
        // resource URL
        "assets/untitled.json",
      
        // onLoad callback
        // Here the loaded data is assumed to be an object
        function ( obj ) {
          console.log('ha cargado');
          // Add the loaded object to the scene
          
          //this.cube=obj;
          //this.scene.add( this.cube );
        },
      
        // onProgress callback
        function ( xhr) {
          console.log('hola');
          console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
          //console.log(obj);
          
        },
      
        // onError callback
        function ( err ) {
          console.error( 'An error happened' );
        }
      );*/

      // Loader
    var loader = new THREE.BufferGeometryLoader();
        var mesh;
    // load a resource
    loader.load(
        // resource URL
        'assets/moneda33.json',
 
        // onLoad callback
        function (geometry) {
 
            // create a mesh with the geometry
            // and a material, and add it to the scene
            mesh = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial({}));
            //this.scene.add(mesh);
          console.log(mesh);
          //this.cube=mesh;
            // render the scene
            //renderer.render(scene, camera);
            //return mesh;
 
        }
 
    );
    setTimeout(() => {
    console.log(mesh);
    this.cube=mesh;
    //this.cube = new THREE.Mesh( geometry, material );
    this.scene.add(this.cube);
  }, 400);

  }

  animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }

      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  render() {
    this.frameId = requestAnimationFrame(() => {
      this.render();
    });

    //this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);
  }

  resize() {
    const width = window.innerWidth/9;
    const height = window.innerHeight/9;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
  }
}
