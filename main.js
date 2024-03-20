
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      console.log(value);
    }
  }
  
 
  async function waitCall() {
    try {
      const response = await fetch('https://dummyjson.com/products'); 
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des données:', error.message);
    }
  }
  
 
  async function waitCall() {
    try {
      const response = await fetch('https://dummyjson.com/products'); 
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des données:', error.message);
    }
  }
  
 
  async function concurrentRequests() {
    try {
      const [response1, response2] = await Promise.all([
        fetch('https://dummyjson.com/products'), 
        fetch('https://dummyjson.com/products') ,
      ]);
      const data1 = await response1.json();
      const data2 = await response2.json();
      console.log('Résultat de la première requête:', data1);
      console.log('Résultat de la deuxième requête:', data2);
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des données:', error.message);
    }
  }
  

  async function parallelCalls(urls) {
    try {
      const responses = await Promise.all(urls.map(url => fetch(url)));
      const datas = await Promise.all(responses.map(response => response.json()));
      datas.forEach(data => console.log(data));
    } catch (error) {
      console.error('Une erreur s\'est produite lors de la récupération des données:', error.message);
    }
  }
  

  async function testAsyncFunctions() {
    console.log('Tâche 01 :');
    await iterateWithAsyncAwait([1, 2, 3]);
    
    console.log('\nTâche 02 :');
    await waitCall();
    
    console.log('\nTâche 03 :');
    await waitCall();
    
    console.log('\nTâche 04 :');
    await concurrentRequests();
    
    console.log('\nTâche 05 :');
    await parallelCalls(['https://dummyjson.com/products', 'https://dummyjson.com/products']);
  }
  
  testAsyncFunctions();
  