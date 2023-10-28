export default function Game({ step, data, onClickVariant, questions }) {
 const percentage = Math.floor(step / questions.length * 100);
 return (
  <>
   <div className="progress">
    <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
   </div>
   <h1>{data.title}</h1>
   <ul>
    {data.variants.map((item, index) => {
     return <li onClick={() => onClickVariant(index)} key={item}>{item}</li>
    })}
   </ul>
  </>
 );
}