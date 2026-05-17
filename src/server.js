const express = require('express');
const askRouter = require('./routes/ask');
//const documentsRouter = require('./routes/documents');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok',
        service: 'AI-ASIC-RAG',
    });    
});

app.use('/api/ask', askRouter);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
