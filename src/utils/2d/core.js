export class Core{

    constructor(drawboard = null, callback = null){

        this.drawboard = drawboard;
        this._context = drawboard.getContext("2d");
        this.callback = callback;

        this._uid = Date.now().toString(36) + Math.random().toString(36).substr(2, 9);

        this._scenes = [];
        this._behaviors = [];
        this._last_enlapse_time = 0;
        this._delta_time = 0;
        this._frame_rate = 0;
        this._frames = 0;

        window.addEventListener('resize', () => {
            let parent = this.drawboard.parentElement;
            this.drawboard.width = parent.offsetWidth;
            this.drawboard.height = parent.offsetHeight;
        })

    }
    
    run(debug = false, frameRate = 400){

        this._profile = debug;
    
        const frameDuration = 1000 / frameRate;
    
        const runtime = (enlapse_time) => {
            const startTime = performance.now();
    
            if(this._last_enlapse_time > 0){
                this._delta_time = enlapse_time - this._last_enlapse_time;
                this._frame_rate = Math.round(1000 / this._delta_time);
            }
            this._last_enlapse_time = enlapse_time;
    
            this.update();
            this.draw();
    
            this._frames++;
    
            const processTime = performance.now() - startTime; 
            const remainingTime = frameDuration - processTime; 

            if(this.callback !== null){
                this.callback(
                    {
                        frames: this._frames,
                        frame_rate: this._frame_rate,
                        delta_time: this._delta_time,
                        scenes_amount: this._scenes.length,
                        behaviors_amount: this._behaviors.length,
                    }
                );
            }
    
            setTimeout(() => runtime(performance.now()), Math.max(0, remainingTime));
        }
    
        runtime(performance.now());
    }

    getFrames(){
        return this._frames;
    }

    getFrameRate(){
        return this._frame_rate;
    }

    getDeltaTime(){
        return this._delta_time;
    }

    getScene(scene){
        return this._scenes.find(entity => entity.name() == scene) || null;
    }

    getSceneList(scene = null){
        return scene !== null ? this._scenes.find(entity => entity.name() == scene) || null : this._scenes;
    }

    getBehavior(behavior){
        return this._behaviors.find(entity => entity.name() == behavior) || null;
    }

    getBehaviorsList(behavior = null){
        return behavior !== null ? this._behaviors.find(entity => entity.name() == behavior) || null : this._behaviors;
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
        return scene;
    }

    addBehavior(behavior){
        this._behaviors.push(behavior);
        return behavior;
    }

    update(){

        if(this._scenes.length > 0){
            this._scenes.forEach(scene => {
                scene.update();
            });
        }
        
    }

    draw(){

        this._context.clearRect(0,0, this.drawboard.width,this.drawboard.height);

        if(this._scenes.length > 0){
            this._scenes.forEach(scene => {
                scene.draw();
            });
        }

        this._context.fillStyle = "white";
        this._context.fillText(`Frames: ${this._frame_rate}, scenes: ${this._scenes.length}`, 10, 60);
        this._context.fillText(`Layers: ${this._scenes.length > 0 ? this._scenes[0].getLayersList().length : 0}, time: ${this._delta_time}`, 10, 80);

    }

}