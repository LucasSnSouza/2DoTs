export class Entity{
    
    constructor(
        name = null,
        transform = { 
            position: ["0","0"], 
            size: ["0","0"]
        },
        meta = {
            color: "FFFFFFFF"
        }
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
        this._meta = meta;

        this._code = [];
    }

    name(){
        return this._name;
    }

    color(){
        return this._meta.color;
    }

    position(){
        return this._transform.position;
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
            this._context.fillStyle = `#${this._meta.color}`;
            this._context.fillRect(
                Number(this.getTransform().position[0]),
                Number(this.getTransform().position[1]),
                Number(this.getTransform().size[0]),
                Number(this.getTransform().size[1])
            );
        }

    }

}