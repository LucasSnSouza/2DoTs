export class Scene{

    constructor(name){
        this._engine = null;
        this._context = null;
        this._scene = null;
        
        this._name = name;
        this._uid = Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
        this._id = null;
        this._entities = [];

        this._code = [];
    }

    name(){
        return this._name;
    }

    addBehavior(behavior){
        this._code.push({ [behavior.name]: behavior.bind(this) });
    }

    addEntity(entity){
        entity._engine = this._engine;
        entity._context = this._context;
        entity._scene = this._scene;
        entity._layer = this;
        return this._entities.push(entity);
    }

    getEntitiesList(entity = null){
        return entity ? this._entities.find(object => object.name() == entity) : this._entities;
    }

    update(){
        
        if(this._code.length > 0){
            this._code.forEach(behaviors => {
                behaviors[Object.keys(behaviors)[0]]();
            })
        }

        this._entities.forEach(entity => {
            entity.update();
        })

    }

    draw(){

        this._entities.forEach(entity => {
            entity.draw();
        })

    }

}