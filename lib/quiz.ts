import { z } from 'zod'

export const QUESTIONS_PER_GAME = 10
const OPTIONS_PER_QUESTION = 4

// Forma que se pide al modelo. El número exacto de elementos no se puede garantizar aquí:
// lo asegura normalizeQuiz antes de entregar o guardar una partida.
export const QuizSchema = z.object({
  questions: z.array(z.object({
    question: z.string(),
    options: z.array(z.string()),
    correct: z.number().int(),
    category: z.string(),
    fact: z.string(),
  })),
})
export type Quiz = z.infer<typeof QuizSchema>
type Question = Quiz['questions'][number]

function isValidQuestion(q: Question) {
  const options = q.options.map(o => o.trim().toLowerCase())
  return q.question.trim() !== ''
    && options.length === OPTIONS_PER_QUESTION
    && options.every(Boolean)
    && new Set(options).size === OPTIONS_PER_QUESTION
    && q.correct >= 0 && q.correct < OPTIONS_PER_QUESTION
}

// El modelo tiende a poner la respuesta correcta en las mismas posiciones
function shuffleOptions(q: Question): Question {
  const answer = q.options[q.correct]
  const options = [...q.options]
  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[options[i], options[j]] = [options[j], options[i]]
  }
  return { ...q, options, correct: options.indexOf(answer) }
}

/** Partida lista para jugar con exactamente 10 preguntas válidas, o null si no alcanzan. */
export function normalizeQuiz(quiz: Quiz): Quiz | null {
  const valid = quiz.questions.filter(isValidQuestion)
  if (valid.length < QUESTIONS_PER_GAME) return null
  return { questions: valid.slice(0, QUESTIONS_PER_GAME).map(shuffleOptions) }
}

/** Comprueba una partida guardada en la reserva: una incompleta nunca debe llegar al juego. */
export function isPlayableQuiz(raw: string) {
  try {
    const parsed = QuizSchema.safeParse(JSON.parse(raw))
    return parsed.success
      && parsed.data.questions.length === QUESTIONS_PER_GAME
      && parsed.data.questions.every(isValidQuestion)
  } catch {
    return false
  }
}
