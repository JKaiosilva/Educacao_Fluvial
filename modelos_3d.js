var canvas = document.createElement("canvas");

var engine = new BABYLON.Engine(canvas, true);

// Set the default canvas to use for events
engine.inputElement = document.getElementById("renderCanvas1");


var createScene = function () {

    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0, 1, 0, 0.9);

    var camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 170, new BABYLON.Vector3(0, 100, 0));
    camera.setTarget(BABYLON.Vector3.Zero());
    //Deixar segundo parâmetro como "false" para desabilitar escroll duplicado. 
    camera.attachControl(canvas, false);

    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.6;


    

    return scene;
}



const scene = createScene();

engine.runRenderLoop(function() {
    if (scene.activeCamera) {
        scene.render();
    }
});