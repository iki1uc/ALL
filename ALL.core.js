class ALL {

    // 27er-Bildung
    build27(list){
        return list.map((name, i)=>{
            const score = (name.length * 7) % 100;
            const deg   = (name.length * 13) % 360;

            return {
                id: i,
                name,
                score,
                deg,
                color: score > 70 ? "green" : score > 40 ? "yellow" : "red"
            };
        });
    }

    // 3×27-Bildung
    build3x27(list){
        const base = this.build27(list);
        return [
            base,
            base.map(c => ({...c, score: (c.score * 2) % 100, color: c.score > 50 ? "green" : "yellow"})),
            base.map(c => ({...c, score: (c.score * 3) % 100, color: c.score > 60 ? "green" : "red"}))
        ];
    }

    // 81er-Cube-Mind
    build81(list){
        const out = [];
        for(let r=0; r<9; r++){
            const row = [];
            for(let c=0; c<9; c++){
                const idx = (r*9+c) % list.length;
                const base = list[idx];

                row.push({
                    r, c,
                    name: base.name,
                    score: (base.score + r + c) % 100,
                    deg: (base.deg + r*10 + c*5) % 360,
                    color: base.color
                });
            }
            out.push(row);
        }
        return out;
    }

    // Master-Schaltung
    computeMaster(list){
        const m27   = this.build27(list);
        const m3x27 = this.build3x27(list);
        const m81   = this.build81(m27);

        return { m27, m3x27, m81 };
    }
}

window.ALL = new ALL();
