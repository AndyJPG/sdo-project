import { lazy } from "react"
import BoundarySuspense from "../utils/BoundarySuspense"

const DialogSection = lazy(() => import("./DialogSection"))

const DialogSectionList = () => {
  const dialogSectionData = [ {
    title: "Tell us about your ideas",
    content: "Throw us as many ideas as you could and our experienced team will help you construct them and come up with the best solution for your website.",
    action: () => {
    },
    imagUrl: "https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Ftell-us-about-shadow.png?alt=media&token=3afa7b9b-231f-4453-8d77-95a83e1cd295"
  }, {
    title: "Build the site you need",
    content: "Explore variety of tools for your website – whether it’s for a booking service or online store.",
    action: () => {
    },
    imagUrl: "https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Fbuild-the-site-shadow.png?alt=media&token=58cdb46e-6f27-4f27-8a3c-85e404b6ae67"
  }, {
    title: "Go live",
    content: "Stand out from your competitors and grow your audience through multiple channels with advanced social tools.",
    action: () => {
    },
    imagUrl: "https://firebasestorage.googleapis.com/v0/b/website-project-3ea2e.appspot.com/o/studio-design-ocean%2Fgo-live-shadow.png?alt=media&token=7e1a427d-1cec-42b0-a6f7-2f000bee5542"
  } ]

  return (
    <>
      {dialogSectionData.map((dialog, index) => (
        <BoundarySuspense name={`dialog ${dialog}`}>
          <DialogSection {...dialog}
                         flexDirection={(index % 2) ? "row-reverse" : undefined}
                         backgroundColor={(index % 2) ? "#f5f7fa" : undefined}/>
        </BoundarySuspense>))}
    </>
  )
}

export default DialogSectionList