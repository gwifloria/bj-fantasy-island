import phuket from "@/assets/phuket.jpg";
import phuket1 from "@/assets/phuket1.jpg";
import phuket2 from "@/assets/phuket2.jpg";
import phuket3 from "@/assets/phuket3.jpg";
import { AlbumType } from "./type";

export const albumsConfig:{key:AlbumType,items:string[]}[] = [
  {
    key:'portrait',
    items:[phuket,phuket1,phuket2,phuket3]
  },
  {
    key:'trip',
    items:[phuket2,phuket3]
  },
  
]
