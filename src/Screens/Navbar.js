import { React } from "react";
import { Fragment } from "react";
import "../../src/App.css";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import ProductPage from "../Modules/ProductPage";

import { useState, useEffect } from "react";

const navigation = [
  { name: "Become A Seller", href: "#", current: false },
  { name: "Products", href: "#", current: false },
  { name: "Contact Us", href: "#", current: false },
  { name: "Profile", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [searchString, setSearchString] = useState([]);
  const getData = (data) => {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?lat=83.218483&lon=17.686815&appid=1635890035cbba097fd5c26c8ea672a1"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Disclosure as="nav" className="bg-blue-600">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <Link to="/">
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                        alt="Workflow"
                      />
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                        alt="Workflow"
                      />
                    </div>
                  </Link>
                  <div className="hidden sm:block sm:ml-6 ">
                    <div className="flex space-x-4">
                      <button
                        className={classNames(
                          "block px-3 rounded-md py-2 text-white hover:bg-gray-700 hover:text-white"
                        )}
                      >
                        Become a Seller
                      </button>
                      <Link
                        className={classNames(
                          "block px-3 rounded-md py-2 text-white hover:bg-gray-700 hover:text-white"
                        )}
                        to="/ProductPage"
                      >
                        <p>Products</p>
                      </Link>
                      <button
                        className={classNames(
                          "block px-3 rounded-md py-2 text-white hover:bg-gray-700 hover:text-white"
                        )}
                      >
                        Contact Us
                      </button>
                      <button
                        className={classNames(
                          "block px-3 rounded-md py-2 text-white hover:bg-gray-700 hover:text-white"
                        )}
                      >
                        Profile
                      </button>
                      <button
                        className={classNames(
                          "block px-3 rounded-md py-2 text-white hover:bg-gray-700 hover:text-white"
                        )}
                      >
                        About Us
                      </button>
                      <button
                        className={classNames(
                          "block px-3 rounded-md py-2 text-white hover:bg-gray-700 hover:text-white"
                        )}
                      >
                        Forums
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      "block px-3 py-2 text-white hover:bg-gray-700 hover:text-white"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
