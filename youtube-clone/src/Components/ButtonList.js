import React from 'react'
import Button from './Button'

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Games"  />
      <Button name="Cricket"  />
      <Button name="Live" />
      <Button name="News"  />
      <Button name="Songs"  />
      <Button name="Movies"  />
      <Button name="Podcasts"  />
      <Button name="Webseries"  />
      <Button name="Vlogs"  />
    </div>
  )
}

export default ButtonList