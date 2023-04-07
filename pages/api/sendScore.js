const pool = require('../../lib/db');

export default async function setScoreboard (req,res) {
  try{
      console.log("inside user/setScoreboard");
      var x = await pool.query(`insert into scoreboard (name, score, "moveCount") values ('`+req.body.username+`',`+req.body.score+`,`+req.body.movecount+`) returning *`);
      res.status(200).json(x.rows);
  }catch(err){
      res.status(500).json(err);
  }
}

