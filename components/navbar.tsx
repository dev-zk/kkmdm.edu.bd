'use client'
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import React, { useState, useEffect } from 'react';
import {Avatar} from "@nextui-org/react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import Image from "next/image";



  const ReactLiveClock: React.FC = () => {
	const [time, setTime] = useState<Date>(new Date());
  
	useEffect(() => {
	  const interval = setInterval(() => {
		setTime(new Date());
	  }, 1000);
  
	  return () => clearInterval(interval);
	}, []);
  
	// Function to convert English numbers to Bengali numbers
	const toBanglaDigits = (number: number): string => {
	  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
	  return number.toString().replace(/\d/g, (digit) => banglaDigits[parseInt(digit)]);
	};
  
	// Function to convert time to Bengali format
	const toBanglaTime = (time: Date): string => {
	  return time
		.toLocaleTimeString("bn-BD", { hour12: true })
		.replace(/\d/g, (digit) => toBanglaDigits(parseInt(digit)));
	};
  
	return (
	  <>
		<h1 className="text-2xl">{toBanglaTime(time)}</h1>
	  </>
	);
  };
  
  export default ReactLiveClock;
  


export const Navbar = () => {
	

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
					<Avatar isBordered  src="https://github.com/dev-zk/kkmdm.edu.bd/blob/main/kkmdm-logo.png?raw=true" />

						<p className="text-inherit uppercase font-extrabold">{siteConfig.sortName}</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-6 ml-unit-3xl uppercase ">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				
				
				<NavbarItem className="gap-7  hidden sm:flex md:flex">

				<ThemeSwitch />
					<ReactLiveClock />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				
				<div className="mx-4 mt-2 w-full flex flex-col gap-2 items-center justify-center uppercase">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href={item.href}
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
