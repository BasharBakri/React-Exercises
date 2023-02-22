



export default function Card({ before90 }) {



  const card = before90.map((person) => {

    return <>
      <h2>{person.name}</h2>
      <h3>{person.birthday}</h3>
      <p><strong>Fish:</strong> {person.favoriteFoods.fish.join(', ')}</p>
      <p><strong>Meats:</strong> {person.favoriteFoods.meats.join(', ')}</p>
    </>

  })

  return <div>
    {card}
  </div>

}