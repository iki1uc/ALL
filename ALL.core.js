class ALL {

    constructor(){
        this.matrix = [];
    }

    build(){
        this.matrix = [];
        for(let r=0; r<9; r++){
            let row = [];
            for(let c=0; c<9; c++){
                let qi  = r*9 + c;
                let iqq = qi % 3;
                row.push(iqq);
            }
            this.matrix.push(row);
        }
        return this.matrix;
    }
}

window.ALL = new ALL();
