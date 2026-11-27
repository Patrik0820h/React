export default function VarosCsoport({ nev, db, children }) {
    return (
        <div style={{marginBottom:"30px"}}>
            <h2>{nev} ({db})</h2>

            <div className="racs">
                {children}
            </div>
        </div>
    );
}