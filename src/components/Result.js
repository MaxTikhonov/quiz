export default function Result({ count, questions }) {
 let audioComp = '';
 if (count < 8 && count > 3) {
  audioComp = <audio id="musicplayer" autoPlay>
   <source src="/audio/middle.mp3" />
  </audio>
 }
 else if (count < 3) {
  audioComp = <audio id="musicplayer" autoPlay>
   <source src="/audio/fail.mp3" />
  </audio>
 }
 else if (count > 7) {
  audioComp = <audio id="musicplayer" autoPlay>
   <source src="/audio/klubnichki.mp3" />
  </audio>
 }

 return (
  <div className="result">
   <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="" />
   <h2>Вы отгадали {count} ответа из {questions.length}</h2>
   <a href="/">
    <button>Попробовать снова</button>
   </a>
   {audioComp}
  </div>
 );
}