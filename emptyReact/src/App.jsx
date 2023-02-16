import { useState } from 'react'
import './App.css'
import Form from './Form';

function App() {

  const articles = [
    { id: 1, title: 'React Props Tutorial', author: 'John Doe', date: '2022-02-15' },
    { id: 2, title: '10 Tips for Writing Clean Code', author: 'Jane Smith', date: '2022-02-14' },
    { id: 3, title: 'The Benefits of Pair Programming', author: 'Bob Johnson', date: '2022-02-13' },
  ];

  return (<>{

    articles.map((article) => {
      return <div key={article.id} >
        <h2>{article.title}</h2>
        <h3>{article.author}</h3>
        <h4>{article.date}</h4>
      </div>
    })

  }
    <Form></Form>
  </>)


}

export default App
