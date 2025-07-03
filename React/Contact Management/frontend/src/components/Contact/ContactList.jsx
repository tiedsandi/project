import { alertConfirm, alertError, alertSuccess } from "../../lib/alert.js";
import { contactDelete, contactList } from "../../lib/api/ContactApi.js";
import { useEffect, useState } from "react";
import { useEffectOnce, useLocalStorage } from "react-use";

import Filter from "../general/Filter.jsx";
import { Link } from "react-router";
import Pagination from "../general/Pagination.jsx";

export default function ContactList() {
  const [token, _] = useLocalStorage("token", "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [contacts, setContacts] = useState([]);
  const [reload, setReload] = useState(false);

  function getPages() {
    const pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  async function handleSearchContacts(e) {
    e.preventDefault();
    setPage(1);
    setReload(!reload);
  }

  async function handlePageChange(page) {
    setPage(page);
    setReload(!reload);
  }

  async function fetchContacts() {
    const response = await contactList(token, { name, phone, email, page });
    const responseBody = await response.json();
    console.log(responseBody);

    if (response.status === 200) {
      setContacts(responseBody.data);
      setTotalPage(responseBody.paging.total_page);
    } else {
      await alertError(responseBody.errors);
    }
  }

  async function handleContactDelete(id) {
    if (
      !(await alertConfirm("Are you sure you want to delete this contact?"))
    ) {
      return;
    }

    const response = await contactDelete(token, id);
    const responseBody = await response.json();
    console.log(responseBody);

    if (response.status === 200) {
      await alertSuccess("Contact deleted successfully");
      setReload(!reload);
    } else {
      await alertError(responseBody.errors);
    }
  }

  useEffect(() => {
    fetchContacts().then(() => console.log("Contacts fetched"));
  }, [reload]);

  useEffectOnce(() => {
    const toggleButton = document.getElementById("toggleSearchForm");
    const searchFormContent = document.getElementById("searchFormContent");
    const toggleIcon = document.getElementById("toggleSearchIcon");

    // Add transition for smooth animation
    searchFormContent.style.transition =
      "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, margin 0.3s ease-in-out";
    searchFormContent.style.overflow = "hidden";
    searchFormContent.style.maxHeight = "0px";
    searchFormContent.style.opacity = "0";
    searchFormContent.style.marginTop = "0";

    function toggleSearchForm() {
      if (searchFormContent.style.maxHeight !== "0px") {
        // Hide the form
        searchFormContent.style.maxHeight = "0px";
        searchFormContent.style.opacity = "0";
        searchFormContent.style.marginTop = "0";
        toggleIcon.classList.remove("fa-chevron-up");
        toggleIcon.classList.add("fa-chevron-down");
      } else {
        // Show the form
        searchFormContent.style.maxHeight =
          searchFormContent.scrollHeight + "px";
        searchFormContent.style.opacity = "1";
        searchFormContent.style.marginTop = "1rem";
        toggleIcon.classList.remove("fa-chevron-down");
        toggleIcon.classList.add("fa-chevron-up");
      }
    }

    toggleButton.addEventListener("click", toggleSearchForm);

    return () => {
      toggleButton.removeEventListener("click", toggleSearchForm);
    };
  });

  return (
    <>
      <div className="flex items-center mb-6">
        <i className="fas fa-users text-blue-400 text-2xl mr-3"></i>
        <h1 className="text-2xl font-bold text-white">My Contacts</h1>
      </div>

      <Filter
        setEmail={setEmail}
        setPhone={setPhone}
        setName={setName}
        name={name}
        email={email}
        phone={phone}
        handleSearchContacts={handleSearchContacts}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom overflow-hidden border-2 border-dashed border-gray-700 card-hover animate-fade-in">
          <Link to="/dashboard/contacts/create" className="block p-6 h-full">
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-20 h-20 bg-gradient rounded-full flex items-center justify-center mb-5 shadow-lg transform transition-transform duration-300 hover:scale-110">
                <i className="fas fa-user-plus text-3xl text-white"></i>
              </div>
              <h2 className="text-xl font-semibold text-white mb-3">
                Create New Contact
              </h2>
              <p className="text-gray-300">Add a new contact to your list</p>
            </div>
          </Link>
        </div>

        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-gray-800 bg-opacity-80 rounded-xl shadow-custom border border-gray-700 overflow-hidden card-hover animate-fade-in"
          >
            <div className="p-6">
              <Link
                to={`/dashboard/contacts/${contact.id}`}
                className="block cursor-pointer hover:bg-gray-700 rounded-lg transition-all duration-200 p-3"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3 shadow-md">
                    <i className="fas fa-user text-white"></i>
                  </div>
                  <h2 className="text-xl font-semibold text-white hover:text-blue-300 transition-colors duration-200">
                    {contact.first_name} {contact.last_name}
                  </h2>
                </div>
                <div className="space-y-3 text-gray-300 ml-2">
                  <p className="flex items-center">
                    <i className="fas fa-user-tag text-gray-500 w-6"></i>
                    <span className="font-medium w-24">First Name:</span>
                    <span>{contact.first_name}</span>
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-user-tag text-gray-500 w-6"></i>
                    <span className="font-medium w-24">Last Name:</span>
                    <span>{contact.last_name}</span>
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-envelope text-gray-500 w-6"></i>
                    <span className="font-medium w-24">Email:</span>
                    <span>{contact.email}</span>
                  </p>
                  <p className="flex items-center">
                    <i className="fas fa-phone text-gray-500 w-6"></i>
                    <span className="font-medium w-24">Phone:</span>
                    <span>{contact.phone}</span>
                  </p>
                </div>
              </Link>
              <div className="mt-4 flex justify-end space-x-3">
                <Link
                  to={`/dashboard/contacts/${contact.id}/edit`}
                  className="px-4 py-2 bg-gradient text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center"
                >
                  <i className="fas fa-edit mr-2"></i> Edit
                </Link>
                <button
                  onClick={() => handleContactDelete(contact.id)}
                  className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 font-medium shadow-md flex items-center"
                >
                  <i className="fas fa-trash-alt mr-2"></i> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        getPages={getPages}
        handlePageChange={handlePageChange}
        page={page}
        totalPage={totalPage}
      />
    </>
  );
}
