import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import Carousel from "./Carousel";
import MasterBany from "./MasterBany";
import GovInfo from './GovInfo'
import AudioPlayer from './AudioPlayer'
import GovContacts from './GovContacts'
import BanglaCalendar from './BanglaCalendar'
import NoticesMine from './NoticesMine'

export default function HomePage() {
  return (
    <div className="lg:flex gap-7 lg:flex-row sm:flex-col md:flex md:flex-row">
      <div className="space-y-8 mt-10">
      <Carousel />
        <Card className=" w-full lg:max-w-[800px] mt-12">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">{siteConfig.sortInfo}</div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{siteConfig.description}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link isExternal showAnchorIcon href="/">
              বিস্তারিত
            </Link>
          </CardFooter>
        </Card>
     

        <div>
          <NoticesMine />
        <BanglaCalendar />
        </div>
      </div>
      <div>
        <Card className="w-full lg:max-w-[300px] mt-12">
         <MasterBany />
         <GovInfo />

         <AudioPlayer src='	https://upload.wikimedia.org/wikipedia/commons/b/bc/Amar_Sonar_Bangla_-_official_vocal_music_of_the_National_anthem_of_Bangladesh.ogg' />



        </Card>

        <GovContacts />

       

        

      </div>

  
    </div>
  );
}
