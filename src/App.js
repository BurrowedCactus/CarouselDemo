import logo from './logo.svg';
import Carousel from '@baiyongyuan/carousel';
import './App.css';

const images = [
  "https://img2.baidu.com/it/u=2047518095,3277708244&fm=26&fmt=auto",
  "https://img0.baidu.com/it/u=1527732427,3834124137&fm=26&fmt=auto",
  "https://img2.baidu.com/it/u=2716095922,1387319359&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
  "https://img2.baidu.com/it/u=1380170777,1231046834&fm=26&fmt=auto",
  "https://img0.baidu.com/it/u=484701785,2168138336&fm=26&fmt=auto"
];
const displayNumber = 4;
const stepInterval = 2;
const onClickNext = (env) => {
  console.log("触发点击事件clickNext", env);
};
const onClickPrev = (env) => {
  console.log("触发点击事件clickPrev", env);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Carousel
          images={images}
          displayNumber={displayNumber}
          stepInterval={stepInterval}
          onClickNext={onClickNext}
          onClickPrev={onClickPrev}
        />
      </header>
    </div>
  );
}

export default App;
