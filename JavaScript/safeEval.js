function safeEval(expression) {
    try {
        return Function("'use strict'; return (" + expression + ")")();
    } catch {
        return 'Erro';
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = safeEval;
}
