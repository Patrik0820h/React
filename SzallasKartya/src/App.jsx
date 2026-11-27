import './App.css'
import SzallasKartya from "./Components/SzallasKartya.jsx"
import VarosCsoport from './Components/Varos.jsx'

const SZALLASOK = [
  { id: 1, nev: "Hotel Balaton Panoráma", varos: "Siófok", ar: 32900, kedvezmeny: 15, szabad: 4, csillag: 4, ertekeles: 8.7 },
  { id: 2, nev: "Napfény Apartman", varos: "Siófok", ar: 18900, kedvezmeny: 0, szabad: 0, csillag: 3, ertekeles: 7.9 },
  { id: 3, nev: "Kék Hullám Panzió", varos: "Siófok", ar: 14900, kedvezmeny: 30, szabad: 2, csillag: 2, ertekeles: 8.2 },
  { id: 4, nev: "Mecsek Hotel", varos: "Pécs", ar: 27500, kedvezmeny: 0, szabad: 6, csillag: 4, ertekeles: 9.1 },
  { id: 5, nev: "Zsolnay Vendégház", varos: "Pécs", ar: 16900, kedvezmeny: 10, szabad: 1, csillag: 3, ertekeles: 9.4 },
  { id: 6, nev: "Dobó Szálló", varos: "Eger", ar: 21900, kedvezmeny: 0, szabad: 0, csillag: 3, ertekeles: 8.0 },
  { id: 7, nev: "Bikavér Wellness Hotel", varos: "Eger", ar: 45900, kedvezmeny: 25, szabad: 9, csillag: 5, ertekeles: 9.0 },
  { id: 8, nev: "Rába Part Hotel", varos: "Győr", ar: 24900, kedvezmeny: 0, szabad: 4, csillag: 4, ertekeles: 8.5 },
  { id: 9, nev: "Ifjúsági Szálló", varos: "Győr", ar: 10900, kedvezmeny: 0, szabad: 12, csillag: 1, ertekeles: 6.8 }
]

const ertek = SZALLASOK.reduce((sum, szallas) => sum + szallas.ertekeles, 0)
const atlagertek = (ertek / SZALLASOK.length).toFixed(1)

const legolcsobb = SZALLASOK.reduce((min, szallas) => szallas.ar < min.ar ? szallas : min)

function App() {

  const varosok = [...new Set(SZALLASOK.map(sz => sz.varos))].sort((a, b) => a.localeCompare(b, 'hu'))

  return (
    <>
    <div style={{fontWeight:"bold", color:"black", fontSize:"25px", marginBottom:"5px", marginTop:"10px"}}>Szálláskártyák</div>
    <div style={{position: "relative",padding: "20px",border: "1px solid #ddd",borderRadius: "12px",backgroundColor: "#fff",boxShadow: "0 2px 8px rgba(0,0,0,0.08)",transition: "opacity 0.3s ease", textAlign:"left", marginBottom:"10px"}}>
      <span style={{display:"block", fontWeight:"bold"}}>9 szállás · 4 last minute · 2 telt haz</span>
      <span style={{display:"block"}}>Atlagos ertekeles: {atlagertek}</span>
      <span style={{display:"block"}}>Legolcsobb: {legolcsobb.nev} - {legolcsobb.ar} / éj</span>
    </div>

    { varosok.map(varos => {
      const varosiSzallasok = SZALLASOK.filter(szallas => szallas.varos === varos).sort((a, b) => (a.szabad === 0) - (b.szabad === 0))

      return (
          <VarosCsoport
            key={varos}
            nev={varos}
            db={varosiSzallasok.length}
          >
            {varosiSzallasok.map(szallas => (
              <SzallasKartya
                key={szallas.id}
                nev={szallas.nev}
                ar={szallas.ar}
                kedvezmeny={szallas.kedvezmeny}
                szabad={szallas.szabad}
                csillag={szallas.csillag}
                ertekeles={szallas.ertekeles}
              />
            ))}
          </VarosCsoport>
        )
    })}
    </>
  )

  
}

export default App
