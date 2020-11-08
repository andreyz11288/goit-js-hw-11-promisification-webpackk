const delay = ms => {
    const DELAY = ms;

    
  return new Promise((resolve) => {
   

    setTimeout(() => {      
        resolve(`✅ ${DELAY}`);      
    }, DELAY);
  });
 
};

const logger = time => console.log(`Resolved after ${time}ms`);

delay(2000).then(logger); 
delay(1000).then(logger); 
delay(1500).then(logger); 