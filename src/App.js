import './App.css';
import Cards from './components/Cards';
import logo from './logo.svg'


function App() {
  const data = {
      title: 'Card title',
      text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      link: 'Go somewhere',
      linkName: 'Go somewhere',
  };

  return (
      <div className='cards'>
          <Cards {...data}>
              <img
                  src= {logo}
                  className='card-img-top'
                  alt='Cat'
              />
          </Cards>
          <Cards {...data}></Cards>
      </div>
  );
}

export default App;