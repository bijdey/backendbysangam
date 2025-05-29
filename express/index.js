
//first file in the express

const express =require('express');
const app= express();
const port=3000;
app.get('/', (req, res) => res.send('Hello World from express server, backend'));
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));






