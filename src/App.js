import logo from './logo.svg';
import './App.css';
import ProductGallery from './components/ProductGallery';

function App() {
  const title = 'beetle';
  const cloudName = 'cloudinary-training';
  const mediaAssets = [
    {
      tag: 'training-beetle-car',
      transformation: {
        crop: 'fill',
        gravity: 'auto',
        height: 600,
        width: 800,
      },
    },
  ];
  const displayProps = {};
  const videoProps = {};
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Product Gallery Widget in React</h1>
      </header>
      <main>
        {' '}
        <ProductGallery
          cloudName={cloudName}
          media={mediaAssets}
          video={videoProps}
          display={displayProps}
          title={title}
        />
      </main>
    </div>
  );
}

export default App;
