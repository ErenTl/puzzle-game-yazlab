// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// import db from '../../lib/db'
const pool = require('../../lib/db');



// export default async function getSliderAds (req,res) {
//   try{
//       console.log("inside user/getSliderAds");
//       var x = await pool.query(getSliderAdsQuery);
//       res.status(200).json(x.rows);
//   }catch(err){
//       res.status(500).json(err);
//   }
// }

export default async function getScoreboard (req,res) {
  try{
      console.log("inside user/getScoreboard");
      var x = await pool.query("select * from (select distinct on (name) * from scoreboard order by name, score desc) t order by score desc");
      res.status(200).json(x.rows);
  }catch(err){
      res.status(500).json(err);
  }
}

const getSliderAdsQuery = `
    SELECT
        *, index as key, "imageLink" as image
    FROM
        "adSlider"
    WHERE
        "expireDate" > now()
    AND
        "index" > 0
    ORDER BY
        "index" ASC`;


        // export async function getCarouselItems() {
        //     const response = await fetch('http://localhost:3000/api/v1/user/getSliderAds');
        //     const data = await response.json();
        //     return data;
        // }
        