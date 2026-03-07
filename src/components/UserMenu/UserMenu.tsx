// src/components/UserMenu.tsx

import { DiJsBadge } from "react-icons/di";
import css from "./UserMenu.module.css";

interface UserNameProps{
    name:string,
}
export default function UserMenu({name}:UserNameProps) {
    return (
         <div>
        <DiJsBadge className={css.icon} size={140}/>{name}
    </div>
    )
   
}