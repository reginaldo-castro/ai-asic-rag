const express = require('express');
const { addDocument, getAllDocuments } = require('../services/documentStore');

const router = express.Router();

router.get('/', (req, res) => {
    const documents = getAllDocuments();
    res.json(documents);
});

router.post('/ingest', (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ 
            error: 'Título e conteúdo são obrigatórios.' 
        });
    }

    const newDoc = {
        id: `doc-${Date.now()}`,
        title,
        content
    };

    addDocument(newDoc);

    res.status(201).json({
        message: 'Documento ingerido com sucesso.',
        document: newDoc
    });
});

module.exports = router;