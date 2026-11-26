
export default function Nevjegy() {
    const nevjegy = {
        nev: "Minta Máté",
        osztaly: "13.C",
        kor: 2026-2008,
        email: "peldaemail@gmail.com",
        bemutatkozas: "Ez a bemutatkozásom."
    }

    const monogram = nevjegy.nev.split(' ').map(r => r[0]).join('')

    return (
        <div style={{padding: 20, border: '1px solid #ddd', borderRadius: 12,maxWidth: 350}}>
            <div style={{width: 80,height: 80,borderRadius: '50%', display: 'grid', placeItems: 'center', backgroundColor: 'blue', color: 'white', fontSize: 28, fontWeight: 'bold'}}>{monogram}</div>

            <h2>{nevjegy.nev}</h2>

            <ul style={{display: 'flex',gap: 8, flexWrap: 'wrap', listStyle: 'none', padding: 0}}>
                <li>{nevjegy.osztaly}</li>
                <li>· {nevjegy.kor} éves</li>
            </ul>

            <p>{nevjegy.bemutatkozas}</p>

            <a href={`mailto:${nevjegy.email}`}>{nevjegy.email}</a>
        </div>
    )
}
