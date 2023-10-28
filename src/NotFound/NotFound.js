import styles from './notfound.module.scss';

const NotFound = () => {
 return (
  <div className={styles.container}>
   Page not not found. Error: 404
   <hr />
   <a href="/"><button>Вернуться на главную</button></a>
  </div>
 )
}

export default NotFound;