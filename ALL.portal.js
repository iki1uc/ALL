class ALL_PORTAL {

    jump(list){
        return list.map((cell, i)=>{

            const portal =
                i % 4 === 0 ? "A" :
                i % 4 === 1 ? "B" :
                i % 4 === 2 ? "C" :
                "D";

            let warp = i;

            if(portal === "A") warp = i + 20;
            if(portal === "B") warp = i - 15;
            if(portal === "C") warp = (i * 3.14) % 27; // γ∞-Warp
            if(portal === "D") warp = (i % 9) * 3 + (i % 3);

            warp = Math.abs(warp % 27);

            return {
                ...cell,
                portal,
                warp
            };
        });
    }
}

window.ALL_PORTAL = new ALL_PORTAL();
