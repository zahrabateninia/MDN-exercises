// Simulating an asynchronous operation (fetching data from an API)
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulating a delay (e.g., an API call)
      setTimeout(() => {
        const success = Math.random() > 0.5; // Simulating success or failure randomly
  
        if (success) {
          const data = { message: 'Data fetched successfully!' };
          resolve(data); // Resolve the promise with the fetched data
        } else {
          const error = new Error('Failed to fetch data');
          reject(error); // Reject the promise with an error
        }
      }, 2000); // Simulating a delay of 2 seconds
    });
  }
  
  // Using the Promise
  fetchData()
    .then((result) => {
      console.log('Success:', result.message);
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
  
    // The then method is used to handle the fulfillment of the promise (when it's successful), and the catch method is used to handle the rejection (when there's an error).