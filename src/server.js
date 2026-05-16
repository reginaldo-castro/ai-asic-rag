const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'ok',
        service: 'AI-ASIC-RAG',
    });    
});

app.post('/api/ask', (req, res) => {
    const { question } = req.body;

    if (!question) {
        return res.status(400).json({ 
            error: 'Questão é obrigatória'
        });
    }

    res.json({
        answer: `Você perguntou: ${question}`,
        sources: [],
        skill: 'default',
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
