const documents = require('../data/documents');

function normalize(text) {
    return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

async function searchDocuments({ query, topK = 3 }) {
    const normalizedQuery = normalize(query);
    const queryTeams = normalizedQuery.split(/\s+/).filter(Boolean);

    const scored = documents.map(doc => {
        const haystack = normalize(`${doc.title} ${doc.content}`);

        let score = 0;

        for (const term of queryTeams) {
            if (haystack.includes(term)) {
                score += 1;
            }
        }

        return { 
            ...doc, 
            score 
        };
    });

    return scored
    .filter(doc => doc.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

module.exports = {
    searchDocuments
};