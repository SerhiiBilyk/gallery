import {benchmark} from './benchmark.js';


onmessage = (msg) => {
  console.log('Message receive',msg)
 benchmark()
}
