let scene = new THREE.Scene();
let aspect = 3 / 2;
let camera = new THREE.PerspectiveCamera(25, aspect, 0.1, 1000);
let renderer = new THREE.WebGLRenderer();
renderer.setSize(300, 200);
document.body.appendChild(renderer.domElement);

camera.position.z = 200;

let geometry = new THREE.BoxGeometry(30, 30, 30);
let material = new THREE.MeshLambertMaterial({
    color: "#12c712"
});

let cube = new THREE.Mesh(geometry, material);

// wireframe
let geo = new THREE.EdgesGeometry( cube.geometry );
let mat = new THREE.LineBasicMaterial( { color: 0x074a07, linewidth: 2 } );
let wireframe = new THREE.LineSegments( geo, mat );
cube.add( wireframe );

scene.add(cube);

const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.AmbientLight(color, intensity);
scene.add(light);

let render = function() {
    
    cube.rotation.x = 90;
    cube.rotation.y = 120;
    cube.rotation.z = 0.105;

    renderer.render(scene, camera);
};

render();