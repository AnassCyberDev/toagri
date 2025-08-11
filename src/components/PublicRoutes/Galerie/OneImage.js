import React from 'react'

export const OneImage = ({description,image}) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
    <img src={image} height={350} style={{margin:10,borderRadius:10}}/>
{description  &&    <div style={{
position: 'absolute',
top: 20, /* Adjust to position the title closer or farther from the top */
left: 20, /* Adjust to position the title closer or farther from the left */
color: 'white', /* Title text color */
backgroundColor: '#E75D0E', /* Semi-transparent background */
padding: '5px 10px', /* Padding around the title */
borderRadius: '5px', /* Optional: Rounded corners for the title box */
fontSize: '12px', /* Adjust the font size */
fontWeight: 600,

textAlign:"center"
/* Optional: Make the font bold */
}}>
{description}
</div>}
</div>
  )
}
