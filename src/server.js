const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok',
        service: 'AI-ASIC-RAG',
    });    
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
