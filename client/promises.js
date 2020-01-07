function doTask(name) {
    const p = new Promise((resolve, reject) => {
      console.log(`${name} has started`);
      const duration =   Math.floor(Math.random() * 5000);
      setTimeout(() => {
        resolve(`${name} has ended after ${duration} milliseconds`);
      }, duration);
    });
    return p;
  }
  
  doTask('A')
    .then(result => {
      console.log(result);
    });
  
  doTask('B')
    .then(result => {
      console.log(result);
   });
  
  doTask('C')
    .then(result => {
      console.log(result);
    });
  
  doTask('D')
    .then(result => {
      console.log(result);
    });
  
  doTask('E')
    .then(result => {
      console.log(result);
    });
  
  doTask('F')
    .then(result => {
      console.log(result);
    });