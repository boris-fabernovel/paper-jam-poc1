import React from 'react'
import renderHTML from 'react-render-html'
import htmlArticle1 from '../resources/arciticle1'

export default ()=> {

    return (
      <div>
        {renderHTML(htmlArticle1)}
      </div>
    )
};
