import './App.css'
import Header from './Components/Header.jsx'

function App() {
  const osztaly = {
    "iskola":"Logiker",
    "osztaly":"8.A",
    "tanulok":["Peti", "Gyuri", "Adam", "Csaba"]
  }

  const recipes =     
    {      
      id: 1,      
      name: "Gulyásleves",      
      author: "Nagyapa",      
      prepTime: 90,      
      difficulty: "közepes",      
      isVegetarian: false,      
      ingredients: ["marhahús", "burgonya", "sárgarépa", "hagyma", "paprika"]    
    }

  return (
    <>
    <Header iskola={osztaly.iskola} />
    <main>
      <h2>{osztaly.osztaly} osztaly</h2>

      <ul>
        {
          osztaly.tanulok.map((tanulo, index) => {
            return <li key={index}>{tanulo}</li>
          })
        }
      </ul>


        <h2>{recipes.name} </h2>
        <p>elkeszitesi ido: {recipes.prepTime} perc</p>
        <ul> hozzavalok: {recipes.ingredients.map((x, index) => {
          return <li key={index}>{x} - {index}</li>
        })}</ul>
    </main>
    </>
  )
}

export default App
