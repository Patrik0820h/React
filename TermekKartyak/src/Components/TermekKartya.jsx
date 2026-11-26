import { akciosAr, arFormazas } from './arKezeles';

export default function({nev, ar, akcio, ertekeles, keszlet}) {
    let csillagok = Math.round(ertekeles)
    let csillagsor = "★".repeat(csillagok) + "☆".repeat(5 - csillagok)
    
    
    const elfogyott = keszlet == 0;
    const kevesKeszlet = keszlet > 0 && keszlet < 5;

    const keszletElem = elfogyott ? <div style={{color: "red", fontWeight: "bold"}}>Elfogyott</div> : kevesKeszlet ? <div style={{color: "orange", fontWeight: "bold"}}>Utolsó {keszlet} darab!</div> : <div style={{color: "green", fontWeight: "bold"}}>Raktáron {keszlet} db</div>;
    
    if (akcio == 0) {
        return (
        <>
        <div style={{position: "relative",padding: "20px",border: "1px solid #ddd",borderRadius: "12px",backgroundColor: "#fff",boxShadow: "0 2px 8px rgba(0,0,0,0.08)",transition: "opacity 0.3s ease", width:"500px"}}>
            <div>Termek: {nev}</div>
            <div style={{fontWeight:"bold"}}>Ar: {arFormazas(ar)}</div>
            <div>Ertekeles: {csillagsor}</div>
            <div>{keszletElem}</div>

            <button disabled={elfogyott} style={{ padding: "10px 20px", backgroundColor: elfogyott ? "#9ca3af" : "#2563eb",color: "white",border: "none",borderRadius: "8px",cursor: elfogyott ? "not-allowed" : "pointer"}}>
                {elfogyott ? "Elfogyott" : "Kosárba"}
            </button>
        </div>
        </>
    )}
    if (akcio > 0) {
        let akciosar = akciosAr({ ar, akcio });
        return (
        <>
        <div style={{position: "relative",padding: "20px",border: "1px solid #ddd",borderRadius: "12px",backgroundColor: "#fff",boxShadow: "0 2px 8px rgba(0,0,0,0.08)",transition: "opacity 0.3s ease", width:"500px"}}>
            <div>Termek: {nev}</div>
            <div style={{display: "flex",alignItems: "center",gap: "10px", justifyContent:"center"}}>
                <span style={{fontSize: "14px",color: "#9ca3af",textDecoration: "line-through"}}>{ar}</span>

                <span style={{fontSize: "23px",fontWeight: "700",color: "#dc2626"}}>{arFormazas(akciosar)}</span>
            </div>

            <div style={{display: "inline-block",backgroundColor: "#fee2e2",color: "#dc2626",padding: "6px 14px", borderRadius: "20px", fontSize: "13px", fontWeight: "700",marginTop: "10px", position: "absolute",top: "0",right: "0",}}>-{akcio}% AKCIÓ</div>
            <div>Ertekeles: {csillagsor}</div>
            <div>{keszletElem}</div>

            <button disabled={elfogyott} style={{ padding: "10px 20px", backgroundColor: elfogyott ? "#9ca3af" : "#2563eb",color: "white",border: "none",borderRadius: "8px",cursor: elfogyott ? "not-allowed" : "pointer"}}>
                {elfogyott ? "Elfogyott" : "Kosárba"}
            </button>
        </div>
        </>
    )}
}