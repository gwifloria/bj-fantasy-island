import { AlbumType } from "./type";
import dali1 from "@/assets/dali1.jpg"
import dali from "@/assets/dali.jpg"
import phuket from "@/assets/phuket.jpg"
import phuket1 from "@/assets/phuket1.jpg"
import phuket2 from "@/assets/phuket2.jpg"
import phuket3 from "@/assets/phuket3.jpg"

export const albumsConfig:{key:AlbumType,items:string[]}[] = [
  {
    key:'portrait',
    items:[dali1,dali]
  },
  {
    key:'record',
    items:[phuket,phuket1]
  },
  {
    key:'trip',
    items:[phuket2,phuket3]
  },
  
]
