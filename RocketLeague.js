var renderer = null,
    scene = null,
    camera = null;

var carro, carro1;
var estadio, bola;

var velocidadeCarro = 0;
var velocidadeCarro1 = 0;
var anguloCarro = 0;
var anguloCarro1 = 0;
var framesCarro = 0;
var framesCarro1 = 0;
var framesBola = 0;
var velocidadeBolaX = 0;
var velocidadeBolaZ = 0;

var carroAzulGolos = 0;
var carroVermelhoGolos = 0;


var direcoes = { "W": false, "A": false, "S": false, "D": false, "&": false, "%": false, "(": false, "'": false };

var loader;

window.onload = function init() {
    // Create the Three.js renderer
    renderer = new THREE.WebGLRenderer();
    // Set the viewport 
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#AAAAAA");
    renderer.shadowMap.enabled= true;
    document.body.appendChild(renderer.domElement);

    // Create a new Three.js scene
    scene = new THREE.Scene();
    var bgTexture = new THREE.TextureLoader().load('texturas/window.jpg');
    scene.background = bgTexture;



    // Add  a camera so we can view the scene
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.01, 10000);
    camera.position.z = 000;
    camera.position.x = 850;
    camera.position.y = 50;
    camera.rotation.y = Math.PI / 2;





    controls = new THREE.OrbitControls(camera);
    controls.addEventListener('change', function () { renderer.render(scene, camera); });
    controls.target.set(620, -20, 0);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.rotateSpeed = 0.1;
    controls.maxPolarAngle = 1.8;
    var ambient = new THREE.AmbientLight(0x444444);
    scene.add(ambient);

    var pointLight = new THREE.PointLight( "white");
    pointLight.position.set( 500, 50, 0 );
    pointLight.castShadow = true;
    pointLight.onlySHadow = true;
    scene.add( pointLight );

   /*  var directionalLight = new THREE.DirectionalLight(0xffeedd);
    directionalLight.castShadow = true;
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
 */

    /* CARREGAMENTO DE OBJETOS */


    //Paredes

    var texture = new THREE.TextureLoader().load('texturas/nuvens.jpg');
    // create a texture PHONG material
    var material = new THREE.MeshPhongMaterial({ map: texture });

    var geometry = new THREE.BoxGeometry(1, 1000, 1000);
    var parede = new THREE.Mesh(geometry, material);
    parede.position.y = 100
    scene.add(parede);

    var geometry = new THREE.BoxGeometry(1, 1000, 1000);
    var parede = new THREE.Mesh(geometry, material);
    parede.position.x = 1000
    parede.position.y = 100
    scene.add(parede);

    //parede da janela

    var geometry = new THREE.BoxGeometry(1, 1000, 400);
    var parede = new THREE.Mesh(geometry, material);
    parede.position.z = 500
    parede.position.x = 800
    parede.rotation.y = Math.PI / 2
    parede.position.y = 100
    scene.add(parede);

    var geometry = new THREE.BoxGeometry(1, 1000, 500);
    var parede = new THREE.Mesh(geometry, material);
    parede.position.z = 500
    parede.position.x = 180
    parede.rotation.y = Math.PI / 2
    parede.position.y = 100
    scene.add(parede);


    var texture = new THREE.TextureLoader().load('texturas/rodape2.jpg');
    // create a texture PHONG material
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var geometry = new THREE.BoxGeometry(1, 300, 170);
    var parede = new THREE.Mesh(geometry, material);
    parede.position.z = 500
    parede.position.x = 515
    parede.rotation.y = Math.PI / 2
    parede.position.y = -20
    scene.add(parede);

    var texture = new THREE.TextureLoader().load('texturas/rodape2.jpg');
    // create a texture PHONG material
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var geometry = new THREE.BoxGeometry(1, 300, 170);
    var parede = new THREE.Mesh(geometry, material);
    parede.position.z = 500
    parede.position.x = 515
    parede.rotation.y = Math.PI / 2
    parede.position.y = 630
    scene.add(parede);

    var texture = new THREE.TextureLoader().load('texturas/nuvens.jpg');
    // create a texture PHONG material
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var geometry = new THREE.BoxGeometry(1, 1000, 1000);
    var parede = new THREE.Mesh(geometry, material);
    parede.position.z = -500
    parede.position.x = 500
    parede.rotation.y = Math.PI / 2
    parede.position.y = 100
    scene.add(parede);

    //Teto

    var geometry = new THREE.BoxGeometry(1000, 1, 1000);
    var texture = new THREE.TextureLoader().load('texturas/teto.jpg');
    // create a texture PHONG material
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var teto = new THREE.Mesh(geometry, material);
    teto.position.y = 600;
    teto.position.x = 500;
    scene.add(teto);

    //Rodape

    var geometry = new THREE.BoxGeometry(6, 10, 1000);
    var texture = new THREE.TextureLoader().load('texturas/rodape2.jpg');
    // create a texture PHONG material
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var rodape = new THREE.Mesh(geometry, material);
    rodape.position.y = -95;
    rodape.position.Z = 100;
    scene.add(rodape);

    var geometry = new THREE.BoxGeometry(6, 10, 1000);
    var texture = new THREE.TextureLoader().load('texturas/rodape2.jpg');
    // create a texture PHONG material
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var rodape1 = new THREE.Mesh(geometry, material);
    rodape1.position.y = -95;
    rodape1.position.x = 1000;
    scene.add(rodape1);

    var geometry = new THREE.BoxGeometry(6, 10, 1000);
    var texture = new THREE.TextureLoader().load('texturas/rodape2.jpg');
    // create a texture PHONG material
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var rodape2 = new THREE.Mesh(geometry, material);
    rodape2.position.y = -95;
    rodape2.rotation.y = Math.PI / 2
    rodape2.position.x = 500;
    rodape2.position.z = -500;

    scene.add(rodape2);

    var geometry = new THREE.BoxGeometry(6, 10, 1000);
    var texture = new THREE.TextureLoader().load('texturas/rodape2.jpg');
    // create a texture PHONG material
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var rodape3 = new THREE.Mesh(geometry, material);
    rodape3.position.y = -95;
    rodape3.rotation.y = Math.PI / 2
    rodape3.position.x = 500;
    rodape3.position.z = 500;
    scene.add(rodape3);

    //RodaTeto

    var geometry = new THREE.BoxGeometry(6, 10, 1000);
    var texture = new THREE.TextureLoader().load('texturas/rodape2.jpg');
    // create a texture PHONG material
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var rodape = new THREE.Mesh(geometry, material);
    rodape.position.y = 595;
    rodape.position.Z = 100;
    scene.add(rodape);

    var geometry = new THREE.BoxGeometry(6, 10, 1000);
    var texture = new THREE.TextureLoader().load('texturas/rodape2.jpg');
    // create a texture PHONG material
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var rodape1 = new THREE.Mesh(geometry, material);
    rodape1.position.y = 595;
    rodape1.position.x = 1000;
    scene.add(rodape1);

    var geometry = new THREE.BoxGeometry(6, 10, 1000);
    var texture = new THREE.TextureLoader().load('texturas/rodape2.jpg');
    // create a texture PHONG material
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var rodape2 = new THREE.Mesh(geometry, material);
    rodape2.position.y = 595;
    rodape2.rotation.y = Math.PI / 2
    rodape2.position.x = 500;
    rodape2.position.z = -500;

    scene.add(rodape2);

    var geometry = new THREE.BoxGeometry(6, 10, 1000);
    var texture = new THREE.TextureLoader().load('texturas/rodape2.jpg');
    // create a texture PHONG material
    var material = new THREE.MeshPhongMaterial({ map: texture });
    var rodape3 = new THREE.Mesh(geometry, material);
    rodape3.position.y = 595;
    rodape3.rotation.y = Math.PI / 2
    rodape3.position.x = 500;
    rodape3.position.z = 500;
    scene.add(rodape3);

    //porta

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('./models/porta.mtl', function (materials) {
        materials.preload();
        loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/porta.obj', function (object) {
            var madeira = new THREE.TextureLoader().load("texturas/door.jpg");
            object.getObjectByName("pCube5").material = new THREE.MeshPhongMaterial({ map: madeira });
            object.getObjectByName("polySurface1").material = new THREE.MeshPhongMaterial({ map: madeira });
            object.position.y = -130;
            object.scale.set(12, 12, 12)
            object.position.z = -480
            object.position.x = 550
            scene.add(object);
        });
    });

    //janela

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('./models/janela.mtl', function (materials) {
        materials.preload();
        loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/janela.obj', function (object) {
            object.position.y = -130;
            object.scale.set(0.24, 0.24, 0.24)
            object.position.z = 480
            object.position.x = 510
            object.position.y = 100
            object.rotation.y = Math.PI;
            scene.add(object);
        });
    });


    /* ESTADIO */

    estadio = new THREE.Object3D();
    //Paredes longas

    // upload image for texture
    var texture = new THREE.TextureLoader().load('texturas/texturaEstadio.png');
    // create a texture PHONG material
    var material = new THREE.MeshPhongMaterial({ map: texture });

    var geometry = new THREE.BoxGeometry(100, 100, 2000);
    var longa1 = new THREE.Mesh(geometry, material);
    estadio.add(longa1);

    var geometry = new THREE.BoxGeometry(100, 100, 2000);
    var longa2 = new THREE.Mesh(geometry, material);
    longa2.position.x = 1600;
    estadio.add(longa2);


    /* Paredes Curtas */

    //Curtas baixo
    var geometry = new THREE.BoxGeometry(500, 100, 100);
    var curtaBaixo1 = new THREE.Mesh(geometry, material);
    curtaBaixo1.position.z = 1050;
    curtaBaixo1.position.x = 200;
    estadio.add(curtaBaixo1);

    var geometry = new THREE.BoxGeometry(500, 100, 100);
    var curtaBaixo2 = new THREE.Mesh(geometry, material);
    curtaBaixo2.position.z = 1050;
    curtaBaixo2.position.x = 1400;
    estadio.add(curtaBaixo2);


    //Curtas cima
    var geometry = new THREE.BoxGeometry(500, 100, 100);
    var curtaBaixo1 = new THREE.Mesh(geometry, material);
    curtaBaixo1.position.z = -1050;
    curtaBaixo1.position.x = 200;
    estadio.add(curtaBaixo1);

    var geometry = new THREE.BoxGeometry(500, 100, 100);
    var curtaBaixo2 = new THREE.Mesh(geometry, material);
    curtaBaixo2.position.z = -1050;
    curtaBaixo2.position.x = 1400;
    estadio.add(curtaBaixo2);



    /* Balizas */


    //Balizas Baixo

    var geometry = new THREE.BoxGeometry(100, 100, 300);
    var posteBaixo1 = new THREE.Mesh(geometry, material);
    posteBaixo1.position.x = 500;
    posteBaixo1.position.z = 1150;
    posteBaixo1.castShadow = true;
    posteBaixo1.receiveShadow = true;
    estadio.add(posteBaixo1);

    var geometry = new THREE.BoxGeometry(100, 100, 300);
    var posteBaixo2 = new THREE.Mesh(geometry, material);
    posteBaixo2.position.x = 1100;
    posteBaixo2.position.z = 1150;
    posteBaixo2.castShadow = true;
    posteBaixo2.receiveShadow = true;
    estadio.add(posteBaixo2);

    var geometry = new THREE.BoxGeometry(500, 100, 100);
    var fundoBalizaBaixo = new THREE.Mesh(geometry, material);
    fundoBalizaBaixo.position.x = 800;
    fundoBalizaBaixo.position.z = 1250;
    fundoBalizaBaixo.castShadow = true;
    fundoBalizaBaixo.receiveShadow = true;
    estadio.add(fundoBalizaBaixo);


    //Balizas Cima

    var geometry = new THREE.BoxGeometry(100, 100, 300);
    var posteCima1 = new THREE.Mesh(geometry, material);
    posteCima1.position.x = 500;
    posteCima1.position.z = -1150;
    posteCima1.castShadow = true;
    posteCima1.receiveShadow = true;
    estadio.add(posteCima1);

    var geometry = new THREE.BoxGeometry(100, 100, 300);
    var posteCima2 = new THREE.Mesh(geometry, material);
    posteCima2.position.x = 1100;
    posteCima2.position.z = -1150;
    posteBaixo2.castShadow = true;
    posteBaixo2.receiveShadow = true;
    estadio.add(posteCima2);

    var geometry = new THREE.BoxGeometry(500, 100, 100);
    var fundoBalizaCima = new THREE.Mesh(geometry, material);
    fundoBalizaCima.position.x = 800;
    fundoBalizaCima.position.z = -1250;
    fundoBalizaCima.castShadow = true;
    fundoBalizaCima.receiveShadow = true;
    estadio.add(fundoBalizaCima);

    estadio.scale.set(0.15, 0.15, 0.15)
    estadio.position.x = 500
    estadio.position.y = -95
    scene.add(estadio)



    //Chão

    var geometry = new THREE.PlaneGeometry(1000, 1000, 32);
    var texture = new THREE.TextureLoader().load("texturas/wood-floor.jpg");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    texture.offset.set(4, 4);
    var material = new THREE.MeshPhongMaterial({ map: texture, side: THREE.DoubleSide });
    var plane = new THREE.Mesh(geometry, material);
    plane.position.y = -100;
    plane.position.x = 500;
    plane.rotation.x = Math.PI / 2;
    plane.receiveShadow = true;
    scene.add(plane);

    //Bola
    var geometry = new THREE.SphereGeometry(6);
    var texture = new THREE.TextureLoader().load("texturas/texturabola.png");
    var material = new THREE.MeshPhongMaterial({ map: texture });
    bola = new THREE.Mesh(geometry, material);
    bola.castShadow = true;
    bola.receiveShadow = true;
    bola.position.x = 620;
    bola.position.z = -0;
    bola.position.y = -94;
    scene.add(bola)







    //Carro

    mtlLoader.load('./models/toycar.mtl', function (materials) {
        materials.preload(); // load a material’s resource
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath("./models/");
        objLoader.load('toycar.obj', function (object) {// load a geometry resource
            carro = object;
            carro.position.y = -100;
            carro.position.x = 620;
            carro.position.z = -100;
            carro.scale.set(0.2, 0.2, 0.2);
            carro.castShadow = true;
            carro.receiveShadow = true;
            // mesh.rotation.y = Math.PI
            scene.add(carro);

        });
    });



    //Carro1
    mtlLoader.load('./models/toycar.mtl', function (materials) {
        materials.preload(); // load a material’s resource
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.setPath("./models/");
        objLoader.load('toycar.obj', function (object) {// load a geometry resource
         
            object.getObjectByName("body2 #1").material = new THREE.MeshPhongMaterial({ color: 0x990000 });
            carro1 = object;
            carro1.position.y = -100;
            carro1.position.x = 620;
            carro1.position.z = 100;
            anguloCarro1 = Math.PI;
            carro1.castShadow = true;
            carro1.receiveShadow = true;
            

            carro1.scale.set(0.2, 0.2, 0.2);
            // mesh.rotation.y = Math.PI
            scene.add(carro1);
       

        });
    });








    //Cama

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('./models/Cama.mtl', function (materials) {
        materials.preload();
        loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/Cama.obj', function (object) {
            var madeira = new THREE.TextureLoader().load("texturas/madeiracama.jpg");
            var lencol = new THREE.TextureLoader().load("texturas/lencol.jpg");
            object.getObjectByName("madeira").material = new THREE.MeshPhongMaterial({ map: madeira });
            object.getObjectByName("lencois1").material = new THREE.MeshPhongMaterial({ map: lencol });
            object.getObjectByName("lencois2").material = new THREE.MeshPhongMaterial({ map: lencol });
            object.rotation.y = Math.PI / 2
            object.position.y = -100;
            object.scale.set(2.5, 2.5, 2.5)
            object.position.z = -100
            object.position.x = 200
            object.castShadow = true;
            object.receiveShadow = true;
            scene.add(object);
        });
    });

    //Candeeiro

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('./models/candeeiro.mtl', function (materials) {
        materials.preload();
        loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/candeeiro.obj', function (object) {
            var madeira = new THREE.TextureLoader().load("texturas/madeiracama.jpg");
            var lencol = new THREE.TextureLoader().load("texturas/lencol.jpg");
            object.getObjectByName("madeira").material = new THREE.MeshPhongMaterial({ map: madeira });
            object.getObjectByName("cima").material = new THREE.MeshPhongMaterial({ map: lencol });
            object.scale.set(2.5, 2.5, 2.5);
            object.position.y = -100;
            object.rotation.y = Math.PI / 2
            scene.add(object);
            object.position.z = -320
            object.position.x = 200
            object.castShadow = true;
            object.receiveShadow = true;
        });
    });

    //Armario

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('./models/armario.mtl', function (materials) {
        materials.preload();
        loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/armario.obj', function (object) {
            var madeira = new THREE.TextureLoader().load("texturas/madeiracama.jpg");
            var madeira2 = new THREE.TextureLoader().load("texturas/door.jpg");
            object.getObjectByName("macaneta1").material = new THREE.MeshPhongMaterial({ map: madeira });
            object.getObjectByName("macaneta2").material = new THREE.MeshPhongMaterial({ map: madeira });
            object.getObjectByName("door").material = new THREE.MeshPhongMaterial({ map: madeira2 });
            object.getObjectByName("door2").material = new THREE.MeshPhongMaterial({ map: madeira2 });
            object.getObjectByName("body").material = new THREE.MeshPhongMaterial({ map: madeira2 });
            object.scale.set(1.5, 1.5, 1.5);
            object.position.y = -100;
            object.rotation.y = Math.PI / 2
            scene.add(object);
            object.position.z = 0
            object.position.x = 950
            object.castShadow = true;
            object.receiveShadow = true;
        });
    });

    /*-------Brinquedos------ */

    //Cubos

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('./models/cubos.mtl', function (materials) {
        materials.preload();
        loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/cubos.obj', function (cubos) {
            cubos.getObjectByName("cubo_azul").material = new THREE.MeshPhongMaterial({ color: 0x000099 });
            cubos.getObjectByName("cubo_amarelo").material = new THREE.MeshPhongMaterial({ color: 0xffff99 });
            cubos.getObjectByName("cubo_azulinho").material = new THREE.MeshPhongMaterial({ color: 0xb2b2ff });
            cubos.getObjectByName("cubo_verde").material = new THREE.MeshPhongMaterial({ color: 0x99ff99 });
            cubos.getObjectByName("cubo_rosa").material = new THREE.MeshPhongMaterial({ color: 0xff78bb });
            cubos.getObjectByName("cubo_laranja").material = new THREE.MeshPhongMaterial({ color: 0xffc966 });
            cubos.scale.set(2, 2, 2);
            cubos.position.y = -100;
            cubos.position.z = -200;
            cubos.position.x = 500;
            cubos.castShadow = true;
            cubos.receiveShadow = true;
            scene.add(cubos);
        });
    });

    //Casa

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('./models/casa.mtl', function (materials) {
        materials.preload();
        loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/casa.obj', function (casa) {
            casa.scale.set(2, 2, 2);
            casa.position.y = -100;
            casa.position.z = -200;
            casa.position.x = 800;
            casa.rotation.y = -Math.PI / 4
            casa.castShadow = true;
            casa.receiveShadow = true;
            scene.add(casa);
        });
    });

    //Cubinho

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('./models/cubinho.mtl', function (materials) {
        materials.preload();
        loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/cubinho.obj', function (cubinho) {
            cubinho.scale.set(1, 1, 1);
            cubinho.position.y = -100;
            cubinho.position.z = 300;
            cubinho.position.x = 620;
            cubinho.rotation.y = Math.PI / 4
            cubinho.castShadow = true;
            cubinho.receiveShadow = true;
            scene.add(cubinho);
        });
    });

    //Comboio

    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('./models/comboio.mtl', function (materials) {
        materials.preload();
        loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/comboio.obj', function (comboio) {
            var madeira = new THREE.TextureLoader().load("texturas/comboioRodas.png");
            var madeira2 = new THREE.TextureLoader().load("texturas/rustwood.jpg");
            comboio.getObjectByName("rodas").material = new THREE.MeshPhongMaterial({ map: madeira });
            comboio.getObjectByName("partecima").material = new THREE.MeshPhongMaterial({ map: madeira2 });
            comboio.getObjectByName("body").material = new THREE.MeshPhongMaterial({ map: madeira2 });
            comboio.scale.set(1, 1, 1);
            comboio.position.y = -100;
            comboio.position.z = -200;
            comboio.position.x = 400;
            comboio.rotation.y = Math.PI / 4
            comboio.castShadow = true;
            comboio.receiveShadow = true;
            scene.add(comboio);
        });
    });
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('./models/caixa.mtl', function (materials) {
        materials.preload();
        loader = new THREE.OBJLoader();
        loader.setMaterials(materials);
        loader.load('./models/caixa.obj', function (caixa) {
            var madeira2 = new THREE.TextureLoader().load("texturas/rustwood.jpg");
            caixa.getObjectByName("cover.1").material = new THREE.MeshPhongMaterial({ map: madeira2 });
            caixa.getObjectByName("body.1").material = new THREE.MeshPhongMaterial({ map: madeira2 });
            caixa.scale.set(1.2, 1.2, 1.2);
            caixa.position.y = -100;
            caixa.position.z = 420;
            caixa.position.x = 520;
            caixa.castShadow = true;
            caixa.receiveShadow = true;
            scene.add(caixa);
        });
    });





    /* HANDLER CARRO */

    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;

    function handleKeyDown(event) {
        var char = String.fromCharCode(event.keyCode);



        if (char in direcoes)
            direcoes[char] = true;
    }

    function handleKeyUp(event) {
        var char = String.fromCharCode(event.keyCode);

        if (char in direcoes)
            direcoes[char] = false;

    }




    animate();
}







function animate() {
    framesCarro++;
    framesCarro1++;
    framesBola++;




    if (carro && carro1) {



        //Aceleração, travagem, mudança de direção

        if (direcoes["W"] == true) {
            if (velocidadeCarro <= 2) {
                velocidadeCarro += 0.1;
            }

        }
        if (direcoes["&"] == true) {
            if (velocidadeCarro1 <= 2) {
                velocidadeCarro1 += 0.1;
            }
        }

        if (direcoes["A"] == true) {
            anguloCarro += 0.05;
        }

        if (direcoes["%"] == true) {
            anguloCarro1 += 0.05;
        }


        if (direcoes["S"] == true) {
            velocidadeCarro -= 0.1;
        }

        if (direcoes["("] == true) {
            velocidadeCarro1 -= 0.1;
        }

        if (direcoes["D"] == true) {
            anguloCarro -= 0.05;
        }
        if (direcoes["'"] == true) {
            anguloCarro1 -= 0.05;
        }

        if (velocidadeCarro >= 2) {
            velocidadeCarro = 2;
        }
        if (velocidadeCarro1 >= 2) {
            velocidadeCarro1 = 2;
        }
        if (velocidadeCarro <= -2) {
            velocidadeCarro = -2;
        }
        if (velocidadeCarro1 <= -2) {
            velocidadeCarro1 = -2;
        }


        //Travagem automatica do carro quando as teclas W e S nao estao pressionadas
        if (direcoes["W"] == false && direcoes["S"] == false) {
            if (velocidadeCarro > 0 && velocidadeCarro <= 2) {
                if (framesCarro >= 5) {
                    velocidadeCarro -= 0.1;
                    framesCarro = 0;
                }
            }
            else if (velocidadeCarro >= -2 && velocidadeCarro < 0) {
                if (framesCarro >= 5) {
                    velocidadeCarro += 0.1;
                    framesCarro = 0;
                }

            }

            if (velocidadeCarro <= 0.1 && velocidadeCarro >= -0.1) {
                velocidadeCarro = 0;
            }
        }




        if (direcoes["&"] == false && direcoes["("] == false) {
            if (velocidadeCarro1 > 0 && velocidadeCarro1 <= 2) {
                if (framesCarro1 >= 5) {
                    velocidadeCarro1 -= 0.1;
                    framesCarro1 = 0;
                }
            }
            else if (velocidadeCarro1 >= -2 && velocidadeCarro1 < 0) {
                if (framesCarro1 >= 5) {
                    velocidadeCarro1 += 0.1;
                    framesCarro1 = 0;
                }

            }

            if (velocidadeCarro1 <= 0.1 && velocidadeCarro1 >= -0.1) {
                velocidadeCarro1 = 0;
            }
        }




        //Verficação da colisão do carro com o estadio

        //Partes laterais
        if (carro.position.x <= 520) {
            velocidadeCarro = 0;
            carro.position.x = 520.5;
        }
        if (carro.position.x >= 720) {
            velocidadeCarro = 0;
            carro.position.x = 719.5;
        }

        if (carro1.position.x <= 520) {
            velocidadeCarro1 = 0;
            carro1.position.x = 520.5;
        }
        if (carro1.position.x >= 720) {
            velocidadeCarro1 = 0;
            carro1.position.x = 719.5;
        }

        //Balizas
        if (carro.position.z <= -140) {
            velocidadeCarro = 0;
            carro.position.z = -139.5;
        }
        if (carro.position.z >= 140) {
            velocidadeCarro = 0;
            carro.position.z = 139.5;
        }

        if (carro1.position.z <= -140) {
            velocidadeCarro1 = 0;
            carro1.position.z = -139.5;
        }
        if (carro1.position.z >= 140) {
            velocidadeCarro1 = 0;
            carro1.position.z = 139.5;
        }


        //Verficação da colisão da bola com o estadio

        //Partes laterais
        if (bola.position.x <= 520) {
            velocidadeBolaX = -velocidadeBolaX;
            bola.position.x = 520.5;


        }
        if (bola.position.x >= 720) {
            velocidadeBolaX = -velocidadeBolaX;
            bola.position.x = 719.5;

        }



        //Se a bola bater numa das paredes laterais das balizas
        if (bola.position.x < 585 || bola.position.x > 655) {
            if (bola.position.z <= -139) {
                velocidadeBolaZ = -velocidadeBolaZ;
                bola.position.z = -138.5;
            }
            if (bola.position.z >= 139) {
                velocidadeBolaZ = -velocidadeBolaZ;
                bola.position.z = 138.5;
            }
        }

        //Se a bola entrar numa das balizas reinicia a posição da bola, carros e as velocidades
        else {
            if (bola.position.z >= 155) {

                carroAzulGolos++;

                console.log("Carro Vermelho: ", carroVermelhoGolos, "Carro Azul: ", carroAzulGolos);

                //Bola
                velocidadeBolaX = 0;
                velocidadeBolaZ = 0;
                bola.position.x = 620;
                bola.position.z = 0;

                //Carro
                carro.position.y = -100;
                carro.position.x = 620;
                carro.position.z = -100;
                anguloCarro = 0;
                velocidadeCarro = 0;

                //Carro1
                carro1.position.y = -100;
                carro1.position.x = 620;
                carro1.position.z = 100;
                anguloCarro1 = Math.PI;
                velocidadeCarro1 = 0;


            }
            if (bola.position.z <= -155) {

                carroVermelhoGolos++;

                console.log("Carro Vermelho: ", carroVermelhoGolos, "Carro Azul: ", carroAzulGolos);

                //Bola
                velocidadeBolaX = 0;
                velocidadeBolaZ = 0;
                bola.position.x = 620;
                bola.position.z = 0;

                //Carro
                carro.position.y = -100;
                carro.position.x = 620;
                carro.position.z = -100;
                anguloCarro = 0;
                velocidadeCarro = 0;

                //Carro1
                carro1.position.y = -100;
                carro1.position.x = 620;
                carro1.position.z = 100;
                anguloCarro1 = Math.PI;
                velocidadeCarro1 = 0;


            }
        }



        //Diminuição da velocidade da bola
        if (velocidadeBolaX > 0.01 || velocidadeBolaX < -0.01) {
            velocidadeBolaX -= velocidadeBolaX * 0.01;
            

        }

        if (velocidadeBolaZ > 0.01 || velocidadeBolaZ < -0.01) {
            velocidadeBolaZ -= velocidadeBolaZ * 0.01;
            
        }

        
        //Rotação da bola
        if(velocidadeBolaX != 0) {
            bola.rotation.x += velocidadeBolaX * 0.1;
        }

        if(velocidadeBolaZ != 0) {
            bola.rotation.z += velocidadeBolaZ * 0.1;
        }





        //Colisão do carro com a bola;



        var carroBox = new THREE.Box3().setFromObject(carro);
        var carro1Box = new THREE.Box3().setFromObject(carro1);
        var bolaBox = new THREE.Box3().setFromObject(bola);
        var colisaoCarro = carroBox.intersectsBox(bolaBox);
        var colisaoCarro1 = carro1Box.intersectsBox(bolaBox);



        if (colisaoCarro) {


            if (carro.position.x > bola.position.x - 6 && carro.position.x < bola.position.x + 6) {
                if (carro.position.z > bola.position.z) {
                    velocidadeBolaZ += -2;
                }
                else {
                    velocidadeBolaZ += 2;
                }

            } else {
                if (carro.position.z > bola.position.z - 6 && carro.position.z < bola.position.z + 6) {
                    if (carro.position.x > bola.position.x) {
                        velocidadeBolaX += -2;
                    }
                    else {
                        velocidadeBolaX += 2;
                    }

                } else if (carro.position.x > bola.position.x) {
                    if (carro.position.z < bola.position.z) {
                        velocidadeBolaX += -2;
                        velocidadeBolaZ += 2;
                    }
                    else {
                        velocidadeBolaX += -2;
                        velocidadeBolaZ += -2;
                    }
                }
                else {
                    if (carro.position.z < bola.position.z) {
                        velocidadeBolaX += 2;
                        velocidadeBolaZ += 2;
                    }
                    else {
                        velocidadeBolaX += 2;
                        velocidadeBolaZ += -2;
                    }
                }

            }
        }

        if (colisaoCarro1) {

            if (carro1.position.x > bola.position.x - 6 && carro1.position.x < bola.position.x + 6) {
                if (carro1.position.z > bola.position.z) {
                    velocidadeBolaZ += -2;
                }
                else {
                    velocidadeBolaZ += 2;
                }

            } else {
                if (carro1.position.z > bola.position.z - 6 && carro1.position.z < bola.position.z + 6) {
                    if (carro1.position.x > bola.position.x) {
                        velocidadeBolaX += -2;
                    }
                    else {
                        velocidadeBolaX += 2;
                    }

                } else if (carro1.position.x > bola.position.x) {
                    if (carro1.position.z < bola.position.z) {
                        velocidadeBolaX += -2;
                        velocidadeBolaZ += 2;
                    }
                    else {
                        velocidadeBolaX += -2;
                        velocidadeBolaZ += -2;
                    }
                }
                else {
                    if (carro1.position.z < bola.position.z) {
                        velocidadeBolaX += 2;
                        velocidadeBolaZ += 2;
                    }
                    else {
                        velocidadeBolaX += 2;
                        velocidadeBolaZ += -2;
                    }
                }

            }
        }



        /* Atualização da posição */
        bola.position.x += velocidadeBolaX;
        bola.position.z += velocidadeBolaZ;
        carro.rotation.y = anguloCarro;
        carro1.rotation.y = anguloCarro1;
        carro.position.z += velocidadeCarro * Math.cos(anguloCarro);
        carro.position.x += velocidadeCarro * Math.sin(anguloCarro);
        carro1.position.z += velocidadeCarro1 * Math.cos(anguloCarro1);
        carro1.position.x += velocidadeCarro1 * Math.sin(anguloCarro1);
    }




    // Render the scene
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

