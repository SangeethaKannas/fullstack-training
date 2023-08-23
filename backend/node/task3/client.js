import React from 'react';
import { useState, useEffect } from 'react';

const USERS_URL = 'https://example.com/api/users';

export default function Table() {

  const [users, setUsers] = useState({});
  const [page, setPage] = useState(0);

  useEffect(() => {
    getData();

    async function getData() {
      const res = await fetch(USERS_URL + `?page=${page}`);
      const data = await res.json();

      console.log(data);

      setUsers(data);
    }
  }, [page])

  const handleFirstPage = (e) => {
    e.preventDefault();
    setUsers({});
    setPage(0);
  }

  const handleNextPage = (e) => {
    e.preventDefault();
    setUsers({});
   setPage(page + 1);
  }

  const handlePrevPage = (e) => {
    e.preventDefault();
    setUsers({});
    setPage(page - 1);
  }

  const handleLastPage = (e) => {
    e.preventDefault();
    setUsers({});
    setPage(users.count % 10);
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {
            users && users.results && (
              users.results.map((user, index) => {
                return <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                </tr>
              })
            )
          }
        </tbody>
      </table>
      <section className="pagination">
        <button className="first-page-btn" disabled={!users || !users.results || page === 0} onClick={handleFirstPage}>first</button>
        <button className="previous-page-btn" disabled={!users || !users.results || page === 0} onClick={handlePrevPage}>previous</button>
        <button className="next-page-btn" disabled={!users || !users.results || (users.results.length%10 !== 0)} onClick={handleNextPage}>next</button>
        <button className="last-page-btn" disabled={!users || !users.results || (users.results.length%10 !== 0)} onClick={handleLastPage}>last</button>
      </section>
    </div>
  );
};
