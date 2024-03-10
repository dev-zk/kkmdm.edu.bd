"use client"
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import Link from "next/link";

export default function TopBar() {
  const items = [
    {
      key: "new",
      label: "New file",
    },
    {
      key: "copy",
      label: "Copy link",
    },
    {
      key: "edit",
      label: "Edit file",
    },
    {
      key: "delete",
      label: "Delete file",
    }
  ];

  return (

    <div>

<div>
  <div className="flex gap-8">
    <Dropdown>
      <DropdownTrigger>
        <Button>Google</Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem>
          <Link href='/'>Home</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown>
      <DropdownTrigger>
        <Button>Google</Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem>
          <Link href='/'>Home</Link>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</div>
<Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {(item) => (
          <DropdownItem
            key={item.key}
            color={item.key === "delete" ? "danger" : "default"}
            className={item.key === "delete" ? "text-danger" : ""}
          >
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
    </div>
    
  );
}
