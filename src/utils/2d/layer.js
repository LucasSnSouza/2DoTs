export class Scene{

    constructor(name){
        this._engine = null;
        this._context = null;
        this._scene = null;
        
        this._name = name;
        this._entities = [];
    }

    name(){
        return this._name;
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