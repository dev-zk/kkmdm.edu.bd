import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

import {ScrollShadow} from "@nextui-org/react";
import Notices from './Notices';
import { Button } from 'rsuite';


function NoticesMine() {
  return (
    <div>
         <Card>
            <CardHeader className='text-4xl text-center'>
                Notices Board 
            </CardHeader>
        
    <ScrollShadow className="w-fit h-unit-7xl">

       
      <Notices />
      <button>See more</button>
    </ScrollShadow>

<CardFooter>
    <Button className='text-indigo-500'>See More</Button>
</CardFooter>
    </Card>
    </div>
  )
}

export default NoticesMine