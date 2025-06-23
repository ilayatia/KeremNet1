import React from 'react';
import { useAppSelector, useAppDispatch } from './hooks';
import { decrement, increment, incrementByAmount } from './CounterSlice';

export function Counter() {
  const count = useAppSelector((state) => state.counter.value); // Select the counter value from state
  const dispatch = useAppDispatch(); // Get the dispatch function

  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <div>
        <input
          type="number"
          value={0} // Example for incrementByAmount
          onChange={(e) => dispatch(incrementByAmount(Number(e.target.value)))}
        />
      </div>
    </div>
  );
}