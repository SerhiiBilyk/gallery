
/*
by default, all iterated images which you want to include inside component must have names 1.jpg, 2.jpg ...
 */
export const imageGenerator=(context,quantity,extension='jpg')=>{
  return(
    Array(quantity).fill(0).map((el, i) =>context(`./${i + 1}.${extension}`))
  )
}
