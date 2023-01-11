const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  

  const hours = String(date.getHours()).padStart(2,"0");
  const minutes = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");



  clock.innerText = `${hours}:${minutes}:${seconds}`
  //갱신한 시간은 html에 넣는다
}
getClock();
//웹사이트가 로드되자마자 시계가 뜨게한다

setInterval(getClock, 1000);
//1초마다 최신시간을 갱신한다
