import React,{useState} from 'react'
import ImageLi from './Image'

export default function Imagelist(){
      const[items,setitems]=useState([
       {title:'Nature1',imagePath:'/images/1.jpg',tags:['nature 1','234','one']},
       {title:'Nature2',imagePath:'/images/2.jpg',tags:['nature 2','24','two']},
       {title:'Nature3',imagePath:'/images/3.jpg',tags:['nature 3','34','three']},

      ])
    return(
        <div>
<ImageLi 
item={items} />
        </div>
    )
}