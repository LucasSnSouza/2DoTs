export class Entity{
    
    constructor(
        name = null,
        transform = { 
            position: [32,32], 
            size: [20,20]
        },
    ){
        this._engine = null;
        this._context = null;
        this._scene = null;
        this._layer = null;
        
        this._name = name;
        this._uid = Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
        this._id = null;

        this._sprite = null;
        this._transform = transform;

        this._code = [];
    }

    name(){
        return this._name;
    }

    size(){
        return this._transform.size;
    }

    addBehavior(behavior){
        this._code.push({ [behavior.name]: behavior.bind(this) });
    }

    getTransform(){
        return this._transform;
    }

    update(){

        if(this._code.length > 0){
            this._code.forEach(behaviors => {
                behaviors[Object.keys(behaviors)[0]]();
            })
        }

    }

    draw(){

        if(this._sprite){

        }else{
            this._context.fillRect(
                this.getTransform().position[0],
                this.getTransform().position[1],
                Number(this.getTransform().size[0]),
                Number(this.getTransform().size[1])
            );
        }

    }

}