// 3×27 Stationen erzeugen
buildStations(){
    const stations = [];
    for(let layer=0; layer<3; layer++){
        const row = [];
        for(let i=0; i<27; i++){
            row.push({
                id: `L${layer}-S${i}`,
                amp: "gelb",
                pct: Math.floor(Math.random()*100),
                deg: Math.floor(Math.random()*33),
                room: ["tmp-room","room","uroom","roomc"][i % 4]
            });
        }
        stations.push(row);
    }
    return stations;
}

// 81er Matrix erzeugen
build81(){
    const m81 = [];
    for(let r=0; r<9; r++){
        const row = [];
        for(let c=0; c<9; c++){
            row.push({
                pos: r*9+c,
                amp: ["rot","gelb","grün"][this.iqq(r,c)],
                pct: Math.floor(Math.random()*100),
                deg: Math.floor(Math.random()*33),
                room: ["tmp-room","room","uroom","roomc"][this.iqq(r,c)]
            });
        }
        m81.push(row);
    }
    return m81;
}

// 379 Module sortieren
sort379(list){
    const sorted = [];
    for(let i=0; i<379; i++){
        sorted.push({
            id: list[i] || `MOD-${i}`,
            pos: i,
            layer: Math.floor(i/27),
            amp: ["rot","gelb","grün"][i % 3],
            pct: Math.floor(Math.random()*100),
            deg: Math.floor(Math.random()*33)
        });
    }
    return sorted;
}

// Master-Ausgabe
computeMaster(list){
    return {
        stations_3x27: this.buildStations(),
        matrix_81: this.build81(),
        modules_379: this.sort379(list)
    };
}
