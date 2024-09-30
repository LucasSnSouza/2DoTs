export class Entity{
    
    constructor(
        name = null,
        transform = { position: [0,0], scale: [0,0] },
    ){
        this._engine = null;
        this._context = null;
        this._scene = null;
        this._layer = null;
        
        this._sprite = null;
        this._name = name;
        this._transform = transform;
        this._code = []
        this._last_draw_time_enlapse = 0;
    }

    name(){
        return this._name;
    }

    addBehavior(behavior){
        this._code.push({ [behavior.name]: behavior.bind(this) });
    }

    getTransform(){
        return this._transform;
    }

    update(){

        this._code.forEach(behaviors => {
            behaviors[Object.keys(behaviors)[0]]();
        })

    }

    draw(){

        if(this._sprite){

        }else{
            this._context.fillRect(
                this.getTransform().position[0],
                this.getTransform().position[1],
                this.getTransform().scale[0],
                this.getTransform().scale[1]
            );
        }

    }

}