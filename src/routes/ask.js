const express = require('express');
const { buildContext } = require('../services/contextService');
const { searchDocuments } = require('../services/ragService');
const { selectSkill } = require('../services/skillRouter');
const { generateAnswer } = require('../services/llmService');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { question, userId } = req.body;

        if (!question) {
            return res.status(400).json({ 
                error: 'A questão é obrigatória.' 
            });
        }

        const context = await buildContext({ userId, question });

        const retrievedDocs = await searchDocuments({ 
            query: question,
            topK: 3
        });

        const skill = await selectSkill({
            question,
            retrievedDocs
        });

        const answer = await generateAnswer({
            systemPrompt: skill.systemPrompt,
            input: question,
            documents: retrievedDocs
        });

        res.json({ 
            answer,
            skill: skill.name,
            context,
            sources: retrievedDocs
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            error: 'erro interno' 
        });
    }
});

module.exports = router;
