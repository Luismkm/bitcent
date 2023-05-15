import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconBrandYoutube } from "@tabler/icons-react"
import RedeSocial from "./RedeSociai"

export default function RedesSociais() {
  return (
    <div className="flex">
      <RedeSocial icone={<IconBrandLinkedin />} url="https://www.linkedin.com/in/luismkm/" />
      <RedeSocial icone={<IconBrandWhatsapp />} url="https://api.whatsapp.com/send?phone=5542991320857" />
      <RedeSocial icone={<IconBrandGithub />} url="https://github.com/Luismkm" />
    </div>
  )
}