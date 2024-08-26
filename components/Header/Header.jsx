"use client ";

import React, { useState } from "react";
import { CircleUser, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="h-10  bg-black  hidden md:block">
        <div className="flex items-center justify-between container mx-auto px-[10rem] ">
          <div className="flex items-center text-white gap-1 space-x-10">
            <Link href="" className="flex gap-2 hover:text-red-500">
              <AiOutlineMail className="mt-[.4rem]" />
              vinas@gmail.com
            </Link>
            <div className="flex gap-2 capitalize">
              <CiLocationOn className="mt-[.4rem] font-bold" />
              accra-ghana +233-x-xxx-xxxx
            </div>
          </div>

          {/* Socios */}
          <div className="flex space-x-5">
            {/* Language switcher */}
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="sm" className="rounded">
                    Language
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>French</DropdownMenuItem>
                  <DropdownMenuItem>Spanish</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Social media links */}
            <div className="flex items-center gap-10">
              <Link href="" className="text-white">
                <FaFacebookF className="text-white hover:text-blue-700" />
              </Link>

              <div className="flex gap-5 text-white">
                <Link href="" className="hover:text-rose-600">
                  <FaYoutube />
                </Link>

                <Link href="" className="hover:text-blue-700">
                  <FaTiktok />
                </Link>

                <Link href="" className="hover:text-blue-700">
                  <FaInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="flex container mx-auto">
        <div className="flex w-full flex-col">
          <header className="sticky  top-0 flex  h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
            <div className="hidden md:block">
              <Link
                href="/"
                className=" capitalize text-sm font-bold text-orange-500"
              >
                vinas beauty and clothing
              </Link>
            </div>
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 lg:sticky lg:top-0">
              <ul className="flex space-x-10 capitalize text-foreground">
                <li className="">
                  <Link href="" className="hover:text-blue-500">
                    home
                  </Link>
                </li>

                <li className="">
                  <HoverCard>
                    <HoverCardTrigger>
                      <Link href="" className="hover:text-blue-500">
                        shop
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-full font-bold text-xl">
                      <div className="flex space-x-10">
                        <div className="">
                          <h1 className="border-b">
                            <Link
                              href="#"
                              className="text- transition-colors hover:text-foreground"
                            >
                              women wear
                            </Link>
                          </h1>
                        </div>

                        <div className="">
                          <h1 className="border-b">
                            <Link
                              href="#"
                              className="text- transition-colors hover:text-foreground"
                            >
                              men&#39;s wear
                            </Link>
                          </h1>
                        </div>

                        <div className="">
                          <h1 className="border-b">
                            <Link
                              href="#"
                              className="text- transition-colors hover:text-foreground"
                            >
                              accessories
                            </Link>
                          </h1>
                        </div>

                        <div className="">
                          <h1 className="border-b">
                            <Link
                              href="#"
                              className="text- transition-colors hover:text-foreground"
                            >
                              foot wear
                            </Link>
                          </h1>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>

                <li className="">
                  <HoverCard>
                    <HoverCardTrigger>
                      <Link href="" className="hover:text-blue-500">
                        categories
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-full font-bold text-xl">
                      <div className="flex space-x-10">
                        <div className="">
                          <h1 className="border-b">
                            <Link
                              href="#"
                              className="text- transition-colors hover:text-foreground"
                            >
                              featured products
                            </Link>
                          </h1>
                        </div>

                        <div className="">
                          <h1 className="border-b">
                            <Link
                              href="#"
                              className="text- transition-colors hover:text-foreground"
                            >
                              new arrivals
                            </Link>
                          </h1>
                        </div>

                        <div className="">
                          <h1 className="border-b">
                            <Link
                              href="#"
                              className="text- transition-colors hover:text-foreground"
                            >
                              accessories
                            </Link>
                          </h1>
                        </div>

                        <div className="">
                          <h1 className="border-b">
                            <Link
                              href="#"
                              className="text- transition-colors hover:text-foreground"
                            >
                              foot wear
                            </Link>
                          </h1>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>

                {/* <li className="">
                  <HoverCard>
                    <HoverCardTrigger>
                      <Link href="" className="hover:text-blue-500">
                        products
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <Link
                        href="#"
                        className="text- transition-colors hover:text-foreground"
                      >
                        home
                      </Link>
                    </HoverCardContent>
                  </HoverCard>
                </li> */}

                <li className="">
                  <HoverCard>
                    <HoverCardTrigger>
                      <Link href="" className="hover:text-blue-500">
                        blog
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                      <Link
                        href="#"
                        className="text- transition-colors hover:text-foreground"
                      >
                        home
                      </Link>
                    </HoverCardContent>
                  </HoverCard>
                </li>

                <li className="">
                  <HoverCard>
                    <HoverCardTrigger>
                      <Link href="" className="hover:text-blue-500">
                        pages
                      </Link>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-[15rem] text-center">
                      <div className="flex flex-col space-y-5 w-full">
                        <div className="w-full">
                          <h1 className="w-full">
                            <Link
                              href="#"
                              className="hover:text-muted-foreground w-full py-0.5 px-2"
                            >
                              contact us
                            </Link>
                          </h1>
                        </div>

                        <div className="">
                          <h1 className="">
                            <Link
                              href="#"
                              className=" transition-colors hover:text-muted-foreground"
                            >
                              about us
                            </Link>
                          </h1>
                        </div>

                        <div className="">
                          <h1 className="">
                            <Link
                              href="#"
                              className="transition-colors hover:text-muted-foreground"
                            >
                              service
                            </Link>
                          </h1>
                        </div>

                        <div className="">
                          <h1 className="">
                            <Link
                              href="#"
                              className="transition-colors hover:text-muted-foreground"
                            >
                              faq
                            </Link>
                          </h1>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </li>
              </ul>
            </nav>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link href="#" className="text- hover:text-foreground">
                    Dashboard
                  </Link>
                  <Link href="#" className="text- hover:text-foreground">
                    Orders
                  </Link>
                  <Link href="#" className="text- hover:text-foreground">
                    Products
                  </Link>
                  <Link href="#" className="text- hover:text-foreground">
                    Customers
                  </Link>
                  <Link href="#" className="hover:text-foreground">
                    Settings
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Search button */}
            <div className="flex justify-between  gap-4  md:gap-2">
              <form className=" ">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  />
                </div>
              </form>

              {/* Currency converter */}
              <div className="">{/* TODO: Add currency converter */}</div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <CircleUser className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Wishlist</DropdownMenuItem>
                  <DropdownMenuItem>History</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* Cart */}
              <div className="flex items-center">
                <PiShoppingCartSimpleThin size={25} className="font-bold" />
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};
export default Navbar;
