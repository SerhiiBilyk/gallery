import Worker from 'worker-loader!./worker';

const worker = new Worker();
worker.addEventListener(
  'message',
  ({ data: { text } }) => {
  console.log('text',text)
  }
);
export default worker;
