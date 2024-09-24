export class Keyboard{

    constructor(){
        
        this._keys = {
            a: false,
            b: false,
            c: false,
            d: false,
            e: false,
            f: false,
            g: false,
            h: false,
            i: false,
            j: false,
            k: false,
            l: false,
            m: false,
            n: false,
            o: false,
            p: false,
            q: false,
            r: false,
            s: false,
            t: false,
            u: false,
            v: false,
            w: false,
            x: false,
            y: false,
            z: false
        };
        this._singlePressKey = {};

        document.addEventListener('keydown', (e) => {
            this.handleKeyDown(e);
        })
        document.addEventListener('keyup', (e) => {
            this.handleKeyUp(e);
        })

    }

    handleKeyDown(e){
        if (e.key in this._keys){
            if(!this._keys[e.key]){
                this._singlePressKey[e.key] = true;
            }
            this._keys[e.key] = true;
        }
    }

    handleKeyUp(e){
        if (e.key in this._keys){
            this._keys[e.key] = false;
            this._singlePressKey[e.key] = false;
        }
    }

    isKeyActive(key){
        return this._keys[key] || false;
    }

    isKeyActivated(key){
        if (this._singlePressKey[key]){
            this._singlePressKey[key] = false;
            return true;
        }
        return false;
    }


}