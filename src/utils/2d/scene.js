export class Scene{

    constructor(name){
        this._engine = null;
        this._context = null;

        this._name = name;
        this._uid = Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
        this._id = null;
        this._layers = [];

        this._code = [];
    }

    name(){
        return this._name;
    }

    addLayer(layer){
        layer._engine = this._engine;
        layer._context = this._context;
        layer._scene = this;
        this._layers.push(layer);
        return layer;
    }

    getLayersList(layer = null){
        return layer ? this._layers.find(object => object.name() == layer) : this._layers;
    }

    update(){

        if(this._code.length > 0){
            this._code.forEach(behaviors => {
                behaviors[Object.keys(behaviors)[0]]();
            })
        }

        if(this._layers.length > 0){
            this._layers.forEach(layer => {
                layer.update();
            })
        }

    }

    draw(){

        if(this._layers.length > 0){
            this._layers.forEach(layer => {
                layer.draw();
            })
        }

    }

}