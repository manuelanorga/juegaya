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
        max_tokens: 2000,
        messages: [{
          role: 'user',
          content: `Genera exactamente 10 preguntas de trivia sobre historia mundial y latinoamericana. Responde SOLO con JSON válido sin backticks ni texto adicional:
{"questions":[{"question":"pregunta","options":["A","B","C","D"],"correct":0,"category":"categoria","fact":"dato curioso"}]}`
        }]
      })
    })

    const data = await response.json()
    if(data.error) return NextResponse.json({ error: data.error.message }, { status: 500 })

    let text = data.content[0].text.trim()
    text = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()
    
    const parsed = JSON.parse(text)
    return NextResponse.json(parsed)

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
