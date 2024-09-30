export class Scene{

    constructor(name){
        this._engine = null;
        this._context = null;

        this._name = name;
        this._layers = [];
    }

    name(){
        return this._name;
    }

    addLayer(layer){
        layer._engine = this._engine;
        layer._context = this._context;
        layer._scene = this;
        return this._layers.push(layer);
    }

    getLayersList(layer = null){
        return layer ? this._layers.find(object => object.name() == layer) : this._layers;
    }

    update(){

        this._layers.forEach(layer => {
            layer.update();
        })

    }

    draw(){

        this._layers.forEach(layer => {
            layer.draw();
        })

    }

}