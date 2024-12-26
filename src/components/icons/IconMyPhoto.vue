<template lang="pug">
svg.icon_myPhoto(xmlns='http://www.w3.org/2000/svg', viewBox='-5 -5 644.9 783.22')
  defs
    clipPath#myPhotoClipPath
      path(style='fill: none' d='M556.87,125.06,326.8,6.32a47.68,47.68,0,0,0-64.25,20.51L6.32,523.29a47.69,47.69,0,0,0,20.51,64.25L384,771.9a47.69,47.69,0,0,0,64.25-20.51L638.9,382.07Z')
  path.white(d='M556.87,125.06,326.8,6.32a47.68,47.68,0,0,0-64.25,20.51L6.32,523.29a47.69,47.69,0,0,0,20.51,64.25L384,771.9a47.69,47.69,0,0,0,64.25-20.51L638.9,382.07Z')
  g.myPhotoClipPath
    image(href='@/assets/author2.png' width="3654" height="4512" transform="translate(-145 250) scale(0.2) rotate(-15)")
  g(style='opacity: 0.5')
    path.fillBlack(d='M488.72,314.9,638.9,382.07l-82-257-83.5,141.75A35.69,35.69,0,0,0,488.72,314.9Z')
  path.white(d='M499.65,310.21,638.9,382.07l-82-257L485,264.31A34.07,34.07,0,0,0,499.65,310.21Z')
</template>
