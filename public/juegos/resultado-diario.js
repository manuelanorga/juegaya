// Compara el resultado de un reto diario con el de los demás jugadores de ese día.
// Devuelve { total, beaten } o null si no se puede: el juego sigue funcionando igual.
window.JuegaYaDiario = {
  // Con menos jugadores la comparación no significa nada y se muestra otro mensaje
  MIN_JUGADORES: 5,

  session() {
    let id = localStorage.getItem('jy_session');
    if (!id) {
      id = Math.random().toString(36).slice(2) + Date.now().toString(36);
      localStorage.setItem('jy_session', id);
    }
    return id;
  },

  fecha() {
    const n = new Date();
    return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, '0')}-${String(n.getDate()).padStart(2, '0')}`;
  },

  async enviar(game, value) {
    // Las pruebas en local no cuentan como jugadores reales
    if (!/(^|\.)juegaya\.app$/.test(location.hostname)) return null;
    try {
      const res = await fetch('/api/resultado-diario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ game, value, date: this.fecha(), session: this.session() }),
      });
      if (!res.ok) return null;
      const data = await res.json();
      return typeof data.total === 'number' && typeof data.beaten === 'number' ? data : null;
    } catch {
      return null;
    }
  },
};
