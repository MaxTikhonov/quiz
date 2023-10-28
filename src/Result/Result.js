import styles from './result.module.scss';

const Result = ({ count, questions }) => {
 let audioComp = '';
 console.log(questions.length)
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
  <div className={styles.result}>
   <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="" />
   <h2>Вы отгадали {count} ответа из {questions.length}</h2>
   <a href="/">
    <button>Попробовать снова</button>
   </a>
   {audioComp}
  </div>
 );
}

export default Result;