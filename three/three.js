const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

// Scene backgorund image
const loader = new THREE.TextureLoader();
scene.background = loader.load("Images/galaxy.jpg")

// geometric figure
const geometry = new THREE.BoxGeometry();
material = new THREE.MeshPhysicalMaterial({	color: 0x777777 });
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const geometry2 = new THREE.BoxGeometry();
material = new THREE.MeshPhysicalMaterial({	color: 0x777777 });
const cube2 = new THREE.Mesh( geometry2, material );
scene.add( cube2 );

let group = new THREE.Group();
// position of box
let vector = new THREE.Vector3(10, 10, 10);

  // add wooden Box
let woodenBox = new THREE.Mesh(boxGeometry, woodMaterial);

 //update postion
 woodenBox.position.copy(vector);

// add to scene
group.add(woodenBox)
this.scene.add(group);

// camera and ligth
camera.position.z = 5;

const pointLigth = new THREE.PointLight(0xff0000, 2)
pointLigth.position.set(1,1,1)
pointLigth.intensity = 1
scene.add(pointLigth)

const light = new THREE.AmbientLight( 0x404040 );
light.intensity = 2.5;
scene.add( light );

// function start
function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	cube2.rotation.x += 0.01;
	cube2.rotation.y += 0.01;

	renderer.render( scene, camera );
};

// calls
animate();