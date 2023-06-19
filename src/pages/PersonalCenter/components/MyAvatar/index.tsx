import { Image } from "antd"
import myAvatar from "@/assets/avatar.png"
import "./index.scss"

export const MyAvatar = () => {
    return (
        <div className="my-avatar__container">
            <Image
                width={200}
                src={myAvatar}
            />
        </div>
    )
}