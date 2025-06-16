import axios from 'axios';

export async function classifyDreamLocal(dream: string): Promise<'Good' | 'Bad'> {
  try {
    const response = await axios.post('http://localhost:1234/v1/chat/completions', {
      model: 'your-local-model',
      messages: [
        {
          role: "system",
          content: `You are a dream classification expert. Classify dreams as:
          - "Good" for pleasant themes (flying, success)
          - "Bad" for negative themes (being chased, lost)
          Respond ONLY with "Good" or "Bad".`
        },
        {
          role: "user",
          content: `Classify: "${dream}"`
        }
      ],
      temperature: 0.1,
      max_tokens: 1
    });

    const classification = response.data.choices[0]?.message?.content?.trim();
    return (classification === 'Good' || classification === 'Bad') 
      ? classification 
      : 'Good'; // Default fallback
  } catch (error) {
    console.error('LM Studio error:', error);
    return 'Good';
  }
}