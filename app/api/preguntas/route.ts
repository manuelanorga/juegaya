import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY!,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Genera exactamente 10 preguntas de trivia sobre historia mundial y latinoamericana. Varía los temas: conquistas, guerras, personajes históricos, civilizaciones, revoluciones, eventos importantes.

Responde SOLO con JSON válido, sin texto adicional, sin backticks:
{
  "questions": [
    {
      "question": "pregunta aquí",
      "options": ["opción A", "opción B", "opción C", "opción D"],
      "correct": 0,
      "category": "categoría corta",
      "fact": "dato curioso de una línea"
    }
  ]
}`
        }]
      })
    })

    const data = await response.json()
    const text = data.content[0].text.trim()
    const parsed = JSON.parse(text)
    return NextResponse.json(parsed)

  } catch (err) {
    return NextResponse.json({ error: 'Error generando preguntas' }, { status: 500 })
  }
}
