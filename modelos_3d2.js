const canvas = document.getElementById('renderCanvas2');
const engine = new 	BABYLON.Engine(canvas, true);


var createScene = function () {

    var scene2 = new BABYLON.Scene(engine);
    scene2.clearColor = new BABYLON.Color4(0, 0, 0, 0.0);

    var camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 170, new BABYLON.Vector3(0, 100, 0));
    camera.setTarget(BABYLON.Vector3.Zero());
    //Deixar segundo parâmetro como "false" para desabilitar escroll duplicado. 
    camera.attachControl(canvas, false);

    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene2);
    light.intensity = 0.6;

   const modelo3d = BABYLON.SceneLoader.ImportMesh("", "modelo3d/", "loy_boat.obj", scene2, function (newMeshes) {
    camera.target = newMeshes[0];
    });
    
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    advancedTexture.idealWidth = 600;
    advancedTexture.useInvalidateRectOptimization = false;

    const textura_pontos = new BABYLON.StandardMaterial("textura_pontos");
    textura_pontos.diffuseColor = new BABYLON.Color3(0.1, 0.5, 1);
    


    return scene2;

};
const scene2 = createScene();

engine.runRenderLoop(function () {
    scene2.render();
});

window.addEventListener('resize', function(){
    engine.resize();
})