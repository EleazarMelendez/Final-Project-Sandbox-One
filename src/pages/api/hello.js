import { createClient } from '@supabase/supabase-js'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

const supabaseUrl = 'https://bhzxwvltfuqsmnhgqjrf.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const currentTimestamp = new Date();
const timestamp = new Date(currentTimestamp.getTime() - (36 * 60 * 60 * 1000));

let { data: ParsedArticles, error } = await supabase
  .from('ParsedArticles')
  .select('id,article_headline')
  .gte('article_published', timestamp)

const natural = require('natural');
const tokenizer = new natural.AggressiveTokenizerEs();
const TfIdf = natural.TfIdf;

const tfidf = new TfIdf();

const headlines = [
    'El presidente anuncia nuevas medidas económicas',
    'La economía se contrae por segundo trimestre consecutivo',
    'El gobierno presenta el plan de recuperación económica',
    'Continua la contracción económica',
    'Shakira baila en el Super Bowl',
    'Tremendo el espectaculo de Shakira',
    'Perdida de empleos es la realidad del país'
  ];
  
  headlines.forEach(headline => {
    tfidf.addDocument(tokenizer.tokenize(headline));
  });

  const similarities = [];

headlines.forEach((headline, i) => {
  const scores = [];

  headlines.forEach((x, j) => {
    if (i === j) {
      scores.push(0);
    } else {
      const score = tfidf.tfidf(tokenizer.tokenize(headline), j);
      scores.push(score);
    }
  });
  console.log(scores);
//  similarities.push(scores);
});

// console.log(scores);