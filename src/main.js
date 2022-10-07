
const canvas = document.getElementById('renderCanvas');
const engine = new 	BABYLON.Engine(canvas, true);




var createScene = function () {

    var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));

    camera.setTarget(BABYLON.Vector3.Zero());

    //Deixar segundo parâmetro como "false" para desabilitar escroll duplicado 
    camera.attachControl(canvas, false);

    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    light.intensity = 0.7;


    const roofMat = new BABYLON.StandardMaterial("roofMat");
    roofMat.diffuseTexture = new BABYLON.Texture("https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Riodelaplatabasinmap.png/300px-Riodelaplatabasinmap.png", scene);

   
  

    var ground = BABYLON.Mesh.CreateGround("ground1", 300, 300, 300, scene);

    ground.material = roofMat;


    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    advancedTexture.idealWidth = 600;





 
    
    

    //posição Cuiabá

    const box_cuiaba = BABYLON.Mesh.CreateBox();
    box_cuiaba.scaling.x = 0.001;
    box_cuiaba.scaling.y = 0.001;
    box_cuiaba.scaling.z = 0.001;
    box_cuiaba.position.x = -30;
    box_cuiaba.position.y = 0;
    box_cuiaba.position.z = 120;
    
    var rect1 = new BABYLON.GUI.Rectangle();
    rect1.width = 0.10;
    rect1.height = "15px";
    rect1.cornerRadius = 10;
    rect1.color = "white";
    rect1.thickness = 1;
    advancedTexture.addControl(rect1);
    rect1.linkWithMesh(box_cuiaba);   
    rect1.linkOffsetY = -50;

    var label = new BABYLON.GUI.TextBlock();
    label.text = 'Cuiabá'
    

    rect1.addControl(label);

    var target = new BABYLON.GUI.Ellipse();
    target.width = "5px";
    target.height = "5px";
    target.color = "white";
    target.thickness = 1;
    target.background = "white";
    advancedTexture.addControl(target);
    target.linkWithMesh(box_cuiaba);   

    var line = new BABYLON.GUI.Line();
    line.lineWidth = 3;
    line.color = "white";
    line.y2 = 20;
    line.linkOffsetY = -10;
    advancedTexture.addControl(line);
    line.linkWithMesh(box_cuiaba); 
    line.connectedControl = rect1;  



//posição Cáceres

    const box_caceres = BABYLON.Mesh.CreateBox();
    box_caceres.scaling.x = 0.001;
    box_caceres.scaling.y = 0.001;
    box_caceres.scaling.z = 0.001;
    box_caceres.position.x = -30;
    box_caceres.position.y = 0;
    box_caceres.position.z = 100;
    
    var rect1 = new BABYLON.GUI.Rectangle();
    rect1.width = 0.10;
    rect1.height = "15px";
    rect1.cornerRadius = 10;
    rect1.color = "white";
    rect1.thickness = 1;

    advancedTexture.addControl(rect1);
    rect1.linkWithMesh(box_caceres);   
    rect1.linkOffsetY = -50;

    var label = new BABYLON.GUI.TextBlock();
    label.text = 'Cáceres'

    rect1.addControl(label);

    var target = new BABYLON.GUI.Ellipse();
    target.width = "5px";
    target.height = "5px";
    target.color = "white";
    target.thickness = 1;
    target.background = "white";
    advancedTexture.addControl(target);
    target.linkWithMesh(box_caceres);   

    var line = new BABYLON.GUI.Line();
    line.lineWidth = 3;
    line.color = "white";
    line.y2 = 20;
    line.linkOffsetY = -10;
    advancedTexture.addControl(line);
    line.linkWithMesh(box_caceres); 
    line.connectedControl = rect1;  



   //posição Ladário

   const box_ladario = BABYLON.Mesh.CreateBox();
   box_ladario.scaling.x = 0.001;
   box_ladario.scaling.y = 0.001;
   box_ladario.scaling.z = 0.001;
   box_ladario.position.x = -30;
   box_ladario.position.y = 0;
   box_ladario.position.z = 50;
       
   var rect1 = new BABYLON.GUI.Rectangle();
   rect1.width = 0.10;
   rect1.height = "15px";
   rect1.cornerRadius = 10;
   rect1.color = "white";
   rect1.thickness = 1;
   
   advancedTexture.addControl(rect1);
   rect1.linkWithMesh(box_ladario);   
   rect1.linkOffsetY = -50;
   
   var label = new BABYLON.GUI.TextBlock();
   label.text = 'Ladário'
   
   rect1.addControl(label);
   
   var target = new BABYLON.GUI.Ellipse();
   target.width = "5px";
   target.height = "5px";
   target.color = "white";
   target.thickness = 1;
   target.background = "white";
   advancedTexture.addControl(target);
   target.linkWithMesh(box_ladario);   
   
   var line = new BABYLON.GUI.Line();
   line.lineWidth = 3;
   line.color = "white";
   line.y2 = 20;
   line.linkOffsetY = -10;
   advancedTexture.addControl(line);
   line.linkWithMesh(box_ladario); 
   line.connectedControl = rect1;  



//posição Forte Coimbra

    const box_fcoimbra = BABYLON.Mesh.CreateBox();
    box_fcoimbra.scaling.x = 0.001;
    box_fcoimbra.scaling.y = 0.001;
    box_fcoimbra.scaling.z = 0.001;
    box_fcoimbra.position.x = -30;
    box_fcoimbra.position.y = 0;
    box_fcoimbra.position.z = 20;
        
    var rect1 = new BABYLON.GUI.Rectangle();
    rect1.width = 0.15;
    rect1.height = "15px";
    rect1.cornerRadius = 10;
    rect1.color = "white";
    rect1.thickness = 1;

    advancedTexture.addControl(rect1);
    rect1.linkWithMesh(box_fcoimbra);   
    rect1.linkOffsetY = -50;

    var label = new BABYLON.GUI.TextBlock();
    label.text = 'Forte Coimbra'

    rect1.addControl(label);

    var target = new BABYLON.GUI.Ellipse();
    target.width = "5px";
    target.height = "5px";
    target.color = "white";
    target.thickness = 1;
    target.background = "white";
    advancedTexture.addControl(target);
    target.linkWithMesh(box_fcoimbra);   

    var line = new BABYLON.GUI.Line();
    line.lineWidth = 3;
    line.color = "white";
    line.y2 = 20;
    line.linkOffsetY = -10;
    advancedTexture.addControl(line);
    line.linkWithMesh(box_fcoimbra); 
    line.connectedControl = rect1;  


//posição Forte Coimbra

    const box_pmurtinho = BABYLON.Mesh.CreateBox();
    box_pmurtinho.scaling.x = 0.001;
    box_pmurtinho.scaling.y = 0.001;
    box_pmurtinho.scaling.z = 0.001;
    box_pmurtinho.position.x = -30;
    box_pmurtinho.position.y = 0;
    box_pmurtinho.position.z = -20;
        
    var rect1 = new BABYLON.GUI.Rectangle();
    rect1.width = 0.15;
    rect1.height = "15px";
    rect1.cornerRadius = 10;
    rect1.color = "white";
    rect1.thickness = 1;

    advancedTexture.addControl(rect1);
    rect1.linkWithMesh(box_pmurtinho);   
    rect1.linkOffsetY = -50;

    var label = new BABYLON.GUI.TextBlock();
    label.text = 'Porto Murtinho'

    rect1.addControl(label);

    var target = new BABYLON.GUI.Ellipse();
    target.width = "5px";
    target.height = "5px";
    target.color = "white";
    target.thickness = 1;
    target.background = "white";
    advancedTexture.addControl(target);
    target.linkWithMesh(box_pmurtinho);   

    var line = new BABYLON.GUI.Line();
    line.lineWidth = 3;
    line.color = "white";
    line.y2 = 20;
    line.linkOffsetY = -10;
    advancedTexture.addControl(line);
    line.linkWithMesh(box_pmurtinho); 
    line.connectedControl = rect1;  

    
    return scene;

};



















const scene = createScene();

engine.runRenderLoop(function () {
    scene.render();
});

window.addEventListener('resize', function(){
    engine.resize();
})






//function escrever() {
//document.getElementById('info').innerHTML = jsondata;}
