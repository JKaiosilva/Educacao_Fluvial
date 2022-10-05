var canvas = document.createElement("canvas");

var engine = new BABYLON.Engine(canvas, true);

// Set the default canvas to use for events
engine.inputElement = document.getElementById("renderCanvas0");




    return scene;






const scene = createScene();

engine.runRenderLoop(function() {
    if (scene.activeCamera) {
        scene.render();
    }
});