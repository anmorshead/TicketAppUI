import React from 'react';

function Header() {
  return (
    <header className="bg-blue-500 text-white">
      <div className="flex items-center justify-between px-4 py-2">
        <h1 className="text-6xl font-bold mx-10">TicketHub</h1>
        <img src="tickets-icon.png" alt="Tickets Icon" className="w-20 h-20 mx-10" />
      </div>
      <nav className="bg-blue-600 px-16 py-2">
        <ul className="flex space-x-6 text-lg font-semibold">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Concerts</a></li>
          <li><a href="#" className="hover:underline">Sports</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
