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

	renderer.render( scene, camera );
};

// calls
animate();