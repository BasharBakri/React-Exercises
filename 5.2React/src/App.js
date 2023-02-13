import './App.css';
import Card from "./Card";

function App() {
  const data = [
    {
      src: 'https://picsum.photos/300?random=1',
      name: 'Great title for this image',
      desc: 'Important Description',
    },
    {
      src: 'https://picsum.photos/300?random=2',
      name: 'This is a very special image',
      desc: 'Amazing Description to the image'
    },
    {
      src: 'https://picsum.photos/300',
      name: 'This image will blow your mind',
      desc: 'Very Special Description',
    },
  ];
  return (
    <div className='container' >
      <Card name={data[0].name} src={data[0].src} desc={data[0].desc}></Card>
      <Card name={data[1].name} src={data[1].src} desc={data[1].desc}></Card>
      <Card name={data[2].name} src={data[2].src} desc={data[2].desc}></Card>
    </div>
  );
}

export default App;
