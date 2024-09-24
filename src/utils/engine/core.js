export class Core{

    constructor(drawboard = null){

        this.drawboard = drawboard;
        this._context = drawboard.getContext("2d");
        this._scenes = [];
        this._behaviors = [];
        this._profile = false;
        this._last_enlapse_time = 0;
        this._delta_time = 0;
        this._frame_rate = 0;
        this._frames = 0;

    }

    run(debug = false){

        this._profile = debug;

        const runtime = (enlapse_time) => {
            if(this._last_enlapse_time > 0){
                this._delta_time = enlapse_time - this._last_enlapse_time;
                this._frame_rate = Math.round(1000 / this._delta_time);
            }
            this._last_enlapse_time = enlapse_time;

            this.update();
            this.draw();

            this._frames++;

            requestAnimationFrame(runtime);
        }

        runtime();

    }

    getDeltaTime(){
        return this._delta_time;
    }

    getScene(scene){
        return this._scenes.find(entity => entity.name() == scene);
    }

    getSceneList(scene = null){
        return scene !== null ? this._scenes.find(entity => entity.name() == scene) : this._scenes;
    }

    getObjects(){
        let objects = [];
        this._scenes.forEach(scene => {
            objects.push(...scene.getEntitiesList())
        });
        return objects;
    }

    addScene(scene){
        scene._engine = this;
        scene._context = this._context;
        this._scenes.push(scene);
    }

    addBehavior(behavior){
        this._behaviors.push(behavior);
    }

    update(){

        this._scenes.forEach(scene => {
            scene.update();
        });
        
    }

    draw(){

        this._context.clearRect(0,0, this.drawboard.width,this.drawboard.height);

        this._scenes.forEach(scene => {
            scene.draw();
        });

        if(this._profile){
            this._context.fillStyle = "white";
            this._context.fillRect(5, 5, 240, 50);
            this._context.fillStyle = "black";
            this._context.font = "10pt arial";
            this._context.fillText(`Frame Rate: ${this._frame_rate}, DeltaTime: ${this._delta_time.toFixed(1)} ms`, 10, 20);
            this._context.fillText(`Frames: ${this._frames}, Scenes: ${this._scenes.length}, Entities: ${this.getObjects().length}`, 10, 40);
        }

    }

}