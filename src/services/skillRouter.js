async function selectSkill({question, retrievedDocs}) {
    const normalized = question.toLowerCase();

    if (normalized.includes('férias')) {
        return {
            name: 'hr-faq',
            systemPrompt: 'Você é um assistente de RH. Responda apenas com base nos documentos fornecidos.'
        };
    }

    if (normalized.includes('reembolso')) {
        return {
            name: 'finance-faq',
            systemPrompt: 'Você é um assistente de financeiro. Responda com base nos documentos fornecidos.'
        };
    }

    if (normalized.includes('chamado') || normalized.includes('incidentes')) {
        return {
            name: 'support-skill',
            'systemPrompt': 'Você é um assistente de suporte técnico. Explique os próximos passos com base nos documentos.'
        };
    }

    if (retrievedDocs.length > 0) {
        return {
            name: 'knowledge-base',
            systemPrompt: 'Você é um assistente corporativo. Use apenas os documentos recuperados.'
        };

    }

    return {
        name: 'fallback',
        systemPrompt: 'Você é um assistente corporativo. Se não houver base suficiente, diga que não encontrou informação.'
    }
}

module.exports = {
    selectSkill
};
