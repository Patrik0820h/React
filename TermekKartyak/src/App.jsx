import './App.css'
import TermekKartya from './Components/TermekKartya.jsx'
import kategoria from './Components/Kategoria.jsx'

function App() {
    return (
        <>
            {kategoria.map((kateg) => (
                <div key={kateg.nev} style={{ marginBottom: "30px" }}>

                    <h2>{kateg.nev}</h2>

                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "20px"
                    }}>

                        {kateg.children.map((termek) => (
                            <TermekKartya nev={termek.nev} ar={termek.ar} akcio={termek.akcio} ertekeles={termek.ertekeles} keszlet={termek.keszlet}/>
                        ))}

                    </div>
                </div>
            ))}
        </>
    )
}

export default App
