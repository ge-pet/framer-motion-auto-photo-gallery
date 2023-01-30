import { motion } from 'framer-motion'
import classes from './App.module.css';

function App() {
  
  setInterval(changeText,8000)
  function changeText() {
    document.getElementById("my-div").innerHTML += "Your Text"
  }
  
  const myDivVariant = {
    arxika : {
      y:0,
      opacity:1
    },
    telika : {
      y:[0,-300,300,0],
      opacity:[1,0,0,1],
      transition : {
        delay : 3,
        duration: 8.5,
        repeat:Infinity
      },
    },
  }

  return (
    <div className={classes.all}>
      <motion.div className={classes.myDiv} id="my-div"
        variants={myDivVariant}
        initial="arxika"
        animate="telika"
      >
          Your<br/>
          Text
      </motion.div>
    </div>
  );
}

export default App;
