// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

const pool = require('../../lib/db');

export default async function getScoreboard (req,res) {
  try{
      console.log("inside user/getScoreboard");
      var x = await pool.query("select * from (select distinct on (name) * from scoreboard order by name, score desc) t order by score desc limit 7");
      res.status(200).json(x.rows);
  }catch(err){
      res.status(500).json(err);
  }
}