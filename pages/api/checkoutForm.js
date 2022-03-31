export default function handler(req, res) {
  
    console.log("req.body",req.body);
    const body = req.body.data;
  
    console.log("body", body);
  
    
    // if (!body.first || !body.last) {
    //   return res.status(400).json({ data: 'First or last name not found' })
    // }
  
    // res.status(200).json({ data: `${body.first} ${body.last} ${body.address} ${body.city} ${body.country}${body.phone}${body.postal}` })
      res.status(200).send({data:body});
  }