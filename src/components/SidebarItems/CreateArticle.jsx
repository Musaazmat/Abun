import React from 'react';
import articleImage from '../../assets/article.png';
import './CreateArticle.css';

function CreateArticle() {
  return (
    <div className='container'>
      <div className='header'>
        <h3>Create Article</h3>
        <img src={articleImage} alt="Image" />
      </div>
      <div className='bottom'>
        <form className='form-data'>
          <h4>Keywords</h4>
          <input type="text" required/>

          <h4>Article</h4>
          <input type="text"  required/>

          <h4>Additional Context (Optional)</h4>
          <textarea type="text" name="" cols="10" rows="10" className='style-input' placeholder='In the list include Draftss.com on the top...'/>
          <br />
          <input type="submit" value="Generate Article →" 
                className='style-button'/>
        </form>

        <div className='bottom-two'>
          <h5>Article Title Suggestions based on keywords</h5>
          <div className='bottom-nest'>
            <span className='text'>Creative Ideas ⓘ</span>
            <span>SERP Based Ideas ⓘ </span>
          </div>
          <div className='nested-text'>
            12 ways to generate traffic using AI<br />
            How to Build a Scalable SaaS Product: Key Steps and Strategies<br />
            10 Proven Growth Hacks for SaaS Startups <br />
            Why Productized Services are Revolutionizing the Freelance Economy
          </div>
        </div>
      </div>

    </div>
  )
}

export default CreateArticle;