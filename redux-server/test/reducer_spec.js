import {expect} from 'chai'
import {Map, fromJS} from 'immutable';
import reducer from '../src/reducer'


describe('Reducer', () => {

  let state
  beforeEach(() => {
    state = Map({currentNumber:0})
  })


  it('', ()=>{
    expect().to.equal()
  })

  it('handles INCREMENT', ()=>{
    const action = {type: "INCREMENT"}
    const nextState = reducer(state, action)
    expect(nextState).to.equal(fromJS({currentNumber: 1}))
  })

  it('handles DECREMENT', ()=>{
    const action = {type: "DECREMENT"}
    const nextState = reducer(state, action)
    expect(nextState).to.equal(fromJS({currentNumber: -1}))
  })

  it('', ()=>{
    expect().to.equal()
  })
})
