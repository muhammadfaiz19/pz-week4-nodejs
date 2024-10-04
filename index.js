// console.log("Node.js version:", process.version);
// console.log("Process ID:", process.pid);
// console.log("Current directory:", process.cwd());
// console.log("Environment variables:", process.env);


// synchronous
const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);

// filter
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = data.filter(number => number % 2 === 0);
console.log(evenNumbers);

// map
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers);

const fetchDataAsync = async () => {
    try {   
        const response = fetch("https://jsonplaceholder.typicode.com/todos/1");  // 1 seconds
        const data = response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

fetchDataAsync();

// promise example https://jsonplaceholder.typicode.com/todos/1
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 100);
    });
};

fetchData()
    .then(data => console.log(data))
    .catch(error => console.error(error));


// add async await to the fetchData function
const fetchDataAsyncAwait = async () => {
    try {   
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");  // 1 seconds
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};

fetchDataAsyncAwait();

// promise example
const fetchDataPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 100);
    });
};

fetchDataPromise()
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Tanpa await
async function fetchDataWithoutAwait() {
    const response = await fetch('https://api.example.com/data');
    const data = response.json(); // Tidak menggunakan await
    console.log(data); // Akan mencetak: Promise { <pending> }
    
    // Kita masih bisa menggunakan hasilnya dengan .then()
    data.then(result => {
      console.log('Data yang sudah di-parse:', result);
    });
  }
  
  // Dengan await
  async function fetchDataWithAwait() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json(); // Menggunakan await
    console.log(data); // Akan mencetak data JSON yang sudah di-parse
  }
  
  // Cara lain tanpa async/await
  function fetchDataWithPromises() {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        console.log('Data yang sudah di-parse:', data);
      })
      .catch(error => {
        console.error('Terjadi kesalahan:', error);
      });
  }





