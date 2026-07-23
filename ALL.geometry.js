class ALL_GEOMETRY {

    build(respo){
        return respo.map((name, i)=>{

            const score = (name.length * 7 + i * 3) % 100;
            const deg   = (name.length * 13 + i * 5) % 360;

            const color =
                score > 70 ? "green" :
                score > 40 ? "yellow" :
                "red";

            return {
                name,
                score,
                deg,
                color,

                // 3D-Position
                x: Math.sin(deg * Math.PI/180) * 50,
                y: Math.cos(deg * Math.PI/180) * 50,
                z: (score - 50),

                // Vektor
                vx: Math.sin(score),
                vy: Math.cos(score),
                vz: Math.sin(deg)
            };
        });
    }
}

window.ALL_GEOMETRY = new ALL_GEOMETRY();
