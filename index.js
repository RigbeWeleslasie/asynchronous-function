// 1.You are building a reminder feature for a task management app. Write an async function that sends a reminder (simulated with console.log) after a delay using setTimeout. The function should return a Promise that resolves after 3 seconds with the message "Reminder sent to user!",  and you should await it to log the message.
async function sendReminder(){
return new Promise((resolve) => {
setTimeout(()=>
{
    console.log("Riminder: your task is due!");
    resolve("Reminder sent to user!");
},3000);
});
}
async function main() {
    try{
        const  message=await sendReminder();
        console.log(message);
    }catch(error){
        console.error("Error sending reminder",error);
    }  
}
main();

//2. In a startup's DevOps dashboard, implement a setInterval function that checks server status every 5 seconds by calling an async function checkServer()  that returns a Promise resolving to "Server is running" or rejecting with "Server down". Use .then() and .catch() to handle the result and stop the interval after 30 seconds using clearInterval.
async function checkServer(){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            const isRunning=Math.random()>0.2;
            if(isRunning){
                resolve("Server is running")
            }
            else{
                reject("Server down")
            }
              
            },1000)
           });
        }
     
function serverMonitoring(){
    const intervalValid=setInterval(()=>{
        checkServer().then((status)=>{
            console.log(status);
        })
        .catch((error)=>{
            console.log(error);
        })
    },5000);
    setTimeout(()=>{
        clearInterval(intervalValid);
        console.log("server monitoring stopped after 30 seconds")
    },30000);
}
serverMonitoring();
// 3 You're building a system to show multiple notifications to a user. Create an async function showNotifications that takes an array of messages and shows each message 1 second apart using await and setTimeout wrapped in a Promise. After all messages are shown, log "All notifications sent".
async function showNotifications(messages) {
    for (const message of messages) {
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log(message);
          resolve();
        }, 1000);
      });
    }
    console.log("All notifications sent");
  }
  showNotifications(["Notification 1", "Notification 2", "Notification 3"]);
// 4.In your startup’s API integration, write an async function fetchDataWithRetry() that tries to fetch data from a mock API (use Promise.reject() for failure),retries up to 3 times with a 2-second delay between attempts using setTimeout,and resolves with "Data fetched" or logs "Failed after 3 attempts" if all fail.

async function fetchDataWithRetry() {
    const maxRetries = 3;
    let attempt = 1;
    const mockApiCall = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error("API call failed"));
        }, 1000);
      });
    }
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
    while (attempt <= maxRetries) {
      try {
        console.log(`Attempt ${attempt} to fetch data...`);
        const result = await mockApiCall();
        return result; 
      } catch (error) {
        console.error(`Attempt ${attempt} failed: ${error.message}`);
        if (attempt === maxRetries) {
          console.log("Failed after 3 attempts");
          throw new Error("Failed after 3 attempts");
        }
        await delay(2000); 
        attempt++;
      }
    }
  }
  
  async function main() {
    try {
      const result = await fetchDataWithRetry();
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  main();
  
// 5You’re building a countdown timer for a product launch. Write a function that takes a number n and logs the countdown every second using setInterval. Once it reaches 0, stop the interval and call an async function launchProduct() that returns a resolved Promise with "Product Launched!" and logs it.
  
  
  function startCountdown(n) {
    const intervalId = setInterval(() => {
      console.log(n);
      n--;
  
      if (n < 0) {
        clearInterval(intervalId);
        launchProduct().then(message => console.log(message));
      }
    }, 1000);
  }
  
  async function launchProduct() {
    return Promise.resolve("Product launched!");
  }
  
  startCountdown(5);
  
  

