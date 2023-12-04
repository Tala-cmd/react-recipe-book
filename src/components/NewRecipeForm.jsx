import React, { useState } from 'react'

function NewRecipeForm() {
  const [form, setForm] = useState(false)

  return (
    <>
    {form ?  <img className='arrow' src='public\curved-arrow.svg'></img>
    :
    <img className='line' src='public/random-lines.svg'></img>
    }
    
    {/* */}
    <div className='container'>
      <button className='button'>Add a new recipe?</button>
    </div>
    </>
  )
}

export default NewRecipeForm