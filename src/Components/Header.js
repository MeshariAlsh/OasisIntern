import { Fragment, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "./SearchContext";
import { AuthContext } from './AuthContext';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Engineering & Science", href: "/engineering", current: false },
  { name: "Legal", href: "/legal", current: false },
  { name: "Business", href: "/business", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useSearch();
  const { user, logout } = useContext(AuthContext);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <Disclosure as="nav" className="bg-custom-background">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img src="/Images/Logo.png" alt="Logo" className="h-16" />
                </div>
                <div className="hidden pt-2 sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => navigate(item.href)}
                        className={classNames(
                          item.current ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-white hover:text-black transition",
                          "px-3 py-2 rounded-full text-xl font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Search bar */}
                <div className="flex-1 flex justify-end">
                  <form className="w-auto" onSubmit={handleSubmit}>
                    <div className="relative">
                      <input
                        type="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onFocus={() => setIsSearchFocused(true)}
                        onBlur={() => setIsSearchFocused(false)}
                        placeholder="Search"
                        className={`block text-black pl-3 pr-10 py-2 rounded-full leading-5 bg-grey-400 placeholder-slate-800 focus:outline-none focus:placeholder-slate-800 focus:ring-1 focus:ring-white focus:border-white sm:text-sm ${
                          isSearchFocused ? 'w-40 sm:w-96' : 'w-20 sm:w-32'
                        } transition-all duration-300`}
                      />
                    </div>
                  </form>
                </div>
                {/* Conditional rendering based on authentication */}
                {user ? (
                  <Fragment>
                    {/* Your Profile, Settings, Sign Out */}
                    <Menu as="div" className="ml-3 relative">
                      <MenuButton className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img className="h-8 w-8 rounded-full" src="/Images/addmin.png" alt="User Profile" />
                      </MenuButton>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <MenuItem>
                            {({ active }) => (
                              <a
                                href="/profile"
                                className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}
                              >
                                Your Profile
                              </a>
                            )}
                          </MenuItem>
                          <MenuItem>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}
                              >
                                Settings
                              </a>
                            )}
                          </MenuItem>
                          <MenuItem>
                            {({ active }) => (
                              <button
                                onClick={logout}
                                className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700 w-full text-left")}
                              >
                                Sign out
                              </button>
                            )}
                          </MenuItem>
                        </MenuItems>
                      </Transition>
                    </Menu>
                  </Fragment>
                ) : (
                  <Fragment>
                    <button
                      onClick={() => navigate('/login')}
                      className="bg-gray-800 text-white px-2 py-1 rounded-full text-lg font-sans ml-4 hover:bg-white hover:text-black transation"
                    >
                      Login
                    </button>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
          <DisclosurePanel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-white hover:text-black transition",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
