import { useState } from 'react';
import Button from '@mui/material/Button';

const NewsletterForm = () => {
  const [input, setInput] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return ( 
    <div className="news-letter">
      <h4>Newsletter</h4>
      <p>Subscribe to our newsletter and be one of the first to receive the latest info on new deals and products!</p>
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your email address"
        />
        <Button variant="outlined" size="large">
          Subscribe
        </Button>
      </form>
    </div>
   );
}
 
export default NewsletterForm;