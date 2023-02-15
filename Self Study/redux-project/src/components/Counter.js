import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter-slice";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const increaseHandler = () => {
    dispatch(counterActions.increment());
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increseByNumHandler = () => {
    dispatch(counterActions.increase(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increaseHandler}>increase</button>
        <button onClick={increseByNumHandler}>increase +5</button>
        <button onClick={decreaseHandler}>decrease</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
