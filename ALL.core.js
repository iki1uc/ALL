class ALL {

    constructor(){
        this.matrix = [];
        this.respo_sorted = {};
    }

    // QI-Schaltung
    qi(r, c){
        return r * 9 + c;
    }

    // IQQ-Schaltung
    iqq(r, c){
        return this.qi(r, c) % 3;
    }

    // 9x9 Master-Matrix erzeugen
    buildMatrix(){
        this.matrix = [];
        for(let r=0; r<9; r++){
            let row = [];
            for(let c=0; c<9; c++){
                row.push(this.iqq(r, c));
            }
            this.matrix.push(row);
        }
        return this.matrix;
    }

    // ALLE RESPO-Module vorsortieren
    sortRESPO(list){
        let sorted = { 0: [], 1: [], 2: [] };

        list.forEach((item, index) => {
            let r = Math.floor(index / 9);
            let c = index % 9;
            let key = this.iqq(r, c);
            sorted[key].push(item);
        });

        this.respo_sorted = sorted;
        return sorted;
    }

    // Ausgabe
    compute(respo_list){
        return {
            matrix: this.buildMatrix(),
            respo_sorted: this.sortRESPO(respo_list)
        };
    }
}

window.ALL = new ALL();
