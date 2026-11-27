import {kedvezmenyesAr} from './arKezeles.jsx'

export default function({nev, ar, kedvezmeny, szabad, csillag, ertekeles}) {

    let csilagsor = "★".repeat(csillag) + "☆".repeat(5- csillag)
    let ertekelessor

    if (ertekeles >= 9) {
        ertekelessor = 
        <>
        <div style={{ display: "inline-flex", whiteSpace: "nowrap", background: "#167a45", color: "#fff", fontSize: "11px", fontWeight: "600", padding: "3px 7px", borderRadius: "5px", lineHeight: "1.2" }}>{ertekeles} Kiváló</div>
        </>
    } else if (ertekeles >= 8) {
        ertekelessor =
        <>
        <div style={{ display: "inline-flex", whiteSpace: "nowrap", background: "#0851a5", color: "#fff", fontSize: "11px", fontWeight: "600", padding: "3px 7px", borderRadius: "5px", lineHeight: "1.2" }}>{ertekeles} Nagyon jó</div>
        </>
    } else {
        ertekelessor = 
        <>
        <div style={{ display: "inline-flex", whiteSpace: "nowrap", background: "gray", color: "#fff", fontSize: "11px", fontWeight: "600", padding: "3px 7px", borderRadius: "5px", lineHeight: "1.2" }}>{ertekeles} jó</div>
        </>
    }

    let szabadszoba
    let halvany
    if (szabad == 0) {
        szabadszoba = 
        <>
        <div style={{display:"flex", alignItems:"center", gap:"40px", flexDirection:"column"}}>
            <span style={{color:"red", fontWeight:"bold"}}>Telt ház!</span>
            <button disabled>Foglalás</button>
        </div>
        </>
        halvany = 0.5
    } else if (szabad <= 2) {
        szabadszoba =
        <>
        <div style={{display:"flex", alignItems:"center", gap:"40px", flexDirection:"column"}}>
            <span style={{color:"orange", fontWeight:"bold"}}>Már csak {szabad} szoba!</span>
            <button>Foglalás</button>
        </div>
        </>
    } else {
        szabadszoba =
        <>
        <div style={{display:"flex", alignItems:"center", gap:"40px", flexDirection:"column"}}>
            <span style={{color:"green", fontWeight:"bold"}}>Van szabad szoba!</span>
            <button>Foglalás</button>
        </div>
        </>
    }

    if (kedvezmeny > 0) {
        let akciosar = kedvezmenyesAr({ar: ar, kedvezmeny: kedvezmeny})
        return (
            <>
            <div style={{position: "relative",padding: "55px 20px 20px",border: "1px solid #ddd",borderRadius: "12px",backgroundColor: "#fff",boxShadow: "0 2px 8px rgba(0,0,0,0.08)",transition: "opacity 0.3s ease", width:"225px", opacity: halvany ?? 1}}>
                <p>{nev}</p>
                <p style={{color:"gold"}}>{csilagsor}</p>

                <div style={{color:"white", position:"absolute", backgroundColor:"green", padding:"6px 14px", borderRadius:"20px", fontSize:"13px", top:"5px", left:"5px"}}>Last Minute -{kedvezmeny}%</div>
                <div>{ertekelessor}</div>

                <div style={{display:"flex", alignItems:"center", gap:"10px", justifyContent:"center"}}>
                    <span style={{textDecoration:"line-through"}}>{ar}</span>
                    <span style={{fontWeight:"bold", color:"green"}}>{akciosar}</span>
                    <span>/ éj</span>
                </div>

                <div>{szabadszoba}</div>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div style={{position: "relative",padding: "20px",border: "1px solid #ddd",borderRadius: "12px",backgroundColor: "#fff",boxShadow: "0 2px 8px rgba(0,0,0,0.08)",transition: "opacity 0.3s ease", width:"225px", opacity: halvany ?? 1}}>
                <p>{nev}</p>
                <p style={{color:"gold"}}>{csilagsor}</p>

                <div>{ertekelessor}</div>
                <div>
                    <span style={{fontWeight:"bold"}}>
                        {ar} Ft 
                    </span>
                    <span style={{marginLeft:"10px"}}>
                        / éj
                    </span>
                </div> 

                <div>{szabadszoba}</div>
            </div>
            </>
        )
    }
}