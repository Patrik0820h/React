export default function Keszsegek({Keszsegek}) {
    return (
        <>
    <h1>Készségeim ({Keszsegek.length})</h1>
    <ul style={{display: 'flex', gap: 8, flexWrap: 'wrap', listStyle: 'none'}}>
        {Keszsegek.map((x, index) => {
        return <li key={index} style={{backgroundColor: '#e0e0e0', borderRadius: 20, padding: '8px 16px'}}>{x}</li>
    })}
    </ul>
    </>
    )
}